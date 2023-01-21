const api_key = process.env.REACT_APP_API_KEY
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + api_key
}

export const createCompletion = async (prompt) => {
    const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            'model': "text-davinci-003",
            'prompt': prompt,
            'temperature': 0.3,
            'max_tokens': 2048,
            'frequency_penalty': 1,
            'presence_penalty': 1
        })
    }

    const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
    const data = await response.json();
    return data.choices[0].text;
}

export const createCodeCompletion = async (prompt) => {
    const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            'model': "code-davinci-002",
            'prompt': prompt,
            'temperature': 0.3,
            'max_tokens': 2048,
            'frequency_penalty': 1,
            'presence_penalty': 1
        })
    }

    const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
    const data = await response.json();
    return data.choices[0].text;
}

export const fetchImage = async (prompt) => {
    const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            'prompt': prompt,
            'n': 1,
            'size': "512x512"
        })
    }
    const response = await fetch('https://api.openai.com/v1/images/generations', requestOptions);
    console.log(response);
    const data = await response.json();
    return data.data[0].url;
}