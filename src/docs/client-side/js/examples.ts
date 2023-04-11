import { createStar } from '../../../main/shapes/stars';
import { createSVG } from '../../../main/core';
import { getRandomHSLColorWithinRanges, hslToHex, getRandomInt } from 'mz-math';
import { createFlower } from '../../../main/shapes/flowers';

export const starExamples = () => {

  if(!document.querySelector('[data-examples="star-examples"]')) return;

  try{

    const $btn = document.getElementById('star-random-btn') as HTMLButtonElement;
    const $placeholder = document.getElementById('star-ph') as HTMLDivElement;

    const renderStar = () => {
      $placeholder.innerHTML = '';

      const $svg = createSVG({
        width: 200,
        height: 200
      });

      const hslColor = getRandomHSLColorWithinRanges(
          0, 360, // hue range
          60, 100, // saturation range
          30, 50, // lightness range
      );
      const hex = hslToHex(hslColor); // #1c1817

      const raysNumber = getRandomInt(4, 12);
      const type = getRandomInt(1, 3);

      const $star = createStar({
        raysNumber,
        centerX: 100,
        centerY: 100,
        outerRadius: type === 2 ? 80 : 100,
        innerRadius: 50,
        fill: hex,
        type: type,
      });

      $svg.append($star);

      $placeholder.append($svg);
    };

    $btn.addEventListener('click', () => {
      renderStar();
    });

    renderStar();
  }
  catch(ex) { console.error(ex); }

};

export const flowerExamples = () => {

  if(!document.querySelector('[data-examples="flower-examples"]')) return;

  try{

    const $btn = document.getElementById('flower-random-btn') as HTMLButtonElement;
    const $placeholder = document.getElementById('flower-ph') as HTMLDivElement;

    const renderflower = () => {
      $placeholder.innerHTML = '';

      const $svg = createSVG({
        width: 200,
        height: 200
      });

      const hslColor = getRandomHSLColorWithinRanges(
          0, 360, // hue range
          60, 100, // saturation range
          30, 50, // lightness range
      );
      const hex = hslToHex(hslColor); // #1c1817

      const petalsNumber = getRandomInt(4, 12);
      const innerRadius = getRandomInt(2, 60);

      const $flower = createFlower({
        petalsNumber,
        centerX: 100,
        centerY: 100,
        outerRadius: 100,
        innerRadius,
        fill: hex,
      });

      $svg.append($flower);

      $placeholder.append($svg);
    };

    $btn.addEventListener('click', () => {
      renderflower();
    });

    renderflower();
  }
  catch(ex) { console.error(ex); }

};