/* https://jsonplaceholder.typicode.com/posts */

console.log("API den veri çekme Başladı. JavaScript ile");


var Hedef = document.getElementById("listele");

let Kaynak = fetch("https://jsonplaceholder.typicode.com/posts")
.then(Cevap=>Cevap.json())
//.then(Veri=>console.log(Veri));
.then(Veri=>{
    /* Birden Fazla Kod yazarsak, Küme parantezi aç */

    Veri.forEach(element => {
        
        // ** console.log(element);

        // ** console.log(element.title);

        Hedef.innerHTML+= `<li id=${element.id}> ${element.title}</li>`;

    });
})

