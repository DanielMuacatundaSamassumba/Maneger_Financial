

export default async function Delete(Link, idUser, res) {
    const response = await new Promise((resolve, reject) => {
        try {
            Link.query("DELETE  FROM tbl_spented WHERE id = ?", [idUser],
                (error, result) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(result)
                    }
                }
            )
             res.status(200).send({status:true,sms:"sucessfully" }) 
        } catch (err) {
            res.status(500).send({ error: "Database error", details: err });
        }
    })
}