import { useState } from "react";

function TagInput({ tag, setTag }) {
  const [tags, setTags] = useState(["tag 1", "tag 2", "tag 3"]);

  const handleAddTag = (newTag) => {
    setTags((prevTags) => [...prevTags, newTag]);
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="mt-2">
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 px-2 py-1 text-slate-800 text-sm flex items-center justify-center gap-2"
            >
              #{tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-4 flex-wrap items-center justify-between w-full">
        <input
          type="text"
          placeholder="Tags"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="bg-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg flex-1"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddTag(tag);
            setTag("");
          }}
          className="bg-blue-500 text-white cursor-pointer hover:bg-blue-700 rounded-lg p-4 max-sm:w-full"
        >
          Add Tag
        </button>
      </div>
    </div>
  );
}

export default TagInput;
