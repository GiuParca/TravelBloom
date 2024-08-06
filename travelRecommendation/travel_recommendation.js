function seacrhDestination(){
    const inputSearch = document.getElementById('destinationSearch').ariaValueMax.toLowerCase();
    const btnSearch = document.getElementById('btnSearch');
    const btnReset = document.getElementById('btnSearch');
    const destinations = document.getElementById('searchDestination');
    destinations.innerHTML = "";

    fetch('./travel_reccomendation_api.json')
    .then(response => response.json())
    .then ((data)=> {
        const city = data.countries.cities.find(place => place.name.toLowerCase() === input);
        const country = data.countries.find(place => place.name.toLowerCase() === input);

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