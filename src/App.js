/* File: src/App.jsx */
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { createNoise3D } from "simplex-noise";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFastapi,
  SiNodedotjs,
  SiFlask,
  SiPytorch,
  SiTensorflow,
  SiReact,
  SiBabylondotjs,
  SiThreedotjs,
  SiDocker,
  // FaMicrosoft,
  SiGit,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHuggingface
} from "react-icons/si";


import * as BABYLON from "@babylonjs/core";
import "@babylonjs/materials";



const SKILL_ICONS = {
  Python: <SiPython color="#3776AB" />,
  JavaScript: <SiJavascript color="#F7DF1E" />,
  TypeScript: <SiTypescript color="#3178C6" />,
  "C++": <SiCplusplus color="#00599C" />,
  // SQL: <span className="sql-icon">SQL</span>,

  FastAPI: <SiFastapi color="#009688" />,
  "Node.js": <SiNodedotjs color="#339933" />,
  Flask: <SiFlask color="#ffffff" />,
  PostgreSQL: <SiPostgresql color="#4169E1" />,
  MySQL: <SiMysql color="#4479A1" />,
  MongoDB: <SiMongodb color="#47A248" />,
  Redis: <SiRedis color="#DC382D" />,

  Pandas: <SiPandas color="#150458" />,
  Numpy: <SiNumpy color="#013243" />,
  "Exploratory Data Analysis (EDA)": "🔍",
  Transformers: <SiHuggingface color="#F7900C" />,
  PyTorch: <SiPytorch color="#EE4C2C" />,
  TensorFlow: <SiTensorflow color="#FF6F00" />,
  "scikit-learn": <SiScikitlearn color="#F7931E" />,
  "LLM Integration": "🧠",
  "RAG Systems": "📚",
  "Vector Databases": "🧩",

  React: <SiReact color="#61DAFB" />,
  "Babylon.js": <SiBabylondotjs color="#BB464B" />,
  "Three.js": <SiThreedotjs color="#ffffff" />,
  "Data Visualization": "📊",
  "Tailwind CSS": "🌊",

  Docker: <SiDocker color="#2496ED" />,
  // Azure: <FaMicrosoft color="#0078D4" />,
  Git: <SiGit color="#F05032" />,
};


const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: (
      <span className="skills-ico" aria-hidden="true">
        {"</>"}
      </span>
    ),
    items: ["Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Backend",
    icon: (
      <span className="skills-ico" aria-hidden="true">
        {"⛁"}
      </span>
    ),
    items: ["FastAPI", "Node.js", "Flask", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "AI & Data",
    icon: (
      <span className="skills-ico" aria-hidden="true">
        {"✦"}
      </span>
    ),
    items: ["Pandas","Numpy","PyTorch","Exploratory Data Analysis (EDA)", "TensorFlow", "scikit-learn","Transformers", "LLM Integration","NLP Pipelines", "RAG Systems", "Vector Databases"],
  },
  {
    title: "Frontend & 3D",
    icon: (
      <span className="skills-ico" aria-hidden="true">
        {"▣"}
      </span>
    ),
    items: ["React", "Babylon.js", "Three.js", "Data Visualization", "Tailwind CSS"],
  },
  {
    title: "DevOps",
    icon: (
      <span className="skills-ico" aria-hidden="true">
        {"⚙"}
      </span>
    ),
    items: ["Docker", "Azure", "Git", "CI/CD Pipelines"],
  },
];



