export default async function Login(email, password, Link, bcrypt) {
    // Função para comparar a senha fornecida com o hash armazenado
    async function hash_compare(passwordHash, passwordUser) {
        return await bcrypt.compare(passwordUser, passwordHash);
    }

    // Retorna uma Promise para resolver o resultado da consulta e verificação
    return new Promise((resolve, reject) => {
        Link.query('SELECT * FROM tbl_users WHERE email = ?', [email], async (err, result) => {
            if (err) {
                console.error('Erro na consulta:', err);
                return reject(err); // Rejeita a Promise com o erro
            }

            if (result.length === 0) {
                console.log('Usuário não encontrado');
                return resolve(false); 
            }

            const user = result[0];
            const storedPasswordHash = user.password;

            try {
                const verify = await hash_compare(storedPasswordHash, password);
                resolve({ status: verify, result}); 
            } catch (error) {
                console.error('Erro na verificação da senha:', error);
                reject(error);
            }
        });
    });
}
