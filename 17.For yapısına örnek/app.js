
// 1'den 10'a kadar yazdıralım

for(let i=0 ; i<=10; i++){
console.log(i);
}

//1'den 10'a kadar çiftleri yazdıralım

for(let i=0 ; i<=10 ; i=i+2){
    console.log(i)
}

//i'den 10'kadar tekleri yazdıralım

for(let i=1 ; i<=10; i=i+2){
    console.log(i);
}

/*
* Fernando
* Muslera
* Fernando
* Muslera
*/

for(let i=1; i<=20; i++ ){
        if(i%2==1){
            console.log("Fernando");
        }
        else{
            console.log("Muslera");
        }
}

// 50'de 1'e kadar gidelim ve toplamlarını bulalım
let toplam = 0;
for(let i=50; i>=1; i--){
    toplam = toplam+i;
    console.log(i);
}
console.log("Toplam :" + toplam);