const PROFILE = {
  name: "Simantini Upendra Rembhotkar",
  headline: "Software Engineer • AI + Full-Stack • React / FastAPI / 3D Web",
  // location: "College Station, TX",
  summary:
    "I build production-grade platforms that blend secure AI systems, vector search, and polished UI—plus 3D interfaces when data deserves a spatial story.",
  links: {
    email: "simantinir07@tamu.edu",
    phone: "+1 (979) 344-0748",
    github: "https://github.com/simantini07",
    linkedin: "https://linkedin.com/in/simantini-rembhotkar-299601239",
    resume: "/resume.pdf",
  },
  experience: [
    {
      title: "Software Engineer",
      org: "Equations Work",
      location: "Pune, India",
      from: "September 2023",
      to: "June 2025",
      bullets: [
        "Responsible for building and maintaining full-stack applications and backend services using modern web frameworks and cloud platforms.",
        "Contributed to AI-driven systems, secure API design, and performance optimization in production environments.",
        
      ],
      stack: [
  "Python",
  "FastAPI",
  "Flask",
  "Node.js",
  "React",
  "Docker",
  "Azure APIM",
  "LLM Integration",
  "RAG",
  "PostgreSQL",
  "pgvector",
  "Babylon.js",
  "3D / AR Visualization"
]
,
    },
//     {
//       title: "Software Project Intern",
//       org: "Equations Work",
//       location: "Pune, India",
//       from: "Sep 2023",
//       to: "May 2024",
//       bullets: [
//         "Built a web image-annotation platform for user-uploaded datasets with automated labeling.",
//         "Integrated SAM + Grounding DINO and YOLOv8 for auto-labeling, improving labeling accuracy by 40%.",
//       ],
//       stack: [
//   "Python",
//   "React",
//   "Computer Vision",
//   "Deep Learning",
//   "PyTorch",
//   "YOLOv8",
//   "Segment Anything (SAM)",
//   "Grounding DINO",
//   "Model Inference Pipelines",
//   "Auto-Labeling Systems",
//   "Dataset Curation",
//   "Annotation Tooling"
// ]
// ,
//     },
    {
      title: "Software Engineer Intern",
      org: "Steinn Labs",
      location: "Pune, India",
      from: "February 2023",
      to: "May 2023",
      bullets: [
        "Responsible for developing and maintaining full-stack web applications with a focus on responsive user interfaces and reliable backend services.",
        "Worked on secure authentication, RESTful API development, and relational data management.",
      ],
      stack: ["React", "FastAPI", "PostgreSQL", "REST", "Auth"],
    },
  ],
  projects: [
    {
  name: "InquiroAI",
  tagline: "Retrieval-augmented study assistant → flashcards + contextual Q&A",
  description:
    "Built an end-to-end RAG system for unstructured documents, enabling low-latency contextual Q&A and automatic flashcard generation.",
  stack: [
    // Core Backend
    "React",
    "FastAPI",
    "Python",
    "REST APIs",

    // Retrieval & AI
    "RAG",
    "Vector Databases",
    "LLMs",

    // Data & Storage
    "PostgreSQL",
    "pgvector",

    // Frontend
    "React",

    // Systems & Infra (signal production readiness)
    "Docker",

    // AI Platform
    "Gemini API"
  ],  bullets: [
    "Designed an ingestion and embedding pipeline for semantic retrieval over large study corpora.",
    "Implemented retrieval-grounded Q&A and flashcard generation to improve answer relevance.",
    "Optimized backend APIs for responsive, low-latency user workflows.",
  ],
},
{
  
  name: "Automated Dataset Labeling Platform",
  tagline: "Zero-shot segmentation + object detection for dataset annotation",
  description:
    "Engineered an end-to-end computer vision platform that automates dataset labeling using state-of-the-art segmentation and detection models, enabling production-ready annotations across diverse image domains.",
  bullets: [
    "Integrated Segment Anything Model (SAM), Grounding DINO, and YOLOv8 to support zero-shot segmentation and object detection.",
    "Applied transfer learning and few-shot learning techniques to adapt models across varied data distributions.",
    "Built a full-stack workflow with Flask REST APIs and a React-based interface for uploading datasets and managing automated labeling pipelines."
  ],
  stack: [
    "Python",
    "Segment Anything (SAM)",
    "Grounding DINO",
    "YOLOv8",
    "OpenCV",
    "Flask",
    "React"
  ]



},
{
  name: "Secure Code Interpreter Platform",
  tagline: "Isolated Python execution with enterprise-grade AI orchestration",
  description:
    "Built a secure, multi-tenant code interpreter platform enabling sandboxed Python execution through LLM-powered assistants for data analysis and automation workflows.",
  bullets: [
    "Designed isolated sandbox environments to safely execute user-submitted Python code at scale.",
    "Architected a microservices-based system supporting multiple specialized AI assistants for analysis and automation tasks.",
    "Integrated OpenAI APIs via Azure API Management with authentication, rate limiting, and security controls for enterprise use."
  ],
  stack: [
    "Python",
    "OpenAI API",
    "Azure API Management",
    "Flask",
    "React",
    "Docker",
    "Sandbox Security"
  ]
},


    {
      name: "Facial Recognition + Criminal Identification",
      tagline: "Real-time detection + deep metric learning",
      description:
        "Built a real-time facial recognition system that performs live face detection, deep feature encoding, and similarity-based identity matching to trigger alerts on known offenders.",
      stack: ["Python",  "OpenCV", "Deep Metric Learning", "Cosine Similarity", "Real-Time Inference"],
      bullets: ["Implemented a low-latency webcam pipeline using OpenCV and deep metric learning, achieving sub-second (<500 ms) end-to-end inference per frame.",
         "Matched live face embeddings against a curated criminal image dataset using cosine similarity, enabling robust real-time identification.",
          "Designed an event-driven alerting flow that triggers instantly on positive identity matches."],
    },
    {
  name: "AI Code Review Assistant (Cloudflare)",
  tagline: "Edge-deployed code review → bugs, security, performance",
  description:
    "Built an AI-powered code review assistant on Cloudflare Workers AI (Llama 3.3 70B) with real-time streaming analysis, session memory, and semantic code search.",
  stack: [
    "Cloudflare Workers",
    "Workers AI (Llama 3.3 70B)",
    "Durable Objects",
    "Vectorize",
    "React",
    "TypeScript",
    "Vite",
    "Webhooks (GitHub)"
  ],
  bullets: [
    "Designed a multi-step review pipeline (bugs, security, performance, style) with streamed UI updates as analysis progresses.",
    "Implemented session persistence using Durable Objects and vector-based similarity search using Vectorize with 384-dim embeddings.",
    "Enabled optional GitHub PR automation via webhook integration for automated review workflows."
  ],
}

  ],
  education: [
    {
      school: "Texas A&M University, College Station",
      degree: "Master’s in Computer Science",
      location: "Texas, USA",
      from: "Aug 2025",
      to: "Aug 2027",
      note: "GPA: 3.67 / 4",
      
    },
    {
      school: "Marathwada Mitra Mandals College of Engineering",
      degree: "Bachelor of Computer Engineering",
      location: "Pune, India",
      from: "Jun 2020",
      to: "Jun 2024",
      note: "GPA: 3.87 / 4",
    },
  ],
};

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function useActiveSection(ids) {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (best?.target?.id) setActive(best.target.id);
      },
      { threshold: [0.2, 0.35, 0.5] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}

