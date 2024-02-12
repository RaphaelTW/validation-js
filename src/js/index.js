document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("mainForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if(checkInput()){
            showModal();
        }
    });

    name.addEventListener('input', () => {
        validateField(name, name.ariaValueMax.trim(),);
    })
});