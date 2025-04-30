const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: [3, "must be more than 3"],
      maxLength: [32, "must be less than 32"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minLength: [3, "must be more than 3"],
      maxLength: [64, "must be less than 64"],
    },
    tags: {
      type: [String],
      default: [],
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserNotes",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const NotesModel = mongoose.model("Notes", notesSchema);
module.exports = NotesModel;
