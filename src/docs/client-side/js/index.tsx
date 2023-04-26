import {
  flowerExamples,
  starExamples,
} from './examples';
import { initMobileMenu } from './menu/mobile-menu';
import { initMenuCollapsible, initMenuScroll } from './menu/side-menu';
import { handleDarkLightModes } from './dark-mode';
import particles from 'mz-particles';

const initAnimation = () => {
  const $placeholder = document.getElementById('hp-animation');
  if(!$placeholder) return;

  particles({
    $placeholder,
    particlesNumber: 100,

    minSize: 10,
    maxSize: 30,

    particlesColors: [
      '#fffc00', '#B22B05', '#DEA12E',
        '#B4BF0B', '#E38458', '#935412',
        '#47da87'
    ],
    connectionColor: '#b2af24',

    // stars -------------
    svgPathData: [
        'M58.67332 0c7.45433 10.43536 13.25172 19.52497 17.39217 27.26882 6.56698-2.996 14.30486-6.011 23.21231-9.04482.41164 14.68843.00671 26.69722-1.2148 36.02635 6.76344.84207 14.39137 2.18699 22.88277 4.03331-6.18796 11.0145-11.87514 20.01691-17.06154 27.00725 5.25822 1.7666 10.96362 3.91142 17.11577 6.43313-21.76577 26.57549-37.30383 39.13443-46.61418 37.67683-3.74365-.5861-7.26574-3.51633-10.17905-7.68338.472-5.52076.73228-10.97514.78228-16.36371 2.70058-5.95622 6.0788-11.03431 10.13468-15.2343 4.37592-4.5314 9.35987-7.85341 14.95183-9.96604a.931.931 0 0 0 .34058-.22415c.35708-.36977.3468-.959-.02297-1.31609-.6694-.64643-1.65487-.84193-2.52035-.5C82.13252 80.38116 77.17492 83.67676 73 88c-2.9904 3.09666-5.67606 6.82081-8.05584 11.17315-.15778-6.03152-.64987-12.24859-1.47628-18.6512l.14968-.61248c1.3851-5.51866 3.49158-10.37423 6.31944-14.5667 2.91171-4.3168 6.46768-7.7519 10.66792-10.3053a.75484.75484 0 0 0 .2337-.22292c.23313-.34563.14193-.81482-.2037-1.04795-.61627-.41568-1.41972-.4287-2.04913-.0332-4.30025 2.702-7.83962 6.11265-10.6181 10.23192-2.13597 3.1667-3.89664 6.86245-5.27992 11.08801-1.28178-8.21598-3.0965-16.72775-5.44412-25.5353-3.096-11.61516-2.40154-19.12183 2.0834-22.51998a.86327.86327 0 0 0 .28435-.37808c.1712-.44498-.05074-.94449-.49572-1.11568-.44497-.1712-.94448.05074-1.11568.49571l-.03201.0781c-1.11313 2.55823-7.77942 3.2974-2.99156 23.17734 2.2421 9.30957 3.96449 18.18312 5.16734 26.61949-.97124-2.14063-2.06362-4.1105-3.27713-5.9096-2.77848-4.11928-6.31785-7.52992-10.6181-10.23194-.62941-.39549-1.43287-.38247-2.04913.0332-.34563.23314-.43684.70233-.2037 1.04796a.75484.75484 0 0 0 .2337.22292c4.20023 2.5534 7.7562 5.9885 10.66792 10.3053 2.95081 4.37475 5.11615 9.47152 6.49601 15.29029.0085.03582.01922.07054.03377.1047.48568 5.24206.75122 10.29944.79606 15.17097-2.4781-4.66924-5.296-8.63882-8.45371-11.90873-4.17492-4.32325-9.13253-7.61885-14.87282-9.8868-.86548-.34193-1.85095-.14643-2.52035.5-.36977.35709-.38005.94632-.02297 1.31609a.931.931 0 0 0 .34058.22415c5.59196 2.11263 10.5759 5.43464 14.95183 9.96604 4.25585 4.40706 7.76558 9.78096 10.53093 16.12217-.069 3.1028-.20402 6.24951-.40504 9.44014.74946 1.43664 1.56516 2.79132 2.43515 4.0357-1.00333 11.78917-2.96704 23.8792-5.88906 36.26984-.13993.5934-.66957 1.01267-1.27925 1.01267-.46692 0-.84543-.37851-.84543-.84543a.8466.8466 0 0 1 .0173-.17023c2.90522-14.13383 4.75898-27.56802 5.56129-40.30255-.01196-.01857-.02228-.03833-.03258-.0581-2.93804 7.2666-7.50555 13.06029-12.7642 14.16895-9.2215 1.94413-25.39386-9.7823-48.51707-35.17928 5.85574-2.7672 11.3069-5.1551 16.3535-7.16369C11.69197 82.50978 6.08838 73.62038 0 62.78315c7.95005-1.72862 15.14322-3.01773 21.57951-3.86732-1.70229-8.73061-2.94071-19.65126-3.71542-32.76124 7.58997 1.86395 14.37489 3.78547 20.35474 5.76455C42.37833 23.14063 49.19681 12.50056 58.67333 0Z',
      'M87.83013 0c-14 14-14 29.33333 0 46 21 25-32.43145 60-49 60-.19935 0-.39869-.0042-.59797-.01255 7.08619-6.21018 11.67362-14.22984 13.76303-24.05977 4.5614-21.4597.56555-33.54498-11.98755-36.25582L39.943 45.658l.22215.0701c9.81728 3.21101 12.55675 15.02165 8.21842 35.4319-2.12755 10.00933-6.56305 18.12634-13.3065 24.35103 1.04573.2715 2.09961.43219 3.1551.47641-8.57298 7.51287-20.80434 12.3759-36.69332 14.5883l-1.35436-.28787a.23289.23289 0 0 1-.1825-.19756c-.0167-.12753.07315-.24445.20068-.26118 15.04296-1.9701 26.66776-6.7428 34.8744-14.3181C19.89489 101.5944 6.20894 74.65142 10.83013 46c3.33334-20.66667 29-36 77-46Z',
        'M32.64324 5.29856c2.59029-16.28774 1.63084 10.0274 5.03065 11.60571 2.26654 1.05222 5.50004-.2345 9.70048-3.86014-1.07502 7.90547-.63924 12.88644 1.30734 14.94292 1.3677 1.44492 4.26912.18726 8.70428-3.77298-3.93673 7.89951-4.80016 13.32876-2.59029 16.28773 1.87068 2.5048 6.43243 1.10188 13.68526-4.20876-1.12472 10.18734-2.92624 16.36787-5.40456 18.5416-1.70034 1.49135 2.3716 2.13893 12.2158 1.9427-5.58476 7.87184-9.07566 13.86557-10.47268 17.98119-.99577 2.93352 4.13046 4.15807 15.3787 3.67364L66.73695 96.6748l12.30295 2.93891c-14.36758 17.01214-25.45219 26.60399-33.25381 28.77553 12.96769 10.97549 31.47137 18.39846 55.51063 22.26853a.52936.52936 0 0 1 .34424.21152c.1719.2366.11945.56775-.11715.73965l-1.03508.75203-.95963-.12093c-25.44269-3.27218-44.86332-11.04652-58.26188-23.32302-11.00026-.05391-21.42406-7.75649-29.06976-20.13316C5.90336 98.59515 1.49196 85.23883.1915 70.37455c-2.98436-34.11136 29.86146-48.78825 32.45174-65.076ZM23.93616 44.8187l-1.03508.75203c-6.6714 31.01498-3.4286 55.57703 9.72845 73.68614 2.52947 3.48153 5.4087 6.70158 8.6377 9.66015a23.81493 23.81493 0 0 0 2.18333-.09033c.74274-.06498 1.52125-.2108 2.33553-.43745-3.98953-3.37666-7.45484-7.08912-10.39636-11.13778-12.50078-17.20584-16.04875-41.18155-10.6439-71.92711.04922-.28005-.13789-.54697-.41793-.5962a.51483.51483 0 0 0-.39174.09055Z',
        'M56.72612 0c1.76197 9.54577 1.8297 18.5861.2032 27.12098-1.62649 8.5349-4.8722 16.1707-9.73712 22.90742 4.33393-2.252 8.4744-3.5008 12.4214-3.74636 3.94701-.24556 9.07581.42653 15.3864 2.01627-9.08505 18.11728-15.91566 29.94085-20.49182 35.47072-15.6462 18.907-29.6972 23.22423-38.58333 20.50278-.28836-1.32611-.50289-2.65412-.64304-3.98574-1.37074-13.0236 4.3172-26.92098 17.0638-41.69214.11537-.13362.10052-.33546-.03313-.4508a.31964.31964 0 0 0-.24224-.07589l-.80662.08478c-13.53152 14.52997-19.5758 28.6499-18.13283 42.35982a38.10111 38.10111 0 0 0 .39956 2.79574c.30065.1536.60307.29479.90797.42403.47785.20255.97359.3831 1.48653.5402 2.53794 11.63025 10.8125 22.98369 24.82425 34.05861a.3291.3291 0 0 1 .12309.22364c.01898.18061-.11205.34241-.29265.3614l-.80662.08477-.58659-.43227c-14.8429-11.00877-23.39489-22.76223-25.65598-35.26037C5.03057 98.9635-1.27051 84.98683.21865 60.75646c.39413-6.41305 2.7909-17.71297 7.19028-33.89976 4.87926.86806 9.21223 2.70475 12.9989 5.51005 3.78667 2.8053 6.0879 5.88347 6.9037 9.23451 2.06274-9.0081 5.30845-16.6439 9.73713-22.90741C42.42484 11.09027 48.98399 4.85899 56.72612 0Z',
        'M37.6926 4.00663C56.78216-3.89666 77.25714 1.2936 89 7.53739c3.54229 1.88347 6.82105 4.5256 9.49805 7.88841C78.69208 16.79103 62.8596 20.49463 51 26.5374 27.88266 38.31626 16.762 59.7586 17.63803 90.86436l.68098 1.33651a.37197.37197 0 0 0 .32369.20302c.20538.00427.37535-.15876.37964-.36414.6272-30.13266 11.89173-50.77877 33.79362-61.93834 11.68636-5.9545 27.72596-9.66177 48.11878-11.12182-.73939-1.26166-1.55543-2.44678-2.43669-3.5538 18.41365-1.26779 40.26227-.51428 65.54527 2.26133l1.5947.17724.681 1.33651c.2076.40745.0456.90605-.36185 1.11366a.82775.82775 0 0 1-.45005.08689c-24.95206-2.24351-46.47618-2.71745-64.57238-1.42183 3.44886 5.89216 5.21358 13.45732 4.06526 22.5578-1.86958 14.81648-11.5583 35.79674-33 33-5.23337-.68262-12.82815 16.75836-12.82815 23.75836 0 .91152-.81695-.50066-2.03696-2.92679l-.25804-.516c-.79053-1.5888-1.72535-3.53344-2.70549-5.52071l-.32825-.66358C51.15087 83.24362 48.20432 77.7605 47 78.5374c-6.8913 4.44548-14.59055 21.02808-23.09775 49.7478C1.1145 86.039-4.18625 53.4564 8 30.5374c.97-1.8243-1.69667-5.15763-8-10 11.4965-1.944 18.06396-3.66905 19.70238-5.17516C21.1238 14.0556 20.55634 10.114 18 3.5374c10.53177 1.38786 17.09597 1.54427 19.6926.46924Z'
    ],

    // effects ------------
    rotate: true,
    // fadeInOut: true,

    // scale effect -------
    scaleInOut: true,
    maxScale: 1.75,
    minScale: 1,
    scaleStep: 0.005,
  });
};

const init = () => {
  const $special = document.getElementById('special-page');
  if($special){
    initAnimation();
    return;
  }

  initMobileMenu();
  initMenuScroll();
  initMenuCollapsible();
  handleDarkLightModes();
};


document.addEventListener('DOMContentLoaded', () => {
  init();
  starExamples();
  flowerExamples();
});

export {};
