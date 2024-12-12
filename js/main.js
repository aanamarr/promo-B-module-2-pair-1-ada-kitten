'use strict'
const kittenList = document.querySelector('.js-list');

const kittenImg1 = 'gato-siames.webp';
const kittenName1 = 'Anastasio';
const kittenDesc1 = 
'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1 = 'Siamés';


const kittenImg2 = 'sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 = 
'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace2 = 'Sphynx';

const kittenImg3 = 'maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 = 
'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace3 = '';

const kittenOne = `<li class="card">
<article>
    <img class="card_img" src="./img/${kittenImg1}" alt="siames-cat" />
    <h3 class="card_title">${kittenName1}</h3>
    <h4 class="card_race">${kittenRace1}</h4>
    <p class="card_description">${kittenDesc1}</p>
</article>
</li>`;

 const kittenTwo = `<li class="card">
 <img class="card_img" src="./img/${kittenImg2}" alt="sphynx-cat" />
 <h3 class="card_title">${kittenName2}</h3>
 <h4 class="card_race">${kittenRace2}</h4>
 <p class="card_description">${kittenDesc2}</p>
</li>`;

const kittenThree = `<li class="card">
<img class="card_img" src="./img/${kittenImg3}" alt="maine-coon-cat" />
<h3 class="card_title">${kittenName3}</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description">${kittenDesc3}</p>
</li>`;
kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;

const buttonAdd = document.querySelector('.js-btn-add');
const addKitten = document.querySelector('.js-new-form');
const buttonCancel = document.querySelector('.js-button-cancel');
const inputReset = document.querySelector('.js-form-input');
const searchButton = document.querySelector('.js_button-search');
const inputSearchDesc = document.querySelector('.js_in_search_desc');
const msg = 'Uy no encontramos un gato con estas caracterísitcas'

/*const kittenDesc1 = 
'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';

const kittenDesc2 = 
'Produce fascinación y curiosidad. Exótico, raro, bello, extraña hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';

const kittenDesc3 = 
'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';*/

//const selectedKitten = document.querySelector('.js-list');

function showNewCatForm() {
    addKitten.classList.toggle("collapsed");
}

function hideNewCatForm() {
    addKitten.classList.add("collapsed");
    inputReset.reset();
}

buttonAdd.addEventListener('click', showNewCatForm);

buttonCancel.addEventListener('click',hideNewCatForm);


//EJERCICIO 2.5 INCOMPLETO
/*function renderKitten(url, desc, name, race) {
    list.innerHTML =  
}*/


searchButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    const descrSearchText = inputSearchDesc.value;

    if (kittenDesc1.includes(descrSearchText)) {
        kittenList.innerHTML = `<li>${kittenOne} </li>`;

      }
      
    else if (kittenDesc2.includes(descrSearchText)) {
        kittenList.innerHTML = `<li>${kittenTwo} </li>`;
      }
      
    else if (kittenDesc3.includes(descrSearchText)) {
        kittenList.innerHTML = `<li>${kittenThree} </li>`;
      }
    else {
        kittenList.innerHTML = msg;
    }
  });

