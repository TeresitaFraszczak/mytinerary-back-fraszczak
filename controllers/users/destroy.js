import User from "../../models/User.js";

export default async (req,res)=>{
  try{
    let deleteUser = await User.findByIdAndDelete(req.params.id)
        
    return res.status(200).json({ //solo para la creación es 201
        success: true,
        message: 'user delete',
        response: deleteUser
    })
} catch (err) {
    return res.status(400).json({
        success: false,
        message: 'not delete',
        response: null
    })
  }
}