//const fs = require('fs');//file System: modulo nativo

//let tareasJson = fs.readFileSync('./usuarios.json','utf-8'); //readFileSync : Metodo para leer un archivo afuera, como de usuarios.json

//let usuarios = JSON.parse(tareasJson)

let moduloUsuarios = require('./usuarios')
const process = require('process')

let comando = process.argv[2]

switch (comando) {
    case 'usuariosRegistrados':
        console.log('---------------------------USUARIOS REGISTRADOS-----------------------------');
        
        let usuarios = moduloUsuarios.leerJSON();
    
        for (let index = 0; index < usuarios.length; index++) {
            console.log('- Nombre de usuario ' + usuarios[index].nombre);
            console.log('- mail ' + usuarios[index].mail);
            console.log('- password ' + usuarios[index].password);
            console.log('\n');
            
        }break;
        


    case 'registrar':
        let nombre = process.argv[3]
        let mail = process.argv[4]
        let password = process.argv[5]

        moduloUsuarios.agregarUsuario(nombre,mail,password) 
        console.log('----------------------------------------------------------------------------');
        console.log('----------------------------NUEVO USUARIO REGISTRADO------------------------');
        console.log('----------------------------------------------------------------------------');

        break;
    
    case 'login':
        let resultado = moduloUsuarios.login(process.argv[3], process.argv[4])
         if (resultado.length == 1) {
            console.log('----------------------------------------------------------------------------');
            console.log('-------------------------------BIENVENIDO-----------------------------------');
            console.log('----------------------------------------------------------------------------');
        }else{
            console.log('----------------------------------------------------------------------------');
            console.log('---------------------USUARIO O CONTRASEÑA INCORRECTA------------------------');
            console.log('----------------------------------------------------------------------------');
        }
        break;
    case 'eliminar':
        let mailEliminar = process.argv[3]
        let passwordEliminar = process.argv[4]
    
        let eliminado = moduloUsuarios.eliminar(mailEliminar, passwordEliminar)

        if (eliminado) {
            console.log('Usuario eliminado');
        } else {
            console.log('Credenciales inválidas');            
        
        }
        break;
}
