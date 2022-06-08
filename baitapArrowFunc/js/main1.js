const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const getEle = (id) => document.getElementById(id);

colorList.forEach((currentValue, currentIndex, currentArray) => {
  let btn = document.createElement("button");
  btn.className = `color-button ${currentValue}`;
  getEle("colorContainer").appendChild(btn);
});

let btnContainer = getEle("colorContainer");
let btns = btnContainer.getElementsByClassName("color-button");
console.log(btns);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
    console.log(this.classList[1]);

    colorList.forEach((ele, idx) => {
      let currentHouse = getEle("house").classList;
      if (currentHouse.contains(ele)) {
        currentHouse.remove(ele);
      }
      currentHouse.add(this.classList[1]);
    });
  });
}
