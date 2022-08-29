import sql from 'mssql'

const dbSettings = {
    user: 'administrador',
    password: '12345678',
    server: 'localhost',
    database:'prueba',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}


export const  getConnection = async () => {
    
    try {
        const pool = await sql.connect(dbSettings)
        return pool;

    } catch (error) {
        console.error(error);
    }    
}

export { sql }
