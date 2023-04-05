import { getCommonAttributes, setAttributes, SVG_NAMESPACE } from '../core';
import { IPrimitiveShapeProps } from '../../interfaces';

export interface ICreatePathProps extends IPrimitiveShapeProps{
    d?: string;
    pathLength?: string|number;
}

export const createPath = (props: ICreatePathProps) : SVGPathElement => {

    const {
        document: _document,
        d: _d,
    } = props;

    const doc = _document || window.document;

    const $path = doc.createElementNS(SVG_NAMESPACE, 'path');

    if(_d){
        // remove newlines and double spaces
        const d = _d.replace(/\s\s+/g, ' ');

        $path.setAttribute('d', d);
    }

    setAttributes($path, [
        ['d', _d],
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
    ]);

    return $path;
};

export interface ICreateRectProps extends IPrimitiveShapeProps{
    x?: number|string;
    y?: number|string;
    width?: number|string;
    height?: number|string;
    rx?: number|string;
    ry?: number|string;
    pathLength?: string|number;
}

export const createRect = (props: ICreateRectProps) : SVGRectElement => {
    const {
        document: _document
    } = props;

    const doc = _document || window.document;

    const $rect = doc.createElementNS(SVG_NAMESPACE, 'rect');

    setAttributes($rect, [
        ['x', props.x],
        ['y', props.y],
        ['rx', props.rx],
        ['ry', props.ry],
        ['width', props.width],
        ['height', props.height],
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
    ]);

    return $rect;
};

export interface ICreateCircleProps extends IPrimitiveShapeProps{
    cx?: string|number;
    cy?: string|number;
    r?: string|number;
    pathLength?: string|number;
}

export const createCircle = (props: ICreateCircleProps) : SVGCircleElement => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;

    const $circle = doc.createElementNS(SVG_NAMESPACE, 'circle');

    setAttributes($circle, [
        ['cx', props.cx],
        ['cy', props.cy],
        ['r', props.r],
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
    ]);

    return $circle;
};

export interface ICreateEllipseProps extends IPrimitiveShapeProps{
    cx?: string|number;
    cy?: string|number;
    rx?: string|number;
    ry?: string|number;
    pathLength?: string|number;
}

export const createEllipse = (props: ICreateEllipseProps) : SVGEllipseElement => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;

    const $ellipse = doc.createElementNS(SVG_NAMESPACE, 'ellipse');

    setAttributes($ellipse, [
        ['cx', props.cx],
        ['cy', props.cy],
        ['rx', props.rx],
        ['ry', props.ry],
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
    ]);

    return $ellipse;
};

export interface ICreateLineProps extends IPrimitiveShapeProps{
    x1?: string|number;
    y1?: string|number;
    x2?: string|number;
    y2?: string|number;
    pathLength?: string|number;
}

export const createLine = (props: ICreateLineProps) : SVGLineElement => {
    const {
        document: _document,
    } = props;

    const doc = _document || window.document;

    const $line = doc.createElementNS(SVG_NAMESPACE, 'line');

    setAttributes($line, [
        ['x1', props.x1],
        ['x2', props.x2],
        ['y1', props.y1],
        ['y2', props.y2],
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
    ]);

    return $line;
};

export interface ICreatePolygonProps extends IPrimitiveShapeProps{
    points?: string;
    pathLength?: string|number;
}

export const createPolygon = (props: ICreatePolygonProps) : SVGPolygonElement => {

    const {
        document: _document
    } = props;

    const doc = _document || window.document;

    const $polygon = doc.createElementNS(SVG_NAMESPACE, 'polygon');

    setAttributes($polygon, [
        ['id', props.id],
        ['class', props.classes],
        ['style', props.style],
        ['points', props.points],
        ['pathLength', props.pathLength],
        ...getCommonAttributes(props),
    ]);

    return $polygon;
};
