//!--------Mantıksal operatörler-------

/*
    && : ve
    || : veya
    ! : değil
*/

// Yaşınız 18'den büyük VE 3000 tl para olması VE Sağlığınızın yerinde olması

let yas = 20;
let para = 3500;
let saglikliMi = true;

console.log(yas>18 && para>3000 && saglikliMi==true); // ? True Döndürür eğer ki saglikliMi false olsaydı tümü false olacaktı

console.log(5>3 || 2<1); //? True olacak çünkü ||(Veya) operatöründe en az bir tanesi True  sağlarsa True olur

console.log( !(4>2)) //? Normalde True ama ! operatörü tersinin çalışmasına yol açıyor False olacak

let yas1 = 25;
let para1 = 3450
let saglikliMi1 = false;
let hakSayisi = 3;

console.log((yas1>18 && para1>3000) || (saglikliMi || hakSayisi>1)) //? true    