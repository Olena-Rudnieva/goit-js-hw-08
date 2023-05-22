import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.querySelector('input');
const textareaEl = formEl.querySelector('textarea');

let inputData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

saveData();

function onFormInput(evt) {
  inputData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (inputEl.value && textareaEl.value) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    inputData = {};
  } else {
    alert('Заповніть порожнє поле!');
  }
}

function saveData() {
  if (inputData) {
    let { email, message } = formEl.elements;
    email.value = inputData.email || '';
    message.value = inputData.message || '';
  }
}
