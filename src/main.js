/* Swiper */


let swiper;

const swiperInit = function() {
    if (!swiper) {
        swiper = new Swiper(".swiper", {
            loop: true,
            slidesPerView: 'auto',
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
};

const widthTablet = window.matchMedia('(max-width: 767px)');

const destroySwiper = function (event) {
    if (!event.matches && swiper) {
        swiper.destroy();
        swiper = undefined;
    } else if (event.matches) {
        swiperInit();
    }
};

destroySwiper(widthTablet);
widthTablet.addEventListener('change', destroySwiper);


/* Hiding items */


const toggleButtonDevices = document.getElementById('toggle-button-devices');
const toggleButtonBrands = document.getElementById('toggle-button-brands');
const brandsItems = document.querySelectorAll('.brands__item');
const devicesItems = document.querySelectorAll('.devices__item');

function hideItems() {
    if (window.innerWidth < 1016) {
      brandsItems.forEach((item, index) => {
        if (index >= 6) {
          item.classList.add('hidden');
        } else {
          item.classList.remove('hidden');
        }
      })

      devicesItems.forEach((item, index) => {
        if (index >= 3) {
          item.classList.add('hidden');
        } else {
          item.classList.remove('hidden');
        }
      });
    } else {
      brandsItems.forEach((item, index) => {
        if (index >= 8) {
          item.classList.add('hidden');
        } else {
          item.classList.remove('hidden');
        }
      })

      devicesItems.forEach((item, index) => {
        if (index >= 4) {
          item.classList.add('hidden');
        } else {
          item.classList.remove('hidden');
        }
      });
    }
}

hideItems();
  
window.addEventListener('resize', hideItems);
  
toggleButtonDevices.addEventListener('click', function () {
  if (toggleButtonDevices.textContent === 'Показать все') {
    devicesItems.forEach(item => item.classList.remove('hidden'));
    toggleButtonDevices.textContent = 'Скрыть';
    toggleButtonDevices.classList.add('rotate-decor');
  } else {
    hideItems();
    toggleButtonDevices.textContent = 'Показать все';
    toggleButtonDevices.classList.remove('rotate-decor');
  }
});

toggleButtonBrands.addEventListener('click', function () {
  if (toggleButtonBrands.textContent === 'Показать все') {
    brandsItems.forEach(item => item.classList.remove('hidden'));
    toggleButtonBrands.textContent = 'Скрыть';
    toggleButtonBrands.classList.add('rotate-decor');
  } else {
    hideItems();
    toggleButtonBrands.textContent = 'Показать все';
    toggleButtonBrands.classList.remove('rotate-decor');
  }
});
