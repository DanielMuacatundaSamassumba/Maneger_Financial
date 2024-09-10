export default async function ShowSpent(Link, id, res) {
    try {
      const response = await new Promise((resolve, reject) => {
        Link.query("SELECT * FROM tbl_spented WHERE id = ?", [id], (error, result) => {
          if (error) {
            return reject(error); 
          } else {
            resolve(result); 
          }
        });
      });
  
   
      res.status(201).send({ status: true, data: response });
      
    } catch (error) {
   
      res.status(500).send({ status: false, details: error });
    }
  }
  