import { createPath } from './primitive-shapes';
import { IPrimitiveShapeProps } from '../../interfaces';

export const getRectPathD = (props: {
    x: number,
    y: number,
    width: number,
    height: number,
    rx?: number,
    ry?: number,
}) => {
    const {
        x, y,
        width, height,
        rx: _rx,
        ry: _ry,
    } = props;

    const rx = _rx || 0;
    const ry = _ry || 0;

    if (rx || ry){

        const w = width - 2 * rx;
        const h = height - 2 * ry;

        return `M${ x + rx } ${ y }h${ w }s${ rx } 0 ${ rx } ${ ry }v${ h }s0 ${ ry } ${ -rx } ${ ry }h${ -w }s${ -rx } 0 ${ -rx } ${ -ry }v${ -h }s0 ${ -ry } ${ rx } ${ -ry }z`;
    }

    return `M${ x } ${ y }h${ width }v${ height }h${ -width }z`;
};

export interface ICreateRectPathProps extends IPrimitiveShapeProps{
    x: number;
    y: number;
    width: number;
    height: number;
    rx?: number;
    ry?: number;
}

export const createRectPath = (props: ICreateRectPathProps) : SVGPathElement => {

    const pathProps = {
        ...props,
        d: getRectPathD({
            x: props.x,
            y: props.y,
            width: props.width,
            height: props.height,
            rx: props.rx,
            ry: props.ry,
        }),
    };

    return createPath(pathProps);
};