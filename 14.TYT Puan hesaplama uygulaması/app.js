/*
    //? Sorular
    
    1-Türkçe  40  / 4puan
    2-Matematik 40 
    3-Sosyal Bilimler
    4-Fen Bilimleri

    ------->100 puan ÖSYM veriyor
    ------->Okul puanı max 60 veriyor

*/
    let turkceDogru, turkceYanlis = 0; 
    let matematikDogru, matematikYanlis =0;
    let sosyalDogru, sosyalYanlis =0;
    let fenDogru, fenYanlis = 0;

    let yeniSatır = "\r\n"
    let mesaj = "TYT puan hesaplama uygulamasına hoşgeldiniz"+yeniSatır
    +"1-Puan Hesapla"+yeniSatır
    +"2-Çıkış Yap";

    let secim = prompt(mesaj);

    switch(secim){
        case "1":
            okulPuani= Number(prompt("okul puanınızı giriniz"));

            turkceDogru = Number(prompt("Türkçe doğru sayısı"));
            turkceYanlis = Number(prompt("Türkçe yanlış sayısı")) ;

            matematikDogru = Number(prompt("Matematik doğru sayınız"));
            matematikYanlis= Number(prompt("Matematik yanlış sayınız"));

            fenDogru = Number(prompt("Fen Bilimleri doğru sayınız"));
            fenYanlis = Number(prompt("Fen Bilimleri yanlış sayınız"));

            sosyalDogru = Number(prompt("Sosyal Bilimler doğru sayınız"));
            sosyalYanlis= Number(prompt("Sosyal Bilimler yanlış sayınız"));
            

            let dogruSayisi = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
            let yanlisSayisi = turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
            let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4);
            puan = (kalanDogruSayisi*4) + 100 + okulPuani;
            alert("TYT puanınız : " + puan);
            
            break;

        case "2":
            alert("Uygulamadan çıkış yapıldı");
            break;

        default :
        alert("Lütfen geçerli bir sayı aralığında değer giriniz")
        break;
        

    }


