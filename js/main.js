'use strict'
const kittenList = document.querySelector('.js-list');
const kittenDataList = [ //Una lista de 3 objetos con la información de cada gatito
    {
        image: 'https://dev.adalab.es/gato-siames.webp',
        name: 'Anastasio',
        desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
        race: 'Siamés',
    },
    {
        image: 'https://dev.adalab.es/sphynx-gato.webp',
        name: 'Fiona',
        desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
        race: 'Sphynx',
    },
    {
        image: 'https://dev.adalab.es/maine-coon-cat.webp',
        name: 'Cielo',
        desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
        race: '',
    },
]

const kittenData = {
    image: '',
    name: '',
    desc: '',
    race: '',
};


/*
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
kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;*/

const buttonAdd = document.querySelector('.js-btn-add');
const addKitten = document.querySelector('.js-new-form');
const buttonCancel = document.querySelector('.js-button-cancel');
const inputReset = document.querySelector('.js-form-input');
const searchButton = document.querySelector('.js_button-search');
const inputSearchDesc = document.querySelector('.js_in_search_desc');
const msg = 'Uy no encontramos un gato con estas caracterísitcas';
const buttonSubmit = document.querySelector('.js-button-submit');


//const selectedKitten = document.querySelector('.js-list');

//forma de toggle en vez de funciones
/*function showNewCatForm() {
    addKitten.classList.toggle("collapsed");
}

function hideNewCatForm() {
    addKitten.classList.add("collapsed");
    inputReset.reset();
}

buttonAdd.addEventListener('click', showNewCatForm);

buttonCancel.addEventListener('click',hideNewCatForm);*/


//Otra forma de hacer lo del toggle que funciona

const inputImg = document.querySelector('.js-inputImg');
const inputName = document.querySelector('.js-inputName');
const inputRace = document.querySelector('.js-inputRace');
const inputDesc = document.querySelector('.js-inputDesc');

function showNewCatForm() {
    addKitten.classList.remove('collapsed');
}
function cancelCatForm() {
    addKitten.classList.add('collapsed');
    inputImg.value = "";
    inputName.value = "";
    inputRace.value = "";
    inputDesc.value = "";
    
}

function handleClick() {

    if (addKitten.classList.contains('collapsed')) {
        showNewCatForm();

    } else {
        cancelCatForm();
    }

}
    
buttonAdd.addEventListener('click', handleClick);

buttonCancel.addEventListener('click', cancelCatForm);


function renderKitten(kittenData) { //Esta función me marca que información quiero guardar (lo que quieres pintar en html)
    
    const newKittenAdded = `<li class="card">
    <article>
    <img class="card_img" src="${kittenData.image}" alt="siames-cat" />
    <h3 class="card_title">${kittenData.name}</h3>
    <h4 class="card_race">${kittenData.race}</h4>
    <p class="card_description">${kittenData.desc}</p>
    </article>
    </li>`;
    return newKittenAdded;//guardar la información del newKittenAdded para usarla en un momento dado. 
    
};

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    kittenData.image = inputImg.value;
    kittenData.name = inputName.value;
    kittenData.race = inputRace.value;
    kittenData.desc = inputDesc.value;
   
    kittenList.innerHTML += renderKitten(kittenData);//este se ejecuta cuando se pincha en el boton submit, se crea un nuevo Li con los nuevos datos añadidos por la usuaria

});

kittenList.innerHTML = //Se ejecuta cuando se carga la pág
renderKitten(kittenDataList[0]) + renderKitten(kittenDataList[1]) + renderKitten(kittenDataList[2]);


console.log(kittenList);

 
const filterKitten = (event) =>{
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
};

searchButton.addEventListener("click", filterKitten);