const fs = require('fs');


function ComparaFalabella( DataF, DataCCC ){
let dataF, dataCCC, fecha, variablePorcentaje=1;
fecha = new Date();
let porcentaje = DataF.length;
let cantidadPorcentaje = ((porcentaje*10)/100)
let validar = true, numeroF = 0, numeroNoF = 0;
dataCCC += `\nOrderID, PaymentStatus, SuborderId, LineNumber, LineStatus\n`;
dataF += `\nOrderID, PaymentStatus, SuborderId, LineNumber, LineStatus\n`;

    console.log(`####### Revicion de informacion de Falabella #######`);

    for (let index = 0; index < DataF.length; index++) {
        for (let i = 0; i < DataCCC.length; i++) {

            if (DataF[index].OrderID == DataCCC[i].order.orderId ) {
            dataF += `${DataF[index].OrderID}, ${DataF[index].PaymentStatus}, ${DataF[index].SuborderId}, ${DataF[index].LineNumber}, ${DataF[index].LineStatus}\n`;
            validar = false;
            //data[oo]= DataF;
            numeroF++;
            }
            else{
                if (i+1 == DataCCC.length  && validar == true) {
                    dataCCC += `${DataF[index].OrderID}, ${DataF[index].PaymentStatus}, ${DataF[index].SuborderId}, ${DataF[index].LineNumber}, ${DataF[index].LineStatus}\n`;
                    numeroNoF++;
                }
            }

            if ( index >= cantidadPorcentaje*variablePorcentaje ) {
                console.log(`Porcentaje Analizado: ${10*variablePorcentaje}%`);
                variablePorcentaje++;
            }
        }
        validar = true;
    }
    console.log(`Analisis completado.`);
    
    fs.writeFile(`Resultado/MatchFalabella-${new Date()}.csv`, dataF, (err) =>{
        if(err)
            {   console.log(`Error Falabella`);
                reject(err)}
        else{ console.log(`Se cargo la informacion en Resultado/MatchFalabella-${fecha}.csv`);}
    });

    fs.writeFile(`Resultado/NoMatchFalabella-${new Date()}.csv`, dataCCC, (err) =>{
        if(err)
            {   console.log(`Error CCC`);
                reject(err)}
        else { console.log(`Se cargo la informacion en Resultado/NoMatchFalabella-${fecha}.csv`);}
    });
    console.log(`////////////////////////////////////////////////`);
    console.log(`/////////////////// INFORME ////////////////////`);
    console.log(`Los datos de Falabella son:       ${DataF.length}`);
    console.log(`Los datos de Click & Collect son: ${DataCCC.length}`);
    console.log(`Cantidad de MATCH en Falabella:   ${numeroF}`);
    console.log(`Cantidad sin MATCH en Falabella:  ${numeroNoF}`);
    console.log(`Porcentaje de informacion encontrada: ${(numeroF*100)/DataF.length} %`);
    return true;
}

module.exports = {
ComparaFalabella
}