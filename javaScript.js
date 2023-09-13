// QuerySelect valores de entrada.

let nPavimentosEEl = document.querySelector('#nPavimentos');
let nParesFOAndarEEl = document.querySelector('#nParesFOAndar');
let nParesFOCampusEEl = document.querySelector('#nParesFOCampus');
let medidaBackboneEEl = document.querySelector('#medidaBackbone');
let distanciaLinkExternoEEl = document.querySelector('#distanciaLinkExterno');
let especificacaoFOEEl = document.querySelector('#especificacaoFO');
let característicaFOEEl = document.querySelector('#característicaFO');
let quantBackbonesAndarEEl = document.querySelector('#quantBackbonesAndar');
let backbonePrimSecEEl = document.querySelector('#backbonePrimSec');

// Labels valores de entreada.

let labelNPavimentosEEl = document.querySelector('#labelNPavimentos');
let labelNParesFOAndarEEl = document.querySelector('#labelNParesFOAndar');
let labelMedidaBackboneEEl = document.querySelector('#labelMedidaBackbone');
let labelQuantBackbonesAndarEEl = document.querySelector('#labelQuantBackbonesAndar');
let labelBackbonePrimSecEEl = document.querySelector('#labelBackbonePrimSec');

// QuerySelect valores de modificação tabela SEQ.

let camposTabelaSecundarioEl = document.querySelectorAll('.secundarioTabela');
let camposTabelaPrimarioEl = document.querySelectorAll('.primarioTabela');

let camposSecundarioEl = document.querySelectorAll('.secundario');
let camposPrimarioEl = document.querySelectorAll('.primario');

let quantMetrosFOQEl = document.querySelector('#quantMetrosFO');
let quantMetrosPredioQEl = document.querySelector('#quantMetrosPredio');
let quantDioSecundarioQEl = document.querySelector('#quantDioSecundario');
let quantDioPrimarioQEl = document.querySelector('#quantDioPrimario');
let quantAcopladorMMQEl = document.querySelector('#quantAcopladorMM');
let quantAcopladorSMQEl = document.querySelector('#quantAcopladorSM');
let quantEmendaSecundarioTBQEl = document.querySelector('#quantEmendaSecundario');
let quantEmendaPrimarioTBQEl = document.querySelector('#quantEmendaPrimario');
let quantPigTailMMQEl = document.querySelector('#quantPigTailMM');
let quantPigTailSMQEl = document.querySelector('#quantPigTailSM');
let quantCordaoOpticoMMQEl = document.querySelector('#quantCordaoOpticoMM');
let quantCordaoOpticoSMQEl = document.querySelector('#quantCordaoOpticoSM');
let tipoFOQEl = document.querySelector('#tipoFO');
let tipoFOBandejaQEl = document.querySelector('#tipoFOBandeja');
let tipoAcopladorInternoQEl = document.querySelector('#tipoAcopladorInterno');
let tipoCordaoOpticoInternoQEl = document.querySelector('#tipoCordaoOpticoInterno');
let tipoPigTailInternoQEl = document.querySelector('#tipoPigTailInterno');

let tipoFOBandejaPrimarioQEl = document.querySelector('#tipoFOBandejaPrimario');
let tipoAcopladorExternoQEl = document.querySelector('#tipoAcopladorExterno');
let tipoCordaoOpticoExternoQEl = document.querySelector('#tipoCordaoOpticoExterno');
let tipoPigTailExternoQEl = document.querySelector('#tipoPigTailExterno');


// QuerySelect valores de modificação tabela SET.

let tabelaSetsEl = document.querySelector('#tabelaSets');
let quantTerminadorSEl = document.querySelector('#quantTerminador');
let quantPigTailMMSEl = document.querySelector('#quantPigTailMMSet');
let tipoPigTailInternoSEl = document.querySelector('#tipoPigTailInternoSet');

// QuerySelect valores de modificação tabela Miscelânea.

let quantEtiquetasDioSecundarioMEl = document.querySelector('#quantEtiquetasDioSecundario');
let quantEtiquetasDioPrimarioMEl = document.querySelector('#quantEtiquetasDioPrimario');
let quantEtiquetasCordaoPigTailMEl = document.querySelector('#quantEtiquetasCordaoPigTail');

// Radio Tipo Backbone

let backbonePrimarioEl = document.querySelector('#backbonePrimario');
let backboneSecundarioEl = document.querySelector('#backboneSecundario');

backbonePrimarioEl.addEventListener('change', CamposBackbonePrimario);
backboneSecundarioEl.addEventListener('change', CamposBackboneSecundario);

// Botão Quantificar.

