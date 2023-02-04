const tabsContainer = document.querySelector(".bicycle_types");
const bicycle = document.querySelector("body");
const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
const input = document.getElementById("fnameInput");
const errorText = document.querySelector(".error-text");
const addButton = document.querySelector(".add-button");

const cyrillicPattern = /[а-яА-ЯЁё]/;
let value = "";

const initialRender = () => {
  const tabs = [
    { id: 0, name: "Горный велосипед" },
    { id: 1, name: "Женский велосипед" },
    { id: 2, name: "Женский велосипед 2" },
    { id: 3, name: "Женский велосипед 3" },
  ];

  let html = "";
  tabs.map((item, index) => {
    html += `
            <button class="type_btn ${index === 0 && "btn_isActive"}">
               ${item.name} <i class="fa-solid fa-chevron-up dropdown1"></i>
            </button>
         `;
  });
  tabsContainer.innerHTML = html;

  addButton.disabled = true;
  addButton.classList.add("disabled");
};

window.document.addEventListener("DOMContentLoaded", initialRender);

const myFunction = (e) => {
  if (document.querySelector(".btn_isActive") !== null) {
    document.querySelector(".btn_isActive").classList.remove("btn_isActive");
  }
  e.target.classList.add("btn_isActive");
};

input.addEventListener("input", (e) => {
  value = e.target.value;
  if (!value) {
    errorText.textContent = "Введите текст";
    return;
  }

  if (value.length && value.length < 3) {
    errorText.textContent = "Короткое имя должно содержать от 3 символов";

    return;
  }

  if (!cyrillicPattern.test(value)) {
    errorText.textContent = "Допускается только Кирилица";

    return;
  } else {
    errorText.textContent = "";
    addButton.disabled = false;
    return;
  }
});

addButton.addEventListener("click", () => {
  input.value = "";
});

const tabs2 = [{ id: 0, contnecy: "asdkadmkdasm", tabsContentId: 2 }];
const bsc = [{id:2}]
