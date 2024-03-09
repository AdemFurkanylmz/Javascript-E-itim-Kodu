//! Kelime bulma uygulaması

let metin = "Galatasaray her türlü maçı kazanır";

let harf = prompt("Harfi giriniz");

let sonuc = bul(harf);
    alert("Harf sayısı " + sonuc);

function bul(harf){
    let toplam = 0;
        for(let i=0; i<metin.length; i++){
            if(metin.charAt(i).toLocaleLowerCase()===harf.toLocaleLowerCase()){
                toplam+=i
            }
        }
        return toplam;
}
