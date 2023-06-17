/*import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [topic, setTopic] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const generateQuestions = async () => {
    try {
      const response = await axios.post('/api/generate-questions', { topic });
      setQuestions(response.data.questions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Generador de Preguntas</h1>
      <input type="text" value={topic} onChange={handleTopicChange} placeholder="Ingrese un tema" />
      <button onClick={generateQuestions}>Generar preguntas</button>
      {questions.length > 0 && (
        <div>
          <h2>Preguntas generadas:</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Chatbot;*/
