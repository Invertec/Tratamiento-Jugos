import {getConnection, sql} from '../database/connection'


export const getHtml = async (req, res) => {
  
}



export const getList = async ( req, res ) => {

    const pool = await getConnection()
    const result= await pool.request().query('SELECT * FROM Tabla_datos')
    res.json(result.recordset)

}


export const createNewLog = async (req,res) => {

    let { Fecha,Producto, OrdenFabricacion } = req.body

    if ( Fecha === null || Producto === null || OrdenFabricacion === null ){
        return res.status(400).json({msg:'Bad Request.'})
    }
    
    const pool = await getConnection()
    await pool.request()
    .input("Fecha", sql.Date, Fecha)
    .input("Producto",sql.VarChar,Producto)
    .input("OrdenFabricacion",sql.VarChar,OrdenFabricacion)
    .query('INSERT INTO Tabla_datos (Fecha,Producto,OrdenFabricacion) VALUES (@Fecha,@Producto,@OrdenFabricacion)')

    res.json({Fecha,Producto,OrdenFabricacion})

}