document.addEventListener("DOMContentLoaded", () => {


    let hamburger = document.querySelector('#hamburger');
    let menu = document.querySelector('#menu');
    let wrap = document.querySelector('#wrap');
    let back = document.querySelector('#back');

    const resizeMenu = () => {
        if (menu.classList.contains("open_menu")) {
            wrap.classList.remove("open_menu_wrap");
            menu.setAttribute("class", "menu");
        }
    };

    hamburger.addEventListener("click", () => {
        menu.setAttribute("class", "open_menu");
        wrap.classList.add("open_menu_wrap");
    });

    back.addEventListener("click", () => {
        wrap.classList.remove("open_menu_wrap");
        menu.setAttribute("class", "menu");
    });

    window.addEventListener("resize", resizeMenu);

    //slider
    let slideIndex = 0;
    const bgArray = ["image/slider1.png", "image/slider2.png"];
    let slider = document.querySelector(".slider");
    let leftSlider = document.querySelector("#left");
    let rightSlider = document.querySelector("#right");

    let changeBgSlider = () => {
        slider.style.backgroundImage = "url('" + bgArray[slideIndex] + "')";
    };
    let nextSlide = () => {
        if (slideIndex < bgArray.length - 1) {
            slideIndex += 1;
        } else if (slideIndex === bgArray.length - 1) {
            slideIndex = 0;
        }
        changeBgSlider();
    };
    let prevSlide = () => {
        if (slideIndex === 0) {
            slideIndex = bgArray.length - 1;
        } else if (slideIndex <= bgArray.length - 1) {
            slideIndex -= 1;
        }
        changeBgSlider();
    };

    rightSlider.addEventListener("click", () => {
        nextSlide()
    });
    leftSlider.addEventListener("click", () => {
        prevSlide()
    });

    //border menu
    let borderMenu = () => {
        let elMenu = document.querySelector("nav").getElementsByTagName('a');

        for (let i = 0; i < elMenu.length; i++) {
            if (document.location.href.indexOf(elMenu[i].href) >= 0) {
                elMenu[i].className = 'active';
            }
        }
    };
    borderMenu();

    //slider realization
    let leftRealization = document.querySelector("#left__realization");
    let rightRealization = document.querySelector("#right__realization");
    const realization = Array(...document.querySelectorAll(".realization"));
    let n = 3;
    let row = realization.slice(0, n);
    row.forEach(el => el.style.display = "grid");

    let changeDisplay = (elem, property)=>{
        elem.forEach(el => el.style.display = property);
    };

    rightRealization.addEventListener("click", () => {

        if (n < realization.length) {

            for (let i = 0; i < 1; i++) {
                let rowNone = realization.slice(n - 3, n);
                changeDisplay(rowNone, "none");
                let rowGrid = realization.slice(n, n + 3);
                changeDisplay(rowGrid, "grid")
            }
            n += 3;
        }
    });

    leftRealization.addEventListener("click", () => {

        if (n > 3) {
            for (let i = 0; i < 1; i++) {
                let rowNone = realization.slice(n - 3, n);
                changeDisplay(rowNone, "none");
                n -= 3;
                let rowGrid = realization.slice(n - 3, n);
                changeDisplay(rowGrid, "grid")
            }
        }
    });
});
