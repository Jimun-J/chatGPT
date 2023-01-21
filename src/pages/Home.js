import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Main from '../components/main/Main'
import Prism from 'prismjs';
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
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Read Documentation</button>
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
      <div className='codex-section-container'>
        <div className='codex-section'>
          <div className='codex-section-left'>
              <div className="codex-example">

              </div>
          </div>
          <div className="codex-section-right">
            <h1>Codex</h1>
            <h4>Learn how to generate or manipulate code</h4>
            <p>
              Codex is capable in Python and proficient in over a dozen languages
              including JavaScript, Go, Perl, PHP, Ruby, Swift, TypeScript, SQL, and even Shell.
            </p>
            <button className="btn-primary">Playground</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home