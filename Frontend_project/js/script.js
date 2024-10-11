console.log("Hello world");

let myName = "Nivedita";
console.log(myName);

console.log(document.querySelectorAll(".heading-first"));
let h1 = document.querySelectorAll(".heading-first");

h1.textContent = "Nivedita";
console.log(h1);

console.log(document.querySelectorAll(".subheading"));

let heading = document.querySelectorAll(".subheading");
console.log(heading);
heading.textcontent = myName;

////////
function checkFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);
  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
