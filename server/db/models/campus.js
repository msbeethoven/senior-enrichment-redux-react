'use strict'

const Sequelize = require('sequelize')
const db = require('../database')

//first thing i did.
//the models for all the campuses. every model will follow suite.

//check about images?
const Campus = db.define('campus',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'mercury.jpg'
    },
    address: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT('large')
    }
  })

module.exports = {db, Campus};
