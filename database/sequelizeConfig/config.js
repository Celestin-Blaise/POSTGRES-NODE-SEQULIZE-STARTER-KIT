const fs = require('fs');

module.exports = {

    "development": {
      "username": "DB_USER",
      "password": "DB_PASSWORD",
      "database": "DB_NAME",
      "host": "SERVER_IP",
      "port":"PUBLIC_PORT",
      "dialect": "postgres",
      "define": {
        "timestamps": true,
        "createdAt": "created_at",
        "updatedAt": "updated_at"
      }
    },
    "test": {
      "username": "DB_USER",
      "password": "DB_PASSWORD",
      "database": "DB_NAME",
      "host": "SERVER_IP",
      "port":"PUBLIC_PORT",
      "dialect": "postgres",
      "define": {
        "timestamps": true,
        "createdAt": "created_at",
        "updatedAt": "updated_at"
      }
    },
    "production": {
      "username": "DB_USER",
      "password": "DB_PASSWORD",
      "database": "DB_NAME",
      "host": "SERVER_IP",
      "port":"PUBLIC_PORT",
      "dialect": "postgres",
      "define": {
        "timestamps": true,
        "createdAt": "created_at",
        "updatedAt": "updated_at"
      }
    }

};


