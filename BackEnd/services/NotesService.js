const asyncHandler = require("express-async-handler");
const NotesModel = require("../models/NotesModel");

exports.addNotes = asyncHandler(async (req, res) => {
  const { title, description, tags } = req.body;
  const note = await NotesModel.create({
    title,
    description,
    tags,
    user: req.user._id
  });
  res.status(201).json({
    success: true,
    message: "Note added successfully",
    note
  });
});

exports.getNotes = asyncHandler(async (req, res) => {
  // Search notes
  let query = { user: req.user._id };
  if (req.query.keyword) {
    query.$or = [{ title: { $regex: req.query.keyword, $options: "i" } }];
  }
  const notes = await NotesModel.find(query);
  res.status(200).json({
    success: true,
    results: notes.length,
    message: "Notes fetched successfully",
    notes
  });
});

exports.editNotes = asyncHandler(async (req, res) => {
  const { title, description, tags } = req.body;
  const note = await NotesModel.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      tags
    },
    { new: true }
  );
  res.status(200).json({
    success: true,
    message: "Note updated successfully",
    note
  });
});

exports.deleteNotes = asyncHandler(async (req, res) => {
  await NotesModel.findByIdAndDelete(req.params.id);
  res.status(204).json({});
});

exports.isPinnedEdit = asyncHandler(async (req, res) => {
  const { isPinned } = req.body;
  const note = await NotesModel.findByIdAndUpdate(
    req.params.id,
    {
      isPinned
    },
    { new: true }
  );
  res.status(200).json({
    success: true,
    message: "Note updated successfully",
    note
  });
});
