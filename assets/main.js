/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const swiperFavourite = new Swiper('.favourite__swiper', {
    loop: true,
    slidePerView:'auto',
    centeredSlides:'auto',
    grabCursor: true,
    breakpoints:{
        769:{
            slidesPerView:3,
        }
    }
  });

  /*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// scroll reveal animation 
const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true, //animation repeat
})

sr.reveal(`.home__social, .favourite__container, .sponser__container, .footer`)
sr.reveal(`.new__title span:nth-child(1)`,{origin:'left',opacity:1})
sr.reveal(`.New__title span:nth-child(3)`,{origin:'right',opacity:1})
sr.reveal(`.home__tooltip , .home__button .model__button`,{origin:'bottom'})
sr.reveal(`.about__data`,{origin:'left'})
sr.reveal(`.about__img , .model__tooltip`,{origin:'right'})
sr.reveal(`.about__data`,{origin:'left'})


// sr.reveal(`.`)