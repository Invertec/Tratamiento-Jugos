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


const  getConnection = async () => {
    
    try {
        const pool = await sql.connect(dbSettings)
        return pool;

    } catch (error) {
        console.error(error);
    }    
}

const result = await pool.request().query('SELECT 1')
    console.log(result);

getConnection()