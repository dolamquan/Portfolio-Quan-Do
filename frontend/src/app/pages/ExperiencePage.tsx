import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      title: 'Data Research Intern',
      company: 'Alliance for Responsible Data Collection (ARDC)',
      location: 'San Jose, CA',
      period: 'June 2025 - September 2025',
      color: 'from-blue-600 to-cyan-600',
      description: [
        'Researched AI governance, privacy, and data ethics to support responsible web data collection standards',
        'Drafted policy briefs and regulatory responses analyzing survey and research data on public internet data use',
        'Contributed technical input on data standards and maintained structured research and documentation workflows',
        'Analyzed emerging trends in data ethics and AI regulation'
      ],
      achievements: [
        'Policy briefs drafted',
        'Data analysis completed',
        'Standards documentation'
      ]
    },
    {
      title: 'AI Automation Extern',
      company: 'Wayfair (ExternGroup)',
      location: 'Remote',
      period: 'October 2025 - Present',
      color: 'from-purple-600 to-pink-600',
      description: [
        'Developed AI agents using n8n and Gemini to track design trends, scrape product data, and generate automated insights for Wayfair\'s e-commerce operations',
        'Built an AI-powered dashboard in Google Sheets integrating real-time datasets for trend monitoring and competitor benchmarking',
        'Created automation workflows summarizing trends, proposing blog ideas, and generating campaign captions using LLM-based prompt engineering',
        'Designed agents to monitor competitor launches, pricing changes, and marketing campaigns across blogs and social media'
      ],
      achievements: [
        'AI agents deployed',
        'Dashboard automated',
        'Trend monitoring live'
      ]
    },
    {
      title: 'Math Learning Center Tutor',
      company: 'Santa Clara University',
      location: 'Santa Clara, CA',
      period: 'September 2024 - Present',
      color: 'from-orange-600 to-red-600',
      description: [
        'Provide one-on-one and group tutoring sessions for undergraduate students, enhancing their understanding of mathematical concepts and problem-solving skills',
        'Tutor 30+ students per quarter in various mathematics courses',
        'Collaborate with faculty members to design tailored tutoring strategies for students, boosting their academic performance and confidence in math courses',
        'Develop custom learning materials and practice problems tailored to individual student needs'
      ],
      achievements: [
        'Tutored 30+ students',
        'Per-quarter coverage',
        'Faculty collaboration'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6 pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey combines technical expertise with a passion for teaching and collaboration
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-gray-400 rounded-full z-10"></div>

                <div className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Briefcase className="w-7 h-7 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h2>
                        <p className="text-lg font-semibold text-gray-700 mb-1">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-gray-500" />
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start gap-3 pl-4">
                          <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Achievements</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                          <p className="text-gray-700 text-sm font-medium">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gray-100 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What I Bring to the Table
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Technical Skills', desc: 'Strong foundation in full-stack development' },
              { title: 'Communication', desc: 'Ability to explain complex concepts clearly' },
              { title: 'Collaboration', desc: 'Experience in team environments' },
              { title: 'Problem Solving', desc: 'Analytical mindset with proven results' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
