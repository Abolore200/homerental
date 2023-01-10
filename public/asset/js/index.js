const menuBar = document.querySelector('.homeLink span')
menuBar.addEventListener('click', function(e){
    e.preventDefault()
    const ul = document.querySelector('.navbarListHome ul')
    ul.classList.toggle('show')
    const homeLink = document.querySelector('.homeLink')
    homeLink.classList.toggle('fixed')
    const headerBackground = document.querySelector('header .backgroundHome')
    headerBackground.classList.toggle('showMargin')
    const headerHome = document.querySelector('header')
    headerHome.classList.toggle('showHeader')
    const mainImage = document.querySelector('.allMain')
    mainImage.classList.toggle('marginTop')
})

const copyRight = document.querySelector('.homeCopy p span')

const year = new Date().getFullYear()

copyRight.innerHTML = year