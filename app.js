const intervencoes = [

{
titulo:"Proximidade Estratégica",
situacao:"conversa",
teoria:"Kounin - Gestão de Sala",
descricao:`
<div class="card">

<div class="tag">Prevenção de indisciplina</div>

<h2>Cenário real</h2>
Durante a explicação, dois ou mais alunos iniciam conversas paralelas, prejudicando a atenção da turma.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Evite interromper imediatamente a aula.</li>
<li>Continue explicando normalmente.</li>
<li>Caminhe em direção aos alunos que conversam.</li>
<li>Posicione-se próximo a eles de forma natural.</li>
<li>Mantenha a explicação para toda a turma.</li>
<li>Observe a mudança de comportamento.</li>
</ul>

<h2>Exemplo de fala</h2>
“Vamos observar esse ponto com atenção, pois ele será importante na atividade.”

<h2>Objetivo pedagógico</h2>
Reduzir comportamentos inadequados sem constrangimento e manter o fluxo da aula.

<h2>Base teórica</h2>
Kounin defende que professores eficazes atuam preventivamente, com presença ativa.
</div>
`
},

{
titulo:"Reforço Positivo",
situacao:"desmotivado",
teoria:"Skinner - Behaviorismo",
descricao:`
<div class="card">

<div class="tag">Engajamento</div>

<h2>Cenário real</h2>
Parte da turma está desmotivada ou não iniciou a atividade.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Identifique alunos engajados.</li>
<li>Valorize o comportamento positivo imediatamente.</li>
<li>Use linguagem específica.</li>
<li>Evite comparações negativas.</li>
</ul>

<h2>Exemplo de fala</h2>
“Excelente, esse grupo já iniciou com organização.”

<h2>Objetivo pedagógico</h2>
Aumentar comportamentos desejados por meio do reconhecimento.

<h2>Base teórica</h2>
Skinner demonstra que comportamentos reforçados tendem a se repetir.
</div>
`
},

{
titulo:"Pergunta Direcionada",
situacao:"disperso",
teoria:"Vygotsky - Mediação",
descricao:`
<div class="card">

<div class="tag">Reengajamento</div>

<h2>Cenário real</h2>
Aluno está distraído e não acompanha a explicação.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Observe o momento adequado.</li>
<li>Faça uma pergunta simples.</li>
<li>Dê tempo para resposta.</li>
<li>Valide a participação.</li>
</ul>

<h2>Exemplo de fala</h2>
“João, qual foi a ideia principal desse trecho?”

<h2>Objetivo pedagógico</h2>
Reintegrar o aluno ao processo de aprendizagem.

<h2>Base teórica</h2>
Vygotsky destaca a importância da interação na construção do conhecimento.
</div>
`
},

{
titulo:"Mediação de Conflito",
situacao:"conflito",
teoria:"Vygotsky - Interação Social",
descricao:`
<div class="card">

<div class="tag">Convivência</div>

<h2>Cenário real</h2>
Discussão ou conflito entre estudantes.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Interrompa o conflito com calma.</li>
<li>Escute ambos os lados.</li>
<li>Estabeleça regras de respeito.</li>
<li>Conduza a resolução conjunta.</li>
</ul>

<h2>Exemplo de fala</h2>
“Vamos ouvir cada um com respeito para resolver essa situação.”

<h2>Objetivo pedagógico</h2>
Desenvolver habilidades socioemocionais.

<h2>Base teórica</h2>
A aprendizagem ocorre na interação social e na mediação.
</div>
`
}

];

/* MENU */
function carregarMenu(lista = intervencoes){
menu.innerHTML="";
lista.forEach((i, index)=>{
menu.innerHTML += `<div onclick="abrir(${index})">${i.titulo}</div>`;
});
}

/* ABRIR */
function abrir(i){
titulo.innerText = intervencoes[i].titulo;
conteudo.innerHTML = intervencoes[i].descricao;
}

/* BUSCA */
function buscar(valor){
let filtrado = intervencoes.filter(i =>
i.titulo.toLowerCase().includes(valor.toLowerCase())
);

carregarMenu(filtrado);
}

/* INICIAL */
carregarMenu();
abrir(0);