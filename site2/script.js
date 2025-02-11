class CounterComponent {
    classList = {
        current: 'counter'
    }

    selectors = {
        button: 'button',
        h4: 'h4'
    }

    constructor() {
        this.currencyElement = null;
        this.textElement = null;
        this.bindEvents();
        
    }

    operationWithItem(buttonElement) {
        const { textContent } = buttonElement
        this.textElement = this.currencyElement.querySelector('h4');
        if (textContent === '+') {
            this.textElement.textContent = this.textElement.textContent < 9 ?
             '0' + ++this.textElement.textContent :
              ++this.textElement.textContent;
        }
        else {
            this.textElement.textContent = this.textElement.textContent < 11 ?
             '0' + --this.textElement.textContent :
              --this.textElement.textContent;
            if (this.textElement.textContent === '0-1') {
                this.textElement.textContent = '00'
            }
        }
    }

    bindEvents() {
        document.addEventListener('click', (event) => {
            const {target} = event
            if (target.parentElement.classList.contains(this.classList.current)) {
                this.currencyElement = target.parentElement
                this.operationWithItem(target)
            }
        })
    }
}

new CounterComponent();