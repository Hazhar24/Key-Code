let $ = document;
let locationKey = $.querySelector("#location");
let title = $.querySelector("title");

let KeycodeElem = $.getElementById("keyCode");
let KeyElem = $.getElementById("key");
let locationElem = $.getElementById("location");
let WhichElem = $.getElementById("which");
let CodeElem = $.getElementById("code");

document.body.addEventListener("keydown", function (event) {
  event.preventDefault();

  starter.style.display = "none";
  heading.style.display = "flex";
  ascii.style.display = "flex";
  infos.style.display = "flex";

  let eventKeyCode = event.keyCode;
  let eventKey = event.key;
  let eventLocation = event.location;
  let eventWhich = event.which;
  let eventCode = event.code;

  KeycodeElem.innerHTML = eventKeyCode;
  KeyElem.innerHTML = eventKey;
  locationElem.innerHTML = eventLocation;
  WhichElem.innerHTML = eventWhich;
  CodeElem.innerHTML = eventCode;
});