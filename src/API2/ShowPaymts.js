export default async function ShowPayments(Link, id, res) {
    try {
        // Create a new Promise
        const response = await new Promise((resolve, reject) => {
            Link.query(
                "SELECT * FROM tbl_spented WHERE id_user = ?",
                [id],
                (err, result) => {
                    if (err) {
                        return reject(err); 
                    } else {
                        resolve(result); 
                    }
                }
            );
        });

     
        res.status(200).send({ status: true, data: response });

    } catch (err) {
     
        res.status(500).send({ status: false, details: err }); 
    }
}
