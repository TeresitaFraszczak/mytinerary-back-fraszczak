import Itinerary from "../../models/Itinerary.js";

export default async(req,res,next)=>{
    try {
        let oneItinerary = await Itinerary.findOne({_id:req.params.id}).select("country city photo -_id")
        if (oneItinerary){
            return res.status(200).json({
            success:true,
            message: 'itinerary found',
            response: oneItinerary
        })
    }else{
        return res.status(400).json({
            success: false,
            message: 'itinerary not found',
            response: null
        })
    }
    } catch (error) {
        next(error)
        
    }
}


