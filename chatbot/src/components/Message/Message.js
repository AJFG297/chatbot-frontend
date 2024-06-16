import React from 'react';

export default function Message({ isAI, message, avatar }) {
    return (
        <div className={`flex items-${isAI ? 'start' : 'end'} ${isAI ? '' : 'justify-end'}`}>
            {isAI && avatar}
            <div className={`ml-3 ${isAI ? 'bg-gray-100' : 'bg-blue-500'} p-3 rounded-lg`}>
                <p className={`text-sm ${isAI ? 'text-gray-800' : 'text-white'}`}>{message}</p>
            </div>
            {!isAI && avatar}
        </div>
    );
}
