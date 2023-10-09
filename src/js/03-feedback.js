import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
const LC_KEY = 'feedback-form-state';

// Save data to local storage
feedbackForm.addEventListener('input', handleSaveToLS);

function handleSaveToLS() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem(LC_KEY, JSON.stringify(formData));
}

// Loading data from local storage
function loadFormState() {
  const savedFormData = localStorage.getItem(LC_KEY);
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    emailInput.value = formData.email || '';
    messageTextarea.value = formData.message || '';
  }
};

document.addEventListener('DOMContentLoaded', loadFormState);

emailInput.addEventListener('input', handleSaveToLS
);
messageTextarea.addEventListener('input',handleSaveToLS);

feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (emailInput.value === '' || messageTextarea.value === '') {
    const message = 'Please fill all fields!';
    alert(message);
		return;
  }

  const formDataObject = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formDataObject);

	localStorage.removeItem(LC_KEY);

  emailInput.value = '';
  messageTextarea.value = '';
}
