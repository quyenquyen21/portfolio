/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*==== MENU SHOW ====*/
/* Validate if constant exits */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
/*==== MENU HIDDEN ====*/
/* Validate if constant exits */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // when we click on ech nav_link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((nav) => nav.addEventListener('click', linkAction));
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  //When the scroll is greater then 50 viewport height, add th scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  //When the scroll is greater then 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const sendEMail = (e) => {
  e.preventDefault();
  //serviceId - templateId - #form - publicKey
  emailjs
    .sendForm(
      'service_rb8i0no',
      'template_m00dv7f',
      '#contact-form',
      'WFTsTtHY-7k7PAN10'
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully!';

        // Remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error)';
      }
    );
};
contactForm.addEventListener('submit', sendEMail);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector(
      '.nav__menu a[href*=' + sectionId + ']'
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  //reset:true // Animation repeat
})
sr.reveal(`.home__data,.home__social,.contact__container,.footer__container`)
sr.reveal(`.home__image`,{origin:'bottom'})
sr.reveal(`.about__data, .skills__data`,{origin:'left'})
sr.reveal(`.about__image,.skills__content`,{origin:'right'})
sr.reveal(`.services__card,.projects__card`,{interval:100})
