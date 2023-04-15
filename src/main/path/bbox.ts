import { parsePath } from './index';
import { maximizeAbsolutePath, pathDataToAbsolute } from './convert';
import { EPathDataCommand } from './interfaces';
import {
    degreesToRadians,
    Matrix2, mMulVector,
    setDecimalPlaces,
    v2CubicBezierBBox, v2MulScalar,
    v2QuadraticBezierBBox, v2Sum,
    Vector2
} from 'mz-math';

export interface IBBox {
    x: number;
    y: number;
    w: number;
    h: number;
    x2: number;
    y2: number;
}

/**
 * https://www.w3.org/TR/SVG11/implnote.html#ArcConversionEndpointToCenter
 */
export const getSVGArcCenter = (
    startX: number,
    startY: number,
    rx: number,
    ry: number,
    angleRad: number,
    largeArcFlag: number,
    sweepFlag: number,
    endX: number,
    endY: number
) : Vector2 | null => {
    // rx ry x-axis-rotation large-arc-flag sweep-flag x y

    // F.6.5: Step 1 ---------------------------------------
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);

    const rotationMatrix: Matrix2 = [
        [cos, -sin],
        [sin, cos],
    ];
    const posVector1: Vector2 = [
        (startX - endX) / 2,
        (startY - endY) / 2,
    ];

    // Compute (x1′, y1′)
    const posVector2 = mMulVector(rotationMatrix, posVector1);

    // F.6.5: Step 2 ---------------------------------------
    const rx2 = rx ** 2;
    const ry2 = ry ** 2;
    const posx2 = posVector2[0] ** 2;
    const posy2 = posVector2[1] ** 2;

    const t1 = rx2 * ry2 - rx2 * posy2 - ry2 * posx2;
    const t2 = rx2 * posy2 + ry2 * posx2;
    if(t2 === 0) return null;

    const t3 = t1 / t2;
    if(t3 < 0) return null;

    let t4 = Math.sqrt(t3);

    const posVector3: Vector2 = [
        rx * posVector2[1] / ry,
        -ry *  posVector2[0] / rx,
    ];

    if(largeArcFlag === sweepFlag){
        t4 = -t4;
    }

    const centerVector1: Vector2 = v2MulScalar(posVector3, t4);

    // F.6.5: Step 3 ---------------------------------------
    const rotationMatrix2: Matrix2 = [
        [cos, sin],
        [-sin, cos],
    ];

    const centerVector2: Vector2 = mMulVector(rotationMatrix2, centerVector1) as Vector2;
    const posVector4: Vector2 = [
        (startX + endX) / 2,
        (startY + endY) / 2,
    ];

    return v2Sum(centerVector2, posVector4);


    /*if (rx < 0) {
        rx *= -1;
    }

    if (ry < 0) {
        ry *= -1;
    }

    if (rx === 0 || ry === 0) {
        xmin = x1 < x2 ? x1 : x2;
        xmax = x1 > x2 ? x1 : x2;
        ymin = y1 < y2 ? y1 : y2;
        ymax = y1 > y2 ? y1 : y2;

        return formatBBox(xmin, xmax, ymin, ymax);
    }

    const x1prime: number = Math.cos(phi) * (x1 - x2) / 2 + Math.sin(phi) * (y1 - y2) / 2;
    const y1prime: number = -Math.sin(phi) * (x1 - x2) / 2 + Math.cos(phi) * (y1 - y2) / 2;

    let radicant: number = (rx * rx * ry * ry - rx * rx * y1prime * y1prime - ry * ry * x1prime * x1prime);
    radicant /= (rx * rx * y1prime * y1prime + ry * ry * x1prime * x1prime);

    let cxPrime = 0;
    let cyPrime = 0;

    if (radicant < 0) {
        const ratio: number = rx / ry;
        radicant = y1prime * y1prime + x1prime * x1prime / (ratio * ratio);
        if (radicant < 0) {
            xmin = (x1 < x2 ? x1 : x2);
            xmax = (x1 > x2 ? x1 : x2);
            ymin = (y1 < y2 ? y1 : y2);
            ymax = (y1 > y2 ? y1 : y2);

            return formatBBox(xmin, xmax, ymin, ymax);
        }
        ry = Math.sqrt(radicant);
        rx = ratio * ry;
    }
    else {
        const factor = (largeArc == sweep ? -1 : 1) * Math.sqrt(radicant);
        cxPrime = factor * rx * y1prime / ry;
        cyPrime = -factor * ry * x1prime / rx;
    }

    const cx = cxPrime * Math.cos(phi) - cyPrime * Math.sin(phi) + (x1 + x2) / 2;
    const cy = cxPrime * Math.sin(phi) + cyPrime * Math.cos(phi) + (y1 + y2) / 2;*/
};

