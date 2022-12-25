import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.dir(form);

const formKey = 'feedback-form-state';
const object = {};

updateInput();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(evt) {
  object[evt.target.name] = evt.target.value;
  localStorage.setItem(formKey, JSON.stringify(object));
}

function onSubmit(evt) {
  console.log(JSON.parse(localStorage.getItem(formKey)));
  evt.preventDefault();
  // updateInput();
  evt.currentTarget.reset();
  localStorage.removeItem(formKey);
}

function updateInput() {
  const data = JSON.parse(localStorage.getItem(formKey));
  console.log(data);
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
}
