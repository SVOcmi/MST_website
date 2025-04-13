window.addEventListener('scroll', function() {
  if (window.scrollY === 0) {
    document.querySelector('header').classList.remove('scroll')
  } else {
    document.querySelector('header').classList.add('scroll')
  }
});

const name = document.getElementById('name')
const email = document.getElementById('email')
const accept = document.getElementById('accept')
const acceptLabel = document.querySelector('.label-accept')

name.addEventListener('input', function () {
  name.classList.remove('error')
});
email.addEventListener('input', function () {
  email.classList.remove('error')
});
accept.addEventListener('input', function () {
  accept.classList.remove('error')
  acceptLabel.classList.remove('error')
});
function checkForm() {
  if (name.value === '') {
    name.classList.add('error')
  }
  if (email.value === '') {
    email.classList.add('error')
  }
  if (accept.checked === false) {
    accept.classList.add('error')
    acceptLabel.classList.add('error')
  }
}

function openMobileMenu() {
  document.querySelector('.mobile-menu').classList.add('open')
  document.querySelector('.mobile-menu-btn').classList.add('open')
  document.querySelector('.mobile-menu-btn-close').classList.add('open')
  document.querySelector('body').classList.add('open')
}

function closeMobileMenu() {
  document.querySelector('.mobile-menu').classList.remove('open')
  document.querySelector('.mobile-menu-btn').classList.remove('open')
  document.querySelector('.mobile-menu-btn-close').classList.remove('open')
  document.querySelector('body').classList.remove('open')
}