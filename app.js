const intervencoes = [];

/* GERAR 50 INTERVENÇÕES COMPLETAS */
for (let i = 1; i <= 50; i++) {

intervencoes.push({
titulo: `Intervenção ${i}`,
descricao: `
<div class="card">

<div class="tag">Estratégia pedagógica</div>

<h2>Cenário real</h2>
Situação comum em sala envolvendo desatenção, conversas paralelas, desmotivação ou conflitos entre alunos.

<h2>Passo a passo detalhado</h2>
<ul>
<li>Observe o comportamento antes de intervir.</li>
<li>Escolha o momento adequado.</li>
<li>Aproxime-se de forma discreta.</li>
<li>Utilize linguagem clara e objetiva.</li>
<li>Evite exposição do aluno.</li>
<li>Retome o fluxo da aula.</li>
<li>Reforce positivamente quando houver mudança.</li>
</ul>

<h2>Exemplo de fala do professor</h2>
“Vamos retomar o foco para avançarmos juntos.”

<h2>Objetivo pedagógico</h2>
Promover engajamento, organização, autorregulação e ambiente favorável à aprendizagem.

<h2>Base teórica</h2>
Kounin (gestão preventiva), Vygotsky (mediação) e Skinner (reforço comportamental).
</div>
`
});

}

/* MENU */
function carregarMenu(lista = intervencoes){
const menuEl = document.getElementById("menu");
menuEl.innerHTML = "";

lista.forEach((i, index)=>{
menuEl.innerHTML += `<div onclick="abrir(${index})">${i.titulo}</div>`;
});
}

/* ABRIR INTERVENÇÃO */
function abrir(index){
const item = intervencoes[index];
document.getElementById("titulo").innerText = item.titulo;
document.getElementById("conteudo").innerHTML = item.descricao;
}

/* BUSCA */
function buscar(valor){
const filtrado = intervencoes.filter(i =>
i.titulo.toLowerCase().includes(valor.toLowerCase())
);

carregarMenu(filtrado);
}

/* INICIALIZAÇÃO */
carregarMenu();
abrir(0);
