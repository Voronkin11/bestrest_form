export const formValidation = () => {
    const form = document.forms.signUp;
    const inputs = form.querySelectorAll("input.form__input");
    const selectCountry = form.country;
    const checkboxAgree = form.agree;

    form.addEventListener("submit", (evt) => {
        
        inputs.forEach(input => {
            if (input.name === "firstName" || input.name === "secondName") {
                input.value.length <= 2 ? (evt.preventDefault(), createErrMsg(input)) : false;
            } else if (input.name === "password") {
                const regex = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[^\d\s]).{3,}$/;
                !regex.test(input.value) ?(evt.preventDefault(), createErrMsg(input)) : false;
            } else if (input.name === "confirmPassword" && input.value !== form.password.value) {
                evt.preventDefault();
                createErrMsg(input);
            }else if (input.name === "email") {
                const regex = /^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/;
                !regex.test(input.value) ? (evt.preventDefault(), createErrMsg(input)) : false;
            }else if (!input.value) {
                evt.preventDefault();
                createErrMsg(input);
            }
        });

        if (!selectCountry.value) {
            evt.preventDefault();
            createErrMsg(selectCountry[0].closest(".form__select"), "country");
        }

        if (!checkboxAgree.checked) {
            evt.preventDefault();
            const validationEl = checkboxAgree.nextElementSibling;
            validationEl.classList.add("custom-checkbox__checkbox--error");

            setTimeout(() => {
                validationEl.classList.remove("custom-checkbox__checkbox--error");
            }, 4000);
        }
    })
}

const createErrMsg = (input, name) => {
    const errEl = document.createElement("span");
    errEl.className = "form__error";
    errEl.innerHTML = errorMsg[input.name] || errorMsg[name];

    input.after(errEl);
    setTimeout(() => {
        errEl.remove()
    }, 4000);
}

const errorMsg = {
    firstName: "The name must be more than 2 characters",
    secondName: "The name must be more than 2 characters",
    country: "Fill in the field",
    phone: "Fill in the field",
    password: "Password must have 1 letter, 1 number and one symbol",
    confirmPassword: "confirmPassword",
    email: "Email is not correct"
};
