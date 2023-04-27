function switchThemes() {
  // ? Base
  var body = document.body;
  var main = document.getElementById("main");

  // ? Header
  var header = document.getElementById("header");
  var logoBlack = document.querySelectorAll(".logo-image");
  var logoWhite = document.querySelectorAll(".logo-image-white");
  var navbar = document.querySelectorAll(".navbar-items");
  var loginButton = document.querySelectorAll(".login-button");
  var signupButton = document.querySelectorAll(".signup-button");
  var switchThemeButton = document.querySelectorAll(".theme-switch");
  var hamburgerMenu = document.querySelectorAll(".hamburger-menu");
  var hamburgerMenuWhite = document.querySelectorAll(".hamburger-menu-white");

  // ? Hero
  var discountButton = document.querySelectorAll(".discount-new");
  var heroTitle = document.querySelectorAll(".hero-content-title");
  var heroContent = document.querySelectorAll(".hero-content-text");

  // ? Partners
  var partnersText = document.querySelectorAll(".partners-text");

  // ? Features
  var featuresTitle = document.querySelectorAll(
    ".features-title-container-h4"
  );
  var cards = document.querySelectorAll(".cards");
  var cardTitle = document.querySelectorAll(".card-title");
  var cardDescription = document.querySelectorAll(".card-description");
  var bigCard = document.getElementById("big-card");

  // ? Create Card
  var createCard = document.querySelectorAll(".create-card-content-container");
  var createCardTitle = document.querySelectorAll(".top-container-title");
  var createCardText = document.querySelectorAll(".top-container-text");
  var getACard = document.querySelectorAll(".get-a-card-button");
  var whiteArrow = document.querySelectorAll(".white-arrow");
  var blackArrow = document.querySelectorAll(".black-arrow");

  // ? Footer
  var footerLogoBlack = document.querySelectorAll(".footer-logo");
  var footerLogoWhite = document.querySelectorAll(".footer-logo-white");
  var socialIcons = document.getElementsByClassName("social-icon");
  var socialIconsWhite = document.getElementsByClassName("social-icon-white");
  var footerCopyright = document.getElementById("footer-copyright");
  var footerCopyrightMobile = document.getElementById(
    "footer-mobile-copyright"
  );

  // ! ----------------------------------------------------------

  // ? Base
  body.classList.toggle("dark-background");
  main.classList.toggle("dark-background");

  // ? Header
  header.classList.toggle("header-dark");
  logoBlack.forEach(logoBlack => logoBlack.classList.toggle("logo-image-dark"));
  logoWhite.forEach(logoBlack => logoBlack.classList.toggle("logo-image-white-dark"));
  navbar.forEach(navbarItem => navbarItem.classList.toggle("navbar-items-dark"));
  loginButton.forEach(loginButton => loginButton.classList.toggle("login-button-dark"));
  signupButton.forEach(signupButton => signupButton.classList.toggle("signup-button-dark"));
  switchThemeButton.forEach(switchThemeButton => switchThemeButton.classList.toggle("theme-switch-dark"));
  hamburgerMenu.forEach(hamburgerMenu => hamburgerMenu.classList.toggle("hamburger-menu-dark"));
  hamburgerMenuWhite.forEach(hamburgerMenuWhite => hamburgerMenuWhite.classList.toggle("hamburger-menu-white-dark"));
  
  // ? Hero
  heroTitle.forEach(heroTitle => heroTitle.classList.toggle("hero-content-text-dark"));
  heroContent.forEach(heroContent => heroContent.classList.toggle("hero-content-text-dark"));
  discountButton.forEach(discountButton => discountButton.classList.toggle("discount-new-dark"));

  // ? Partners
  partnersText.forEach(partnersText => partnersText.classList.toggle("partners-text-dark"));

  // ? Features
  featuresTitle.forEach(featuresTitle => featuresTitle.classList.toggle("features-title-container-h4-dark"));
  cards.forEach(cards => cards.classList.toggle("cards-dark"));
  cardTitle.forEach(cardTitle => cardTitle.classList.toggle("card-title-dark"));
  cardDescription.forEach(cardDescription => cardDescription.classList.toggle("card-description-dark"));
  bigCard.classList.toggle("big-card-dark");

  // ? Create Card
  createCard.forEach(createCard => createCard.classList.toggle("create-card-content-container-dark"));
  createCardTitle.forEach(createCardTitle => createCardTitle.classList.toggle("top-container-title-dark"));
  createCardText.forEach(createCardText => createCardText.classList.toggle("top-container-text-dark"));
  getACard.forEach(getACard => getACard.classList.toggle("get-a-card-button-dark"))
  whiteArrow.forEach(whiteArrow => whiteArrow.classList.toggle("white-arrow-dark"))
  blackArrow.forEach(blackArrow => blackArrow.classList.toggle("black-arrow-dark"))
  
  // ? Footer
  footerLogoBlack.forEach(footerLogoBlack => footerLogoBlack.classList.toggle("footer-logo-dark"))
  footerLogoWhite.forEach(footerLogoWhite => footerLogoWhite.classList.toggle("footer-logo-white-dark"))
  socialIcons.classList.toggle("social-icon-dark");
  socialIconsWhite.classList.toggle("social-icon-white-dark");
  footerCopyright.classList.toggle("footer-copyright-dark");

  // ? Footer mobile
  footerCopyrightMobile.classList.toggle("footer-mobile-copyright-dark");
}
