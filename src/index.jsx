import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

function App() {
  return (
    <main className="profile-container">
      <div className="profile-text">
        <h1>Fabrice</h1>
        <p>
          I’m a junior at <strong>Dartmouth College</strong>, majoring in Computer Science with a minor in Math,
          where I’m fortunate to be advised by Professor
          <strong><a className="inline-link" href="https://www.cs.dartmouth.edu/~soroush/" target="_blank" rel="noreferrer">Soroush Vosoughi.</a></strong>
          My research interests include <strong>ML Security & Fairness</strong>, <strong>Foundational Models</strong>,
          and <strong>multilingual NLP</strong> with focus on low-resource languages like Kinyarwanda (My native language ✨).
        </p>
        <p>
          I’m especially interested in the intersection of <strong>low-resource language </strong>modeling and LLM security/fairness.
          In particular, I study how training methods such as transfer learning and backtranslation can introduce
          unique vulnerabilities like <strong>memorization</strong> and exacerbate bias in underrepresented languages.
          I also investigate the underlying assumptions and failure modes of these methods, especially as they apply to foundation models.
        </p>

        <p className="links">
          <a href="mailto:fabrice.m.niyigaba.27@dartmouth.edu">Email</a> /
          <a href="https://github.com/Manzi-Fabrice" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </div>
      <div className="profile-photo">
        <img src="/profile.jpg" alt="Fabrice Niyigaba" />
        <a className="download-link" href="/profile.jpg" download>Download Full Profile Picture</a>
      </div>
      <div className="news-section">
        <h2>News</h2>
        <ul>
          <li>
            <strong>June 2025:</strong> Started internship at Dell Technologies, improving chatbot query understanding with transformer models.
          </li>
          <li>
            <strong>May 2025:</strong> Presented <a className="inline-link" href="https://drive.google.com/file/d/1GH4b8QtI9FrQCjt7TriuF96n6mnkJgGx/view" target="_blank" rel="noreferrer">poster </a><em>“Diffusion Models are Brittle Memorizers: A PSNR-Based Audit of Localized and Global Reconstruction Fragility”</em>.
          </li>
          <li>
            <strong>May 2025:</strong> Awarded $3,200 <a className="inline-link" href="https://students.dartmouth.edu/ugar/research/programs/presidential-scholars/program-information" target="_blank" rel="noreferrer">James O. Freedman Presidential Scholarship</a>research grant for my proposal <em>“Adaptive Curriculum Learning Based on Token-Level Linguistic Properties”</em>, advised by<a className="inline-link" href="https://www.cs.dartmouth.edu/~soroush/" target="_blank" rel="noreferrer">Prof. Soroush Vosoughi</a>.
          </li>
          <li>
            <strong>April 2025:</strong> Began GNN research internship with <a className="inline-link" href="https://sites.google.com/umich.edu/yujunyan/home" target="_blank" rel="noreferrer">Prof. Yujun Yan</a>, exploring soft clustering problems on knowledge graphs.
          </li>
          <li>
            <strong>March 2025:</strong> Began working as ML Engineer in the Biological Sciences Dept., fine-tuning iNaturalist models on moth species from the Hubbard Brook forest.
          </li>
          <li>
            <strong>June 2024:</strong> Received $1,700 <a className="inline-link" href="https://students.dartmouth.edu/ugar/research/programs/undergraduate-research-assistantships-dartmouth-urad/program-information" target="_blank" rel="noreferrer">URAD</a> grant for my internship proposal: <em>“Aquatic Robotics: Pollution Mapping with Multi-Agent Systems”</em>, <br />advised by <a className="inline-link" href="https://rlab.cs.dartmouth.edu/albertoq/#" target="_blank" rel="noreferrer">Prof. Alberto Quattrini Li</a>— my first ML research experience.
          </li>
        </ul>

      </div>

    </main>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
