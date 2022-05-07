const express = require("express");
const http = require('http')
const { json } = require("express/lib/response");
const { app } = require("electron");
var PORT = 5500
const server = http. createServer((req, res) => {
    res. end('Voilà la réponse du serveur !' );
    });
server.listen(process.env.PORT);
console.log('Serveur lancée sur le port', PORT);

