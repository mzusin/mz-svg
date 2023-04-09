
## Browser Usage

The library can also be used directly in browsers without TypeScript. First, download the [mz-svg.min.js](https://github.com/mzusin/mz-svg/blob/main/dist/mz-svg.min.js) file from the GitHub repository. Then use the **mzSVG** global namespace to call any API or function.

```html
<script src="mz-svg.min.js"></script>
<script>
    const $svg = mzSVG.createSVG({
        width: 100,
        height: 200
    });
    console.log($svg); // SVG element 100x200
</script>
```

The library is also available on the [jsDelivr CND](https://cdn.jsdelivr.net/npm/mz-svg/dist/mz-svg.min.js):

```html
<script src="https://cdn.jsdelivr.net/npm/mz-svg/dist/mz-svg.min.js"></script>
<script>
    const $svg = mzSVG.createSVG({
        width: 100,
        height: 200
    });
    console.log($svg);
</script>
```