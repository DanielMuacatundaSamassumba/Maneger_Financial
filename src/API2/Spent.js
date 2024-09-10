export default async function Spent(Link, idUser, desc, typeSpent, amount, res) {
    try {
      const result = await new Promise((resolve, reject) => {
        Link.query(
          "INSERT INTO tbl_spented (description, total, date_created, type_action, id_user) VALUES (?, ?, NOW(), ?, ?)",
          [desc, amount, typeSpent, idUser],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
    const data = {
        idUser:idUser,
        desc: desc,
        typeSpent:typeSpent,
        amount:amount
    }
      res.status(200).send({ name: "Cadastrado com sucesso!", data });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: "Database error", details: err });
    }
  }
  