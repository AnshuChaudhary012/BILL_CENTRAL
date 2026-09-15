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
