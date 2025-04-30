const router = require("express").Router();

const { protect } = require("../services/AuthService");

const {
  addNotesValidator,
  editNotesValidator,
  deleteNotesValidator,
} = require("../utils/validator/NotesValidator");

const {
  addNotes,
  getNotes,
  editNotes,
  deleteNotes,
  isPinnedEdit,
} = require("../services/NotesService");

router.use(protect);

router.route("/").post(addNotesValidator, addNotes).get(getNotes);

router
  .route("/:id")
  .put(editNotesValidator, editNotes)
  .delete(deleteNotesValidator, deleteNotes);

router.put("/:id/isPinned", isPinnedEdit);

module.exports = router;
