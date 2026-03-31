import { Code2, Wrench, Layers, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'C', level: 80 },
        { name: 'SQL', level: 85 }
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'Keras', level: 85 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'FastAPI', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'Django', level: 80 },
        { name: 'React', level: 80 },
        { name: 'Next.js', level: 80 }
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Infrastructure',
      icon: Wrench,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'AI/LLM Tools', level: 85 }
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 px-6 pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My technical toolkit spans multiple languages, frameworks, and tools. 
            Always learning and staying current with industry trends.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-900 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full shadow-sm`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Development Practices</h2>
            </div>
            <ul className="space-y-3">
              {[
                'Machine Learning & Deep Learning',
                'AI/LLM Integration & Prompt Engineering',
                'Data Ethics & Governance',
                'API Design & Integration',
                'Automation & Workflow Design',
                'Database Optimization'
              ].map((practice, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{practice}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Areas of Interest</h2>
            </div>
            <ul className="space-y-3">
              {[
                'Artificial Intelligence & Machine Learning',
                'Data Ethics & Privacy',
                'AI Agent Development',
                'Full-stack Web Development',
                'Cloud Computing & Infrastructure',
                'Research & Academic Collaboration'
              ].map((interest, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{interest}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
