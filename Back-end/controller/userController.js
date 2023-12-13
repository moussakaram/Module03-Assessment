import User from "../models/userModels.js"




export const createUser =async(req,res) => {

try{
    const {username} = req.body
    const createuser=await User.create({username})
    res.status(200).json(createuser)
}catch(err){res.status(500).json({message: err})}


}


export const getAllUsers= async(req,res)=>{
    try{
        const allUsers = await User.findAll({})
        res.status(200).json(allUsers);
    
    
    }catch(err){console.log(err)}
        
    }


    export const getUserById= async(req,res)=>{
        try{
            const userbyid = await User.findByPk(req.params.id)
            res.status(200).json(userbyid)
        }catch(err){console.log(err)}
    }


    export const updateUser = async(req, res, next)=>{
        try{
            const {id} = req.params
         const updated =await User.update(req.body,{where:{id:id}} );
         res.status(200).json(updated)
     }catch (err){
         next(err);
     }
     }


     export const deleteUser = async(req, res, next)=>{
        try{ 
            const {id} = req.params
            const deleted = await User.destroy({where:{id:id}});
            res.status(200).json(deleted)
        }
        catch (err){
            next(err);
        }
     }
     


  