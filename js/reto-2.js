class Pet {
  constructor(name, lastname, raza, phone, country, photo, description) {
    this.name = name;
    this.lastname = lastname;
    this.raza = raza;
    this.phone = phone;
    this.country = country;
    this.photo = photo;
    this.description = description;
  }
}

class UI {
  addPet(pet) {
    const grid = document.querySelector(".grid");
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <div id="card" class="card">
          <a class="card__edit is-active" href="#"
            ><img id="btnEdit" src="./img/icon-edit.png" alt="Edit" width="30"
          /></a>
          <a class="card__delete is-active" href="#"
            ><img id="btnDelete" src="./img/icon-delete.png" alt="Delete" width="30"
          /></a>
          <div class="card__content">
            <img
              class="card__image"
              width="150"
              height="150"
              src="${pet.photo}"
            />
            <h2 class="card__name">${pet.name}</h2>
            <h2 class="card__app">${pet.lastname}</h2>
            <p class="card__raza">${pet.raza}</p>
            <p class="card__tel">${pet.phone}</p>
            <p class="card__pais">${pet.country}</p>
            <p class="card__description">${pet.description}</p>
          </div>
        </div>
    `;
    grid.appendChild(card);
    // const formPet = document.getElementById("formPet");    
    // formPet.style.display = "none";
  }

  updatePet(element, pet) {
    // console.log(element)
    if (element.target.id === "btnEdit") {
      formPet.style.display = "block";
      console.log(element)
      console.log(pet)
      const nm = document.getElementById("name").value = `${pet.name}`
      const lt = document.getElementById("lastname").value = `${pet.lastname}`
      const rz = document.getElementById("raza").value = `${pet.raza}`
      const ph =  document.getElementById("tel").value = `${pet.phone}`
      const ct = document.getElementById("paises").value = `${pet.country}`
      const pt = document.getElementById("foto").value = `${pet.photo}`
      const dt = document.getElementById("txtDescription").value = `${pet.description}`

      document.getElementById('btnActualizar').addEventListener('click', (e) => {
        document.querySelector('.card__name').textContent = `${nm}`
        document.querySelector('.card__app').textContent = `${lt}`
        document.querySelector('.card__raza').textContent = `${rz}`
        document.querySelector('.card__tel').textContent = `${ph}`
        document.querySelector('.card__pais').textContent = `${ct}`
        document.querySelector('.card__image').src = `${pt}`
        document.querySelector('.card__description').textContent = `${dt}`

        e.preventDefault()
      })
    }
  }

  editPet() {

  }

  deletePet(element) {
    if (element.target.id === "btnDelete") {
      const confirmar = confirm("Esta seguro que desea eliminar este item?");

      if (confirmar) {
        element.target.parentElement.parentElement.parentElement.remove();
      }
    }
  }

  resetForm() {
    document.getElementById("formPet").reset();
  }
}

const btnForm = document.getElementById("btnForm");
const btnAdd = document.getElementById("btnAdd");
const btnAceptar = document.getElementById("btnAceptar");
const formPet = document.getElementById("formPet");

// EDITAR
document.querySelector(".grid").addEventListener("click", (e) => {
  const name = document.querySelector('.card__name').textContent
  const lastname = document.querySelector('.card__app').textContent
  const raza = document.querySelector('.card__raza').textContent
  const phone = document.querySelector('.card__tel').textContent
  const country = document.querySelector('.card__pais').textContent
  const photo = document.querySelector('.card__image').src
  const description = document.querySelector('.card__description').textContent
  // console.log(e)
  
  // ui.updatePet(e);

    const pet = new Pet(
      name,
      lastname,
      raza,
      phone,
      country,
      photo,
      description
    );

    const ui = new UI();
    ui.updatePet(e, pet)    
    // e.preventDefault();
});

// EDITAR



// AGREGAR

btnAdd.addEventListener("click", () => {
  if ((formPet.style.display = "none")) {
    formPet.style.display = "block";
  } else {
    formPet.style.display = "none";
  }

  btnAceptar.addEventListener("click", (e) => {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const raza = document.getElementById("raza").value;
    const phone = document.getElementById("tel").value;
    const country = document.getElementById("paises").value;
    const photo = document.getElementById("foto").value;
    const description = document.getElementById("txtDescription").value;

    const pet = new Pet(
      name,
      lastname,
      raza,
      phone,
      country,
      photo,
      description
    );
    const ui = new UI();

    // if(name === '' || lastname === '' || raza === '' || phone === '' || country === '' || photo === '' || description === '') {
    //   return alert("Por favor, llenar todos los campos")
    // }

    ui.addPet(pet);
    // const formPet = document.getElementById("formPet");    
    // formPet.style.display = "none";
    ui.resetForm();
    e.preventDefault();
  });
});

document.querySelector(".grid").addEventListener("click", (e) => {
  // console.log(e)
  const ui = new UI();  
  ui.deletePet(e);
});

document.getElementById("btnCancelar").addEventListener("click", (e) => {
  formPet.style.display = "none";
  e.preventDefault()
});
