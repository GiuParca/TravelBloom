function searchDestination(){
    const inputSearch = document.getElementById('destinationSearch').value.toLowerCase();
    const btnSearch = document.getElementById('btnSearch');
    const btnReset = document.getElementById('btnSearch');
    const destinations = document.getElementById('searchDestination');
    destinations.innerHTML = "";

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then ((data)=> {
        const city = data.countries.find(place => place.name.toLowerCase() === inputSearch);
        const country = data.countries.find(place => place.name.toLowerCase() === inputSearch);

        if(city){
            destinations.innerHTML += `<img src="${city.imagesrc}"></img>`
            destinations.innerHTML += `<h3> ${city.name}</h3>`;
            destinations.innerHTML += `<p> ${city.description}</p>`;
        } else if(country) {
            destinations.innerHTML += `<h3> ${county.name}</h3>`;
            destinations.innerHTML += `<p> ${country.cities[0]}</p>`;
            destinations.innerHTML += `<p> ${country.cities[1]}</p>`;
        } else {
            destinations.innerHTML = 'Destination not found. Please, try again.'
        }
    });
}
        btnSearch.addEventListener('click', searchDestination)