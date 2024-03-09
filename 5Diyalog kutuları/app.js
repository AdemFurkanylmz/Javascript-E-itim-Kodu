//!------Diyalog Kutuları---------

/*
    -Alert
    -Prompt
    -Confirm
*/

console.log(window);

// window.alert

alert("İşleminize devam etmeden önce kaydetmelisiniz");

//? prompt() : Kullanıcıdan değer alabiliyorsunuz 

// Kullanıcıdan aldığınız   değerler he zaman string döner
let isim = prompt("İsminizi giriniz");
let yas = prompt("Yasınızı giriniz");

console.log("İsminiz : " + isim );
console.log("Yasiniz : " + yas);

// console.log(typeof isim); // String
// console.log(typeof yas); // String

confirm("Silmek istediğinize emin misiniz")

let sonuc = confirm("Devam ederseniz ücret uygulanacaktır");
console.log(sonuc);
