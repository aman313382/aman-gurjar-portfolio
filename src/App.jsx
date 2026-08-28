import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const roles = [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS Enthusiast",
    "Automation Engineer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* Typing Animation */
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(
            currentRole.substring(0, displayText.length + 1)
          );

          if (displayText === currentRole) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setDisplayText(
            currentRole.substring(0, displayText.length - 1)
          );

          if (displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 60 : 110
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  /* Scroll Reveal + Active Navbar */
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

    const sections = document.querySelectorAll("section");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* Animated Background */}
      <div className="background">
        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4"></span>
        <span className="particle particle-5"></span>
        <span className="particle particle-6"></span>
        <span className="particle particle-7"></span>
        <span className="particle particle-8"></span>
      </div>

      {/* Navbar */}
      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Aman<span>Gurjar</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>

          <a
            href="#home"
            className={
              activeSection === "home" ? "active-link" : ""
            }
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#about"
            className={
              activeSection === "about" ? "active-link" : ""
            }
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#skills"
            className={
              activeSection === "skills" ? "active-link" : ""
            }
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#projects"
            className={
              activeSection === "projects"
                ? "active-link"
                : ""
            }
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#contact"
            className={
              activeSection === "contact"
                ? "active-link"
                : ""
            }
            onClick={closeMenu}
          >
            Contact
          </a>

        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        {/* DevOps Infinity Pipeline */}
        {/* DevOps Pipeline */}
<div className="devops-pipeline">

  <div className="pipeline-track">

    <div className="pipeline-line"></div>

    <div className="pipeline-step">
      <div className="pipeline-circle"></div>
      <span>CODE</span>
    </div>

    <div className="pipeline-step">
      <div className="pipeline-circle"></div>
      <span>BUILD</span>
    </div>

    <div className="pipeline-step">
      <div className="pipeline-circle"></div>
      <span>TEST</span>
    </div>

    <div className="pipeline-step">
      <div className="pipeline-circle"></div>
      <span>DEPLOY</span>
    </div>

    <div className="pipeline-step">
      <div className="pipeline-circle"></div>
      <span>MAINTENANCE</span>
    </div>

  </div>

</div>
        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Aman <span>Gurjar</span>
          </h1>

          <h2 className="typing">
            {displayText}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">
            I build, automate, deploy and monitor modern cloud
            infrastructure and applications using DevOps tools
            and technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn secondary"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://github.com/aman313382"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aman-dode"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* Terminal */}
        <div className="hero-card">

          <div className="terminal">

            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">

              <p>
                <span className="green">$</span> whoami
              </p>

              <p className="output">
                aman-gurjar
              </p>

              <p>
                <span className="green">$</span> role
              </p>

              <p className="output">
                {displayText || "DevOps Engineer"}
              </p>

              <p>
                <span className="green">$</span> cloud
              </p>

              <p className="output">
                AWS • Azure • GCP
              </p>

              <p>
                <span className="green">$</span> tools
              </p>

              <p className="output">
                Docker • Kubernetes • Jenkins
              </p>

              <p>
                <span className="green">$</span> automation
              </p>

              <p className="output">
                CI/CD • Terraform • Monitoring
              </p>

              <p>
                <span className="green">$</span> status
              </p>

              <p className="success">
                ● Available for opportunities
              </p>

            </div>
          </div>
        </div>

      </section>

      {/* About */}
      {/* About */}
<section
  id="about"
  className="section about-section reveal"
>

  <div className="section-title">
    <p>GET TO KNOW ME</p>
    <h2>About Me</h2>
  </div>

  <div className="about-content">

    {/* About Text */}
    <div className="about-text">

      <div className="about-label">
        <span></span>
        WHO I AM
      </div>

      <h3>
        Building reliable systems through
        <span> Cloud & DevOps</span>
      </h3>

      <p>
        I am a Computer Science Engineering graduate with
        hands-on experience in Cloud and DevOps technologies.
        I enjoy working with infrastructure, automation and
        modern deployment practices.
      </p>

      <p>
        My experience includes working with AWS, Linux,
        Terraform, Docker, Kubernetes, Jenkins and monitoring
        tools. I focus on creating reliable environments,
        automating repetitive tasks and improving deployment
        workflows.
      </p>

      <p>
        I am continuously improving my technical skills and
        looking for opportunities where I can contribute to
        real-world Cloud and DevOps projects.
      </p>

      <div className="about-highlights">

        <div className="about-highlight">
          <span>✓</span>
          <div>
            <strong>Cloud & Infrastructure</strong>
            <small>AWS · Terraform · Linux</small>
          </div>
        </div>

        <div className="about-highlight">
          <span>✓</span>
          <div>
            <strong>Automation & CI/CD</strong>
            <small>Jenkins · Git · Docker</small>
          </div>
        </div>

        <div className="about-highlight">
          <span>✓</span>
          <div>
            <strong>Container Orchestration</strong>
            <small>Kubernetes · Helm · Istio</small>
          </div>
        </div>

        <div className="about-highlight">
          <span>✓</span>
          <div>
            <strong>Monitoring & Quality</strong>
            <small>Datadog · Prometheus · SonarQube</small>
          </div>
        </div>

      </div>

    </div>


    {/* About Stats */}
    <div className="about-stats">

      <div className="stat-card">

        <div className="stat-icon">
          ◈
        </div>

        <h3>
          9<span>+</span>
        </h3>

        <p>
          Months Experience
        </p>

        <div className="stat-line"></div>

      </div>


      <div className="stat-card">

        <div className="stat-icon">
          ⚙
        </div>

        <h3>
          15<span>+</span>
        </h3>

        <p>
          Technologies
        </p>

        <div className="stat-line"></div>

      </div>


      <div className="stat-card">

        <div className="stat-icon">
          ◇
        </div>

        <h3>
          5<span>+</span>
        </h3>

        <p>
          Projects
        </p>

        <div className="stat-line"></div>

      </div>


      <div className="stat-card">

        <div className="stat-icon">
          ∞
        </div>

        <h3>
          100<span>%</span>
        </h3>

        <p>
          Learning Mindset
        </p>

        <div className="stat-line"></div>

      </div>

    </div>

  </div>

</section>

      {/* Skills */}
       {/* Skills */}
<section
  id="skills"
  className="section skills-section reveal"
>

  <div className="section-title">
    <p>WHAT I WORK WITH</p>
    <h2>Technical Skills</h2>
  </div>

  <div className="skills-grid">

    {/* Cloud */}
    <div className="skill-card">

      <div className="skill-card-top">
        <div className="skill-icon">
          ☁
        </div>

        <span className="skill-number">
          01
        </span>
      </div>

      <h3>Cloud</h3>

      <p>
        AWS · Azure · GCP
      </p>
     {/*
      <div className="skill-bar">
        <span style={{ width: "90%" }}></span>
      </div>

      <div className="skill-percent">
        90%
      </div>
      */}
    </div>


    {/* DevOps */}
    <div className="skill-card">

      <div className="skill-card-top">
        <div className="skill-icon">
          ⚙
        </div>

        <span className="skill-number">
          02
        </span>
      </div>

      <h3>DevOps</h3>

      <p>
        Jenkins · Git · CI/CD
      </p>
      {/*
      <div className="skill-bar">
        <span style={{ width: "88%" }}></span>
      </div>

      <div className="skill-percent">
        88%
      </div>
      */}
    </div>


    {/* Containers */}
    <div className="skill-card">

      <div className="skill-card-top">
        <div className="skill-icon">
          ▣
        </div>

        <span className="skill-number">
          03
        </span>
      </div>

      <h3>Containers</h3>

      <p>
        Docker · Docker Compose
      </p>
      {/*
      <div className="skill-bar">
        <span style={{ width: "92%" }}></span>
      </div>
      
      <div className="skill-percent">
        92%
      </div>
      */}
    </div>


    {/* Kubernetes */}
    <div className="skill-card">

      <div className="skill-card-top">
        <div className="skill-icon">
          ⎈
        </div>

        <span className="skill-number">
          04
        </span>
      </div>

      <h3>Kubernetes</h3>

      <p>
        K8s · EKS · Helm · Istio
      </p>
      {/*
      <div className="skill-bar">
        <span style={{ width: "85%" }}></span>
      </div>

      <div className="skill-percent">
        85%
      </div>
       */} 
    </div>


    {/* Infrastructure */}
    <div className="skill-card">

      <div className="skill-card-top">
        <div className="skill-icon">
          ⌘
        </div>

        <span className="skill-number">
          05
        </span>
      </div>

      <h3>Infrastructure</h3>

      <p>
        Terraform · Linux
      </p>
      {/*
      <div className="skill-bar">
        <span style={{ width: "88%" }}></span>
      </div>

      <div className="skill-percent">
        88%
      </div>
      */}
    </div>


    {/* Monitoring */}
    <div className="skill-card">

      <div className="skill-card-top">
        <div className="skill-icon">
          ◉
        </div>

        <span className="skill-number">
          06
        </span>
      </div>

      <h3>Monitoring</h3>

      <p>
        Datadog · Prometheus · Grafana
      </p>
      {/*
      <div className="skill-bar">
        <span style={{ width: "80%" }}></span>
      </div>

      <div className="skill-percent">
        80%
      </div>
      */}
    </div>


    {/* Scripting */}
    <div className="skill-card">

      <div className="skill-card-top">
        <div className="skill-icon">
          &lt;/&gt;
        </div>

        <span className="skill-number">
          07
        </span>
      </div>

      <h3>Scripting</h3>

      <p>
        Python · Shell Scripting
      </p>
     {/*
      <div className="skill-bar">
        <span style={{ width: "78%" }}></span>
      </div>

      <div className="skill-percent">
        78%
      </div>
      */}
    </div>


    {/* Code Quality */}
    <div className="skill-card">

      <div className="skill-card-top">
        <div className="skill-icon">
          ✓
        </div>

        <span className="skill-number">
          08
        </span>
      </div>

      <h3>Code Quality</h3>

      <p>
        SonarQube
      </p>
      {/*}
      <div className="skill-bar">
        <span style={{ width: "75%" }}></span>
      </div>

      <div className="skill-percent">
        75%
      </div>
     */}
    </div>

  </div>

</section>

    {/* Experience */}
<section
  id="experience"
  className="section experience-section reveal"
>

  <div className="section-title">
    <p>MY JOURNEY</p>
    <h2>Experience</h2>
  </div>

  <div className="experience-container">

    <div className="experience-line"></div>

    <div className="experience-card">

      <div className="experience-dot"></div>

      <div className="experience-header">

        <div>
          <p className="experience-date">
            06/2025 – Present
          </p>

          <h3>
            DevOps Engineer
          </h3>

          <h4>
            Hisan Labs Private Limited
          </h4>

          <p className="experience-location">
            Pune, India
          </p>
        </div>

        <div className="experience-badge">
          DevOps
        </div>

      </div>

      <div className="experience-content">

        <p>
          Worked on Cloud and DevOps technologies with a focus
          on infrastructure automation, application deployment
          and continuous integration and delivery.
        </p>

        <div className="experience-points">

          <div>
            <span>▹</span>
            Worked with Linux environments and cloud infrastructure
            for application and system management.
          </div>

          <div>
            <span>▹</span>
            Worked with AWS services and Infrastructure as Code
            using Terraform.
          </div>

          <div>
            <span>▹</span>
            Worked on CI/CD pipelines using Jenkins and GitHub
            for automated build and deployment workflows.
          </div>

          <div>
            <span>▹</span>
            Worked with Docker and Docker Compose for
            containerizing applications.
          </div>

          <div>
            <span>▹</span>
            Worked with Kubernetes for deploying and managing
            containerized workloads.
          </div>

          <div>
            <span>▹</span>
            Worked with monitoring and code-quality tools such
            as Datadog and SonarQube.
          </div>

        </div>

      </div>

      <div className="experience-tech">

        <span>AWS</span>
        <span>Linux</span>
        <span>Terraform</span>
        <span>Docker</span>
        <span>Kubernetes</span>
        <span>Jenkins</span>
        <span>Git</span>
        <span>SonarQube</span>

      </div>

    </div>

  </div>

</section>


      {/* Projects */}
      <section
        id="projects"
        className="section reveal"
      >

        <div className="section-title">
          <p>MY RECENT WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {/* Project 01 */}
          <div className="project-card">

            <div className="project-top">

              <div className="project-number">
                01
              </div>

              <div className="project-icon">
                ⚙
              </div>

            </div>

            <h3>
              CI/CD Pipeline with Jenkins
            </h3>

            <p>
              Built an automated CI/CD pipeline to build
              applications, create Docker images and deploy
              them using Jenkins and GitHub webhook integration.
            </p>

            <div className="tags">
              <span>Jenkins</span>
              <span>Docker</span>
              <span>GitHub</span>
              <span>Linux</span>
            </div>
            {/*
            <div className="project-buttons">

              <a
                href="https://github.com/aman313382"
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                className="project-btn demo-btn"
                onClick={(e) => e.preventDefault()}
              >
                Live Demo ↗
              </a>
            
            </div>
            */}
          </div>

          {/* Project 02 */}
          <div className="project-card">

            <div className="project-top">

              <div className="project-number">
                02
              </div>

              <div className="project-icon">
                ⎈
              </div>

            </div>

            <h3>
              Kubernetes Application Deployment
            </h3>

            <p>
              Deployed containerized applications on Kubernetes
              with Deployments, Services, scaling and monitoring.
              Worked with Kubernetes-based application environments.
            </p>

            <div className="tags">
              <span>Kubernetes</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Helm</span>
            </div>
             {/*
            <div className="project-buttons">

              <a
                href="https://github.com/aman313382"
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                className="project-btn demo-btn"
                onClick={(e) => e.preventDefault()}
              >
                Live Demo ↗
              </a>

            </div>
            */} 
          </div>

          {/* Project 03 */}
          <div className="project-card">

            <div className="project-top">

              <div className="project-number">
                03
              </div>

              <div className="project-icon">
                ☁
              </div>

            </div>

            <h3>
              AWS Infrastructure with Terraform
            </h3>

            <p>
              Provisioned and managed AWS cloud infrastructure
              using Terraform. Practiced Infrastructure as Code
              for creating and managing cloud resources.
            </p>

            <div className="tags">
              <span>Terraform</span>
              <span>AWS</span>
              <span>EC2</span>
              <span>IAM</span>
            </div>
             {/*
            <div className="project-buttons">

              <a
                href="https://github.com/aman313382"
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                className="project-btn demo-btn"
                onClick={(e) => e.preventDefault()}
              >
                Live Demo ↗
              </a>

            </div>
             */}
          </div>

        </div>

      </section>

      {/* Contact */}
        {/* Contact */}
<section
  id="contact"
  className="section contact-section reveal"
>

  <div className="section-title">
    <p>LET'S CONNECT</p>
    <h2>Contact Me</h2>
  </div>

  <div className="contact-wrapper">

    <div className="contact-intro">

      <div className="contact-label">
        <span></span>
        GET IN TOUCH
      </div>

      <h3>
        Let's build something
        <span> great together.</span>
      </h3>

      <p>
        I'm open to DevOps, Cloud and infrastructure
        opportunities. If you have an opportunity, project
        or simply want to connect, feel free to reach out.
      </p>

      <div className="contact-status">
        <span className="status-dot"></span>
        Available for opportunities
      </div>

    </div>


    <div className="contact-links">

      {/* Email */}
      <a
        href="mailto:amandode@outlook.com"
        className="contact-card"
      >

        <div className="contact-icon">
          @
        </div>

        <div className="contact-card-content">
          <span>Email</span>
          <strong>
            amandode@outlook.com
          </strong>
        </div>

        <div className="contact-arrow">
          ↗
        </div>

      </a>


      {/* GitHub */}
      <a
        href="https://github.com/aman313382"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >

        <div className="contact-icon">
          &lt;/&gt;
        </div>

        <div className="contact-card-content">
          <span>GitHub</span>
          <strong>
            github.com/aman313382
          </strong>
        </div>

        <div className="contact-arrow">
          ↗
        </div>

      </a>


      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/aman-dode"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >

        <div className="contact-icon">
          in
        </div>

        <div className="contact-card-content">
          <span>LinkedIn</span>
          <strong>
            linkedin.com/in/aman-dode
          </strong>
        </div>

        <div className="contact-arrow">
          ↗
        </div>

      </a>

    </div>

  </div>

</section>

      {/* Footer */}
      {/* Footer */}
<footer className="footer">

  <div className="footer-content">

    <div className="footer-brand">
      <a href="#home" className="footer-logo">
        Aman<span>Gurjar</span>
      </a>

      <p>
        Cloud & DevOps Engineer
      </p>
    </div>


    <div className="footer-socials">

      <a
        href="https://github.com/aman313382"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/aman-dode"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a href="mailto:amandode@outlook.com">
        Email
      </a>

    </div>


    <a
      href="#home"
      className="back-top"
      aria-label="Back to top"
    >
      ↑
    </a>

  </div>


  <div className="footer-bottom">

    <p>
      © 2026 Aman Gurjar. All rights reserved.
    </p>

    <p>
    
    </p>

  </div>

</footer>
    </div>
  );
}

export default App;