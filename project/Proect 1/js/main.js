function SlidesPlugin(activeSlide = 2){
const slaidsd = document.querySelectorAll('.slide');

slaidsd[activeSlide].classList.add('activ')

for (const slide of slaidsd){
    slide.addEventListener('click', () =>{
        clearActiveClasses()

        slide.classList.add('activ')
        
    });
}

function clearActiveClasses(){
    slaidsd.forEach((slide) =>{
        slide.classList.remove('activ')
    })
}
}
SlidesPlugin()