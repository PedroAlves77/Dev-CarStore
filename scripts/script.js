document.addEventListener('DOMContentLoaded', () => {
    let prevButton = document.getElementById('prev')
    let nextButton = document.getElementById('next')
    let container = document.querySelector('.container')
    let items = container.querySelectorAll('.list .item')
    let indicator = document.querySelector('.indicator')
    let dots = indicator.querySelectorAll('ul li')
    let list = container.querySelector('.list')


    let ativo = 0
    let firstPosition = 0
    let lastPosition = items.length - 1

    function setSlider() {

        let itemOld = container.querySelector('.list .item.ativo')
        itemOld.classList.remove('ativo')

        let dotsOld = indicator.querySelector('ul li.ativo')
        dotsOld.classList.remove('ativo')
        dots[ativo].classList.add('ativo')

        indicator.querySelector('.number').innerHTML = '0' + (ativo + 1)

    }

    nextButton.onclick = () => {
        list.style.setProperty('--calculation', 1)
        ativo = ativo + 1 > lastPosition ? 0 : ativo + 1
        setSlider()
        items[ativo].classList.add('ativo')
    }

    prevButton.onclick = () => {
        list.style.setProperty('--calculation', -1)
        ativo = ativo - 1 < firstPosition ? lastPosition : ativo - 1
        setSlider()
        items[ativo].classList.add('ativo')
    }

});


