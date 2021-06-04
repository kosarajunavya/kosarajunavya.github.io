const container = document.querySelector(".container");
const selectRows = document.getElementById("selectRows");
const buttonRows = document.getElementById("getRows");
const reset = document.getElementById("reset");
const unsplashURL = "https://source.unsplash.com/random/";
// const rows = 5;

function getRows() {
  let numberOfRows = selectRows.value;
  console.log(numberOfRows);
  for (let i = 0; i < numberOfRows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
    selectRows.value = "";
  }
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

function reload() {
  location.reload();
}

buttonRows.addEventListener("click", getRows);
reset.addEventListener("click", reload);
