// guzik scrollujący
function scrollWin(x, y) {
  window.scrollBy(x, y);
}

// kafelki

var kafel1 = document.getElementById("kafel1");
var kafel2 = document.getElementById("kafel2");
var kafel3 = document.getElementById("kafel3");
var kafel4 = document.getElementById("kafel4");

function showFrontInfo(x) {
  if (x == 1) {
    let kafel1 = document.getElementById("kafel1");
    let dziecko = (kafel1.firstChild.style.cssText =
      "color: rgba(255, 255, 255, 1); background-color: rgba(0, 0, 0, 0.25);");
  } else if (x == 2) {
    let kafel2 = document.getElementById("kafel2");
    let dziecko = (kafel2.firstChild.style.cssText =
      "color: rgba(255, 255, 255, 1); background-color: rgba(0, 0, 0, 0.25);");
  } else if (x == 3) {
    let kafel3 = document.getElementById("kafel3");
    let dziecko = (kafel3.firstChild.style.cssText =
      "color: rgba(255, 255, 255, 1); background-color: rgba(0, 0, 0, 0.25);");
  } else if (x == 4) {
    let kafel4 = document.getElementById("kafel4");
    let dziecko = (kafel4.firstChild.style.cssText =
      "color: rgba(255, 255, 255, 1); background-color: rgba(0, 0, 0, 0.25);");
  } else console.log("błąd, skąd wziąłeś 5 kafelkę? xd");
}

function reset() {
  let dziecko = event.target.firstChild;
  dziecko.style.cssText =
    "color: rgba(255, 255, 255, 0); background-color: rgba(0, 0, 0, 0);";
}

// pierwszy kafelek
kafel1.addEventListener(
  "mouseenter",
  (cokolwiek = () => {
    showFrontInfo(1);
  })
);

kafel1.addEventListener(
  "mouseleave",
  (cokolwiek = () => {
    reset();
  })
);

kafel2.addEventListener(
  "mouseenter",
  (cokolwiek = () => {
    showFrontInfo(2);
  })
);

kafel2.addEventListener(
  "mouseleave",
  (cokolwiek = () => {
    reset();
  })
);
kafel3.addEventListener(
  "mouseenter",
  (cokolwiek = () => {
    showFrontInfo(3);
  })
);

kafel3.addEventListener(
  "mouseleave",
  (cokolwiek = () => {
    reset();
  })
);
kafel4.addEventListener(
  "mouseenter",
  (cokolwiek = () => {
    showFrontInfo(4);
  })
);

kafel4.addEventListener(
  "mouseleave",
  (cokolwiek = () => {
    reset();
  })
);

function linkDo(link) {
  window.location = link;
  console.log("cokolwiek");
}
