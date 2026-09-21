// LOGO INF SCROLL

const logosTrack = document.querySelector(".logos-track");

logosTrack.innerHTML += logosTrack.innerHTML;

let logoOffset = 0;

function moveLogos() {
  logoOffset -= 1;

  if (Math.abs(logoOffset) >= logosTrack.scrollWidth / 2) {
    logoOffset = 0;
  }

  logosTrack.style.transform = `translateX(${logoOffset}px)`;

  requestAnimationFrame(moveLogos);
}
moveLogos();

// SCROLL CARDS

const cards = document.getElementById("cards");

let position = 0;

function getCardWidth() {
  const card = cards.children[0];
  const gap = 24;

  return card.offsetWidth + gap;
}

function moveRight() {
  const cardWidth = getCardWidth();

  position -= cardWidth;

  cards.style.transition = "transform 500ms ease";
  cards.style.transform = `translateX(${position}px)`;

  setTimeout(() => {
    cards.appendChild(cards.children[0]);

    position += cardWidth;

    cards.style.transition = "none";
    cards.style.transform = `translateX(${position}px)`;
  }, 500);
}

function moveLeft() {
  const cardWidth = getCardWidth();

  cards.insertBefore(
    cards.children[cards.children.length - 1],
    cards.children[0],
  );

  position -= cardWidth;

  cards.style.transition = "none";
  cards.style.transform = `translateX(${position}px)`;

  requestAnimationFrame(() => {localStorage
    requestAnimationFrame(() => {
      position += cardWidth;
      cards.style.transition = "transform 500ms ease";
      cards.style.transform = `translateX(${position}px)`;
    });
  });
}

    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      autoHeight: true,
      resistance: false,
      loop: true,
      loopAddBlankSlides: false,
      loopPreventsSliding: false,
      navigation: {
        nextEl: ".my-btn-next",
        prevEl: ".my-btn-prev"
      },
      // mousewheel: true, 
       breakpoints: {

        800: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
        
    }
    });

    // not my code 

    const accordions = document.querySelectorAll(".utility-accordion");

const utilityImages = [
    "/assets/images/baddie.png",
    "/assets/images/baddie.png",
    "/assets/images/baddie.png",
    "/assets/images/baddie.png"
];

const utilityImage = document.getElementById("utility-image");

accordions.forEach((accordion, index) => {

    const button = accordion.querySelector(".accordion-btn");

    button.addEventListener("click", () => {

        const isActive = accordion.classList.contains("active");

        accordions.forEach((item) => {

            item.classList.remove("active", "shadow-[0_4px_15px_rgba(0,63,99,0.12)]");

            const content = item.querySelector(".accordion-content");
            const arrow = item.querySelector(".accordion-arrow");
            const icon = item.querySelector(".accordion-icon");


            content.classList.remove("grid-rows-[1fr]");
            content.classList.add("grid-rows-[0fr]");

            arrow.classList.remove("rotate-180");

            icon.classList.remove("bg-[#003F63]", "text-white");
            icon.classList.add("bg-[#E8F8FC]", "text-[#00A8E8]");

        });

        if (!isActive) {

            accordion.classList.add(
                "active",
                "shadow-[0_4px_15px_rgba(0,63,99,0.12)]"
            );

            const content = accordion.querySelector(".accordion-content");
            const arrow = accordion.querySelector(".accordion-arrow");
            const icon = accordion.querySelector(".accordion-icon");


            content.classList.remove("grid-rows-[0fr]");
            content.classList.add("grid-rows-[1fr]");

            arrow.classList.add("rotate-180");

            icon.classList.remove("bg-[#E8F8FC]", "text-[#00A8E8]");
            icon.classList.add("bg-[#003F63]", "text-white",);




            utilityImage.classList.add("opacity-0");

            setTimeout(() => {
                utilityImage.src = utilityImages[index];
                utilityImage.classList.remove("opacity-0");
            }, 250);

        }

    });

    button.addEventListener("mouseenter", () => {

        if (!accordion.classList.contains("active")) {
            accordion.classList.add("shadow-[0_4px_15px_rgba(0,63,99,0.10)]");
        }

    });

    button.addEventListener("mouseleave", () => {

        if (!accordion.classList.contains("active")) {
            accordion.classList.remove("shadow-[0_4px_15px_rgba(0,63,99,0.10)]");
        }

    });

});

$('.testimonialSwiper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    nextArrow: '.testimonial-next',
    prevArrow: '.testimonial-prev',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

