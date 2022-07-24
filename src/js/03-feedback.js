import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(".feedback-form"),
  email: document.querySelector(".feedback-form input"),
  message: document.querySelector(".feedback-form textarea")
}

const STORAGE_KEY = 'feedback-form-state';
const storageKey = localStorage.getItem(STORAGE_KEY);
const formData = {};

refs.form.addEventListener("input", throttle(controlInput, 500));
refs.form.addEventListener("submit", controlSubmit);

if (storageKey) {
  const formData = JSON.parse(storageKey);
  refs.email.value = formData.email;
  refs.message.value = formData.message;
  console.log(formData);
} 

function controlInput() {
  formData.email = refs.form.email.value;
  formData.message = refs.form.message.value;
  const inputData = JSON.stringify(formData);
  console.log(inputData);
  localStorage.setItem(STORAGE_KEY, inputData)
}

function controlSubmit(event) {
  event.preventDefault();
  localStorage.clear();
  refs.email.value = "";
  refs.message.value = "";
  console.log(formData);
}
