const main = document.querySelector('main');
const burgerNav = document.querySelector('.s-header');
const burgerToggleList = document.querySelectorAll('[data-toggle=burger]');
const articleFigureList = document.querySelectorAll('.s-article-figure');

// Load
window.addEventListener('load', (e) => {
  for (let i = 0, ii = articleFigureList.length; i < ii; i += 1) {
    const articleFigure = articleFigureList[i];
    articleFigure.classList.add('has-load-transition');
  }
});

// Burger Menu
for (let i = 0, ii = burgerToggleList.length; i < ii; i += 1) {
  const thisBurgerToggle = burgerToggleList[i];

  let toogleAriaExpanded = function () {
    const currentAriaExpandedState =
      thisBurgerToggle.getAttribute('aria-expanded');

    if (!currentAriaExpandedState || currentAriaExpandedState === 'false') {
      thisBurgerToggle.setAttribute('aria-expanded', 'true');
    } else {
      thisBurgerToggle.setAttribute('aria-expanded', 'false');
    }
  };

  thisBurgerToggle.addEventListener('click', function (e) {
    e.preventDefault();
    burgerNav.classList.toggle('is-opened');
    toogleAriaExpanded();
  });

  thisBurgerToggle.addEventListener('keypress', function (e) {
    if (e.which == 13) {
      e.preventDefault();
      burgerNav.classList.toggle('is-opened');
      toogleAriaExpanded();
    }
  });
}

// Close Burger Nav on click <main>
main.addEventListener('click', function (e) {
  if (burgerNav.classList.contains('is-opened')) {
    burgerNav.classList.remove('is-opened');
    console.log('machin');
  }
});
