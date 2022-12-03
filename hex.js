const btSimple = document.getElementById('btn-simple')
const btHex = document.getElementById('btn-hex')

const cor = document.getElementById("txt-background")

btSimple.addEventListener("click", function(){
    location.href = "simple.html"
})

btHex.addEventListener("click", function(){
    location.href = "hex.html"
})

/*======================Gerar numero aleatorio============================ */

function  gerarStringAleatoria(num) {
    const characters ='ABCDEF0123456789';
    let result1= '';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result1;
}


/*======================================================= */
const clickME = window.document.getElementById("btn-clickMe")

clickME.addEventListener("click", function(){

        let corAleatoria = gerarStringAleatoria(6)
        
        let corSelecionada = document.getElementById("txt-background")

        document.getElementById("main-box").style.backgroundColor = `#${corAleatoria}`;

        cor.textContent = corAleatoria

        corSelecionada.textContent = `Background Color : #${corAleatoria}`

        console.log(corAleatoria);
})


