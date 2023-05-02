const navBar = document.querySelector('.navbar');
const naBarMenu = document.querySelector('.menu-holder')
const navBtn = document.querySelector('#menu-btn');
const xBtn = document.querySelector('#xmark');

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav .container .menu-holder ul li a');

const themeSwitcher = document.querySelector('#theme-switcher');
const whiteLogo = document.querySelector('#white-logo');
const blackLogo = document.querySelector('#black-logo');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  if (scroll > 150) {
    navBar.classList.add('scrolled')
  }
  else {
    navBar.classList.remove('scrolled')
  }
})

navBtn.addEventListener('click', () => {
  naBarMenu.classList.toggle('active');
  themeSwitcher.classList.toggle('showed')
})
xBtn.addEventListener('click', () => {
  naBarMenu.classList.remove('active')
  themeSwitcher.classList.remove('showed')
})

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('nav .container .menu-holder ul li a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}

const submitFunction = (event) => {
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const userEmail = document.querySelector('#email').value;
  const messageSubject = document.querySelector('#subject').value;
  const messageContent = document.querySelector('#message').value;

  localStorage.setItem('First-Name', firstName);
  localStorage.setItem('Last-Name', lastName);
  localStorage.setItem('Email', userEmail);
  localStorage.setItem('Subject', messageSubject);
  localStorage.setItem('Message', messageContent);
}

const switchTheme = () => {
  const rootElement = document.documentElement
  let dataTheme = rootElement.getAttribute('data-theme'),
      newTheme

  newTheme = (dataTheme === 'light') ? 'dark' : 'light'

  rootElement.setAttribute('data-theme', newTheme)

  localStorage.setItem('theme', newTheme);

  localStorage.setItem('logo', newTheme)
}

const switchLogo = () => {
  const rootElement = document.documentElement
  let dataTheme = rootElement.getAttribute('data-theme'),
      newTheme

  newTheme = (dataTheme === 'light') ? 'dark' : 'light'

  if (dataTheme === 'light') {
    blackLogo.classList.add('showed');
    whiteLogo.classList.remove('showed');
  }
  if (dataTheme === 'dark') {
    whiteLogo.classList.add('showed');
    blackLogo.classList.remove('showed');
  }
}

themeSwitcher.addEventListener('click', () => {
  switchTheme();
  switchLogo();
})

switchLogo();