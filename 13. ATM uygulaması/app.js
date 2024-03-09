/*
1-Bakiye Görüntüleme
2-Para çekme
3-Para Yatırma
4-Çıkış
*/

//! Atm Uygulaması

let yeniSatir = "\r\n"
let bakiye = 1000;

let metin = "1-Bakiye görüntüleme"+yeniSatir
+"2-Para çekme"+yeniSatir
+"3-Para yatırma"+yeniSatir
+"4-çıkış"+yeniSatir
+"Lütfen bir değer seçiniz";

let secim = prompt(metin);
switch(deger){
        case "1":
            alert("Bakiyeniz" + bakiye);
            break;
        case "2":
            let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz"));
            if (cekilecekTutar<bakiye){
                bakiye = bakiye - cekilecekTutar;
                alert("Kalan Bakiye : " + bakiye);
            }
            else{
                alert("Bakiyenizden fazla para çekemezsiniz" + yeniSatir + "Bakiyeniz :" + bakiye + " " + "Çekilecek Tutar" + cekilecekTutar);

            }
            break;
        case "3":
            let yatırilacakTutar = Number(prompt("  Yatırılacak tutarı giriniz"));
            bakiye = bakiye + yatırilacakTutar;
            alert("Güncel bakiyeniz" +  bakiye);
            break;
        case "4":
            alert("Sistemden çıkış yapılmıştır");
            break;
        default:
            alert("Lütfen 1 ile 4 arasında değer giriniz");
            break;
}
