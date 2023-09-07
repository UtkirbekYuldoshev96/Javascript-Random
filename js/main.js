let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomImags = "dice" + randomNumber + ".png";
let randomImagSours = "images/" + randomImags;

let imag1 = document.querySelectorAll("img")[0].setAttribute("src", randomImagSours);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImags2 = "dice" + randomNumber2 + ".png";
let randomImagSours2 = "images/" + randomImags2;

let imag2 = document.querySelectorAll("img")[1].setAttribute("src", randomImagSours2);


// shart bajariladi
if(randomNumber > randomNumber2){
      document.querySelector("h1").innerHTML = "👍 Birinchi qo'l yutdi 1";
}else if(randomNumber2 > randomNumber){
      document.querySelector("h1").innerHTML = "👍 Ikkinchi qo'l yutdi 2";
}else{
      document.querySelector("h1").innerHTML = "Durang";
}