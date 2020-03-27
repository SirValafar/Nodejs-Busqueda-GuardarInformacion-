const GetDataFalabella = require('./utils');

let fs = require('fs');

let ContenidoFalabella = 'Falabella/Falabella';
let ContenidoCCC = 'Click&Collect/CCC';

let Falabella = GetDataFalabella.carga.cargaFile(ContenidoFalabella);
let CCC = GetDataFalabella.carga.cargaFile(ContenidoCCC);

GetDataFalabella.comparar.ComparaFalabella(Falabella, CCC);




