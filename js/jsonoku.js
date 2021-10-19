/* 
    Fetch()  Api ile, veri çekiyoruz

    cors Hatalarına dikkat

*/
/* Kaynak : https://www.youtube.com/watch?v=P6ZVXAwmHAY */
var data = fetch("json.data/veri.json")
/* Gelen Cevap için Arrow Function Yazdık */
.then(Cevap=>console.log(Cevap));

/* eski Yöntem */
var data2 = fetch("json.data/veri.json")
/* Gelen Cevap için Arrow Function Yazdık */
.then(function(Cevap)
  { return console.log(Cevap);
});


var DataJson = fetch("json.data/veri.json")
/* Gelen Cevap için Arrow Function Yazdık */
.then(Cevap=>console.log(Cevap.json()));

/*json olarak gelen datayı yazdırma */

var DataJson2 = fetch("json.data/veri.json")
/* Gelen Cevap için Arrow Function Yazdık */
.then(Cevap=>Cevap.json())
.then(VeriGeldi=>console.log(VeriGeldi)
);

var DataJson3 = fetch("json.data/veri.json")
/* Gelen Cevap için Arrow Function Yazdık */
.then(Cevap=>Cevap.json())
.then(VeriGeldi=>{
    /* Küme Parantezi açarak birden fazla satır yazabiliriz */
    console.log(VeriGeldi);

    console.log("Kullanıcılar Listesi : " ,VeriGeldi.Kullanicilar);

    console.log("Kullanıcılar Listesi 1. Elaman : " ,VeriGeldi.Kullanicilar[0]);

    console.log("Kullanıcılar Listesi 1. Elaman Adi : " ,VeriGeldi.Kullanicilar[0].Adi);

    console.log("Kullanıcılar Listesi 1. Elaman SoyAdi : " ,VeriGeldi.Kullanicilar[0].Soyadi);

    console.log("==================================");

    console.log("JSON.stringify Komutu, stringe Çevirir");
    
    console.log( JSON.stringify( VeriGeldi.Kullanicilar) ); // Stringe Çevir

    console.log("==================================");

}
);