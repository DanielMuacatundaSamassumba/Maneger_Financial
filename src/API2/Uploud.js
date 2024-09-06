export default async function upload(Link, filename, id) {
    await Link.query("INSERT INTO   tbbl_imagepath(image_path, id_user) VALUSES(?,?)", [filename, id], (err, result) => {
        if (err) {
          return ({ error: err })
        } else {
           return result
        }

    })
}