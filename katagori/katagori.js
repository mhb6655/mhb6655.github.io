fetch('katagori/katagori.json')

.then(m => m.json())
.then(m =>{
    let card ="";
    m.forEach(m =>{
        card += templete(m)
    })
    document.querySelector('.pilih-kat .pilih').innerHTML = card
})
.catch((err) => console.log(err))


function templete(dt){
    return `<div class='card-kat'>
               <img src='${dt.gambar}' class='img-kat'>
               <h4 class='nm-kat'>${dt.nama}</h4>
            </div>`
}