let botamQuantificarEl = document.querySelector('#botao-quantificar');

// Botão Limpar. 
let botamLimparEl = document.querySelector('#botao-limpar');
botamLimparEl.addEventListener('click', limparCampos);

function CamposBackbonePrimario() {

    //Reconfigurações Tabelas

    for(let i=0; i < camposTabelaSecundarioEl.length; i++) {
        camposTabelaSecundarioEl[i].style.display = 'none';
    }

    for(let i=0; i < camposTabelaPrimarioEl.length; i++) {
        camposTabelaPrimarioEl[i].style.display = 'table-row';
    }

    for(let i=0; i < camposSecundarioEl.length; i++) {
        camposSecundarioEl[i].style.display = 'none';
    }

    for(let i=0; i < camposPrimarioEl.length; i++) {
        camposPrimarioEl[i].style.display = 'block';
    }

    botamQuantificarEl.addEventListener('click', QuantificarBackbonePrimario);

}

function CamposBackboneSecundario() {

    //Reconfigurações Tabelas

    for(let i=0; i < camposTabelaSecundarioEl.length; i++) {
        camposTabelaSecundarioEl[i].style.display = 'table-row';
    }

    for(let i=0; i < camposTabelaPrimarioEl.length; i++) {
        camposTabelaPrimarioEl[i].style.display = 'none';
    }

    for(let i=0; i < camposSecundarioEl.length; i++) {
        camposSecundarioEl[i].style.display = 'block';
    }

    for(let i=0; i < camposPrimarioEl.length; i++) {
        camposPrimarioEl[i].style.display = 'none';
    }

    botamQuantificarEl.addEventListener('click', Quantificar);
}

function QuantificarBackbonePrimario() {

    let nParesFOCampusE = parseInt(nParesFOCampusEEl.value);
    let distanciaLinkExternoE = parseInt(distanciaLinkExternoEEl.value);
    let especificacaoFOE = especificacaoFOEEl.value;
    let característicaFOE = característicaFOEEl.value;

    let totalDistribuidorOptico = 0;
    let abrespecificacaoFOE;

    //Distância Prédio

    quantMetrosPredioQEl.innerHTML =  distanciaLinkExternoE;
    
    //Acoplador Óptico

    quantAcopladorSMQEl.innerHTML =  nParesFOCampusE;

    //PigTails

    quantPigTailSMQEl.innerHTML =  nParesFOCampusE * 2;

    //Bandeja Emenda 

    quantEmendaPrimarioTBQEl.innerHTML = Math.ceil(nParesFOCampusE * 2 / 12);;

    //Cordão Optico

    quantCordaoOpticoSMQEl.innerHTML =  nParesFOCampusE;

    //Distribuidor Óptico

    totalDistribuidorOptico = Math.ceil((nParesFOCampusE * 2) / 24)

    quantDioPrimarioQEl.innerHTML = totalDistribuidorOptico;

    //Etiquetas Portas DIO

    quantEtiquetasDioPrimarioMEl.innerHTML = totalDistribuidorOptico * 24;

    //Caracterísiticas FO

    if (especificacaoFOE.indexOf("MM") !== -1 || especificacaoFOE.indexOf("mm") !== -1) {

        abrespecificacaoFOE = 'MM';
    } else {
        abrespecificacaoFOE = 'SM';
    }

    tipoFOBandejaPrimarioQEl.innerHTML = `Bandeja para emenda de fibra ${especificacaoFOE} no DIO - (comporta até 12 emendas)`;

    tipoAcopladorExternoQEl.innerHTML =  `Acoplador óptico Externo  ${característicaFOE} - ${abrespecificacaoFOE} - LC - duplo`;
    tipoCordaoOpticoExternoQEl.innerHTML = `Cordão Óptico Externo  ${característicaFOE} - ${abrespecificacaoFOE} - 3m - duplo - conector LC`;
    tipoPigTailExternoQEl.innerHTML = `Pig tail Externo ${característicaFOE} - ${abrespecificacaoFOE} - 1,5m - simples - conector LC`

}

