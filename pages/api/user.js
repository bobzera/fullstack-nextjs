import { connectToDatabase }  from "../../util/mongodb"

export default async (req, res) => {

  
  if (req.method === "POST"){

    const { name, age, email, cellphone } = req.body;
    
    
    if(!name || !email || !age ){
      res.status(500).json({error: "Missing Name Email Age"})
      return
    }
    
    const { db } = await connectToDatabase();
    
    const response = await db.collection("teste").insertOne({
      name: name,
      age: age,
      email: email
    })
    

    res.status(200).json(response.ops[0])
    
  } else {
    
    res.status(400).json({error: "wrong method"})

  }

}
