"use strict";
exports.__esModule = true;
var carros = [
    { id: 1010, marca: "gol", modelo: 2011 },
    { id: 1011, marca: "gol", modelo: 2012 },
    { id: 1012, marca: "hb2", modelo: 2011 },
    { id: 1013, marca: "gol", modelo: 2016 },
    { id: 1014, marca: "gol", modelo: 2017 },
    { id: 1015, marca: "gol", modelo: 2019 },
    { id: 1016, marca: "gol", modelo: 2018 },
    { id: 1017, marca: "gol", modelo: 2018 },
];
console.log(carros);
var findCarroByMarca = function (arr, marca) {
    var carros = arr.filter(function (carro) { return carro.marca == marca; });
    if (carros.length == 0)
        return console.log('marca não encontrado');
    else
        return carros.forEach(function (carro) { return console.log(carro.modelo); });
};
findCarroByMarca(carros, "yy");
