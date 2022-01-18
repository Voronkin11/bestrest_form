import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

// background parallax
export const bgParallax = (classNameWrap, classNameBg) => {
    gsap.utils.toArray(classNameWrap).forEach((section, i) => {
        section.bg = section.querySelector(classNameBg);
    
        if (i) {
            section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
    
            gsap.to(section.bg, {
                backgroundPosition: `50% ${innerHeight / 2}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    scrub: true
                }
            });
        } else {
            section.bg.style.backgroundPosition = "50% 0px"; 
    
            gsap.to(section.bg, {
                backgroundPosition: `50% ${innerHeight / 2}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top", 
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    });
};

//show elements on scroll
export const showElementsOnScroll = (classNameWrap, classNameElements) => {
    const elements = gsap.utils.toArray(classNameElements);

    gsap.timeline({
        scrollTrigger:{
            trigger: classNameWrap
        }
    }).from(elements, { 
        y: 1000,
        autoAlpha: 0,
        delay: 0.2,
        stagger:0.2,
        duration: 0.2
    });
};