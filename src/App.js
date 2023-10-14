import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Responsive Paragraph Word Counter</h1>
      <div style={{ display: 'inline-block', textAlign: 'left' }}>
        <textarea
          rows="5"
          placeholder="Write your paragraph here..."
          value={text}
          onChange={handleTextChange}
        />
        <p style={{ color: 'grey' }}>Word count: {wordCount}</p>
      </div>
    </div>
  );
}

export default App;
