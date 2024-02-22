import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "../styles/responsive.scss";
// console.log("Hello Coders! :)");

// NAVBAR
const navToggle = document.querySelector(".hamburger");
const navSmall = document.getElementById("nav-drawer-small");
navToggle.addEventListener("click", () => {
  navSmall.classList.toggle("open");
});

// DATA Restorants
import restaurantData from "../public/data/DATA.json";

const restaurants = restaurantData.restaurants;
const restaurantList = document.getElementById("restaurants");

restaurants.forEach((restaurant) => {
  restaurantList.innerHTML += `
        <article class="post-item" tabindex="0">
            <div class="post-item__header">
                <img
                    class="post-item__header__image"
                    src="${restaurant.pictureId}"
                    alt="${restaurant.name}"
                />
                <p class="post-item__content__city">Kota ${restaurant.city}</p>
                </div>
                <div class="post-item__content">
                <p class="post-item__content__rating"><b>Rating</b> : ${
                  restaurant.rating
                }</p>
                <h3 class="post-item__content__title">${restaurant.name}</h3>
                <p class="post-item__content__description">
                    ${restaurant.description.slice(0, 100)}...
                </p>
            </div>
        </article>
    `;
});
