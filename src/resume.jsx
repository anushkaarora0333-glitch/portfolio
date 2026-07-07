import "./resume.css";
function Resume()
{
    return(
        <div className="resume">

    

    <div className="left">

        <div className="profile">
            <h1>Anushka Arora</h1>
            <p>B.Tech (CS-AI)</p>
        </div>

        <div className="section contact">
            <h2>Contact</h2>
            <p> +91 8865093020</p>
            <p> anushkaarora0333@gmail.com</p>
            <p>
                 <a href="https://www.linkedin.com/in/anushka-arora-0b45b7325" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
            <p>
                 <a href="https://github.com/anushkaarora0333-glitch" target="_blank" rel="noreferrer">GitHub</a>
            </p>
            <p> Agra, Uttar Pradesh</p>
        </div>

       <div className="section">
            <h2>Languages Spoken</h2>
            <ul>
                <li>Hindi — Native</li>
                <li>English — Fluent</li>
                <li>German — Certificate & Diploma coursework (Diploma result awaited)</li>
            </ul>
        </div>

    </div>

    

    <div className="right">

        <div className="right-section">
            <h2>Profile</h2>
            <p>
                BTech CS-AI student with hands-on full-stack development experience 
                and a strong grounding in DSA and DBMS.
            </p>
        </div>

        <div className="right-section">
            <h2>Education</h2>

            <div className="edu-box">
                <h3>B.Tech (CS-AI)</h3>
                <span>Banasthali Vidyapith | 2028</span>
                <p>CGPA: 8.68 (Till 4th Semester)</p>
            </div>

            <div className="edu-box">
                <h3>Class XII (CBSE)</h3>
                <span>2024</span>
                <p>Percentage: 92.2%</p>
            </div>

            <div className="edu-box">
                <h3>Class X (ICSE)</h3>
                <span>2022</span>
                <p>Percentage: 96.67%</p>
            </div>

        </div>

        <div className="right-section">
            <h2>Projects</h2>
            <div className="project-box">
                <h3>Anant Naad</h3>
                <p>
                     A web platform recommending Indian Classical music based on the listener's mood. 
                     Includes a raga reference module (aaroh, avroh, pakad, vadi, samvadi), an interactive 
                     practice section with a virtual tanpura and timers, and "Roots" — a section explaining 
                     foundational concepts like sangeet, shruti, and naad for newcomers. Built with React, 
                     Node.js, and Express.
                </p>
            </div>

        </div>

        <div className="right-section">
            <h2>Technical Stack</h2>

            <div className="skills">
            <div className="skill">C</div>
            <div className="skill">Java</div>
            <div className="skill">Python</div>
            <div className="skill">JavaScript</div>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">React</div>
            <div className="skill">Node.js</div>
            <div className="skill">Express.js</div>
            <div className="skill">Git</div>
            <div className="skill">VS Code</div>
        
        </div>
    </div>
        <div className="right-section">
    <h2>Certifications</h2>

    <div className="edu-box">
        <h3>Visharad (Hindustani Classical Vocal Music)</h3>
        <span>Prachin Kala Kendra, Chandigarh</span>
    </div>

    <div className="edu-box">
        <h3>Senior Diploma (Hindustani Classical Vocal Music)</h3>
        <span>Prayag Sangeet Samiti, Prayagraj</span>
    </div>
</div>
      <div className="right-section">
            <h2>Extracurriculars</h2>
            <ul className="achievement-list">
                <li>Founding member of Goonj, a student-initiated music club — helped establish it and coordinated practice sessions and performances.</li>
                <li>Perform as a vocalist at college fests, cultural events, and inter-college competitions.</li>
            </ul>
        </div>
       

    </div>
 </div>

    );
}
export default Resume;
