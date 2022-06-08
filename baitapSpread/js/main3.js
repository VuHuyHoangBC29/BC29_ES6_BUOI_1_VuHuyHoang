const getEle = () => document.getElementById(id);

let strArr = document.getElementsByClassName("heading");
console.log(strArr);
let str = strArr[0].innerHTML;
console.log(str);
// strArr[0].innerHTML = "";
let chars = [...str];
console.log(chars);

if (strArr[0].innerHTML) {
  strArr[0].innerHTML = "";
  chars.forEach((ele) => {
    let spn = document.createElement("span");
    spn.innerHTML = `${ele}`;
    strArr[0].appendChild(spn);
  });
}
