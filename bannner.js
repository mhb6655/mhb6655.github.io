
const tampil= document.querySelector('.tampil .banner');

fetch("banner.json")

.then(d => d.json())
.then(a => {
    let card = "";
    a.forEach(m => {
        card += banner(m)   
    });
    tampil.innerHTML= card;
    ban()
}).catch((err) => {
   console.log(err); 
});



let ind = 0;

function ban(){
    
    let gambarBanner = document.querySelectorAll('.tampil .banner img');
    for ( let i = 0; i < gambarBanner.length; i++){
    gambarBanner[i].style.display = "none"
    }

    ind++;
    if (ind > gambarBanner.length){
        ind = 1
    }
    gambarBanner[ind-1].style.display = "block";
    setTimeout(ban,4000)
}

function banner(m){
    return `<img src="${m.gambar}" class='gban'>`
};