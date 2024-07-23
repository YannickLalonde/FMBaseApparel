var emails = [];

const submitButton = document.querySelector('.submit-btn');
const inputField = document.querySelector('.input-field');
const inputSection = document.querySelector('.input-section');
const errorIcon = document.querySelector('.error');
const notificationRed = document.querySelector('.error-notification');
const notificationGreen = document.querySelector('.pass-notification');
const loading = document.querySelector('.loading');

// console.log(inputField);

inputField.addEventListener('input', () => {
    const email = inputField.value;

    // Reset states
    errorIcon.classList.remove('o-100');
    notificationRed.classList.remove('display-b');
    inputSection.classList.remove('text-red');
    notificationGreen.classList.remove('display-b');

    if (!validateEmail(email) && email !== '') {
        errorIcon.classList.add('o-100');
        notificationRed.classList.add('display-b');
        inputSection.classList.add('text-red');
    }
});

submitButton.addEventListener('click', () => {
    const email = inputField.value;

    if (emails.some(emailItem => emailItem.info === email)) {
        alert('This e-mail has already been saved');
    } else {
        if (validateEmail(email)) {
            loading.classList.add('display-b');
            setTimeout(() => {
                loading.classList.remove('display-b');
                notificationGreen.classList.add('display-b');
                setTimeout(() => {
                    notificationGreen.classList.remove('display-b');
                }, 2000)
            }, 3000);

            emails.push({ info: email });
        } else {
            errorIcon.classList.add('o-100');
            notificationRed.classList.add('display-b');
            inputSection.classList.add('text-red');
        }
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
