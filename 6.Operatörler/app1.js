//!-----Atama operatörleri--------

/*
   =
   ==
   ===
   +=
   -=
   *=
   /=
   %=   
   **=
*/

let x = 5;

//! == : eşittir 

let a = 5;
let b = 10;
let sonuc = a+b;
console.log(sonuc == 15); //True

// == :
console.log(5 == "5");  // True

//! === : Hem tiplerinin hem de değerlerinin eşit olup olmadığına bakar.
console.log(1 == "1"); // False

let sayi = 4;
// sayi = sayi+2;
sayi+=2;
console.log(sayi);

let sayi1 = 12;
sayi1-=3;
console.log(sayi1);

let sayi2 = 16;
sayi2*=8;
console.log(sayi2);

let sayi3 = 21;
sayi3/=3;
console.log(sayi3);

let sayi4 = 25;
// sayi4 = sayi4%3
sayi4%=3;
console.log(sayi4);

let sayi5 = 13;
sayi5**=3;
console.log(sayi5);


