function calculadora(){
    return {
        display:document.querySelector('.display'),
        limpaDisplay(){
            this.display.value = '';
        },
        calcularResultado(){

            try{
                let resultado = eval(this.display.value);
                if(resultado)
                    this.display.value = Math.fround(resultado);

            }catch (e){
                alert('Operação Inválida');
                this.limpaDisplay();
            }
        },
        apagarNumero(){
            let numeros = this.display.value;
            this.display.value = numeros.slice(0,-1);
        },
        digitaNumeros(){
            document.addEventListener('click',e => {
                const tecla = e.target;
                if(tecla.classList.contains('btn-num')){
                    this.display.value += tecla.textContent;
                }
                if(tecla.classList.contains('btn-clear')){
                    this.limpaDisplay();
                }
                if(tecla.classList.contains('btn-eq')){
                    this.calcularResultado();
                }

                if(tecla.classList.contains('btn-delete')){
                    this.apagarNumero();
                }
            })
            document.addEventListener('mouseover',(e) => {
                const tecla = e.target;
                if(tecla.classList.contains('btn-sinal')){
                    toolTip(tecla.getAttribute('title'))
                }
            })
            document.addEventListener('mouseout',(e) => {
                const tecla = e.target;
                if(tecla.classList.contains('btn-sinal')){
                    toolTip()
                }
            })
            document.addEventListener('keydown',e=>{
                const tecladoNumerico = e.code.slice(0,6);
                if(tecladoNumerico === 'Numpad' && e.key !== 'Enter')
                    this.display.value += String(e.key);
                if(e.key === 'Enter')
                    this.calcularResultado();
                if(e.key === 'Backspace')
                    this.apagarNumero();
            })
        },
    }
}

let calc = calculadora();
calc.digitaNumeros();