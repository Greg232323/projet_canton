import "dotenv/config";
import express from "express";
import path from "path";
import router from "./router/index.routes.js";
// pour tester la connexion à la BDD avec la méthode getConnection
// à supprimer après le test
// import pool from "./config/db.js";

const app = express();
const PORT = process.env.LOCAL_PORT;

// configuration de moteur de template
app.set("view engine", "ejs");

// Configuration du chemin des vues (template)
app.set("views", path.join(process.cwd(), "src/views"));

// Servir les fichiers statiques (CSS, JS, images, etc.)
app.use("/css", express.static(path.join(process.cwd(), "public/css")));
app.use("/img", express.static(path.join(process.cwd(), "public/img")));
app.use("/js", express.static(path.join(process.cwd(), "public/js")));

// FORMULAIRE
app.use(express.urlencoded({ extended: false }));

// middleware pour le router
app.use(router);


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));