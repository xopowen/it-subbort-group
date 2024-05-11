export default class TellNumberMask{


    /**
     *
     * @param {HTMLInputElement} field type == tel
     * @description добавляет маску номера телефона +7(914) 00 00 000
     */
    constructor(field) {
        this.mask = '+7(___) __ __ ___'
        this.field = field
        this.listInputChar = Array.from(this.mask)

        this.field.addEventListener('focus', this.focus)
        this.field.addEventListener('input', this.input)
    }

    eventIfAdd = () => {
        let value = this.field.value

        let numberArray = value.split('')
            .filter((v, i) => !Number.isNaN(+v) && v!==' ')


        if(+numberArray[0] === 7){
            numberArray = numberArray.slice(1).reverse()
        }
        console.log(numberArray)
        let  res = []
        this.listInputChar.forEach(value => {
            if(numberArray.length===0){
                return;
            }
            if(value === '_'){
                res.push(numberArray.pop())
                return;
            }
            res.push(value)
        })
        console.log( res.join(''))
        this.field.value = res.join('')



    }
    eventIfMinus = () => {

    }
    input = () => {

            this.eventIfAdd()


    }

    focus = () => {
        console.log(this.mask.substring(0, 3))
        if (this.field.value.length === 0) {
            this.field.value = this.mask.substring(0, 3)
        }

        this.setCursorToChar()
    }

    setCursorToChar() {
        this.field.selectionStart = this.field.value.length
        this.field.selectionEnd = this.field.value.length
    }

    remove() {
        this.field.removeEventListener('input', this.input)
        this.field.removeEventListener('focus', this.focus)
    }

}