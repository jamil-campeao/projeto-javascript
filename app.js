alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroDigitado = 0;
let acertou = false;
let tentativas = 1;
do {
    numeroDigitado = prompt('Escolha um numero entre 1 e ' + numeroMaximo);
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        if (numeroDigitado == numeroSecreto) {
            acertou = true;
            alert(`Você acertou, parabéns! Numero secreto: ${numeroSecreto}. Você utilizou ${tentativas} ${palavraTentativa} até descobrir o número.`);
        } else {
                if (numeroDigitado > numeroSecreto) {
                    alert('Você errou, dica: O número digitado é maior que o número secreto');
                }
                else {
                    alert('Você errou, dica: O número digitado é menor que o número secreto')
                }
                acertou = false;
                tentativas++;
                }

    } while (acertou == false);
