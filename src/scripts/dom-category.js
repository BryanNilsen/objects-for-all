const categoryDom = obj => {
  return `<div>
                ${obj.name}
                ${obj.id}
            </div>`;
};

const categoryDetailDom = obj => {
  return `<div>
                ${obj.name}
                ${obj.junk}
            </div>`;
};

const buildCategoryDom = data => {
  mainContainer.innerHTML = "";
  data.forEach(element => {
    mainContainer.innerHTML += categoryDom(element);
  });
};

const buildCategoryDetailDom = data => {
  console.log("data", data);
  mainContainer.innerHTML = "";
  mainContainer.innerHTML += `<h2>${data.name}</h2>`;
  data.junk.forEach(element => {
    mainContainer.innerHTML += categoryDetailDom(element);
  });
};

// FOR ADD JUNK FUNCTIONALITY - get select dropdown
const junkSelectCategories = document.querySelector("#select__junk__category");

// JUNK TEXT INPUT
const junkTextInput = document.querySelector("#add__junk__text");

// ADD JUNK BUTTON
const add_junk_btn = document.querySelector("#add__junk__btn");

// ADD EVENT LISTENER TO ADD JUNK BUTTON
add_junk_btn.addEventListener("click", () => addJunkToDB());

// BUILD CATEGORY SELECT MENU
const buildCategorySelectDom = () => {
  junkSelectCategories.innerHTML = "";
  API.getCategories().then(categories => {
    categories.forEach(category => {
      let categorySelectOption = `
      <option value="${category.id}">${category.name}</option>
      `;
      junkSelectCategories.innerHTML += categorySelectOption;
    });
  });
};

const addJunkToDB = () => {
  let junkObject = {
    name: junkTextInput.value,
    categoryId: parseInt(junkSelectCategories.value)
  };
  API.saveJunkObject(junkObject);
};

// INVOKE build category select
buildCategorySelectDom();
