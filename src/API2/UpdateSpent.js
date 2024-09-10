export default async function UpdateSpent(Link, id, desc, typeSpent, amount, res) {
    try {
      const response = await new Promise((resolve, reject) => {
        Link.query(
          "UPDATE tbl_spented SET description = ?, total = ?, type_action = ? WHERE id = ?",
          [desc, amount, typeSpent, id],
          (error, result) => {
            if (error) {
              return reject(error); // Reject if there's an error
            } else {
              resolve(result); // Resolve the result
            }
          }
        );
      });
  
      // If the query is successful, send a 200 response
      res.status(200).send({ status: true, message: 'Updated successfully', data: response });
      
    } catch (error) {
      // Send an error response if something goes wrong
      res.status(500).send({ status: false, details: error });
    }
  }
  