const getAngle = (bx: number, by: number): number => {
    const PI2 = 2 * Math.PI;
    const t1 = by > 0 ? 1 : -1;
    return ((PI2 + t1 * Math.acos(bx / Math.sqrt(bx * bx + by * by))) % PI2);
};

const formatBBox = (xmin: number, xmax: number, ymin: number, ymax: number) : IBBox => {
    return {
        x: xmin,
        y: ymin,
        w: Math.abs(ymax - ymin),
        h: Math.abs(xmax - xmin),
        x2: xmax,
        y2: ymax,
    };
};

const getArcBoundingBox = (
    x1: number, y1: number,
    rx: number, ry: number,
    angleRad: number, largeArc: boolean,
    sweep: boolean,
    x2: number, y2: number
) : IBBox => {

    let xmin, xmax, ymin, ymax;

    const center = getSVGArcCenter(
        x1,
        y1,
        rx,
        ry,
        angleRad,
largeArc ? 1 : 0,
sweep ? 1 : 0,
        x2,
        y2
    );
    if(!center) return formatBBox(0, 0, 0, 0);

    const cx = center[0];
    const cy = center[1];

    let txMin: number, txMax: number, tyMin: number, tyMax: number;

    if (angleRad === 0 || angleRad === Math.PI) {
        xmin = cx - rx;
        txMin = getAngle(-rx, 0);
        xmax = cx + rx;
        txMax = getAngle(rx, 0);
        ymin = cy - ry;
        tyMin = getAngle(0, -ry);
        ymax = cy + ry;
        tyMax = getAngle(0, ry);
    }
    else if (angleRad === Math.PI / 2 || angleRad === 3.0 * Math.PI / 2) {
        xmin = cx - ry;
        txMin = getAngle(-ry, 0);
        xmax = cx + ry;
        txMax = getAngle(ry, 0);
        ymin = cy - rx;
        tyMin = getAngle(0, -rx);
        ymax = cy + rx;
        tyMax = getAngle(0, rx);
    }
    else {
        txMin = -Math.atan(ry * Math.tan(angleRad) / rx);
        txMax = Math.PI - Math.atan(ry * Math.tan(angleRad) / rx);

        xmin = cx + rx * Math.cos(txMax) * Math.cos(angleRad) - ry * Math.sin(txMin) * Math.sin(angleRad);
        xmax = cx + rx * Math.cos(txMax) * Math.cos(angleRad) - ry * Math.sin(txMax) * Math.sin(angleRad);

        // swap ------------------------
        if (xmin > xmax) {
            [xmin, xmax] = [xmax, xmin];
            [txMin, txMax] = [txMax, txMin];
        }

        let tmpY = cy + rx * Math.cos(txMin) * Math.sin(angleRad) + ry * Math.sin(txMin) * Math.cos(angleRad);
        txMin = getAngle(xmin - cx, tmpY - cy);
        tmpY = cy + rx * Math.cos(txMax) * Math.sin(angleRad) + ry * Math.sin(txMax) * Math.cos(angleRad);
        txMax = getAngle(xmax - cx, tmpY - cy);

        tyMin = Math.atan(ry / (Math.tan(angleRad) * rx));
        tyMax = Math.atan(ry / (Math.tan(angleRad) * rx)) + Math.PI;
        ymin = cy + rx * Math.cos(tyMin) * Math.sin(angleRad) + ry * Math.sin(tyMin) * Math.cos(angleRad);
        ymax = cy + rx * Math.cos(tyMax) * Math.sin(angleRad) + ry * Math.sin(tyMax) * Math.cos(angleRad);

        // swap ------------------------
        if (ymin > ymax) {
            [ymin, ymax] = [ymax, ymin];
            [tyMin, tyMax] = [tyMax, tyMin];
        }

        let tmpX = cx + rx * Math.cos(tyMin) * Math.cos(angleRad) - ry * Math.sin(tyMin) * Math.sin(angleRad);
        tyMin = getAngle(tmpX - cx, ymin - cy);
        tmpX = cx + rx * Math.cos(tyMax) * Math.cos(angleRad) - ry * Math.sin(tyMax) * Math.sin(angleRad);
        tyMax = getAngle(tmpX - cx, ymax - cy);
    }

    let angle1 = getAngle(x1 - cx, y1 - cy);
    let angle2 = getAngle(x2 - cx, y2 - cy);

    if (!sweep){
        [angle1, angle2] = [angle2, angle1];
    }

    let otherArc = false;

    if (angle1 > angle2) {
        // swap ------------------------
        [angle1, angle2] = [angle2, angle1];
        otherArc = true;
    }

    if ((!otherArc && (angle1 > txMin || angle2 < txMin)) || (otherArc && !(angle1 > txMin || angle2 < txMin))) {
        xmin = Math.min(x1, x2);
    }

    if ((!otherArc && (angle1 > txMax || angle2 < txMax)) || (otherArc && !(angle1 > txMax || angle2 < txMax))) {
        xmax = Math.max(x1, x2);
    }

    if ((!otherArc && (angle1 > tyMin || angle2 < tyMin)) || (otherArc && !(angle1 > tyMin || angle2 < tyMin))) {
        ymin = Math.min(y1, y2);
    }

    if ((!otherArc && (angle1 > tyMax || angle2 < tyMax)) || (otherArc && !(angle1 > tyMax || angle2 < tyMax))) {
        ymax = Math.max(y1, y2);
    }

    return formatBBox(xmin, xmax, ymin, ymax);
}

