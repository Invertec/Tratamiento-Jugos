import {getConnection, sql} from '../database/connection'

export const getList = async ( req, res ) => {

    const pool = await getConnection()
    const result= await pool.request().query('SELECT * FROM Tabla_datos')
    res.json(result.recordset)

}


export const createNewLog = async (req,res) => {

    let { Fecha,Producto, O_F } = req.body

    
    if ( Fecha === null || Producto === null || O_F === null ){
        return res.status(400).json({msg:'Bad Request.'})
    }
    
    const pool = await getConnection()
    await pool.request()
    .input("Fecha", sql.Date, '2022-08-29')
    .input("Producto",sql.VarChar,"Jugo")
    .input("O_F",sql.VarChar,"545569")
    .query('INSERT INTO Tabla_datos (Fecha,Producto,O_F) VALUES (@Fecha,@Producto,@O_F)')

    res.json('New Log')

}