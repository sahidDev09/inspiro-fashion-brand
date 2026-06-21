const fs = require('fs');

async function test() {
  const API_KEY = "sk-5mLZMFtLrR7Av7cY5hPg_USqpf0ytJZhQsXa9ILcahEHXf1HGJ0H45-IPajGHFMO";

  // Let's test the endpoint without file upload first to see what error it returns
  try {
    console.log("Testing Task Endpoint...");
    const res = await fetch('https://yce-api.perfectcorp.com/s2s/v2.0/task/ai-clothes', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_url: "https://via.placeholder.com/150",
        cloth_url: "https://via.placeholder.com/150",
        type: "upper_body"
      })
    });
    
    console.log("Status:", res.status);
    const data = await res.text();
    console.log("Response:", data);
  } catch (e) {
    console.error("Error:", e);
  }
}

test();
