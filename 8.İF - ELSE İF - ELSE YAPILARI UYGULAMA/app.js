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

let secilenYol = prompt("Lütfen gitmek istediğiniz yolu seçiniz");

if(secilenYol == 1){
    alert("Seçilen yol " + secilenYol + ". yoldur");
}
else if(secilenYol == 2){
    alert("Seçilen yol " + secilenYol + ". yoldur");
}
else if(secilenYol == 3){
    alert("Seçilen yol " + secilenYol + ". yoldur");
}
else{
    alert("Lütfen geçerli bir yol giriniz");
}

//! Çoklu if yapısı(hepsi birbirinden bağımsız çalışır)
// if(koşul){

// }
// if(koşul){

// }
// if(koşul){

// }

// function kontrolEt(ad, tckn){
//     if(ad !=""){
//         if(tckn.length == 11){
//             console.log("İsim ve tckn problemsiz girildi");
//         }
//         }
//         else{
//             console.log("Lütfen tc nizi 11 karakter olarak giriniz");

//         }
//      else{
//         console.log("Lütfen isim alanını boş bırakmayınız");
//         }

    
function kontrolEt2(ad , tckn){
    if(ad=="" ){
        console.log("Lütfen isim alanını boş bırakmayınız");
        return;
    }
    if(tckn.length){
        console.log("Lütfen tc nizi 11 karakter olarak giriniz")
    }

    console.log("İsim ve tckn problemsiz girildi")
}
