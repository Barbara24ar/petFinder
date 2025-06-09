import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

// Render Adoption Stats Cards
function renderAdoptionStats(data) {
  // Perritos disponibles
  const dogs = data.filter(item => item.facts.pet === 'Dog');
  const total = data.length; // Total de animales (perros + gatos)

  // Todos vacunados (sobre todos los animales)
  const vaccinated = total; // Todos los animales están vacunados

  // Género: ¿hay más hembras que machos? (sobre todos los animales)
  const females = data.filter(item => item.facts.gender === 'Female').length;
  const males = data.filter(item => item.facts.gender === 'Male').length;
  let genderMsg = '';
  if (females > males) {
    genderMsg = `There are more females (${females}) than males (${males})`;
  } else if (males > females) {
    genderMsg = `There are more males (${males}) than females (${females})`;
  } else {
    genderMsg = `There are the same number of females (${females}) and males (${males})`;
  }  

  // Más pequeños o grandes (petSize) sobre todos los animales
  const small = data.filter(item => item.facts.petSize === 'Small').length;
  const big = data.filter(item => item.facts.petSize === 'Big').length;
  let sizeMsg = '';
  if (small > big) {
    sizeMsg = `There are more small pets (${small}) than large ones (${big})`;
  } else if (big > small) {
    sizeMsg = `There are more large pets (${big}) than small ones (${small})`;
  } else {
    sizeMsg = `There are the same number of small (${small}) and large pets (${big})`;
  }
  

  document.getElementById('adoption-stats').innerHTML = `
    <div class="adoption-stats-cards">
      <div class="adoption-stat-card available">
        <div class="stat-value">${total}</div>
        <div class="stat-label">Available animals</div>
      </div>
      <div class="adoption-stat-card avg-age">
        <div class="stat-value">${females > males ? females : males}</div>
        <div class="stat-label">${genderMsg}</div>
      </div>
      <div class="adoption-stat-card breed">
        <div class="stat-value">${small > big ? small : big}</div>
        <div class="stat-label">${sizeMsg}</div>
      </div>
      <div class="adoption-stat-card vaccinated">
        <div class="stat-value">${vaccinated}/${total}</div>
        <div class="stat-label">vaccinated</div>
      </div>
    </div>
  `;
}


// Llama a la función al cargar la página
renderAdoptionStats(data);

const showData = renderItems(data); 
const root = document.querySelector("#root"); 
const results = document.querySelector("#results"); 
root.appendChild(showData);

let filteredData = data; 

const filterType = document.querySelector("#filter-select"); 
filterType.addEventListener("change", function (event) {
  root.innerHTML = "";

  filteredData = filterData(data, "pet", event.target.value); 

  if (filterGender.value) {
    filteredData = filterData(filteredData, "gender", filterGender.value);
  }

  if (filterSize.value) {
    filteredData = filterData(filteredData, "petSize", filterSize.value);
  }

  root.appendChild(renderItems(filteredData));
});

const filterGender = document.querySelector('[data-testid="select-filter"]');
filterGender.addEventListener("change", function (event) {
  root.innerHTML = "";

  filteredData = filterData(data, "gender", event.target.value);

  if (filterType.value) {
    filteredData = filterData(filteredData, "pet", filterType.value);
  }

  if (filterSize.value) {
    filteredData = filterData(filteredData, "petSize", filterSize.value);
  }

  root.appendChild(renderItems(filteredData));
});

const filterSize = document.querySelector("#size-select"); 
filterSize.addEventListener("change", function (event) {
  root.innerHTML = "";

  filteredData = filterData(data, "petSize", event.target.value);

  if (filterType.value) {
    filteredData = filterData(filteredData, "pet", filterType.value);
  }

  if (filterGender.value) {
    filteredData = filterData(filteredData, "gender", filterGender.value);
  }

  root.appendChild(renderItems(filteredData));
});

const sort = document.querySelector("#ordenar"); 
sort.addEventListener("change", (event) => {
  const sortValue = event.target.value;
  
  let orderData;
  if (sortValue === "asc" || sortValue === "desc") {
    orderData = sortData(filteredData, "name", sortValue);
  }
  
  root.innerHTML = "";
  root.appendChild(renderItems(orderData));
});

const clear = document.querySelector("#reset-button"); 
clear.addEventListener("click", function () {
  filterType.value = "";
  filterGender.value = "";
  filterSize.value = "";
  sort.value = "";

  root.innerHTML = "";
  root.appendChild(showData);
});
