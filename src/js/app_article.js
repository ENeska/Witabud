document.addEventListener("DOMContentLoaded", () => {

    //hamburger
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

    //button more
    let btnMore = document.querySelector("#btnMore");
    const realization = Array(...document.querySelectorAll(".realization"));
    let w = window.innerWidth;
    let n;
    let k;

    if (w <= 1024) {
        n = 3;
    } else {
        n = 4;
    }

    if (w <= 1024) {
        k = 3;
    } else {
        k = 4;
    }
    let changeDisplay = (elem, property) => {
        elem.forEach(el => el.style.display = property);
    };

    let row = realization.slice(0, n);
    changeDisplay(row, "grid");
    btnMore.addEventListener("click", function () {

        for (let i = 0; i < 1; i++) {
            n = n + k;
            let rowGrid = realization.slice(0, n);
            changeDisplay(rowGrid, "grid");
            realization[n - k].scrollIntoView();
            if (realization.length <= n) {
                btnMore.style.display = "none";
            }
        }
    });
});
