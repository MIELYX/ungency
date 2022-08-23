const hamburger = document.querySelector('.hamburger')
const slideOutNav = document.querySelector('.nav__slide-out')
const slideOutItems = document.querySelectorAll('.nav__slide-out .item')
const currentYear = document.querySelector('.current-year')
const btnLeft = document.querySelector('.arrow-left')
const btnRight = document.querySelector('.arrow-right')
const itemList = document.querySelectorAll('.work-item')
const italianPizza = document.querySelector('.works__italianpizza')
const justYou = document.querySelector('.works__justyou')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	currentYear.innerText = year
}

const slideOut = () => {
	slideOutNav.classList.toggle('slide-out')
	document.body.classList.toggle('sticky-body')
}

const slider = () => {
	itemList.forEach(item => {
		if (item.classList.contains('show')) {
			item.classList.remove('show')
		} else {
			item.classList.add('show')
		}
	})
}
const swaper = () => {
	if (justYou.style.left == 0 || justYou.style.left == '0px') {
		justYou.style.left = '-47%'
		justYou.style.transform = 'scale(1)'
		justYou.style.pointerEvents = 'none'
		justYou.style.zIndex= 0

		italianPizza.style.left = '47%'
		italianPizza.style.transform = 'scale(0.85)'
		italianPizza.style.pointerEvents = 'auto'
		italianPizza.style.zIndex= 1

	} else {
		justYou.style.left = 0
		justYou.style.transform = 'scale(0.85)'
		justYou.style.pointerEvents = 'auto'
		justYou.style.zIndex= 1

		italianPizza.style.left = 0
		italianPizza.style.transform = 'scale(1)'
		italianPizza.style.pointerEvents = 'none'
		italianPizza.style.zIndex= 0
	}
}

handleCurrentYear()
btnLeft.addEventListener('click', slider)
btnRight.addEventListener('click', slider)
hamburger.addEventListener('click', slideOut)
slideOutItems.forEach(item => item.addEventListener('click', slideOut))

italianPizza.addEventListener('click', swaper)
justYou.addEventListener('click', swaper)
