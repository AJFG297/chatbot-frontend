import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import Message from './Message';
import ChatInput from './ChatInput';
import { getAIResponse } from '../services/openaiService';

export default function Chatbox() {
    const [messages, setMessages] = useState([
        {
            isAI: true,
            message: 'Hello! How can I help you today?',
            avatar: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="100"
                    height="100"
                    fill="#009688"
                    className="w-8 h-8 rounded-full"
                >
                    <circle cx="50" cy="50" r="20" fill="#009688" />
                    <circle cx="50" cy="40" r="2" fill="#fff" />
                    <rect x="47" y="45" width="6" height="10" fill="#fff" />
                    <circle cx="50" cy="65" r="3" fill="#009688" />
                    <circle cx="45" cy="45" r="3" fill="#fff" />
                    <circle cx="55" cy="45" r="3" fill="#fff" />
                    <circle cx="45" cy="45" r="1" fill="#000" />
                    <circle cx="55" cy="45" r="1" fill="#000" />
                    <line x1="50" y1="30" x2="40" y2="20" stroke="#009688" strokeWidth="2" />
                    <line x1="50" y1="30" x2="60" y2="20" stroke="#009688" strokeWidth="2" />
                </svg>
            ),
        },
    ]);

    const handleSendMessage = async (userMessage) => {
        const newMessages = [
            ...messages,
            {
                isAI: false,
                message: userMessage,
                avatar: (
                    <img
                        src="https://pbs.twimg.com/profile_images/1707101905111990272/Z66vixO-_normal.jpg"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full ml-3"
                    />
                ),
            },
        ];
        setMessages(newMessages);

        const aiResponse = await getAIResponse(userMessage);
        setMessages([
            ...newMessages,
            {
                isAI: true,
                message: aiResponse,
                avatar: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        width="100"
                        height="100"
                        fill="#009688"
                        className="w-8 h-8 rounded-full"
                    >
                        <circle cx="50" cy="50" r="20" fill="#009688" />
                        <circle cx="50" cy="40" r="2" fill="#fff" />
                        <rect x="47" y="45" width="6" height="10" fill="#fff" />
                        <circle cx="50" cy="65" r="3" fill="#009688" />
                        <circle cx="45" cy="45" r="3" fill="#fff" />
                        <circle cx="55" cy="45" r="3" fill="#fff" />
                        <circle cx="45" cy="45" r="1" fill="#000" />
                        <circle cx="55" cy="45" r="1" fill="#000" />
                        <line x1="50" y1="30" x2="40" y2="20" stroke="#009688" strokeWidth="2" />
                        <line x1="50" y1="30" x2="60" y2="20" stroke="#009688" strokeWidth="2" />
                    </svg>
                ),
            },
        ]);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="bg-white rounded-lg shadow-md p-4">
                <ChatHeader />
                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <Message key={index} isAI={msg.isAI} message={msg.message} avatar={msg.avatar} />
                    ))}
                </div>
                <ChatInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}