async function copyText(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.26.79-.57v-2.1c-3.2.71-3.87-1.4-3.87-1.4-.53-1.38-1.3-1.75-1.3-1.75-1.06-.75.08-.74.08-.74 1.17.08 1.78 1.22 1.78 1.22 1.04 1.83 2.73 1.3 3.39 1 .11-.78.41-1.3.74-1.6-2.55-.3-5.23-1.32-5.23-5.86 0-1.3.45-2.36 1.2-3.19-.12-.3-.52-1.5.11-3.13 0 0 .97-.32 3.18 1.22a10.7 10.7 0 0 1 2.9-.4c.98 0 1.97.14 2.9.4 2.2-1.54 3.18-1.22 3.18-1.22.63 1.63.23 2.83.11 3.13.75.83 1.2 1.9 1.2 3.19 0 4.55-2.69 5.56-5.25 5.85.42.37.79 1.1.79 2.22v3.29c0 .31.21.68.8.57A11.27 11.27 0 0 0 23.25 12C23.25 5.62 18.27.5 12 .5Z"
      />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.83v2.12h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.66 4.77 6.12v9.34h-4v-8.28c0-1.98-.03-4.53-2.76-4.53-2.76 0-3.18 2.16-3.18 4.39v8.42h-4V7.98Z"
      />
    </svg>
  );
}

function MailIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a className="rail-ico" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

function TypingTitle({ lines, speed = 42, pause = 900 }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = lines[idx % lines.length];
    const tick = () => {
      if (!del) {
        const next = full.slice(0, sub.length + 1);
        setSub(next);
        if (next === full) {
          window.setTimeout(() => setDel(true), pause);
        }
      } else {
        const next = full.slice(0, Math.max(0, sub.length - 1));
        setSub(next);
        if (next.length === 0) {
          setDel(false);
          setIdx((v) => v + 1);
        }
      }
    };

    const id = window.setTimeout(tick, del ? speed * 0.65 : speed);
    return () => window.clearTimeout(id);
  }, [sub, del, idx, lines, speed, pause]);

  return (
    <div className="type-wrap" aria-label="Animated title">
      <span className="type-static">I build</span>{" "}
      <span className="type-dyn">
        {sub}
        <span className="caret" aria-hidden="true" />
      </span>
    </div>
  );
}

