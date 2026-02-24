// import { useState, useRef, useEffect } from "react";
// import { sendMessage } from "../services/api";

// interface Message {
//   role: "user" | "assistant";
//   content: string;
// }

// const AIChat = () => {
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       role: "assistant",
//       content:
//         "Hi 👋 I'm Sanskriti's AI assistant. Ask me anything about her resume, skills, or projects!",
//     },
//   ]);

//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     setMessages((prev) => [...prev, { role: "user", content: input }]);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await sendMessage(input);
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: res.reply },
//       ]);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: "Something went wrong." },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <section id="chat" className="chat-section">
//       <div className="chat-wrapper">

//         <div className="text-center mb-10">
//           <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
//             AI Chatbot
//           </h2>

//           <div className="w-20 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>

//           <p className="text-gray-400 mt-6">
//             Ask about my skills, projects, or experience.
//           </p>
//         </div>

//         <div className="chat-box">

//           <div className="h-80 overflow-y-auto space-y-4 mb-6">

//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.role === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-xs md:max-w-md px-4 py-3 rounded-xl text-sm ${
//                     msg.role === "user"
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-800 text-gray-300"
//                   }`}
//                 >
//                   {msg.content}
//                 </div>
//               </div>
//             ))}

//             {loading && (
//               <div className="text-gray-400 text-sm">
//                 Thinking...
//               </div>
//             )}

//             <div ref={messagesEndRef} />
//           </div>

//           <div className="flex gap-3">
//             <input
//               type="text"
//               className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
//               placeholder="Ask something..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />

//             <button
//               onClick={handleSend}
//               className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
//             >
//               Send
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AIChat;

import { useState } from "react";
import { sendMessage } from "../services/api";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await sendMessage(input);

      const botMessage: Message = {
        role: "assistant",
        content: res.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section id="chat" className="chat-section">
      <div className="ai-particle" style={{ left: "10%", bottom: "0%", animationDuration: "14s" }}></div>
<div className="ai-particle" style={{ left: "30%", bottom: "0%", animationDuration: "18s" }}></div>
<div className="ai-particle" style={{ left: "60%", bottom: "0%", animationDuration: "12s" }}></div>
<div className="ai-particle" style={{ left: "80%", bottom: "0%", animationDuration: "16s" }}></div>
<div className="ai-wave"></div>


      <div className="chat-wrapper">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            AI Chatbot
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-6">
            Ask about my skills, projects, or experience.
          </p>
        </div>

        {/* Chat Box */}
        <div className="chat-box">

          {/* Messages */}
          <div className="chat-messages flex flex-col gap-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-bubble ${
                  msg.role === "user" ? "user-bubble" : "bot-bubble"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="bot-bubble typing">
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="chat-input"
            />

            <button onClick={handleSend} className="chat-send-btn">
              Send
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIChat;