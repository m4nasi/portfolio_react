// import { FaGraduationCap, FaBook, FaMicroscope, FaUniversity, FaProjectDiagram } from 'react-icons/fa'; // Added FaProjectDiagram for project icon

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "BSc Computer Science with Artificial Intelligence",
      institution: "University of Nottingham",
      duration: "2022 - 2025",
      // icon: <FaUniversity className="text-teal-500" size={20} />,
      highlights: [
        "First Class Honors Predicted (1:1)",
        "Specialised in Machine Learning and Software Engineering",
        "Coursework in Concurrent Systems, Machine Learning and Heuristic Optimisation"
      ],
      modules: [
        "Machine Learning",
        "Software Engineering",
        "Operating Systems and Concurrency",
        "Computer Vision",
        "Artificial Intelligence",
        "Data Structures and Algorithms",
        "Computer Networks",
      ],
      projects: [ 
        { name: "CNN-LSTM-AE Anomaly Detection Model with Large Language Model Driven Sentiment Analysis for Automated Trading", languages:"Python, JavaScript", duration: "September 2024 - May 2025" },
        { name: "Evaluation of A2C, PPO and DQN for Automated Trading", languages:"Python", duration: "April 2024 - August 2024" },
        { name: "Breast Cancer PCR and RFS Release Machine Learning predictor ", languages:"Python", duration: "October 2023 - March 2024" },
        { name: "ScribbleSphere: Infinate Whiteboard", languages: "JavaScript", duration: "October 2023 - March 2024" },
        { name: "Concurrent Process Scheduler Simulation", languages:"C", duration: "January 2023 - June 2023" },
        { name: "TCP/IP Dijkstra’s Graphing Server ", languages:"C", duration: "September 2022 - December 2022" },
        { name: "HyFlex-Compatible UAV Animal Feeding Problem Solver", languages:"Java", duration: "September 2022 - December 2022" },
        { name: "ARM64-Based Text Editor with Memory Management", languages:"ARM64", duration: "September 2022 - December 2022" },
        { name: "CPU Arithmetic Data Logic Unit (ALU)", languages:"HDL", duration: "September 2022 - December 2022" }
      ]
    },
    // {
    //   id: 2,
    //   degree: "A-Levels",
    //   institution: "City College",
    //   duration: "2020 - 2019",
    //   // icon: <FaBook className="text-teal-500" size={20} />,
    //   highlights: [
    //     "Mathematics (A*)",
    //     "Further Mathematics (A)",
    //     "Computer Science (A)",
    //     "Physics (A)"
    //   ]
    // }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="bg-gradient-to-r from-teal-100 to-purple-100 p-3 rounded-xl mr-4 flex-shrink-0">
          <span className="text-teal-600 text-2xl">🎓</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 text-transparent">
          Education
        </h2>
      </div>

      {/* Education Timeline */}
      <div className="space-y-8 relative flex-grow">
        {/* Main Timeline bar */}
        {/* <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 to-purple-200"></div> */}

        {educationData.map((edu) => (
          <div key={edu.id} className="relative group">
            {/* Main Timeline dot */}
            {/* <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-white border-4 border-teal-500 group-hover:bg-teal-100 transition-all duration-300 z-10"></div> */}

            {/* Education Card Content */}
            <div className="p-2 rounded-xl group-hover:border-teal-200 transition-all duration-300">
              <div className="max-w-prose">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <div className="flex items-center mt-1">
                      {/* {edu.icon} */}
                      <p className="text-teal-600 font-medium ml-2">{edu.institution}</p>
                    </div>
                  </div>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex-shrink-0 ml-4">
                    {edu.duration}
                  </span>
                </div>

                {/* Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Modules */}
                {edu.modules && edu.modules.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                      Key Modules
                    </h4>
                    <ul className="space-y-2">
                      {edu.modules.map((module, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span className="text-gray-700">{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Projects */}
                {edu.projects && edu.projects.length > 0 && (
                  <div className="mt-6 border-t border-gray-100 pt-4 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 to-teal-200 ml-5 pt-4"></div> {/* Adjusted position to align with main timeline */}

                    <h4 className="text-base font-semibold text-gray-700 uppercase tracking-wider mb-4 pl-12 flex items-center">
                      <span className="text-xl mr-2">💡</span>
                      Notable Projects
                    </h4>
                    <ul className="space-y-4">
                      {edu.projects.map((project, i) => (
                        <li key={i} className="relative pl-12 group">
                          <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-white border-2 border-purple-500 group-hover:bg-purple-100 transition-all duration-300 z-10"></div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-800 font-medium">{project.name}</span>
                            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full ml-4 ">
                              {project.languages}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;