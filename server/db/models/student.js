'use strict'

const Sequelize = require('sequelize')
const db = require('../database')

//second one i did.
//the models for all the students. every model will follow suite.
const Student = db.define('student',
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allow: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false, 
      validate: {
        isEmail: true
      }
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '/student.jpg'
    },
    gpa: {
      type: Sequelize.DECIMAL,
      allowNull: false
    }
  })

module.exports = {db, Student};