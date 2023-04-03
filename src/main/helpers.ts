export const appendOnce = ($parent: SVGSVGElement|SVGElement, $el: SVGElement) => {
    const tagName = $el.tagName.toLowerCase().trim();
    if($parent.querySelector(tagName)) return;

    $parent.append($el);
};

export const prependOnce = ($parent: SVGSVGElement|SVGElement, $el: SVGElement) => {
    const tagName = $el.tagName.toLowerCase().trim();
    if($parent.querySelector(tagName)) return;

    $parent.prepend($el);
};