const { Sequelize } = require('sequelize');
const config = require('./config/config'); // Adjust the path as needed

const sequelize = new Sequelize(config.development); // Use the appropriate environment configuration

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        // Close the connection after testing
        await sequelize.close();
    }
}

testConnection();