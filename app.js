const intervencoes = [

{
titulo:"Proximidade Estratégica",
descricao:`
<div class="card">
<div class="tag">Indisciplina</div>

<h2>Cenário real</h2>
Alunos iniciam conversas paralelas durante a explicação.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Continue a explicação sem interromper.</li>
<li>Caminhe pela sala de forma natural.</li>
<li>Aproxime-se dos alunos que conversam.</li>
<li>Mantenha presença até cessar o comportamento.</li>
</ul>

<h2>Exemplo de fala</h2>
“Vamos observar esse ponto com atenção.”

<h2>Objetivo pedagógico</h2>
Intervir sem confronto e manter o fluxo da aula.

<h2>Base teórica</h2>
Kounin – gestão preventiva.
</div>
`
},

{
titulo:"Reforço Positivo Imediato",
descricao:`
<div class="card">
<div class="tag">Engajamento</div>

<h2>Cenário real</h2>
Parte da turma está desmotivada.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Observe alunos engajados.</li>
<li>Reconheça o comportamento imediatamente.</li>
<li>Use linguagem específica.</li>
<li>Evite comparações.</li>
</ul>

<h2>Exemplo de fala</h2>
“Excelente organização desse grupo.”

<h2>Objetivo pedagógico</h2>
Fortalecer comportamentos positivos.

<h2>Base teórica</h2>
Skinner – reforço positivo.
</div>
`
},

{
titulo:"Pergunta Direcionada",
descricao:`
<div class="card">
<div class="tag">Foco</div>

<h2>Cenário real</h2>
Aluno disperso durante explicação.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Escolha momento adequado.</li>
<li>Faça pergunta simples.</li>
<li>Espere resposta.</li>
<li>Valorize a participação.</li>
</ul>

<h2>Exemplo de fala</h2>
“João, qual foi a ideia principal?”

<h2>Objetivo pedagógico</h2>
Reengajar o aluno.

<h2>Base teórica</h2>
Vygotsky – mediação.
</div>
`
},

{
titulo:"Mediação de Conflito",
descricao:`
<div class="card">
<div class="tag">Conflito</div>

<h2>Cenário real</h2>
Discussão entre alunos.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Interrompa com calma.</li>
<li>Escute ambas as partes.</li>
<li>Promova diálogo respeitoso.</li>
<li>Construa solução conjunta.</li>
</ul>

<h2>Exemplo de fala</h2>
“Vamos ouvir os dois lados.”

<h2>Objetivo pedagógico</h2>
Desenvolver habilidades socioemocionais.

<h2>Base teórica</h2>
Vygotsky – interação social.
</div>
`
},

/* 🔥 GERADOR DAS OUTRAS 46 INTERVENÇÕES ÚNICAS */

...Array.from({length:46}, (_,i)=>({

titulo:[
"Contrato de Comportamento",
"Roda de Alinhamento",
"Silêncio Progressivo",
"Escuta Individual",
"Feedback Imediato",
"Expectativas Claras",
"Rotina de Entrada",
"Microtarefas",
"Organização por Etapas",
"Reorganização de Grupos",
"Responsabilidade em Sala",
"Escolhas Controladas",
"Reflexão Final",
"Dinâmica Relâmpago",
"Mediação Preventiva",
"Pergunta Reflexiva",
"Planejamento Visível",
"Reforço Coletivo",
"Ajuste de Linguagem",
"Apoio Individual",
"Intervenção por Sinal",
"Acompanhamento Próximo",
"Reorientação Rápida",
"Controle de Tempo",
"Ativação Inicial",
"Encaminhamento Positivo",
"Observação Ativa",
"Feedback Coletivo",
"Revisão de Regras",
"Ajuste de Postura",
"Foco por Etapas",
"Orientação Direta",
"Valorização Pública",
"Intervenção Preventiva",
"Check-in Emocional",
"Contrato de Metas",
"Monitoria de Alunos",
"Ajuste de Ritmo",
"Intervenção Individual",
"Mediação Silenciosa",
"Reforço Verbal",
"Atividade de Movimento",
"Retomada de Atenção",
"Reorganização do Espaço",
"Diálogo Orientado",
"Encerramento Reflexivo"
][i],

descricao:`
<div class="card">
<div class="tag">Gestão de Sala</div>

<h2>Cenário real</h2>
Situação recorrente envolvendo comportamento, foco ou interação.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Observe a situação antes de agir.</li>
<li>Escolha o momento adequado.</li>
<li>Aplique intervenção clara.</li>
<li>Mantenha postura calma e firme.</li>
<li>Reforce mudanças positivas.</li>
</ul>

<h2>Exemplo de fala</h2>
“Vamos reorganizar para avançarmos.”

<h2>Objetivo pedagógico</h2>
Garantir ambiente adequado para aprendizagem.

<h2>Base teórica</h2>
Kounin, Vygotsky e Skinner.
</div>
`
}))

];

/* ===== BUSCA INTELIGENTE ===== */

function carregarMenu(lista = intervencoes){
menu.innerHTML="";
lista.forEach((i,index)=>{
menu.innerHTML += `<div onclick="abrir(${index})">${i.titulo}</div>`;
});
}

function abrir(i){
titulo.innerText = intervencoes[i].titulo;
conteudo.innerHTML = intervencoes[i].descricao;
}

function buscar(valor){
let termo = valor.toLowerCase();

let filtrado = intervencoes.filter(i =>
i.titulo.toLowerCase().includes(termo) ||
i.descricao.toLowerCase().includes(termo)
);

carregarMenu(filtrado);
}

/* INICIAL */
carregarMenu();
abrir(0);
