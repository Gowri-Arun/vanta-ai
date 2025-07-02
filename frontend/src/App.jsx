import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import DeepfakeDetector from './components/DeepfakeDetector.jsx';
import LegalChatbot from './components/LegalChatbot.jsx';
import SignIn from './pages/SignIn.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/deepfake" element={<DeepfakeDetector />} />
      <Route path="/chatbot" element={<LegalChatbot />} />
    </Routes>
  );
}
