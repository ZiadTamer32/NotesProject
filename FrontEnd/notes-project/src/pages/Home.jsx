import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Modal from "../components/Modal";
import NoteCard from "../components/NoteCard";
import AddNote from "../components/AddNote";

function Home() {
  const initialNotes = [
    {
      title: "Shopping List",
      date: "2024-04-01",
      content: "Buy milk, eggs, and bread.",
      tags: "#Shopping",
      isPinned: false,
      index: 0
    },
    {
      title: "Meeting Notes",
      date: "2024-04-05",
      content: "Discuss project timeline and tasks.",
      tags: "#Work",
      isPinned: false,
      index: 1
    },
    {
      title: "Vacation Plan",
      date: "2024-05-10",
      content: "Book flights and hotels for summer trip.",
      tags: "#Travel",
      isPinned: false,
      index: 2
    },
    {
      title: "Birthday Ideas",
      date: "2024-04-20",
      content: "Find gifts and plan a surprise party.",
      tags: "#Personal",
      isPinned: false,
      index: 3
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    data: null,
    type: null
  });

  const handleCloseModal = () => {
    setIsModalOpen({ isOpen: false, data: null, type: null });
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {initialNotes.map((note, index) => (
        <NoteCard
          key={index}
          title={note.title}
          date={note.date}
          content={note.content}
          isPinned={note.isPinned}
          tags={note.tags}
          onEdit={() => {}}
          onDelete={() => {}}
          onPin={() => {}}
        />
      ))}

      <button
        onClick={() =>
          setIsModalOpen({ isOpen: true, data: null, type: "create" })
        }
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-500 text-white rounded-lg cursor-pointer text-center flex items-center justify-center hover:bg-blue-700 transition-colors"
      >
        <FaPlus size={20} />
      </button>

      <Modal isOpen={isModalOpen.isOpen}>
        <AddNote
          onClick={handleCloseModal}
          type={isModalOpen.type}
          data={isModalOpen.data}
        />
      </Modal>
    </div>
  );
}

export default Home;
