const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
      {
        type: {
            type: String,
            trim: true,
            required: "Enter your exercise type",
        },
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name",
        },
        duration: {
            type: Number,
            required: "Enter a Duration",
        },
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
    }
  ]  
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;