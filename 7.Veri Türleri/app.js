/*

// ! Veri Türleri

1.String
2.Number
3.Boolean
4.Null
5.Undifined
6.object
7.Function
*/
//!-----Number Veri Tipi-----
let sayi = 5;
console.log(sayi);
console.log(typeof sayi);
//!--------String Veri Tipi----------
let isim = "Adem Furkan Yılmaz";
console.log(isim);
console.log(typeof isim)

let stringDegisken = "Yaşınız :";
let sayi2 = 23;
console.log(stringDegisken + sayi2);
//!-----Boolean Veri tipi-------
//! Boolean: True ve False ' dan oluşur

console.log(6>8); //False
console.log(12>10); //True


let a = 12;
let b = 20;

console.log(a+b> 36);// False
console.log(a+b == 32) ;// True

//! ---------------Null Veri Tipi-------------
let y = null; //Null(Boş)
y = 27;
console.log(a);

//!-------Undifened(Tanımlanmamış gibi)-------
let x;
console.log(typeof x)

//!----------Object Veri Tipi-----------
let insan = {
    isim :"Adem Furkan",
    soyisim : "Yılmaz",
    yas : 22
}
console.log(insan);
console.log(typeof insan);

let rakamlar = [1,2,3,4,5,6,7,8,9];
console.log(rakamlar);
console.log(typeof rakamlar);

//!------Function Veri Tipi
let func = function(){
    console.log("Merhaba");
}
func();
console.log(typeof func);
