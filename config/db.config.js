module.exports = {
    HOST: "localhost",
    USER: "fuad",
    PASSWORD: "fuad",
    DB: "farukhomeo",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000,
    }
}