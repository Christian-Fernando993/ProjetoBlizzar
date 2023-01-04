var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    wacthSlidesProgress: true,
    breakpoints: {
      320: {
        direction: 'horizontal'
      },
      991: {
        direction: 'vertical'
      },
    }
  });

  const progressSlide = document.querySelector('.js-progress');
  
  var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
      swiper: slide_thumbnail,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on: {
      init: function() {
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('animate');
        progressSlide.classList.add('active');
      },
      slideChangeTransitionStart: function() {
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('active');
      },
      slideChangeTransitionEnd: function() {
        progressSlide.classList.add('animate');
      },
    }
});

const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (event) => {
      event.preventDefault();
      
      allFilters.forEach(item => {
        item.classList.remove('active');
      });
      tabPane.forEach(tab => {
        tab.classList.remove('active');
      })
      tabPane[index].classList.add('active');
      filter.classList.add('active');
    })
  });

const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close-modal');

btnOpenModal.addEventListener('click', (event) => {
    event.preventDefault();

    let taghtml = document.documentElement;
    taghtml.classList.add('show-modal');

})
btnCloseModal.addEventListener('click', (event) => {
    event.preventDefault();
    
    let taghtml = document.documentElement;
    taghtml.classList.remove('show-modal');
})

const btnMenu = document.querySelectorAll('.js-btn-menu');
const MenuSite = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        MenuSite.forEach(itemMenu => {
            itemMenu.classList.remove('active');
            itemMenu.addEventListener('mouseleave', () => {
                itemMenu.classList.remove('active');
                btnMenu.forEach(itemBtn => {
                    itemBtn.classList.remove('active');
                })
            })
        })

        btnMenu.forEach(itemBtn => {
            itemBtn.classList.remove('active');
        })

        btn.classList.add('active');
        MenuSite[index].classList.add('active');
    })
})

//Menu Mobile
const btnMenuMobile = document.querySelector('.js-btn-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openMenuMobile() {
    document.documentElement.classList.toggle('menu-opened');
}

btnMenuMobile.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', openMenuMobile);


//Função para abrir o modal de login na versão Mobile

// const btnOpenModalMobile = document.querySelector('.js-open-modal-mobile');
// const btnCloseModalMobile = document.querySelector('.js-close-modal-mobile');


// btnOpenModalMobile.addEventListener('click', (event) => {
//     event.preventDefault();

//     let taghtmlMobile = document.documentElement;
//     taghtmlMobile.classList.add('show-modal-mobile');

// })

// btnCloseModalMobile.addEventListener('click', (event) => {
//     event.preventDefault();

//     let taghtmlMobile = document.documentElement;
//     taghtmlMobile.classList.remove('show-modal-mobile');
// })
