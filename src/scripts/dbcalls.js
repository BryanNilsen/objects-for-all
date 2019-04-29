console.log("What's in the junk drawer?");

const API = {
  getCategories: function() {
    return fetch("http://localhost:8088/category").then(response =>
      response.json()
    );
  },
  getJunk: function() {
    return fetch("http://localhost:8088/junk").then(response =>
      response.json()
    );
  },
  getJunkWithCategory: function() {
    return fetch("http://localhost:8088/category/1?_embed=junk").then(
      response => response.json()
    );
  },
  getCategoryWithJunk: function() {
    return fetch("http://localhost:8088/category/1?_embed=junk").then(
      response => response.json()
    );
  },
  saveCategory: function(obj) {
    return fetch("http://localhost:8088/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  },
  saveJunkObject: function(obj) {
    return fetch("http://localhost:8088/junk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  }
};

// foodFactory = (foodItem) => {
//     return `<h2>${foodItem.name}</h2>`;
// };

// addFoodToDom = (foodAsHTML) => {
//     el.innerHTML += foodAsHTML;
// };

// function getData(resource){
//     el.innerHTML = "";

//     fetch(`http://localhost:8088/${resource}`)
//         .then(foodResult => {
//             console.log(foodResult);
//             return foodResult;
//         })
//         .then(foods => foods.json())
//         .then(parsedFoods => {
//             parsedFoods.forEach(food => {
//                 const foodAsHTML = foodFactory(food);
//                 addFoodToDom(foodAsHTML);
//             });
//         });
// }

// const el = document.querySelector("#container");
// const getDataButton = document.getElementById("btn-getData");
// getDataButton.addEventListener("click", () =>  getData("drinks"));

// //the following does not work as expected. function is invoked immediately
// // getDataButton.addEventListener("click", getData("drinks"));

// const getDataButton2 = document.getElementById("btn-getData2");
// getDataButton2.addEventListener("click", () => getData("food"));
