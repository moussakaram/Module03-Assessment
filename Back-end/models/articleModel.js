// image URLs, title, category, body, and authorimport { DataTypes } from 'sequelize';
import db from '../dbconfig/dbconfig.js';
import { DataTypes } from 'sequelize';


const Articale = db.define("articale", {
    title: {
        type: DataTypes.STRING,
        required: true,
    },
    category: {
        type: DataTypes.STRING,
        required: true,
    },
    body: {
        type: DataTypes.STRING,
        required: true,
    },
    authorimport: {
        type: DataTypes.STRING,
        required: true,
    },
    imageUrl:{
        type: DataTypes.STRING,
        required: true,

    }

});

export default Articale;
