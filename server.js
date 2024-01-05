const app = express();
const express = require("express");
const path = express();
const routes = require("./app/routes.js");
const dotenv = require("dotenv");
dotenv.config();



//--------------------------------------------------------------------
//      Mise en place du moteur de template
//--------------------------------------------------------------------
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


//--------------------------------------------------------------------
//      Mise en place du répertoire static
//--------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));

//--------------------------------------------------------------------
//      Chargement des routes
//--------------------------------------------------------------------
routes(app);

//--------------------------------------------------------------------
//     Ecoute du serveur HTTP
//--------------------------------------------------------------------
app.listen(process.env.PORT,() => {
    console.log(`Le serveur est démarré : http://localhost:${process.env.PORT}`);
});