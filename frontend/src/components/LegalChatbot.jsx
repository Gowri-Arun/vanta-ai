import { useState } from 'react';

export default function LegalChatbot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/legal-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error('Error:', err);
      setResponse({ error: 'Could not connect to backend.' });
    }
  };

  return (
    <div className="p-4 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Legal Chatbot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded p-2 w-full mb-2"
          placeholder="Type your legal query..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>

      {response && (
        <div className="mt-4 bg-gray-100 p-3 rounded">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
