//!-------Tur Dönüşümleri------------
//? strings, numbers, boolens, undefined and null
//? objects, function

// String veri tipinden Number veri tipine dönüştürmek...

    // let a = 5;
    // let b = ("10");
    // console.log(a+b); //510

    let c = Number(b)
    console.log(a+c) //15

    let a = 5;
    let b = Number("10");
    console.log(a+b); //15

    let x = 8;
    let y = parseInt("12.7"); //12
    let z = parseFloat("12.7"); //12.7
    console.log(y);;


// Number veri tipinden String veri tipine Dönüştürmek

    let e = String(55);
    let j = (55). toString();
    console.log(typeof e);
    console.log(e);

    let sonuc = String(true);
    console.log(typeof sonuc);
    console.log(sonuc);


    let rakamlar = String([1,2,3,4,5,6,7,8,9]);
    console.log(typeof rakamlar);
    console.log(rakamlar);



