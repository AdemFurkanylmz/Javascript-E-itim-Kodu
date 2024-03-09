//! DATE KULLANIMI

let tarih = new Date()
console.log(tarih);

console.log(tarih.getFullYear());
console.log(tarih.getDate());
console.log(tarih.getDay());
console.log(tarih.getHours());
console.log(tarih.getMilliseconds());
console.log(tarih.getMinutes());
console.log(tarih.getMonth());
console.log(tarih.getSeconds());
console.log(tarih.toLocaleDateString());
console.log(tarih.toLocaleTimeString());
console.log(tarih.toLocaleString());

//? Set Metotları

console.log(tarih);
tarih.setHours(15);
tarih.setDate(24);
tarih.setMonth(12);
tarih.setMinutes(53);

tarih.setHours(tarih.getHours()+3);
console.log(tarih);