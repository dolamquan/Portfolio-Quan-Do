import { Bot, SendHorizontal, User, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useState } from 'react';
import { sendChatMessage, type SourceItem } from '../lib/api';

type Message = {
  role: 'assistant' | 'user';
  content: string;
  sources?: SourceItem[];
};

export function Chat() {
  const suggestedQuestions = [
    "Tell me about Quan's experience",
    "What are Quan's technical skills?",
    'What projects has Quan worked on?',
    'Where does Quan go to school?',
  ];

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Quan's AI assistant. Ask me anything about Quan's experience, skills, projects, or education.",
    },
  ]);

  async function sendMessage(customMessage?: string) {
    const messageToSend = (customMessage ?? input).trim();
    if (!messageToSend || loading) return;

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: messageToSend },
    ]);
    setInput('');
    setLoading(true);

    try {
      const data = await sendChatMessage({ message: messageToSend });

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.answer,
          sources: data.sources ?? [],
        },
      ]);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Sorry, I could not reach the backend.';

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, something went wrong: ${errorMessage}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-20 px-6 pt-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-fuchsia-600 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Quan&apos;s AI Assistant</h1>
                <p className="text-sm text-blue-100">
                  Local RAG chatbot with FastAPI + Ollama
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-[450px] max-h-[550px] overflow-y-auto bg-slate-50/70 px-6 py-5 space-y-5">
            {messages.map((message, index) => {
              const isAssistant = message.role === 'assistant';

              return (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${isAssistant ? '' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div className={`max-w-2xl ${isAssistant ? '' : 'flex flex-col items-end'}`}>
                    <div
                      className={`rounded-2xl border px-4 py-3 shadow-sm ${
                        isAssistant
                          ? 'rounded-tl-md border-slate-200 bg-white text-slate-700'
                          : 'rounded-tr-md border-blue-200 bg-blue-600 text-white'
                      }`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>

                  {!isAssistant && (
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="rounded-2xl rounded-tl-md border border-slate-200 bg-white px-4 py-3 shadow-sm text-slate-600 inline-flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="px-6 py-4 border-t border-slate-200 bg-white">
            <p className="text-sm font-semibold text-slate-600 mb-3">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="px-3 py-2 text-sm rounded-xl border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about Quan..."
                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold disabled:opacity-50"
              >
                <SendHorizontal className="w-4 h-4" />
                Send
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-6 text-center"
        >
          <p className="text-slate-700 leading-relaxed">
            This chatbot retrieves relevant portfolio chunks from a local vector database before
            generating an answer.
          </p>
          <div className="mt-4">
            <Link
              to="/"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}