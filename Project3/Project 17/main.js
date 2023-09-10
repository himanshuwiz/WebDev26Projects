const scriptURL = 'https://script.google.com/macros/s/AKfycbzmcFb79Qeh1VcUh6RUDih744M7K2NJysluzJLveHghTBCFkmjx-yPugBHBqeRAWBoIZw/exec';
const form = document.getElementById('submit-to-google-sheet');
const msg = document.getElementById('msg');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            if (response.ok) {
                msg.innerHTML = 'Thank You For Subscribing!';
                setTimeout(function () {
                    msg.innerHTML = '';
                }, 5000);
                form.reset();
            } else {
                throw new Error('Failed to submit the form.');
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = 'Error: Failed to submit the form.';
        });
});


submitButton.addEventListener('click', () => {
    msg.innerHTML = 'Thank You For Subscribing!';
    setTimeout(function () {
        msg.innerHTML = '';
    }, 5000);
});

