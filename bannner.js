
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
const tomblRight = document.querySelector('.tampil #banner .right i');
const tomblLeft = document.querySelector('.tampil #banner .left i');
tomblLeft.addEventListener('click', function(){
    })
    

function ban(){
    let i;
    let gambarBanner = document.querySelectorAll('.tampil .banner img');
    for ( i = 0; i < gambarBanner.length; i++){
    gambarBanner[i].style.display = "none"
    }
    let lensBan ="";
    ind++;    
    if (ind > gambarBanner.length){
        ind = 1
    }
    for(i = 0; i < gambarBanner.length; i++){
        lensBan += lens()
    }
    document.querySelector('.tampil #banner .len').innerHTML = lensBan;
    let lensb = document.querySelectorAll('.tampil #banner .len .lens');
    for(i = 0; i < lensb.length; i++){
        lensb[i].classList.remove('lens-active')
    }
    lensb[ind-1].classList.add('lens-active');
    lensb[ind-1].style.backgroundColor = 'tomato';
    gambarBanner[ind-1].style.display = "block";
    setTimeout(ban,6000);
}

function banner(m){
    return `<img src="${m.gambar}" class='gban'>`
};

function lens(){
    return `<span class='lens'></span>`
}
