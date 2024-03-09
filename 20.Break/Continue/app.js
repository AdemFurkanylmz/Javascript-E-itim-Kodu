//!break / continue

//1'den 10'a kadar sayıları yazdıralım 8'e gelince döngüden çıkalım

let sayac = 1;

while(sayac<=10){
    console.log(sayac);
    if(sayac==  8){
        break;
    }
    sayac++;
}

//? Continue

let sayac1 = 0;
while(sayac1<=10){
    sayac1++;
    if(sayac1>10){
        break;
    }
    if(sayac1==8){
        continue;
    
    }
    console.log(sayac1);

}