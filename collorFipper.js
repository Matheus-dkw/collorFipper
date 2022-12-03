const btSimple = document.getElementById('btn-simple')
const btHex = document.getElementById('btn-hex')

btSimple.addEventListener("click", function(){
    alert("teste")
})

btHex.addEventListener("click", function(){
    corAleatoria()
})

/*======================Gerar numero aleatorio============================ */

function  gerarStringAleatoria(num) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= '# ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result1;
}


/*======================================================= */
const clickME = window.document.getElementById("btn-clickMe")

const coresSimples = ['#d7e5f0','#d74040', '#4584e2', '#4bc84d', '#1050a8']

let i = 1


clickME.addEventListener("click", function (){

    if(i >= coresSimples.length){
        
        let corSelecionada = document.getElementById("txt-background")

        document.getElementById("main-box").style.backgroundColor = coresSimples[0];

        corSelecionada.textContent = `Background Color : ${coresSimples[0]}`

        i = 1
    }else{
        mudarCor()
        i++
}
    console.log("Próximo Index: ", i, "Cor: ",coresSimples[i]);
})



function mudarCor(){
    let corSelecionada = document.getElementById("txt-background")
        document.getElementById("main-box").style.backgroundColor = coresSimples[i];
        corSelecionada.textContent = `Background Color : ${coresSimples[i]}`
}

/*================================================================== */




console.log(gerarStringAleatoria(6));