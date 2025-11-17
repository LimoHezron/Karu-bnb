let houses = document.querySelector('#hostels');
 
let hostelObj = [
    {
        photo: 'duvet.jpg',
        location: "Sunrise",
        name:"las Vegas",
        price:"Ksh 4000",
    },    
    {
        photo: 'coffeetable2.jpg',
        location: "Sunrise",
        name:"las Vegas",
        price:"Ksh 4000",
    }, 
    {
        photo: 'duvet.jpg',
        location: "Sunrise",
        name:"las Vegas",
        price:"Ksh 4000",
    }, 
    {
        photo: 'coffeetable2.jpg',
        location: "Sunrise",
        name:"las Vegas",
        price:"Ksh 4000",
    }, 
    {
        photo: 'duvet.jpg',
        location: "Sunrise",
        name:"las Vegas",
        price:"Ksh 4000",
    }, 
    {
        photo: 'coffeetable2.jpg',
        location: "Sunrise",
        name:"las Vegas",
        price:"Ksh 4000",
    }, 
    {
        photo: 'duvet.jpg',
        location: "Sunrise",
        name:"las Vegas",
        price:"Ksh 4000",
    }, 
    {
        photo: 'coffeetable2.jpg',
        location: "Sunrise",
        name:"las Vegas",
        price:"Ksh 4000",
    }, 
    {
        photo: 'duvet.jpg',
        location: "Sunrise",
        name:"las Vegas",
        price:"Ksh 4000",
    }, 
];

let home = "";
hostelObj.forEach((house,index)=>{
    home += `<div class="info">
                <div class="img">
                <img src="${house.photo}" alt="hostels-photos">
                </div>
                <p class="location">${house.location}</p>
                <p class="place">${house.name}</p>
                <p class="price">${house.price}</p>
                <button class="book">Book</button>
            </div> `
})
houses.innerHTML = home;