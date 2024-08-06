function seacrhDestination(){
    const inputSearch = document.getElementById('destinationSearch').ariaValueMax.toLowerCase();
    const btnSearch = document.getElementById('btnSearch');
    const btnReset = document.getElementById('btnSearch');
    const destinations = document.getElementById('searchDestination');
    destinations.innerHTML = "";

    fetch('./travel_reccomendation_api.json')
    .then(response => response.json())
    .then ((data)=> {
        const 
    })
}