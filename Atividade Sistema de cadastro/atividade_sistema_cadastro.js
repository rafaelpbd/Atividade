/*
A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para realizar o desenvolvimento de um sistema de cadastro para eventos que será disponibilizado para o público, o que, até então, era realizado manualmente.
 
Esse sistema terá como função principal a divulgação dos eventos para a comunidade de desenvolvimento (grupo de pessoas que tem o intuito de compartilhar ideias, projetos e conhecimentos) para que sejam consultados de forma eficiente.
 
Você será responsável por escolher qual técnica irá atender os seguintes requisitos:
 
-Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
-Listar participantes e palestrantes por evento.
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

-Criar fluxograma com todos os requisitos que devem ser atendidos pelo sistema.

Algoritmo:

Se quantidade de participante for maior ou igual a 100;
    - Exibir mensagem avisando que o limite de participantes foi excedido;

Enquanto quantidades de participantes menor que 100;
    - Leia data do evento;
        Se data do evento for maior que data atual, entao;
            - Permitir evento;
                Leia idade do participante;
                    Se idade participante for maior que 18, entao;
                        Permitir cadastro;
                    Senao;
                        Nao permitir cadastro devido a idade menor que 18;
        Senao;
            - Exibir mensagem alertando que o cadastro nao será permitido devido a data inválida, 
                
Exibir na tela lista de participantes e palestrantes por evento;
*/

participantes = ["João Algoritmo", "Maria Pecê", "André Transistor"];
evento = ["Expo CPU", "Senai Week Computer", "São Paulo Front-End Week" ];
idade_participante = [16, 22, 35];
data_evento = [[24,11,21],[12,12,21],[21,08,21]]
data_atual = [30, 10, 21]

var num_participantes = 3;


if (num_participantes >= 100)
{
    console.log("O Cadastro de participantes já atingiu o seu limite máximo")
};


console.log("\nLista de participantes e eventos\n")

for(let i = 0; i < 3; i++){
    console.log(`Participante: ${participantes[i]} \nEvento: ${evento[i]} \nIdade: ${idade_participante[i]}\nData do evento: ${data_evento[i][0]}/${data_evento[i][1]}/${data_evento[i][2]}\n`)
    if(idade_participante[i] < 18)
    {
        console.log("Situação cadastro: Cadastro não realizado - Participante menor de idade\n")
    }
    else if (data_evento[i][2] < data_atual[2])
    {
        console.log("Situação cadastro: Cadastro não realizado - Data do evento inválida\n")
    }
    else if (data_evento[i][0] < data_atual[0] && data_evento[i][1] < data_atual[1])
    {
        console.log("Situação cadastro: Cadastro não realizado - Data do evento inválida\n")
    }
    else
    {
        console.log("Situação cadastro: Cadastro realizado com sucesso\n")
    }    
};
