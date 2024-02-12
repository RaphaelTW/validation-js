document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("mainForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (checkInput()) {
            showModal();
        }
    });

    name.addEventListener('input', () => {
        validateField(name, name.value.trim() !== '', 'O nome não pode ficar em branco');
    });

    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value.trim()), 'Não é um e-mail válido');
    });

    phone.addEventListener('input', () => {
        validateField(phone, isPhone(phone.value.trim()), 'Não é um Telefone/Celular válido');
    });

    password.addEventListener('input', () => {
        validateField(password, password.value.trim().length >= 8, 'A senha deve conter pelo menos 8 caracteres');
    });

    message.addEventListener('input', () => {
        validateField(message, message.value.trim() !== '', 'A Mensagem não pode ficar em branco');
    });

    function checkInputs() {
        let isValid = true;

        validateField(name, name.value.trim() !== '', 'O nome não pode ficar em branco');

        validateField(email, isEmail(email.value.trim()), 'Não é um e-mail válido');

        validateField(phone, isPhone(phone.value.trim()), 'Não é um Telefone/Celular válido');

        validateField(password, password.value.trim().length >= 8, 'A senha deve conter pelo menos 8 caracteres');

        validateField(message, message.value.trim() !== '', 'A Mensagem não pode ficar em branco');

        document.querySelector('.form-control').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });

        return isValid;

    }

    function validadeField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control error';
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = message;
    }
});