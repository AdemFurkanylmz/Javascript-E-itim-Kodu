//! Dizi Array

let sayilar = [0,1,2,3,4,5,"Adem",6,7,8,"Furkan",9,10,11,12]

console.log(sayilar[6]);

sayilar[2] = "İcardi";  // 2 numaralı elemanı değiştirir
console.log(sayilar[10]);

let isimler = ["Ali", "Kübra", "Bilal", "Yusuf"];
isimler[2] = "Yakup";   
console.log(isimler[2]);

let isimler1 = ["Muslera","Boey", "Sanchez","Abdülkerim","Sol bek","Torreira","8 numara","10 numara","Zaha","Ziyech","İcardi"];
console.log(isimler1);

let karisikDizi = [1,"Galatasaray",null,5.7,true,undefined];
console.log(karisikDizi[5]);

let dizi1 = ["Adem Furkan","Yılmaz"];
let dizi2 = new Array("Adem Furkan","Yılmaz");
//? Veri tipleri
//? number, string, boolean, undifined, null,   object(array), function
console.log(typeof dizi2);

//! For döngüsü , While Döngüsü , Do while  , Foreach
//! Foreach : Dizilerde kullanıyoruz

let isimler2 = ["Adem","Enes","Yakup","Bilal","Bilal","Kübra","Ayşenur",];
isimler2.forEach(function(isim){
    console.log(isim);
});

// for ile de yapabiliriz

for(let i=0; i<isimler.length; i++){
    console.log(isimler[i]);
}

//while ilde yapabiliriz

let sayac = 0;
while(sayac<isimler.length){
    console.log(isimler[sayac]);
    sayac++;
}
