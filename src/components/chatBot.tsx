import React, { useState, ChangeEvent } from 'react';

const QuestionGenerator = () => {
  const [topic, setTopic] = useState('');
  const [questions, setQuestions] = useState([]);

  const generateQuestions = async () => {
    try {

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `Genera preguntas y respuestas sobre ${topic}` }
          ]
        })
      });

      const data = await response.json();

      if (data.object === 'chat.completion' && data.choices && data.choices.length > 0) {
        const generatedQuestions = data.choices.map((choice: any) => choice.message.content);

        setQuestions(generatedQuestions);
      } else {
        console.error('Respuesta inválida de la API de ChatGPT', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleTopicChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="topic">Tema:</label>
      <input type="text" id="topic" value={topic} onChange={handleTopicChange} />

      <button onClick={generateQuestions}>Generar preguntas</button>

      <h2>Preguntas generadas:</h2>
      <ul className="questions">
        {questions.map((question, index) => (
          <div key={index}> {question}</div>
        ) )}<br/>
      </ul>
    </div>

  );
};

export default QuestionGenerator;

