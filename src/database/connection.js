import sql from 'mssql'

const dbSettings = {
    user: 'sa',
    password: 'Invertek23',
    server: '192.168.1.12',
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
