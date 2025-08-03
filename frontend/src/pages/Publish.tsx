import { Appbar } from "../components/Appbar";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar />

      <div className="flex justify-center w-full pt-8">
        <div className="w-full max-w-screen-lg flex flex-col gap-4">
          {/* Title Input */}
          <textarea
            id="message"
            rows={2}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-0 focus:border-transparent
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Title"
          />

          {/* Text Editor for Description */}
          <TextEditor
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Publish Button */}
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content: description,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default function TextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="w-full">
      <label htmlFor="editor" className="sr-only">
        Write an article
      </label>
      <textarea
        id="editor"
        rows={8}
        value={value}
        onChange={onChange}
        required
        className="block w-full text-sm text-gray-800 bg-white dark:bg-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-0 focus:border-transparent"
        placeholder="Write an article..."
      ></textarea>
    </div>
  );
}
