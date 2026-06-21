const fs = require('fs');

// Read the current departmentData.js
let content = fs.readFileSync('src/data/departmentData.js', 'utf8');

// Find the closing of the last department entry (before the }; that closes departmentData)
const insertPoint = content.lastIndexOf('\n};');

const newDepartments = `
,
  /* ┌─────────────────────────────────────────────┐
     │  MECHANICAL ENGINEERING                     │
     └─────────────────────────────────────────────┘ */
  "mechanical-engineering": {
    name: "Mechanical Engineering",
    shortName: "ME",
    meta: {
      title: "Mechanical Engineering — Trident Academy of Technology",
      description: "Department of Mechanical Engineering at Trident Academy of Technology — B.Tech & Diploma programmes with modern labs and industry partnerships."
    },
    theme: {
      primary: "text-[#D97706]",
      bgPrimary: "bg-[#D97706]",
      borderPrimary: "border-[#D97706]"
    },
    hero: {
      titleLine1: "Mechanical",
      titleLine2: "Engineering",
      subtitle: "Shaping the future of manufacturing, design, and innovation with cutting-edge mechanical engineering education.",
      image: "/MECH.png",
      breadcrumb: "Mechanical Engineering",
      stats: [
        { label: "B.Tech Intake", value: "120" },
        { label: "Diploma Intake", value: "60" },
        { label: "AICTE Approved", value: "Yes" }
      ]
    },
    sidebar: {
      heading: "MECHANICAL\\nENGINEERING",
      items: [
        { id: "overview", label: "DEPARTMENT OVERVIEW", icon: "BookOpen" },
        { id: "syllabus", label: "SYLLABUS", icon: "FileText" },
        { id: "faculty", label: "FACULTY", icon: "Users" },
        { id: "laboratories", label: "LABORATORIES", icon: "Cpu" }
      ]
    },
    homeContent: {
      paragraphs: [
        "The Department of Mechanical Engineering at Trident Academy of Technology offers B.Tech and Diploma programmes with a strong emphasis on practical skills, innovation, and industry readiness. The department is equipped with state-of-the-art laboratories and workshops that provide hands-on experience in manufacturing, thermal engineering, design, and automation.",
        "With a team of experienced and dedicated faculty members, the department focuses on building a strong foundation in core mechanical engineering principles while preparing students for careers in manufacturing, automotive, aerospace, energy, and emerging fields like robotics and additive manufacturing."
      ],
      salientFeatures: [
        "Well-equipped workshops and modern laboratories",
        "Industry-aligned curriculum with practical training emphasis",
        "Experienced faculty with strong industry and research backgrounds",
        "Active participation in national-level technical competitions"
      ]
    },
    overview: {
      paragraphs: [
        "The Department of Mechanical Engineering at Trident Academy of Technology was established to cater to the growing demand for skilled mechanical engineers in India's rapidly expanding manufacturing and industrial sectors. The department offers both B.Tech and Diploma programmes, providing students with comprehensive knowledge of core mechanical engineering subjects.",
        "The curriculum is designed to cover a wide range of subjects including Thermodynamics, Fluid Mechanics, Manufacturing Technology, Machine Design, Automobile Engineering, Industrial Engineering, and CAD/CAM. Students gain hands-on experience through well-equipped laboratories and workshops, industrial visits, and project-based learning."
      ],
      vision: "To be a center of excellence in mechanical engineering education and research, producing competent engineers who contribute to the advancement of technology and society.",
      mission: [
        "To provide quality education in mechanical engineering through innovative teaching methodologies.",
        "To foster research and development activities in collaboration with industry.",
        "To develop professional skills and ethical values in students for successful careers.",
        "To promote entrepreneurship and lifelong learning among students."
      ],
      po: [
        "Apply knowledge of mathematics, science, and engineering fundamentals to solve mechanical engineering problems.",
        "Design and conduct experiments, analyze and interpret data for mechanical systems.",
        "Design mechanical components and systems to meet desired needs within realistic constraints.",
        "Function effectively on multidisciplinary teams.",
        "Identify, formulate, and solve complex mechanical engineering problems."
      ],
      peo: [
        "Graduates will demonstrate competence in core mechanical engineering disciplines.",
        "Graduates will pursue higher education or engage in research and development.",
        "Graduates will exhibit leadership qualities and professional ethics in their careers."
      ],
      pso: [
        "Apply knowledge of CAD/CAM, manufacturing processes, and thermal systems to solve real-world engineering problems.",
        "Design and analyze mechanical systems using modern computational tools and techniques."
      ],
      tabs: [
        {
          id: "diploma",
          label: "Diploma",
          content: "Diploma in Mechanical Engineering - 60 Seats\\n\\n• Strong foundation in manufacturing, design, and thermal engineering.\\n• Hands-on training through workshops, labs, and industrial visits.\\n• High employability in manufacturing, automobile, and maintenance sectors.\\n• Opportunities in government and private sectors as Junior Engineers.\\n• Pathway to B.Tech through lateral entry."
        },
        {
          id: "btech",
          label: "B.Tech",
          content: "B.Tech. in Mechanical Engineering - 120 Seats\\n\\n• Comprehensive curriculum covering all core areas of mechanical engineering.\\n• Modern laboratories for Manufacturing, Thermal, Fluid Mechanics, and CAD/CAM.\\n• Strong placement record with leading manufacturing and engineering companies.\\n• Opportunities for higher studies (M.Tech, MS, MBA) and research.\\n• Active student chapters and technical clubs fostering innovation."
        }
      ]
    },
    syllabus: {
      documents: [
        { title: "SYLLABUS FOR FIRST YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS" },
        { title: "SYLLABUS FOR SECOND YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 2ND YEAR SYLLABUS" },
        { title: "SYLLABUS FOR THIRD YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 3RD YEAR SYLLABUS" },
        { title: "SYLLABUS FOR FOURTH YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 4TH YEAR SYLLABUS" }
      ]
    },
    faculty: [],
    laboratories: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  ELECTRICAL & ELECTRONICS ENGINEERING       │
     └─────────────────────────────────────────────┘ */
  "electricals-and-electronics-engineering": {
    name: "Electrical and Electronics Engineering",
    shortName: "EEE",
    meta: {
      title: "Electrical and Electronics Engineering — Trident Academy of Technology",
      description: "Department of Electrical and Electronics Engineering at Trident Academy of Technology — B.Tech programme with focus on power systems, control, and electronics."
    },
    theme: {
      primary: "text-[#EAB308]",
      bgPrimary: "bg-[#EAB308]",
      borderPrimary: "border-[#EAB308]"
    },
    hero: {
      titleLine1: "Electrical &",
      titleLine2: "Electronics Engineering",
      subtitle: "Powering the future with expertise in electrical systems, power electronics, and smart grid technologies.",
      image: "/EEE.png",
      breadcrumb: "Electrical & Electronics Engineering",
      stats: [
        { label: "B.Tech Intake", value: "60" },
        { label: "BPUT Affiliated", value: "Yes" },
        { label: "AICTE Approved", value: "Yes" }
      ]
    },
    sidebar: {
      heading: "ELECTRICAL &\\nELECTRONICS",
      items: [
        { id: "overview", label: "DEPARTMENT OVERVIEW", icon: "BookOpen" },
        { id: "syllabus", label: "SYLLABUS", icon: "FileText" },
        { id: "faculty", label: "FACULTY", icon: "Users" },
        { id: "laboratories", label: "LABORATORIES", icon: "Cpu" }
      ]
    },
    homeContent: {
      paragraphs: [
        "The Department of Electrical and Electronics Engineering (EEE) at Trident Academy of Technology offers a comprehensive B.Tech programme that combines the principles of electrical engineering with electronics. The department prepares students for careers in power generation, transmission, distribution, control systems, and electronics design.",
        "With well-equipped laboratories and experienced faculty, the department emphasizes both theoretical knowledge and practical skills, ensuring graduates are ready to meet the challenges of the rapidly evolving electrical and electronics industry."
      ],
      salientFeatures: [
        "Comprehensive curriculum covering power systems, control, and electronics",
        "Modern laboratories with industry-standard equipment",
        "Experienced faculty with expertise in diverse areas of EEE",
        "Focus on emerging technologies like smart grids and renewable energy"
      ]
    },
    overview: {
      paragraphs: [
        "The Department of Electrical and Electronics Engineering at Trident Academy of Technology provides students with a strong foundation in electrical machines, power systems, control engineering, power electronics, and digital electronics. The curriculum is designed to meet the current industry demands while preparing students for future technological challenges.",
        "The department focuses on developing well-rounded engineers who can work across multiple domains including power generation and distribution, industrial automation, embedded systems, and renewable energy technologies."
      ],
      vision: "To be recognized as a center of excellence in electrical and electronics engineering education and research, producing competent professionals who contribute to technological advancement and societal development.",
      mission: [
        "To impart quality technical education in electrical and electronics engineering.",
        "To promote research and innovation in collaboration with industry and academia.",
        "To develop professional competence and ethical values in students.",
        "To encourage lifelong learning and entrepreneurship."
      ],
      po: [
        "Apply knowledge of mathematics, science, and engineering to solve EEE problems.",
        "Design and conduct experiments for electrical and electronic systems.",
        "Design systems to meet desired specifications within realistic constraints.",
        "Function effectively in multidisciplinary teams.",
        "Identify, formulate, and solve complex engineering problems."
      ],
      peo: [
        "Graduates will demonstrate competence in core EEE disciplines.",
        "Graduates will pursue higher education or engage in R&D.",
        "Graduates will exhibit professional ethics and leadership."
      ],
      pso: [
        "Apply knowledge of electrical machines, power systems, and electronics to solve engineering problems.",
        "Design and analyze electrical systems using modern tools and simulation software."
      ],
      tabs: [
        {
          id: "btech",
          label: "B.Tech",
          content: "B.Tech. in Electrical and Electronics Engineering - 60 Seats\\n\\n• Strong foundation in electrical machines, power systems, and electronics.\\n• Hands-on experience with modern lab equipment and simulation tools.\\n• Career opportunities in power utilities, manufacturing, and automation.\\n• Excellent higher study pathways (M.Tech, MS, MBA).\\n• Growing relevance with India's focus on renewable energy and smart grids."
        }
      ]
    },
    syllabus: {
      documents: [
        { title: "SYLLABUS FOR FIRST YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS" },
        { title: "SYLLABUS FOR SECOND YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 2ND YEAR SYLLABUS" },
        { title: "SYLLABUS FOR THIRD YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 3RD YEAR SYLLABUS" },
        { title: "SYLLABUS FOR FOURTH YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 4TH YEAR SYLLABUS" }
      ]
    },
    faculty: [],
    laboratories: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  ELECTRICAL ENGINEERING (DIPLOMA)           │
     └─────────────────────────────────────────────┘ */
  "electrical-engineering-diploma": {
    name: "Electrical Engineering (Diploma)",
    shortName: "EE-Dip",
    meta: {
      title: "Electrical Engineering Diploma — Trident Academy of Technology",
      description: "Diploma in Electrical Engineering at Trident Academy of Technology — a practical, skill-focused programme for aspiring electrical professionals."
    },
    hero: {
      titleLine1: "Electrical",
      titleLine2: "Engineering (Diploma)",
      subtitle: "Building practical expertise in electrical systems, wiring, maintenance, and power distribution for a strong technical career.",
      image: "/EE-DIP.png",
      breadcrumb: "Electrical Engineering (Diploma)",
      stats: [
        { label: "Programme", value: "Diploma" },
        { label: "Duration", value: "3 Years" },
        { label: "AICTE Approved", value: "Yes" }
      ]
    },
    sidebar: {
      heading: "ELECTRICAL\\nENGG (DIPLOMA)",
      items: [
        { id: "overview", label: "PROGRAMME OVERVIEW", icon: "BookOpen" },
        { id: "syllabus", label: "SYLLABUS", icon: "FileText" },
        { id: "faculty", label: "FACULTY", icon: "Users" },
        { id: "laboratories", label: "LABORATORIES", icon: "Cpu" }
      ]
    },
    homeContent: {
      paragraphs: [
        "The Diploma in Electrical Engineering at Trident Academy of Technology provides a strong foundation in electrical principles, power systems, electrical machines, wiring, and industrial automation. This programme is designed for students who wish to enter the workforce quickly with hands-on technical skills.",
        "Diploma graduates are in high demand across government departments (PWD, electricity boards), private industries, and construction firms for roles in installation, maintenance, and supervision of electrical systems."
      ],
      salientFeatures: [
        "Practical, skill-focused training with emphasis on hands-on learning",
        "Strong placement support in government and private sectors",
        "Pathway to B.Tech through lateral entry (direct 2nd year admission)",
        "Cost-effective and time-efficient programme for quick career entry"
      ]
    },
    overview: {
      paragraphs: [
        "The Diploma in Electrical Engineering programme at Trident Academy of Technology is designed to produce technically skilled professionals who can contribute effectively to the electrical industry. The three-year programme covers fundamental and applied aspects of electrical engineering.",
        "Students receive extensive hands-on training in electrical workshops and laboratories, preparing them for careers in power utilities, manufacturing industries, and electrical contracting firms."
      ],
      vision: "To produce skilled electrical engineering technicians who contribute to the nation's infrastructure and industrial development.",
      mission: [
        "To provide quality diploma-level education in electrical engineering.",
        "To develop practical skills through laboratory and workshop training.",
        "To prepare students for employment in the electrical industry."
      ],
      po: [
        "Apply fundamental knowledge of electrical engineering to solve practical problems.",
        "Perform installation, testing, and maintenance of electrical systems.",
        "Work effectively in teams and communicate technical information clearly."
      ],
      peo: [
        "Graduates will be employed as skilled technicians in the electrical industry.",
        "Graduates will pursue further education through lateral entry to B.Tech."
      ],
      pso: [
        "Install, test, and maintain electrical systems and equipment.",
        "Apply safety practices in electrical installations and operations."
      ]
    },
    syllabus: {
      documents: [
        { title: "SYLLABUS FOR FIRST YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS" },
        { title: "SYLLABUS FOR SECOND YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 2ND YEAR SYLLABUS" },
        { title: "SYLLABUS FOR THIRD YEAR", fileUrl: "#", btnText: "VIEW / DOWNLOAD 3RD YEAR SYLLABUS" }
      ]
    },
    faculty: [],
    laboratories: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  ENVIRONMENTAL ENGINEERING (M.Tech)         │
     └─────────────────────────────────────────────┘ */
  "environmental-engineering": {
    name: "Environmental Engineering (M.Tech)",
    shortName: "ENV",
    meta: {
      title: "M.Tech Environmental Engineering — Trident Academy of Technology",
      description: "M.Tech in Environmental Engineering at Trident Academy of Technology — specialized postgraduate programme in sustainable environmental solutions."
    },
    hero: {
      titleLine1: "Environmental",
      titleLine2: "Engineering (M.Tech)",
      subtitle: "Advancing sustainable solutions for environmental challenges through specialized postgraduate research and education.",
      image: "/ENV.png",
      breadcrumb: "Environmental Engineering (M.Tech)",
      stats: [
        { label: "Programme", value: "M.Tech" },
        { label: "Seats", value: "18" },
        { label: "Duration", value: "2 Years" }
      ]
    },
    sidebar: {
      heading: "ENVIRONMENTAL\\nENGINEERING",
      items: [
        { id: "overview", label: "PROGRAMME OVERVIEW", icon: "BookOpen" },
        { id: "syllabus", label: "SYLLABUS", icon: "FileText" },
        { id: "faculty", label: "FACULTY", icon: "Users" }
      ]
    },
    homeContent: {
      paragraphs: [
        "The M.Tech in Environmental Engineering at Trident Academy of Technology is a specialized postgraduate programme that prepares students to address critical environmental challenges. The programme covers water and wastewater treatment, air pollution control, solid waste management, environmental impact assessment, and sustainable development.",
        "With a focus on research and practical application, graduates are equipped to work in pollution control boards, environmental consultancies, water treatment plants, and research organizations."
      ],
      salientFeatures: [
        "Specialized curriculum aligned with national environmental missions",
        "Research-oriented programme with focus on sustainable technologies",
        "Opportunities in government environmental agencies and private consultancies",
        "Strong foundation for pursuing Ph.D. and academic careers"
      ]
    },
    overview: {
      paragraphs: [
        "The M.Tech in Environmental Engineering programme provides advanced knowledge in environmental science and engineering, preparing students for careers in environmental management, research, and consultancy. The curriculum integrates theoretical concepts with practical research methodologies.",
        "Students engage in cutting-edge research projects addressing issues like climate change, water scarcity, waste management, and environmental monitoring, aligned with national initiatives such as Swachh Bharat, Namami Gange, and Smart Cities Mission."
      ],
      vision: "To be a leading centre for environmental engineering education and research, producing professionals who contribute to sustainable development and environmental protection.",
      mission: [
        "To provide advanced education in environmental engineering and science.",
        "To promote research in sustainable technologies and environmental management.",
        "To prepare professionals for careers in environmental protection and policy."
      ],
      po: [
        "Apply advanced knowledge of environmental engineering to solve complex environmental problems.",
        "Design and implement environmental management systems.",
        "Conduct independent research in environmental engineering."
      ],
      peo: [
        "Graduates will be competent environmental engineers and researchers.",
        "Graduates will contribute to environmental protection and sustainable development."
      ],
      pso: [
        "Design environmental treatment systems for water, air, and solid waste.",
        "Conduct environmental impact assessments and develop mitigation strategies."
      ]
    },
    syllabus: {
      documents: [
        { title: "M.TECH ENVIRONMENTAL ENGINEERING SYLLABUS", fileUrl: "#", btnText: "VIEW / DOWNLOAD SYLLABUS" }
      ]
    },
    faculty: [],
    laboratories: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  ENERGY & ENVIRONMENTAL ENGINEERING (M.Tech)│
     └─────────────────────────────────────────────┘ */
  "energy-environmental-engineering": {
    name: "Energy and Environmental Engineering (M.Tech)",
    shortName: "EEE-MT",
    meta: {
      title: "M.Tech Energy and Environmental Engineering — Trident Academy of Technology",
      description: "M.Tech in Energy and Environmental Engineering — an interdisciplinary programme bridging energy systems and environmental sustainability."
    },
    hero: {
      titleLine1: "Energy &",
      titleLine2: "Environmental Engg (M.Tech)",
      subtitle: "Bridging energy systems and environmental sustainability through interdisciplinary postgraduate education and research.",
      image: "/EEE-MT.png",
      breadcrumb: "Energy & Environmental Engineering (M.Tech)",
      stats: [
        { label: "Programme", value: "M.Tech" },
        { label: "Seats", value: "18" },
        { label: "Duration", value: "2 Years" }
      ]
    },
    sidebar: {
      heading: "ENERGY &\\nENVIRONMENTAL",
      items: [
        { id: "overview", label: "PROGRAMME OVERVIEW", icon: "BookOpen" },
        { id: "syllabus", label: "SYLLABUS", icon: "FileText" },
        { id: "faculty", label: "FACULTY", icon: "Users" }
      ]
    },
    homeContent: {
      paragraphs: [
        "The M.Tech in Energy and Environmental Engineering at Trident Academy of Technology is an interdisciplinary programme that integrates energy engineering with environmental science. Students gain expertise in renewable energy systems, energy efficiency, carbon management, and environmental sustainability.",
        "The programme prepares graduates for careers in the growing clean energy sector, environmental consultancies, government energy departments, and research institutions focused on sustainable energy solutions."
      ],
      salientFeatures: [
        "Interdisciplinary curriculum covering energy and environmental domains",
        "Focus on renewable energy, energy efficiency, and green technologies",
        "Industry-relevant research projects and collaborations",
        "Career opportunities in the rapidly growing clean energy sector"
      ]
    },
    overview: {
      paragraphs: [
        "The M.Tech programme in Energy and Environmental Engineering addresses the critical intersection of energy production and environmental protection. The curriculum covers renewable energy technologies, conventional and non-conventional energy sources, energy auditing, environmental monitoring, and waste-to-energy systems.",
        "Students undertake research projects that contribute to solving real-world energy and environmental challenges, preparing them for leadership roles in the energy transition."
      ],
      vision: "To be a premier centre for energy and environmental engineering education, producing professionals who drive the transition to sustainable energy systems.",
      mission: [
        "To provide advanced education in energy and environmental engineering.",
        "To promote research in renewable energy and environmental technologies.",
        "To develop professionals capable of addressing energy and environmental challenges."
      ],
      po: [
        "Apply advanced knowledge of energy systems and environmental engineering.",
        "Design and evaluate renewable energy systems.",
        "Conduct research in energy and environmental engineering."
      ],
      peo: [
        "Graduates will be competent professionals in energy and environmental sectors.",
        "Graduates will contribute to sustainable energy development."
      ],
      pso: [
        "Design and analyze renewable energy systems and energy-efficient technologies.",
        "Evaluate environmental impacts of energy systems and develop mitigation strategies."
      ]
    },
    syllabus: {
      documents: [
        { title: "M.TECH ENERGY & ENVIRONMENTAL ENGINEERING SYLLABUS", fileUrl: "#", btnText: "VIEW / DOWNLOAD SYLLABUS" }
      ]
    },
    faculty: [],
    laboratories: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  ELECTRICAL VEHICLE TECHNOLOGY (M.Tech)     │
     └─────────────────────────────────────────────┘ */
  "electrical-vehicle-technology": {
    name: "Electrical Vehicle Technology (M.Tech)",
    shortName: "EVT",
    meta: {
      title: "M.Tech Electrical Vehicle Technology — Trident Academy of Technology",
      description: "M.Tech in Electrical Vehicle Technology — a cutting-edge programme focused on EV design, battery systems, and electric drivetrains."
    },
    hero: {
      titleLine1: "Electrical Vehicle",
      titleLine2: "Technology (M.Tech)",
      subtitle: "Leading the electric mobility revolution through specialized education in EV design, battery systems, and smart transportation.",
      image: "/EVT.png",
      breadcrumb: "Electrical Vehicle Technology (M.Tech)",
      stats: [
        { label: "Programme", value: "M.Tech" },
        { label: "Seats", value: "18" },
        { label: "Duration", value: "2 Years" }
      ]
    },
    sidebar: {
      heading: "ELECTRICAL\\nVEHICLE TECH",
      items: [
        { id: "overview", label: "PROGRAMME OVERVIEW", icon: "BookOpen" },
        { id: "syllabus", label: "SYLLABUS", icon: "FileText" },
        { id: "faculty", label: "FACULTY", icon: "Users" }
      ]
    },
    homeContent: {
      paragraphs: [
        "The M.Tech in Electrical Vehicle Technology at Trident Academy of Technology is a cutting-edge postgraduate programme designed to meet the growing demand for EV professionals. The programme covers electric drivetrain design, battery management systems, power electronics for EVs, charging infrastructure, and autonomous vehicle technologies.",
        "With India's ambitious EV adoption targets and the global shift toward electric mobility, graduates of this programme are well-positioned for careers in the automotive industry, EV startups, battery manufacturing, and research institutions."
      ],
      salientFeatures: [
        "Cutting-edge curriculum aligned with India's EV mission",
        "Focus on battery technology, power electronics, and motor design",
        "Industry collaboration with EV manufacturers and component suppliers",
        "High demand for EV engineers in India's rapidly growing EV market"
      ]
    },
    overview: {
      paragraphs: [
        "The M.Tech programme in Electrical Vehicle Technology provides comprehensive education in all aspects of electric vehicle engineering. Students study electric motor design, battery chemistry and management, power converter design, vehicle dynamics, charging systems, and connected vehicle technologies.",
        "The programme emphasizes practical learning through industry projects, internships, and research collaborations with leading EV companies and research labs."
      ],
      vision: "To be a leading centre for electric vehicle technology education and research, producing engineers who drive the transition to sustainable transportation.",
      mission: [
        "To provide advanced education in electric vehicle technology and systems.",
        "To promote research and innovation in EV design and manufacturing.",
        "To develop industry-ready professionals for the EV ecosystem."
      ],
      po: [
        "Apply advanced knowledge of electrical and mechanical engineering to EV design.",
        "Design and evaluate electric drivetrain systems and battery management systems.",
        "Conduct research in electric vehicle technologies."
      ],
      peo: [
        "Graduates will be competent EV engineers in the automotive and energy sectors.",
        "Graduates will contribute to advancing electric mobility technologies."
      ],
      pso: [
        "Design electric drivetrain systems including motors, controllers, and batteries.",
        "Analyze and optimize EV performance, range, and charging systems."
      ]
    },
    syllabus: {
      documents: [
        { title: "M.TECH ELECTRICAL VEHICLE TECHNOLOGY SYLLABUS", fileUrl: "#", btnText: "VIEW / DOWNLOAD SYLLABUS" }
      ]
    },
    faculty: [],
    laboratories: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  STRUCTURAL ENGINEERING (M.Tech)            │
     └─────────────────────────────────────────────┘ */
  "structural-engineering": {
    name: "Structural Engineering (M.Tech)",
    shortName: "SE",
    meta: {
      title: "M.Tech Structural Engineering — Trident Academy of Technology",
      description: "M.Tech in Structural Engineering — advanced programme in structural analysis, design, and construction technology."
    },
    hero: {
      titleLine1: "Structural",
      titleLine2: "Engineering (M.Tech)",
      subtitle: "Advancing the art and science of structural design with cutting-edge analysis, materials, and construction technologies.",
      image: "/SE.png",
      breadcrumb: "Structural Engineering (M.Tech)",
      stats: [
        { label: "Programme", value: "M.Tech" },
        { label: "Seats", value: "18" },
        { label: "Duration", value: "2 Years" }
      ]
    },
    sidebar: {
      heading: "STRUCTURAL\\nENGINEERING",
      items: [
        { id: "overview", label: "PROGRAMME OVERVIEW", icon: "BookOpen" },
        { id: "syllabus", label: "SYLLABUS", icon: "FileText" },
        { id: "faculty", label: "FACULTY", icon: "Users" }
      ]
    },
    homeContent: {
      paragraphs: [
        "The M.Tech in Structural Engineering at Trident Academy of Technology provides advanced knowledge in structural analysis, design of concrete and steel structures, earthquake engineering, bridge engineering, and computational methods. The programme is ideal for engineers seeking expertise in designing safe and efficient structures.",
        "Graduates are highly sought after in construction companies, consulting firms, government infrastructure departments, and research organizations involved in structural design and analysis."
      ],
      salientFeatures: [
        "Advanced curriculum covering structural analysis and design",
        "Focus on earthquake-resistant design and modern construction materials",
        "Computational tools training (STAAD Pro, ETABS, SAP2000)",
        "Strong demand in India's booming infrastructure and construction sector"
      ]
    },
    overview: {
      paragraphs: [
        "The M.Tech programme in Structural Engineering equips students with advanced knowledge of structural mechanics, finite element analysis, prestressed concrete, steel structure design, bridge engineering, and earthquake engineering. The curriculum integrates theoretical foundations with computational methods and practical applications.",
        "Students undertake research projects in areas like high-performance concrete, seismic retrofitting, structural health monitoring, and sustainable construction, contributing to the advancement of structural engineering practice."
      ],
      vision: "To be a premier centre for structural engineering education and research, producing experts who design safe, sustainable, and innovative structures.",
      mission: [
        "To provide advanced education in structural analysis, design, and construction.",
        "To promote research in structural engineering and construction technology.",
        "To develop professionals capable of designing safe and efficient structures."
      ],
      po: [
        "Apply advanced structural analysis and design methods.",
        "Design structures that are safe, sustainable, and economically viable.",
        "Conduct research in structural engineering."
      ],
      peo: [
        "Graduates will be competent structural engineers and consultants.",
        "Graduates will contribute to safe and innovative infrastructure development."
      ],
      pso: [
        "Design and analyze complex structures using advanced computational tools.",
        "Evaluate structural safety and develop retrofitting solutions."
      ]
    },
    syllabus: {
      documents: [
        { title: "M.TECH STRUCTURAL ENGINEERING SYLLABUS", fileUrl: "#", btnText: "VIEW / DOWNLOAD SYLLABUS" }
      ]
    },
    faculty: [],
    laboratories: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  INDUSTRIAL SAFETY ENGINEERING (M.Tech)     │
     └─────────────────────────────────────────────┘ */
  "industrial-safety-engineering": {
    name: "Industrial Safety Engineering (M.Tech)",
    shortName: "ISE",
    meta: {
      title: "M.Tech Industrial Safety Engineering — Trident Academy of Technology",
      description: "M.Tech in Industrial Safety Engineering — specialized programme in workplace safety, hazard management, and occupational health."
    },
    hero: {
      titleLine1: "Industrial Safety",
      titleLine2: "Engineering (M.Tech)",
      subtitle: "Protecting lives and assets through expertise in industrial safety, hazard management, and occupational health engineering.",
      image: "/ISE.png",
      breadcrumb: "Industrial Safety Engineering (M.Tech)",
      stats: [
        { label: "Programme", value: "M.Tech" },
        { label: "Seats", value: "18" },
        { label: "Duration", value: "2 Years" }
      ]
    },
    sidebar: {
      heading: "INDUSTRIAL\\nSAFETY ENGG",
      items: [
        { id: "overview", label: "PROGRAMME OVERVIEW", icon: "BookOpen" },
        { id: "syllabus", label: "SYLLABUS", icon: "FileText" },
        { id: "faculty", label: "FACULTY", icon: "Users" }
      ]
    },
    homeContent: {
      paragraphs: [
        "The M.Tech in Industrial Safety Engineering at Trident Academy of Technology is a specialized programme that trains professionals in workplace safety management, hazard identification and control, fire safety, occupational health, and industrial hygiene. The programme addresses the growing need for safety professionals across all industrial sectors.",
        "With increasing emphasis on workplace safety regulations and standards (both national and international), graduates are in high demand in manufacturing, oil & gas, construction, mining, chemical, and pharmaceutical industries."
      ],
      salientFeatures: [
        "Comprehensive coverage of industrial safety and occupational health",
        "Training in hazard identification, risk assessment, and safety auditing",
        "Alignment with national and international safety standards",
        "High demand for safety professionals across all industries"
      ]
    },
    overview: {
      paragraphs: [
        "The M.Tech programme in Industrial Safety Engineering provides comprehensive education in industrial safety management, covering fire and explosion protection, chemical process safety, construction safety, ergonomics, environmental management systems, and safety legislation. The curriculum is designed to meet the requirements of safety professionals in diverse industrial settings.",
        "Students engage in practical safety audits, hazard assessments, and research projects, developing the skills needed to create safe working environments and ensure regulatory compliance."
      ],
      vision: "To be a leading centre for industrial safety engineering education, producing professionals who create safe and healthy workplaces across industries.",
      mission: [
        "To provide advanced education in industrial safety and occupational health.",
        "To promote research in safety engineering and hazard management.",
        "To develop safety professionals who protect lives and assets in industrial settings."
      ],
      po: [
        "Apply advanced knowledge of safety engineering to identify and control workplace hazards.",
        "Design and implement industrial safety management systems.",
        "Conduct safety audits and risk assessments."
      ],
      peo: [
        "Graduates will be competent safety engineers and managers.",
        "Graduates will contribute to creating safe workplaces and reducing industrial accidents."
      ],
      pso: [
        "Design and implement safety management systems for industrial facilities.",
        "Conduct hazard identification, risk assessment, and develop mitigation strategies."
      ]
    },
    syllabus: {
      documents: [
        { title: "M.TECH INDUSTRIAL SAFETY ENGINEERING SYLLABUS", fileUrl: "#", btnText: "VIEW / DOWNLOAD SYLLABUS" }
      ]
    },
    faculty: [],
    laboratories: []
  }`;

// Insert before the closing };
content = content.substring(0, insertPoint) + newDepartments + content.substring(insertPoint);

fs.writeFileSync('src/data/departmentData.js', content);
console.log('Successfully added all 8 department data entries');
