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

function formatTime(time) {
    return `${String(time.hours).padStart(2, '0')}h ${String(time.minutes).padStart(2, '0')}m ${String(time.seconds).padStart(2, '0')}s`;
}

function decrementTime(time) {
    if (time.seconds > 0) {
        time.seconds--;
    } else {
        if (time.minutes > 0) {
            time.minutes--;
            time.seconds = 59;
        } else {
            if (time.hours > 0) {
                time.hours--;
                time.minutes = 59;
                time.seconds = 59;
            }
        }
    }
}

const timersIndex = document.querySelectorAll('.card-timer')
setInterval(() => {
    timersIndex.forEach(item => {
        let regex = /(\d+)h\s*(\d+)m\s*(\d+)s/
        let time = item.textContent.match(regex)
        let timeInfo = {
            hours: parseInt(time[1], 10),
            minutes: parseInt(time[2], 10),
            seconds: parseInt(time[3], 10)
        }

        decrementTime(timeInfo);
        
        item.textContent = `${timeInfo.hours >= 10 ? timeInfo.hours : '0' + timeInfo.hours.toString()}h ${
            timeInfo.minutes >= 10 ? timeInfo.minutes : '0' + timeInfo.minutes.toString()
        }m ${timeInfo.seconds >= 10 ? timeInfo.seconds : '0' + timeInfo.seconds.toString()}s`
        
    })
}, 1000)
