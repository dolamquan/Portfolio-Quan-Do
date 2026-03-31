import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Projects() {
  const projects = [
    {
      title: 'Gastric Cancer Histopathology Classification',
      description: 'Built a hybrid CNN–ML pipeline (ResNet50, SVM, XGBoost) for gastric cancer histopathology achieving 79.24% multi-class and 95% binary classification accuracy. Optimized preprocessing and visualized tumor microenvironments to reveal compositional differences between normal and cancerous tissues.',
      technologies: ['ResNet50', 'SVM', 'XGBoost', 'Python', 'OpenCV', 'Neural Networks'],
      github: 'https://github.com/Nuhcho/GastronomyBackend',
      demo: '#',
      highlights: [
        '79.24% multi-class accuracy achieved',
        'Reduced preprocessing time by 30%',
        'Tumor microenvironment visualization with heatmaps'
      ],
      gradient: 'from-red-600 to-pink-600',
      bgGradient: 'from-red-50 to-pink-50'
    },
    {
      title: 'GPT Model from Scratch',
      description: 'Built a transformer-based GPT language model from scratch using PyTorch, implementing multi-head self-attention, positional encoding, and feed-forward neural networks. Gained advanced understanding of neural network design and the complete text generation pipeline.',
      technologies: ['PyTorch', 'Transformers', 'Python', 'Attention Mechanisms', 'NLP'],
      github: 'https://github.com/dolamquan/GPT_model',
      demo: '#',
      highlights: [
        'Multi-head self-attention mechanism',
        'Complete pipeline: tokenization → embedding → attention → decoding',
        'Advanced understanding of neural network design'
      ],
      gradient: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50'
    },
    {
      title: 'Agenic Resource Manager, Scheduler, and Explainer (ARMSE)',
      description: 'Built a full-stack platform to automate task scheduling and resource management across distributed systems. Developed backend services with Python (FastAPI) and PostgreSQL, frontend using React, Next.js, and Tailwind CSS. Implemented agent-based task execution on AWS EC2 nodes with Docker containerization and GitHub Actions CI/CD.',
      technologies: ['FastAPI', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS EC2', 'GitHub Actions'],
      github: 'https://github.com/CSEN174-W2026/csen174-teampenne/tree/main',
      demo: '#',
      highlights: [
        'Full-stack automation platform',
        'Agent-based task execution on AWS',
        'CI/CD pipeline with GitHub Actions'
      ],
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    // {
    //   title: 'AI-Powered Trend & Automation Dashboard',
    //   description: 'Created an AI-powered dashboard integrated with n8n and Google Sheets for real-time trend monitoring, competitor analysis, and automated content generation. Implemented LLM-based agents to summarize trends, propose ideas, and generate marketing copy.',
    //   technologies: ['n8n', 'Google Sheets API', 'Gemini', 'LLMs', 'Python', 'Automation'],
    //   github: '#',
    //   demo: '#',
    //   highlights: [
    //     'Real-time data integration',
    //     'LLM-powered content generation',
    //     'Competitor monitoring automation'
    //   ],
    //   gradient: 'from-orange-600 to-yellow-600',
    //   bgGradient: 'from-orange-50 to-yellow-50'
    // }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6 pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">My Work</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my technical skills and problem-solving abilities. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className={`bg-gradient-to-br ${project.bgGradient} p-8`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {project.title}
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2 pl-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full flex-shrink-0`}></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm border border-gray-200 font-medium hover:border-blue-300 hover:bg-blue-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg`}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold transition-all hover:border-blue-600 hover:bg-blue-50 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to see more?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, contributions, and code samples.
            </p>
            <a
              href="https://github.com/dolamquan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-all hover:shadow-xl shadow-lg"
            >
              <Github className="w-5 h-5" />
              Visit GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
