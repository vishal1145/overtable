var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');


var ProductionSchema = new mongoose.Schema({
    Name: { type: String },
    //Ingradients: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
    Ingradients: [{
        quantity: String,
        name: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' },
        ingradientClientId: String,
    }],
    //Sides: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    created_by: String,
    updated_by: String,
    message: { type: String },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    clientId: { type: String },
    Productionamount: { type: String },
    ProductionUnit: { type: String },
    AvailableQuantity: { type: String },
    isactive: { type: Number, default: 1 },
    Edits: []
});

mongoose.model('Production', ProductionSchema);

