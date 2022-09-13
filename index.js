const express = require("express"); 
/*
requerir el módulo express y guardarlo en la variable
 "express". el módulo express es una función.
 */
const app = express();
/*
app devuelve express
*/
const port = 9000;
/*
    es la red que se utiliza de prueba en el localhost para backend.
*/

app.get("/", (req,res) => {
    res.send("Hello World!");
});
//req es la request, res es la respond, la respuesta.
/* LLamamos a app y le decimos que si escucha 
una request get, que envíe en la respuesta "Hello World!"
*/

app.listen(port,() => {
    console.log(`> Sever running on port ${port}`);
});
/*
Con esto básicamente se dice que escuche al puerto (9000)
y que se prenda el servidor. Si funciona, va a mostrar el mensaje
en el console log '> Sever running on port ${port}'
*/