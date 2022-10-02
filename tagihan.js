fetch('tagihan.json')

.then(m => m.json())
.then(m =>{
    let card = "";
    m.forEach(e => {
        card += tem(e)
    });
    document.querySelector('.table #leng .leng').innerHTML = card;
    let list = document.querySelectorAll('.table #leng .leng h4');
    list.forEach(m =>{
        m.addEventListener('mouseenter', function(){
            m.classList.add('h-active')
        })
        m.addEventListener('mouseleave', function(){
            m.classList.remove('h-active')
        })
    })
})
.catch((err) => {
    console.log(err);
});




function tem(m){
    return `<h4>${m.nama}</h4>`
}