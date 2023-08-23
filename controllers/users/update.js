import User from "../../models/User.js";

export default async (req,res)=>{
  try{
    let updatedUser = await User.findByIdAndUpdate(
        req.params.uId,
        req.body,
        { new:true }    //por default en FALSE y devuelve el objeto ANTES de la modificación
        //si lo cambio a TRUE devuelve el objeto LUEGO de la modificación
    ).select('name photo mail')
    return res.status(200).json({ //solo para la creación es 201
        success: true,
        message: 'user updated',
        response: updatedUser
    })
} catch (err) {
    return res.status(400).json({
        success: false,
        message: 'not updated',
        response: null
    })
}}