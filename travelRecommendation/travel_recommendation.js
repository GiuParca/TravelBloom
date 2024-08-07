const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

btnSearch.addEventListener('click', searchDestination)
btnClear.addEventListener('click', clearSearchResult)


function searchDestination(){ 
const inputSearch = document.getElementById('destinationSearch').value.toLowerCase().trim(); 
const destinations = document.getElementById('searchDestination'); 
destinations.innerHTML = ""; 

fetch('travel_recommendation_api.json') 
.then(response => response.json()) 
.then (data => { 
let found = false 

data.countries.forEach(country => { 
country.cities.forEach(city => { 
if ( city.name.toLowerCase().includes(inputSearch) || country.name.toLowerCase().includes(inputSearch)){ 
destinations.innerHTML += ` 
<div class="search-result"> 
<img src="${city.imageUrl}" alt="${city.name}" class="destination-img"> 
<h3 class="destination-name">${city.name}</h3> 
<p class="destination-description">${city.description}</p> 
<button class="btn-visit"> Visit </button> </div>`; found = true; } }) })

data.temples.forEach(temple => { 
if ( temple.name.toLowerCase().includes(inputSearch)){ 
destinations.innerHTML += ` 
<div class="search-result"> 
<img src="${temple.imageUrl}" alt="${temple.name}" class="destination-img"> 
<h3 class="destination-name">${temple.name}</h3> 
<p class="destination-description"> ${temple.description}</p> 
<button class="btn-visit"> Visit </button> 
</div>` 
found = true; 
} 
})

data.beaches.forEach(beach => { 
if ( beach.name.toLowerCase().includes(inputSearch)){ 
destinations.innerHTML += ` 
<div class="search-result"> 
<img src="${beach.imageUrl}" alt="${beach.name}" class="destination-img"> 
<h3 class="destination-name">${beach.name}</h3> 
<p class="destination-description"> ${beach.description}</p> 
<button class="btn-visit"> Visit </button> 
</div>` 
found = true; 
} 
})

if (!found){ 
destinations.innerHTML = "Destination not found. Please, try again."; 
}
}).catch (error => { 
console.error("Error fetching data:", error); 
destinations.innerHTML = 'There was an error fetching the data';
})
}

function clearSearchResult(){
    document.getElementById('destinationSearch').value = ""; 
    document.getElementById('searchDestination').innerHTML = ""; 
}