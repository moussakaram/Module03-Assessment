import { DataTypes } from 'sequelize';
import db from '../dbconfig/dbconfig.js';

const User = db.define("user", {
    username: {
        type: DataTypes.STRING,
        required: true,
        allowNull:true,
    },
    
    password: {
        type: DataTypes.STRING,
        required: true,
        allowNull:true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull:true,
        required:true,
     
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user',
        required: true,
      }
},);

export default User;
