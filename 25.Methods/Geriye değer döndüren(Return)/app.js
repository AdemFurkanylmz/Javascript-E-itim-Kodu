//! Geriye döndüren değer tanımlamak --- return: geriye döndürmek

let donenDeger = cube(6);
kareAl(donenDeger);

function kareAl(sayi){
    let sonuc = sayi*sayi;
    console.log(sonuc);
}

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}

// ?    Bir değerimetodun dışarısına çıkarmak , taşımak için kullanılır
// ?    Bir metodu bitiren anahtar kelimedir