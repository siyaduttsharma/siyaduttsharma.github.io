import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Cpu, 
  Globe, 
  Sparkles,
  ArrowRight,
  Terminal,
  Database,
  Layers,
  Palette
} from 'lucide-react';
import { useState, useEffect } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: "Startup Success Predictor",
    description: "Built a Flask web application using an XGBoost regression model to predict startup ROI. Architected robust AI/ML pipelines including data preprocessing and feature engineering.",
    tech: ["Python", "Flask", "XGBoost", "AI/ML"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "TimeScale Creator",
    description: "Rebuilt a Java-based visualization tool as a modern web application for Purdue University researchers. Increased accessibility for historical timeline data.",
    tech: ["React.js", "TypeScript", "Data Visualization"],
    link: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  }
];

const SKILLS = [
  { name: "languages", icon: <Globe className="w-5 h-5" />, items: ["Python", "C++", "JavaScript", "TypeScript", "Java", "HTML/CSS"] },
  { name: "frameworks", icon: <Terminal className="w-5 h-5" />, items: ["React.js", "Node.js", "Flask", "Oracle JET", "Vue.js", "webpack"] },
  { name: "devops & cloud", icon: <Database className="w-5 h-5" />, items: ["Docker", "Kubernetes", "Oracle Cloud", "CI/CD", "Jenkins"] },
  { name: "testing & data", icon: <Layers className="w-5 h-5" />, items: ["SQL", "MongoDB", "Elasticsearch", "Playwright", "JMeter", "Jest"] }
];

const SectionHeader = ({ title, subtitle, number }: { title: string, subtitle: string, number: string }) => (
  <div className="mb-16">
    <div className="flex items-center gap-4 mb-4">
      <span className="font-mono text-sm text-brand-accent">{number}</span>
      <div className="h-[1px] w-12 bg-brand-accent/30" />
      <span className="font-mono text-xs lowercase tracking-widest text-gray-500">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-primary lowercase">{title}</h2>
  </div>
);

const EXPERIENCE = [
  {
    company: "Oracle America, Inc",
    role: "Software Engineer",
    period: "Sept 2023 — Oct 2025",
    description: "Engineered a real-time microservices health monitoring platform for PCA. Built interactive dashboards with Oracle JET for 150+ enterprise clients and developed advanced log search systems."
  },
  {
    company: "High Moon Studios, Activision",
    role: "Network Intern",
    period: "May 2022 — Aug 2022",
    description: "Fortified a thread-safe telemetry pipeline handling 10M+ daily events for Call of Duty. Optimized C++ networking layer to reduce latency and improved in-game health indicators."
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-bottom border-gray-100' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-display font-bold text-xl tracking-tight lowercase"
          >
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white text-sm">s</div>
            <span>Siya Sharma.</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 font-mono text-xs lowercase tracking-widest">
            {['about', 'work', 'experience', 'skills'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-brand-accent transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:flex px-6 py-2 bg-brand-primary text-white font-mono text-xs lowercase tracking-widest rounded-full hover:bg-brand-accent transition-colors items-center gap-2">
              resume <ExternalLink className="w-3 h-3" />
            </a>
            <div className="flex gap-2">
              <a href="https://linkedin.com/in/siyaduttsharma" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-primary h-8 w-8 flex items-center justify-center"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:siyasharma.sds@gmail.com" className="text-gray-400 hover:text-brand-primary h-8 w-8 flex items-center justify-center"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="max-w-xl">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-relaxed tracking-tight text-brand-primary lowercase text-balance">
                    full-stack engineer specializing in scalable applications, automation, and high-impact enterprise solutions. 
                    <span className="text-brand-accent"> currently looking for new opportunities.</span>
                  </h1>
                  
                  <div className="flex gap-4 mt-8">
                    <a href="#work" className="px-6 py-3 bg-brand-primary text-white rounded-full flex items-center gap-2 group hover:bg-brand-accent transition-all text-xs font-mono lowercase">
                      view work <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="mt-4 md:mt-2">
                  <div className="font-mono text-[10px] md:text-xs grid grid-cols-2 gap-8 border-l border-gray-100 pl-8 md:pl-12 h-fit">
                    <div>
                      <span className="text-gray-400 lowercase block mb-1">location</span>
                      <span className="text-brand-primary font-medium">San Francisco Bay Area</span>
                    </div>
                    <div>
                      <span className="text-gray-400 lowercase block mb-1">education</span>
                      <span className="text-brand-primary font-medium">Purdue University</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] border border-gray-100 rounded-full opacity-50 pointer-events-none" />
        </section>

        {/* Featured Projects */}
        <section id="work" className="py-24 bg-brand-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              number="01"
              subtitle="selected projects"
              title="work"
            />

            <div className="grid gap-24">
              {PROJECTS.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="flex-1 w-full">
                    <div className="relative group overflow-hidden rounded-3xl aspect-[16/9] bg-gray-100 border border-gray-100">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] lowercase font-mono tracking-wider text-gray-500">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">{project.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              number="02"
              subtitle="the journey"
              title="experience"
            />
            
            <div className="grid gap-12">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group grid md:grid-cols-[1fr_2fr] gap-8 py-12 border-b border-gray-100 last:border-0 items-start"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-sm text-gray-400 lowercase">{exp.period}</span>
                    <h4 className="text-2xl font-display font-bold group-hover:text-brand-accent transition-colors">{exp.company}</h4>
                    <p className="text-brand-primary/60 font-mono text-xs lowercase tracking-widest">{exp.role}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-brand-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              number="03"
              subtitle="the toolkit"
              title="skills"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-brand-accent/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-muted flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-display font-bold mb-4 lowercase">{skill.name}</h4>
                  <ul className="space-y-2">
                    {skill.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-gray-500 text-sm font-mono lowercase">
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display font-bold tracking-tight text-lg lowercase">
            Siya Sharma.
          </div>
          <div className="text-gray-400 font-mono text-[10px] lowercase tracking-widest text-center">
            Siya Sharma © 2026 • Local Time: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </footer>
    </div>
  );
}