/**
 * Determine the coordinates of the smallest rectangle in which the path fits.
 */
export const getPathBBox = (d?: string, decimalPlaces = 2) : IBBox|null => {
    if(!d || d.trim() === '') return null;

    const parsed = parsePath(d);
    if(parsed.errors.length > 0) return null;

    const abs = pathDataToAbsolute(parsed);
    if(!abs || abs.commands.length <= 0) return null;

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    const max = maximizeAbsolutePath(abs);

    // current (x, y) pair
    let x = max.commands[0].params[0];
    let y = max.commands[0].params[1];

    // the latest 'M' coordinates
    let mx = x;
    let my = y;

    for(const item of max.commands) {

        switch (item.command){
            case EPathDataCommand.MoveToAbs: {
                minX = Math.min(minX, item.params[0]);
                minY = Math.min(minY, item.params[1]);

                maxX = Math.max(maxX, item.params[0]);
                maxY = Math.max(maxY, item.params[1]);

                mx = item.params[0];
                my = item.params[1];
                break;
            }

            case EPathDataCommand.ClosePathAbs:{
                x = mx;
                y = my;
                break;
            }

            case EPathDataCommand.LineToAbs:{
                minX = Math.min(minX, item.params[0]);
                minY = Math.min(minY, item.params[1]);

                maxX = Math.max(maxX, item.params[0]);
                maxY = Math.max(maxY, item.params[1]);

                x = item.params[0];
                y = item.params[1];
                break;
            }

            case EPathDataCommand.CubicCurveToAbs:{
                const startControlPoint: Vector2 = [x, y];
                const centerControlPoint1: Vector2 = [item.params[0], item.params[1]];
                const centerControlPoint2: Vector2 = [item.params[2], item.params[3]];
                const endControlPoint: Vector2 = [item.params[4], item.params[5]];
                const bbox = v2CubicBezierBBox(startControlPoint, centerControlPoint1, centerControlPoint2, endControlPoint);

                minX = bbox.x;
                minY = bbox.y;

                maxX = bbox.x2;
                maxY = bbox.y2;

                x = item.params[4];
                y = item.params[5];
                break;
            }

            case EPathDataCommand.QuadraticCurveToAbs:{
                const startControlPoint: Vector2 = [x, y];
                const centerControlPoint: Vector2 = [item.params[0], item.params[1]];
                const endControlPoint: Vector2 = [item.params[2], item.params[3]];

                const bbox = v2QuadraticBezierBBox(startControlPoint, centerControlPoint, endControlPoint);

                minX = bbox.x;
                minY = bbox.y;

                maxX = bbox.x2;
                maxY = bbox.y2;

                x = item.params[2];
                y = item.params[3];

                break;
            }

            case EPathDataCommand.ArcAbs:{
                // rx ry x-axis-rotation large-arc-flag sweep-flag x y
                const rx = item.params[0];
                const ry = item.params[1];
                const angleDeg = item.params[2];
                const largeArcFlag = item.params[3];
                const sweepFlag = item.params[4];
                const endX = item.params[5];
                const endY = item.params[6];

                //const arcCenter = getSVGArcCenter(x, y, rx, ry, angleDeg, largeArcFlag, sweepFlag, endX, endY);
                //console.log('arcCenter', arcCenter)

                const bbox = getArcBoundingBox(x, y, rx, ry, degreesToRadians(angleDeg), largeArcFlag === 1, sweepFlag === 1, endX, endY);

                minX = bbox?.x ?? 0;
                minY = bbox?.y ?? 0;

                maxX = bbox?.x2 ?? 0;
                maxY = bbox?.y2 ?? 0;

                x = item.params[5];
                y = item.params[6];
                break;
            }
        }
    }

    return {
        x: setDecimalPlaces(minX, decimalPlaces),
        y: setDecimalPlaces(minY, decimalPlaces),
        w: setDecimalPlaces(Math.abs(maxX - minX), decimalPlaces),
        h: setDecimalPlaces(Math.abs(maxY - minY), decimalPlaces),
        x2: setDecimalPlaces(maxX, decimalPlaces),
        y2: setDecimalPlaces(maxY, decimalPlaces),
    };
};