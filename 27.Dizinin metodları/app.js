//! Dizinin metodlari
/*
push : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner
unshift : dizinin başına eleman ekler , eleman sayısını geriye döner

pop : dizinin sonunda eleman siler , eleman sayısını döner
shift : dizinin başından eleman siler , eleman sayısını döner

splice(index,incdex) : eleman eklemek ve silmek için kullanılır

toString : diziyi stringe çevirebiliriz
join : diziyi stringe çeviri. farkı ise araya eleman ekleyebiliriz

concat : dizileri birleştirmek için kullanılır
slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi oluşturur
length : dizinin uzunluğunu verir
reverse ; dizinin elemanlarını ters çevirmek
split(bölmek) : belirli bir ifadeye göre bölüp diziye çevirmek
indexOf ; elemanın index numarasını verir
includes: verilen elemanı içeriyor mu ona bakar
*/

let arabalar = ["BMW","TOYOTA","MERCEDES","ROLLS ROYCE","PORSCHE"];
let arabalar1 = ["TESLA","TOGG","LAMBORGHİNİ"];
//? Push Metot
console.log(arabalar);
arabalar.push("Ford");
console.log(arabalar);

//?Unshift metot
arabalar.unshift("Hyundai");
console.log("arabalar");

//? Pop metot
arabalar.pop();
console.log(arabalar);

let silinenEleman = arabalar.pop();
console.log(silinenEleman);

//? Shift metot
arabalar.shift();
console.log(arabalar);

//? Splice metot
arabalar.splice(1,0,"Peugeot");
console.log(arabalar);

arabalar.splice(5,0);
console.log(arabalar);

arabalar.splice(2,2,"Renault");
console.log(arabalar);

//? TOSTRİNG metot
console.log(arabalar);
let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar);
console.log(stringArabalar);

//? JOİN metot
let stringArabalar1 = arabalar.join("?")
console.log(stringArabalar1);

//?CONCAT metot
let birlesmisDizi = arabalar.concat(arabalar1);
console.log(birlesmisDizi);

//? SLİCE metot
console.log(arabalar);
let ayriDizi = arabalar.slice(2);
console.log(ayriDizi);

//? LENGTH özellik
console.log(arabalar.length);

//? Reverse metot
console.log(arabalar);
arabalar.reverse;
console.log(arabalar);

//? SPLİT metot
let isimler = "Fatih,Yavuz,Kanuni"

let isimlerDizi = isimler.split(",")
console.log(typeof isimlerDizi);

//? İNDEXOF metot
let index = arabalar.indexOf("BMW")
if(index==0){
    console.log("belirtilen eleman vardır");
}
else{
    console.log("eleman yoktur");
}

//? İNCLUDES metot

let sonuc = arabalar.includes("BMW");
if(sonuc){
    console.log("eleman vardır");
}
else{
    console.log("eleman yoktur");
}