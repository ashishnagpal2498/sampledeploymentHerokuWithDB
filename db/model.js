const Sequelize = require('sequelize')
const datatypes = Sequelize.DataTypes

// const db = new Sequelize('testdb','testuser','testpass',
//     {
//         host: 'localhost',
//         dialect : 'mysql'
//     })
const db = new Sequelize ( process.env.DATABASE_URL || 'mysql://testuser:testpass@localhost:3306/testdb')
const Item = db.define('item' ,
    {
        id: {
            type: datatypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        stuff : datatypes.TEXT
    }

)

db.sync().then(()=> console.log('Database Synced'))
.catch((err)=> console.error(err))

exports = module.exports = {
    Item
}