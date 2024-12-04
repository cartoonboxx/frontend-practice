document.addEventListener('DOMContentLoaded', () => {
    const incrementNums = setInterval(() => {
        // console.log(document.querySelectorAll('.statistics-block h1'));
        let [num1, num2, num3] = document.querySelectorAll('.statistics-block h1')
        // console.log(parseInt(num1.textContent) + 1, num2.textContent, num3.textContent)

        if (parseInt(num1.textContent) < 430) {
            num1.textContent = `${parseInt(num1.textContent) + 5}K+`
        }
        if (parseInt(num2.textContent) < 160) {
            num2.textContent = `${parseInt(num2.textContent) + 2}K+`
        }
        if (parseInt(num3.textContent) < 87) {
            num3.textContent = `${parseInt(num3.textContent) + 1}K+`
        }

        console.log(parseInt(num1.textContent), parseInt(num2.textContent), parseInt(num3.textContent));
        
        if (parseInt(num1.textContent) === 430 && parseInt(num2.textContent) === 160 && parseInt(num3.textContent) === 87) {
            clearInterval(incrementNums)
        }
    }, 20)
})

function scrollRightContainer() {
    const slider = document.querySelector('[card__container]')
    slider.scrollTo({left: slider.scrollLeft + 400, behavior: "smooth"})
}

function scrollLeftContainer() {
    const slider = document.querySelector('[card__container]')
    slider.scrollTo({left: slider.scrollLeft - 400, behavior: "smooth"})
}