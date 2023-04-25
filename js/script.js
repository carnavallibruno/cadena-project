function switchThemes () {

  // ? Base
  var body = document.body;
  var main = document.getElementById("main");

  // ? Header
  var navbar = document.getElementsByClassName("navbar-items");
  var loginButton = document.getElementById("login-button");
  var signupButton = document.getElementById("signup-button");
  var switchThemeButton = document.getElementById("theme-switch");

  // ? Hero
  var discountButton = document.getElementyId("discount-new");
  var heroTitle = document.getElementById("hero-content-title");
  var heroContent = document.getElementById("hero-content-text");

  // ? Partners
  var partnersText = document.getElementById("partners-text");

  // ? Features
  var featuresTitle = document.getElementById("features-title-container-h4features-title-container-h4");
  var cards = document.getElementsByClassName("cards");
  var cardTitle = document.getElementsByClassName("card-title");
  var cardDescription = document.getElementsByClassName("card-description");
  var bigCard = document.getElementById("big-card");

  // ? Create Card
  var createCard = document.getElementById("create-card-content-container");
  var createCardTitle = document.getElementById("top-container-title");
  var createCardText = document.getElementById("top-container-text");
  var getACard = document.getElementById("get-a-card-button");

  // ? Footer
  var footerCopyright = document.getElementById("footer-copyright");
  var footerCopyrightMobile = document.getElementById("footer-mobile-copyright");

  // ! ----------------------------------------------------------

  // ? Base
  body.classList.toggle("dark-background");
  main.classList.toggle("dark-background");

  // ? Header
  navbar.classList.toggle("navbar-items-dark");
  loginButton.classList.toggle("login-button-dark");
  signupButton.classList.toggle("signup-button-dark");
  discountButton.classList.toggle("discount-new-dark");
  switchThemeButton.classList.toggle("theme-switch");

  // ? Hero
  heroTitle.classList.toggle("hero-content-title-dark");
  heroContent.classList.toggle("hero-content-text-dark");

  // ? Partners
  partnersText.classList.toggle("partners-text-dark");

  // ? Features
  featuresTitle.classList.toggle("features-title-container-h4-dark");
  cards.classList.toggle("cards-dark");
  cardTitle.classList.toggle("card-title-dark");
  cardDescription.classList.toggle("card-description-dark");
  bigCard.classList.toggle("big-card-dark");

  // ? Create Card
  createCard.classList.toggle("create-card-content-container-dark");
  createCardTitle.classList.toggle("top-container-title-dark");
  createCardText.classList.toggle("top-container-text-dark");
  getACard.classList.toggle("get-a-card-button-dark");

  // ? Footer
  footerCopyright.classList.toggle("footer-copyright-dark");

  // ? Footer mobile
  footerCopyrightMobile.classList.toggle("footer-mobile-copyright-dark")
}