import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({

        imageUrl: {type:String},
        title: {type:String},
        description: {type:String},
        dateTime: {type:String},
        location: {type:String},
})

const Event = mongoose.model('Event', eventSchema)
export default Event;