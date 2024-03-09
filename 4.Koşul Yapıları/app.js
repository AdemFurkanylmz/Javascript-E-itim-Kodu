// ! İf / Else if / Else

// if(koşul){
//     //? kodlar
// }

// else if(koşul){
//     //? kodlar
// }

// else if(koşul){
//     //? kodlar
// }

// else{
//     //? kodlar
// }
//! Koşul yapıları

// let not = 55;

// if(not>50){
//     console.log("Geçtiniz , Notunuz : " + not);
// }
// else{
//     console.log("Kaldınız , Notunuz :" + not);
// }


// let yas = Number(prompt ("Yaşınız :"));
// console.log(typeof yas);
// let para = Number(prompt ("Bütçeniz :"));

// if(yas>=18 && para>=3000){
//     alert("Ehliyet sınavına katılabilirsiniz");
// }
// else{
//     alert(("Ehliyet sınavına katılamıyorsunuz"));
// }


// ! Ders Ortalaması Bulma

// vize %40 , final %60

let vize = Number(prompt("Vize Notunuzu giriniz"));
let final = Number(prompt("Final notunuzu giriniz"));

let ortalama = (vize*0.4) + (final*0.6);

if(ortalama>=50){
    alert("Dersten geçtiniz tebrikler :))" + ortalama);
    console.log("Dersten geçtiniz tebrikler :))" + ortalama);
}
else{
    alert("Kaldınız geçmiş olsun :(" + ortalama);
    console.log("Kaldınız geçmiş olsun :(" + ortalama);
}

