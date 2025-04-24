'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // Define associations if needed
    }

    // Delete booking by ID
    static async deleteBookingById(id) {
      try {
        const booking = await Booking.findByPk(id);
        if (!booking) {
          throw new Error('Booking not found');
        }
        await booking.destroy();
        return booking;
      } catch (error) {
        throw new Error(error.message);
      }
    }

    // Update booking by ID
    static async updateBooking(id, updatedBookingData) {
      try {
        const booking = await Booking.findByPk(id);
        if (!booking) {
          throw new Error('Booking not found');
        }
        await booking.update(updatedBookingData);
        return booking;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }

  Booking.init(
    {
      name: DataTypes.STRING,
      roomName: DataTypes.STRING,
      time: DataTypes.STRING,
      date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  );

  return Booking;
};
