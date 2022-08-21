const hamburger = document.querySelector('.hamburger')
const slideOutNav = document.querySelector('.nav__slide-out')
const slideOutItems = document.querySelectorAll('.nav__slide-out .item')
const currentYear = document.querySelector('.current-year')

const handleCurrentYear = () => {
	const year = (new Date).getFullYear()
	currentYear.innerText = year;
}

const slideOut = () => {
	slideOutNav.classList.toggle('slide-out')
	document.body.classList.toggle('sticky-body')
}

handleCurrentYear()
hamburger.addEventListener('click', slideOut)
slideOutItems.forEach(item => item.addEventListener('click', slideOut))
