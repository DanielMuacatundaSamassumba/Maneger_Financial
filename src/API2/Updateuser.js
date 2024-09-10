export default async function UpdateUser(Link, name, email, password, res, id, bcrypt, saltRounds) {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        const response = await new Promise((resolve, reject) => {
            Link.query(
                "UPDATE tbl_users SET name = ?, email = ?, password = ? WHERE id = ?",
                [name, email, hash, id],
                (err, result) => { // Changed 'errr' to 'err'
                    if (err) {
                        reject(err); // Reject the promise if there's an error
                    } else {
                        resolve(result); // Resolve the promise with the result
                    }
                }
            );
        });

        // Send success response
        res.status(200).send({ status: true, details: response }); // Fixed typo 'datails' to 'details'

    } catch (err) {
        // Send error response if something goes wrong
        res.status(500).send({ status: false, details: err }); // Fixed 'datails' to 'details'
    }
}
