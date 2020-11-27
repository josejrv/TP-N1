const fs = require('fs');//file System: modulo nativo

let moduloUsuarios = {
    archivo : './usuarios.json',//propiedad : archivo
    leerJSON : function() {//metodo leerJson
        let tareasJson = fs.readFileSync(this.archivo,'utf-8'); //readFileSync : Metodo para leer un archivo afuera, como de usuarios.json // this palabra reservada que trae la propiedad ARCHIVO
        return JSON.parse(tareasJson)
        
    },

    agregarUsuario : function(nombre,mail,password){
        let listaDeUsuarios = this.leerJSON();

        let nuevoUsuario = {
            nombre : nombre,
            mail : mail,
            password : password
        }
        listaDeUsuarios.push(nuevoUsuario)
        this.guardarJSON(listaDeUsuarios)
        
        this.leerJSON(listaDeUsuarios);
    },
    guardarJSON : function(info){
        
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync(this.archivo,nuevoJSON,'utf-8'); 
    },
    login : function(mail, password){
        let listaDeUsuarios = this.leerJSON();
        let loginUsuario = listaDeUsuarios.filter(usuario=>{
            return usuario.mail == mail && usuario.password == password
        })
    return loginUsuario
    },
    
    eliminar: function(mail,password){
        let usuarios = this.leerJSON();
        let usuariosActualizados = [];
        let eliminado = false;

        usuarios.forEach(function(usuarios){
            if (usuario.mail == mail && usuario.password == password) {
                eliminado = true;
            } else {
                usuariosActualizados.push(usuario);
            }          
        })

        this.guardarJSON(usuariosActualizados);

        return eliminado;
    }
    

}

module.exports = moduloUsuarios
