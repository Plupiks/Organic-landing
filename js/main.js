// Роблю висоту батьківського блоку на всю ширину секції
const heroSectionHeight = document.querySelector('.hero').offsetHeight - 125 + 'px';
const heroBody = document.querySelector('.hero__body');

// Роблю висоту батьківського блоку на всю ширину секції
const saleSectionHeight = document.querySelector('.sale').offsetHeight - 160 + 'px';
const saleBody = document.querySelector('.sale__body');

$(window).on('load resize change', function () {
  if (window.matchMedia('(min-width:450px)').matches) {
    // Роблю висоту батьківського блоку на всю ширину секції (для того щоб контент розмістився посередині)
    heroBody.style.height = heroSectionHeight;

    // Роблю висоту батьківського блоку на всю ширину секції (для того щоб контент розмістився посередині)
    saleBody.style.height = saleSectionHeight;
  } else {
    heroBody.style.height = '100%';
    saleBody.style.height = '100%';
  }

  // Вирівнюю текст у блоках по висоті
  if (window.matchMedia('(min-width:1200px)').matches) {
    textAlignHeight1();
  } else if (window.matchMedia('(min-width:992px)').matches) {
    textAlignHeight2();
  }
});

// Вирівнюю текст у products по висоті
function textAlignHeight1() {
  // Текст
  const productsText = document.querySelectorAll('.text-content__text');
  const productsTextHeight = Array.from(productsText).map((e) => e.offsetHeight);
  const maxHeightText = Math.max(...productsTextHeight);
  for (let i = 0; i < productsText.length; i++) {
    productsText[i].style.minHeight = maxHeightText + 'px';
  }
}

// Вирівнюю текст у about по висоті
function textAlignHeight2() {
  // Заголовок
  const aboutTitles = document.querySelectorAll('.about-block__title');
  const aboutTitlesHeight = Array.from(aboutTitles).map((e) => e.offsetHeight);
  const maxHeightTitle = Math.max(...aboutTitlesHeight);
  for (let i = 0; i < aboutTitles.length; i++) {
    aboutTitles[i].style.minHeight = maxHeightTitle + 'px';
  }
}

// Burger menu
const burgerMenu = document.querySelector('#showBtn');
const backdrop = document.querySelector('.backdrop');
const menuBody = document.getElementById('menu');
let clickCountMenu = 0;

burgerMenu.addEventListener('click', function () {
  clickCountMenu++;
  if (clickCountMenu % 2 !== 0) {
    backdrop.style.opacity = 1;
    backdrop.style.pointerEvents = 'all';
    menuBody.style.pointerEvents = 'all';
    menuBody.style.display = 'block';
  } else {
    backdrop.style.opacity = 0;
    backdrop.style.pointerEvents = 'none';
    menuBody.style.pointerEvents = 'none';
    menuBody.style.display = 'none';
  }
  console.log('click');
});

backdrop.addEventListener('click', function () {
  if (clickCountMenu % 2 !== 0) {
    clickCountMenu++;
    burgerMenu.checked = false;
    backdrop.style.opacity = 0;
    backdrop.style.pointerEvents = 'none';
    menuBody.style.pointerEvents = 'none';
    menuBody.style.display = 'none';
  }
});

const links = document.querySelectorAll('.nav-box--link');

links.forEach(function (el) {
  el.addEventListener('click', function () {
    clickCountMenu++;
    burgerMenu.checked = false;
    backdrop.style.opacity = 0;
    backdrop.style.pointerEvents = 'none';
    menuBody.style.pointerEvents = 'none';
    menuBody.style.display = 'none';
  });
});

// Плавна прокрутка до блоку
const anchors = document.querySelectorAll('a[href^="#s-"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href');
    if (window.matchMedia('(min-width: 900px)').matches) {
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}

// Прокрутка до геро блока
const headerLink = document.querySelector('.header--logo');
headerLink.addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('#s-hero').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// Прокрутка до геро блока
const headerLink2 = document.querySelector('.fli--logo');
headerLink2.addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('#s-hero').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// Активний клас для навігації при скролі
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (window.matchMedia('(min-width: 992px)').matches) {
        if (entry.isIntersecting) {
          document.querySelectorAll('a[href^="#s-"]').forEach((link) => {
            // Забираємо хештег і зрівнюємо id
            if (link.getAttribute('href').replace('#', '') === entry.target.id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      } else {
        document.querySelectorAll('a[href^="#s-"]').forEach((link) => {
          link.classList.remove('active');
        });
      }
    });
  },
  {
    threshold: 0.4,
  }
);

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});
