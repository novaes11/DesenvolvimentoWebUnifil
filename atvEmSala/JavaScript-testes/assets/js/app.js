// let nome = "João Vitor Novaes";

// let idade = 20;

// console.log(nome, idade);

// let n1 = 10;
// let n2 = 20;

// let soma = n1 + n2;

// console.log(`A soma de ${n1} e ${n2} é ${soma}`);

// menu();

// function menu(){
//     let selected = prompt (
//         "----MENU----\n" +
//         "1 - Calculadora\n" +
//         "2 - Sair"
//     )
//     switch(selected){
//         case "1":
//             calculadora();
//             break;
//         case "2":
//             alert("Saindo...");
//             process.exit();
//             break;
//         default:
//             alert("Opção inválida");
//             break;
//     }
// }

// function calculadora(){
//     alert('Insira 2 numeros para uma operação matemática:')
    
    
//     let n1 = prompt('Primeiro nº:');
//     let n2 = prompt('Segundo nº:');

//     let op = prompt('Agora insira o símbolo da operação matemática que deseja realizar');

//     try {
//         switch(op){
//             case '+':
//                 let soma = n1 + n2;
//                 alert(`A soma de ${n1} e ${n2} é ${soma}`);
//                 break;  
//             case '-':
//                 let sub = n1 - n2;
//                 alert(`A subtração de ${n1} e ${n2} é ${sub}`);
//                 break;
//             case '*':
//                 let mult = n1 * n2;
//                 alert(`A multiplicação de ${n1} e ${n2} é ${mult}`);
//                 break;
//             case '/':
//                 let div = n1 / n2;
//                 alert(`A divisão de ${n1} e ${n2} é ${div}`);
//             default:
//                 alert('Operação inválida');
//                 break;
//         }
//     } catch (error) {
//         console.log(error);
    
//     }

// }

function alternarTema() {
    let botao = document.getElementById('botaoTema')
    let titulo = document.querySelector('.titulo');
    let conteudoBotao = botao.innerHTML;

    if (conteudoBotao == 'Alternar tema: Tema escuro') {
        document.body.style.backgroundColor = '#FFF';
        titulo.style.color = "#000";
        botao.style.color = '#FFF';
        botao.style.backgroundColor = '#000';
        botao.innerHTML = 'Alternar tema: Tema claro';
    } else {
        document.body.style.backgroundColor = '#000';
        titulo.style.color = "#FFF";
        botao.style.color = '#000';
        botao.style.backgroundColor = '#FFF';
        botao.innerHTML = 'Alternar tema: Tema escuro';
    }
    
    exibirImagem();
}

function exibirImagem() {
    if (document.body.style.backgroundColor == 'rgb(0, 0, 0)') {
        let hero = document.querySelector('.hero');
        let img = document.createElement('img');
        img.src = 'assets/img/dance-old-man-dancing.gif';
        img.alt = 'Tema escuro';
        img.id = 'imagemTema';
        img.style.marginTop = '20px';
        img.style.width = '300px';
        img.style.borderRadius = '10px';
        hero.appendChild(img);
    } else {
        let img = document.getElementById('imagemTema');
        if (img) {
            img.remove();
        }
    }
}