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
    photo: { type:String,default:"https://www.bing.com/images/search?view=detailV2&ccid=mh7M44Gf&id=4221D388C2EF26CAC6C478ADAABDB181FD6D32C3&thid=OIP.mh7M44GfG6TV5Gud_p_i4wHaFw&mediaurl=https%3A%2F%2Fwww.bureau-des-goodies.fr%2Fwp-content%2Fuploads%2F2019%2F11%2FPerson-Icon.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.9a1ecce3819f1ba4d5e46b9dfe9fe2e3%3Frik%3DwzJt%252fYGxvaqteA%26pid%3DImgRaw%26r%3D0&exph=500&expw=643&q=imagen+logo+persona+jpg&form=IRPRST&ck=A7F9759F2E2E580982784A7742C2A42E&selectedindex=7&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_WAxnYwjt*cp_3C76646D92F17E05B57D8979A91F50DF*mid_8576CD7AA4B46757FE858BAB620A16628C80ADE8*simid_607994072031568877*thid_OIP.WAxnYwjtbDQ0suedoJB7pAHaEp&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0" },    //default vuelve al parametro OPCIONAL, en caso que el cliente mande la foto, la usa, sino: USA LA FOTO DEFAULT (DARTH VADER)
    password: { type:String,required:true },
    country: { type:String,required:true }
})
//para crear un modelo de datos utilizo el metodo model
//pasando como parametros DONDE tengo que crear los documentos y con que FORMA
let User = model(collection,schema)
export default User