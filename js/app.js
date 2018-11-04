document.addEventListener("DOMContentLoaded", function() {

    //hamburger
    var hamburger = document.querySelector(".hamburger-trigger");

    var menu = document.querySelector(".main-menu");
    var drop = menu.querySelector(".dropdown");
    var dropdown = document.querySelector(".dropdown-content");
    var mobile = window.matchMedia("(min-width: 740px)");
    var tablet = window.matchMedia("(min-width: 980px)");

    var product1 = document.querySelector('div.product1');
    var product2 = document.querySelector('div.product2');


    function onMobileMatches(mobile) {
        if (mobile.matches) {
            hamburger.style.display = "none";
            menu.style.display = "flex";
            menu.style.flexDirection = "row";

            product1.addEventListener('mouseover', function () {
                product1.lastElementChild.classList.add('showTitle');
            });
            product1.addEventListener('mouseout', function () {
                product1.lastElementChild.classList.remove('showTitle');
            });
            product2.addEventListener('mouseover', function () {
                product2.lastElementChild.classList.add('showTitle');
            });
            product2.addEventListener('mouseout', function () {
                product2.lastElementChild.classList.remove('showTitle');
            });
        }
        else if (!(mobile.matches)) {
            hamburger.style.display = "flex";
            menu.style.display = "none";
            menu.style.flexDirection = "column";

            product1.addEventListener('mouseout', function () {
                product1.lastElementChild.classList.remove('showTitle');
            });
            product2.addEventListener('mouseout', function () {
                product2.lastElementChild.classList.remove('showTitle');
            });
        }
    }

    function onTabletMatches(tablet){
        if (tablet.matches){
            dropdown.style.visibility = "block";
        }
        else{
            dropdown.style.display = "none";
        }
    }

    mobile.addListener(onMobileMatches);
    onMobileMatches(mobile);
    tablet.addListener(onTabletMatches);
    onMobileMatches(tablet);

    hamburger.addEventListener('click', function () {
        if (menu.style.display === "none") {
            menu.style.display = "block";
        }
        else {
            menu.style.display = "none";
        }
    });

    drop.addEventListener('click', function () {
        if (dropdown.style.display == "none") {
            dropdown.style.display = "block";
        }
        else {
            dropdown.style.display = "none";
        }
    });

    //slider
    var leftBtn = document.querySelector('div.sliderLeft');
    var rightBtn = document.querySelector('div.sliderRight');
    var imgLi = document.querySelectorAll('div.sliderImg ul li');

    var index = 0;

    imgLi[index].style.display = "initial";

    leftBtn.addEventListener("click", function() {
        imgLi[index].style.display = "none";
        index--;
        if (index < 0) {
            index = imgLi.length - 1;
        }
        imgLi[index].style.display = "initial";
    });

    rightBtn.addEventListener("click", function() {
        imgLi[index].style.display = "none";
        index++;
        if (index >= imgLi.length) {
            index = 0;
        }
        imgLi[index].style.display = "initial";
    })
});