function SwirlHeroBackdrop() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvasB = canvasRef.current;
    if (!canvasB) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    // Offscreen canvas (like canvas.a in the Tympanus code)
    const canvasA = document.createElement("canvas");
    const ctxA = canvasA.getContext("2d");
    const ctxB = canvasB.getContext("2d");

    // ==== Theme-tuned params (visible on dark background) ====
    const particleCount = 820;          // ↑ a bit higher so it reads
    const particlePropCount = 9;
    const propsLen = particleCount * particlePropCount;

    const rangeY = 120;
    const baseTTL = 60;
    const rangeTTL = 210;

    const baseSpeed = 0.20;
    const rangeSpeed = 2.80;

    const baseRadius = 0.9;
    const rangeRadius = 2.8;

    // Teal theme: hue ~ 165–190
    const baseHue = 165;
    const rangeHue = 28;

    const noiseSteps = 10;
    const xOff = 0.00125;
    const yOff = 0.00125;
    const zOff = 0.00055;

    // Background matches your --bg (but we paint it here for trails)
    const background = "rgba(7,10,13,1)";

    const TAU = Math.PI * 2;

    // Utils
    const rand = (n) => Math.random() * n;
    const randRange = (n) => (Math.random() - 0.5) * n;
    const lerp = (a, b, t) => a + (b - a) * t;

    const fadeInOut = (life, ttl) => {
      const half = ttl * 0.5;
      const t = life < half ? life / half : (ttl - life) / half;
      return Math.max(0, Math.min(1, t));
    };

    let tick = 0;
    let centerX = 0;
    let centerY = 0;

    const noise3D = createNoise3D();
    const particleProps = new Float32Array(propsLen);

    const initParticle = (i) => {
      const x = rand(canvasA.width);
      const y = centerY + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);

      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };

    const checkBounds = (x, y) =>
      x < 0 || x > canvasA.width || y < 0 || y > canvasA.height;

    const drawParticle = (x, y, x2, y2, life, ttl, radius, hue) => {
      const a = fadeInOut(life, ttl);

      ctxA.save();
      ctxA.lineCap = "round";
      ctxA.lineWidth = radius;

      // IMPORTANT: increase alpha so it’s visible; glow will soften it
      // (If still subtle, bump 0.22 → 0.30)
      ctxA.strokeStyle = `hsla(${hue}, 95%, 62%, ${a * 0.22})`;

      ctxA.beginPath();
      ctxA.moveTo(x, y);
      ctxA.lineTo(x2, y2);
      ctxA.stroke();
      ctxA.restore();
    };

    const updateParticle = (i) => {
      const i2 = i + 1, i3 = i + 2, i4 = i + 3, i5 = i + 4, i6 = i + 5, i7 = i + 6, i8 = i + 7, i9 = i + 8;

      const x = particleProps[i];
      const y = particleProps[i2];

      // Noise direction field
      const n =
        noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;

      const vx = lerp(particleProps[i3], Math.cos(n), 0.5);
      const vy = lerp(particleProps[i4], Math.sin(n), 0.5);

      let life = particleProps[i5];
      const ttl = particleProps[i6];
      const speed = particleProps[i7];

      const x2 = x + vx * speed;
      const y2 = y + vy * speed;

      const radius = particleProps[i8];
      const hue = particleProps[i9];

      drawParticle(x, y, x2, y2, life, ttl, radius, hue);

      life++;

      particleProps[i] = x2;
      particleProps[i2] = y2;
      particleProps[i3] = vx;
      particleProps[i4] = vy;
      particleProps[i5] = life;

      if (checkBounds(x2, y2) || life > ttl) initParticle(i);
    };

    const renderGlow = () => {
      // glow pass 1
      ctxB.save();
      ctxB.filter = "blur(10px) brightness(220%)";
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();

      // glow pass 2
      ctxB.save();
      ctxB.filter = "blur(4px) brightness(220%)";
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    };

    const renderToScreen = () => {
      ctxB.save();
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    };
let lastW = 0;
let lastH = 0;
let roRaf = 0;

