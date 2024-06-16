import React from 'react';

export default function ChatHeader() {
    return (
        <div className="flex items-center mb-4">
            <div className="ml-3">
                <p className="text-xl font-medium">Your AI Assistant</p>
                <p className="text-gray-500">Online</p>
            </div>
        </div>
    );
}
