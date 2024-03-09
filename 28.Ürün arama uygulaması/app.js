let urun1 =  {
    isim : "Monster Abra A5",
    kategori :"Teknoloji",
    fiyat :  33000
}
let urun2 =  {
    isim : "Monster Abra A7",
    kategori :"Teknoloji",
    fiyat : 35000
}
let urun3 =  {
    isim : "Apple Mac",
    kategori :"Teknoloji",
    fiyat : 165000
}
let urun4 =  {
    isim : "Casper Excalibur",
    kategori :"Teknoloji",
    fiyat : 42000
}
let urun5=  {
    isim : "MSİ GT",
    kategori :"Teknoloji",
    fiyat : 92000
}

let urunler = [urun1,urun2,urun3,urun4,urun5];
let filtreliUrunler = [];
let kullaniciUrunİsmi = prompt("Bir ürün ismi giriniz");    

filtreliUrunlerDoldur(urunler);
filtreliUrunlerYazdir(urunler);

function filtreliUrunlerDoldur(urunler){
    urunler.forEach(function (urun){
        if(urun.isim.toUppercase().includes(kullaniciUrunİsmi.toUppercase(), 0)){
            filtreliUrunler.push(urun);
        }
    });
}

function filtreliUrunlerYazdir(urunler){
    urunler.forEach(function (urun){        
        console.log("------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("------------------------------");
    });
}