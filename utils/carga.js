

function cargaFile(name){

    let fs = require('fs');
    let datosF = fs.readFileSync(`${name}`, 'utf8' );
    datosF = JSON.parse(datosF);

    if(!datosF.customerOrders){
    return datosF;
    }
    else{
    datosF = datosF.customerOrders;
    return datosF;
    }
}

module.exports = {
    cargaFile
}