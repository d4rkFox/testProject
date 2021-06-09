"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const btnNav = document.querySelector(".header__btn"),
        headerList = document.querySelector(".header__list"),
        headerLine = document.querySelector(".header__line"),
        btnVideo = document.querySelector(".video__btn"),
        imgVideo = document.querySelector(".video__img"),
        boxVideo = document.querySelector(".video__box"),
        galleryInner = document.querySelector(".gallery__inner"),
        btnGallery = document.querySelector(".gallery__btn");

    //burger menu
    btnNav.addEventListener("click", () => {
        headerList.classList.toggle("header__list--active");
        btnNav.classList.toggle("header__btn--active");
        headerLine.classList.toggle("header__line--active");
    })

    //button gallery 
    btnGallery.addEventListener("click", () => {
        galleryInner.insertAdjacentHTML("beforeend", " <a href='images/content/serf1.jpg' class='gallery__item gallery__item--big gallery__item--pos' tabindex='0'> <img class='gallery__img' src='images/content/serf1.jpg' alt='Фото - серфер на волне'> </a> <a href='images/content/serf2.jpg' class='gallery__item gallery__item--pos' tabindex='0'> <img class='gallery__img' src='images/content/serf2.jpg' alt='Фото - ребенок на серфе'></a><a href='images/content/serf3.jpg' class='gallery__item gallery__item--small gallery__item--pos' tabindex='0'><img class='gallery__img' src='images/content/serf3.jpg' alt='Фото - серфер на пляже'></a>");
        const galleryItemVisible = document.querySelectorAll(".gallery__item--pos");
        galleryItemVisible.forEach(item => {
            item.classList.remove("gallery__item--pos");
        });
        lightGallery(document.getElementById('lightgallery'));
        btnGallery.classList.add("gallery__btn--fadeOff");
    });
    //video button
    btnVideo.addEventListener("click", () => {
        imgVideo.classList.add("video__img--fadeOff");
        boxVideo.classList.add("video__box--active");
    });
    //plugin galery
    lightGallery(document.getElementById('lightgallery'));
    //swiper
    const swiper = new Swiper('.swiper-container', {
        speed: 400,
        pagination: {
            el: ".swiper-pagination",
        },
    });
});