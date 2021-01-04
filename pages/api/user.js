import { connectToDatabase }  from "../../util/mongodb"

export default async (req, res) => {

  
  if (req.method === "POST"){

    const { name, age, email, cellphone } = req.body;
    
    
    if(!name || !email || !age ){
      res.status(400).json({error: "Missing Name Email Age"})
      return
    }
    
    const { db } = await connectToDatabase();
    
    const response = await db.collection("teste").insertOne({
      name,
      age,
      email,
    })
    

    res.status(200).json(response.ops[0])
    
  } else 
  
  //checa qual metodo GET

  if (req.method === 'GET'){
    const {email} = req.body
       
    if (!email){
      res.status(400).json({error:"nao tem email"})
    }

    const { db } = await connectToDatabase();
    
    const response = await db.collection("teste").findOne({email})

    res.status(200).json(response)
  }
   else {
    
    res.status(400).json({error: "wrong method"})

  }

}
