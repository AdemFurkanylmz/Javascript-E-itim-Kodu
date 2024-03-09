//! Do While Döngüsü

// //? do{
    //kodlar
// }
// while(koşul);

//1'den 10'a kadar yazdıralım

let sayac = 1

do{
    console.log(sayac);
    sayac++
}
while(sayac<=10);


let yas = 23

do{
    console.log(" Otobüs Ehliyetinizi alabilirsiniz")

}
while(yas>=25);

    
//1 'den 20'ye kadar olan tek sayıların toplamını bulunuz
    let sayac1 = 1;
    let toplam = 0;
    do{
        if(sayac1%2==1){
                toplam+=sayac1
        }
        sayac1++;
    }while(sayac1<=20);
    console.log("Toplam" , sayac1)


