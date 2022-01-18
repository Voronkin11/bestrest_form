import $ from "jquery";
import { bgParallax, showElementsOnScroll } from "./modules/gsap-fn.js"
import { customSelect } from "./modules/customSelect.js";
import { formValidation } from "./modules/formValidation.js"

// smooth scroll
$(function() {
    $(".anchor-link").on("click",function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 300
        });
        return false;
    });
});

bgParallax(".section", ".section__bg");

showElementsOnScroll(".form__fieldset", ".show-up");

customSelect();

formValidation();