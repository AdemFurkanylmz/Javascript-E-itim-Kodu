//! Faktöriyel bulma uygulaması

let sayi = Number(prompt("Bir sayı girin"));
let carpim =1;

for(let i =1; i<=sayi; i++){
    carpim=carpim*i;
}
   alert("Sonuç " + carpim);
    
