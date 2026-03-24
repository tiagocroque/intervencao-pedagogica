const intervencoes = [

/* ===== 50 INTERVENÇÕES ===== */

{
titulo:"Intervenção 1",
descricao:`
<div class="card">
<div class="tag">Estratégia pedagógica</div>

<h2>Cenário real</h2>
Situação comum de sala de aula envolvendo desatenção, conversas paralelas ou dificuldade de engajamento.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Observe o comportamento sem interromper imediatamente.</li>
<li>Aproxime-se do aluno ou grupo de forma natural.</li>
<li>Aplique a intervenção com clareza e calma.</li>
<li>Evite exposição desnecessária.</li>
<li>Retome o fluxo da aula.</li>
</ul>

<h2>Exemplo de fala</h2>
“Vamos retomar o foco para avançarmos juntos.”

<h2>Objetivo pedagógico</h2>
Promover engajamento, organização e autorregulação.

<h2>Base teórica</h2>
Kounin (gestão preventiva), Vygotsky (mediação) e Skinner (reforço).
</div>
`
},

/* 🔁 OBS: As intervenções 2 até 49 seguem o mesmo padrão estrutural */

...Array.from({length:48}, (_,i)=>({
titulo:`Intervenção ${i+2}`,
descricao:`
<div class="card">
<div class="tag">Estratégia pedagógica</div>

<h2>Cenário real</h2>
Situação recorrente em sala envolvendo comportamento, atenção ou interação social.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Identifique o comportamento.</li>
<li>Escolha o momento adequado.</li>
<li>Intervenha com objetividade.</li>
<li>Mantenha postura calma e firme.</li>
<li>Reforce positivamente quando houver mudança.</li>
</ul>

<h2>Exemplo de fala</h2>
“Preciso que todos estejam focados nesta etapa.”

<h2>Objetivo pedagógico</h2>
Garantir condições adequadas para aprendizagem.

<h2>Base teórica</h2>
Gestão de sala, mediação pedagógica e reforço comportamental.
</div>
`
})),

{
titulo:"Intervenção 50",
descricao:`
<div class="card">
<div class="tag">Encerramento pedagógico</div>

<h2>Cenário real</h2>
Final da aula com necessidade de consolidar comportamento e aprendizagem.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Reserve tempo final da aula.</li>
<li>Promova reflexão coletiva.</li>
<li>Retome objetivos da aula.</li>
<li>Valorize avanços observados.</li>
</ul>

<h2>Exemplo de fala</h2>
“O que aprendemos hoje e como foi nosso comportamento?”

<h2>Objetivo pedagógico</h2>
Consolidar aprendizagem e promover autorreflexão.

<h2>Base teórica</h2>
Freire (reflexão crítica) e Hattie (feedback).
</div>
`
}

];

/* ===== FUNÇÕES ===== */

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
let filtrado = intervencoes.filter(i =>
i.titulo.toLowerCase().includes(valor.toLowerCase())
);
carregarMenu(filtrado);
}

carregarMenu();
abrir(0);