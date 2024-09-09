import React from 'react';

const NotesSection = () => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Notes</h2>
      <textarea
        className="w-full p-3 border rounded-md"
        placeholder="Write or paste anything here..."
      ></textarea>
    </section>
  );
};

export default NotesSection;
