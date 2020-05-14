import {restaurants, Restaurants} from './restaurant.js'; 

// open form event
const addRestaurantBtn = document.querySelector('header button');
const modalBody = document.getElementById('modal-body');
addRestaurantBtn.addEventListener('click', function() {
  modalBody.style.display = 'flex';
})

// remove form event 
const exitForm = document.getElementById('exit');
exitForm.addEventListener('click', function() {
  modalBody.style.display = 'none';
})

// Literate and display restaurants 
function fundamentalRestaurants() {
  restaurants.forEach((restaurant) => {
    const section = document.createElement('section');
    section.classList.add('restaurant');
    section.innerHTML = 
    `<img class="img" src=${restaurant.img} alt="">
    <div class="info">
       <div><span class="info-element">Rate:</span><span class="rate">${restaurant.rate}</span></div>
       <div><span class="info-element">Name:</span><span class="name">${restaurant.name}</span></div>
       <div><span class="info-element">Owner:</span><span class="owner">${restaurant.owner}</span></div>
       <div><p><span class="info-element">Presentation: </span>${restaurant.presentation}... <a class="subpages" href="subpage/${restaurant.name}/${restaurant.name}.html">see more</a></p></div>
    </div>`
    document.querySelector('.container').appendChild(section);      
  });
}
fundamentalRestaurants();



 // search the right restaurant
 const search = document.querySelector('header input')
 search.addEventListener('keyup', function(e){
    const inputValue = search.value.toLowerCase();
    const inputValueLength = search.value.length;
    let getNames = document.querySelectorAll('.name');
    getNames.forEach(getName => {
      // console.log(getName.innerHTML.slice(0, inputValueLength))
      if(inputValue === getName.innerHTML.slice(0, inputValueLength).toLowerCase()) {
        getName.parentNode.parentNode.parentNode.style.display = 'flex';
      } else {
        getName.parentNode.parentNode.parentNode.style.display = 'none';
      }
    })
})

    




