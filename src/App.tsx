import { useState, useEffect } from 'react';
import { Terminal, Skull, Github, Linkedin, ChevronRight } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

function App() {
  const [terminalText, setTerminalText] = useState('');
  const fullText = '> ROHID C B';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'JAVA', level: 95 },
    { name: 'PYTHON', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'MACHINE LEARNING', level: 88 },
    { name: 'POWER BI', level: 92 },
    { name: 'GEN AI (Basic)', level: 87 }
  ];

  const projects = [
    {
      title: '> Smart Vision Assistance for Visually Impaired',
      desc: 'This project is an AI-powered assistive application designed to help visually impaired people understand their surroundings in real time. It detects everyday objects, recognizes familiar faces, and identifies Indian currency notes. The system uses YOLOv8 for object recognition and a face_recognition model for identifying registered individuals. A text-to-speech interface provides audio feedback so the user can interact hands-free. The application was built with Flask and PyQt5 to offer a simple and accessible user experience, with voice command support for switching between features.',
      tech: ['Computer Vision', 'Object Detection', 'Python','Machine Learning']
    },
    {
      title: '> Hack Blocker – AI-powered Anti-Phishing Chrome Extension',
      desc: 'Hack Blocker is a cybersecurity browser extension designed to protect internet users from phishing attacks. It uses a machine learning model (Gradient Boosting Classifier) to analyze website URLs and detect suspicious patterns in real time. Key security features such as domain validity, protocol checks, website structure, and user behavior signals are extracted and evaluated instantly. The backend is built with Flask, and the extension provides instant visual alerts in the browser, helping users avoid unsafe websites.',
      
      tech: ['Python', 'Chrome Extension', 'Machine Learning', 'Cyber Security','Java Script']
    },
    {
      title: '> AI Based Real Time Head Monitoring System',
      desc: 'This is a computer vision-based people counting system for use in public and commercial environments. It employs YOLOv8 and OpenCV to detect and track people in live video streams. A custom boundary-based counting algorithm differentiates between individuals entering and exiting a monitored area. The frontend dashboard displays real-time video and count statistics through a Flask web interface, making it useful for crowd monitoring and smart facility management.',
      
      tech: ['Deep Learning', 'Python', 'OpenCV','Dashboard development','Computer Vision','Flask']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden">
      {/* Scanline effect */}
      <div className="scanline absolute inset-0 pointer-events-none z-50 bg-gradient-to-b from-transparent via-green-500/5 to-transparent h-32"></div>

      {/* Grid background */}
      <div className="fixed inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(green 1px, transparent 1px), linear-gradient(90deg, green 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Header */}
      <header className="relative z-10 border-b-2 border-green-500 bg-black/90 backdrop-blur transition-all duration-300 hover:border-green-400 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 fade-in">
            <h1 className="text-2xl font-bold tracking-widest">
              <span className="text-green-400">[</span>
              ✦🖥️℞OHID CB ☀︎
              <span className="text-green-400">]</span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            {['ABOUT', 'SKILLS', 'PROJECTS','CERTIFICATES', 'CONTACT'].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-green-300 transition-all duration-300 flex items-center gap-1 group hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-8">
          <div className="border-2 border-green-500 bg-black/80 p-6 shadow-[0_0_20px_rgba(0,255,0,0.3)] fade-in-up transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,0,0.5)] hover:scale-[1.01]">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5" />
              <span className="text-sm">TERMINAL_OUTPUT.exe</span>
            </div>
            <div className="text-3xl md:text-5xl font-bold mb-4">
              {terminalText}<span>_</span>
            </div>
            <div className="text-xl text-green-400">
              <span className="text-green-500">&gt;</span> ERROR_404: Artificial Intelligence and Data Science 
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Linkedin, text: 'LinkedIN', value: '', link: 'https://www.linkedin.com/in/rohid/' },
              { icon: Github, text: 'Github', value: '', link: 'https://github.com/ROHID-ai' },
              { icon: SiLeetcode, text: 'Leet Code', value: '', link: 'https://leetcode.com/u/ROHID/' }
            ].map((stat, i) => (
              <div
                key={i}
                onClick={() => stat.link && window.open(stat.link, '_blank')}
                className="border border-green-500 bg-black/60 p-6 hover:bg-green-500/10 transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] group cursor-pointer"
              >
                <stat.icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-green-400">{stat.text}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-green-400">[</span>
          ABOUT.exe
          <span className="text-green-400">]</span>
        </h2>
        <div className="border-l-4 border-green-500 pl-6 bg-black/60 p-8 backdrop-blur slide-in-right transition-all duration-500 hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,0,0.2)]">
          <p className="text-lg leading-relaxed text-green-400">
            <span className="text-green-500">&gt;</span> I am passionate about Data Science and enthusiastic about Data Analytics. Deeply interested in Generative AI, I am eager to upskill in this field and explore emerging technologies. Along with a strong interest in Java and SQL, I continuously seek to enhance my technical expertise. Committed to lifelong learning, I aim to leverage advanced tools to expand my knowledge and capabilities. Driven by curiosity and innovation, I strive to make meaningful and impactful contributions in the fields of Data Science and Artificial Intelligence.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[].map((tag, idx) => (
              <span
                key={tag}
                className="px-3 py-1 border border-green-500 text-sm hover:bg-green-500 hover:text-black transition-all duration-300 cursor-default hover:scale-105 hover:shadow-[0_0_10px_rgba(0,255,0,0.8)] fade-in"
                style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 slide-in-left">
          <span className="text-green-400">[</span>
          SKILL_TREE.dat
          <span className="text-green-400">]</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="bg-black/60 p-6 border border-green-500 transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:-translate-y-1 fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="mb-2">
                <span className="text-green-400">&gt; {skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 slide-in-left">
          <span className="text-green-400">[</span>
          PROJECTS.log
          <span className="text-green-400">]</span>
        </h2>
        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="border-2 border-green-500 bg-black/80 p-6 hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] transition-all duration-500 hover:border-green-400 hover:-translate-x-2 group cursor-pointer fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold group-hover:text-green-300 transition-all duration-300">
                  {project.title}
                </h3>
                <span className={`text-sm px-3 py-1 border ${
                  project.status === 'DEPLOYED'
                    ? 'border-green-500 text-green-500'
                    : 'border-green-400 text-green-400'
                }`}>
                  [{project.status}]
                </span>
              </div>
              <p className="text-green-400 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-green-500/20 border border-green-500 text-xs transition-all duration-300 hover:bg-green-500 hover:text-black hover:scale-110"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 slide-in-left">
          <span className="text-green-400">[</span>
          CERTIFICATES.log
          <span className="text-green-400">]</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Data Analytics (30-Day Program)', provider: 'Novi Tech', year: '2024' },
            { title: 'Fundamentals of Deep Learning', provider: 'Nvidia', year: '2024' },
            { title: 'Data Analytics', provider: 'HP', year: '2024' },
            { title: 'Machine Learning (30-Day Program)', provider: 'Novi Tech', year: '2024' },
            { title: 'MongoDB', provider: 'Nvidia', year: '2025' },
            { title: 'Building Real-Time Video AI Applications', provider: 'Nvidia', year: '2025' },
            { title: 'Generative AI with Diffusion Models', provider: 'Nvidia', year: '2025' },
            { title: 'Introduction to Transformer-Based Natural Language Processing', provider: 'Nvidia', year: '2025' },
            { title: 'Oracle Fusion Cloud Applications Foundations', provider: 'Oracle', year: '2025' }
          ].map((cert, idx) => (
            <div
              key={idx}
              className="border-2 border-green-500 bg-black/80 p-6 hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] transition-all duration-500 hover:border-green-400 hover:-translate-y-1 fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <h3 className="text-xl font-bold text-green-300 mb-2">{cert.title}</h3>
              <p className="text-green-400 mb-1">
                <span className="text-green-500">&gt;</span> Provider: {cert.provider}
              </p>
              <p className="text-green-400">
                <span className="text-green-500">&gt;</span> Year: {cert.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 py-16 pb-32">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 slide-in-left">
          <span className="text-green-400">[</span>
          CONTACT.sys
          <span className="text-green-400">]</span>
        </h2>
        <div className="border-2 border-green-500 bg-black/80 p-8 max-w-2xl slide-in-right transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] hover:border-green-400">
          <p className="text-lg mb-6 text-green-400">
            <span className="text-green-500">&gt;</span> Ready to collaborate or connect? Drop me a message or reach out on my social platforms.

          </p>
          <div className="space-y-4">
            {[
              { text: 'EMAIL: rollsrohid@gmail.com', link: 'mailto:rollsrohid@gmail.com' },
              { text: 'CONTACT: 6381243787' },
              { text: 'LinkedIN', link: 'https://www.linkedin.com/in/rohid/' },
              { text: 'Github', link: 'https://github.com/ROHID-ai' },
              { text: 'Leet Code', link: 'https://leetcode.com/u/ROHID/' }
            ].map((contact, idx) => (
              <div
                key={idx}
                onClick={() => contact.link && window.open(contact.link, '_blank')}
                className="flex items-center gap-3 hover:text-green-300 transition-all duration-300 cursor-pointer hover:translate-x-2 group fade-in"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                <span>{contact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Me Detailed Box */}
<section id="about-detailed" className="relative z-10 max-w-7xl mx-auto px-4 py-8">
  <div className="border-2 border-green-500 bg-black/70 p-8 rounded-lg text-left hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] transition-all duration-500 hover:border-green-400 hover:scale-[1.02]">
    <h2 className="text-3xl font-bold text-green-400 mb-4">Get to Know Me</h2>

    <p className="text-green-400 leading-relaxed mb-4">
      <span className="text-green-500">&gt;</span> Hello! I'm <strong>Rohid C B</strong>, a passionate and goal-driven individual pursuing <strong>B.Tech in Artificial Intelligence and Data Science</strong> at <strong>Sri Ramakrishna Engineering College, Coimbatore</strong>.
    </p>

    <p className="text-green-400 leading-relaxed mb-4">
      <span className="text-green-500">&gt;</span> I am strongly interested in <strong>Artificial Intelligence</strong> and skilled in <strong>Java</strong>, <strong>Python</strong>, <strong>SQL</strong>, <strong>Machine Learning</strong>, and <strong>Generative AI (Basic)</strong>.
    </p>

    <p className="text-green-400 leading-relaxed mb-4">
      <span className="text-green-500">&gt;</span> As a <strong>fresher</strong>, I have gained <strong>hands-on experience</strong> through several <strong>AI-based projects</strong> that demonstrate practical applications of modern technologies. I possess a deep passion for <strong>AI innovation</strong> and continuously strive to expand my knowledge in emerging technologies.
    </p>

    <p className="text-green-400 leading-relaxed mb-4">
      <span className="text-green-500">&gt;</span> My focus is on building <strong>intelligent, real-world solutions</strong> that combine innovation, efficiency, and user experience. Beyond coding, I enjoy <strong>exploring new technologies</strong>, solving <strong>analytical challenges</strong>, and contributing to <strong>open-source projects</strong>.
    </p>
  </div>
</section>

      {/* Resume Box */}
<section id="resume" className="relative z-10 max-w-7xl mx-auto px-4 py-8">
  <div className="border-2 border-green-500 bg-black/70 p-6 rounded-lg text-center hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] transition-all duration-500 hover:border-green-400 hover:scale-[1.02]">
    <div className="flex flex-col items-center space-y-4">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Resume Icon" className="w-16 h-16 mb-2 animate-pulse" />
      <h2 className="text-2xl font-bold text-green-400">View My Resume</h2>
      <a
        href="src/ROHID CB- B Tech (AI & DS), SREC - Coimbatore.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="ROHID_CB_Resume.pdf"
        className="inline-block mt-3 px-6 py-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 rounded-md"
      >
        View / Download Resume
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="relative z-10 border-t-2 border-green-500 bg-black/90 backdrop-blur py-6 transition-colors duration-300 hover:border-green-400">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-green-400 transition-all duration-300 hover:text-green-300">
            <span className="text-green-500">&gt;</span> SYSTEM_STATUS: ONLINE | BUILD_v2.0.1 | © 2025 ROHID CB
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
f