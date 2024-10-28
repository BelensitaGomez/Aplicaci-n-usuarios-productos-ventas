const admin = require("firebase-admin");
const key=require("../keys.json");

admin.initializeApp({
    credential:admin.credential.cert(key)
});

const bd=admin.firestore();
const usuarios=bd.collection("belen");
const productos=bd.collection("productos");
const ventas =bd.collection("ventas")

module.exports={
    usuarios,
    productos,
    ventas
}

//console.log(usuarios);
