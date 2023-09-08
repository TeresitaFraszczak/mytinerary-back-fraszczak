//siempre en singular y con mayusculas
import { model, Schema } from 'mongoose';

//crear el espacio virtual donde se guardara la coleccion, conjuntos de documentos
let collection = 'users'

//lo siguiente es definir el schema de datos del modelo
//es decir EL MOLDE / LA FORMA que tiene que tener mi modelo de datos
let schema = new Schema({
    name: { type:String,required:true },                //por default TODOS los datos son opcionales (required:false)
    lastName: { type:String },                          //si es opcional NO NECESITO agregar el required
    mail: { type:String,required:true,unique:true },    //unique:true comprueba que el mail SEA UNICO (no hay mails duplicados)
    photo: { type:String,default:"https://www.bureau-des-goodies.fr/wp-content/uploads/2019/11/Person-Icon.jpg" },
    password: { type:String,required:true },
    country: { type:String,required:true }
})
//para crear un modelo de datos utilizo el metodo model
//pasando como parametros DONDE tengo que crear los documentos y con que FORMA
let User = model(collection,schema)
export default User