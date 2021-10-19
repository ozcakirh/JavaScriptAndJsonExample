/* Kaynak :
https://www.youtube.com/watch?v=UkB-zKNBVTo
*/


let dataHavuz=
{
    Kisiler:[
    {Adi:"Hüseyin",Soyadi:"ÖZÇAKIR",Yas:50},
    {Adi:"Mümin",Soyadi:"ÖZÇAKIR",Yas:25},
    {Adi:"Tubanur",Soyadi:"ÖZÇAKIR",Yas:26}
    ],
    islem:"SallaGitsin"
}

var ListeHedef = document.getElementsByClassName("kisilerimiz")[0];

for(let Getir  in dataHavuz )
{
    console.log(Getir);
    console.log("Gelen Verinin Tipi :" , typeof Getir);
    console.log("Gelen Verinin Tipi (dataHavuz):" , typeof dataHavuz[Getir]);
    console.log("--------------------------------------\n\r");

    console.log(dataHavuz[Getir]);

    console.log("=======================================\n\r");
    // of komutu stringi de dizi gibi gösteri
    for(Veri of dataHavuz[Getir])
    {
        console.log(Veri);
    }
}

console.log("***********************************");

for(let GetirA  in dataHavuz )
{
    var xGelen = dataHavuz[GetirA];

    console.log("xGelen : ",xGelen );

    if ( GetirA == "Kisiler")
    {
        for(isimler in xGelen )
        {
            /* 
               Template Litaratür Karaktere dikkat aşağıda ( `  )  
               AltGr Tuşu ile virgül ve noktalı virgüldeki tuşa bas ve sonra boşluk tuşuna bas ki bunu yazsın `
               Kaynak : https://www.youtube.com/watch?v=UkB-zKNBVTo

            */
            ListeHedef.innerHTML+= `<li>${xGelen[isimler]["Adi"]} ${ xGelen[isimler]["Soyadi"] }</li>`
            console.log(xGelen[isimler]["Adi"]);
        }
    }

    console.log("--- Final ----");
}


