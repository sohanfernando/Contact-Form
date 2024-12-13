import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name || !email || !message){
      setError("All fields are required");
      return;
    }

    setError("");
    
    setSubmittedData({ name, email, message});

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="App">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          id='name-input'
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          id='email-input'
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message'
          id='message-input'
        />
        <button type='submit' id='submit-button'>
          Submit
        </button>
      </form>
      {error && (
        <p id='error-message' className='error'>
          {error}
        </p>
      )}
      {submittedData && (
        <div id='submitted-data' className='submitted-data'>
          <h2>Submitted Information</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Message:</strong> {submittedData.message}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
