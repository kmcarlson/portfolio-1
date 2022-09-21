// Menu show/hide

const menuShow = document.querySelector('#menuShow');
const menuhide = document.querySelector('#menuhide');

menuShow.addEventListener('click', () => {
    if (menuhide.classList.contains('hidden')) {
        menuhide.classList.remove('hidden');
    } else {
        menuhide.classList.add('hidden');
    }
})

function handleScroll(id){
    let goTo = document.getElementById(id);
    goTo.scrollIntoView({behavior: "smooth"})
    
}

