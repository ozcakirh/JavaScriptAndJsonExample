
let Tiklamasay = 0;

function Hello(params) {
    alert(params);
    Tiklamasay++;
    getOzellik()
}

function getOzellik() {
    document.writeln(" <div onclick=Hello(Huseyin); class='jsTikla'> Tikla İki</div> ", "<br/><hr/>");
    document.writeln("Ekran Genişliği :", screen.width, "<br/>");
    document.writeln("Ekran Yüksekliği :", screen.height);

    document.writeln("<br/><hr/>Kaçkere Tıklandım :", Tiklamasay, "<hr/>");

    document.writeln("Zaman", new Date().valueOf());

}

function WDOSDemo(nPencere) {


    //nPencere.document.writeln(" <div onclick=Hello(Huseyin); class='jsTikla'> Tikla İki</div> ", "<br/><hr/>");
    var sonuc = nPencere;

    Tiklamasay++;

    //sonuc.innerHTML = "<br/><hr/>Kaçkere Tıklandım : " + Tiklamasay + "<hr/> <div onclick='WDOSDemo(dvPencere);' > Tikla </div>";

    var kim = document.getElementById("grDeger");

    var Deger = parseInt(kim.value) + 1;

    sonuc.innerHTML = "<input id='grDeger' value='" + Deger + " ' />"

    sonuc.height = 150;

    sonuc.width = 150;

    sonuc.top = 20 + Tiklamasay;

    sonuc.style.color = rgbToHex(25 * Tiklamasay, 25 + Tiklamasay * 5, 45);//rgb(255, 255, 0); // = 20 + Tiklamasay;

    sonuc.style.left = 100 + Tiklamasay;

    sonuc.style.position = "relative";

    sonuc.style.top = "1" + Tiklamasay + "px";

    sonuc.style.left = 100 + Tiklamasay + "px"


    console.log(sonuc);


    //alert(sonuc);

}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}