//! Parametreli method oluşturma

function yazdir(isim,soyisim){
    // debugger;
    console.log(isim + " " + soyisim);
    
}
// debugger;
yazdir("Adem Furkan","Yılmaz");
yazdir("Mauro Emanuel", "İcardi Riveriro");

cube(3)
cube(505)
function cube(sayi){
    console.log(sayi*sayi*sayi);
}

let yas = Number(prompt("Yaşınızı giriniz"));
kontrolEt(yas);

function kontrolEt(yas){    
    if(yas>18){
        alert("Ehliyetinizi alabilirsiniz");
    }
    else{
        alert("Ehliyet alamassın yaşın küçük büyü öyle gel");
    }
}