function Quantificar() {

    let nPavimentosE = parseInt(nPavimentosEEl.value);
    let nParesFOAndarE = parseInt(nParesFOAndarEEl.value);
    let nParesFOCampusE = parseInt(nParesFOCampusEEl.value);
    let quantBackbonesAndarE = parseInt(quantBackbonesAndarEEl.value);
    let medidaBackboneE = parseInt(medidaBackboneEEl.value);
    let especificacaoFOE = especificacaoFOEEl.value;
    let característicaFOE = característicaFOEEl.value;
    let backbonePrimSecE = backbonePrimSecEEl.value;

    let i;
    let totalBackbones = 0;
    let totalFOAndar = 0;
    let totalEmendasAndar = 0;
    let totalAcopladorOptico = 0;
    let totalCordaoOptico = 0;
    let totalDistribuidorOptico = 0;
    let medidaTotalBackbone = 0;
    let abrespecificacaoFOE;
    let medidaPavimentoBackbone

    //Quantificação Enlance.

    for (i = 1; i < nPavimentosE+1; i++) {
        medidaPavimentoBackbone = medidaBackboneE*2 + (medidaBackboneE * i);
        medidaTotalBackbone = medidaTotalBackbone + medidaPavimentoBackbone * quantBackbonesAndarE; 
    }

    quantMetrosFOQEl.innerHTML = medidaTotalBackbone * 1.2;


    //Acoplador Óptico

    totalBackbones = (nPavimentosE)  * quantBackbonesAndarE;
    totalFOAndar = totalBackbones * (nParesFOAndarE * 2);

    quantAcopladorMMQEl.innerHTML =  nParesFOAndarE * totalBackbones;

    //PigTails

    quantPigTailMMQEl.innerHTML =  totalFOAndar;

    //Cordão óptico

    if(backbonePrimSecE == 'Sim') {

        quantCordaoOpticoMMQEl.innerHTML =  (nPavimentosE + 1)  * quantBackbonesAndarE * nParesFOAndarE;
        totalCordaoOptico = (((nPavimentosE + 1)  * quantBackbonesAndarE * nParesFOAndarE))

    } else {

        quantCordaoOpticoMMQEl.innerHTML =  (nPavimentosE)  * quantBackbonesAndarE * nParesFOAndarE;
        totalCordaoOptico = (((nPavimentosE)  * quantBackbonesAndarE * nParesFOAndarE))

    }


    //Bandeja Emenda

    quantEmendaSecundarioTBQEl.innerHTML = Math.ceil(totalFOAndar / 12);;

    //Distribuidor Óptico

    totalAcopladorOptico = (nParesFOAndarE * totalBackbones);
    totalDistribuidorOptico = Math.ceil((totalAcopladorOptico + totalCordaoOptico) / 24)

    quantDioSecundarioQEl.innerHTML = totalDistribuidorOptico;

    //Terminador Óptico

    quantTerminadorSEl.innerHTML = (totalBackbones  *  (Math.ceil(((nParesFOAndarE*2)/8))))

    //Pig Tails's TO
    quantPigTailMMSEl.innerHTML =  totalFOAndar/2;

    //Etiquetas Portas DIO

    quantEtiquetasDioSecundarioMEl.innerHTML = totalDistribuidorOptico * 24;

    //Etiquetas Cordões Ópticos e Pig Tail's (TO)

    quantEtiquetasCordaoPigTailMEl.innerHTML = totalFOAndar/2 + totalCordaoOptico 

    //Caracterísiticas FO

    if (especificacaoFOE.indexOf("MM") !== -1 || especificacaoFOE.indexOf("mm") !== -1) {

        abrespecificacaoFOE = 'MM';
    } else {
        abrespecificacaoFOE = 'SM';
    }

    tipoFOQEl.innerHTML = `Cabo de Fibra Óptica ${especificacaoFOE} ${característicaFOE}- com ${nParesFOAndarE * 2} fibras`;
    tipoFOBandejaQEl.innerHTML = `Bandeja para emenda de fibra ${especificacaoFOE} no DIO - (comporta até 12 emendas)`;

    tipoAcopladorInternoQEl.innerHTML =  `Acoplador óptico Interno  ${característicaFOE} - ${abrespecificacaoFOE} - LC - duplo`;
    tipoCordaoOpticoInternoQEl.innerHTML = `Cordão Óptico Interno  ${característicaFOE} - ${abrespecificacaoFOE} - 3m - duplo - conector LC`;
    tipoPigTailInternoQEl.innerHTML = `Pig tail Interno ${característicaFOE} - ${abrespecificacaoFOE} - 1,5m - simples - conector LC`
    tipoPigTailInternoSEl.innerHTML = `Pig tail ${característicaFOE} - ${abrespecificacaoFOE} - 3,0m - duplo - conector LC`

}

function limparCampos() {

    nPavimentosEEl.value = ' ';
    nParesFOAndarEEl.value = ' ';
    nParesFOCampusEEl.value = ' ';
    quantBackbonesAndarEEl.value = ' ';
    medidaBackboneEEl.value = ' ';
    especificacaoFOEEl.value = ' ';
    característicaFOEEl.value = ' ';
    backbonePrimSecEEl.value = ' ';

}