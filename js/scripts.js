btnNovoTeam.onclick = function(){
    overlay.classList.add('active')
    formCriar.classList.add('active')
}

overlay.onclick = function(){
    overlay.classList.remove('active')
    formCriar.classList.remove('active')
    mostrarParticipantes.classList.remove('active')
}

fecharFormCriar.onclick = function(){
    overlay.classList.remove('active')
    formCriar.classList.remove('active')
}

let teams = [
    {
        id: 1,
        nome: 'nome 1',
        qtd: 10,
        participantes: ['Matheus', 'Melissa']
    },
    {
        id: 2,
        nome: 'nome 2',
        qtd: 10,
        participantes: ['Luiz', 'Marjore', 'Lorena']
    }
];

function listarTeams(){
    listaDeTeams.innerHTML = '';
    for(let i = 0; i < teams.length; i++){
        listaDeTeams.innerHTML += `
        <li>
            <h5>${teams[i].nome}<box-icon name='show' onClick="listarParticipantes(${teams[i].id})" type="solid"></box-icon></h5>
            <h1> ${teams[i].participantes.length} <span>/ ${teams[i].qtd}</span></h1>
            <div class="acoes">
                <button class="btn mini-title">Adicionar</button>
                <button class="btn" onClick="deletarTeam(${teams[i].id})">
                    <box-icon name='trash-alt' type="solid"></box-icon>
                </button>
            </div>
        </li>
    `;
    }
}

listarTeams();

function adicionarTeam(){
    event.preventDefault();
    let team = {
        id: (teams.length + 1),
        nome: teamNome.value,
        qtd: teamQtd.value,
        participantes: []
    }
    teams.push(team);
    fc.reset();
    overlay.classList.remove('active')
    formCriar.classList.remove('active')
    listarTeams()
}

function deletarTeam(id){

    let confirmacao = confirm('Deseja realmente apagar este item?');

    if (confirmacao){
        let aux = [];
        for(let i=0; i< teams.length; i++){
            if(teams[i].id != id){
                aux.push(teams[i])
            }
        }
        teams = aux;
        alert('Item apagado com sucesso.')
        listarTeams();
    }
}

function listarParticipantes(id){
    overlay.classList.add('active');
    mostrarParticipantes.classList.add('active');
    listaDeParticipantes.innerHTML = '';

    let team;
    for(let i = 0; i < teams.length; i++){
        if(teams[i].id === id){
            team = teams[i];
        }
    }

    for(let i=0; i < team.participantes.length; i++){
        listaDeParticipantes.innerHTML += `
        <li>
            ${team.participantes[i]} <box-icon name="trash-alt" type="solid"></box-icon>
        </li>
    `;
    }
}

fecharParticipantes.onclick = function(){
    overlay.classList.remove('active')
    mostrarParticipantes.classList.remove('active')
}