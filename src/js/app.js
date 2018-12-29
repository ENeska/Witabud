document.addEventListener("DOMContentLoaded", ()=> {

    let hamburger = document.querySelector('#hamburger');
    let menu = document.querySelector('#menu');
    let wrap = document.querySelector('#wrap');
    let back = document.querySelector('#back');

    const resizeMenu =()=>{
        if(menu.classList.contains("open_menu")){
            wrap.classList.remove("open_menu_wrap");
            menu.setAttribute("class", "menu");
        }
    };

    hamburger.onclick = () => {
        menu.setAttribute("class", "open_menu");
        wrap.classList.add("open_menu_wrap");
    };

    back.onclick = () => {
        wrap.classList.remove("open_menu_wrap");
        menu.setAttribute("class", "menu");
    };

    window.addEventListener("resize", resizeMenu);
});