const resize = () => {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const rect = canvasB.getBoundingClientRect();

  const w = Math.max(1, Math.floor(rect.width));
  const h = Math.max(1, Math.floor(rect.height));

  // Prevent thrashing / loops: only resize if size actually changed
  if (w === lastW && h === lastH) return;
  lastW = w;
  lastH = h;

  // Backing store (DPR)
  canvasB.width = Math.floor(w * dpr);
  canvasB.height = Math.floor(h * dpr);

  // IMPORTANT: do NOT set canvasB.style.width/height here
  // Let CSS control layout. We only scale the backing store.

  // Draw in CSS pixel coords
  ctxB.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Offscreen canvas in CSS pixels
  canvasA.width = w;
  canvasA.height = h;

  centerX = 0.5 * w;
  centerY = 0.5 * h;

  tick = 0;
  for (let i = 0; i < propsLen; i += particlePropCount) initParticle(i);

  ctxB.fillStyle = background;
  ctxB.fillRect(0, 0, w, h);
};



    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);
      if (reduce) return;

      tick++;

      // clear A
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height);

      // IMPORTANT: don’t fully overwrite B with a hard fill each frame,
      // but we DO re-fill to match the Tympanus approach (keeps it crisp).
      // If you want longer trails, change alpha to 0.92 and use fillRect with alpha.
      ctxB.fillStyle = background;
      ctxB.fillRect(0, 0, canvasA.width, canvasA.height);

      // particles
      for (let i = 0; i < propsLen; i += particlePropCount) updateParticle(i);

      renderGlow();
      renderToScreen();
    };

  resize();
window.addEventListener("resize", resize);
const ro = new ResizeObserver(() => {
  cancelAnimationFrame(roRaf);
  roRaf = requestAnimationFrame(resize);
});
ro.observe(canvasB);


    rafRef.current = requestAnimationFrame(draw);
return () => {
  cancelAnimationFrame(rafRef.current);
  cancelAnimationFrame(roRaf);
  window.removeEventListener("resize", resize);
  ro.disconnect();
};
  }, []);

  return (
    <div className="hero-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-canvas hero-canvas-swirl" />
      <div className="hero-vignette" />
      <div className="hero-noise" />
      <div className="hero-scan" />
    </div>
  );
}




function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <div className="section-head">
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>

        {children}
      </div>
    </section>
  );
}


function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function SkillRadar({ skills }) {
  // distribute skills across 3 rings
  const rings = [0.34, 0.58, 0.82];
  const placed = skills.map((label, i) => {
    const ring = rings[i % rings.length];
    const angle = (i / skills.length) * Math.PI * 2; // 0..TAU
    // small deterministic jitter so it doesn't look perfectly uniform
    const jitter = (((i * 97) % 13) - 6) * 0.006;
    return { label, ring, angle: angle + jitter };
  });

  return (
    <div className="radar-wrap" aria-label="Skills radar">
      <div className="radar">
        <div className="radar-grid" aria-hidden="true" />
        <div className="radar-sweep" aria-hidden="true" />

        {placed.map((p) => {
          // convert polar -> percent positions
          const x = 50 + Math.cos(p.angle) * (p.ring * 46); // 46% max radius
          const y = 50 + Math.sin(p.angle) * (p.ring * 46);
          return (
            <button
              key={p.label}
              className="radar-blip"
              style={{ left: `${x}%`, top: `${y}%` }}
              type="button"
            >
              <span className="blip-dot" aria-hidden="true" />
              <span className="blip-label">{p.label}</span>
            </button>
          );
        })}
      </div>

      <div className="radar-legend">
        <div className="legend-title">Core stack + focus areas</div>
        <div className="legend-sub">
          Hover a node to highlight. The sweep will auto-scan.
        </div>
      </div>
    </div>
  );
}

