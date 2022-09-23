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

// Tried to do this with js but failed.

// function handleScroll(id){
    
//     console.log('this id:' + id);
//     let goTo = document.getElementById(id);
//     console.log(goTo);
//     goTo.scrollIntoView();
//     console.log('wazzup');
    
// }

