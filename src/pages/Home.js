import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Main from '../components/main/Main'
import Dalle from '../components/dalle/Dalle'
import Prism from 'prismjs';
import { Link } from 'react-router-dom'
import "prismjs/themes/prism-tomorrow.css";
import './Home.css'

const Home = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, [])
  return (
    <div>
      <Navbar />
      <Main />
      <div className="second-section-container">
        <div className="second-section">
          <div className="second-section-title">
            <div style={{ marginBottom: "24px" }}>
              Developers are building apps using OpenAI <br />
              <span style={{ color: "grey", fontSize: "0.8em" }}>Begin building apps with a simple API call</span>
            </div>
            <div>
              <button className="btn-primary"><a href="https://beta.openai.com/signup" target="_blank" rel="noreferrer">Get Started</a></button>
              <button className="btn-secondary"><a href="https://beta.openai.com/docs/introduction" target="_blank" rel="noreferrer">Read Documentation</a></button>
            </div>
          </div>
          <div className="second-section-code">
            <pre style={{ padding: "22px 25px", backgroundColor: '#191927' }}>
              <code className="language-javascript" style={{ whiteSpace: 'pre' }}>
                import openai {'\n'}{'\n'}
                openai.Completion.create({'\n'}
                &nbsp;&nbsp;engine="davinci",{'\n'}
                &nbsp;&nbsp;prompt="Make a list of astronomical observatories:"{'\n'}
                ){'\n'}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <Dalle />
      <div className="davinci-section-container">
        <div className="davinci-section">
          <div className="item-a">
            <pre className="code-example-container">
              <div className="prompt">
                {'"""'} <br />
                Extract all the html from the string and replace the tags with ''<br />
                {'"""'}<br />
              </div>
              <div className="prompt-answer">
                <br />
                <span style={{ 'color': '#2D659D' }}>def</span> <span style={{ color: '#C83C42' }}>extract_html</span>(text): <br />
                &nbsp;&nbsp;return re.sub(<span style={{ color: '#038D6A' }}>{"'&lt;[^&lt;]+?&gt;'"}</span>, <span style={{ color: '#038D6A' }}>''</span>, text)
              </div>
            </pre>
          </div>
          <div className="item-b">
            <div className="desc">
              <h1>Codex</h1>
              <h4>The Codex is capable in Python and proficient in over a dozen languages including JavaScript, Go, Perl, PHP, Ruby, Swift, TypeScript, SQL, and even Shell.</h4>
              <button className="btn-primary"><Link to="/codex" style={{ color: 'white' }}>Playground</Link></button>
            </div>
          </div>
          <div className="item-c">
            <div className="desc">
              <h1>Davinci</h1>
              <h4>The model generates a text completion that attemps to match whatever context or pattern you gave it.</h4>
              <button className="btn-secondary"><Link to="/davinci" style={{ color: 'black' }}>Playground</Link></button>
            </div>
          </div>
          <div className="item-d">
            <pre className="code-example-container">
              <div className="prompt">
                Translate this into French: Where can I find a bookstore?
                <br /><br />
              </div>
              <div className="prompt-answer" style={{ fontWeight: 'bold' }}>
                Où puis-je trouver un magasin de livres?
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home