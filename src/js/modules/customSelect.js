export const customSelect = () => {
    const selectBtn = document.querySelector(".custom-select__button");

    const showSelectListTogler = () => {
        selectBtn.addEventListener("click", (evt) => {
            evt.preventDefault();
            evt.currentTarget.nextElementSibling.classList.toggle("custom-select__list--hide");
            evt.currentTarget.classList.toggle("custom-select__button--active");
        });
    }
    showSelectListTogler();

    const formLabelToActive = (inputEl) => {
        inputEl.closest(".form__label").classList.add("form__label--active");
    }

    const formLabelToInactive = (inputEl) => {
        if(inputEl.name === "phone" && inputEl.previousElementSibling.textContent !== "") {
            return false;
        } else if(!inputEl.value) {
            inputEl.closest(".form__label").classList.remove("form__label--active");
        }
    }

    const formLabelActiveToglerOnFocus = () => {
        const inputs = document.querySelectorAll("input.form__input");
        inputs.forEach(el => {
            el.addEventListener("focus", (evt) => {
                formLabelToActive(evt.target);
            });
            
            el.addEventListener("blur", (evt) => {
                formLabelToInactive(evt.target);
            });
        });

        
    }
    formLabelActiveToglerOnFocus();

    const valueSelectToPhoneCodeValue = () => {
        const selectInputs = document.querySelectorAll(".custom-select__input[name='country']");

        const writeCountryFields = (country) => {
            document.querySelector(".form__input--country").textContent = country;
        }

        const writeCountryPhoneCodeField = (phoneCode) => {
            const phoneCodeField = document.querySelector(".form__input-before--phone");
            phoneCodeField.textContent = phoneCode;
            formLabelToActive(phoneCodeField);
        }

        selectInputs.forEach(el => {
            el.addEventListener("change", (evt) => {
                const currentElement = evt.currentTarget;
                writeCountryFields(currentElement.dataset.country);
                formLabelToActive(currentElement);
                writeCountryPhoneCodeField(evt.currentTarget.value);

                evt.currentTarget.closest(".custom-select__list").classList.add("custom-select__list--hide");
                document.querySelector(".custom-select__button").classList.remove("custom-select__button--active");
            })
        })
    }
    valueSelectToPhoneCodeValue();
    
    document.addEventListener("click", (evt) => {
        if (!evt.target.closest(".form__label--select")) {
            document.querySelectorAll(".custom-select__list").forEach(select => {
                select.classList.add("custom-select__list--hide");
                document.querySelector(".custom-select__button").classList.remove("custom-select__button--active");
            });
        }
    });
}
