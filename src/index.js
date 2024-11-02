function handelSearchSubmit(event) {
  event.preventDefault();
  let searchinput = document.querySelector("#searchfforminput");
  let cityElemen = document.querySelector("#themainheader");
  cityElemen.innerHTML = searchinput.value;
}

let searchForElement = document.querySelector("#searchfform");
searchForElement.addEventListener("submit", handelSearchSubmit);
