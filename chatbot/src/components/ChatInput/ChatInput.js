import React, { useState } from 'react';

export default function ChatInput({ onSendMessage }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 flex items-center">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600 ed-full ml-3 hover:bg-blue-600">
                   Send
               </button>
           </form>
       );
   }