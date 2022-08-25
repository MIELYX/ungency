const hamburger = document.querySelector('.hamburger')
const slideOutNav = document.querySelector('.nav__slide-out')
const slideOutItems = document.querySelectorAll('.nav__slide-out .item')
const currentYear = document.querySelector('.current-year')
const btnLeft = document.querySelector('.arrow-left')
const btnRight = document.querySelector('.arrow-right')
const itemList = document.querySelectorAll('.work-item')
const italianPizza = document.querySelector('.works__italianpizza')
const justYou = document.querySelector('.works__justyou')
const form = document.querySelector('.form')
const submit = document.querySelector('.contact__form-btn')
const alert = document.querySelector('.contact__form-alert')
const checkbox = document.querySelector('.checkbox__input')
const works = document.querySelector('.works__items')

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
		justYou.classList.toggle('swap1')

		italianPizza.classList.toggle('swap2')
	} else {
		justYou.classList.toggle('swap3')

		italianPizza.classList.toggle('swap4')
	}
}

const alertShow = () => {
	if (!checkbox.checked) {
		alert.classList.remove('hidden')
	} else {
		alert.classList.add('hidden')
	}
}

const animationChange = () => {
	const vWidth = window.innerWidth
	if(vWidth < 1200){
		works.setAttribute('data-aos', 'fade-up')
	}
}


animationChange()
handleCurrentYear()
btnLeft.addEventListener('click', slider)
btnRight.addEventListener('click', slider)
hamburger.addEventListener('click', slideOut)
slideOutItems.forEach(item => item.addEventListener('click', slideOut))

italianPizza.addEventListener('click', swaper)
justYou.addEventListener('click', swaper)
submit.addEventListener('click', alertShow)