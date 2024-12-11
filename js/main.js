'use strict'
const kittenList = document.querySelector('.js-list');
const kittenOne = `<li class="card">
<article>
    <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
    <h3 class="card_title">Anastacio</h3>
    <h4 class="card_race">Siamés</h4>
    <p class="card_description">
        Porte elegante, su patrón de color tan característico y sus ojos
        de un azul intenso, pero su historia se remonta a Asía al menos
        hace 500 años, donde tuvo su origen muy posiblemente.
    </p>
</article>
</li>`;

 const kittenTwo = `<li class="card">
 <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
 <h3 class="card_title">Fiona</h3>
 <h4 class="card_race">Sphynx</h4>
 <p class="card_description">
     Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
     hasta con pinta de alienígena han llegado a definir a esta raza
     gatuna que se caracteriza por la «ausencia» de pelo.
 </p>
</li>`;

const kittenThree = `<li class="card">
<img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
    Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
    bella mirada se ha convertido en una de sus señas de identidad.
    Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`;
kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;

const buttonAdd = document.querySelector('.js-btn-add');
const addKitten = document.querySelector('.js-new-form');
const buttonCancel = document.querySelector('.js-button-cancel');
const inputReset = document.querySelector('.js-form-input');
const searchButton = document.querySelector('.js_button-search');
const inputSearchDesc = document.querySelector('.js_in_search_desc');
const KittenDesc1 = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente';
const kittenDesc2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraña hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const selectedKitten = document.querySelector('.js-list');

buttonAdd.addEventListener('click', () => {addKitten.classList.toggle('collapsed');

});

buttonCancel.addEventListener('click', () => {addKitten.classList.add('collapsed');
    inputReset.reset();
});

searchButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    const descrSearchText = inputSearchDesc.value;

    if (kittenDesc1.includes(descrSearchText)) {
        console.log(kittenOne);
      }
      
      if (kittenDesc2.includes(descrSearchText)) {
        //Completa el código
      }
      
      if (kittenDesc3.includes(descrSearchText)) {
        //Completa el código
      }
  });