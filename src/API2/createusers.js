export default async function Sign_up(password, name, email, saltRounds, Link, bcrypt,token) {
    try {
        // Criptografa a senha
        const hash = await bcrypt.hash(password, saltRounds);
     
    
        const executeQuery = (query, params) => {
            return new Promise((resolve, reject) => {
                Link.query(query, params, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result); 
                    }
                });
            });
        };

        // Verifica se o email já existe
        const emailCheckResult = await executeQuery("SELECT * FROM tbl_users WHERE email = ?", [email]);

        if (emailCheckResult.length === 0) {
            // Insere o novo usuário se o email não existir
            const insertResult = await executeQuery(
                "INSERT INTO tbl_users (name, email, password, date_created, token) VALUES (?, ?, ?, NOW(), ?)",
                [name, email, hash, token]
            );
            const data = {
                name:name,
                email:email
            
            }
 
  
            return {status: true, data:data }; 
        } else {
            console.log("Email já existe.");
            return false;
        }
    } catch (error) {
        console.error("Erro ao executar Sign_up:", error);
        return false; 
    }
}
