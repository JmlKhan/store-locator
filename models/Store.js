const mongoose = require('mongoose');
const geocoder = require('../utils/geoCoder');

const StoreSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: [true, 'Please add a store ID'],
        trim: true,
        unique: true,
        maxLength: [10, 'Store id must be less than 10 chars']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String,
  },
  createdAt: {
      type: Date,
      dafault: Date.now
  }
});

StoreSchema.pre('save', async function(next) {
  const loc = await geocoder.geocode(this.address);
  
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  }

  this.address = undefined;
  next();
})

module.exports = mongoose.model('Store', StoreSchema)