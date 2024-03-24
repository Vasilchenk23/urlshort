import React, { useState } from 'react';

function MainBlock() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const REBRANDLY_API_KEY = 'f78498a0e3034cb1a38a487b6a28ce2e';

  const handleGenerateShortUrl = () => {
    if (!isValidUrl(longUrl)) {
      setError('Please enter a valid URL');
      return;
    }

    setIsLoading(true);
    const requestBody = {
      destination: longUrl,
      domain: { fullName: 'rebrand.ly' }
    };

    fetch('https://api.rebrandly.com/v1/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': REBRANDLY_API_KEY
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to generate short URL');
      }
      return response.json();
    })
    .then(data => {
      setShortUrl(data.shortUrl);
      setIsLoading(false);
      setError(null);
    })
    .catch(error => {
      console.error('Error generating short URL:', error);
      setError('Failed to generate short URL');
      setIsLoading(false);
    });
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="mainBlock">
      <div className="urlImg">
        <img src="./img/link.png" alt="img" />
      </div>
      <div className="inputBlockUrl">
        <input
          type="text"
          placeholder="Enter long URL here"
          className="inputBigUrl"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button className="generateButton" onClick={handleGenerateShortUrl} disabled={isLoading}>
          {isLoading ? 'Please wait...' : 'Generate'}
        </button>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Shortened URL will appear here"
          className="inputLittleUrl"
          value={shortUrl}
          readOnly
        />
      </div>
    </div>
  );
}

export default MainBlock;
