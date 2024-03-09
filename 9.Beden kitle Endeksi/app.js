//! Beden Kitle Endeksi

let kilo = Number(prompt("Lütfen kilonuzu giriniz"));

let boy = Number(prompt("Boyunuzu metre cinsinden giriniz"));

let sonuc = kilo/(boy*2);

if(sonuc<18.5){
    console.log("ideal kilonun altında" + sonuc);
}
else if(sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal kiloda" + sonuc);
}
else if(sonuc>=25 && sonuc<=29.9){
    console.log("İdeal kilonun üstünde" + sonuc);
}
else if(sonuc>=30 && sonuc<=39.9){
    console.log("İdeal kilonun çok üstünde(obez" + sonuc);
} 
else if(sonuc>=40){
    console.log("İdeal kilonun çok üstünde(morbid obez" + sonuc);
}