function AlternatingTimeline({ items, kind = "experience" }) {
  return (
    <div className={`alt-timeline alt-timeline--${kind}`}>
      <div className="alt-spine" aria-hidden="true" />

      {items.map((it, idx) => {
        const side = idx % 2 === 0 ? "left" : "right";
        const key =
          kind === "education"
            ? it.school
            : `${it.title}-${it.org}-${it.from}`;

        return (
          <article key={key} className={`alt-item alt-${side}`}>
            <div className="alt-node" aria-hidden="true">
              <span className="alt-dot" />
            </div>

            <div className="alt-card">
              <div className="alt-meta">
                <span className="alt-date">
                  {it.from} — {it.to}
                </span>
              </div>

              {kind === "experience" ? (
                <>
                  <div className="alt-org">{it.org}</div>
                  <div className="alt-title">{it.title}</div>
                  {it.location && (
                    <div className="exp-location">{it.location}</div>
                  )}

                  {it.bullets?.length ? (
                    <ul className="alt-bullets">
                      {it.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}

                  {it.stack?.length ? (
                    <div className="alt-tags">
                      {it.stack.map((s) => (
                        <span className="tag" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  {/* School */}
                  <div className="alt-org">{it.school}</div>

                  {/* Degree */}
                  <div className="alt-title">{it.degree}</div>

                  {/* ✅ LOCATION (new, minimal addition) */}
                  {it.location && (
                    <div className="edu-location">{it.location}</div>
                  )}

                  {/* GPA */}
                  <div className="alt-edu-row">
                    {it.note ? <span className="chip">{it.note}</span> : null}
                  </div>
                </>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}



export default function App() {
  const active = useActiveSection(SECTIONS.map((s) => s.id));
  const [copied, setCopied] = useState(false);

  const contactLinks = useMemo(
    () => [
      { label: "Email", href: `mailto:${PROFILE.links.email}` },
      { label: "LinkedIn", href: PROFILE.links.linkedin },
      { label: "GitHub", href: PROFILE.links.github },
      { label: "Resume", href: PROFILE.links.resume },
    ],
    []
  );

  

  const onCopyEmail = async () => {
    const ok = await copyText(PROFILE.links.email);
    setCopied(ok);
    window.setTimeout(() => setCopied(false), 1100);
  };

  
  return (
    <div className="app">
      {/* Left rail like the Dribbble frame */}
      <aside className="rail">
        <div className="rail-top">
          <div className="mark" aria-hidden="true">S</div>
          <div className="rail-line" aria-hidden="true" />
          <nav className="rail-nav">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={`rail-link ${active === s.id ? "active" : ""}`}>
                <span className="rail-dot" aria-hidden="true" />
                <span className="rail-label">{s.label}</span>
              </a>
            ))}
          </nav>
        </div>


<div className="rail-bottom">
  <IconLink href={PROFILE.links.github} label="GitHub">
    <GithubIcon />
  </IconLink>

  <IconLink href={PROFILE.links.linkedin} label="LinkedIn">
    <LinkedinIcon />
  </IconLink>

  <IconLink href={`mailto:${PROFILE.links.email}`} label="Email">
    <MailIcon />
  </IconLink>
</div>

      </aside>

      {/* Main frame */}
      <main className="frame">
        {/* HERO: title + short description only */}
        <section id="home" className="hero">
          <SwirlHeroBackdrop />



          <div className="hero-topbar">
            {/* <div className="loc">
              <span className="loc-dot" aria-hidden="true" />
              {PROFILE.location}
            </div> */}

            {/* <a className="cta" href="#contact">
              Contact
            </a> */}
          </div>

          <div className="hero-inner hero-inner--sarvesh">
  {/* small kicker like “You found me!” */}
  <p className="hero-kicker">You found me!</p>

  {/* BIG name */}
  <h1 className="hero-name">{PROFILE.name}.</h1>

  {/* Animated line (same TypingTitle, just styled differently) */}
  <div className="hero-slogan">
    <TypingTitle
      lines={[
  "production AI platforms.",
  "retrieval-augmented systems.",
  "LLM-powered services.",
  "scalable backend systems.",
  "data products that ship.",
]}

    />
  </div>

  {/* Short intro paragraph */}
  <p className="hero-desc hero-desc--sarvesh">
  I am a <span className="hero-accent">Software Engineer</span> who builds and scales{" "}
  <span className="hero-accent">production-grade systems</span> at the intersection of{" "}
  <span className="hero-accent">AI</span>,{" "}
  <span className="hero-accent">data</span>, and{" "}
  <span className="hero-accent">distributed services</span>. I design{" "}
  <span className="hero-accent">LLM-powered pipelines</span>,{" "}
  <span className="hero-accent">retrieval-augmented systems</span> processing{" "}
  <span className="hero-accent">100K+ documents</span>, and backend platforms with strong{" "}
  <span className="hero-accent">observability</span>,{" "}
  <span className="hero-accent">reliability</span>, and{" "}
  <span className="hero-accent">performance guarantees</span>. My focus is on shipping{" "}
  <span className="hero-accent">robust, maintainable software</span> that operates reliably under{" "}
  <span className="hero-accent">real-world load</span> — from{" "}
  <span className="hero-accent">backend APIs</span> to immersive data experiences when visualization adds clarity.
</p>



  {/* Buttons row (keep yours) */}
  <div className="hero-actions">
    <a className="btn primary" href="#projects">
      View work
    </a>
    <a className="btn ghost" href={PROFILE.links.resume} target="_blank" rel="noreferrer">
      Resume
    </a>
    {/* <button className="btn ghost" onClick={onCopyEmail}>
      {copied ? "Email copied" : "Copy email"}
    </button> */}
  </div>

  {/* Pills row (keep yours) */}

</div>


          <div className="scroll-hint" aria-hidden="true">
            <span className="scroll-line" />
            <span className="scroll-text">Scroll</span>
          </div>
        </section>




        <div className="content">

          <Section id="skills" title="Core Skills">
  <div className="skills-list" aria-label="Skills">
    {SKILL_GROUPS.map((g) => (
      <div key={g.title} className="skills-group">
        <div className="skills-group-head">
          <span className="skills-group-ico" aria-hidden="true">
            {g.icon}
          </span>
          <h3 className="skills-group-title">{g.title}</h3>
        </div>

        <div className="skills-chips">
          {g.items.map((s) => (
            <span key={s} className="skill-chip">
              {SKILL_ICONS[s] ? (
                <span className="skill-chip-ico">{SKILL_ICONS[s]}</span>
              ) : null}
              <span className="skill-chip-text">{s}</span>
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</Section>


<Section
  id="experience"
  title="Experience"
>
  <AlternatingTimeline items={PROFILE.experience} kind="experience" />
</Section>


          <Section id="projects" title="Projects">
  <div className="projects-list">
    {PROFILE.projects.map((p, idx) => (
      <article key={p.name} className="project-row">
        <div className="project-head">
          <div>
            <h6 className="project-title">{p.name}</h6>
            <p className="project-tagline">{p.tagline}</p>
          </div>

          {/* Optional primary tech pill */}
          {/* {p.stack?.length ? (
            <span className="chip project-chip">
              
            </span>
          ) : null} */}
        </div>

        <p className="project-desc">{p.description}</p>

        {p.bullets?.length ? (
          <ul className="project-bullets">
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        ) : null}

        {p.stack?.length ? (
          <div className="project-tags">
            {p.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        ) : null}
      </article>
    ))}
  </div>
</Section>


<Section id="education" title="Education">
  <AlternatingTimeline items={PROFILE.education} kind="education" />
</Section>


<section id="contact" className="contact-centered">
  <div className="contact-inner">
    <p className="contact-kicker">Get in touch</p>

    <h2 className="contact-title">Let’s Connect</h2>

    <p className="contact-desc">
      I am currently seeking internship opportunities in software engineering, AI/ML, data science, and applied research. I am eager to learn, grow, and contribute to impactful, real-world systems.
    </p>

    <div className="contact-actions">
      <a
        href={`mailto:${PROFILE.links.email}`}
        className="btn primary"
      >
        Say Hello
      </a>

      <span className="contact-phone">
        {PROFILE.links.phone}
      </span>
    </div>

    <div className="contact-icons">
      <a
        href={PROFILE.links.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="contact-ico"
      >
        {/* GitHub icon */}
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            fill="currentColor"
            d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 1.9 2.8 1.3.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.6 5.5-5.1 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"
          />
        </svg>
      </a>

      <a
        href={PROFILE.links.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="contact-ico"
      >
        {/* LinkedIn icon */}
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            fill="currentColor"
            d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.97 2.98 2.97A2.98 2.98 0 0 0 7.96 6.48 2.98 2.98 0 0 0 4.98 3.5zM2.4 21h5.17V9H2.4v12zM9.34 9h4.95v1.64h.07c.69-1.23 2.38-2.53 4.9-2.53 5.24 0 6.21 3.45 6.21 7.94V21h-5.18v-6.23c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.3V21H9.34V9z"
          />
        </svg>
      </a>

      <a
        href={`mailto:${PROFILE.links.email}`}
        aria-label="Email"
        className="contact-ico"
      >
        {/* Mail icon */}
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            fill="currentColor"
            d="M2 4h20v16H2V4zm10 7 8-5H4l8 5zm0 2-8-5v10h16V8l-8 5z"
          />
        </svg>
      </a>
    </div>
  </div>
</section>



<footer className="footer footer-center">
  <span>© {new Date().getFullYear()} {PROFILE.name}</span>
  <span className="muted"></span>
</footer>

        </div>
      </main>
    </div>
  );
}
