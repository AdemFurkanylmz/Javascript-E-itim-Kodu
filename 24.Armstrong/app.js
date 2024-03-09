// 153 - 370 - 407 sayısı armstrong 

// 153 = 1*1*1 + 5*5*5 + 3*3*3

let sayi = prompt("Sayı giriniz");
let toplam = 0;
for(let i=0; i<=sayi; i++){
    let rakam = sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}   
if(Number(sayi)==toplam){
    alert("Armstrong sayısıdır ");
}
else{
    alert("Armstrong sayısı değildir");
}