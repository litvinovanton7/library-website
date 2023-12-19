"use strict";

import "../sass/style.sass";
import "normalize.css";

window.addEventListener("DOMContentLoaded", () => {
    // tabs

    const tabs = document.querySelectorAll(".tab__btn-input"),
        tabsContent = document.querySelectorAll(".tab__content-wrapper"),
        tabsParent = document.querySelector(".tabs");

    // this function hides content in tab
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
        });

        tabs.forEach(item => {
            item.classList.remove("tab__show");
        });
    }

    // this function shows content in tab
    function showTabContent(i = 0) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("tab__show");
    }

    // hide all content in tabs
    hideTabContent();

    // toggle buttons to show and hide content 
    tabsParent.addEventListener("click", e => {
        const target = e.target;

        if (target && target.classList.contains("tab__btn-input")) {
            // if button === 1 shows the first tab, hides the other, etc. 
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});
