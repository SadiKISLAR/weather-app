const form = document.querySelector(".top-banner form");
const input = document.querySelector("input");
const msg = document.querySelector("span.msg");
const list = document.querySelector("ajax-section ul.cities");

localStorage.setItem("tokenKey", "pUnd5pstUf7NkL5tJJLbJHBNGb5YQOg5JN2y57gQmUAF7W/59acgc7kEbeHNwB4n");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWheatherDataFromApi();
})

const getWheatherDataFromApi = async() => {

const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
const inputValue = input.value;
const units = "metric";
const lang = "tr";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

const response = await fetch(url).then(response => response.json());

const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

const createdLi = document.createElement("li");
createdLi.classList.add("city");
createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${sys.country}">
                                <span>${name}</span>
                                <sup>${sys.country}</sup>
                        </h2>
                        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                            <figure>
                                <img class="city-icon" src="${iconUrl}">
                                <figcaption>${weather[0].description}</figcaption>
                            </figure>`;

}