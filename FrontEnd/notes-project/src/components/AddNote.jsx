import { IoMdClose } from "react-icons/io";
import TagInput from "./TagInput";
import { useState } from "react";

function AddNote({ onClick, type, data }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [error, setError] = useState("");

  const addNotes = async () => {};
  const editNotes = async () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !tag) {
      setError("Please fill all the fields");
      return;
    }
    if (type === "edit") {
      editNotes();
    } else {
      addNotes();
    }
    setError("");
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Add Note</h1>
        <IoMdClose
          className="w-8 h-8 cursor-pointer hover:text-red-500 text-gray-400 transition-colors"
          onClick={onClick}
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* Title */}
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="bg-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
        {/* Content */}
        <label htmlFor="content">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          placeholder="Content...."
          className="bg-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
        {/* Tags */}
        <div>
          <label htmlFor="tags">Tags</label>
          <TagInput tag={tag} setTag={setTag} />
        </div>
        {/* Error Message */}
        {error && (
          <p className="text-red-500 bg-red-100 p-2 rounded-md">{error}</p>
        )}
        {/* Submit Button */}
        <button className="bg-blue-500 text-white cursor-pointer hover:bg-blue-700 rounded-lg px-4 py-3">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
