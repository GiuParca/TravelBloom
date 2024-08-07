const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');

btnSearch.addEventListener('click', searchDestination)

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
                if(city.name.toLowerCase().includes(inputSearch)){
                    destinations.innerHTML += `
                    <div>
                        <img src="${city.imageUrl}" alt="${city.name}">
                        <h3>${city.name}</h3>
                        <p>${city.description}</p>
                    </div>`;
                    found = true;
                }
            })
        })

        data.countries.forEach(country => {
            if(country.name.toLowerCase().includes(inputSearch)){
                destinations.innerHTML += `
                <div>
                    <h3>${country.name}</h3>
                    ${country.cities.map(city => `<p>${city.name}</p>`).join('')}
                </div>`;
                found = true;
            }
        })

        data.temples.forEach(temple => {
            if(temple.name.toLowerCase().includes(inputSearch)){
                destinations.innerHTML += `
                <div>
                <img src="${temple.imageUrl}" alt="${temple.name}">
                <h3>${temple.name}</h3>
                <p> ${temple.description}</p>
                </div>`
                found = true;
            }
        })

        data.beaches.forEach(beach => {
            if(beach.name.toLowerCase().includes(inputSearch)){
                destinations.innerHTML += `
                <div>
                <img src="${beach.imageUrl}" alt="${beach.name}">
                <h3>${beach.name}</h3>
                <p> ${beach.description}</p>
                </div>`
                found = true;
            }
        })

        if(!found){
            destinations.innerHTML = "Destination not found. Please, try again.";
        }

}).catch(error => {
    console.error("Error fetching data:", error);
    destinations.innerHTML = 'There was an error fetching the data';
})
}
       