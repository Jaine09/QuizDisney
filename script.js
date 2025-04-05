// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
        pergunta: "Qual princesa da Disney se veste de homem para ir à guerra?",
        respostas: [
            { opcao: "Mulan", correto: true }, 
            { opcao: "Pocahontas", correto: false },
            {opcao: "Bela", correto: false},
            {opcao: "Jasmine", correto: false}
        ],
    },

    {
        pergunta: "Qual é o nome do peixinho esquecido em Procurando Nemo?",
        respostas: [
            {opcao: "Marlin", correto: false},
            {opcao: "Dory", correto: true},
            {opcao: "Nemo", correto: false},
            {opcao: "Crush", correto: false}
        ],
    },

    {
        pergunta: "Qual é o nome do tapete mágico em Aladdin?",
        respostas: [
            {opcao: "Abu", correto: false},
            {opcao: "Iago", correto: false},
            {opcao: "Tapete", correto: true},
            {opcao: "Rajah", correto: false}
        ],
    },

    {
        pergunta: "Qual animal é o melhor amigo de Pocahontas?",
        respostas:[
            {opcao: "Meeko (guaxinim)", correto: true},
            {opcao: "Flit (beija-flor)", correto: false},
            {opcao: "Percy (pug)", correto: false},
            {opcao: "Rajah (tigre)", correto: false}
        ],
    },

    {
        pergunta: "Qual é o nome da fada madrinha em Cinderela?",
        respostas:[
            {opcao: "Flora", correto: false},
            {opcao: "Fauna", correto: false},
            {opcao: "Merryweather", correto: false},
            {opcao: "Fada Madrinha", correto: true}
        ],
    },

    {
        pergunta: "Quem interpretou Cruella de Vil no filme live-action de 2021, Cruella?",
        respostas:[
            {opcao: "Glenn Close", correto: false},
            {opcao: "Emma Stone", correto: true},
            {opcao: "Angelina Jolie", correto: false},
            {opcao: "Cate Blanchett", correto: false}
        ],
    },

    {
        pergunta: "Qual ator interpretou o Capitão Jack Sparrow na franquia Piratas do Caribe?",
        respostas:[
            {opcao: "Orlando Bloom", correto: false},
            {opcao: "Keira Knightley", correto: false},
            {opcao: "Johnny Depp", correto: true},
            {opcao: "Geoffrey Rush", correto: false}
        ]
    }
]

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        // Pega a resposta atual com base no índice 'i'
        const resposta = perguntaAtual.respostas[i];
        // Cria um novo elemento 'button' (botão)
        const botao = document.createElement("button");
        // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
        botao.classList.add("botao-resposta");
        // Define o texto do botão com a opção de resposta (resposta.opcao)
        botao.innerText = resposta.opcao;
        // Adiciona um evento de clique no botão
        botao.onclick = function () {
            // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
            if (resposta.correto) {
                acertos++; // Incrementa o contador de acertos
            }

            // Avança para a próxima pergunta
            indiceAtual++;

            // Se ainda houver perguntas, carrega a próxima pergunta
            if (indiceAtual < perguntas.length) {
                carregarPergunta(); // Carrega a próxima pergunta
            } else {
                // Se não houver mais perguntas, finaliza o jogo
                finalizarJogo();
            }
        };

        // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
        respostasElemento.appendChild(botao);
    }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
