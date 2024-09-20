import { db, storage } from "@/firebase/firebase";
import React, { useState } from "react";
import { RiUpload2Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const CheckInModal = ({ isOpen, onClose, onAdd }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleAdd = async () => {
    if (title && selectedImage) {
      setLoading(true); // Start loading
      try {
        const storageRef = ref(storage, `images/${Date.now()}.png`);
        await uploadString(storageRef, selectedImage, "data_url");
        const downloadURL = await getDownloadURL(storageRef);
        await addDoc(collection(db, "checkIns"), {
          title: title,
          imageUrl: downloadURL,
        });
        setSelectedImage(null);
        setTitle("");
        onAdd();
        onClose();
      } catch (error) {
        console.error("Error uploading image: ", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-120 overflow-hidden">
        <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-t-lg">
          <h2 className="text-lg font-medium">Add Check In</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <RiCloseFill className="text-xl" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <label className="block mb-2 text-sm font-medium text-zinc-700">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-zinc-300 rounded-md p-2 w-full mb-4"
          />
          <label className="block mb-2 text-sm font-medium text-zinc-700">
            Upload Image
          </label>
          <div
            className="border-dashed border-2 border-zinc-300 rounded-md p-4 mb-4 flex flex-col items-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <RiUpload2Fill className="text-purple-500 text-3xl mb-2" />
            <p className="text-purple-500 text-center">
              Click or drag file to this area to upload
            </p>
            <p className="text-zinc-500 text-sm text-center">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              className="cursor-pointer text-purple-500 mt-2"
              onClick={() =>
                document.querySelector('input[type="file"]').click()
              }
            >
              Select Image
            </label>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Uploaded"
                className="mt-4 w-60 h-60 rounded-md"
              />
            )}
          </div>

          {loading && (
            <p className="text-green-600 text-center mb-4">Uploading...</p>
          )}

          <div className="flex justify-end mt-4">
            <button
              className="bg-zinc-300 text-zinc-700 px-4 py-2 rounded-lg mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
              onClick={handleAdd}
              disabled={loading} // Disable button while loading
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInModal;
