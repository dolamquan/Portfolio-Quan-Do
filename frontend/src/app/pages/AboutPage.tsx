import { GraduationCap, Award, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const stats = [
    { icon: GraduationCap, label: 'GPA', value: '3.88' },
    { icon: Award, label: 'Projects', value: '3+' },
    { icon: TrendingUp, label: 'Experience', value: '1+ Years' },
    { icon: Users, label: 'Students Tutored', value: '30+' }
  ];

  const coursework = [
    'Machine Learning and Data Mining',
    'Artificial Intelligence',
    'Design and Analysis of Algorithms',
    'Advanced Data Structures and Algorithms',
    'Object Oriented Programming',
    'Operating System',
    'Software Engineering'
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6 pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate developer dedicated to creating impactful solutions
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a Computer Science student at <span className="font-semibold text-blue-600">Santa Clara University</span>, 
                  graduating in June 2027 with a 3.88 GPA in the Honors Program. My journey in tech began with a curiosity 
                  about how things work, and has evolved into a passion for building scalable applications and AI solutions.
                </p>
                <p>
                  Through my roles as a <span className="font-semibold">Data Research Intern at ARDC</span>, 
                  <span className="font-semibold"> AI Automation Extern at Wayfair</span>, and 
                  <span className="font-semibold">Math Learning Center Tutor</span>, I've developed 
                  strong technical skills in AI/ML and the ability to explain complex concepts clearly.
                </p>
                <p>
                  I thrive on building meaningful applications that solve real-world problems and continuously 
                  learning new technologies. I'm passionate about AI governance, data ethics, and automation. Beyond coding, 
                  I enjoy collaborating with diverse teams and mentoring fellow students.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gray-100 rounded-2xl p-8 shadow-xl text-gray-900">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <GraduationCap className="w-8 h-8 text-gray-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Santa Clara University
                  </h2>
                  <p className="text-gray-700 mb-1">
                    B.S. in Computer Science and Engineering (Honors Program)
                  </p>
                  <p className="text-gray-500 text-sm mb-3">
                    September 2023 - June 2027
                  </p>
                  <div className="inline-block px-4 py-2 bg-white rounded-lg border border-gray-200">
                    <span className="font-semibold">GPA: 3.88</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Relevant Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span 
                      key={course}
                      className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                {[
                  'Based in Santa Clara, CA',
                  'Open to internship opportunities',
                  'Passionate about full-stack development',
                  'Experienced in tutoring & mentoring'
                ].map((fact, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
