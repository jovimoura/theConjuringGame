function trocaPagina(pagina){
    location.replace(pagina);
}

function avancaPagina(proximaPagina,respostaCorreta){
    while(true){
        let escolha = prompt("Escolha a alternativa A ou B").toLocaleLowerCase();
        if(escolha === "a" || escolha === "b"){
            if(escolha === respostaCorreta){
                trocaPagina(proximaPagina);
            }else{
                trocaPagina("gameOver.html");
            }
        }else{
            alert("Resposta Inválida!");
        }
        break;
    }
}