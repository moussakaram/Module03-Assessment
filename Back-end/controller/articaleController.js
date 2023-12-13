import Articale from "../models/articleModel.js"




// export const createArticale = async (req, res) => {
//   try {
//     const { title, category, body, authorimport, imageUrl } = req.body;
//     const newArticale = await Articale.create({
//       title,
//       category,
//       body,
//       authorimport,
//       imageUrl,
//     });
//     res.status(201).json(newArticale);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
//   };

// export const createArticale =async(req,res) => {

//     try{
//         const {title} = req.body
//         const aritcalscreate=await Artical.create({title})
//         res.status(200).json(aritcalscreate)
//     }catch(err){res.status(500).json({message: err})}
    
    
//     }

export const createArticale  =async (req,res, next)=>{
    const newArticale =  new Articale (req.body)
    try{
        const saveArticale = await newArticale.save()
        res.status(200).json(saveArticale)
    }catch (err){
        next(err);
    
    }
    }


export const getAllArticale= async(req,res)=>{
    try{
        const allArticale = await Articale.findAll()
        res.status(200).json(allArticale);
    
    
    }catch(err){console.log(err)}
        
    }


    export const getArticaleById= async(req,res)=>{
        try{
            const articalbyid = await Articale.findByPk(req.params.id)
            res.status(200).json(articalbyid)
        }catch(err){console.log(err)}
    }


    export const updatearticale = async(req, res, next)=>{
        try{
            const {id} = req.params
         const updated =await Articale.update(req.body,{where:{id:id}} );
         res.status(200).json(updated)
     }catch (err){
         next(err);
     }
     }


     export const deleteArticale = async(req, res, next)=>{
        try{ 
            const {id} = req.params
            const deleted = await Articale.destroy({where:{id:id}});
            res.status(200).json(deleted)
        }
        catch (err){
            next(err);
        }
     }
     


  