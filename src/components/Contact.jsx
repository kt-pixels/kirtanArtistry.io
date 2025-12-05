import React, { useEffect } from "react";

export default function Contact({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative mt-20 w-full max-w-lg mx-4">
        <button
          onClick={onClose}
          className="absolute -top-5 -right-5 bg-pink-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          ✕
        </button>

        <div className="bg-gradient-to-br from-purple-900 to-pink-800 p-6 rounded-xl shadow-2xl">
          <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent (placeholder)");
              onClose();
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-sm block mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 rounded-md bg-black/20 border border-pink-400/20"
              />
            </div>
            <div>
              <label className="text-sm block mb-1">Message</label>
              <textarea
                rows={6}
                required
                className="w-full p-3 rounded-md bg-black/20 border border-pink-400/20"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
