// import './style.css';

// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 4 - Winda

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Winda napędzana scrollem użytkownika porusza się w górę i w dół (zgodnie z kierunkiem scrollowania).

// Spraw, aby pole nad windą, informujące o kierunku poruszania się, było aktualizowane na bieżąco.

// ### Punkty bonusowe

// 1. Spraw, aby na polu z informacjami pokazywało się również aktualne piętro

const directions = {
  top: '🔼',
  bottom: '🔽'
};

const directionContainer = document.querySelector('.direction');
const elevator = document.querySelector('.elevator');
directionContainer.innerHTML = "Kierunek:";
const buttonUp = document.createElement('div');
buttonUp.innerHTML = directions.top;
buttonUp.style.display = "inline-block";
buttonUp.style.cursor = "pointer";


const buttonDown = document.createElement('div');
buttonDown.innerHTML = directions.bottom;
buttonDown.style.display = "inline-block";
buttonDown.style.cursor = "pointer";

const numberOfFloor = document.createElement('span');
numberOfFloor.innerHTML = 'Piętro:';

const buttonsArray = document.createElement("div");

buttonsArray.style.width = "100px";
buttonsArray.style.height = "300px";
buttonsArray.style.backgroundColor = "black";
buttonsArray.style.padding = "20px";
buttonsArray.classList.add("buttons_array");


const zeroFloorButton = document.createElement("a");
zeroFloorButton.innerText = "0";
zeroFloorButton.classList.add("button_floor");

const firstFloorButton = document.createElement("a");
firstFloorButton.innerText = "1";
firstFloorButton.classList.add("button_floor");

const secondFloorButton = document.createElement("a");
secondFloorButton.innerText = "2";
secondFloorButton.classList.add("button_floor");

const thirdFloorButton = document.createElement("a");
thirdFloorButton.innerText = "3";
thirdFloorButton.classList.add("button_floor");

const fourthFloorButton = document.createElement("a");
fourthFloorButton.innerText = "4";
fourthFloorButton.classList.add("button_floor");

const fifthFloorButton = document.createElement("a");
fifthFloorButton.innerText = "5";
fifthFloorButton.classList.add("button_floor");

const sixthFloorButton = document.createElement("a");
sixthFloorButton.innerText = "6";
sixthFloorButton.classList.add("button_floor");

const seventhFloorButton = document.createElement("a");
seventhFloorButton.innerText = "7";
seventhFloorButton.classList.add("button_floor");

const eighthFloorButton = document.createElement("a");
eighthFloorButton.innerText = "8";
eighthFloorButton.classList.add("button_floor");

const ninethFloorButton = document.createElement("a");
ninethFloorButton.innerText = "9";
ninethFloorButton.classList.add("button_floor");

const tenthFloorButton = document.createElement("a");
tenthFloorButton.innerText = "10";
tenthFloorButton.classList.add("button_floor");


directionContainer.appendChild(buttonUp);
directionContainer.appendChild(buttonDown);
directionContainer.appendChild(numberOfFloor);
directionContainer.appendChild(buttonsArray);
buttonsArray.appendChild(zeroFloorButton);
buttonsArray.appendChild(firstFloorButton);
buttonsArray.appendChild(secondFloorButton);
buttonsArray.appendChild(thirdFloorButton);
buttonsArray.appendChild(fourthFloorButton);
buttonsArray.appendChild(fifthFloorButton);
buttonsArray.appendChild(sixthFloorButton);
buttonsArray.appendChild(seventhFloorButton);
buttonsArray.appendChild(eighthFloorButton);
buttonsArray.appendChild(ninethFloorButton);
buttonsArray.appendChild(tenthFloorButton);

const floors = document.querySelectorAll('.elevator .floor');
const buttonsFloors = document.querySelectorAll(".button_floor")

buttonsFloors.forEach(button => {
  button.setAttribute("data-link", `Piętro ${button.innerText}`);
});

floors.forEach(floor => {
  floor.setAttribute("id", `${floor.innerText}`);
  floor.addEventListener("click", () =>{
    console.log(floor);
  })
})

buttonsFloors.forEach(button => {
  button.addEventListener("click", () => {
    let el = document.getElementById(button.getAttribute("data-link"))
    el.scrollIntoView({behavior:"smooth", block:"start"})
  })
})

buttonUp.addEventListener('click', function(e){
  console.log(e)
  elevator.scrollTo({
    top:0,
    left:0,
    behavior: "smooth"
  });
})

buttonDown.addEventListener('click', function(){
  elevator.scrollTo({
    top: 1500,
    left:0,
    behavior: "smooth"
  });
})

