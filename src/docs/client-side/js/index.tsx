import {
  flowerExamples,
  starExamples,
} from './examples';

const initMobileMenu = () => {
  const $btn = document.getElementById('mobile-menu-btn');
  if(!$btn) return;

  $btn.addEventListener('click', (evt) => {
    evt.stopPropagation();
    document.body.classList.toggle('mobile-menu-opened');
  });

  document.body.addEventListener('click', () => {
    document.body.classList.remove('mobile-menu-opened');
  });

  const $sideMenu = document.getElementById('side-menu');
  if(!$sideMenu) return;

  $sideMenu.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });

  const $close = document.getElementById('mobile-menu-close-btn');
  if(!$close) return;

  $close.addEventListener('click', () => {
    document.body.classList.remove('mobile-menu-opened');
  });
};

const initMenuScroll = () => {
  const $menu = document.querySelector('.side-menu');
  if(!$menu) return;

  const path = window.location.pathname;
  const $link = $menu.querySelector(`a[href='${ path }']`);
  if(!$link) return;

  $link.scrollIntoView({
    block: 'center',
  });
};

const initMenuCollapsible = () => {
    const $titles =  document.querySelectorAll('.side-menu [data-collapsible-title]');

    for(const $title of $titles){
      $title.addEventListener('click', () => {
        const isOpened = $title.getAttribute('data-opened') === 'true';

        $title.setAttribute('data-opened', (!isOpened).toString());

        const $arrow = $title.querySelector('[data-arrow]');
        if(!$arrow) return;

        $arrow.classList.toggle('rotate-90', !isOpened);
        $title.nextElementSibling?.classList.toggle('hidden', isOpened);
      });
    }
};

const handleDarkLightModes = () => {
  const $moveToDarkBtn = document.getElementById('move-to-dark-mode-btn') as HTMLButtonElement;
  const $moveToLightBtn = document.getElementById('move-to-light-mode-btn') as HTMLButtonElement;

  $moveToDarkBtn?.addEventListener('click', () => {
    document.documentElement.classList.add('dark');
    $moveToDarkBtn.classList.add('hidden');
    $moveToLightBtn.classList.remove('hidden');
  });

  $moveToLightBtn?.addEventListener('click', () => {
    document.documentElement.classList.remove('dark');
    $moveToLightBtn.classList.add('hidden');
    $moveToDarkBtn.classList.remove('hidden');
  });
};

const init = () => {
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
