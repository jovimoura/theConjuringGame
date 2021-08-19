function trocaPagina(pagina){
    
    location.replace(pagina);
}

function avancaPagina(proximaPagina,respostaCorreta){
    while(true){
        let escolha = prompt("Escolha a opção A ou B").toLocaleLowerCase();
        if(escolha === 'a' || escolha === 'b'){
            if(escolha === respostaCorreta){
                trocaPagina(proximaPagina);
                
            }else{
                trocaPagina("../gameOver/gameOver.html");
                
            }
            break
        }else{
            alert("Resposta Inválida!");
        }
        
        
    }
}