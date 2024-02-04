let $ = document;

let y = $.getElementById("y");

let birth = new Date(2011, 10, 23);

let age = getAge(birth)

y.textContent = age;

function getAge(d1, d2) {
  d2 = d2 || new Date();
  var diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
