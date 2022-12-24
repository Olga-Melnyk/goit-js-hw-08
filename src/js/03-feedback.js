import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.dir(form);

const formKey = 'feedback-form-state';
const object = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

updateInput();

function onInput(evt) {
  evt.preventDefault();
  //   const a = evt.currentTarget.elements;
  //   console.log(a);
  const email = evt.currentTarget.elements.email.value;
  const message = evt.currentTarget.elements.message.value;
  object = {
    email: email,
    message: message,
  };
  localStorage.setItem(formKey, JSON.stringify(object));
  //   console.log(object);
}

function onSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(formKey)));
  updateInput();
  form.reset();
  //   localStorage.removeItem('feedback-form-state');
}

function updateInput() {
  evt.currentTarget.elements.email.value =
    localStorage.getItem(formKey.email) || '';
  evt.currentTarget.elements.message.value =
    localStorage.getItem(formKey.message) || '';
}
