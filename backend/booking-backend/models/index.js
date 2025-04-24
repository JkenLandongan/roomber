'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Load all models in the folder
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Set up associations if any
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Attach Sequelize instance and class
db.sequelize = sequelize;
db.Sequelize = Sequelize;

/**
 * ✅ Generic delete helper method
 * Usage: db.deleteById('Booking', 1)
 */
db.deleteById = async (modelName, id) => {
  try {
    const model = db[modelName];
    if (!model) {
      throw new Error(`Model '${modelName}' not found`);
    }

    const record = await model.findByPk(id);
    if (!record) {
      throw new Error(`${modelName} with ID ${id} not found`);
    }

    await record.destroy();
    return {
      message: `${modelName} with ID ${id} successfully deleted`,
      deletedRecord: record
    };
  } catch (error) {
    throw new Error(`Delete error: ${error.message}`);
  }
};

/**
 * ✅ Generic save helper method
 * Usage: db.save('Booking', { name: 'New Booking', roomName: 'Room 1', date: '2025-01-01' })
 */
db.save = async (modelName, data, id = null) => {
  try {
    const model = db[modelName];
    if (!model) {
      throw new Error(`Model '${modelName}' not found`);
    }

    let record;

    if (id) {
      // If ID is provided, update the existing record
      record = await model.findByPk(id);
      if (!record) {
        throw new Error(`${modelName} with ID ${id} not found`);
      }
      // Update the record with the provided data
      record = await record.update(data);
    } else {
      // If no ID is provided, create a new record
      record = await model.create(data);
    }

    return {
      message: `${modelName} record saved successfully`,
      savedRecord: record
    };
  } catch (error) {
    throw new Error(`Save error: ${error.message}`);
  }
};

module.exports = db;
