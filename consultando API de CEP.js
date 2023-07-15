const cep= document.querySelector('#cep')

const mostrarData = (resultado) => {
    for ( const campo in resultado){
/*'#' referente a todos os id's contidos no parametro
 'resultado'*/
        if (document.querySelector('#'+campo)) {
            document.querySelector('#'+campo).value = resultado[campo]
            console.log(campo)
        }
/*existem 4 campos do API que não estamos usando, 
então pelo if a cima, serão ocultados
OBS: esse else não é necessário, coloquei só pra 
ver como ficaria*/
        else{
            console.log('itens ocultos pe if por não serem utilisados');
        }
    }
}  


cep.addEventListener("blur", (e)=>{
    let buscarCep = cep.value.replace('-','')
    const opcoes = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${buscarCep}/json/`, opcoes)
    .then(response=>{response.json()
        .then (data => mostrarData(data))
    })  
    .cache(e => console.log("Deu erro: " + e,message))
    

})