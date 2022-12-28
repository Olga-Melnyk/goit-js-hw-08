import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
console.dir(form);

const formKey = 'feedback-form-state';
const data = JSON.parse(localStorage.getItem(formKey));
let object = {};

updateInput();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(evt) {
  const savedObject = JSON.parse(localStorage.getItem(formKey));
  object = savedObject;
  object[evt.target.name] = evt.target.value;
  localStorage.setItem(formKey, JSON.stringify(object));
}

function onSubmit(evt) {
  console.log(JSON.parse(localStorage.getItem(formKey)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(formKey);
  object = {};
}

function updateInput() {
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
}
