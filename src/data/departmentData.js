/**
 * ══════════════════════════════════════════════════════════════
 *  DEPARTMENT DATA — Tertiary Pages
 * ══════════════════════════════════════════════════════════════
 *
 *  HOW TO ADD A NEW DEPARTMENT PAGE:
 *  1. Copy the CSE object below.
 *  2. Change the key to a unique URL slug (e.g., "mechanical-engineering").
 *  3. Fill in all the fields with your department's content.
 *  4. Add a route in App.jsx:  <Route path="/your-slug" element={<DepartmentPage />} />
 *  5. Done! The reusable DepartmentPage template handles the rest.
 *
 *  STRUCTURE REFERENCE:
 *  Each department object has these sections:
 *    - meta:        SEO title & description
 *    - hero:        Banner title, subtitle, description, image, quick stats
 *    - acmBanner:   Optional top-bar CTA (set to null to hide)
 *    - sidebar:     Left-side navigation items
 *    - overview:    Department overview paragraphs
 *    - programmes:  Accordion items for offered programmes
 *    - research:    Research description + focus area tags
 *    - events:      Hackathon/event cards grid
 *    - innovation:  Blue highlight box (thingQbator etc.)
 *    - clubs:       Department clubs accordion
 *    - placement:   Placement stats & description
 * ══════════════════════════════════════════════════════════════
 */

const departmentData = {

  /* ┌─────────────────────────────────────────────┐
     │  COMPUTER SCIENCE & ENGINEERING             │
     └─────────────────────────────────────────────┘ */
  "computer-science-engineering": {
    name: "Computer Science & Engineering",

    meta: {
      title: "Computer Science & Engineering — Trident Academy of Technology",
      description: "Department of Computer Science & Engineering at Trident Academy of Technology — NBA Accredited, AICTE Approved B.Tech & M.Tech programmes.",
    },

    hero: {
      titleLine1: "Computer Science",
      titleLine2: "& Engineering",
      subtitle: "One of the premier branches of undergraduate programs in engineering — established in 2005 with AICTE approval and BPUT affiliation.",
      image: "/images/departments/cse/1-768x576.jpeg",
      breadcrumb: "Computer Science & Engineering",
      stats: [
        { label: "Established", value: "2005" },
        { label: "NBA Accredited", value: "2025" },
        { label: "B.Tech Seats", value: "180" },
        { label: "M.Tech Seats", value: "18" },
      ],
    },


    sidebar: {
      heading: "COMPUTER SCIENCE &\nENGINEERING",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen", href: "/computer-science-engineering/overview" },
        { id: "question-bank", label: "Question Bank", icon: "FileText", href: "/question-bank" },
        { id: "product-dev", label: "Product Development", icon: "Rocket", href: "/product-development" },
        { id: "syllabus", label: "Syllabus", icon: "Layers", href: "/syllabus" },
        { id: "faculties", label: "Faculties", icon: "Users", href: "/faculties" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker", href: "/laboratories" },
        { id: "newsletter", label: "THE QUBIT – School of Computing Newsletter", icon: "FileText", href: "/newsletter" },
        { id: "magazine", label: "CompFluence (SoC Magazine)", icon: "FileText", href: "/magazine" },
        { id: "publications", label: "Publications & Patents", icon: "Award", href: "/publications" },
        { id: "events", label: "Inter Institute Events", icon: "Trophy", href: "/events" },
        { id: "clubs", label: "Student Clubs & Chapters", icon: "Code2", href: "/clubs" },
        { id: "placement", label: "Placement Data (CSE)", icon: "BarChart3", href: "/placement" },
        { id: "innovation", label: "Innovations by Faculty in Teaching & Learning", icon: "Lightbulb", href: "/innovations" }
      ],
    },

    overview: {
      paragraphs: [
        "Department of Computer Science & Engineering (CSE) – one of the premier branches of undergraduate program in engineering was established in the year 2005 with the approval of AICTE and in affiliation with Biju Patnaik University of Technology (BPUT), Odisha. The B.Tech programme of Computer Science Engineering has been accredited by National Board of Accreditation (NBA) in the year 2025 and National Assessment and Accreditation Council (NAAC). The field of Computer Science has been the most favored area of the NRI promoters of Trident Group.",
        "Since its inception, this branch has been producing hi-class computer professionals and technocrats with the support of available state-of-the-art corporate styled academic infrastructure and quality faculty members. The Department of CSE offers both undergraduate and postgraduate programs in Computer Science.",
        "Initially, the Department was started with an intake capacity of 60 and subsequently escalated its intake capacity to meet the global requirement. The Department started M.Tech course in Computer Science Engineering with an annual intake of 18 students from the year 2012. The department has a good number of faculty members with M.Tech/Ph.D qualification.",
        "In order to cope up with the changing need of the industry as well as academia, the Department of CSE at present offers following programme variants with unique philosophies and objectives:",
      ],
      tabs: [
        {
          id: 'vision',
          label: 'Vision',
          content: 'To be a centre of excellence in Computer Science Engineering by imparting quality education, fostering innovation and cultivating ethical professionals to meet the evolving global challenges.',
        },
        {
          id: 'mission',
          label: 'Mission',
          content: 'M1. Provide quality education to build students strong expertise in software development, profound sense of hardware design and problem-solving skills to address global needs through innovation.\n\nM2. Foster well-disciplined leadership quality, a strong sense of responsibility and ethical values for impactful professional growth.\n\nM3. Encourage innovation, research and adaptability to tackle global challenges with sustainable technological proficiency.',
        },
        {
          id: 'peo',
          label: 'PEO',
          content: 'PEO-1. To develop competent computer professionals to solve computer science related problems through their strong problem-solving skills using efficient algorithms.\nKeyword: Problem-solving skills.\n\nPEO-2. To develop strong leadership qualities in students, enhancing their skillsets for solving real-world problems.\nKeywords: Leadership Quality.\n\nPEO-3. To develop students as ethical engineers with strong managerial skill, communication skill, interpersonal skills, self-esteem, and stress management for future leadership.\nKeywords: Ethical Ability.\n\nPEO-4. To motivate students to pursue higher studies, research & entrepreneurship in emerging technologies with expert guidance from industry and academia.\nKeywords: Motivation for Higher studies, Research & Entrepreneurship.',
        },
        {
          id: 'po',
          label: 'PO',
          content: '1. Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.\n\n2. Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.\n\n3. Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate considerations for the public health and safety and the cultural, societal and environmental considerations.\n\n4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.\n\n5. Modern tool Usage: Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.\n\n6. The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.\n\n7. Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of and need for sustainable development.\n\n8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.\n\n9. Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams and in multidisciplinary settings.\n\n10. Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.\n\n11. Project Management and Finance: Demonstrate knowledge and understanding of engineering and management principle and apply these to one\'s own work as member and leader in team to manage projects and in multidisciplinary environments.\n\n12. Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
        },
        {
          id: 'pso',
          label: 'PSO',
          content: 'With reference to the Annexture-II, Item-B of NBA SAR Format (June 2015) requiring to specify 2-4 Program Specific Outcomes (PSOs), with respect to the B.Tech. program in the Computer Science & Engineering, i.e., B.Tech.(CSE) under affiliation from BPUT, Odisha we have framed a set of Programme Specific Outcomes (PSOs) as outlined below:\n\nPSO1: Enterprise Software Development – Design, develop, test, and maintain software systems for enterprises and specialized domains, aligning with industry needs.\n\nPSO2: Advanced Computing Expertise – Gain proficiency in advanced computing and programming to build intelligent and efficient solutions.\n\nPSO3: Legacy System Enhancement – Maintain, optimize, and modernize legacy computing systems for sustained usability and integration.',
        },
        {
          id: 'lo',
          label: 'LO',
          content: 'Learning Outcomes (LOs)\n\nLO-1. Acquire knowledge of advanced computing skill and programming expertise.\n\nLO-2. Capability to design, build, evaluate, and sustain software systems for business and enterprise applications.\n\nLO-3. Ability to develop, test and maintain Software Systems for Specific Application Domain and as per the industry need.\n\nLO-4. Develop expertise to maintain and extend usability of legacy computer systems.',
        }
      ],
      images: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg"
      ],
      gallery: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg",
        "/images/departments/cse/4-768x576.jpeg",
        "/images/departments/cse/5-768x576.jpeg",
        "/images/departments/cse/cse (1).jpg",
        "/images/departments/cse/WhatsApp-Image-2026-03-09-at-6.07.33-PM-1.jpeg",
        "/images/departments/cse/WhatsApp-Image-2026-03-11-at-3.41.52-PM-768x576.jpeg"
      ]
    },

    programmes: [
      {
        title: "B.Tech. in Computer Science & Engineering – B.Tech.(CSE)",
        seats: "180 Seats",
        details: "4-Year Full-Time Programme | AICTE Approved | NBA Accredited",
        sections: [
          {
            heading: "Programme Overview",
            text: "B.Tech. in Computer Science Engineering, which is the most classical branch of Computer Science Engineering studies. Targeted at the Industry as well as academia perspective, this branch of engineering studies is undoubtedly one of the most sought after specialisations of engineering. B.Tech in CSE is among the top choices of courses for all engineering aspirants. This is the reason the cut off for this course goes quite high in demand during every academic session. Bachelor degree program in Computer Science Engineering is offered by almost all the institutes that offer a Bachelor of Technology (B.Tech.) degree in their curriculum. All the technical universities and institutes of the country provide the programme of Computer Science Engineering at the undergraduate as well as postgraduate level."
          },
          {
            heading: "Program Content Outline",
            text: "B.Tech. in Computer Science Engineering (CSE) is an academic programme of four years of duration which integrates a study on theoretical basis of the field of Computer Science as well as the technological basis of the field of Computer Science – the Computer Engineering from the industry perspective. The programme primarily emphasises on laying a strong theoretical background through imparting studies of the basics of computer programming, networking and computer organization and architecture while also comprising a plethora of other versatile topics. All the subjects and topics that are covered under B.Tech. in Computer Science Engineering are related to algorithms, computation, programming languages, theory of computing, theory of automata, programme design, computer hardware, computer software, software engineering, computer graphics, etc. It is a comprehensive course focusing on computer systems as well as computer applications."
          },
          {
            heading: "Beneficiaries",
            text: "Students pursuing this Bachelor’s program in Computer Science Engineering are taught about the design, implementation as well as management of computer software and computer hardware. Upon successful completion of this B.Tech.(CSE) degree, computer science engineers are engaged in a variety of fields of computing and computer engineering, ranging from the design of individual microprocessor and microcontroller based embedded systems, real-time systems, supercomputers and personal computers to design and development of the software systems that powers them for managing and controlling their action, provides them artificial intelligence, supports them in decision making and exploring new avenues. Through B.Tech. in Computer Science Engineering, the students are taught to understand, learn and use the different programming languages, networking and telecommunications, digital and analogue electronics, etc. The use of computers has become an integral part of human life – a bare necessity in everyday life and therefore, its importance is inevitable, hence the course of Computer Science Engineering continues to hold its extreme popularity among all the stakeholders – students, parents and employers. Due to the increasing demand for the course and its importance in the industry sector, a career in Computer Science Engineering is highly lucrative."
          }
        ]
      },
      {
        title: "M.Tech. in Computer Science and Engineering - M.Tech.(CSE)",
        seats: "18 Seats",
        details: "2-Year Full-Time Programme | AICTE Approved",
        sections: [
          {
            text: "Prepare students to pursue a career in Research and Development, Academics, and as computer science professional at national and international level organizations.\n\nEnable students to pursue higher studies, exhibit research skills and knowledge to further their career aspirations.\n\nEnable students to become entrepreneur and show their leadership and technical skills to adapt to the challenges of upcoming technologies.\n\nUse research based knowledge and tools for the analysis and interpretation of data to synthesize information for obtaining valid conclusions."
          }
        ]
      },
    ],

    homeContent: {
      researchAndDev: {
        heading: "Research & Development",
        points: [
          "One Sponsored R & D Project entitled “Design & Development of Real-Time Ground Behaviour Monitoring System (RT-GBMS) for Underground Metal Mines”, through the funding agency Ministry of Mines, Government of India, is currently running under the guidance of Principal Investigator Dr. Abhaya Kumar Samal, Professor and Dean (School of Computing).",
          "A Memorandum of Understanding (MoU) between NASSCOM Foundation and Trident Academy of Technology, Bhubaneswar for the thingQbator Program has been signed on 1st May 2022.",
          "The department encourages its faculty members and laboratory staff to obtain NPTEL certifications in various computer science subjects along with financial rewards for outstanding achievers."
        ]
      },
      ieeeBtn: { label: "IEEE Activities", href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/IEEE_Student_Chapter.pdf" },
      studentChapters: {
        heading: "Student Chapters",
        description: "IEEE Student Chapter: The IEEE Student Branch is dedicated to helping its members enrich their technical knowledge and expertise. The main focus of this association is to organize social and technical activities for students, create awareness about professional development, and encourage them to utilize the benefits of IEEE membership. These benefits include scholarships, competitions, conference grants, and networking opportunities that support academic and professional growth.\n\nFollowing IEEE Students’ Chapters are functional under the CSE Program:",
        chapters: [
          {
            title: "1. IEEE Computer Society (IEEE CS):",
            text: "The IEEE Computer Society Student Branch Chapter at Trident Academy of Technology was formed on 28th May, 2023 with the geo-code SBC60128004B. The IEEE Computer Society provides several recognition opportunities for students participating in chapter activities, such as the Outstanding Chapter Award and the prestigious Richard E. Merwin Scholarship. These recognitions are awarded to students who actively contribute to IEEE and IEEE Computer Society activities while demonstrating strong academic performance and leadership potential."
          },
          {
            title: "2. IEEE Geoscience and Remote Sensing Society (IEEE GRSS):",
            text: "The IEEE Geoscience and Remote Sensing Society Student Branch Chapter at Trident Academy of Technology was established on 28th May, 2023 with the geo-code SBC60128004A. This chapter focuses on promoting knowledge and research activities related to geoscience, remote sensing technologies, and their applications in environmental monitoring, earth observation, and data analysis."
          },
          {
            title: "CSI Student Chapter:",
            text: "In keeping with its tradition of taking the lead in student-oriented initiatives, Trident Academy of Technology has an active CSI Student Chapter operating under the Department of Computer Science and Engineering. The CSI chapter regularly organizes various activities such as inter-department programming competitions, CSI Day celebrations, workshops, and technical events. These activities aim to enhance students’ technical abilities and promote awareness of emerging technologies."
          },
          {
            title: "ACM Student Chapter:",
            text: "The ACM Student Chapter serves as a dynamic platform for students interested in computing and information technology. ACM student chapters across the world function as hubs of technical activity for ACM members and the broader computing community. Through seminars, workshops, coding competitions, and knowledge-sharing sessions, the chapter encourages students to explore advanced computing concepts and engage with the global computing community."
          }
        ],
        acmBtn: { label: "ACM Student Chapter Annual Report", href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/2024-25Trident-Acm-Student-Chapter-Annual-Report.pdf" }
      },
      innovation: {
        heading: "Innovation & Technology Initiatives",
        paragraphs: [
          "Trident is a CISCO sponsored thingQbator Center, which functions as an IoT Incubation Center established in 2018 as part of the Corporate Social Responsibility initiatives of CISCO through its partner NASSCOM Foundation. This center is a student-driven innovation hub where students of the Computer Science and Engineering Department share innovative ideas and utilize the facilities available at the center to transform their ideas into real-world products with the support and mentorship provided by the CISCO Support Center.",
          "The CSE Department also has an active Hackathon Club where students are trained for hackathons, boot camps, and innovation-based competitions. Through this platform, students regularly participate in various national-level and state-level hackathons and boot camps, bringing laurels and recognition to the department.",
          "The academic performance of the department has been consistently impressive, maintaining an average result of 95% and above for the past few years. Along with strong academic performance, the department has also achieved remarkable success in campus placements. Over the last three years, the overall placement percentage has remained around 80%.",
          "To keep students aligned with cutting-edge technologies and to meet evolving industry standards, the department has established three unique student clubs under the guidance of experienced faculty members. These clubs attract not only students from our institution but also participants from other colleges, as they provide a platform to “learn through fun” while exploring emerging technologies. Students are actively involved in innovative thinking, problem-solving, and ideation through their participation in hackathons, boot camps, and other technical activities."
        ]
      },
      clubsAccordionHeading: "Department Clubs",
      clubsAccordionText: "The department has three clubs, which are:",
      clubsAccordionItems: [
        "Hackathon Club",
        "Brain Logic Club",
        "AIML Club"
      ]
    },

    questionBank: {
      years: [
        { 
          id: "1st-year", 
          label: "1st Year", 
          color: "bg-[#B894B7]", 
          subjects: [] 
        },
        { 
          id: "2nd-year", 
          label: "2nd Year", 
          color: "bg-[#5B50C2]", 
          subjects: [] 
        },
        { 
          id: "3rd-year", 
          label: "3rd Year", 
          color: "bg-[#D18E47]", 
          subjects: [
            { name: "DATABASE MANAGEMENT SYSTEMS", href: "#" },
            { name: "OPERATING SYSTEM", href: "#" },
            { name: "COMPILER DESIGN", href: "#" },
            { name: "FLAT-SET-1", href: "#" },
            { name: "FLAT SET-2", href: "#" },
            { name: "COMPUTER GRAPHICS", href: "#" },
            { name: "DATA COMMUNICATION", href: "#" }
          ] 
        },
        { 
          id: "4th-year", 
          label: "4th Year", 
          color: "bg-[#C3594B]", 
          subjects: [] 
        },
      ],
      previousSemester: {
        label: "Previous Semester Questions",
        href: "https://drive.google.com/drive/folders/1VS1tfkMdzFSkDXX0NKdquVs8iGugrFpW"
      }
    },

    syllabus: [
      {
        program: "B.TECH.",
        years: [
          {
            title: "SYLLABUS FOR FIRST YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR SECOND YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 3RD SEM SYLLABUS", href: "#" },
              { label: "VIEW / DOWNLOAD 4TH SEM SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR THIRD YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 5TH SEM SYLLABUS", href: "#" },
              { label: "VIEW / DOWNLOAD 6TH SEM SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR FOURTH YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 4TH YEAR SYLLABUS", href: "#" }
            ]
          }
        ]
      },
      {
        program: "M.TECH.",
        years: [
          {
            title: "SYLLABUS FOR M.TECH",
            buttons: [
              { label: "VIEW / DOWNLOAD M. TECH SYLLABUS", href: "#" }
            ]
          }
        ]
      }
    ],

    faculties: [
      { name: "Dr. Sudhansu Ranjan Lenka", designation: "Asso. Prof. & HOD", joining: "9/8/2011", qualification: "Ph.D", bputId: "T121728901" },
      { name: "Dr. Manas Ranjan Chowdhury", designation: "Associate Professor", joining: "22/7/2015", qualification: "Ph.D", bputId: "T151728901" },
      { name: "Mr. Rahul Ranjan", designation: "Assistant Professor", joining: "2/7/2007", qualification: "M.Tech", bputId: "T080528901" },
      { name: "Mr. Aditya Narayan Das", designation: "Assistant Professor", joining: "28/7/2009", qualification: "M.Tech", bputId: "T110528901" },
      { name: "Mr. Partha Sarathi Mohapatra", designation: "Assistant Professor", joining: "13/8/2019", qualification: "M.Tech", bputId: "T200228901" },
      { name: "Mr. Krushna Chandra Das", designation: "Assistant Professor", joining: "13/8/2019", qualification: "M.Tech", bputId: "T210128909" },
      { name: "Mr. Debi Prasad Mohanty", designation: "Assistant Professor", joining: "23/9/2019", qualification: "M.Tech", bputId: "T210128908" },
      { name: "Mr. Srikanta Barick", designation: "Assistant Professor", joining: "13/2/2020", qualification: "M.Tech", bputId: "T210128921" },
      { name: "Mrs. Pralipta Samal", designation: "Assistant Professor", joining: "10/8/2017", qualification: "M.Tech", bputId: "T210128906" },
      { name: "Mr. Nikhil Lenka", designation: "Assistant Professor", joining: "13/7/2015", qualification: "M.Tech", bputId: "T210128919" },
      { name: "Mr. Rabiteja Pata", designation: "Associate Professor", joining: "3/7/2014", qualification: "M.Tech", bputId: "T142728904" },
      { name: "Mr. Sambit Mohanty", designation: "Assistant Professor", joining: "10/3/2017", qualification: "M.Tech", bputId: "T171289534" },
      { name: "Dr. Padmabati Chand", designation: "Professor & HOD", joining: "25/8/2005", qualification: "Ph.D", bputId: "T081728908" },
      { name: "Dr. Abhaya Kumar Samal", designation: "Professor & Dean", joining: "1/7/2013", qualification: "Ph.D", bputId: "T141728902" },
      { name: "Dr. Deba Narayan Pattanayak", designation: "Professor", joining: "14/7/2012", qualification: "Ph.D", bputId: "T131928901" },
      { name: "Mrs. Kabita Sahoo", designation: "Assistant Professor", joining: "20/10/2022", qualification: "M.Tech", bputId: "T220228907" },
      { name: "Mrs. Yogasambhuta Dash", designation: "Assistant Professor", joining: "10/10/2022", qualification: "M.Tech", bputId: "T220228909" },
      { name: "Mrs. Rani Dubey", designation: "Assistant Professor", joining: "31/10/2022", qualification: "M.Tech", bputId: "T220228908" },
      { name: "Mr. Shyamalendu Pati", designation: "Assistant Professor", joining: "22/8/2022", qualification: "M.Tech", bputId: "T220228903" },
      { name: "Mrs. Abhipsa Pattnaik", designation: "Assistant Professor", joining: "31/8/2023", qualification: "M.Tech", bputId: "T230128913" },
      { name: "Dr. Madhumita Panda", designation: "Associate Professor", joining: "10/8/2023", qualification: "M.Tech", bputId: "T230128911" },
      { name: "Mrs. Banaja Mishra", designation: "Assistant Professor", joining: "26/9/2024", qualification: "M.Tech", bputId: "T240728933" },
      { name: "Dr. Biswaranjan Pattanayak", designation: "Assistant Professor", joining: "3/9/2024", qualification: "Ph.D", bputId: "T240128909" },
      { name: "Mr. Laxmikanta Mohanty", designation: "Assistant Professor", joining: "27/8/2024", qualification: "M.Tech", bputId: "T240128910" },
      { name: "Mr. Jyotiranjan Sahoo", designation: "Assistant Professor", joining: "31/7/2018", qualification: "M.Tech", bputId: "T171289839" },
      { name: "Mr. Adarsh Acharya", designation: "Assistant Professor", joining: "20/8/2009", qualification: "M.Tech", bputId: "T210128918" },
      { name: "Mr. Soubhagya Ranjan Mallick", designation: "Assistant Professor", joining: "19/8/2019", qualification: "M.Tech", bputId: "T171289851" },
      { name: "Mr. Jayanta Kumar Pradhan", designation: "Assistant Professor", joining: "13/8/2019", qualification: "M.Tech", bputId: "T210128916" },
      { name: "Dr. Sashi Bhushana Parida", designation: "Associate Professor", joining: "5/9/2005", qualification: "M.Tech", bputId: "T081228903" },
      { name: "Mr. Bibhudutta Parija", designation: "Assistant Professor", joining: "18/5/2006", qualification: "M.Tech", bputId: "T210128923" },
      { name: "Mr. Lohit Kumar Sahoo", designation: "Assistant Professor", joining: "1/8/2011", qualification: "M.Tech", bputId: "T111828901" },
      { name: "Mrs. Madhusmita Mohanty", designation: "Associate Professor", joining: "3/9/2018", qualification: "M.Tech", bputId: "T171289849" },
      { name: "Mr. Subash Mohanty", designation: "Assistant Professor", joining: "12/7/2018", qualification: "M.Tech", bputId: "T240128926" },
      { name: "Mr. Sisir Kumar Sahoo", designation: "Assistant Professor", joining: "12/2/2017", qualification: "M.Tech", bputId: "T240128927" },
      { name: "Mr. Prasanta Kumar Mohanty", designation: "Assistant Professor", joining: "27/7/2007", qualification: "M.Tech", bputId: "T210128903" }
    ],

    laboratories: [
      { 
        name: "Programming Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Dev C++ IDE",
          "Code::Blocks IDE",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "Experiment Set 1",
            list: [
              "Write a program to print your Bio-data.",
              "Write a program in C to test the arithmetic operators.",
              "Write a program to find Simple Interest and Compound Interest."
            ]
          },
          {
            set: "Experiment Set 2",
            list: [
              "Test logical, bitwise, unary and ternary operators.",
              "Check whether a given year is a leap year.",
              "Calculate salary statement of an employee using basic pay, DA, HRA and TA."
            ]
          },
          {
            set: "Experiment Set 3",
            list: [
              "Enter marks of 4 subjects and calculate Total, Aggregate %, and Grade.",
              "Display the day of the week using switch case.",
              "Menu driven program to find total, average, smallest and largest."
            ]
          },
          {
            set: "Experiment Set 4",
            list: [
              "Check whether a number is palindrome.",
              "Generate prime numbers between two numbers.",
              "Print a pyramid star pattern."
            ]
          },
          {
            set: "Experiment Set 5",
            list: [
              "Find largest, smallest, sum and average of an array.",
              "Sort an array in ascending order.",
              "Insert an element in an array at a desired position."
            ]
          },
          {
            set: "Experiment Set 6",
            list: [
              "Swap two variables using function.",
              "Print Fibonacci series using function.",
              "Multiply two matrices using functions."
            ]
          },
          {
            set: "Experiment Set 7",
            list: [
              "Find GCD using recursion.",
              "Store and display student data using structure.",
              "Check string palindrome using pointer."
            ]
          },
          {
            set: "Experiment Set 8",
            list: [
              "Find smallest element and position using pointer.",
              "Implement realloc() and free().",
              "Demonstrate Dynamic Memory Allocation."
            ]
          },
          {
            set: "Experiment Set 9",
            list: [
              "Implement Linked List insertion and deletion.",
              "Implement Stack Push and Pop.",
              "Implement Queue insertion and deletion."
            ]
          },
          {
            set: "Experiment Set 10",
            list: [
              "Implement Quick Sort.",
              "Implement Linear Search.",
              "Implement Binary Search."
            ]
          }
        ],
        images: [
          "/images/programming-lab-img-1.jpeg",
          "/images/programming-lab-img-2.jpeg"
        ]
      },
      { 
        name: "Data Structures Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Dev C++ IDE",
          "Code::Blocks IDE",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Write a C program to implement a Sparse Matrix.",
              "Create a Stack using an Array and perform PUSH, POP and Traversal operations.",
              "Create a Queue using an Array and perform Insertion, Deletion and Traversal.",
              "Perform Creation, Insertion, Deletion and Traversal on a Single Linked List using functions.",
              "Perform Creation, Insertion, Deletion and Traversal on a Doubly Linked List using functions.",
              "Perform Creation, Insertion and Deletion operations on a Binary Tree.",
              "Write a C program to perform Bubble Sort.",
              "Write a C program to perform Insertion Sort.",
              "Write a C program to perform Selection Sort.",
              "Write a C program to perform Quick Sort.",
              "Write a C program to perform Merge Sort.",
              "Write a C program to implement Linear Search.",
              "Write a C program to implement Binary Search."
            ]
          }
        ]
      },
      { 
        name: "Object Oriented Programming Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat (for Applet / Web support if required)",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Write a Java program to print “Hello World!”.",
              "Write a program to demonstrate data types, variables, operators, arrays, and control structures.",
              "Write a program to define a class and constructors and demonstrate constructor usage.",
              "Write a program to define class, methods, and objects and demonstrate method overloading.",
              "Write a program to demonstrate inheritance and method overriding.",
              "Write a program to demonstrate Packages in Java.",
              "Write a program to demonstrate Exception Handling.",
              "Write a program to demonstrate Multithreading.",
              "Write a program to demonstrate Applet structure and event handling.",
              "Write a program to demonstrate different Layout Managers in Java."
            ]
          }
        ]
      },
      { 
        name: "Web and Application Development Lab", 
        description: "The configuration supports the development and execution of web applications, front-end technologies, backend programming, and deployment activities required for the laboratory exercises and projects.",
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat Server (for Applet / Web Application support)",
          "Node.js and npm (for JavaScript runtime and package management)",
          "Visual Studio Code or any Code Editor",
          "Git and GitHub Desktop (for version control and collaboration)",
          "Postman (for API testing)",
          "Google Chrome / Mozilla Firefox Web Browser"
        ],
        experiments: [
          {
            set: "Introduction to Web Development with HTML, CSS, JavaScript",
            list: [
              "Intro to HTML (JSFiddle): Explore the components of an HTML file including HTML markup, CSS styling, and JavaScript code.",
              "HTML – Creating a Simple Web Page: Create a web page for the fan club of IBM founder Thomas J. Watson Sr.",
              "Unit Conversion using HTML5 Structural Elements: Create a Unit Converter web page that converts Temperature from Celsius to Fahrenheit, Weight from Kilograms to Pounds, Distance from Kilometers to Miles.",
              "CSS Basics – Styling Your Web Page: Create a webpage on the Solar System and learn to create a basic webpage, specify font family and size, use colors for styling, create borders.",
              "JavaScript: Create an HTML form that uses JavaScript to validate user input and dynamically update webpage content.",
              "JavaScript – Browser Console: Practice JavaScript concepts using the browser console.",
              "Simple Interest Calculator: Develop a calculator by modifying HTML, CSS, and JavaScript files and verifying webpage functionality.",
              "Single Page Portfolio Website: Create a portfolio website with sections About Me, Skills, Projects, Recommendations.",
              "Publish your Portfolio to GitHub Pages: Publish your portfolio website using GitHub Pages static hosting service."
            ]
          },
          {
            set: "Getting Started with Git and GitHub",
            list: [
              "GitHub Sign Up and Create Repo: Create a GitHub account, create a repository, and add files using the GitHub interface.",
              "Getting Started with Branches using Git Commands: Use Git commands in a cloud IDE to create and manage branches.",
              "Cloning and Forking GitHub Projects: Learn to fork repositories, clone them locally, create branches, commit changes, and submit pull requests.",
              "Practice Project Overview: Manage development and deployment of a shipping calculator web application using GitHub collaboration features.",
              "Practice Project Part 1 – GitHub UI: Create repository with README, license, Code of Conduct, and Contribution Guidelines.",
              "Practice Project Part 2 – Git CLI: Fork repository, edit code using Git CLI, add files, and submit pull request.",
              "Final Project Part 1 – GitHub UI: Create repository, choose license, add README, Code of Conduct, Contribution Guidelines and commit files."
            ]
          },
          {
            set: "Developing Front-End Apps with React",
            list: [
              "Content Rating Application: Create a React component that allows users to like or dislike content and track ratings.",
              "Function Component Event Planner Landing Page: Create a React landing page for an event planning organization with sections for features, testimonials, and contact form.",
              "Fetch Data Using useFetch: Use React hooks (useState, useEffect) and a custom hook to fetch and display data dynamically.",
              "Create Feedback Form for Survey: Create a feedback form with validation, confirmation dialog, and submission handling using React.",
              "Practice Project - Conference Event Planner: Develop an application for selecting conference rooms, equipment, and meals for events."
            ]
          },
          {
            set: "Developing Back-End Apps with Node.js and Express",
            list: [
              "First Server with Server-Side JavaScript: Create and run a Node.js web server and access it from a client.",
              "Promises and Callback: Create a Node.js application using promise callbacks.",
              "Async Callback Programming: Understand asynchronous callbacks and implement them in Node.js.",
              "CRUD Operations with Node.js and Express: Create a Friends List application with Create, Retrieve, Update, Delete operations and test endpoints with Postman.",
              "Express Server: Create an Express server, use middleware and JWT authentication, and render static HTML pages.",
              "Friends List Application Using Express Server with JWT: Secure CRUD operations with JWT authentication and test APIs using Postman.",
              "Book Review Application: Build a server-side book review application."
            ]
          }
        ]
      },
      { 
        name: "Database Engineering Lab", 
        description: "The objective of this laboratory is to provide hands-on experience in designing, implementing, and manipulating relational databases using SQL and PL/SQL. Students will learn database schema design, query processing, views, triggers, procedures, joins, and transaction control statements.",
        equipments: [
          "Processor : Intel Core i3 / higher",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Operating System : Windows 10 / Linux"
        ],
        software: [
          "Oracle Database / MySQL",
          "SQL Developer / MySQL Workbench",
          "Command Line SQL Client"
        ],
        experiments: [
          {
            set: "Experiment 1: Library Database",
            list: [
              "Consider the following schema: BOOK (Book_id, Title, Publisher_Name, Pub_Year), BOOK_AUTHORS (Book_id, Author_Name), PUBLISHER (Name, Address, Phone), BOOK_COPIES (Book_id, Programme_id, No_of_Copies), BOOK_LENDING (Book_id, Programme_id, Card_No, Date_Out, Due_Date), LIBRARY_PROGRAMME (Programme_id, Programme_Name, Address)",
              "Retrieve details of all books in the library including title, publisher, authors and number of copies.",
              "Get the borrowers who borrowed more than 3 books between Jan 2025 and Jun 2025.",
              "Delete a book from BOOK table and update related tables.",
              "Partition BOOK table based on publication year.",
              "Create a view showing available books and number of copies."
            ]
          },
          {
            set: "Experiment 2: College Database",
            list: [
              "Schema: STUDENT (REGNO, SName, Address, Phone, Gender), SEMSEC (SSID, Sem, Sec), CLASS (REGNO, SSID), COURSE (Subcode, Title, Sem, Credits), IAMARKS (REGNO, Subcode, SSID, Test1, Test2, Test3, FinalIA)",
              "List student details studying in 4th semester C section.",
              "Compute number of male and female students in each semester and section.",
              "Create a view for Test1 marks of student REGNO ‘1BP22CS101’.",
              "Calculate FinalIA as average of best two tests.",
              "Categorize students as Outstanding, Average, and Weak based on FinalIA."
            ]
          },
          {
            set: "Experiment 3: Order Database",
            list: [
              "Schema: SALESMAN (Salesman_id, Name, City, Commission), CUSTOMER (Customer_id, Cust_Name, City, Grade, Salesman_id), ORDERS (Ord_No, Purchase_Amt, Ord_Date, Customer_id, Salesman_id)",
              "Count customers with grades above Bangalore’s average.",
              "Find salesman with more than one customer.",
              "List salesman with and without customers using UNION.",
              "Create a view showing salesman with highest order of the day.",
              "Delete salesman with id 1000 and remove all related orders."
            ]
          },
          {
            set: "Experiment 4: Privileges and Transactions",
            list: [
              "Tables: Departments (dept_no, dept_name, dept_location), Employees (emp_id, emp_name, emp_salary, dept_no)",
              "Grant all privileges on employees table.",
              "Grant selective privileges on employees table.",
              "Revoke all privileges.",
              "Revoke selective privileges.",
              "Implement SAVEPOINT in transactions."
            ]
          },
          {
            set: "Experiment 5: SQL Joins",
            list: [
              "Display employee and department details using INNER JOIN.",
              "Display employee name and department name using LEFT OUTER JOIN.",
              "Display employee name and department name using RIGHT OUTER JOIN.",
              "Display employees with salary greater than average salary."
            ]
          },
          {
            set: "Experiment 6: Election Commission Database",
            list: [
              "Schema: CONSTITUENCY (cons_id, csname, csstate, no_of_voters), PARTY (pid, pname, psymbol), CANDIDATES (cand_id, name, age, state, phone_no), VOTER (vid, vname, vage, vaddr)",
              "Find candidates contesting in more than one constituency in different states.",
              "Display the state having maximum constituencies.",
              "Create stored procedure to insert voter if age ≥ 18.",
              "Create stored procedure to display number of voters in a constituency.",
              "Create trigger to update voter count after voter insertion."
            ]
          },
          {
            set: "Experiment 7: Airline Flight Database",
            list: [
              "Schema: FLIGHTS (flno, distance, departs, arrives), AIRCRAFT (aid, aname, cruisingrange), CERTIFIED (eid, aid), EMPLOYEES (eid, ename, salary)",
              "Find pilots certified for Boeing aircraft.",
              "Find aircraft that can fly non-stop from Delhi to Mumbai.",
              "Find pilots certified for aircraft with range greater than 3000 miles.",
              "Find employees with highest and second highest salary.",
              "Find pilots certified for largest number of aircraft.",
              "Find total salary paid to employees."
            ]
          },
          {
            set: "Experiment 8: Cursor Implementation",
            list: [
              "Schema: Employee (E_id, E_name, Age, Salary)",
              "Create a cursor to extract employee records.",
              "Declare variables, open cursor, fetch values, and close cursor."
            ]
          },
          {
            set: "Experiment 9: Stored Procedure – Student Grading",
            list: [
              "Tables: Stud_Marks (Name, Total_Marks), Result (Roll, Name, Class)",
              "Create stored procedure proc_Grade to categorize students based on marks.",
              "Use PL/SQL block to call the procedure.",
              "Classify students as Distinction, First Class, and Higher Second Class."
            ]
          },
          {
            set: "Experiment 10: PL/SQL Fine Calculation",
            list: [
              "Schema: Borrower (Rollin, Name, Date_of_Issue, Name_of_Book, Status), Fine (Roll_no, Date, Amt)",
              "Accept Roll number and book name from user.",
              "Calculate fine based on number of days after issue.",
              "Update book status after submission.",
              "Store fine details if applicable.",
              "Use control structures and exception handling."
            ]
          }
        ]
      },
      { 
        name: "Computer Organization and Architecture Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "C / C++ Compiler (GCC / Dev C++ / Turbo C)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat (for Applet / Web support if required)",
          "Hardware Simulation Tools (Logisim / Proteus)",
          "Microsoft Office / LibreOffice for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Simulation and Design of Fast Multiplication and Division Programs: Design and simulate programs that perform fast multiplication and division operations to understand arithmetic processing and algorithm efficiency in computer systems.",
              "Experiments using Hardware Training Kits: Perform experiments using hardware training kits to study the working and interfacing of devices such as floppy disk drives, dot matrix printers, and other peripheral components.",
              "Dismantling and Assembling of a Personal Computer: Dismantle and assemble a PC system to study internal components including connections, ports, chipsets, SMPS, and other hardware parts. Draw and label the block diagram of the motherboard and other relevant boards.",
              "Study Project on Hardware Technologies: Undertake a study project on various hardware technologies such as memory systems, serial bus, parallel bus, microprocessors, input/output devices, and motherboard architecture."
            ]
          }
        ]
      },
      { 
        name: "Design and Analysis of Algorithms Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "C / C++ Compiler (GCC / Dev C++ / Turbo C++)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Graph Plotting Tools (GNU Plot / Excel / Python Matplotlib for analysis)",
          "Microsoft Office / LibreOffice for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Selection Sort: Sort a given set of n integer elements using the Selection Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n. The elements can be generated using a random number generator or read from a file. Demonstrate the brute force technique and analyze its worst case, average case, and best case time complexity.",
              "Quick Sort: Sort a given set of n integer elements using the Quick Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n. Demonstrate the divide-and-conquer technique and analyze its worst case, average case, and best case time complexity.",
              "Merge Sort: Sort a given set of n integer elements using the Merge Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n. Demonstrate the divide-and-conquer technique with analysis of worst case, average case, and best case complexities.",
              "Greedy Method – Knapsack Problem: Write a program to solve the Knapsack problem using the Greedy approach and demonstrate the selection of items based on maximum profit and weight constraints.",
              "Dijkstra’s Algorithm: Write a program to find the shortest path from a given vertex to all other vertices in a weighted connected graph using Dijkstra’s algorithm.",
              "Kruskal’s Algorithm: Write a program to find the Minimum Cost Spanning Tree (MCST) of a connected undirected graph using Kruskal’s algorithm with Union-Find techniques.",
              "Prim’s Algorithm: Write a program to find the Minimum Cost Spanning Tree (MCST) of a connected undirected graph using Prim’s algorithm.",
              "Dynamic Programming Problems: Write a program to solve the All-Pairs Shortest Path problem using Floyd’s algorithm. Write a program to solve the Travelling Salesperson Problem using Dynamic Programming. Write a program to solve the 0/1 Knapsack problem using Dynamic Programming.",
              "Subset Sum Problem: Design and implement a C++/Java program to find a subset of a given set S = {S1, S2, …, Sn} of positive integers whose sum is equal to a given positive integer d. Display all possible solutions or show a message if no solution exists.",
              "Hamiltonian Cycle: Design and implement a program to find all Hamiltonian cycles in a connected undirected graph using the Backtracking technique."
            ]
          }
        ]
      },
      { name: "Advanced Programming Lab", description: "Details and resources for the Advanced Programming Lab." },
      { 
        name: "Theory of Computation Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "JFLAP (Java Formal Languages and Automata Package)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE (optional)",
          "Text Editor or IDE for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Introduction to Automata Simulation Tools: Installation and familiarization with automata simulation tools such as JFLAP. Perform basic operations such as creating and running simple finite automata.",
              "Design and Simulation of Deterministic Finite Automata (DFA): Construct DFA for given regular languages. Validate the DFA by testing various input strings for acceptance or rejection.",
              "Design and Simulation of Non-Deterministic Finite Automata (NFA): Construct NFA for various regular languages. Convert the designed NFA into an equivalent DFA and analyze the results.",
              "NFA with ε-transitions: Design an NFA with epsilon (ε) transitions for given regular expressions. Convert the ε-NFA to an equivalent DFA.",
              "Finite Automata with Output (Moore and Mealy Machines): Design Moore and Mealy machines for specific output requirements. Convert a Mealy machine into a Moore machine and vice versa.",
              "Context-Free Grammar (CFG) Design: Design CFGs for various context-free languages. Parse strings using the grammar and generate corresponding parse trees.",
              "Pushdown Automata (PDA) Simulation: Design a PDA for specific context-free languages. Simulate PDA operation using acceptance by final state and acceptance by empty stack.",
              "Turing Machine Design: Design and simulate a Turing machine to perform basic mathematical operations such as addition and subtraction. Test the Turing machine with various input strings and observe its behavior."
            ]
          }
        ]
      },
      { 
        name: "Operating Systems Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu / Fedora / CentOS)",
          "GCC Compiler for C Programming",
          "Linux Terminal / Bash Shell",
          "Android Studio for Mobile Application Development",
          "Text Editor / IDE (VS Code / Code::Blocks / Sublime Text)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Installation of Operating System: Install and configure an operating system (Linux/Windows) and study the basic system environment.",
              "Linux Administrative Commands: Practice common Linux administrative commands for file management, process monitoring, and system administration.",
              "UNIX Shell Programming: Write and execute shell scripts to automate basic system tasks and operations.",
              "Process Management using System Calls: Write programs demonstrating system calls such as fork(), exit(), getpid(), wait(), and close().",
              "Synchronization Problems: Implement classical synchronization problems such as Dining Philosophers, Cigarette Smokers, or Sleeping Barber problems.",
              "CPU Scheduling Algorithms: Simulate CPU scheduling algorithms such as First Come First Serve (FCFS), Round Robin (RR), and Shortest Job First (SJF).",
              "Banker’s Algorithm: Simulate Banker’s Algorithm for deadlock avoidance and analyze system resource allocation.",
              "Page Replacement Algorithms: Write programs to simulate page replacement algorithms such as FIFO, LRU, and Optimal.",
              "Thread Programming: Write C programs to implement multithreading and demonstrate concurrent execution.",
              "Paging Scheme Implementation: Implement a paging scheme using C programming to demonstrate memory management techniques.",
              "Memory Allocation Methods: Write C programs to implement memory allocation techniques: First Fit, Worst Fit, Best Fit.",
              "Android Programming: Develop a basic Android mobile application to understand mobile operating system concepts."
            ]
          }
        ]
      },
      { 
        name: "Machine Learning Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux (Ubuntu) – optional for development",
          "Python 3.x",
          "Anaconda Distribution",
          "Jupyter Notebook / Google Colab",
          "Python Libraries: NumPy, Pandas, Matplotlib, Seaborn",
          "Machine Learning Libraries: Scikit-learn",
          "Deep Learning Libraries: TensorFlow / PyTorch",
          "IDE: VS Code / PyCharm / Jupyter Notebook"
        ],
        experiments: [
          {
            set: "Lab Assignments",
            list: [
              "Introduction to Python Programming: Install Python and set up Anaconda. Write basic Python scripts including loops, conditional statements, and functions.",
              "Introduction to Machine Learning Libraries using Python: Overview of commonly used libraries for machine learning and data analysis.",
              "Working with NumPy, Matplotlib, and Pandas: NumPy: Perform matrix operations, loops, and conditional computations. Matplotlib: Create and customize plots and visualizations. Pandas: Load, explore, and summarize datasets.",
              "Statistical Analysis using Python: Write a Python program to find the mean, median, mode, variance, and standard deviation of a list of numbers.",
              "Overview of Machine Learning Frameworks: Study the features and applications of Scikit-learn, TensorFlow, and PyTorch libraries.",
              "Linear Regression: Implement the Linear Regression algorithm using Python.",
              "Logistic Regression: Implement the Logistic Regression algorithm for classification tasks.",
              "k-Nearest Neighbors (k-NN): Implement the k-NN algorithm and analyze classification results.",
              "Decision Tree: Implement the Decision Tree algorithm for classification or prediction.",
              "Random Forest: Implement the Random Forest algorithm and evaluate model performance.",
              "Support Vector Machine (SVM): Implement the Support Vector Machine algorithm for classification tasks.",
              "Principal Component Analysis (PCA): Implement PCA for dimensionality reduction and visualization of datasets.",
              "K-Means Clustering: Implement the K-Means clustering algorithm to group similar data points.",
              "Real-World Applications: Image Classification, Text Classification, Regression Problems (e.g., Housing Price Prediction)."
            ]
          }
        ]
      },
      { 
        name: "Project for Product Development Lab", 
        description: "The course is organized as an independent project-based learning activity conducted in teams of 4–5 students. Each team is responsible for developing a product idea from concept to a stage where it is ready for potential market launch for a specific organization or business context. The project work is supported by methodological lectures that introduce frameworks, tools, and techniques used in modern product development and innovation management. Throughout the course, the project is presented during a series of seminars where peer groups act as opponents and evaluate the progress of the project. These presentations function as “control gates” that help monitor the development process and ensure the project is progressing towards a feasible and market-ready solution. The course concludes with a final seminar presentation, where the project team presents their developed product concept and supporting analysis. Based on the evaluation and discussion, a decision is made regarding whether the product is suitable for launch or requires further development.",
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Microsoft Office / LibreOffice for documentation and presentations",
          "Project Management Tools (MS Project / Trello / Asana)",
          "Data Analysis Tools (Excel / Google Sheets / Python-based tools)",
          "Presentation Tools (PowerPoint / Google Slides)",
          "Internet and Market Research Tools"
        ],
        experiments: []
      },
      { 
        name: "Compiler Design Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu / Fedora / CentOS) for compiler tools",
          "LEX / FLEX (Lexical Analyzer Generator)",
          "YACC / Bison (Parser Generator)",
          "GCC (C Compiler)",
          "Linux Environment or Compatible Terminal Emulator (Cygwin / Ubuntu WSL)",
          "Text Editor / IDE (VS Code / Sublime Text / Vim)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Implementation of Lexical Analyzer using LEX: Tokenization of a simple program. Handling identifiers, keywords, numbers, and operators.",
              "Design of Syntax Analyzer using YACC: Parsing arithmetic expressions. Parsing conditional and looping constructs such as if-else and while statements.",
              "Removing Left Recursion and Left Factoring: Manual implementation of algorithms for eliminating left recursion and left factoring in grammars.",
              "Implementation of Predictive Parser (LL(1)): Construct parsing table and simulate the parsing process.",
              "Implementation of Shift-Reduce Parser: Simulate stack operations used in shift-reduce parsing.",
              "Syntax Directed Translation: Construction of Abstract Syntax Trees (AST) for expressions.",
              "Intermediate Code Generation: Generate three-address code for arithmetic expressions. Implement backpatching for boolean expressions and control flow statements.",
              "Design and Implementation of Symbol Table: Implement operations such as insertion, lookup, and scope management.",
              "Implementation of Type Checking and Type Conversion.",
              "Basic Code Optimization Techniques: Constant folding. Dead code elimination. Strength reduction.",
              "Simulation of Runtime Environment: Activation record structure. Stack management for function calls.",
              "Mini Project: Development of a Simple Compiler: Design a compiler for a subset of a programming language. Integrate lexical analysis, syntax analysis, and intermediate code generation phases."
            ]
          }
        ]
      },
      { 
        name: "Software Engineering Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18” TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu) – optional",
          "UML Modeling Tools (StarUML / Visual Paradigm / Lucidchart)",
          "Diagram Design Tools (Draw.io / Creately)",
          "Project Management Tools (MS Project / Trello)",
          "Testing Tools (Selenium / JUnit / TestNG or other open-source testing tools)",
          "Documentation Tools (MS Word / Google Docs)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Analysis and Identification of Suitable Process Models: Study and analyze different software process models such as Waterfall, Spiral, Agile, and Incremental models and identify the appropriate model for a given problem.",
              "Work Breakdown Structure (WBS) and Estimation: Develop Work Breakdown Structures based on Process-Based Structure, Product-Based Structure, Geographic-Based Structure, and Role-Based Structure. Perform project estimation based on the selected WBS.",
              "Requirement Modeling – Structural Modeling: Develop an Entity Relationship (ER) Diagram to represent the structural aspects of the system.",
              "Requirement Modeling – Functional Modeling: Develop Context Flow Diagrams and Data Flow Diagrams (DFD) to represent system functionality.",
              "Requirement Modeling – Behavioral Modeling: Create State Transition Diagrams to illustrate system behavior and state changes.",
              "Object-Oriented Design – Use Case and Class Models: Design UML diagrams including Use Case Diagrams and Class Diagrams for the system.",
              "Object-Oriented Design – Interaction Models: Develop interaction diagrams such as Sequence Diagrams and Communication Diagrams.",
              "Object-Oriented Design – Architectural Models: Create Package Diagrams, Component Diagrams, and Deployment Diagrams to represent system architecture.",
              "Software Testing: Design and demonstrate test cases including Functional Testing and Non-Functional Testing using open-source testing tools.",
              "Storyboarding and User Interface Design: Design storyboards and user interface models to represent the layout, navigation, and user interaction flow of the system."
            ]
          }
        ]
      }
    ],

    research: {
      paragraphs: [
        "One Sponsored R & D Project entitled “Design & Development of Real-Time Ground Behaviour Monitoring System (RT-GBMS) for Underground Metal Mines”, through the funding agency Ministry of Mines, Government of India, is currently running under the guidance of Principal Investigator Dr. Abhaya Kumar Samal, Professor and Dean (School of Computing).",
        "A Memorandum of Understanding (MoU) between NASSCOM Foundation and Trident Academy of Technology, Bhubaneswar for the thingQbator Program has been signed on 1st May 2022.",
        "The department encourages its faculty members and laboratory staff to obtain NPTEL certifications in various computer science subjects along with financial rewards for outstanding achievers."
      ],
      focusAreas: [
        { label: "Artificial Intelligence", icon: "BrainCircuit" },
        { label: "Machine Learning",       icon: "Cpu" },
        { label: "Cyber Security",         icon: "Shield" },
        { label: "Cloud Computing",        icon: "Monitor" },
        { label: "IoT",                    icon: "Layers" },
        { label: "Data Science",           icon: "BarChart3" },
      ],
    },

    facultyInnovation: {
      title: "Innovations in Teaching & Learning",
      paragraphs: [
        "The Department of Computer Science & Engineering continuously strives to adopt innovative pedagogies and modern methodologies in the teaching and learning process. Our faculty members actively develop new learning modules, create interactive content, and integrate advanced technological tools in the classrooms.",
        "From using AI-assisted evaluations to adopting project-based learning and gamified assessments, our innovative approaches help students understand complex engineering concepts better and stay engaged. We encourage open-source contributions and active learning techniques that bridge the gap between theoretical knowledge and practical applications."
      ],
      exploreLink: {
        label: "Explore More",
        href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/Innovations-by-the-Faculty-in-Teaching-and-Learning.pdf"
      }
    },

    events: [
      {
        title: 'State-Level Hackathon "Kouslav Tech Hackathon"',
        description: "Held at Kouslav Groups of Institutions, Bhubaneswar. Students Secured 3rd position.",
        image: "/images/departments/cse/1-768x576.jpeg",
        tag: "3rd Position",
      },
      {
        title: "Amity Noida – SustainInnovation Event",
        description: "A national level hackathon held in September 2025. Team MADX received remarkable achievement during the event.",
        image: "/images/departments/cse/2-768x432.jpeg",
        tag: "National Level",
      },
      {
        title: 'State-Level Hackathon "Srusti TechHack 2.0"',
        description: "Held at Srusti Academy of Management and Technology, Bhubaneswar. Team MAP-X secured 2nd Position.",
        image: "/images/departments/cse/3-768x576.jpeg",
        tag: "2nd Position",
      },
      {
        title: "BPUT Hackathon 2025 Grand Finale",
        description: "Held at BPUT Campus, Rourkela on 1st and 2nd November 2025. Our students secured 2nd Position in PS 2.",
        image: "/images/departments/cse/4-768x576.jpeg",
        tag: "2nd Position",
      },
      {
        title: "Odisha Cyber Safety Campaign Hackathon",
        description: "Along with IIT BBSR conducted on 14th November 2025. One team INNOVATEX achieved Surprise winners of cash prize Rs 10,000.",
        image: "/images/departments/cse/5-768x576.jpeg",
        tag: "Cash Prize ₹10,000",
      },
      {
        title: "The PixelCraft – UI Showdown",
        description: "Prize distribution honoring students who built innovative websites on Preparation Challenges Faced in BTech Placements using AI tools.",
        image: "/images/departments/cse/cse (1).jpg",
        tag: "Innovation",
      },
      {
        title: "Smart India Hackathon (SIH) 2024",
        description: "The flagship national-level hackathon organized by MoE, Govt. of India. Our CSE department team 'TechTitans' secured the 1st runner-up position in the Software Edition, winning a cash prize of ₹75,000 for their AI-driven healthcare solution.",
        image: "/images/departments/cse/WhatsApp-Image-2026-03-09-at-6.07.33-PM-1.jpeg",
        tag: "1st Runner-Up (₹75K)",
      },
      {
        title: "TCS CodeVita Season 11",
        description: "A global programming competition by Tata Consultancy Services. Two of our final-year students ranked among the top 100 globally, securing direct placement offers for the prestigious TCS Digital profile.",
        image: "/images/departments/cse/WhatsApp-Image-2026-03-11-at-3.41.52-PM-768x576.jpeg",
        tag: "Global Top 100",
      },
      {
        title: "Google Solution Challenge 2024",
        description: "An annual contest that invites university students to build solutions for UN Sustainable Development Goals. Our student team's project on accessible education was selected in the Top 50 Global Finalists.",
        image: "/images/departments/cse/1-768x576.jpeg",
        tag: "Top 50 Global",
      }
    ],

    eventsLink: {
      label: "View All Student Events & Achievements",
      href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/Inter-institute-events-by-students.pdf"
    },

    productDev: {
      title: "CISCO thingQbator Center",
      paragraphs: [
        "Trident is a CISCO sponsored thingQbator Center, which functions as an IoT Incubation Center established in 2018 as part of the Corporate Social Responsibility initiatives of CISCO through its partner NASSCOM Foundation. This center is a student-driven innovation hub where students of the Computer Science and Engineering Department share innovative ideas and utilize the facilities available at the center to transform their ideas into real-world products with the support and mentorship provided by the CISCO Support Center.",
        "The CSE Department also has an active Hackathon Club where students are trained for hackathons, boot camps, and innovation-based competitions. Through this platform, students regularly participate in various national-level and state-level hackathons and boot camps, bringing laurels and recognition to the department.",
      ],
      stats: [
        { stat: "95%+", label: "Average Result" },
        { stat: "80%+", label: "Placement Rate" },
        { stat: "3",    label: "Student Clubs" },
      ],
      exploreLink: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/Product-Development.pdf",
    },

    clubs: {
      description: "The department has four active clubs and chapters:",
      items: [
        {
          name: "Hackathon Club",
          icon: "Code2",
          description: "The Hackathon Club at TAT, established in 2018, serves as a dynamic incubator for budding technologists to channel their creativity and coding skills into tangible solutions. By hosting events where participants are encouraged to develop functional software or hardware projects, the club fosters an environment of innovation and practical problem-solving. These hackathons often center around specific themes, such as a particular programming language, operating system, application, API, or even cater to a certain demographic, offering a diverse range of challenges. The absence of limitations on the nature of projects encourages freedom of expression and experimentation. Ultimately, the club aims to nurture a culture of product innovation, empowering students to address real-world issues with their technical acumen and collaborative spirit.",
          links: [
            { label: "HACKIN 2023", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/HACKIN_2023.pdf" },
            { label: "HACKIN 2024", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/HACKIN_2024.pdf" },
            { label: "TRITHON 2023", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/Trithon-2023.pdf" },
            { label: "TRITHON 2025", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/Trithon-2025.pdf" },
            { label: "Visit Website", url: "https://adityanarayandas.github.io/HackathonClub/" },
            { label: "Hackathon Club Activities", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/Hackathon_Club.pdf" }
          ],
          bg: "bg-blue-50", color: "text-blue-600"
        },
        {
          name: "Brain Logic Club",
          icon: "BrainCircuit",
          description: "Brain Logic Club at Trident Academy of Technology’s School of Computing is a dynamic technical club dedicated to exploring the realms of logic, problem-solving, and innovation. Dive into AI, data science, cybersecurity, and more through workshops, coding challenges, and collaborative projects. Join us as we unravel the mysteries of technology and pave the way for a future driven by intellect and creativity. Together, let’s ignite minds and unlock endless possibilities!",
          links: [
            { label: "Brain Logic Club Activities", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/Brain_Logic_Club.pdf" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/brain-logic-tech-club-6bb2622ba/" }
          ],
          bg: "bg-purple-50", color: "text-purple-600"
        },
        {
          name: "AIML Club",
          icon: "Rocket",
          description: "The primary objective of this club is to expose the students to the world of AI and Machine Learning. This club is dedicated for the effective transfer of information in all the recently developed and emerging Artificial Intelligence and Machine Learning related fields and to give emphasis on their application.",
          links: [
            { label: "More Details", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/AIML_Club-1-1.pdf" }
          ],
          bg: "bg-emerald-50", color: "text-emerald-600"
        },
        {
          name: "IEEE Student Chapter",
          icon: "Award",
          description: "The IEEE Student Branch is dedicated to helping its members enrich their technical knowledge and expertise. The main focus of this association is to organize social and technical activities for students, create awareness about professional development, and encourage them to utilize the benefits of IEEE membership. These benefits include scholarships, competitions, conference grants, and networking opportunities that support academic and professional growth.\n\nFollowing IEEE Students’ Chapters are functional under the CSE Program:\n\nIEEE Computer Society (IEEE CS):\nThe IEEE Computer Society Student Branch Chapter at Trident Academy of Technology was formed on 28th May, 2023 with the geo-code SBC60128004B. The IEEE Computer Society provides several recognition opportunities for students participating in chapter activities, such as the Outstanding Chapter Award and the prestigious Richard E. Merwin Scholarship. These recognitions are awarded to students who actively contribute to IEEE and IEEE Computer Society activities while demonstrating strong academic performance and leadership potential.\n\nIEEE Geoscience and Remote Sensing Society (IEEE GRSS):\nThe IEEE Geoscience and Remote Sensing Society Student Branch Chapter at Trident Academy of Technology was established on 28th May, 2023 with the geo-code SBC60128004A. This chapter focuses on promoting knowledge and research activities related to geoscience, remote sensing technologies, and their applications in environmental monitoring, earth observation, and data analysis.",
          links: [
            { label: "IEEE Student Chapter Details", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/IEEE_Student_Chapter.pdf" }
          ],
          bg: "bg-sky-50", color: "text-sky-600"
        },
        {
          name: "CSI Student Chapter",
          icon: "Users",
          description: "In keeping with its tradition of taking the lead in student-oriented initiatives, Trident Academy of Technology has an active CSI Student Chapter operating under the Department of Computer Science and Engineering. The CSI chapter regularly organizes various activities such as inter-department programming competitions, CSI Day celebrations, workshops, and technical events. These activities aim to enhance students’ technical abilities and promote awareness of emerging technologies.",
          links: [],
          bg: "bg-indigo-50", color: "text-indigo-600"
        },
        {
          name: "ACM Student Chapter",
          icon: "Monitor",
          description: "The ACM Student Chapter serves as a dynamic platform for students interested in computing and information technology. ACM student chapters across the world function as hubs of technical activity for ACM members and the broader computing community. Through seminars, workshops, coding competitions, and knowledge-sharing sessions, the chapter encourages students to explore advanced computing concepts and engage with the global computing community.",
          links: [
            { label: "ACM Annual Report", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/2024-25Trident-Acm-Student-Chapter-Annual-Report.pdf" }
          ],
          bg: "bg-teal-50", color: "text-teal-600"
        }
      ]
    },

    publications: {
      description: "Explore the research publications and patents by our faculty and students.",
      items: [
        {
          name: "Publications",
          icon: "FileText",
          description: "Details about the recent publications from our department are being updated.",
          links: [
            { label: "View Publications List", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/publication-final-5.4.2541.pdf" }
          ],
          bg: "bg-blue-50", color: "text-blue-600"
        },
        {
          name: "Patents",
          icon: "Award",
          description: "Details about the recent patents filed and granted to our department are being updated.",
          links: [
            { label: "View Patents List", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/Patents-file-list-2.pdf" }
          ],
          bg: "bg-purple-50", color: "text-purple-600"
        }
      ]
    },

    placement: {
      description: "The academic performance of the department has been consistently impressive, maintaining an average result of 95% and above for the past few years. Along with strong academic performance, the department has also achieved remarkable success in campus placements. Over the last three years, the overall placement percentage has remained around 80%.",
      stats: [
        { value: "95%+",  label: "Avg. Results",    color: "from-emerald-500 to-emerald-600" },
        { value: "80%+",  label: "Placement Rate",   color: "from-[#1B4D8E] to-[#283B91]" },
        { value: "320+",  label: "Companies",        color: "from-amber-500 to-orange-500" },
        { value: "₹12L",  label: "Highest Package",  color: "from-purple-500 to-indigo-600" },
      ],
      buttons: [
        { label: "2024-25", href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/CSE-PLACEMENT-2024-25.pdf" },
        { label: "2023-24", href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/CSE-PLACEMENT-2023-24.pdf" },
        { label: "2022-23", href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/Placement-NBA-CSE-2022-23.pdf" },
        { label: "2021-22", href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/Placement-NBA-CSE-2021-22.pdf" }
      ],
      ctaHref: "https://placement-tat.tekkzy.com",
      ctaLabel: "View Full Placement Report",
    },
  },

  "computer-science-information-technology": {
    name: "Computer Science & Information Technology",

    meta: {
      title: "Computer Science & Information Technology — Trident Academy of Technology",
      description: "Department of Computer Science & Information Technology at Trident Academy of Technology.",
    },

    theme: {
      primary: "text-[#0891B2]",
      bgPrimary: "bg-[#0891B2]",
      borderPrimary: "border-[#0891B2]",
      borderPrimary10: "border-[#0891B2]/10",
      bgPrimary10: "bg-[#0891B2]/10",
      hoverTextPrimary: "hover:text-[#0891B2]",
      hoverBgPrimary: "hover:bg-[#0891B2]",
      shadowPrimary20: "shadow-[#0891B2]/20",
      accent: "text-[#E5AA3E]",
      bgAccent: "bg-[#E5AA3E]",
      secondary: "text-[#0E7490]",
      gradient: "from-[#164E63]/95 via-[#155E75]/90 to-[#0E7490]/80",
      btn: "bg-[#06B6D4]",
      btnHover: "hover:bg-[#0891B2]",
    },

    hero: {
      titleLine1: "Computer Science &",
      titleLine2: "Information Technology",
      subtitle: "Focused on the application of computing technologies across diverse industries.",
      image: "/images/departments/cse/4-768x576.jpeg",
      breadcrumb: "Computer Science & Information Technology",
      stats: [
        { label: "B.Tech Seats", value: "60" },
      ],
    },

    sidebar: {
      heading: "COMPUTER SCIENCE &\nINFORMATION TECHNOLOGY",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen", href: "/computer-science-information-technology/overview" },
        { id: "syllabus", label: "Syllabus", icon: "Layers", href: "/computer-science-information-technology/syllabus" },
        { id: "faculties", label: "Faculty", icon: "Users", href: "/computer-science-information-technology/faculties" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker", href: "/computer-science-information-technology/laboratories" },
        { id: "question-bank", label: "Question Bank", icon: "FileText", href: "/computer-science-information-technology/question-bank" },
      ],
    },

    overview: {
      paragraphs: [
        "B.Tech in Computer Science & Information Technology (B.Tech - CSIT) is an undergraduate program focused on the application of computing technologies across diverse industries. Information Technology deals with the use of computers and related systems to store, retrieve, process, transmit, and manage information. While the program has a strong foundation in computing, it differs from traditional B.Tech (CSE) and B.Tech (CST) by also emphasising management principles and information systems. Thus, whereas Computer Science primarily focuses on the scientific and theoretical aspects of computing, Information Technology concentrates more on the business, communication, and application-oriented use of technology, especially in areas such as e-commerce, e-business, and enterprise applications. The duration of the course is four years, and the whole syllabus is distributed over eight semesters.",
        "The department was established with an intake capacity of 60 students, which continues to date. It is supported by a strong team of faculty members, many of whom hold M.Tech and PhD qualifications. We provide a strong academic and research environment. Our faculty actively engages in research and quality teaching, enabling students to work on real-world problems and meaningful projects. The department CSIT consistently achieves excellent placement records.",
        "To keep pace with the evolving needs of industry and academia, the Department of CSIT currently offers the following program with well-defined objectives and a unique academic philosophy:"
      ],
      tabs: [
        {
          id: 'vision',
          label: 'Vision',
          content: 'To be a centre of excellence in Computer Science Engineering by imparting quality education, fostering innovation and cultivating ethical professionals to meet the evolving global challenges.',
        },
        {
          id: 'mission',
          label: 'Mission',
          content: 'M1. Provide quality education to build students strong expertise in software development, profound sense of hardware design and problem-solving skills to address global needs through innovation.\n\nM2. Foster well-disciplined leadership quality, a strong sense of responsibility and ethical values for impactful professional growth.\n\nM3. Encourage innovation, research and adaptability to tackle global challenges with sustainable technological proficiency.',
        },
        {
          id: 'peo',
          label: 'PEO',
          content: 'PEO-1. To develop competent computer professionals to solve computer science related problems through their strong problem-solving skills using efficient algorithms.\nKeyword: Problem-solving skills.\n\nPEO-2. To develop strong leadership qualities in students, enhancing their skillsets for solving real-world problems.\nKeywords: Leadership Quality.\n\nPEO-3. To develop students as ethical engineers with strong managerial skill, communication skill, interpersonal skills, self-esteem, and stress management for future leadership.\nKeywords: Ethical Ability.\n\nPEO-4. To motivate students to pursue higher studies, research & entrepreneurship in emerging technologies with expert guidance from industry and academia.\nKeywords: Motivation for Higher studies, Research & Entrepreneurship.',
        },
        {
          id: 'po',
          label: 'PO',
          content: '1. Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.\n\n2. Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.\n\n3. Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate considerations for the public health and safety and the cultural, societal and environmental considerations.\n\n4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.\n\n5. Modern tool Usage: Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.\n\n6. The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.\n\n7. Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of and need for sustainable development.\n\n8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.\n\n9. Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams and in multidisciplinary settings.\n\n10. Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.\n\n11. Project Management and Finance: Demonstrate knowledge and understanding of engineering and management principle and apply these to one\'s own work as member and leader in team to manage projects and in multidisciplinary environments.\n\n12. Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
        },
        {
          id: 'pso',
          label: 'PSO',
          content: 'PSO1: Enterprise Software Development – Design, develop, test, and maintain software systems for enterprises and specialized domains, aligning with industry needs.\n\nPSO2: Advanced Computing Expertise – Gain proficiency in advanced computing and programming to build intelligent and efficient solutions.\n\nPSO3: Legacy System Enhancement – Maintain, optimize, and modernize legacy computing systems for sustained usability and integration.',
        },
        {
          id: 'lo',
          label: 'LO',
          content: 'Learning Outcomes (LOs)\n\nLO-1. Acquire knowledge of advanced computing skill and programming expertise.\n\nLO-2. Capability to design, build, evaluate, and sustain software systems for business and enterprise applications.\n\nLO-3. Ability to develop, test and maintain Software Systems for Specific Application Domain and as per the industry need.\n\nLO-4. Develop expertise to maintain and extend usability of legacy computer systems.',
        }
      ],
      images: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg"
      ],
      gallery: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg",
        "/images/departments/cse/4-768x576.jpeg",
        "/images/departments/cse/5-768x576.jpeg",
        "/images/departments/cse/cse (1).jpg",
        "/images/departments/cse/WhatsApp-Image-2026-03-09-at-6.07.33-PM-1.jpeg",
        "/images/departments/cse/WhatsApp-Image-2026-03-11-at-3.41.52-PM-768x576.jpeg"
      ]
    },

    questionBank: {
      years: [
        { id: "1st-year", label: "1st Year", color: "bg-[#B894B7]", subjects: [] },
        { id: "2nd-year", label: "2nd Year", color: "bg-[#5B50C2]", subjects: [] },
        { 
          id: "3rd-year", label: "3rd Year", color: "bg-[#D18E47]", 
          subjects: [
            { name: "DATABASE MANAGEMENT SYSTEMS", href: "#" },
            { name: "OPERATING SYSTEM", href: "#" },
            { name: "COMPILER DESIGN", href: "#" },
            { name: "FLAT-SET-1", href: "#" },
            { name: "FLAT SET-2", href: "#" },
            { name: "COMPUTER GRAPHICS", href: "#" },
            { name: "DATA COMMUNICATION", href: "#" }
          ] 
        },
        { id: "4th-year", label: "4th Year", color: "bg-[#C3594B]", subjects: [] },
      ],
      previousSemester: {
        label: "Previous Semester Questions",
        href: "https://drive.google.com/drive/folders/1VS1tfkMdzFSkDXX0NKdquVs8iGugrFpW"
      }
    },

    syllabus: [
      {
        program: "B.TECH.",
        years: [
          { title: "SYLLABUS FOR FIRST YEAR", buttons: [{ label: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS", href: "#" }] },
          { title: "SYLLABUS FOR SECOND YEAR", buttons: [{ label: "VIEW / DOWNLOAD 3RD SEM SYLLABUS", href: "#" }, { label: "VIEW / DOWNLOAD 4TH SEM SYLLABUS", href: "#" }] },
          { title: "SYLLABUS FOR THIRD YEAR", buttons: [{ label: "VIEW / DOWNLOAD 5TH SEM SYLLABUS", href: "#" }, { label: "VIEW / DOWNLOAD 6TH SEM SYLLABUS", href: "#" }] },
          { title: "SYLLABUS FOR FOURTH YEAR", buttons: [{ label: "VIEW / DOWNLOAD 4TH YEAR SYLLABUS", href: "#" }] }
        ]
      }
    ],

    programmes: [
      {
        title: "B.Tech in Computer Science & Information Technology (CSIT)",
        seats: "60 Seats",
        details: "4-Year Full-Time Programme",
        sections: [
          { text: "The B.Tech (CSIT) program is designed to prepare students for successful and future-ready careers in the rapidly evolving field of Information Technology. As one of the most dynamic and impactful engineering domains, IT continues to drive innovation across industries worldwide, offering vast opportunities for growth and advancement." },
          { text: "The field of Information Technology extends beyond computers to include telecommunications, networking, data management, cybersecurity, cloud infrastructure, and secure information systems. Through this program, students gain comprehensive exposure to infrastructure development, data storage and processing, system integration, networking technologies, and secure digital communication." },
          { text: "The curriculum is carefully structured to provide a strong theoretical foundation combined with practical, industry-oriented skills. Core subjects include Database Management Systems, Java Programming, Information Security, Algorithm Analysis, Computer Networks, ERP, E-commerce, Cloud Computing, Software Engineering, Operating Systems, and other emerging technologies. The program emphasises hands-on learning, problem-solving, and real-world applications to ensure students are industry-ready." },
          { text: "With global relevance and diverse career pathways, the IT sector offers opportunities in leading multinational companies, startups, research organisations, and higher education institutions worldwide. The B.Tech (CSIT) program not only enhances technical expertise but also fosters innovation, critical thinking, communication skills, and professional growth— empowering students to build rewarding and sustainable careers in the technology-driven world." }
        ]
      }
    ],

    laboratories: [
      { 
        name: "Programming Lab", 
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Dev C++ IDE", "Code::Blocks IDE", "Windows 10 Education Operating System"],
        experiments: [
          { set: "Experiment Set 1", list: ["Write a program to print your Bio-data.", "Write a program in C to test the arithmetic operators.", "Write a program to find Simple Interest and Compound Interest."] },
          { set: "Experiment Set 2", list: ["Test logical, bitwise, unary and ternary operators.", "Check whether a given year is a leap year.", "Calculate salary statement of an employee using basic pay, DA, HRA and TA."] },
          { set: "Experiment Set 3", list: ["Enter marks of 4 subjects and calculate Total, Aggregate %, and Grade.", "Display the day of the week using switch case.", "Menu driven program to find total, average, smallest and largest."] },
          { set: "Experiment Set 4", list: ["Check whether a number is palindrome.", "Generate prime numbers between two numbers.", "Print a pyramid star pattern."] },
          { set: "Experiment Set 5", list: ["Find largest, smallest, sum and average of an array.", "Sort an array in ascending order.", "Insert an element in an array at a desired position."] },
          { set: "Experiment Set 6", list: ["Swap two variables using function.", "Print Fibonacci series using function.", "Multiply two matrices using functions."] },
          { set: "Experiment Set 7", list: ["Find GCD using recursion.", "Store and display student data using structure.", "Check string palindrome using pointer."] },
          { set: "Experiment Set 8", list: ["Find smallest element and position using pointer.", "Implement realloc() and free().", "Demonstrate Dynamic Memory Allocation."] },
          { set: "Experiment Set 9", list: ["Implement Linked List insertion and deletion.", "Implement Stack Push and Pop.", "Implement Queue insertion and deletion."] },
          { set: "Experiment Set 10", list: ["Implement Quick Sort.", "Implement Linear Search.", "Implement Binary Search."] }
        ],
        images: ["/images/programming-lab-img-1.jpeg", "/images/programming-lab-img-2.jpeg"]
      },
      { 
        name: "Data Structures Lab", 
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Dev C++ IDE", "Code::Blocks IDE", "Windows 10 Education Operating System"],
        experiments: [{ set: "List of Experiments", list: ["Write a C program to implement a Sparse Matrix.", "Create a Stack using an Array and perform PUSH, POP and Traversal operations.", "Create a Queue using an Array and perform Insertion, Deletion and Traversal.", "Perform Creation, Insertion, Deletion and Traversal on a Single Linked List using functions.", "Perform Creation, Insertion, Deletion and Traversal on a Doubly Linked List using functions.", "Perform Creation, Insertion and Deletion operations on a Binary Tree.", "Write a C program to perform Bubble Sort.", "Write a C program to perform Insertion Sort.", "Write a C program to perform Selection Sort.", "Write a C program to perform Quick Sort.", "Write a C program to perform Merge Sort.", "Write a C program to implement Linear Search.", "Write a C program to implement Binary Search."] }]
      },
      { 
        name: "Object Oriented Programming Lab", 
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Java Development Kit (JDK)", "NetBeans IDE / Eclipse IDE", "Apache Tomcat (for Applet / Web support if required)", "Windows 10 Education Operating System"],
        experiments: [{ set: "List of Experiments", list: ["Write a Java program to print \u201CHello World!\u201D.", "Write a program to demonstrate data types, variables, operators, arrays, and control structures.", "Write a program to define a class and constructors and demonstrate constructor usage.", "Write a program to define class, methods, and objects and demonstrate method overloading.", "Write a program to demonstrate inheritance and method overriding.", "Write a program to demonstrate Packages in Java.", "Write a program to demonstrate Exception Handling.", "Write a program to demonstrate Multithreading.", "Write a program to demonstrate Applet structure and event handling.", "Write a program to demonstrate different Layout Managers in Java."] }]
      },
      { 
        name: "Web and Application Development Lab", 
        description: "The configuration supports the development and execution of web applications, front-end technologies, backend programming, and deployment activities required for the laboratory exercises and projects.",
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Windows 10 Education Operating System", "Java Development Kit (JDK)", "NetBeans IDE / Eclipse IDE", "Apache Tomcat Server (for Applet / Web Application support)", "Node.js and npm (for JavaScript runtime and package management)", "Visual Studio Code or any Code Editor", "Git and GitHub Desktop (for version control and collaboration)", "Postman (for API testing)", "Google Chrome / Mozilla Firefox Web Browser"],
        experiments: [
          { set: "Introduction to Web Development with HTML, CSS, JavaScript", list: ["Intro to HTML (JSFiddle): Explore the components of an HTML file including HTML markup, CSS styling, and JavaScript code.", "HTML \u2013 Creating a Simple Web Page: Create a web page for the fan club of IBM founder Thomas J. Watson Sr.", "Unit Conversion using HTML5 Structural Elements: Create a Unit Converter web page.", "CSS Basics \u2013 Styling Your Web Page: Create a webpage on the Solar System.", "JavaScript: Create an HTML form that uses JavaScript to validate user input.", "JavaScript \u2013 Browser Console: Practice JavaScript concepts using the browser console.", "Simple Interest Calculator: Develop a calculator by modifying HTML, CSS, and JavaScript files.", "Single Page Portfolio Website: Create a portfolio website with sections About Me, Skills, Projects, Recommendations.", "Publish your Portfolio to GitHub Pages."] },
          { set: "Getting Started with Git and GitHub", list: ["GitHub Sign Up and Create Repo.", "Getting Started with Branches using Git Commands.", "Cloning and Forking GitHub Projects.", "Practice Project Overview: Manage development and deployment of a shipping calculator web application.", "Practice Project Part 1 \u2013 GitHub UI.", "Practice Project Part 2 \u2013 Git CLI.", "Final Project Part 1 \u2013 GitHub UI."] },
          { set: "Developing Front-End Apps with React", list: ["Content Rating Application.", "Function Component Event Planner Landing Page.", "Fetch Data Using useFetch.", "Create Feedback Form for Survey.", "Practice Project - Conference Event Planner."] },
          { set: "Developing Back-End Apps with Node.js and Express", list: ["First Server with Server-Side JavaScript.", "Promises and Callback.", "Async Callback Programming.", "CRUD Operations with Node.js and Express.", "Express Server.", "Friends List Application Using Express Server with JWT.", "Book Review Application."] }
        ]
      },
      { 
        name: "Database Engineering Lab", 
        description: "The objective of this laboratory is to provide hands-on experience in designing, implementing, and manipulating relational databases using SQL and PL/SQL.",
        equipments: ["Processor : Intel Core i3 / higher", "RAM : 8 GB", "Storage : 256 GB SSD", "Operating System : Windows 10 / Linux"],
        software: ["Oracle Database / MySQL", "SQL Developer / MySQL Workbench", "Command Line SQL Client"],
        experiments: [
          { set: "Experiment 1: Library Database", list: ["Consider the following schema: BOOK, BOOK_AUTHORS, PUBLISHER, BOOK_COPIES, BOOK_LENDING, LIBRARY_PROGRAMME.", "Retrieve details of all books.", "Get borrowers who borrowed more than 3 books.", "Delete a book and update related tables.", "Partition BOOK table based on publication year.", "Create a view showing available books."] },
          { set: "Experiment 2: College Database", list: ["Schema: STUDENT, SEMSEC, CLASS, COURSE, IAMARKS.", "List student details in 4th semester C section.", "Compute male and female students per semester.", "Create a view for Test1 marks.", "Calculate FinalIA as average of best two tests.", "Categorize students based on FinalIA."] },
          { set: "Experiment 3: Order Database", list: ["Schema: SALESMAN, CUSTOMER, ORDERS.", "Count customers with grades above Bangalore's average.", "Find salesman with more than one customer.", "List salesman with UNION.", "Create a view for highest order.", "Delete salesman and related orders."] },
          { set: "Experiment 4: Privileges and Transactions", list: ["Grant all privileges.", "Grant selective privileges.", "Revoke all privileges.", "Revoke selective privileges.", "Implement SAVEPOINT."] },
          { set: "Experiment 5: SQL Joins", list: ["INNER JOIN.", "LEFT OUTER JOIN.", "RIGHT OUTER JOIN.", "Salary greater than average."] },
          { set: "Experiment 6: Election Commission Database", list: ["Schema: CONSTITUENCY, PARTY, CANDIDATES, VOTER.", "Find candidates in multiple constituencies.", "State with maximum constituencies.", "Stored procedure for voter insertion.", "Stored procedure for voter count.", "Trigger for voter count update."] },
          { set: "Experiment 7: Airline Flight Database", list: ["Schema: FLIGHTS, AIRCRAFT, CERTIFIED, EMPLOYEES.", "Pilots certified for Boeing.", "Aircraft for Delhi to Mumbai.", "Range greater than 3000 miles.", "Highest and second highest salary.", "Pilots certified for most aircraft.", "Total salary."] },
          { set: "Experiment 8: Cursor Implementation", list: ["Schema: Employee.", "Create cursor.", "Declare, open, fetch, close cursor."] },
          { set: "Experiment 9: Stored Procedure \u2013 Student Grading", list: ["Tables: Stud_Marks, Result.", "Create stored procedure proc_Grade.", "Use PL/SQL block.", "Classify as Distinction, First Class, Higher Second Class."] },
          { set: "Experiment 10: PL/SQL Fine Calculation", list: ["Schema: Borrower, Fine.", "Accept Roll number and book name.", "Calculate fine.", "Update book status.", "Store fine details.", "Use control structures and exception handling."] }
        ]
      },
      { 
        name: "Computer Organization and Architecture Lab", 
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Windows 10 Education Operating System", "C / C++ Compiler (GCC / Dev C++ / Turbo C)", "Java Development Kit (JDK)", "NetBeans IDE / Eclipse IDE", "Hardware Simulation Tools (Logisim / Proteus)", "Microsoft Office / LibreOffice for documentation"],
        experiments: [{ set: "List of Experiments", list: ["Simulation and Design of Fast Multiplication and Division Programs.", "Experiments using Hardware Training Kits.", "Dismantling and Assembling of a Personal Computer.", "Study Project on Hardware Technologies."] }]
      },
      { 
        name: "Design and Analysis of Algorithms Lab", 
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Windows 10 Education Operating System", "C / C++ Compiler (GCC / Dev C++ / Turbo C++)", "Java Development Kit (JDK)", "NetBeans IDE / Eclipse IDE", "Graph Plotting Tools (GNU Plot / Excel / Python Matplotlib)", "Microsoft Office / LibreOffice for documentation"],
        experiments: [{ set: "List of Experiments", list: ["Selection Sort.", "Quick Sort.", "Merge Sort.", "Greedy Method \u2013 Knapsack Problem.", "Dijkstra\u2019s Algorithm.", "Kruskal\u2019s Algorithm.", "Prim\u2019s Algorithm.", "Dynamic Programming Problems.", "Subset Sum Problem.", "Hamiltonian Cycle."] }]
      },
      { name: "Advanced Programming Lab", description: "Details and resources for the Advanced Programming Lab." },
      { 
        name: "Theory of Computation Lab", 
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Windows 10 Education Operating System", "JFLAP (Java Formal Languages and Automata Package)", "Java Development Kit (JDK)", "NetBeans IDE / Eclipse IDE (optional)", "Text Editor or IDE for documentation"],
        experiments: [{ set: "List of Experiments", list: ["Introduction to Automata Simulation Tools.", "Design and Simulation of DFA.", "Design and Simulation of NFA.", "NFA with \u03B5-transitions.", "Finite Automata with Output (Moore and Mealy Machines).", "Context-Free Grammar (CFG) Design.", "Pushdown Automata (PDA) Simulation.", "Turing Machine Design."] }]
      },
      { 
        name: "Operating Systems Lab", 
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Windows 10 Education Operating System", "Linux Distribution (Ubuntu / Fedora / CentOS)", "GCC Compiler for C Programming", "Linux Terminal / Bash Shell", "Android Studio for Mobile Application Development", "Text Editor / IDE (VS Code / Code::Blocks / Sublime Text)"],
        experiments: [{ set: "List of Experiments", list: ["Installation of Operating System.", "Linux Administrative Commands.", "UNIX Shell Programming.", "Process Management using System Calls.", "Synchronization Problems.", "CPU Scheduling Algorithms.", "Banker\u2019s Algorithm.", "Page Replacement Algorithms.", "Thread Programming.", "Paging Scheme Implementation.", "Memory Allocation Methods.", "Android Programming."] }]
      },
      { 
        name: "Machine Learning Lab", 
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Windows 10 Education Operating System", "Linux (Ubuntu) \u2013 optional", "Python 3.x", "Anaconda Distribution", "Jupyter Notebook / Google Colab", "Python Libraries: NumPy, Pandas, Matplotlib, Seaborn", "Machine Learning Libraries: Scikit-learn", "Deep Learning Libraries: TensorFlow / PyTorch", "IDE: VS Code / PyCharm / Jupyter Notebook"],
        experiments: [{ set: "Lab Assignments", list: ["Introduction to Python Programming.", "Introduction to Machine Learning Libraries.", "Working with NumPy, Matplotlib, and Pandas.", "Statistical Analysis using Python.", "Overview of Machine Learning Frameworks.", "Linear Regression.", "Logistic Regression.", "k-Nearest Neighbors (k-NN).", "Decision Tree.", "Random Forest.", "Support Vector Machine (SVM).", "Principal Component Analysis (PCA).", "K-Means Clustering.", "Real-World Applications."] }]
      },
      { 
        name: "Project for Product Development Lab", 
        description: "The course is organized as an independent project-based learning activity conducted in teams of 4\u20135 students.",
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Windows 10 Education Operating System", "Microsoft Office / LibreOffice for documentation and presentations", "Project Management Tools (MS Project / Trello / Asana)", "Data Analysis Tools (Excel / Google Sheets / Python-based tools)", "Presentation Tools (PowerPoint / Google Slides)", "Internet and Market Research Tools"],
        experiments: []
      },
      { 
        name: "Compiler Design Lab", 
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Windows 10 Education Operating System", "Linux Distribution (Ubuntu / Fedora / CentOS)", "LEX / FLEX (Lexical Analyzer Generator)", "YACC / Bison (Parser Generator)", "GCC (C Compiler)", "Linux Environment or Compatible Terminal Emulator", "Text Editor / IDE (VS Code / Sublime Text / Vim)"],
        experiments: [{ set: "List of Experiments", list: ["Implementation of Lexical Analyzer using LEX.", "Design of Syntax Analyzer using YACC.", "Removing Left Recursion and Left Factoring.", "Implementation of Predictive Parser (LL(1)).", "Implementation of Shift-Reduce Parser.", "Syntax Directed Translation.", "Intermediate Code Generation.", "Design and Implementation of Symbol Table.", "Implementation of Type Checking and Type Conversion.", "Basic Code Optimization Techniques.", "Simulation of Runtime Environment.", "Mini Project: Development of a Simple Compiler."] }]
      },
      { 
        name: "Software Engineering Lab", 
        equipments: ["Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz", "RAM : 8 GB", "Storage : 256 GB SSD", "Monitor : 18\u201D TFT"],
        software: ["Windows 10 Education Operating System", "Linux Distribution (Ubuntu) \u2013 optional", "UML Modeling Tools (StarUML / Visual Paradigm / Lucidchart)", "Diagram Design Tools (Draw.io / Creately)", "Project Management Tools (MS Project / Trello)", "Testing Tools (Selenium / JUnit / TestNG)", "Documentation Tools (MS Word / Google Docs)"],
        experiments: [{ set: "List of Experiments", list: ["Analysis and Identification of Suitable Process Models.", "Work Breakdown Structure (WBS) and Estimation.", "Requirement Modeling \u2013 Structural Modeling.", "Requirement Modeling \u2013 Functional Modeling.", "Requirement Modeling \u2013 Behavioral Modeling.", "Object-Oriented Design \u2013 Use Case and Class Models.", "Object-Oriented Design \u2013 Interaction Models.", "Object-Oriented Design \u2013 Architectural Models.", "Software Testing.", "Storyboarding and User Interface Design."] }]
      }
    ],

    faculties: [
      { name: "Mr.Prasanta Kumar Parida", designation: "Assistant Professor", department: "CS-IT", qualification: "M.Tech", appointmentType: "Regular" },
      { name: "Mr. Biswajit Sarangi", designation: "Assistant Professor", department: "CS-IT", qualification: "M.Tech", appointmentType: "Regular" },
      { name: "Mr.Srikanta Barick", designation: "Assistant Professor", department: "CS-IT", qualification: "M.Tech", appointmentType: "Regular" },
      { name: "Mr.Nikhil Lenka", designation: "Assistant Professor", department: "CS-IT", qualification: "M.Tech", appointmentType: "Regular" },
      { name: "Dr.Pradipta Kumar Mishra", designation: "Associate professor", department: "CS-IT", qualification: "Ph.D", appointmentType: "Regular" },
      { name: "Mr.Santosh kumar mohapatra", designation: "Assistant Professor", department: "CS-IT", qualification: "M.Tech", appointmentType: "Regular" },
      { name: "Mr.Alok Ranjan Nayak", designation: "Assistant Professor", department: "CS-IT", qualification: "M.Sc", appointmentType: "Regular" }
    ]
  },

  "computer-science-technology": {
    name: "Computer Science and Technology",

    meta: {
      title: "Computer Science and Technology — Trident Academy of Technology",
      description: "Department of Computer Science and Technology at Trident Academy of Technology.",
    },

    theme: {
      primary: "text-[#EA580C]",
      bgPrimary: "bg-[#EA580C]",
      borderPrimary: "border-[#EA580C]",
      borderPrimary10: "border-[#EA580C]/10",
      bgPrimary10: "bg-[#EA580C]/10",
      hoverTextPrimary: "hover:text-[#EA580C]",
      hoverBgPrimary: "hover:bg-[#EA580C]",
      shadowPrimary20: "shadow-[#EA580C]/20",
      accent: "text-[#E5AA3E]",
      bgAccent: "bg-[#E5AA3E]",
      secondary: "text-[#C2410C]",
      gradient: "from-[#7C2D12]/95 via-[#9A3412]/90 to-[#C2410C]/80",
      btn: "bg-[#F97316]",
      btnHover: "hover:bg-[#EA580C]",
    },

    hero: {
      titleLine1: "Computer Science &",
      titleLine2: "Technology",
      subtitle: "Preparing students for future-ready careers in the rapidly evolving field of technology.",
      image: "/images/departments/cse/4-768x576.jpeg",
      breadcrumb: "Computer Science and Technology",
      stats: [
        { label: "B.Tech Seats", value: "120" },
      ],
    },

    sidebar: {
      heading: "COMPUTER SCIENCE &\nTECHNOLOGY",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen", href: "/computer-science-technology/overview" },
        { id: "syllabus", label: "Syllabus", icon: "Layers", href: "/computer-science-technology/syllabus" },
        { id: "faculties", label: "Faculty", icon: "Users", href: "/computer-science-technology/faculties" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker", href: "/computer-science-technology/laboratories" },
        { id: "question-bank", label: "Question Bank", icon: "FileText", href: "/computer-science-technology/question-bank" },
      ],
    },

    overview: {
      paragraphs: [
        "The B.Tech in Computer Science and Technology (CST) program is designed to equip students with a robust foundation in computer science and the practical skills necessary to navigate and shape the future of technology.",
        "With an emphasis on modern computing paradigms, the department offers a comprehensive curriculum that covers both foundational concepts and emerging technologies. Our students benefit from state-of-the-art laboratories and a faculty dedicated to fostering innovation and excellence.",
        "Initially, the Department was started with an intake capacity of 60 and subsequently escalated its intake capacity to meet the global requirement. The department has a good number of faculty members with M.Tech/Ph.D qualification.",
        "In order to cope up with the changing need of the industry as well as academia, the Department of CST at present offers following programme variants with unique philosophies and objectives:",
      ],
      tabs: [
        {
          id: 'vision',
          label: 'Vision',
          content: 'To be a centre of excellence in Computer Science Engineering by imparting quality education, fostering innovation and cultivating ethical professionals to meet the evolving global challenges.',
        },
        {
          id: 'mission',
          label: 'Mission',
          content: 'M1. Provide quality education to build students strong expertise in software development, profound sense of hardware design and problem-solving skills to address global needs through innovation.\n\nM2. Foster well-disciplined leadership quality, a strong sense of responsibility and ethical values for impactful professional growth.\n\nM3. Encourage innovation, research and adaptability to tackle global challenges with sustainable technological proficiency.',
        },
        {
          id: 'peo',
          label: 'PEO',
          content: 'PEO-1. To develop competent computer professionals to solve computer science related problems through their strong problem-solving skills using efficient algorithms.\nKeyword: Problem-solving skills.\n\nPEO-2. To develop strong leadership qualities in students, enhancing their skillsets for solving real-world problems.\nKeywords: Leadership Quality.\n\nPEO-3. To develop students as ethical engineers with strong managerial skill, communication skill, interpersonal skills, self-esteem, and stress management for future leadership.\nKeywords: Ethical Ability.\n\nPEO-4. To motivate students to pursue higher studies, research & entrepreneurship in emerging technologies with expert guidance from industry and academia.\nKeywords: Motivation for Higher studies, Research & Entrepreneurship.',
        },
        {
          id: 'po',
          label: 'PO',
          content: '1. Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.\n\n2. Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.\n\n3. Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate considerations for the public health and safety and the cultural, societal and environmental considerations.\n\n4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.\n\n5. Modern tool Usage: Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.\n\n6. The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.\n\n7. Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of and need for sustainable development.\n\n8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.\n\n9. Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams and in multidisciplinary settings.\n\n10. Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.\n\n11. Project Management and Finance: Demonstrate knowledge and understanding of engineering and management principle and apply these to one\'s own work as member and leader in team to manage projects and in multidisciplinary environments.\n\n12. Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
        },
        {
          id: 'pso',
          label: 'PSO',
          content: 'PSO1: Enterprise Software Development – Design, develop, test, and maintain software systems for enterprises and specialized domains, aligning with industry needs.\n\nPSO2: Advanced Computing Expertise – Gain proficiency in advanced computing and programming to build intelligent and efficient solutions.\n\nPSO3: Legacy System Enhancement – Maintain, optimize, and modernize legacy computing systems for sustained usability and integration.',
        },
        {
          id: 'lo',
          label: 'LO',
          content: 'Learning Outcomes (LOs)\n\nLO-1. Acquire knowledge of advanced computing skill and programming expertise.\n\nLO-2. Capability to design, build, evaluate, and sustain software systems for business and enterprise applications.\n\nLO-3. Ability to develop, test and maintain Software Systems for Specific Application Domain and as per the industry need.\n\nLO-4. Develop expertise to maintain and extend usability of legacy computer systems.',
        }
      ],
      images: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg"
      ],
      gallery: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg",
        "/images/departments/cse/4-768x576.jpeg",
        "/images/departments/cse/5-768x576.jpeg",
        "/images/departments/cse/cse (1).jpg",
        "/images/departments/cse/WhatsApp-Image-2026-03-09-at-6.07.33-PM-1.jpeg",
        "/images/departments/cse/WhatsApp-Image-2026-03-11-at-3.41.52-PM-768x576.jpeg"
      ]
    },

    questionBank: {
      years: [
        { 
          id: "1st-year", 
          label: "1st Year", 
          color: "bg-[#B894B7]", 
          subjects: [] 
        },
        { 
          id: "2nd-year", 
          label: "2nd Year", 
          color: "bg-[#5B50C2]", 
          subjects: [] 
        },
        { 
          id: "3rd-year", 
          label: "3rd Year", 
          color: "bg-[#D18E47]", 
          subjects: [
            { name: "DATABASE MANAGEMENT SYSTEMS", href: "#" },
            { name: "OPERATING SYSTEM", href: "#" },
            { name: "COMPILER DESIGN", href: "#" },
            { name: "FLAT-SET-1", href: "#" },
            { name: "FLAT SET-2", href: "#" },
            { name: "COMPUTER GRAPHICS", href: "#" },
            { name: "DATA COMMUNICATION", href: "#" }
          ] 
        },
        { 
          id: "4th-year", 
          label: "4th Year", 
          color: "bg-[#C3594B]", 
          subjects: [] 
        },
      ],
      previousSemester: {
        label: "Previous Semester Questions",
        href: "https://drive.google.com/drive/folders/1VS1tfkMdzFSkDXX0NKdquVs8iGugrFpW"
      }
    },

    syllabus: [
      {
        program: "B.TECH.",
        years: [
          {
            title: "SYLLABUS FOR FIRST YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR SECOND YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 3RD SEM SYLLABUS", href: "#" },
              { label: "VIEW / DOWNLOAD 4TH SEM SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR THIRD YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 5TH SEM SYLLABUS", href: "#" },
              { label: "VIEW / DOWNLOAD 6TH SEM SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR FOURTH YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 4TH YEAR SYLLABUS", href: "#" }
            ]
          }
        ]
      }
    ],

    programmes: [
      {
        title: "B.Tech in Computer Science and Technology (CST)",
        seats: "120 Seats",
        details: "4-Year Full-Time Programme",
        sections: [
          {
            text: "The B.Tech (CST) program prepares students for dynamic roles in the technology sector, focusing on the latest advancements and practical applications."
          },
          {
            text: "Students will explore a wide range of topics, including software development, systems architecture, network security, and intelligent systems, ensuring they are well-prepared for diverse career opportunities."
          }
        ]
      }
    ],

    laboratories: [
      { 
        name: "Programming Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Dev C++ IDE",
          "Code::Blocks IDE",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "Experiment Set 1",
            list: [
              "Write a program to print your Bio-data.",
              "Write a program in C to test the arithmetic operators.",
              "Write a program to find Simple Interest and Compound Interest."
            ]
          },
          {
            set: "Experiment Set 2",
            list: [
              "Test logical, bitwise, unary and ternary operators.",
              "Check whether a given year is a leap year.",
              "Calculate salary statement of an employee using basic pay, DA, HRA and TA."
            ]
          },
          {
            set: "Experiment Set 3",
            list: [
              "Enter marks of 4 subjects and calculate Total, Aggregate %, and Grade.",
              "Display the day of the week using switch case.",
              "Menu driven program to find total, average, smallest and largest."
            ]
          },
          {
            set: "Experiment Set 4",
            list: [
              "Check whether a number is palindrome.",
              "Generate prime numbers between two numbers.",
              "Print a pyramid star pattern."
            ]
          },
          {
            set: "Experiment Set 5",
            list: [
              "Find largest, smallest, sum and average of an array.",
              "Sort an array in ascending order.",
              "Insert an element in an array at a desired position."
            ]
          },
          {
            set: "Experiment Set 6",
            list: [
              "Swap two variables using function.",
              "Print Fibonacci series using function.",
              "Multiply two matrices using functions."
            ]
          },
          {
            set: "Experiment Set 7",
            list: [
              "Find GCD using recursion.",
              "Store and display student data using structure.",
              "Check string palindrome using pointer."
            ]
          },
          {
            set: "Experiment Set 8",
            list: [
              "Find smallest element and position using pointer.",
              "Implement realloc() and free().",
              "Demonstrate Dynamic Memory Allocation."
            ]
          },
          {
            set: "Experiment Set 9",
            list: [
              "Implement Linked List insertion and deletion.",
              "Implement Stack Push and Pop.",
              "Implement Queue insertion and deletion."
            ]
          },
          {
            set: "Experiment Set 10",
            list: [
              "Implement Quick Sort.",
              "Implement Linear Search.",
              "Implement Binary Search."
            ]
          }
        ],
        images: [
          "/images/programming-lab-img-1.jpeg",
          "/images/programming-lab-img-2.jpeg"
        ]
      },
      { 
        name: "Data Structures Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Dev C++ IDE",
          "Code::Blocks IDE",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Write a C program to implement a Sparse Matrix.",
              "Create a Stack using an Array and perform PUSH, POP and Traversal operations.",
              "Create a Queue using an Array and perform Insertion, Deletion and Traversal.",
              "Perform Creation, Insertion, Deletion and Traversal on a Single Linked List using functions.",
              "Perform Creation, Insertion, Deletion and Traversal on a Doubly Linked List using functions.",
              "Perform Creation, Insertion and Deletion operations on a Binary Tree.",
              "Write a C program to perform Bubble Sort.",
              "Write a C program to perform Insertion Sort.",
              "Write a C program to perform Selection Sort.",
              "Write a C program to perform Quick Sort.",
              "Write a C program to perform Merge Sort.",
              "Write a C program to implement Linear Search.",
              "Write a C program to implement Binary Search."
            ]
          }
        ]
      },
      { 
        name: "Object Oriented Programming Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat (for Applet / Web support if required)",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Write a Java program to print \u201CHello World!\u201D.",
              "Write a program to demonstrate data types, variables, operators, arrays, and control structures.",
              "Write a program to define a class and constructors and demonstrate constructor usage.",
              "Write a program to define class, methods, and objects and demonstrate method overloading.",
              "Write a program to demonstrate inheritance and method overriding.",
              "Write a program to demonstrate Packages in Java.",
              "Write a program to demonstrate Exception Handling.",
              "Write a program to demonstrate Multithreading.",
              "Write a program to demonstrate Applet structure and event handling.",
              "Write a program to demonstrate different Layout Managers in Java."
            ]
          }
        ]
      },
      { 
        name: "Web and Application Development Lab", 
        description: "The configuration supports the development and execution of web applications, front-end technologies, backend programming, and deployment activities required for the laboratory exercises and projects.",
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat Server (for Applet / Web Application support)",
          "Node.js and npm (for JavaScript runtime and package management)",
          "Visual Studio Code or any Code Editor",
          "Git and GitHub Desktop (for version control and collaboration)",
          "Postman (for API testing)",
          "Google Chrome / Mozilla Firefox Web Browser"
        ],
        experiments: [
          {
            set: "Introduction to Web Development with HTML, CSS, JavaScript",
            list: [
              "Intro to HTML (JSFiddle): Explore the components of an HTML file including HTML markup, CSS styling, and JavaScript code.",
              "HTML \u2013 Creating a Simple Web Page: Create a web page for the fan club of IBM founder Thomas J. Watson Sr.",
              "Unit Conversion using HTML5 Structural Elements: Create a Unit Converter web page that converts Temperature from Celsius to Fahrenheit, Weight from Kilograms to Pounds, Distance from Kilometers to Miles.",
              "CSS Basics \u2013 Styling Your Web Page: Create a webpage on the Solar System and learn to create a basic webpage, specify font family and size, use colors for styling, create borders.",
              "JavaScript: Create an HTML form that uses JavaScript to validate user input and dynamically update webpage content.",
              "JavaScript \u2013 Browser Console: Practice JavaScript concepts using the browser console.",
              "Simple Interest Calculator: Develop a calculator by modifying HTML, CSS, and JavaScript files and verifying webpage functionality.",
              "Single Page Portfolio Website: Create a portfolio website with sections About Me, Skills, Projects, Recommendations.",
              "Publish your Portfolio to GitHub Pages: Publish your portfolio website using GitHub Pages static hosting service."
            ]
          },
          {
            set: "Getting Started with Git and GitHub",
            list: [
              "GitHub Sign Up and Create Repo: Create a GitHub account, create a repository, and add files using the GitHub interface.",
              "Getting Started with Branches using Git Commands: Use Git commands in a cloud IDE to create and manage branches.",
              "Cloning and Forking GitHub Projects: Learn to fork repositories, clone them locally, create branches, commit changes, and submit pull requests.",
              "Practice Project Overview: Manage development and deployment of a shipping calculator web application using GitHub collaboration features.",
              "Practice Project Part 1 \u2013 GitHub UI: Create repository with README, license, Code of Conduct, and Contribution Guidelines.",
              "Practice Project Part 2 \u2013 Git CLI: Fork repository, edit code using Git CLI, add files, and submit pull request.",
              "Final Project Part 1 \u2013 GitHub UI: Create repository, choose license, add README, Code of Conduct, Contribution Guidelines and commit files."
            ]
          },
          {
            set: "Developing Front-End Apps with React",
            list: [
              "Content Rating Application: Create a React component that allows users to like or dislike content and track ratings.",
              "Function Component Event Planner Landing Page: Create a React landing page for an event planning organization with sections for features, testimonials, and contact form.",
              "Fetch Data Using useFetch: Use React hooks (useState, useEffect) and a custom hook to fetch and display data dynamically.",
              "Create Feedback Form for Survey: Create a feedback form with validation, confirmation dialog, and submission handling using React.",
              "Practice Project - Conference Event Planner: Develop an application for selecting conference rooms, equipment, and meals for events."
            ]
          },
          {
            set: "Developing Back-End Apps with Node.js and Express",
            list: [
              "First Server with Server-Side JavaScript: Create and run a Node.js web server and access it from a client.",
              "Promises and Callback: Create a Node.js application using promise callbacks.",
              "Async Callback Programming: Understand asynchronous callbacks and implement them in Node.js.",
              "CRUD Operations with Node.js and Express: Create a Friends List application with Create, Retrieve, Update, Delete operations and test endpoints with Postman.",
              "Express Server: Create an Express server, use middleware and JWT authentication, and render static HTML pages.",
              "Friends List Application Using Express Server with JWT: Secure CRUD operations with JWT authentication and test APIs using Postman.",
              "Book Review Application: Build a server-side book review application."
            ]
          }
        ]
      },
      { 
        name: "Database Engineering Lab", 
        description: "The objective of this laboratory is to provide hands-on experience in designing, implementing, and manipulating relational databases using SQL and PL/SQL. Students will learn database schema design, query processing, views, triggers, procedures, joins, and transaction control statements.",
        equipments: [
          "Processor : Intel Core i3 / higher",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Operating System : Windows 10 / Linux"
        ],
        software: [
          "Oracle Database / MySQL",
          "SQL Developer / MySQL Workbench",
          "Command Line SQL Client"
        ],
        experiments: [
          {
            set: "Experiment 1: Library Database",
            list: [
              "Consider the following schema: BOOK (Book_id, Title, Publisher_Name, Pub_Year), BOOK_AUTHORS (Book_id, Author_Name), PUBLISHER (Name, Address, Phone), BOOK_COPIES (Book_id, Programme_id, No_of_Copies), BOOK_LENDING (Book_id, Programme_id, Card_No, Date_Out, Due_Date), LIBRARY_PROGRAMME (Programme_id, Programme_Name, Address)",
              "Retrieve details of all books in the library including title, publisher, authors and number of copies.",
              "Get the borrowers who borrowed more than 3 books between Jan 2025 and Jun 2025.",
              "Delete a book from BOOK table and update related tables.",
              "Partition BOOK table based on publication year.",
              "Create a view showing available books and number of copies."
            ]
          },
          {
            set: "Experiment 2: College Database",
            list: [
              "Schema: STUDENT (REGNO, SName, Address, Phone, Gender), SEMSEC (SSID, Sem, Sec), CLASS (REGNO, SSID), COURSE (Subcode, Title, Sem, Credits), IAMARKS (REGNO, Subcode, SSID, Test1, Test2, Test3, FinalIA)",
              "List student details studying in 4th semester C section.",
              "Compute number of male and female students in each semester and section.",
              "Create a view for Test1 marks of student REGNO '1BP22CS101'.",
              "Calculate FinalIA as average of best two tests.",
              "Categorize students as Outstanding, Average, and Weak based on FinalIA."
            ]
          },
          {
            set: "Experiment 3: Order Database",
            list: [
              "Schema: SALESMAN (Salesman_id, Name, City, Commission), CUSTOMER (Customer_id, Cust_Name, City, Grade, Salesman_id), ORDERS (Ord_No, Purchase_Amt, Ord_Date, Customer_id, Salesman_id)",
              "Count customers with grades above Bangalore's average.",
              "Find salesman with more than one customer.",
              "List salesman with and without customers using UNION.",
              "Create a view showing salesman with highest order of the day.",
              "Delete salesman with id 1000 and remove all related orders."
            ]
          },
          {
            set: "Experiment 4: Privileges and Transactions",
            list: [
              "Tables: Departments (dept_no, dept_name, dept_location), Employees (emp_id, emp_name, emp_salary, dept_no)",
              "Grant all privileges on employees table.",
              "Grant selective privileges on employees table.",
              "Revoke all privileges.",
              "Revoke selective privileges.",
              "Implement SAVEPOINT in transactions."
            ]
          },
          {
            set: "Experiment 5: SQL Joins",
            list: [
              "Display employee and department details using INNER JOIN.",
              "Display employee name and department name using LEFT OUTER JOIN.",
              "Display employee name and department name using RIGHT OUTER JOIN.",
              "Display employees with salary greater than average salary."
            ]
          },
          {
            set: "Experiment 6: Election Commission Database",
            list: [
              "Schema: CONSTITUENCY (cons_id, csname, csstate, no_of_voters), PARTY (pid, pname, psymbol), CANDIDATES (cand_id, name, age, state, phone_no), VOTER (vid, vname, vage, vaddr)",
              "Find candidates contesting in more than one constituency in different states.",
              "Display the state having maximum constituencies.",
              "Create stored procedure to insert voter if age \u2265 18.",
              "Create stored procedure to display number of voters in a constituency.",
              "Create trigger to update voter count after voter insertion."
            ]
          },
          {
            set: "Experiment 7: Airline Flight Database",
            list: [
              "Schema: FLIGHTS (flno, distance, departs, arrives), AIRCRAFT (aid, aname, cruisingrange), CERTIFIED (eid, aid), EMPLOYEES (eid, ename, salary)",
              "Find pilots certified for Boeing aircraft.",
              "Find aircraft that can fly non-stop from Delhi to Mumbai.",
              "Find pilots certified for aircraft with range greater than 3000 miles.",
              "Find employees with highest and second highest salary.",
              "Find pilots certified for largest number of aircraft.",
              "Find total salary paid to employees."
            ]
          },
          {
            set: "Experiment 8: Cursor Implementation",
            list: [
              "Schema: Employee (E_id, E_name, Age, Salary)",
              "Create a cursor to extract employee records.",
              "Declare variables, open cursor, fetch values, and close cursor."
            ]
          },
          {
            set: "Experiment 9: Stored Procedure \u2013 Student Grading",
            list: [
              "Tables: Stud_Marks (Name, Total_Marks), Result (Roll, Name, Class)",
              "Create stored procedure proc_Grade to categorize students based on marks.",
              "Use PL/SQL block to call the procedure.",
              "Classify students as Distinction, First Class, and Higher Second Class."
            ]
          },
          {
            set: "Experiment 10: PL/SQL Fine Calculation",
            list: [
              "Schema: Borrower (Rollin, Name, Date_of_Issue, Name_of_Book, Status), Fine (Roll_no, Date, Amt)",
              "Accept Roll number and book name from user.",
              "Calculate fine based on number of days after issue.",
              "Update book status after submission.",
              "Store fine details if applicable.",
              "Use control structures and exception handling."
            ]
          }
        ]
      },
      { 
        name: "Computer Organization and Architecture Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "C / C++ Compiler (GCC / Dev C++ / Turbo C)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat (for Applet / Web support if required)",
          "Hardware Simulation Tools (Logisim / Proteus)",
          "Microsoft Office / LibreOffice for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Simulation and Design of Fast Multiplication and Division Programs: Design and simulate programs that perform fast multiplication and division operations to understand arithmetic processing and algorithm efficiency in computer systems.",
              "Experiments using Hardware Training Kits: Perform experiments using hardware training kits to study the working and interfacing of devices such as floppy disk drives, dot matrix printers, and other peripheral components.",
              "Dismantling and Assembling of a Personal Computer: Dismantle and assemble a PC system to study internal components including connections, ports, chipsets, SMPS, and other hardware parts. Draw and label the block diagram of the motherboard and other relevant boards.",
              "Study Project on Hardware Technologies: Undertake a study project on various hardware technologies such as memory systems, serial bus, parallel bus, microprocessors, input/output devices, and motherboard architecture."
            ]
          }
        ]
      },
      { 
        name: "Design and Analysis of Algorithms Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "C / C++ Compiler (GCC / Dev C++ / Turbo C++)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Graph Plotting Tools (GNU Plot / Excel / Python Matplotlib for analysis)",
          "Microsoft Office / LibreOffice for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Selection Sort: Sort a given set of n integer elements using the Selection Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n.",
              "Quick Sort: Sort a given set of n integer elements using the Quick Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n.",
              "Merge Sort: Sort a given set of n integer elements using the Merge Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n.",
              "Greedy Method \u2013 Knapsack Problem: Write a program to solve the Knapsack problem using the Greedy approach and demonstrate the selection of items based on maximum profit and weight constraints.",
              "Dijkstra\u2019s Algorithm: Write a program to find the shortest path from a given vertex to all other vertices in a weighted connected graph using Dijkstra\u2019s algorithm.",
              "Kruskal\u2019s Algorithm: Write a program to find the Minimum Cost Spanning Tree (MCST) of a connected undirected graph using Kruskal\u2019s algorithm with Union-Find techniques.",
              "Prim\u2019s Algorithm: Write a program to find the Minimum Cost Spanning Tree (MCST) of a connected undirected graph using Prim\u2019s algorithm.",
              "Dynamic Programming Problems: Write a program to solve the All-Pairs Shortest Path problem using Floyd\u2019s algorithm. Write a program to solve the Travelling Salesperson Problem using Dynamic Programming. Write a program to solve the 0/1 Knapsack problem using Dynamic Programming.",
              "Subset Sum Problem: Design and implement a C++/Java program to find a subset of a given set S = {S1, S2, \u2026, Sn} of positive integers whose sum is equal to a given positive integer d.",
              "Hamiltonian Cycle: Design and implement a program to find all Hamiltonian cycles in a connected undirected graph using the Backtracking technique."
            ]
          }
        ]
      },
      { name: "Advanced Programming Lab", description: "Details and resources for the Advanced Programming Lab." },
      { 
        name: "Theory of Computation Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "JFLAP (Java Formal Languages and Automata Package)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE (optional)",
          "Text Editor or IDE for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Introduction to Automata Simulation Tools: Installation and familiarization with automata simulation tools such as JFLAP.",
              "Design and Simulation of Deterministic Finite Automata (DFA): Construct DFA for given regular languages.",
              "Design and Simulation of Non-Deterministic Finite Automata (NFA): Construct NFA for various regular languages. Convert the designed NFA into an equivalent DFA.",
              "NFA with \u03B5-transitions: Design an NFA with epsilon (\u03B5) transitions for given regular expressions. Convert the \u03B5-NFA to an equivalent DFA.",
              "Finite Automata with Output (Moore and Mealy Machines): Design Moore and Mealy machines for specific output requirements.",
              "Context-Free Grammar (CFG) Design: Design CFGs for various context-free languages. Parse strings using the grammar and generate corresponding parse trees.",
              "Pushdown Automata (PDA) Simulation: Design a PDA for specific context-free languages.",
              "Turing Machine Design: Design and simulate a Turing machine to perform basic mathematical operations such as addition and subtraction."
            ]
          }
        ]
      },
      { 
        name: "Operating Systems Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu / Fedora / CentOS)",
          "GCC Compiler for C Programming",
          "Linux Terminal / Bash Shell",
          "Android Studio for Mobile Application Development",
          "Text Editor / IDE (VS Code / Code::Blocks / Sublime Text)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Installation of Operating System: Install and configure an operating system (Linux/Windows) and study the basic system environment.",
              "Linux Administrative Commands: Practice common Linux administrative commands for file management, process monitoring, and system administration.",
              "UNIX Shell Programming: Write and execute shell scripts to automate basic system tasks and operations.",
              "Process Management using System Calls: Write programs demonstrating system calls such as fork(), exit(), getpid(), wait(), and close().",
              "Synchronization Problems: Implement classical synchronization problems such as Dining Philosophers, Cigarette Smokers, or Sleeping Barber problems.",
              "CPU Scheduling Algorithms: Simulate CPU scheduling algorithms such as First Come First Serve (FCFS), Round Robin (RR), and Shortest Job First (SJF).",
              "Banker\u2019s Algorithm: Simulate Banker\u2019s Algorithm for deadlock avoidance and analyze system resource allocation.",
              "Page Replacement Algorithms: Write programs to simulate page replacement algorithms such as FIFO, LRU, and Optimal.",
              "Thread Programming: Write C programs to implement multithreading and demonstrate concurrent execution.",
              "Paging Scheme Implementation: Implement a paging scheme using C programming to demonstrate memory management techniques.",
              "Memory Allocation Methods: Write C programs to implement memory allocation techniques: First Fit, Worst Fit, Best Fit.",
              "Android Programming: Develop a basic Android mobile application to understand mobile operating system concepts."
            ]
          }
        ]
      },
      { 
        name: "Machine Learning Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux (Ubuntu) \u2013 optional for development",
          "Python 3.x",
          "Anaconda Distribution",
          "Jupyter Notebook / Google Colab",
          "Python Libraries: NumPy, Pandas, Matplotlib, Seaborn",
          "Machine Learning Libraries: Scikit-learn",
          "Deep Learning Libraries: TensorFlow / PyTorch",
          "IDE: VS Code / PyCharm / Jupyter Notebook"
        ],
        experiments: [
          {
            set: "Lab Assignments",
            list: [
              "Introduction to Python Programming: Install Python and set up Anaconda. Write basic Python scripts including loops, conditional statements, and functions.",
              "Introduction to Machine Learning Libraries using Python: Overview of commonly used libraries for machine learning and data analysis.",
              "Working with NumPy, Matplotlib, and Pandas: NumPy: Perform matrix operations, loops, and conditional computations. Matplotlib: Create and customize plots and visualizations. Pandas: Load, explore, and summarize datasets.",
              "Statistical Analysis using Python: Write a Python program to find the mean, median, mode, variance, and standard deviation of a list of numbers.",
              "Overview of Machine Learning Frameworks: Study the features and applications of Scikit-learn, TensorFlow, and PyTorch libraries.",
              "Linear Regression: Implement the Linear Regression algorithm using Python.",
              "Logistic Regression: Implement the Logistic Regression algorithm for classification tasks.",
              "k-Nearest Neighbors (k-NN): Implement the k-NN algorithm and analyze classification results.",
              "Decision Tree: Implement the Decision Tree algorithm for classification or prediction.",
              "Random Forest: Implement the Random Forest algorithm and evaluate model performance.",
              "Support Vector Machine (SVM): Implement the Support Vector Machine algorithm for classification tasks.",
              "Principal Component Analysis (PCA): Implement PCA for dimensionality reduction and visualization of datasets.",
              "K-Means Clustering: Implement the K-Means clustering algorithm to group similar data points.",
              "Real-World Applications: Image Classification, Text Classification, Regression Problems (e.g., Housing Price Prediction)."
            ]
          }
        ]
      },
      { 
        name: "Project for Product Development Lab", 
        description: "The course is organized as an independent project-based learning activity conducted in teams of 4\u20135 students. Each team is responsible for developing a product idea from concept to a stage where it is ready for potential market launch for a specific organization or business context.",
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Microsoft Office / LibreOffice for documentation and presentations",
          "Project Management Tools (MS Project / Trello / Asana)",
          "Data Analysis Tools (Excel / Google Sheets / Python-based tools)",
          "Presentation Tools (PowerPoint / Google Slides)",
          "Internet and Market Research Tools"
        ],
        experiments: []
      },
      { 
        name: "Compiler Design Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu / Fedora / CentOS) for compiler tools",
          "LEX / FLEX (Lexical Analyzer Generator)",
          "YACC / Bison (Parser Generator)",
          "GCC (C Compiler)",
          "Linux Environment or Compatible Terminal Emulator (Cygwin / Ubuntu WSL)",
          "Text Editor / IDE (VS Code / Sublime Text / Vim)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Implementation of Lexical Analyzer using LEX: Tokenization of a simple program. Handling identifiers, keywords, numbers, and operators.",
              "Design of Syntax Analyzer using YACC: Parsing arithmetic expressions. Parsing conditional and looping constructs such as if-else and while statements.",
              "Removing Left Recursion and Left Factoring: Manual implementation of algorithms for eliminating left recursion and left factoring in grammars.",
              "Implementation of Predictive Parser (LL(1)): Construct parsing table and simulate the parsing process.",
              "Implementation of Shift-Reduce Parser: Simulate stack operations used in shift-reduce parsing.",
              "Syntax Directed Translation: Construction of Abstract Syntax Trees (AST) for expressions.",
              "Intermediate Code Generation: Generate three-address code for arithmetic expressions. Implement backpatching for boolean expressions and control flow statements.",
              "Design and Implementation of Symbol Table: Implement operations such as insertion, lookup, and scope management.",
              "Implementation of Type Checking and Type Conversion.",
              "Basic Code Optimization Techniques: Constant folding. Dead code elimination. Strength reduction.",
              "Simulation of Runtime Environment: Activation record structure. Stack management for function calls.",
              "Mini Project: Development of a Simple Compiler: Design a compiler for a subset of a programming language."
            ]
          }
        ]
      },
      { 
        name: "Software Engineering Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu) \u2013 optional",
          "UML Modeling Tools (StarUML / Visual Paradigm / Lucidchart)",
          "Diagram Design Tools (Draw.io / Creately)",
          "Project Management Tools (MS Project / Trello)",
          "Testing Tools (Selenium / JUnit / TestNG or other open-source testing tools)",
          "Documentation Tools (MS Word / Google Docs)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Analysis and Identification of Suitable Process Models: Study and analyze different software process models such as Waterfall, Spiral, Agile, and Incremental models.",
              "Work Breakdown Structure (WBS) and Estimation: Develop Work Breakdown Structures based on Process-Based, Product-Based, Geographic-Based, and Role-Based structures.",
              "Requirement Modeling \u2013 Structural Modeling: Develop an Entity Relationship (ER) Diagram to represent the structural aspects of the system.",
              "Requirement Modeling \u2013 Functional Modeling: Develop Context Flow Diagrams and Data Flow Diagrams (DFD) to represent system functionality.",
              "Requirement Modeling \u2013 Behavioral Modeling: Create State Transition Diagrams to illustrate system behavior and state changes.",
              "Object-Oriented Design \u2013 Use Case and Class Models: Design UML diagrams including Use Case Diagrams and Class Diagrams.",
              "Object-Oriented Design \u2013 Interaction Models: Develop interaction diagrams such as Sequence Diagrams and Communication Diagrams.",
              "Object-Oriented Design \u2013 Architectural Models: Create Package Diagrams, Component Diagrams, and Deployment Diagrams.",
              "Software Testing: Design and demonstrate test cases including Functional Testing and Non-Functional Testing using open-source testing tools.",
              "Storyboarding and User Interface Design: Design storyboards and user interface models to represent layout, navigation, and user interaction flow."
            ]
          }
        ]
      }
    ]
  },

  "computer-science-engineering-data-science": {
    name: "Computer Science & Engineering (Data Science)",

    meta: {
      title: "Computer Science & Engineering (Data Science) — Trident Academy of Technology",
      description: "Department of Computer Science & Engineering (Data Science) at Trident Academy of Technology.",
    },

    theme: {
      primary: "text-[#0D9488]",
      bgPrimary: "bg-[#0D9488]",
      borderPrimary: "border-[#0D9488]",
      borderPrimary10: "border-[#0D9488]/10",
      bgPrimary10: "bg-[#0D9488]/10",
      hoverTextPrimary: "hover:text-[#0D9488]",
      hoverBgPrimary: "hover:bg-[#0D9488]",
      shadowPrimary20: "shadow-[#0D9488]/20",
      accent: "text-[#E5AA3E]",
      bgAccent: "bg-[#E5AA3E]",
      secondary: "text-[#0F766E]",
      gradient: "from-[#134E4A]/95 via-[#0F766E]/90 to-[#0D9488]/80",
      btn: "bg-[#14B8A6]",
      btnHover: "hover:bg-[#0F766E]",
    },

    hero: {
      titleLine1: "Computer Science &",
      titleLine2: "Engineering (Data Science)",
      subtitle: "Preparing students for future-ready careers in the rapidly evolving field of technology.",
      image: "/images/departments/cse/4-768x576.jpeg",
      breadcrumb: "Computer Science & Engineering (Data Science)",
      stats: [
        { label: "B.Tech Seats", value: "120" },
      ],
    },

    sidebar: {
      heading: "COMPUTER SCIENCE &\nTECHNOLOGY",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen", href: "/computer-science-engineering-data-science/overview" },
        { id: "syllabus", label: "Syllabus", icon: "Layers", href: "/computer-science-engineering-data-science/syllabus" },
        { id: "faculties", label: "Faculty", icon: "Users", href: "/computer-science-engineering-data-science/faculties" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker", href: "/computer-science-engineering-data-science/laboratories" },
        { id: "question-bank", label: "Question Bank", icon: "FileText", href: "/computer-science-engineering-data-science/question-bank" },
      ],
    },

    overview: {
      paragraphs: [
        "The B.Tech in Computer Science & Engineering (Data Science) (CST) program is designed to equip students with a robust foundation in computer science and the practical skills necessary to navigate and shape the future of technology.",
        "With an emphasis on modern computing paradigms, the department offers a comprehensive curriculum that covers both foundational concepts and emerging technologies. Our students benefit from state-of-the-art laboratories and a faculty dedicated to fostering innovation and excellence.",
        "Initially, the Department was started with an intake capacity of 60 and subsequently escalated its intake capacity to meet the global requirement. The department has a good number of faculty members with M.Tech/Ph.D qualification.",
        "In order to cope up with the changing need of the industry as well as academia, the Department of CST at present offers following programme variants with unique philosophies and objectives:",
      ],
      tabs: [
        {
          id: 'vision',
          label: 'Vision',
          content: 'To be a centre of excellence in Computer Science Engineering by imparting quality education, fostering innovation and cultivating ethical professionals to meet the evolving global challenges.',
        },
        {
          id: 'mission',
          label: 'Mission',
          content: 'M1. Provide quality education to build students strong expertise in software development, profound sense of hardware design and problem-solving skills to address global needs through innovation.\n\nM2. Foster well-disciplined leadership quality, a strong sense of responsibility and ethical values for impactful professional growth.\n\nM3. Encourage innovation, research and adaptability to tackle global challenges with sustainable technological proficiency.',
        },
        {
          id: 'peo',
          label: 'PEO',
          content: 'PEO-1. To develop competent computer professionals to solve computer science related problems through their strong problem-solving skills using efficient algorithms.\nKeyword: Problem-solving skills.\n\nPEO-2. To develop strong leadership qualities in students, enhancing their skillsets for solving real-world problems.\nKeywords: Leadership Quality.\n\nPEO-3. To develop students as ethical engineers with strong managerial skill, communication skill, interpersonal skills, self-esteem, and stress management for future leadership.\nKeywords: Ethical Ability.\n\nPEO-4. To motivate students to pursue higher studies, research & entrepreneurship in emerging technologies with expert guidance from industry and academia.\nKeywords: Motivation for Higher studies, Research & Entrepreneurship.',
        },
        {
          id: 'po',
          label: 'PO',
          content: '1. Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.\n\n2. Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.\n\n3. Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate considerations for the public health and safety and the cultural, societal and environmental considerations.\n\n4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.\n\n5. Modern tool Usage: Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.\n\n6. The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.\n\n7. Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of and need for sustainable development.\n\n8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.\n\n9. Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams and in multidisciplinary settings.\n\n10. Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.\n\n11. Project Management and Finance: Demonstrate knowledge and understanding of engineering and management principle and apply these to one\'s own work as member and leader in team to manage projects and in multidisciplinary environments.\n\n12. Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
        },
        {
          id: 'pso',
          label: 'PSO',
          content: 'PSO1: Enterprise Software Development – Design, develop, test, and maintain software systems for enterprises and specialized domains, aligning with industry needs.\n\nPSO2: Advanced Computing Expertise – Gain proficiency in advanced computing and programming to build intelligent and efficient solutions.\n\nPSO3: Legacy System Enhancement – Maintain, optimize, and modernize legacy computing systems for sustained usability and integration.',
        },
        {
          id: 'lo',
          label: 'LO',
          content: 'Learning Outcomes (LOs)\n\nLO-1. Acquire knowledge of advanced computing skill and programming expertise.\n\nLO-2. Capability to design, build, evaluate, and sustain software systems for business and enterprise applications.\n\nLO-3. Ability to develop, test and maintain Software Systems for Specific Application Domain and as per the industry need.\n\nLO-4. Develop expertise to maintain and extend usability of legacy computer systems.',
        }
      ],
      images: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg"
      ],
      gallery: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg",
        "/images/departments/cse/4-768x576.jpeg",
        "/images/departments/cse/5-768x576.jpeg",
        "/images/departments/cse/cse (1).jpg",
        "/images/departments/cse/WhatsApp-Image-2026-03-09-at-6.07.33-PM-1.jpeg",
        "/images/departments/cse/WhatsApp-Image-2026-03-11-at-3.41.52-PM-768x576.jpeg"
      ]
    },

    questionBank: {
      years: [
        { 
          id: "1st-year", 
          label: "1st Year", 
          color: "bg-[#B894B7]", 
          subjects: [] 
        },
        { 
          id: "2nd-year", 
          label: "2nd Year", 
          color: "bg-[#5B50C2]", 
          subjects: [] 
        },
        { 
          id: "3rd-year", 
          label: "3rd Year", 
          color: "bg-[#D18E47]", 
          subjects: [
            { name: "DATABASE MANAGEMENT SYSTEMS", href: "#" },
            { name: "OPERATING SYSTEM", href: "#" },
            { name: "COMPILER DESIGN", href: "#" },
            { name: "FLAT-SET-1", href: "#" },
            { name: "FLAT SET-2", href: "#" },
            { name: "COMPUTER GRAPHICS", href: "#" },
            { name: "DATA COMMUNICATION", href: "#" }
          ] 
        },
        { 
          id: "4th-year", 
          label: "4th Year", 
          color: "bg-[#C3594B]", 
          subjects: [] 
        },
      ],
      previousSemester: {
        label: "Previous Semester Questions",
        href: "https://drive.google.com/drive/folders/1VS1tfkMdzFSkDXX0NKdquVs8iGugrFpW"
      }
    },

    syllabus: [
      {
        program: "B.TECH.",
        years: [
          {
            title: "SYLLABUS FOR FIRST YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR SECOND YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 3RD SEM SYLLABUS", href: "#" },
              { label: "VIEW / DOWNLOAD 4TH SEM SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR THIRD YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 5TH SEM SYLLABUS", href: "#" },
              { label: "VIEW / DOWNLOAD 6TH SEM SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR FOURTH YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 4TH YEAR SYLLABUS", href: "#" }
            ]
          }
        ]
      }
    ],

    programmes: [
      {
        title: "B.Tech in Computer Science & Engineering (Data Science) (CST)",
        seats: "120 Seats",
        details: "4-Year Full-Time Programme",
        sections: [
          {
            text: "The B.Tech (Data Science) program prepares students for dynamic roles in the technology sector, focusing on the latest advancements and practical applications."
          },
          {
            text: "Students will explore a wide range of topics, including software development, systems architecture, network security, and intelligent systems, ensuring they are well-prepared for diverse career opportunities."
          }
        ]
      }
    ],

    laboratories: [
      { 
        name: "Programming Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Dev C++ IDE",
          "Code::Blocks IDE",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "Experiment Set 1",
            list: [
              "Write a program to print your Bio-data.",
              "Write a program in C to test the arithmetic operators.",
              "Write a program to find Simple Interest and Compound Interest."
            ]
          },
          {
            set: "Experiment Set 2",
            list: [
              "Test logical, bitwise, unary and ternary operators.",
              "Check whether a given year is a leap year.",
              "Calculate salary statement of an employee using basic pay, DA, HRA and TA."
            ]
          },
          {
            set: "Experiment Set 3",
            list: [
              "Enter marks of 4 subjects and calculate Total, Aggregate %, and Grade.",
              "Display the day of the week using switch case.",
              "Menu driven program to find total, average, smallest and largest."
            ]
          },
          {
            set: "Experiment Set 4",
            list: [
              "Check whether a number is palindrome.",
              "Generate prime numbers between two numbers.",
              "Print a pyramid star pattern."
            ]
          },
          {
            set: "Experiment Set 5",
            list: [
              "Find largest, smallest, sum and average of an array.",
              "Sort an array in ascending order.",
              "Insert an element in an array at a desired position."
            ]
          },
          {
            set: "Experiment Set 6",
            list: [
              "Swap two variables using function.",
              "Print Fibonacci series using function.",
              "Multiply two matrices using functions."
            ]
          },
          {
            set: "Experiment Set 7",
            list: [
              "Find GCD using recursion.",
              "Store and display student data using structure.",
              "Check string palindrome using pointer."
            ]
          },
          {
            set: "Experiment Set 8",
            list: [
              "Find smallest element and position using pointer.",
              "Implement realloc() and free().",
              "Demonstrate Dynamic Memory Allocation."
            ]
          },
          {
            set: "Experiment Set 9",
            list: [
              "Implement Linked List insertion and deletion.",
              "Implement Stack Push and Pop.",
              "Implement Queue insertion and deletion."
            ]
          },
          {
            set: "Experiment Set 10",
            list: [
              "Implement Quick Sort.",
              "Implement Linear Search.",
              "Implement Binary Search."
            ]
          }
        ],
        images: [
          "/images/programming-lab-img-1.jpeg",
          "/images/programming-lab-img-2.jpeg"
        ]
      },
      { 
        name: "Data Structures Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Dev C++ IDE",
          "Code::Blocks IDE",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Write a C program to implement a Sparse Matrix.",
              "Create a Stack using an Array and perform PUSH, POP and Traversal operations.",
              "Create a Queue using an Array and perform Insertion, Deletion and Traversal.",
              "Perform Creation, Insertion, Deletion and Traversal on a Single Linked List using functions.",
              "Perform Creation, Insertion, Deletion and Traversal on a Doubly Linked List using functions.",
              "Perform Creation, Insertion and Deletion operations on a Binary Tree.",
              "Write a C program to perform Bubble Sort.",
              "Write a C program to perform Insertion Sort.",
              "Write a C program to perform Selection Sort.",
              "Write a C program to perform Quick Sort.",
              "Write a C program to perform Merge Sort.",
              "Write a C program to implement Linear Search.",
              "Write a C program to implement Binary Search."
            ]
          }
        ]
      },
      { 
        name: "Object Oriented Programming Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat (for Applet / Web support if required)",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Write a Java program to print \u201CHello World!\u201D.",
              "Write a program to demonstrate data types, variables, operators, arrays, and control structures.",
              "Write a program to define a class and constructors and demonstrate constructor usage.",
              "Write a program to define class, methods, and objects and demonstrate method overloading.",
              "Write a program to demonstrate inheritance and method overriding.",
              "Write a program to demonstrate Packages in Java.",
              "Write a program to demonstrate Exception Handling.",
              "Write a program to demonstrate Multithreading.",
              "Write a program to demonstrate Applet structure and event handling.",
              "Write a program to demonstrate different Layout Managers in Java."
            ]
          }
        ]
      },
      { 
        name: "Web and Application Development Lab", 
        description: "The configuration supports the development and execution of web applications, front-end technologies, backend programming, and deployment activities required for the laboratory exercises and projects.",
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat Server (for Applet / Web Application support)",
          "Node.js and npm (for JavaScript runtime and package management)",
          "Visual Studio Code or any Code Editor",
          "Git and GitHub Desktop (for version control and collaboration)",
          "Postman (for API testing)",
          "Google Chrome / Mozilla Firefox Web Browser"
        ],
        experiments: [
          {
            set: "Introduction to Web Development with HTML, CSS, JavaScript",
            list: [
              "Intro to HTML (JSFiddle): Explore the components of an HTML file including HTML markup, CSS styling, and JavaScript code.",
              "HTML \u2013 Creating a Simple Web Page: Create a web page for the fan club of IBM founder Thomas J. Watson Sr.",
              "Unit Conversion using HTML5 Structural Elements: Create a Unit Converter web page that converts Temperature from Celsius to Fahrenheit, Weight from Kilograms to Pounds, Distance from Kilometers to Miles.",
              "CSS Basics \u2013 Styling Your Web Page: Create a webpage on the Solar System and learn to create a basic webpage, specify font family and size, use colors for styling, create borders.",
              "JavaScript: Create an HTML form that uses JavaScript to validate user input and dynamically update webpage content.",
              "JavaScript \u2013 Browser Console: Practice JavaScript concepts using the browser console.",
              "Simple Interest Calculator: Develop a calculator by modifying HTML, CSS, and JavaScript files and verifying webpage functionality.",
              "Single Page Portfolio Website: Create a portfolio website with sections About Me, Skills, Projects, Recommendations.",
              "Publish your Portfolio to GitHub Pages: Publish your portfolio website using GitHub Pages static hosting service."
            ]
          },
          {
            set: "Getting Started with Git and GitHub",
            list: [
              "GitHub Sign Up and Create Repo: Create a GitHub account, create a repository, and add files using the GitHub interface.",
              "Getting Started with Branches using Git Commands: Use Git commands in a cloud IDE to create and manage branches.",
              "Cloning and Forking GitHub Projects: Learn to fork repositories, clone them locally, create branches, commit changes, and submit pull requests.",
              "Practice Project Overview: Manage development and deployment of a shipping calculator web application using GitHub collaboration features.",
              "Practice Project Part 1 \u2013 GitHub UI: Create repository with README, license, Code of Conduct, and Contribution Guidelines.",
              "Practice Project Part 2 \u2013 Git CLI: Fork repository, edit code using Git CLI, add files, and submit pull request.",
              "Final Project Part 1 \u2013 GitHub UI: Create repository, choose license, add README, Code of Conduct, Contribution Guidelines and commit files."
            ]
          },
          {
            set: "Developing Front-End Apps with React",
            list: [
              "Content Rating Application: Create a React component that allows users to like or dislike content and track ratings.",
              "Function Component Event Planner Landing Page: Create a React landing page for an event planning organization with sections for features, testimonials, and contact form.",
              "Fetch Data Using useFetch: Use React hooks (useState, useEffect) and a custom hook to fetch and display data dynamically.",
              "Create Feedback Form for Survey: Create a feedback form with validation, confirmation dialog, and submission handling using React.",
              "Practice Project - Conference Event Planner: Develop an application for selecting conference rooms, equipment, and meals for events."
            ]
          },
          {
            set: "Developing Back-End Apps with Node.js and Express",
            list: [
              "First Server with Server-Side JavaScript: Create and run a Node.js web server and access it from a client.",
              "Promises and Callback: Create a Node.js application using promise callbacks.",
              "Async Callback Programming: Understand asynchronous callbacks and implement them in Node.js.",
              "CRUD Operations with Node.js and Express: Create a Friends List application with Create, Retrieve, Update, Delete operations and test endpoints with Postman.",
              "Express Server: Create an Express server, use middleware and JWT authentication, and render static HTML pages.",
              "Friends List Application Using Express Server with JWT: Secure CRUD operations with JWT authentication and test APIs using Postman.",
              "Book Review Application: Build a server-side book review application."
            ]
          }
        ]
      },
      { 
        name: "Database Engineering Lab", 
        description: "The objective of this laboratory is to provide hands-on experience in designing, implementing, and manipulating relational databases using SQL and PL/SQL. Students will learn database schema design, query processing, views, triggers, procedures, joins, and transaction control statements.",
        equipments: [
          "Processor : Intel Core i3 / higher",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Operating System : Windows 10 / Linux"
        ],
        software: [
          "Oracle Database / MySQL",
          "SQL Developer / MySQL Workbench",
          "Command Line SQL Client"
        ],
        experiments: [
          {
            set: "Experiment 1: Library Database",
            list: [
              "Consider the following schema: BOOK (Book_id, Title, Publisher_Name, Pub_Year), BOOK_AUTHORS (Book_id, Author_Name), PUBLISHER (Name, Address, Phone), BOOK_COPIES (Book_id, Programme_id, No_of_Copies), BOOK_LENDING (Book_id, Programme_id, Card_No, Date_Out, Due_Date), LIBRARY_PROGRAMME (Programme_id, Programme_Name, Address)",
              "Retrieve details of all books in the library including title, publisher, authors and number of copies.",
              "Get the borrowers who borrowed more than 3 books between Jan 2025 and Jun 2025.",
              "Delete a book from BOOK table and update related tables.",
              "Partition BOOK table based on publication year.",
              "Create a view showing available books and number of copies."
            ]
          },
          {
            set: "Experiment 2: College Database",
            list: [
              "Schema: STUDENT (REGNO, SName, Address, Phone, Gender), SEMSEC (SSID, Sem, Sec), CLASS (REGNO, SSID), COURSE (Subcode, Title, Sem, Credits), IAMARKS (REGNO, Subcode, SSID, Test1, Test2, Test3, FinalIA)",
              "List student details studying in 4th semester C section.",
              "Compute number of male and female students in each semester and section.",
              "Create a view for Test1 marks of student REGNO '1BP22CS101'.",
              "Calculate FinalIA as average of best two tests.",
              "Categorize students as Outstanding, Average, and Weak based on FinalIA."
            ]
          },
          {
            set: "Experiment 3: Order Database",
            list: [
              "Schema: SALESMAN (Salesman_id, Name, City, Commission), CUSTOMER (Customer_id, Cust_Name, City, Grade, Salesman_id), ORDERS (Ord_No, Purchase_Amt, Ord_Date, Customer_id, Salesman_id)",
              "Count customers with grades above Bangalore's average.",
              "Find salesman with more than one customer.",
              "List salesman with and without customers using UNION.",
              "Create a view showing salesman with highest order of the day.",
              "Delete salesman with id 1000 and remove all related orders."
            ]
          },
          {
            set: "Experiment 4: Privileges and Transactions",
            list: [
              "Tables: Departments (dept_no, dept_name, dept_location), Employees (emp_id, emp_name, emp_salary, dept_no)",
              "Grant all privileges on employees table.",
              "Grant selective privileges on employees table.",
              "Revoke all privileges.",
              "Revoke selective privileges.",
              "Implement SAVEPOINT in transactions."
            ]
          },
          {
            set: "Experiment 5: SQL Joins",
            list: [
              "Display employee and department details using INNER JOIN.",
              "Display employee name and department name using LEFT OUTER JOIN.",
              "Display employee name and department name using RIGHT OUTER JOIN.",
              "Display employees with salary greater than average salary."
            ]
          },
          {
            set: "Experiment 6: Election Commission Database",
            list: [
              "Schema: CONSTITUENCY (cons_id, csname, csstate, no_of_voters), PARTY (pid, pname, psymbol), CANDIDATES (cand_id, name, age, state, phone_no), VOTER (vid, vname, vage, vaddr)",
              "Find candidates contesting in more than one constituency in different states.",
              "Display the state having maximum constituencies.",
              "Create stored procedure to insert voter if age \u2265 18.",
              "Create stored procedure to display number of voters in a constituency.",
              "Create trigger to update voter count after voter insertion."
            ]
          },
          {
            set: "Experiment 7: Airline Flight Database",
            list: [
              "Schema: FLIGHTS (flno, distance, departs, arrives), AIRCRAFT (aid, aname, cruisingrange), CERTIFIED (eid, aid), EMPLOYEES (eid, ename, salary)",
              "Find pilots certified for Boeing aircraft.",
              "Find aircraft that can fly non-stop from Delhi to Mumbai.",
              "Find pilots certified for aircraft with range greater than 3000 miles.",
              "Find employees with highest and second highest salary.",
              "Find pilots certified for largest number of aircraft.",
              "Find total salary paid to employees."
            ]
          },
          {
            set: "Experiment 8: Cursor Implementation",
            list: [
              "Schema: Employee (E_id, E_name, Age, Salary)",
              "Create a cursor to extract employee records.",
              "Declare variables, open cursor, fetch values, and close cursor."
            ]
          },
          {
            set: "Experiment 9: Stored Procedure \u2013 Student Grading",
            list: [
              "Tables: Stud_Marks (Name, Total_Marks), Result (Roll, Name, Class)",
              "Create stored procedure proc_Grade to categorize students based on marks.",
              "Use PL/SQL block to call the procedure.",
              "Classify students as Distinction, First Class, and Higher Second Class."
            ]
          },
          {
            set: "Experiment 10: PL/SQL Fine Calculation",
            list: [
              "Schema: Borrower (Rollin, Name, Date_of_Issue, Name_of_Book, Status), Fine (Roll_no, Date, Amt)",
              "Accept Roll number and book name from user.",
              "Calculate fine based on number of days after issue.",
              "Update book status after submission.",
              "Store fine details if applicable.",
              "Use control structures and exception handling."
            ]
          }
        ]
      },
      { 
        name: "Computer Organization and Architecture Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "C / C++ Compiler (GCC / Dev C++ / Turbo C)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat (for Applet / Web support if required)",
          "Hardware Simulation Tools (Logisim / Proteus)",
          "Microsoft Office / LibreOffice for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Simulation and Design of Fast Multiplication and Division Programs: Design and simulate programs that perform fast multiplication and division operations to understand arithmetic processing and algorithm efficiency in computer systems.",
              "Experiments using Hardware Training Kits: Perform experiments using hardware training kits to study the working and interfacing of devices such as floppy disk drives, dot matrix printers, and other peripheral components.",
              "Dismantling and Assembling of a Personal Computer: Dismantle and assemble a PC system to study internal components including connections, ports, chipsets, SMPS, and other hardware parts. Draw and label the block diagram of the motherboard and other relevant boards.",
              "Study Project on Hardware Technologies: Undertake a study project on various hardware technologies such as memory systems, serial bus, parallel bus, microprocessors, input/output devices, and motherboard architecture."
            ]
          }
        ]
      },
      { 
        name: "Design and Analysis of Algorithms Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "C / C++ Compiler (GCC / Dev C++ / Turbo C++)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Graph Plotting Tools (GNU Plot / Excel / Python Matplotlib for analysis)",
          "Microsoft Office / LibreOffice for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Selection Sort: Sort a given set of n integer elements using the Selection Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n.",
              "Quick Sort: Sort a given set of n integer elements using the Quick Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n.",
              "Merge Sort: Sort a given set of n integer elements using the Merge Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n.",
              "Greedy Method \u2013 Knapsack Problem: Write a program to solve the Knapsack problem using the Greedy approach and demonstrate the selection of items based on maximum profit and weight constraints.",
              "Dijkstra\u2019s Algorithm: Write a program to find the shortest path from a given vertex to all other vertices in a weighted connected graph using Dijkstra\u2019s algorithm.",
              "Kruskal\u2019s Algorithm: Write a program to find the Minimum Cost Spanning Tree (MCST) of a connected undirected graph using Kruskal\u2019s algorithm with Union-Find techniques.",
              "Prim\u2019s Algorithm: Write a program to find the Minimum Cost Spanning Tree (MCST) of a connected undirected graph using Prim\u2019s algorithm.",
              "Dynamic Programming Problems: Write a program to solve the All-Pairs Shortest Path problem using Floyd\u2019s algorithm. Write a program to solve the Travelling Salesperson Problem using Dynamic Programming. Write a program to solve the 0/1 Knapsack problem using Dynamic Programming.",
              "Subset Sum Problem: Design and implement a C++/Java program to find a subset of a given set S = {S1, S2, \u2026, Sn} of positive integers whose sum is equal to a given positive integer d.",
              "Hamiltonian Cycle: Design and implement a program to find all Hamiltonian cycles in a connected undirected graph using the Backtracking technique."
            ]
          }
        ]
      },
      { name: "Advanced Programming Lab", description: "Details and resources for the Advanced Programming Lab." },
      { 
        name: "Theory of Computation Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "JFLAP (Java Formal Languages and Automata Package)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE (optional)",
          "Text Editor or IDE for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Introduction to Automata Simulation Tools: Installation and familiarization with automata simulation tools such as JFLAP.",
              "Design and Simulation of Deterministic Finite Automata (DFA): Construct DFA for given regular languages.",
              "Design and Simulation of Non-Deterministic Finite Automata (NFA): Construct NFA for various regular languages. Convert the designed NFA into an equivalent DFA.",
              "NFA with \u03B5-transitions: Design an NFA with epsilon (\u03B5) transitions for given regular expressions. Convert the \u03B5-NFA to an equivalent DFA.",
              "Finite Automata with Output (Moore and Mealy Machines): Design Moore and Mealy machines for specific output requirements.",
              "Context-Free Grammar (CFG) Design: Design CFGs for various context-free languages. Parse strings using the grammar and generate corresponding parse trees.",
              "Pushdown Automata (PDA) Simulation: Design a PDA for specific context-free languages.",
              "Turing Machine Design: Design and simulate a Turing machine to perform basic mathematical operations such as addition and subtraction."
            ]
          }
        ]
      },
      { 
        name: "Operating Systems Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu / Fedora / CentOS)",
          "GCC Compiler for C Programming",
          "Linux Terminal / Bash Shell",
          "Android Studio for Mobile Application Development",
          "Text Editor / IDE (VS Code / Code::Blocks / Sublime Text)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Installation of Operating System: Install and configure an operating system (Linux/Windows) and study the basic system environment.",
              "Linux Administrative Commands: Practice common Linux administrative commands for file management, process monitoring, and system administration.",
              "UNIX Shell Programming: Write and execute shell scripts to automate basic system tasks and operations.",
              "Process Management using System Calls: Write programs demonstrating system calls such as fork(), exit(), getpid(), wait(), and close().",
              "Synchronization Problems: Implement classical synchronization problems such as Dining Philosophers, Cigarette Smokers, or Sleeping Barber problems.",
              "CPU Scheduling Algorithms: Simulate CPU scheduling algorithms such as First Come First Serve (FCFS), Round Robin (RR), and Shortest Job First (SJF).",
              "Banker\u2019s Algorithm: Simulate Banker\u2019s Algorithm for deadlock avoidance and analyze system resource allocation.",
              "Page Replacement Algorithms: Write programs to simulate page replacement algorithms such as FIFO, LRU, and Optimal.",
              "Thread Programming: Write C programs to implement multithreading and demonstrate concurrent execution.",
              "Paging Scheme Implementation: Implement a paging scheme using C programming to demonstrate memory management techniques.",
              "Memory Allocation Methods: Write C programs to implement memory allocation techniques: First Fit, Worst Fit, Best Fit.",
              "Android Programming: Develop a basic Android mobile application to understand mobile operating system concepts."
            ]
          }
        ]
      },
      { 
        name: "Machine Learning Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux (Ubuntu) \u2013 optional for development",
          "Python 3.x",
          "Anaconda Distribution",
          "Jupyter Notebook / Google Colab",
          "Python Libraries: NumPy, Pandas, Matplotlib, Seaborn",
          "Machine Learning Libraries: Scikit-learn",
          "Deep Learning Libraries: TensorFlow / PyTorch",
          "IDE: VS Code / PyCharm / Jupyter Notebook"
        ],
        experiments: [
          {
            set: "Lab Assignments",
            list: [
              "Introduction to Python Programming: Install Python and set up Anaconda. Write basic Python scripts including loops, conditional statements, and functions.",
              "Introduction to Machine Learning Libraries using Python: Overview of commonly used libraries for machine learning and data analysis.",
              "Working with NumPy, Matplotlib, and Pandas: NumPy: Perform matrix operations, loops, and conditional computations. Matplotlib: Create and customize plots and visualizations. Pandas: Load, explore, and summarize datasets.",
              "Statistical Analysis using Python: Write a Python program to find the mean, median, mode, variance, and standard deviation of a list of numbers.",
              "Overview of Machine Learning Frameworks: Study the features and applications of Scikit-learn, TensorFlow, and PyTorch libraries.",
              "Linear Regression: Implement the Linear Regression algorithm using Python.",
              "Logistic Regression: Implement the Logistic Regression algorithm for classification tasks.",
              "k-Nearest Neighbors (k-NN): Implement the k-NN algorithm and analyze classification results.",
              "Decision Tree: Implement the Decision Tree algorithm for classification or prediction.",
              "Random Forest: Implement the Random Forest algorithm and evaluate model performance.",
              "Support Vector Machine (SVM): Implement the Support Vector Machine algorithm for classification tasks.",
              "Principal Component Analysis (PCA): Implement PCA for dimensionality reduction and visualization of datasets.",
              "K-Means Clustering: Implement the K-Means clustering algorithm to group similar data points.",
              "Real-World Applications: Image Classification, Text Classification, Regression Problems (e.g., Housing Price Prediction)."
            ]
          }
        ]
      },
      { 
        name: "Project for Product Development Lab", 
        description: "The course is organized as an independent project-based learning activity conducted in teams of 4\u20135 students. Each team is responsible for developing a product idea from concept to a stage where it is ready for potential market launch for a specific organization or business context.",
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Microsoft Office / LibreOffice for documentation and presentations",
          "Project Management Tools (MS Project / Trello / Asana)",
          "Data Analysis Tools (Excel / Google Sheets / Python-based tools)",
          "Presentation Tools (PowerPoint / Google Slides)",
          "Internet and Market Research Tools"
        ],
        experiments: []
      },
      { 
        name: "Compiler Design Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu / Fedora / CentOS) for compiler tools",
          "LEX / FLEX (Lexical Analyzer Generator)",
          "YACC / Bison (Parser Generator)",
          "GCC (C Compiler)",
          "Linux Environment or Compatible Terminal Emulator (Cygwin / Ubuntu WSL)",
          "Text Editor / IDE (VS Code / Sublime Text / Vim)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Implementation of Lexical Analyzer using LEX: Tokenization of a simple program. Handling identifiers, keywords, numbers, and operators.",
              "Design of Syntax Analyzer using YACC: Parsing arithmetic expressions. Parsing conditional and looping constructs such as if-else and while statements.",
              "Removing Left Recursion and Left Factoring: Manual implementation of algorithms for eliminating left recursion and left factoring in grammars.",
              "Implementation of Predictive Parser (LL(1)): Construct parsing table and simulate the parsing process.",
              "Implementation of Shift-Reduce Parser: Simulate stack operations used in shift-reduce parsing.",
              "Syntax Directed Translation: Construction of Abstract Syntax Trees (AST) for expressions.",
              "Intermediate Code Generation: Generate three-address code for arithmetic expressions. Implement backpatching for boolean expressions and control flow statements.",
              "Design and Implementation of Symbol Table: Implement operations such as insertion, lookup, and scope management.",
              "Implementation of Type Checking and Type Conversion.",
              "Basic Code Optimization Techniques: Constant folding. Dead code elimination. Strength reduction.",
              "Simulation of Runtime Environment: Activation record structure. Stack management for function calls.",
              "Mini Project: Development of a Simple Compiler: Design a compiler for a subset of a programming language."
            ]
          }
        ]
      },
      { 
        name: "Software Engineering Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu) \u2013 optional",
          "UML Modeling Tools (StarUML / Visual Paradigm / Lucidchart)",
          "Diagram Design Tools (Draw.io / Creately)",
          "Project Management Tools (MS Project / Trello)",
          "Testing Tools (Selenium / JUnit / TestNG or other open-source testing tools)",
          "Documentation Tools (MS Word / Google Docs)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Analysis and Identification of Suitable Process Models: Study and analyze different software process models such as Waterfall, Spiral, Agile, and Incremental models.",
              "Work Breakdown Structure (WBS) and Estimation: Develop Work Breakdown Structures based on Process-Based, Product-Based, Geographic-Based, and Role-Based structures.",
              "Requirement Modeling \u2013 Structural Modeling: Develop an Entity Relationship (ER) Diagram to represent the structural aspects of the system.",
              "Requirement Modeling \u2013 Functional Modeling: Develop Context Flow Diagrams and Data Flow Diagrams (DFD) to represent system functionality.",
              "Requirement Modeling \u2013 Behavioral Modeling: Create State Transition Diagrams to illustrate system behavior and state changes.",
              "Object-Oriented Design \u2013 Use Case and Class Models: Design UML diagrams including Use Case Diagrams and Class Diagrams.",
              "Object-Oriented Design \u2013 Interaction Models: Develop interaction diagrams such as Sequence Diagrams and Communication Diagrams.",
              "Object-Oriented Design \u2013 Architectural Models: Create Package Diagrams, Component Diagrams, and Deployment Diagrams.",
              "Software Testing: Design and demonstrate test cases including Functional Testing and Non-Functional Testing using open-source testing tools.",
              "Storyboarding and User Interface Design: Design storyboards and user interface models to represent layout, navigation, and user interaction flow."
            ]
          }
        ]
      }
    ]
  },

  "computer-science-engineering-ai-ml": {
    name: "Computer Science & Engineering (AI & ML)",

    meta: {
      title: "Computer Science & Engineering (AI & ML) — Trident Academy of Technology",
      description: "Department of Computer Science & Engineering (AI & ML) at Trident Academy of Technology.",
    },

    theme: {
      primary: "text-[#7C3AED]",
      bgPrimary: "bg-[#7C3AED]",
      borderPrimary: "border-[#7C3AED]",
      borderPrimary10: "border-[#7C3AED]/10",
      bgPrimary10: "bg-[#7C3AED]/10",
      hoverTextPrimary: "hover:text-[#7C3AED]",
      hoverBgPrimary: "hover:bg-[#7C3AED]",
      shadowPrimary20: "shadow-[#7C3AED]/20",
      accent: "text-[#E5AA3E]",
      bgAccent: "bg-[#E5AA3E]",
      secondary: "text-[#6D28D9]",
      gradient: "from-[#4C1D95]/95 via-[#5B21B6]/90 to-[#6D28D9]/80",
      btn: "bg-[#8B5CF6]",
      btnHover: "hover:bg-[#7C3AED]",
    },

    hero: {
      titleLine1: "Computer Science &",
      titleLine2: "Engineering (AI & ML)",
      subtitle: "Preparing students for future-ready careers in the rapidly evolving field of technology.",
      image: "/images/departments/cse/4-768x576.jpeg",
      breadcrumb: "Computer Science & Engineering (AI & ML)",
      stats: [
        { label: "B.Tech Seats", value: "120" },
      ],
    },

    sidebar: {
      heading: "COMPUTER SCIENCE &\nTECHNOLOGY",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen", href: "/computer-science-engineering-ai-ml/overview" },
        { id: "syllabus", label: "Syllabus", icon: "Layers", href: "/computer-science-engineering-ai-ml/syllabus" },
        { id: "faculties", label: "Faculty", icon: "Users", href: "/computer-science-engineering-ai-ml/faculties" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker", href: "/computer-science-engineering-ai-ml/laboratories" },
        { id: "question-bank", label: "Question Bank", icon: "FileText", href: "/computer-science-engineering-ai-ml/question-bank" },
      ],
    },

    overview: {
      paragraphs: [
        "The B.Tech in Computer Science & Engineering (AI & ML) (CST) program is designed to equip students with a robust foundation in computer science and the practical skills necessary to navigate and shape the future of technology.",
        "With an emphasis on modern computing paradigms, the department offers a comprehensive curriculum that covers both foundational concepts and emerging technologies. Our students benefit from state-of-the-art laboratories and a faculty dedicated to fostering innovation and excellence.",
        "Initially, the Department was started with an intake capacity of 60 and subsequently escalated its intake capacity to meet the global requirement. The department has a good number of faculty members with M.Tech/Ph.D qualification.",
        "In order to cope up with the changing need of the industry as well as academia, the Department of CST at present offers following programme variants with unique philosophies and objectives:",
      ],
      tabs: [
        {
          id: 'vision',
          label: 'Vision',
          content: 'To be a centre of excellence in Computer Science Engineering by imparting quality education, fostering innovation and cultivating ethical professionals to meet the evolving global challenges.',
        },
        {
          id: 'mission',
          label: 'Mission',
          content: 'M1. Provide quality education to build students strong expertise in software development, profound sense of hardware design and problem-solving skills to address global needs through innovation.\n\nM2. Foster well-disciplined leadership quality, a strong sense of responsibility and ethical values for impactful professional growth.\n\nM3. Encourage innovation, research and adaptability to tackle global challenges with sustainable technological proficiency.',
        },
        {
          id: 'peo',
          label: 'PEO',
          content: 'PEO-1. To develop competent computer professionals to solve computer science related problems through their strong problem-solving skills using efficient algorithms.\nKeyword: Problem-solving skills.\n\nPEO-2. To develop strong leadership qualities in students, enhancing their skillsets for solving real-world problems.\nKeywords: Leadership Quality.\n\nPEO-3. To develop students as ethical engineers with strong managerial skill, communication skill, interpersonal skills, self-esteem, and stress management for future leadership.\nKeywords: Ethical Ability.\n\nPEO-4. To motivate students to pursue higher studies, research & entrepreneurship in emerging technologies with expert guidance from industry and academia.\nKeywords: Motivation for Higher studies, Research & Entrepreneurship.',
        },
        {
          id: 'po',
          label: 'PO',
          content: '1. Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.\n\n2. Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.\n\n3. Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate considerations for the public health and safety and the cultural, societal and environmental considerations.\n\n4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.\n\n5. Modern tool Usage: Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.\n\n6. The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.\n\n7. Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of and need for sustainable development.\n\n8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.\n\n9. Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams and in multidisciplinary settings.\n\n10. Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.\n\n11. Project Management and Finance: Demonstrate knowledge and understanding of engineering and management principle and apply these to one\'s own work as member and leader in team to manage projects and in multidisciplinary environments.\n\n12. Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
        },
        {
          id: 'pso',
          label: 'PSO',
          content: 'PSO1: Enterprise Software Development – Design, develop, test, and maintain software systems for enterprises and specialized domains, aligning with industry needs.\n\nPSO2: Advanced Computing Expertise – Gain proficiency in advanced computing and programming to build intelligent and efficient solutions.\n\nPSO3: Legacy System Enhancement – Maintain, optimize, and modernize legacy computing systems for sustained usability and integration.',
        },
        {
          id: 'lo',
          label: 'LO',
          content: 'Learning Outcomes (LOs)\n\nLO-1. Acquire knowledge of advanced computing skill and programming expertise.\n\nLO-2. Capability to design, build, evaluate, and sustain software systems for business and enterprise applications.\n\nLO-3. Ability to develop, test and maintain Software Systems for Specific Application Domain and as per the industry need.\n\nLO-4. Develop expertise to maintain and extend usability of legacy computer systems.',
        }
      ],
      images: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg"
      ],
      gallery: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg",
        "/images/departments/cse/4-768x576.jpeg",
        "/images/departments/cse/5-768x576.jpeg",
        "/images/departments/cse/cse (1).jpg",
        "/images/departments/cse/WhatsApp-Image-2026-03-09-at-6.07.33-PM-1.jpeg",
        "/images/departments/cse/WhatsApp-Image-2026-03-11-at-3.41.52-PM-768x576.jpeg"
      ]
    },

    questionBank: {
      years: [
        { 
          id: "1st-year", 
          label: "1st Year", 
          color: "bg-[#B894B7]", 
          subjects: [] 
        },
        { 
          id: "2nd-year", 
          label: "2nd Year", 
          color: "bg-[#5B50C2]", 
          subjects: [] 
        },
        { 
          id: "3rd-year", 
          label: "3rd Year", 
          color: "bg-[#D18E47]", 
          subjects: [
            { name: "DATABASE MANAGEMENT SYSTEMS", href: "#" },
            { name: "OPERATING SYSTEM", href: "#" },
            { name: "COMPILER DESIGN", href: "#" },
            { name: "FLAT-SET-1", href: "#" },
            { name: "FLAT SET-2", href: "#" },
            { name: "COMPUTER GRAPHICS", href: "#" },
            { name: "DATA COMMUNICATION", href: "#" }
          ] 
        },
        { 
          id: "4th-year", 
          label: "4th Year", 
          color: "bg-[#C3594B]", 
          subjects: [] 
        },
      ],
      previousSemester: {
        label: "Previous Semester Questions",
        href: "https://drive.google.com/drive/folders/1VS1tfkMdzFSkDXX0NKdquVs8iGugrFpW"
      }
    },

    syllabus: [
      {
        program: "B.TECH.",
        years: [
          {
            title: "SYLLABUS FOR FIRST YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR SECOND YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 3RD SEM SYLLABUS", href: "#" },
              { label: "VIEW / DOWNLOAD 4TH SEM SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR THIRD YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 5TH SEM SYLLABUS", href: "#" },
              { label: "VIEW / DOWNLOAD 6TH SEM SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR FOURTH YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 4TH YEAR SYLLABUS", href: "#" }
            ]
          }
        ]
      }
    ],

    programmes: [
      {
        title: "B.Tech in Computer Science & Engineering (AI & ML) (CST)",
        seats: "120 Seats",
        details: "4-Year Full-Time Programme",
        sections: [
          {
            text: "The B.Tech (AI & ML) program prepares students for dynamic roles in the technology sector, focusing on the latest advancements and practical applications."
          },
          {
            text: "Students will explore a wide range of topics, including software development, systems architecture, network security, and intelligent systems, ensuring they are well-prepared for diverse career opportunities."
          }
        ]
      }
    ],

    laboratories: [
      { 
        name: "Programming Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Dev C++ IDE",
          "Code::Blocks IDE",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "Experiment Set 1",
            list: [
              "Write a program to print your Bio-data.",
              "Write a program in C to test the arithmetic operators.",
              "Write a program to find Simple Interest and Compound Interest."
            ]
          },
          {
            set: "Experiment Set 2",
            list: [
              "Test logical, bitwise, unary and ternary operators.",
              "Check whether a given year is a leap year.",
              "Calculate salary statement of an employee using basic pay, DA, HRA and TA."
            ]
          },
          {
            set: "Experiment Set 3",
            list: [
              "Enter marks of 4 subjects and calculate Total, Aggregate %, and Grade.",
              "Display the day of the week using switch case.",
              "Menu driven program to find total, average, smallest and largest."
            ]
          },
          {
            set: "Experiment Set 4",
            list: [
              "Check whether a number is palindrome.",
              "Generate prime numbers between two numbers.",
              "Print a pyramid star pattern."
            ]
          },
          {
            set: "Experiment Set 5",
            list: [
              "Find largest, smallest, sum and average of an array.",
              "Sort an array in ascending order.",
              "Insert an element in an array at a desired position."
            ]
          },
          {
            set: "Experiment Set 6",
            list: [
              "Swap two variables using function.",
              "Print Fibonacci series using function.",
              "Multiply two matrices using functions."
            ]
          },
          {
            set: "Experiment Set 7",
            list: [
              "Find GCD using recursion.",
              "Store and display student data using structure.",
              "Check string palindrome using pointer."
            ]
          },
          {
            set: "Experiment Set 8",
            list: [
              "Find smallest element and position using pointer.",
              "Implement realloc() and free().",
              "Demonstrate Dynamic Memory Allocation."
            ]
          },
          {
            set: "Experiment Set 9",
            list: [
              "Implement Linked List insertion and deletion.",
              "Implement Stack Push and Pop.",
              "Implement Queue insertion and deletion."
            ]
          },
          {
            set: "Experiment Set 10",
            list: [
              "Implement Quick Sort.",
              "Implement Linear Search.",
              "Implement Binary Search."
            ]
          }
        ],
        images: [
          "/images/programming-lab-img-1.jpeg",
          "/images/programming-lab-img-2.jpeg"
        ]
      },
      { 
        name: "Data Structures Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Dev C++ IDE",
          "Code::Blocks IDE",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Write a C program to implement a Sparse Matrix.",
              "Create a Stack using an Array and perform PUSH, POP and Traversal operations.",
              "Create a Queue using an Array and perform Insertion, Deletion and Traversal.",
              "Perform Creation, Insertion, Deletion and Traversal on a Single Linked List using functions.",
              "Perform Creation, Insertion, Deletion and Traversal on a Doubly Linked List using functions.",
              "Perform Creation, Insertion and Deletion operations on a Binary Tree.",
              "Write a C program to perform Bubble Sort.",
              "Write a C program to perform Insertion Sort.",
              "Write a C program to perform Selection Sort.",
              "Write a C program to perform Quick Sort.",
              "Write a C program to perform Merge Sort.",
              "Write a C program to implement Linear Search.",
              "Write a C program to implement Binary Search."
            ]
          }
        ]
      },
      { 
        name: "Object Oriented Programming Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat (for Applet / Web support if required)",
          "Windows 10 Education Operating System"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Write a Java program to print \u201CHello World!\u201D.",
              "Write a program to demonstrate data types, variables, operators, arrays, and control structures.",
              "Write a program to define a class and constructors and demonstrate constructor usage.",
              "Write a program to define class, methods, and objects and demonstrate method overloading.",
              "Write a program to demonstrate inheritance and method overriding.",
              "Write a program to demonstrate Packages in Java.",
              "Write a program to demonstrate Exception Handling.",
              "Write a program to demonstrate Multithreading.",
              "Write a program to demonstrate Applet structure and event handling.",
              "Write a program to demonstrate different Layout Managers in Java."
            ]
          }
        ]
      },
      { 
        name: "Web and Application Development Lab", 
        description: "The configuration supports the development and execution of web applications, front-end technologies, backend programming, and deployment activities required for the laboratory exercises and projects.",
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat Server (for Applet / Web Application support)",
          "Node.js and npm (for JavaScript runtime and package management)",
          "Visual Studio Code or any Code Editor",
          "Git and GitHub Desktop (for version control and collaboration)",
          "Postman (for API testing)",
          "Google Chrome / Mozilla Firefox Web Browser"
        ],
        experiments: [
          {
            set: "Introduction to Web Development with HTML, CSS, JavaScript",
            list: [
              "Intro to HTML (JSFiddle): Explore the components of an HTML file including HTML markup, CSS styling, and JavaScript code.",
              "HTML \u2013 Creating a Simple Web Page: Create a web page for the fan club of IBM founder Thomas J. Watson Sr.",
              "Unit Conversion using HTML5 Structural Elements: Create a Unit Converter web page that converts Temperature from Celsius to Fahrenheit, Weight from Kilograms to Pounds, Distance from Kilometers to Miles.",
              "CSS Basics \u2013 Styling Your Web Page: Create a webpage on the Solar System and learn to create a basic webpage, specify font family and size, use colors for styling, create borders.",
              "JavaScript: Create an HTML form that uses JavaScript to validate user input and dynamically update webpage content.",
              "JavaScript \u2013 Browser Console: Practice JavaScript concepts using the browser console.",
              "Simple Interest Calculator: Develop a calculator by modifying HTML, CSS, and JavaScript files and verifying webpage functionality.",
              "Single Page Portfolio Website: Create a portfolio website with sections About Me, Skills, Projects, Recommendations.",
              "Publish your Portfolio to GitHub Pages: Publish your portfolio website using GitHub Pages static hosting service."
            ]
          },
          {
            set: "Getting Started with Git and GitHub",
            list: [
              "GitHub Sign Up and Create Repo: Create a GitHub account, create a repository, and add files using the GitHub interface.",
              "Getting Started with Branches using Git Commands: Use Git commands in a cloud IDE to create and manage branches.",
              "Cloning and Forking GitHub Projects: Learn to fork repositories, clone them locally, create branches, commit changes, and submit pull requests.",
              "Practice Project Overview: Manage development and deployment of a shipping calculator web application using GitHub collaboration features.",
              "Practice Project Part 1 \u2013 GitHub UI: Create repository with README, license, Code of Conduct, and Contribution Guidelines.",
              "Practice Project Part 2 \u2013 Git CLI: Fork repository, edit code using Git CLI, add files, and submit pull request.",
              "Final Project Part 1 \u2013 GitHub UI: Create repository, choose license, add README, Code of Conduct, Contribution Guidelines and commit files."
            ]
          },
          {
            set: "Developing Front-End Apps with React",
            list: [
              "Content Rating Application: Create a React component that allows users to like or dislike content and track ratings.",
              "Function Component Event Planner Landing Page: Create a React landing page for an event planning organization with sections for features, testimonials, and contact form.",
              "Fetch Data Using useFetch: Use React hooks (useState, useEffect) and a custom hook to fetch and display data dynamically.",
              "Create Feedback Form for Survey: Create a feedback form with validation, confirmation dialog, and submission handling using React.",
              "Practice Project - Conference Event Planner: Develop an application for selecting conference rooms, equipment, and meals for events."
            ]
          },
          {
            set: "Developing Back-End Apps with Node.js and Express",
            list: [
              "First Server with Server-Side JavaScript: Create and run a Node.js web server and access it from a client.",
              "Promises and Callback: Create a Node.js application using promise callbacks.",
              "Async Callback Programming: Understand asynchronous callbacks and implement them in Node.js.",
              "CRUD Operations with Node.js and Express: Create a Friends List application with Create, Retrieve, Update, Delete operations and test endpoints with Postman.",
              "Express Server: Create an Express server, use middleware and JWT authentication, and render static HTML pages.",
              "Friends List Application Using Express Server with JWT: Secure CRUD operations with JWT authentication and test APIs using Postman.",
              "Book Review Application: Build a server-side book review application."
            ]
          }
        ]
      },
      { 
        name: "Database Engineering Lab", 
        description: "The objective of this laboratory is to provide hands-on experience in designing, implementing, and manipulating relational databases using SQL and PL/SQL. Students will learn database schema design, query processing, views, triggers, procedures, joins, and transaction control statements.",
        equipments: [
          "Processor : Intel Core i3 / higher",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Operating System : Windows 10 / Linux"
        ],
        software: [
          "Oracle Database / MySQL",
          "SQL Developer / MySQL Workbench",
          "Command Line SQL Client"
        ],
        experiments: [
          {
            set: "Experiment 1: Library Database",
            list: [
              "Consider the following schema: BOOK (Book_id, Title, Publisher_Name, Pub_Year), BOOK_AUTHORS (Book_id, Author_Name), PUBLISHER (Name, Address, Phone), BOOK_COPIES (Book_id, Programme_id, No_of_Copies), BOOK_LENDING (Book_id, Programme_id, Card_No, Date_Out, Due_Date), LIBRARY_PROGRAMME (Programme_id, Programme_Name, Address)",
              "Retrieve details of all books in the library including title, publisher, authors and number of copies.",
              "Get the borrowers who borrowed more than 3 books between Jan 2025 and Jun 2025.",
              "Delete a book from BOOK table and update related tables.",
              "Partition BOOK table based on publication year.",
              "Create a view showing available books and number of copies."
            ]
          },
          {
            set: "Experiment 2: College Database",
            list: [
              "Schema: STUDENT (REGNO, SName, Address, Phone, Gender), SEMSEC (SSID, Sem, Sec), CLASS (REGNO, SSID), COURSE (Subcode, Title, Sem, Credits), IAMARKS (REGNO, Subcode, SSID, Test1, Test2, Test3, FinalIA)",
              "List student details studying in 4th semester C section.",
              "Compute number of male and female students in each semester and section.",
              "Create a view for Test1 marks of student REGNO '1BP22CS101'.",
              "Calculate FinalIA as average of best two tests.",
              "Categorize students as Outstanding, Average, and Weak based on FinalIA."
            ]
          },
          {
            set: "Experiment 3: Order Database",
            list: [
              "Schema: SALESMAN (Salesman_id, Name, City, Commission), CUSTOMER (Customer_id, Cust_Name, City, Grade, Salesman_id), ORDERS (Ord_No, Purchase_Amt, Ord_Date, Customer_id, Salesman_id)",
              "Count customers with grades above Bangalore's average.",
              "Find salesman with more than one customer.",
              "List salesman with and without customers using UNION.",
              "Create a view showing salesman with highest order of the day.",
              "Delete salesman with id 1000 and remove all related orders."
            ]
          },
          {
            set: "Experiment 4: Privileges and Transactions",
            list: [
              "Tables: Departments (dept_no, dept_name, dept_location), Employees (emp_id, emp_name, emp_salary, dept_no)",
              "Grant all privileges on employees table.",
              "Grant selective privileges on employees table.",
              "Revoke all privileges.",
              "Revoke selective privileges.",
              "Implement SAVEPOINT in transactions."
            ]
          },
          {
            set: "Experiment 5: SQL Joins",
            list: [
              "Display employee and department details using INNER JOIN.",
              "Display employee name and department name using LEFT OUTER JOIN.",
              "Display employee name and department name using RIGHT OUTER JOIN.",
              "Display employees with salary greater than average salary."
            ]
          },
          {
            set: "Experiment 6: Election Commission Database",
            list: [
              "Schema: CONSTITUENCY (cons_id, csname, csstate, no_of_voters), PARTY (pid, pname, psymbol), CANDIDATES (cand_id, name, age, state, phone_no), VOTER (vid, vname, vage, vaddr)",
              "Find candidates contesting in more than one constituency in different states.",
              "Display the state having maximum constituencies.",
              "Create stored procedure to insert voter if age \u2265 18.",
              "Create stored procedure to display number of voters in a constituency.",
              "Create trigger to update voter count after voter insertion."
            ]
          },
          {
            set: "Experiment 7: Airline Flight Database",
            list: [
              "Schema: FLIGHTS (flno, distance, departs, arrives), AIRCRAFT (aid, aname, cruisingrange), CERTIFIED (eid, aid), EMPLOYEES (eid, ename, salary)",
              "Find pilots certified for Boeing aircraft.",
              "Find aircraft that can fly non-stop from Delhi to Mumbai.",
              "Find pilots certified for aircraft with range greater than 3000 miles.",
              "Find employees with highest and second highest salary.",
              "Find pilots certified for largest number of aircraft.",
              "Find total salary paid to employees."
            ]
          },
          {
            set: "Experiment 8: Cursor Implementation",
            list: [
              "Schema: Employee (E_id, E_name, Age, Salary)",
              "Create a cursor to extract employee records.",
              "Declare variables, open cursor, fetch values, and close cursor."
            ]
          },
          {
            set: "Experiment 9: Stored Procedure \u2013 Student Grading",
            list: [
              "Tables: Stud_Marks (Name, Total_Marks), Result (Roll, Name, Class)",
              "Create stored procedure proc_Grade to categorize students based on marks.",
              "Use PL/SQL block to call the procedure.",
              "Classify students as Distinction, First Class, and Higher Second Class."
            ]
          },
          {
            set: "Experiment 10: PL/SQL Fine Calculation",
            list: [
              "Schema: Borrower (Rollin, Name, Date_of_Issue, Name_of_Book, Status), Fine (Roll_no, Date, Amt)",
              "Accept Roll number and book name from user.",
              "Calculate fine based on number of days after issue.",
              "Update book status after submission.",
              "Store fine details if applicable.",
              "Use control structures and exception handling."
            ]
          }
        ]
      },
      { 
        name: "Computer Organization and Architecture Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "C / C++ Compiler (GCC / Dev C++ / Turbo C)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Apache Tomcat (for Applet / Web support if required)",
          "Hardware Simulation Tools (Logisim / Proteus)",
          "Microsoft Office / LibreOffice for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Simulation and Design of Fast Multiplication and Division Programs: Design and simulate programs that perform fast multiplication and division operations to understand arithmetic processing and algorithm efficiency in computer systems.",
              "Experiments using Hardware Training Kits: Perform experiments using hardware training kits to study the working and interfacing of devices such as floppy disk drives, dot matrix printers, and other peripheral components.",
              "Dismantling and Assembling of a Personal Computer: Dismantle and assemble a PC system to study internal components including connections, ports, chipsets, SMPS, and other hardware parts. Draw and label the block diagram of the motherboard and other relevant boards.",
              "Study Project on Hardware Technologies: Undertake a study project on various hardware technologies such as memory systems, serial bus, parallel bus, microprocessors, input/output devices, and motherboard architecture."
            ]
          }
        ]
      },
      { 
        name: "Design and Analysis of Algorithms Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "C / C++ Compiler (GCC / Dev C++ / Turbo C++)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE",
          "Graph Plotting Tools (GNU Plot / Excel / Python Matplotlib for analysis)",
          "Microsoft Office / LibreOffice for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Selection Sort: Sort a given set of n integer elements using the Selection Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n.",
              "Quick Sort: Sort a given set of n integer elements using the Quick Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n.",
              "Merge Sort: Sort a given set of n integer elements using the Merge Sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of time taken versus n.",
              "Greedy Method \u2013 Knapsack Problem: Write a program to solve the Knapsack problem using the Greedy approach and demonstrate the selection of items based on maximum profit and weight constraints.",
              "Dijkstra\u2019s Algorithm: Write a program to find the shortest path from a given vertex to all other vertices in a weighted connected graph using Dijkstra\u2019s algorithm.",
              "Kruskal\u2019s Algorithm: Write a program to find the Minimum Cost Spanning Tree (MCST) of a connected undirected graph using Kruskal\u2019s algorithm with Union-Find techniques.",
              "Prim\u2019s Algorithm: Write a program to find the Minimum Cost Spanning Tree (MCST) of a connected undirected graph using Prim\u2019s algorithm.",
              "Dynamic Programming Problems: Write a program to solve the All-Pairs Shortest Path problem using Floyd\u2019s algorithm. Write a program to solve the Travelling Salesperson Problem using Dynamic Programming. Write a program to solve the 0/1 Knapsack problem using Dynamic Programming.",
              "Subset Sum Problem: Design and implement a C++/Java program to find a subset of a given set S = {S1, S2, \u2026, Sn} of positive integers whose sum is equal to a given positive integer d.",
              "Hamiltonian Cycle: Design and implement a program to find all Hamiltonian cycles in a connected undirected graph using the Backtracking technique."
            ]
          }
        ]
      },
      { name: "Advanced Programming Lab", description: "Details and resources for the Advanced Programming Lab." },
      { 
        name: "Theory of Computation Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "JFLAP (Java Formal Languages and Automata Package)",
          "Java Development Kit (JDK)",
          "NetBeans IDE / Eclipse IDE (optional)",
          "Text Editor or IDE for documentation"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Introduction to Automata Simulation Tools: Installation and familiarization with automata simulation tools such as JFLAP.",
              "Design and Simulation of Deterministic Finite Automata (DFA): Construct DFA for given regular languages.",
              "Design and Simulation of Non-Deterministic Finite Automata (NFA): Construct NFA for various regular languages. Convert the designed NFA into an equivalent DFA.",
              "NFA with \u03B5-transitions: Design an NFA with epsilon (\u03B5) transitions for given regular expressions. Convert the \u03B5-NFA to an equivalent DFA.",
              "Finite Automata with Output (Moore and Mealy Machines): Design Moore and Mealy machines for specific output requirements.",
              "Context-Free Grammar (CFG) Design: Design CFGs for various context-free languages. Parse strings using the grammar and generate corresponding parse trees.",
              "Pushdown Automata (PDA) Simulation: Design a PDA for specific context-free languages.",
              "Turing Machine Design: Design and simulate a Turing machine to perform basic mathematical operations such as addition and subtraction."
            ]
          }
        ]
      },
      { 
        name: "Operating Systems Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu / Fedora / CentOS)",
          "GCC Compiler for C Programming",
          "Linux Terminal / Bash Shell",
          "Android Studio for Mobile Application Development",
          "Text Editor / IDE (VS Code / Code::Blocks / Sublime Text)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Installation of Operating System: Install and configure an operating system (Linux/Windows) and study the basic system environment.",
              "Linux Administrative Commands: Practice common Linux administrative commands for file management, process monitoring, and system administration.",
              "UNIX Shell Programming: Write and execute shell scripts to automate basic system tasks and operations.",
              "Process Management using System Calls: Write programs demonstrating system calls such as fork(), exit(), getpid(), wait(), and close().",
              "Synchronization Problems: Implement classical synchronization problems such as Dining Philosophers, Cigarette Smokers, or Sleeping Barber problems.",
              "CPU Scheduling Algorithms: Simulate CPU scheduling algorithms such as First Come First Serve (FCFS), Round Robin (RR), and Shortest Job First (SJF).",
              "Banker\u2019s Algorithm: Simulate Banker\u2019s Algorithm for deadlock avoidance and analyze system resource allocation.",
              "Page Replacement Algorithms: Write programs to simulate page replacement algorithms such as FIFO, LRU, and Optimal.",
              "Thread Programming: Write C programs to implement multithreading and demonstrate concurrent execution.",
              "Paging Scheme Implementation: Implement a paging scheme using C programming to demonstrate memory management techniques.",
              "Memory Allocation Methods: Write C programs to implement memory allocation techniques: First Fit, Worst Fit, Best Fit.",
              "Android Programming: Develop a basic Android mobile application to understand mobile operating system concepts."
            ]
          }
        ]
      },
      { 
        name: "Machine Learning Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux (Ubuntu) \u2013 optional for development",
          "Python 3.x",
          "Anaconda Distribution",
          "Jupyter Notebook / Google Colab",
          "Python Libraries: NumPy, Pandas, Matplotlib, Seaborn",
          "Machine Learning Libraries: Scikit-learn",
          "Deep Learning Libraries: TensorFlow / PyTorch",
          "IDE: VS Code / PyCharm / Jupyter Notebook"
        ],
        experiments: [
          {
            set: "Lab Assignments",
            list: [
              "Introduction to Python Programming: Install Python and set up Anaconda. Write basic Python scripts including loops, conditional statements, and functions.",
              "Introduction to Machine Learning Libraries using Python: Overview of commonly used libraries for machine learning and data analysis.",
              "Working with NumPy, Matplotlib, and Pandas: NumPy: Perform matrix operations, loops, and conditional computations. Matplotlib: Create and customize plots and visualizations. Pandas: Load, explore, and summarize datasets.",
              "Statistical Analysis using Python: Write a Python program to find the mean, median, mode, variance, and standard deviation of a list of numbers.",
              "Overview of Machine Learning Frameworks: Study the features and applications of Scikit-learn, TensorFlow, and PyTorch libraries.",
              "Linear Regression: Implement the Linear Regression algorithm using Python.",
              "Logistic Regression: Implement the Logistic Regression algorithm for classification tasks.",
              "k-Nearest Neighbors (k-NN): Implement the k-NN algorithm and analyze classification results.",
              "Decision Tree: Implement the Decision Tree algorithm for classification or prediction.",
              "Random Forest: Implement the Random Forest algorithm and evaluate model performance.",
              "Support Vector Machine (SVM): Implement the Support Vector Machine algorithm for classification tasks.",
              "Principal Component Analysis (PCA): Implement PCA for dimensionality reduction and visualization of datasets.",
              "K-Means Clustering: Implement the K-Means clustering algorithm to group similar data points.",
              "Real-World Applications: Image Classification, Text Classification, Regression Problems (e.g., Housing Price Prediction)."
            ]
          }
        ]
      },
      { 
        name: "Project for Product Development Lab", 
        description: "The course is organized as an independent project-based learning activity conducted in teams of 4\u20135 students. Each team is responsible for developing a product idea from concept to a stage where it is ready for potential market launch for a specific organization or business context.",
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Microsoft Office / LibreOffice for documentation and presentations",
          "Project Management Tools (MS Project / Trello / Asana)",
          "Data Analysis Tools (Excel / Google Sheets / Python-based tools)",
          "Presentation Tools (PowerPoint / Google Slides)",
          "Internet and Market Research Tools"
        ],
        experiments: []
      },
      { 
        name: "Compiler Design Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu / Fedora / CentOS) for compiler tools",
          "LEX / FLEX (Lexical Analyzer Generator)",
          "YACC / Bison (Parser Generator)",
          "GCC (C Compiler)",
          "Linux Environment or Compatible Terminal Emulator (Cygwin / Ubuntu WSL)",
          "Text Editor / IDE (VS Code / Sublime Text / Vim)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Implementation of Lexical Analyzer using LEX: Tokenization of a simple program. Handling identifiers, keywords, numbers, and operators.",
              "Design of Syntax Analyzer using YACC: Parsing arithmetic expressions. Parsing conditional and looping constructs such as if-else and while statements.",
              "Removing Left Recursion and Left Factoring: Manual implementation of algorithms for eliminating left recursion and left factoring in grammars.",
              "Implementation of Predictive Parser (LL(1)): Construct parsing table and simulate the parsing process.",
              "Implementation of Shift-Reduce Parser: Simulate stack operations used in shift-reduce parsing.",
              "Syntax Directed Translation: Construction of Abstract Syntax Trees (AST) for expressions.",
              "Intermediate Code Generation: Generate three-address code for arithmetic expressions. Implement backpatching for boolean expressions and control flow statements.",
              "Design and Implementation of Symbol Table: Implement operations such as insertion, lookup, and scope management.",
              "Implementation of Type Checking and Type Conversion.",
              "Basic Code Optimization Techniques: Constant folding. Dead code elimination. Strength reduction.",
              "Simulation of Runtime Environment: Activation record structure. Stack management for function calls.",
              "Mini Project: Development of a Simple Compiler: Design a compiler for a subset of a programming language."
            ]
          }
        ]
      },
      { 
        name: "Software Engineering Lab", 
        equipments: [
          "Processor : Intel(R) Core(TM) i3-10100 CPU @ 3.60 GHz",
          "RAM : 8 GB",
          "Storage : 256 GB SSD",
          "Monitor : 18\u201D TFT"
        ],
        software: [
          "Windows 10 Education Operating System",
          "Linux Distribution (Ubuntu) \u2013 optional",
          "UML Modeling Tools (StarUML / Visual Paradigm / Lucidchart)",
          "Diagram Design Tools (Draw.io / Creately)",
          "Project Management Tools (MS Project / Trello)",
          "Testing Tools (Selenium / JUnit / TestNG or other open-source testing tools)",
          "Documentation Tools (MS Word / Google Docs)"
        ],
        experiments: [
          {
            set: "List of Experiments",
            list: [
              "Analysis and Identification of Suitable Process Models: Study and analyze different software process models such as Waterfall, Spiral, Agile, and Incremental models.",
              "Work Breakdown Structure (WBS) and Estimation: Develop Work Breakdown Structures based on Process-Based, Product-Based, Geographic-Based, and Role-Based structures.",
              "Requirement Modeling \u2013 Structural Modeling: Develop an Entity Relationship (ER) Diagram to represent the structural aspects of the system.",
              "Requirement Modeling \u2013 Functional Modeling: Develop Context Flow Diagrams and Data Flow Diagrams (DFD) to represent system functionality.",
              "Requirement Modeling \u2013 Behavioral Modeling: Create State Transition Diagrams to illustrate system behavior and state changes.",
              "Object-Oriented Design \u2013 Use Case and Class Models: Design UML diagrams including Use Case Diagrams and Class Diagrams.",
              "Object-Oriented Design \u2013 Interaction Models: Develop interaction diagrams such as Sequence Diagrams and Communication Diagrams.",
              "Object-Oriented Design \u2013 Architectural Models: Create Package Diagrams, Component Diagrams, and Deployment Diagrams.",
              "Software Testing: Design and demonstrate test cases including Functional Testing and Non-Functional Testing using open-source testing tools.",
              "Storyboarding and User Interface Design: Design storyboards and user interface models to represent layout, navigation, and user interaction flow."
            ]
          }
        ]
      }
    ],

    faculties: [
      { name: "Mr.Mohini Prasad Mishra", designation: "Asst. Prof. & HOD", joining: "19/12/2022", qualification: "M.Tech", bputId: "T230128904" },
      { name: "Mrs.Nilima Baisakhi", designation: "Assistant Professor", joining: "19/12/2022", qualification: "M.Tech", bputId: "T230128903" },
      { name: "Dr.Biswaranjan Nayak", designation: "Professor", joining: "10/1/2009", qualification: "Ph.D", bputId: "T101728903" },
      { name: "Mr.Yashobanta Panda", designation: "Associate Professor", joining: "16/8/2011", qualification: "M.Tech", bputId: "T111828907" },
      { name: "Mr.Satya Sundar Mishra", designation: "Assistant Professor", joining: "7/7/2014", qualification: "M.Tech", bputId: "T141928902" },
      { name: "Mrs.Sasmita Mishra", designation: "Assistant Professor", joining: "8/8/2011", qualification: "M.Tech", bputId: "T121728902" },
      { name: "Mr.Santosh kumar mohapatra", designation: "Assistant Professor", joining: "10/8/2007", qualification: "M.Tech", bputId: "T210128914" },
      { name: "Mr.Pradyumna Kumar Nayak", designation: "Assistant Professor", joining: "16/12/2013", qualification: "M.Tech", bputId: "T142728902" },
      { name: "Mr.Saroj Kumar Mohanty", designation: "Assistant Professor", joining: "13/8/2019", qualification: "M.Tech", bputId: "T250628944" },
      { name: "Mr.Prakash Chandra Sahoo", designation: "Assistant Professor", joining: "7/9/2015", qualification: "M.Tech", bputId: "T210128905" },
      { name: "Mr.Biswajit Sarangi", designation: "Assistant Professor", joining: "1/2/2021", qualification: "M.Tech", bputId: "T210128904" },
      { name: "Mr.Chandan Kumar Panda", designation: "Assistant Professor", joining: "8/11/2025", qualification: "M.Tech", bputId: "T250728922" }
    ]
  }

,

  "civil-engineering": {
    name: "Civil Engineering",
    shortName: "CE",
    theme: {
      primary: "text-[#B92A32]",
      bgPrimary: "bg-[#B92A32]",
      borderPrimary: "border-[#B92A32]",
      borderPrimary10: "border-[#B92A32]/10",
      bgPrimary10: "bg-[#B92A32]/10",
      hoverTextPrimary: "hover:text-[#B92A32]",
      hoverBgPrimary: "hover:bg-[#B92A32]",
      shadowPrimary20: "shadow-[#B92A32]/20",
      accent: "text-[#E67E22]",
      bgAccent: "bg-[#E67E22]",
      secondary: "text-[#4A4A4A]",
      gradient: "from-[#2C3E50]/95 via-[#34495E]/90 to-[#7F8C8D]/80",
      btn: "bg-[#C0392B]",
      btnHover: "hover:bg-[#E74C3C]",
    },

    sidebar: {
      heading: "CIVIL\nENGINEERING",
      items: [
        { id: "overview", label: "DEPARTMENT OVERVIEW", icon: "BookOpen" },
        { id: "syllabus", label: "SYLLABUS", icon: "FileText" },
        { id: "faculty", label: "FACULTY", icon: "Users" },
        { id: "laboratories", label: "LABORATORIES", icon: "Beaker" },
      ]
    },

    hero: {
      titleLine1: "Civil",
      titleLine2: "Engineering",
      subtitle: "Building the foundations of tomorrow with innovative and sustainable infrastructure solutions.",
      image: "https://images.unsplash.com/photo-1541888086925-0c13bb105ecf?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Civil Engineering",
      stats: [
        { label: "Founded", value: "2013" },
        { label: "BPUT Affiliated", value: "Yes" },
        { label: "AICTE Approved", value: "Yes" }
      ]
    },

    overview: {
      paragraphs: [
        "The Department of Civil Engineering (CE) at Trident Academy of Technology (TAT), started in the year 2013 as an addition to the existing stream of technical degree courses, at present offers an undergraduate degrees program of 204 credit points in civil engineering (B.Tech. in Civil) from Biju Pattnaik University of Technology (BPUT), Odisha. The program curricular distributed over 8 semesters is delivered under the able headship of Mr. Sanjay Kumar Behera – an eminent professor fortified with vast field exposure and experience, in a congenial ambience by a group of highly experienced and committed faculty members with the aim of providing a wide spectrum of knowledge and exposure on various key components of the civil engineering curricula: in fundamental knowledge covering mathematics, physics, chemistry, thermodynamics, metallurgy, engineering drawing, etc.; building up proficiency and exposure in the specialized areas, such as environmental engineering, structural engineering, water resource engineering, etc.",
        "The Department of Civil Engineering adequately equipped with state-of-the-art up-to-date Lab infrastructure delivers the courses by a group of competent and dedicated faculty members and field instructors who help them develop strong and dependable proficiency in various structural design skills which yield them with high degree of confidence in designing effective and efficient solutions to real-life problems. Apart from rigorously drilling down the students with regular classroom delivery on academic curricula as per BPUT guidelines, the department emphasizes on boosting their professional skill, communication skill, inter-personal skill to make them competent enough to understand significance of both ethical issues in Civil Engineering and the importance of Civil Engineering work in the society. In general, as a part of the Trident Culture, students are plugged in with the “Learn with Fun” approach to nurture their intellectual, technological and personal skill development by involving them through varieties of technical and intellectual clubs, and professional societies. Academic environment at Trident is sufficient enough to trigger their mindset for lifelong learning to maintain them as successful Civil that are necessary for success in industry, society and research."
      ],
      vision: "To stand as a model of excellence in technical education and research and a collaborative hub with excellent facilities where leading civil engineering research serves the needs of a broad array of disciplines, and innovations from various fields to enrich civil engineering knowledge and practices in order to produce brilliant technocrats of the nation.",
      mission: [
        "To produce unbounded academic environment in technical research to serve the current generation to be proficient in National and International platforms.",
        "To be excel in the field of all disciplines of Civil Engineering to facilitate the students with innovations and best practices",
        "To promote skill development for enhancing professional and academic growth to meet social challenges of infrastructural and Research organisations of nation.",
        "To impart leadership quality through dissemination of knowledge with professional to ethical codes of conduct of society for future professional practices."
      ],
      po: [
        "An ability to apply knowledge of mathematics, science, and engineering.",
        "An ability to design and conduct experiments, as well as to analyze and interpret data.",
        "An ability to design a system, component, or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability.",
        "An ability to function on multidisciplinary teams.",
        "An ability to identify, formulate, and solve engineering problems.",
        "An understanding of professional and ethical responsibility.",
        "An ability to communicate effectively.",
        "The broad education necessary to understand the impact of engineering solutions in a global, economic, environmental, and societal context.",
        "A recognition of the need for, and an ability to engage in life-long learning.",
        "A knowledge of contemporary issues.",
        "An ability to use the techniques, skills, and modern engineering tools necessary for engineering practice."
      ],
      peo: [
        "The Program Educational Objectives of the Civil Engineering degree program are to prepare graduates who will be successful in their chosen career paths by:",
        "• becoming productive and valuable engineers in the civil engineering sector,",
        "• pursuing and completing graduate studies to become competent researchers, and/or",
        "• ability to play leadership roles in their professional, as well as in their societal career."
      ],
      pso: [
        "To acquire the knowledge of planning and design in construction of various structures in development of civil engineering with application of computer.",
        "To establish an efficient designer and consultant in various fields and technical resource person in civil engineering works.",
        "To expertise as a construction engineer in various structural works like dams, bridges, water retaining structures, harbours, airports, railways and highways handling the critical situations and manage efficiently as a safety engineer."
      ],
      lo: [
        "To acquire the knowledge of planning and design in construction of various structures in development of civil engineering with application of computer.",
        "To establish an efficient designer and consultant in various fields and technical resource person in civil engineering works.",
        "To expertise as a construction engineer in various structural works like dams, bridges, water retaining structures, harbours, airports, railways and highways handling the critical situations and manage efficiently as a safety engineer."
      ],
      tabs: [
        {
          id: "diploma",
          label: "Diploma",
          content: "Diploma in Civil Engineering - 60 Seats\n\n• Strong entry pathway into the infrastructure and construction industry with practical, skill-focused training.\n• Hands-on learning through labs, fieldwork, and project-based activities that build real engineering competence.\n• High employability as diploma civil engineers are in demand for site supervision, surveying, drafting, quantity estimation, quality control, and maintenance roles.\n• Opportunities in government sectors such as PWD, Water Resources, Housing & Urban Development, Rural Development, and Municipal Engineering as Junior Engineers (JE).\n• Excellent scope in private industry including construction companies, contractors, consultancies, real estate developers, and infrastructure firms.\n• Cost-effective & time-efficient program that enables students to start a professional career earlier.\n• Pathway to higher studies—lateral entry to B.Tech (direct 2nd year), and later M.Tech or advanced specializations.\n• Opportunities for entrepreneurship in surveying, estimation, contracting, and material testing services."
        },
        {
          id: "btech",
          label: "B.Tech",
          content: "B.Tech. in Civil Engineering - 30 Seats\n\n• Foundation of all infrastructure — roads, bridges, buildings, water systems, smart cities, airports, and more.\n• High demand in both government and private sectors due to continuous national development.\n• Diverse career options across design, construction, planning, surveying, project management, environmental engineering, and emerging digital technologies.\n• Strong job security with wide opportunities in government departments, PSUs, and top private companies.\n• Scope for innovation in sustainable construction, green infrastructure, disaster-resilient design, and advanced materials.\n• Excellent higher-study pathways (M.Tech, MS, MBA, Ph.D., research fellowships).\n• Entrepreneurial potential through consulting firms, construction companies, material testing labs, and digital engineering services.\n• Blend of creativity and engineering—designing real-world structures that directly improve society.\n• Ever-growing relevance as India and the world expand infrastructure through mega projects, smart city missions, and modern transportation networks."
        },
        {
          id: "mtech-env",
          label: "M.Tech (Env.)",
          content: "M.Tech. in Environmental Engineering \u2013 18 Seats\n\n\u2022 Specialized expertise in managing and protecting natural resources through sustainable engineering solutions.\n\u2022 High national and global demand due to increasing focus on climate change, pollution control, waste management, and environmental sustainability.\n\u2022 Critical role in public health & safety\u2014environmental engineers design systems for clean water supply, wastewater treatment, air quality control, and solid waste management.\n\u2022 Opportunities across major sectors:\n  \u2013 Pollution Control Boards\n  \u2013 Municipal Corporations\n  \u2013 Water & Wastewater Treatment Plants\n  \u2013 Environmental Consultancies\n  \u2013 Industries (mining, steel, power, chemical)\n  \u2013 Research & policy organizations\n\u2022 Key job roles: Environmental Engineer, Sustainability Specialist, EIA Consultant, Water Resource Engineer, Environmental Analyst, and Research Engineer.\n\u2022 Strong research scope in climate resilience, green technologies, renewable energy systems, waste-to-resource innovation, and environmental monitoring.\n\u2022 Pathway to Ph.D., academia, and advanced research careers in premier institutes and government labs.\n\u2022 Excellent prospects for entrepreneurship\u2014environmental audits, EIA services, waste management startups, water treatment solutions, and environmental monitoring labs.\n\u2022 Aligned with national missions such as Swachh Bharat, Namami Gange, Smart Cities Mission, and climate action initiatives."
        },
        {
          id: "mtech-struct",
          label: "M.Tech (Struct.)",
          content: "M.Tech. in Structural Engineering \u2013 18 Seats\n\nThese programs are delivered under the able leadership of Mr. Sanjay Kumar Behera (HoD, Civil), an eminent academician with extensive field exposure and experience. A team of highly qualified, dedicated, and experienced faculty members contributes to creating a conducive learning environment that focuses on delivering a broad spectrum of knowledge aligned with the civil engineering curriculum, while also preparing students to become job-ready professionals capable of contributing meaningfully to society.\n\nThe department boasts state-of-the-art laboratory facilities, enabling students to build strong technical proficiency and confidence in designing effective and efficient engineering solutions to real-world problems. In addition to structured classroom teaching as per BPUT guidelines, the department places significant emphasis on enhancing students\u2019 professional competencies, communication skills, and interpersonal abilities.\n\nTo strengthen industry\u2013academia collaboration and ensure holistic exposure, the department has signed MoUs with leading organizations such as NBCC and OCC, and is also associated with OMC, IDCO, OBCC, and other reputed agencies. These partnerships play a pivotal role in enriching students\u2019 industrial training and practical understanding.\n\nAs a part of the Trident Culture, students are engaged through the \u201cLearn with Fun\u201d approach, which nurtures intellectual, technological, and personal growth. Various technical and intellectual clubs, as well as professional societies, actively involve students in hands-on learning, innovation, and skill-building activities. The academic environment at Trident is intentionally crafted to cultivate a mindset geared toward lifelong learning, thereby equipping students with the skills and attitudes essential for success in industry, research, and society at large."
        }
      ]
    ,
      images: [
        "/images/departments/civil/Untitled design (1).png",
        "/images/departments/civil/Untitled design (2).png",
        "/images/departments/civil/WhatsApp Image 2025-05-19 at 12.50.15_0c400f24.jpg"
      ],
      gallery: [
        "/images/departments/civil/Untitled design (1).png",
        "/images/departments/civil/Untitled design (2).png",
        "/images/departments/civil/WhatsApp Image 2025-05-19 at 12.50.15_0c400f24.jpg",
        "/images/departments/civil/WhatsApp Image 2025-05-19 at 12.50.16_a943ecc6.jpg",
        "/images/departments/civil/WhatsApp Image 2026-02-24 at 4.10.53 PM.jpeg",
        "/images/departments/civil/WhatsApp Image 2026-02-24 at 4.10.54 PM.jpeg"
      ]
    },
    
    syllabus: {
      documents: [
        { title: "SYLLABUS FOR FIRST YEAR", fileUrl: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/CIVIL/Civil-Engineering-1ST-YEAR.pdf", btnText: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS" },
        { title: "SYLLABUS FOR SECOND YEAR", fileUrl: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/CIVIL/Civil-Engineering-2ND-YEAR.pdf", btnText: "VIEW / DOWNLOAD 2ND YEAR SYLLABUS" },
        { title: "SYLLABUS FOR THIRD YEAR", fileUrl: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/CIVIL/Civil-Engineering-3RD-YEAR.pdf", btnText: "VIEW / DOWNLOAD 3RD YEAR SYLLABUS" },
        { title: "SYLLABUS FOR FOURTH YEAR", fileUrl: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/CIVIL/Civil-Engineering-4TH-YEAR.pdf", btnText: "VIEW / DOWNLOAD 4TH YEAR SYLLABUS" }
      ],
      addOnCourses: [
        { name: "Auto CAD", fileUrl: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/CIVIL/Auto-Cad.pdf" },
        { name: "Revit", fileUrl: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/CIVIL/Revit.pdf" },
        { name: "Land Surveying", fileUrl: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/CIVIL/Land-Surveying.pdf" },
        { name: "Staad Pro", fileUrl: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/CIVIL/staad-pro.pdf" }
      ]
    },

    laboratories: [
        {
          name: "MATERIAL TESTING LABORATORY",
          experimentList: [
            "Tests on cement: Determination of Fineness modulus by sieve analysis and/or by air permeability method, standard consistency, setting times, soundness, specific gravity, compressive strength.",
            "Tests on Aggregates: Sieve analysis of fine aggregate and coarse aggregates for determination of fineness modulus and grain size distribution, determination of water absorption and specific gravity of fine aggregate and coarse aggregates, bulking of sand, crushing value of coarse aggregates.",
            "Tests on Steel: Tensile strength of mild steel and HYSD Bars.",
            "Tests on Bricks: Determination of shape, size and Water absorption of Bricks.",
            "Tests on Concrete: Compressive strength, flexural strength and split tensile strength of concrete."
          ],
          equipmentList: [
            "SIEVE SET",
            "COMPRESSION TESTING MACHINE",
            "CUBE MOULD(70.6MM)",
            "WEIGHING BALANCE(30KG)",
            "TROWEI",
            "TRAY",
            "LE CHATELIER APPARATUS",
            "LE CHATELIER FLASK",
            "MEASURING CYLINDER(500ml)",
            "MEASURING CYLINDER(250ml)",
            "OVEN",
            "SPECIFIC GRAVITY BOTTOL",
            "STOP WATCH",
            "VICAT APPARATUS",
            "WATER BATH"
          ]
        },
        {
          name: "SURVEY FIELD WORK",
          experimentList: [
            "Testing of chain measurement of correct length of the line",
            "Traversing by chain surveying",
            "Traversing by compass survey",
            "Intersection method of plane table survey",
            "Traversing by plane table",
            "Use of dumpy level and fly leveling",
            "longitudinal section and cross section of road",
            "Contouring",
            "Measurement of horizontal and vertical angle by theodolite"
          ],
          equipmentList: [
            "Chain, 30 m length",
            "Tape, 30 m length",
            "Arrow pin",
            "Ranging rod",
            "Total station",
            "Theodolite",
            "Dumpy level",
            "Prismatic compass",
            "Plane table with all accessories",
            "Clinometers",
            "Leveling staff",
            "Auto level",
            "Total Station",
            "GPS",
            "DGPS"
          ]
        },
        {
          name: "GEOTECHNICAL LABORATORY",
          experimentList: [
            "01. Determination of specific gravity of soil grains",
            "02. Determination of grain size distribution of soil\n    a) Sieve test\n    b) Hydrometer",
            "03. Determination of Atterberg limits of soil\n    a) Liquid limit\n    b) Plastic limit\n    c) Shrinkage limit of soil",
            "04. Measurement of soil compaction in field\n    a) Core cutter method\n    b) Sand replacement method",
            "05. Determination of Density – water content relationship of soil\n    a) Proctor compaction test\n    b) Modified proctor compaction test\n    c) Use of proctor penetration needle",
            "06. Determination of relative density of granular soil",
            "07. Determination of shear strength parameter of soil\n    a) Shear box test\n    b) Tri-axial compression test\n    c) Unconfind compression test\n    d) Vane shear test",
            "08. Determination of consolidation characteristics of soil using fixed ring odometer",
            "09. Determination of California Bearing ratio (CBR) of soaked and un-soaked soil specimens",
            "10. Determination of coefficient of permeability of soil\n    a) Constant head permeameter\n    b) Falling head permeameter"
          ],
          equipmentList: [
            "CONSOLIDATION APPARATUS",
            "DIRECT SHEAR TEST APPARATUS",
            "FIELD DENSITY CORE CUTTER",
            "HYDROMETER",
            "HAND OPERATED EXTRACTOR APPARATUS",
            "LIQUID LIMIT DEVICE APPARATUS",
            "PERMEABILITY APPARATUS",
            "OVER HEAD TANK APPARATUS",
            "PYCNOMETER",
            "PLASTIC LIMIT APPARATUS",
            "RELATIVE DENSITY APPARATUS",
            "SAND POURING CYLINDER APPARATUS",
            "SHRINKAGE LIMIT APPARATUS",
            "SHIVE SHAKER APPARATUS",
            "TRIAXIAL APPARATUS",
            "UNCONFINED COMPRESSION APPARATUS",
            "VANE SHEAR APPARATUS APPARATUS"
          ]
        },
        {
          name: "TRANSPORTATION ENGINEERING LAB.",
          experimentList: [
            "Determination of aggregate crushing value.",
            "Determination of Los Angeles abrasion value of aggregates.",
            "Determination of aggregate impact value.",
            "Determination of penetration value of bitumen.",
            "Determination of softening point value of bitumen.",
            "Determination of ductility value of bitumen.",
            "Determination of flash and fire point of bitumen.",
            "Determination of specific gravity of bitumen.",
            "Determination of stripping value of aggregate.",
            "Determination of flakiness index and elongation index of coarse aggregate.",
            "Determination of specific gravity and water absorption of coarse aggregate.",
            "Determination of CBR of soil subgrade.",
            "Design of GSB and WMM",
            "Marshal method of mix design."
          ],
          equipmentList: [
            "AGGREGATE CROSSING VALUE APPARATUS",
            "AGGREGATE IMPACT TEST APPARATUS",
            "CBR APPARATUS",
            "DUCTILITY TESTING MACHINE",
            "DEVAL ATTRITION TESTING MACHINE",
            "DENSITY BASKET WITH HANDLE",
            "FLASH AND FIRE POINT APPARATUS",
            "FILM STRIPPING APPARATUS",
            "LOSS ANGELES ABRASION TEST MACHINE",
            "LENGTH GAUGE",
            "MARSALL STABILITY TEST APPARATUS",
            "RING AND BALL APPARATUS",
            "THICKNESS GAUGE",
            "THERMOMETER",
            "UNIVERSAL PENETROMETER"
          ]
        },
        {
          name: "CONCRETE AND STRUCTURAL LAB.",
          experimentList: [
            "01. Workability test of concrete\n    a) Slump test\n    b) Compaction factor test\n    c) Flow table test",
            "02. Cube test of concrete",
            "03. Cylinder test for concrete.",
            "04. Split tensile strength of concrete.",
            "05. Prism Test for determining modulus of rupture of concrete.",
            "06. Design of concrete Mix.",
            "07. Failure of RC beam in bending and shear."
          ],
          equipmentList: [
            "CTM machine",
            "Flexural testing machine",
            "Cube mould ( 150 X150X150 ) mm",
            "Cube mould ( 70.6X 70.6X70.6 ) mm",
            "Cylinder mould",
            "Slump test apparatus",
            "Compaction factor apparatus",
            "Flow table"
          ]
        },
        {
          name: "HYDRAULICS LAB",
          experimentList: [
            "1. Proof of Bernoulli's theorem.",
            "2. Friction flow through pipes.",
            "3. Determination of Reynolds number.",
            "4. Determination of metacentric height.",
            "5. Determination of coefficient of discharge for v-notch.",
            "6. Determination of coefficient of discharge for venturimeter.",
            "7. Impact of jet.",
            "8. Flow through orifice.",
            "9. Proof of stokes law.",
            "10. Work done by pelton wheel turbine.",
            "11. Efficiency of Francis turbine.",
            "12. Discharge through centrifugal pump."
          ],
          equipmentList: [
            "Impact of jet on vane apparatus",
            "Reciprocating pump test rig",
            "Centrifugal pump test rig",
            "Pelton wheel turbine test rig",
            "Francis turbine test rig",
            "Kaplan turbine test rig"
          ]
        },
        {
          name: "CAD LAB",
          experimentList: [
            "1. Introduction to MATLAB and Excel",
            "2. Plotting of Shear force and bending moment diagram of beam using MATLAB",
            "3. Drawing of Shear force and bending moment diagram of frames using MATLAB",
            "4. Plotting of Shear force and bending moment diagram of arches using MATLAB",
            "5. Calculation and plotting of ILDs of beam using MATLAB",
            "6. Calculation and plotting of ILDs of frames using MATLAB",
            "7. Calculation and plotting of ILDs of arches using MATLAB",
            "8. Plotting of stress contours using MATLAB",
            "9. Introduction to Graphic Software: Basic commands, plotting of graphs and data analysis."
          ],
          equipmentList: []
        }
    ],
    faculty: [
      { name: "Dr. Roma Sahu", designation: "Associate Professor", doj: "7/2/2020", qualification: "Ph.D", bputId: "T220128901" },
      { name: "Mr. Tapan Kumar Nayak", designation: "Assistant Professor", doj: "6/7/2015", qualification: "M.Tech", bputId: "T163528902" },
      { name: "Mr. Sibananda Rout", designation: "Assistant Professor", doj: "11/9/2017", qualification: "M.Tech", bputId: "T240128915" },
      { name: "Mr. Biswajit Nayak", designation: "Associate Professor", doj: "25/9/2017", qualification: "M.Tech", bputId: "T171289846" },
      { name: "Mr. Satya Prakash Pradhan", designation: "Assistant Professor", doj: "10/8/2018", qualification: "M.Tech", bputId: "T220228902" },
      { name: "Mr. J Nihar Ranjan", designation: "Assistant Professor", doj: "7/6/2023", qualification: "M.Tech", bputId: "T230128906" },
      { name: "Mrs. Ankita Bohidar", designation: "Assistant Professor", doj: "8/6/2023", qualification: "M.Tech", bputId: "T230128909" },
      { name: "Mr. Sanjay Kumar Behera", designation: "Asst. Prof. & HOD", doj: "1/2/2016", qualification: "M.Tech", bputId: "T163528903" },
      { name: "Mr. Sarbajit Panda", designation: "Assistant Professor", doj: "26/2/2024", qualification: "M.Tech", bputId: "T240128901" },
      { name: "Mrs. Smruti Saswati Dash", designation: "Assistant Professor", doj: "20/9/2023", qualification: "M.Tech", bputId: "T240728914" },
      { name: "Dr. Sankalp Raj", designation: "Assistant Professor", doj: "30/9/2024", qualification: "Ph.D", bputId: "T240128934" },
      { name: "Dr. Prabodha Kumar Pradhan", designation: "Associate Professor", doj: "22/1/2025", qualification: "Ph.D", bputId: "T250728914" }
    ]
  },

  "biotechnology-engineering": {
    name: "Biotechnology Engineering",

    meta: {
      title: "Biotechnology Engineering — Trident Academy of Technology",
      description: "Department of Biotechnology Engineering at Trident Academy of Technology.",
    },

    hero: {
      titleLine1: "School of",
      titleLine2: "Biotechnology",
      subtitle: "INNOVATING FOR A HEALTHIER TOMORROW\nThe School of Biotechnology offers advanced programmes fostering research and innovation in healthcare, agriculture, and environmental sustainability. Students work on cutting-edge projects in state-of-the-art labs, bridging the gap between science and real-world impact.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Biotechnology Engineering",
      stats: [
        { label: "Established", value: "2018" },
        { label: "B.Tech Seats", value: "30" },
        { label: "Int. M.Tech Seats", value: "60" }
      ],
    },

    acmBanner: null,

    sidebar: {
      heading: "BIOTECHNOLOGY\nENGINEERING",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen", href: "/biotechnology-engineering/overview" },
        { id: "syllabus", label: "Syllabus", icon: "Layers", href: "/biotechnology-engineering/syllabus" },
        { id: "faculty", label: "Faculty", icon: "Users", href: "/biotechnology-engineering/faculty" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker", href: "/biotechnology-engineering/laboratories" }
      ],
    },

    homeContent: {
      paragraphs: [
        "The Biotechnology department was established in 2018 at Trident Academy of Technology, offering a B.Tech. program with an intake of 30 students and introducing an Integrated M.Tech. program with an intake of 60 students from the academic year 2026, committed to excellence in biotechnology education and innovation.",
        "The main aims and objectives of the department are: To enhance skills of the students by training to excel in bioindustries through research and development, to inculcate the spirit of innovation and creativity in young minds to solve human problems with sound research aptitude, to create a serene research environment in different areas of biotechnology pertinent to society, environment and industry, to enable the graduates to identify, analyze, design and solve problems related to the field of biotechnology with strong foundation on the basic science, biology and IT related applications, to provide theoretical and practical concept to students in the field of biotechnology so that they will be able to apply this broad knowledge to serve the society in a better way, to motivate and help the students to prepare for various competitive examinations like GATE, CSIR-NET, IARI, etc., to enhance the innovative ideas and skills in the field of biotechnology to earn jobs in top leading biotechnology industries, to create an awareness about the importance of biotechnology to solve social economical problems.",
      ],
      salientFeatures: [
        "Presently there are 10 dedicated and committed teaching faculty members in this department with various specializations like Recombinant DNA Technology, Environmental Biotechnology, Immunology and Immunotechnology, Bioprocess Technology, Industrial Microbiology, Bioinformatics, Protein Engineering, Enzyme Technology, Animal Biotechnology, Molecular Biology and Biochemistry.",
        "Department is actively involved in maintaining corporate relationship for providing placement to the students.",
        "The academic performance of our students in University exams is outstanding.",
        "Department organizes workshops and seminars regularly for the interest of students and faculties.",
        "Professors and Technical experts are invited from various universities and industries for providing additional advanced information in the field of biotechnology for the benefits of students.",
        "Department has excellent infrastructure and laboratory facilities to provide hands on training in frontier area of biotechnology."
      ]
    },

    overview: {
      paragraphs: [
        "The Department of Biotechnology at Trident Academy of Technology (TAT), started in the year 2018 as an addition to the existing stream of technical degree courses, at present offers an undergraduate degree program of 160 credit points in B.Tech. in Biotechnology from Biju Patnaik University of Technology (BPUT), Odisha and the program curricula are distributed over 8 semesters. Presently there are 10 dedicated, committed and highly experienced teaching faculty members in this department with various specializations like Recombinant DNA Technology, Environmental Biotechnology, Immunology, Immunotechnology, Bioprocess Technology, Industrial Microbiology, Bioinformatics, Protein Engineering, Enzyme Technology, Animal Biotechnology, Plant Biotechnology, Molecular Biology and Biochemistry.",
        "Department organizes workshops and seminars regularly for the interest of students and also organizes study tour for them to various industries and national research institutes. Professors and Technical experts are invited from various universities and industries for providing additional advanced information in the field of biotechnology for the benefits of students. Apart from rigorously drilling down the students with regular classroom delivery on academic curricula as per BPUT guidelines, the department emphasizes on making students to identify, analyze, design and solve problems related to the field of biotechnology with strong foundation on the basic science, biology and IT related application. Department not only provides good theoretical and practical concept but also motivate and help the students to prepare for various competitive examinations like GATE, CSIR-NET, IARI, etc. In general, as a part of the Trident culture, students are plugged in with the “learn with fun” approach to nurture their intellectual, technological and personal skills development by involving them through varieties of technical and intellectual club, and professional societies. Academic environment at Trident is sufficient enough to elicit their mindset for life long learning to maintain them as successful person that are very much necessary for success in research, industry and society."
      ],
      vision: "To produce competent biotechnologists who can use premium processes and applications to improve agriculture, industry and health care sectors and provide sustainable development to the present society.",
      mission: [
        "To enhance skills of the students by training to excel in bioindustries through research and development.",
        "To inculcate the spirit of innovation and creativity in young minds to solve human problems with sound research aptitude.",
        "To create a serene research environment in different areas of biotechnology pertinent to society, environment and industry.",
        "To enable the graduates to identify, analyze, design and solve problems related to the field of biotechnology with strong foundation on the basic science, biology and IT related applications.",
        "To provide theoretical and practical concept to students in the field of biotechnology so that they will be able to apply this broad knowledge to serve the society in a better way.",
        "To motivate and help the students to prepare for various competitive examinations like GATE, CSIR-NET, IARI, etc.",
        "To enhance the innovative ideas and skills in the field of biotechnology to earn jobs in top leading biotechnology industries.",
        "To create an awareness about the importance of biotechnology to solve social economical problems."
      ],
      tabs: [
        {
          id: 'btech',
          label: 'B.Tech in Biotechnology Engineering',
          content: 'The B.Tech program in Biotechnology Engineering combines engineering principles with biological sciences to foster innovation in healthcare, agriculture, and environmental sustainability.\n\nDuration: 4-Year Full-Time Programme\nIntake: 30 Seats'
        },
        {
          id: 'mtech',
          label: 'Integrated M.Tech',
          content: 'The Integrated M.Tech program provides an advanced curriculum tailored to meet the growing demands of bioindustries and research organizations.\n\nDuration: 5-Year Full-Time Programme (From 2026)\nIntake: 60 Seats'
        }
      ],
      images: [
        "/images/biotech_overview.jpg"
      ]
    },

    programmes: [
      {
        title: "B.Tech in Biotechnology Engineering",
        seats: "30 Seats",
        details: "4-Year Full-Time Programme",
        sections: [
          {
            heading: "Programme Overview",
            text: "The B.Tech program in Biotechnology Engineering combines engineering principles with biological sciences to foster innovation in healthcare, agriculture, and environmental sustainability."
          }
        ]
      },
      {
        title: "Integrated M.Tech in Biotechnology Engineering",
        seats: "60 Seats",
        details: "5-Year Full-Time Programme (From 2026)",
        sections: [
          {
            heading: "Programme Overview",
            text: "The Integrated M.Tech program provides an advanced curriculum tailored to meet the growing demands of bioindustries and research organizations."
          }
        ]
      }
    ],
    faculties: [
      { name: "Dr. Arup Sarkar", designation: "Professor", joining: "15/10/2014", qualification: "Ph.D", bputId: "T171289843" },
      { name: "Dr. Deoraj Sharma", designation: "Asso. Prof. & HOD", joining: "10/9/2015", qualification: "Ph.D", bputId: "T171289845" },
      { name: "Dr. Anshuman Sarangi", designation: "Associate Professor", joining: "1/7/2006", qualification: "Ph.D", bputId: "T210128915" },
      { name: "Mrs. Chirasmita Mishra", designation: "Assistant Professor", joining: "31/7/2007", qualification: "M.Tech", bputId: "T251128910" },
      { name: "Dr. Snigdha Gupta", designation: "Assistant Professor", joining: "11/7/2025", qualification: "Ph.D", bputId: "T250728924" },
      { name: "Dr. Sampat Narayan Satapathy", designation: "Assistant Professor", joining: "11/6/2025", qualification: "Ph.D", bputId: "T251128911" }
    ],
    laboratories: [
      {
        name: "Cell and Molecular Biology Laboratory",
        equipments: [
          "UV VISIBLE SPECTROPHOTOMETER (1)",
          "COOLING CENTRIFUGE (1)",
          "DIGITAL WATERBATH (1)",
          "AUTOCLAVE (1)",
          "LAMINAR AIRFLOW (1)",
          "HOT AIR OVEN (1)",
          "WEIGHING BALANCE (1)",
          "PH METER (2)",
          "SDS PAGE UNIT (1)",
          "MICROPIPETTE-20 (2)",
          "UV TRANSILLUMINATER (1)"
        ],
        experiments: [
          {
            list: [
              "Gram’s Staining",
              "Leishman Staining",
              "Giemsa Staining",
              "Identification of given plant, animal and bacterial cells & their components by microscopy",
              "Thin Layer Chromatography",
              "Tryphan Blue Assay",
              "Isolation of microbial DNA",
              "Isolation of genomic DNA",
              "Electrophoresis _ Agarose and Polyacrylamide Gel",
              "Restriction enzyme digestion& Ligation"
            ]
          }
        ],
        images: [
          "/images/biotech_lab_1.png",
          "/images/biotech_lab_2.png"
        ]
      },
      {
        name: "Enzyme Technology Laboratory",
        experiments: [
          {
            list: [
              "Identification of enzymes (amylase, invertase and catalase)",
              "Isolation of Enzyme from different microorganism.",
              "Isolation of alpha amylase from plant source.",
              "To determine Km and Vmax of α Amylase",
              "Determination of specific enzyme activity of α Amylase.",
              "Effect of pH on Enzyme kinetics.",
              "Effect of temperature on Enzyme kinetics.",
              "Identification of Enzyme by different assay.",
              "Purification of enzymes.",
              "Immobilization of Enzyme by sodium Alginate method"
            ]
          }
        ],
        images: [
          "/images/biotech_lab_3.png",
          "/images/biotech_lab_4.png"
        ]
      },
      {
        name: "Genetic Engineering Laboratory",
        equipments: [
          "PCR (1)",
          "PH METER (2)",
          "AGAROSE GEL ELECTROPHORESIS UNIT (1)",
          "DEEP FREEZER (-20 C ) (1)",
          "REFRIGERATOR (1)",
          "MICROPIPETTE (100) (2)",
          "MICROPIPETTE (200) (2)",
          "MICROSCOPE (3)",
          "WEIGHING BALANCE (1)",
          "MINI GEL (1)"
        ],
        experiments: [
          {
            list: [
              "Isolation of DNA from bacterial cells",
              "Quantitative analysis of DNA using spectrophotometer",
              "Restriction digestion of DNA",
              "Preparation of competent cells",
              "Transformation in E. coli. with recombinant vector",
              "Demonstration of PCR",
              "Southern blotting",
              "Northern blotting"
            ]
          }
        ]
      },
      {
        name: "Developmental Biology Laboratory",
        experiments: [
          {
            list: [
              "Identification of developmental stages of chick embryo using permanent mounts",
              "Preparation of a temporary stained mount of chick embryo",
              "Study of developmental stages of Anopheles."
            ]
          }
        ]
      },
      {
        name: "Microbiology Laboratory",
        equipments: [
          "BIOSAFETY CABINET (1)",
          "GEL ROCKER (1)",
          "MICROTOME (1)",
          "MICROSCOPE (3)",
          "PH METER (1)",
          "HOT AIR OVEN (1)",
          "AUTOCLAVE (1)",
          "MICROPIPETTE (200) (3)",
          "REFRIGERATOR (1)"
        ],
        experiments: [
          {
            list: [
              "Preparation of plant tissue culture medium.",
              "Organ culture, Callus"
            ]
          }
        ]
      },
      {
        name: "Computation Biology Laboratory",
        equipments: [
          "CO2 INCUBATOR (1)",
          "INVERTED MICROSCOPE (1)",
          "AUTOCLAVE VERICAL (1)",
          "HOT PLATE STIRRER (1)",
          "PH METER (2)",
          "MICROPIPETTE (1000) (2)",
          "WESTERN BLOT UNIT (1)",
          "DEEP FREEZER (-40) (1)"
        ],
        experiments: [
          {
            list: [
              "Preparation of Ca++ -Mg++ -free phosphate buffered saline at different pH, Preparation of other buffers (HBSS, MES)",
              "Sub-culturing of adherent and non adherent cell lines, with counting & viability staining of cells, Cryopreservation and thawing of cells",
              "Primary culture of animal cells: Aseptic techniques, selection and isolation of organ, disaggregation (mechanical/enzymatic), seeding, cell counting and cell viability",
              "Separation of primary cells from blood by Histopaque 1077 and 1119 and Percoll density gradient centrifugation,",
              "Study of apoptosis by microscopy/western blotting and/or FACS, Cytotoxicity assays (MTT and MTS and PMS and real time PCR)"
            ]
          }
        ]
      },
      {
        name: "Immunology Laboratory",
        experiments: [
          {
            list: [
              "Cells and Organs of Immune System: Examine the cells that comprise the immune system (counts and morphology), Locate organs and tissues of immune system (primary and secondary)",
              "Preparation of blood film and identification of cells, Collection of serum, purification of IgG",
              "Polarization of immune cells (phagocytes only) using stimulation cocktail and characterization",
              "Estimation of reactive oxygen species (ROS) by fluorescence dye DCFDA/DHR and reactive nitrogen species (RNS) by griess reaction",
              "Determination of cytokines by ELISA",
              "Hemagglutination test (HA), Hemagglutination Inhibition test (HI), ELISA etc"
            ]
          }
        ]
      }
    ],
    syllabus: [
      { year: "First Year", title: "SYLLABUS FOR FIRST YEAR", buttonText: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Biotechnolgy/FIRST-YEAR-B-TECH-COURSE-STRUCTURE-2023-24.pdf" },
      { year: "Second Year", title: "SYLLABUS FOR SECOND YEAR", buttonText: "VIEW / DOWNLOAD 2ND YEAR SYLLABUS", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Biotechnolgy/2nd-YEAR-B-TECH-Biotech-COURSE-STRUCTURE-2023-24.pdf" },
      { year: "Third Year", title: "SYLLABUS FOR THIRD YEAR", buttonText: "VIEW / DOWNLOAD 3RD YEAR SYLLABUS", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Biotechnolgy/3rd-YEAR-B-TECH-Biotech-COURSE-STRUCTURE-2023-24.pdf" },
      { year: "Fourth Year", title: "SYLLABUS FOR FOURTH YEAR", buttonText: "VIEW / DOWNLOAD 4TH YEAR SYLLABUS", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Biotechnolgy/Bio-Technology.pdf" }
    ]
  },
  
  "electronics-and-telecommunication-engineering": {
    name: "ELECTRONICS AND TELECOMMUNICATION ENGINEERING",
    meta: {
      title: "Electronics and Telecommunication Engineering | Trident Academy of Technology",
      description: "Department of Electronics and Telecommunication Engineering at Trident Academy of Technology."
    },
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    hero: {
      titleLine1: "Electronics &",
      titleLine2: "Telecommunication",
      subtitle: "Driving the future of communication, embedded systems, and VLSI design with industry-aligned education and cutting-edge research.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Electronics & Telecommunication Engineering",
      stats: [
        { label: "B.Tech Intake", value: "120" },
        { label: "Research Grants", value: "₹99.5L" },
        { label: "NBA Accredited", value: "Yes" }
      ]
    },
    sidebar: {
      heading: "ELECTRONICS &\nTELECOMMUNICATION",
      items: [
        { id: "syllabus", label: "SYLLABUS", icon: "FileText" },
        { id: "faculty", label: "FACULTIES", icon: "Users" },
        { id: "laboratories", label: "LABORATORIES", icon: "Cpu" },
        { id: "placement", label: "PLACEMENT DATA (ETC)", icon: "Award" },
        { id: "startup", label: "Student Start up and Product Development", icon: "Zap" },
        { id: "clubs", label: "Clubs", icon: "Users" },
        { id: "bput-questions", label: "BPUT Questions (PY)", icon: "BookOpen" },
        { id: "lecture-notes", label: "Lecture Notes", icon: "FileText" },
        { id: "professional-societies", label: "Professional Societies and Chapters", icon: "Award" },
        { id: "evoluer", label: "Evoluer Magazine", icon: "BookOpen" },
        { id: "ingenium", label: "The Ingenium Newsletter", icon: "FileText" },
        { id: "innovation", label: "Innovation in Teaching and Learning", icon: "Zap" },
        { id: "publications", label: "Publications, Patent & Chapters and Conferences", icon: "FileText" },
        { id: "inter-institute", label: "Inter-Institute Events", icon: "Award" }
      ]
    },
    syllabus: {
      btech: [
        { 
          year: "SYLLABUS FOR FIRST YEAR", 
          links: [
            { text: "VIEW / DOWNLOAD SYLLABUS FOR 1ST YR", url: "#" }
          ]
        },
        { 
          year: "SYLLABUS FOR SECOND YEAR", 
          links: [
            { text: "VIEW / DOWNLOAD SYLLABUS FOR 3RD SEM", url: "#" },
            { text: "VIEW / DOWNLOAD SYLLABUS FOR 4TH SEM", url: "#" }
          ]
        },
        { 
          year: "SYLLABUS FOR THIRD YEAR", 
          links: [
            { text: "VIEW / DOWNLOAD SYLLABUS FOR 5TH SEM", url: "#" },
            { text: "VIEW / DOWNLOAD SYLLABUS FOR 6TH SEM", url: "#" }
          ]
        },
        { 
          year: "SYLLABUS FOR FOURTH YEAR", 
          links: [
            { text: "Summary Yet to Come", url: "#" }
          ]
        }
      ],
      mtech: [
        {
          year: "SYLLABUS FOR M. TECH",
          links: [
            { text: "VIEW / DOWNLOAD SYLLABUS FOR M. TECH", url: "#" }
          ]
        }
      ]
    },
    homeContent: {
      paragraphs: [
        "The Department of Electronics and Telecommunication Engineering (ETC), one of the flagship branches of the undergraduate program, was established in 2005 with the approval of AICTE and affiliation to Biju Patnaik University of Technology (BPUT), Odisha. The Department has earned national recognition from the Ministry of Electronics and Information Technology (MeitY), Government of India, under the prestigious C-DAC ChipIN Program of the Chip to Start-up (C2S) Scheme, reflecting its active engagement in advanced electronics and semiconductor-driven communication technologies.",
        "It also serves as a Nodal Centre for Research (NCR) under Biju Patnaik University of Technology (BPUT), fostering a vibrant research ecosystem through the enrollment and supervision of doctoral scholars."
      ],
      salientFeatures: [
        "Recognized by Ministry of Electronics and Information Technology (MeitY), Govt. of India.",
        "Secured cumulative research funding of ₹99.5 lakhs from various Government agencies.",
        "NBA Accredited B.Tech programme reflecting high quality standards.",
        "Nodal Centre for Research (NCR) under BPUT."
      ]
    },
    overview: {
      paragraphs: [
        "The curriculum integrates theoretical foundations with practical implementation, enabling graduates to meet the evolving demands of the global ESDM Sector and Semicon industry. The department encourages holistic student development through active technical and professional clubs that foster innovation, teamwork, leadership, and practical learning beyond the classroom.",
        "The department is distinguished by its team of highly qualified, dedicated, and experienced faculty members, who actively contribute to strong scholarly publications, outcome-oriented research, and innovation-driven activities, including patents, reflecting the department's commitment to academic excellence and technological advancement.",
        "The B.Tech programme in Electronics and Telecommunication Engineering (ETC), has been duly accredited by the National Board of Accreditation (NBA), reflecting its compliance with prescribed quality standards in technical education."
      ],
      vision: "To become a globally recognized Department in imparting high quality result oriented technical education in the field of Electronics & Telecommunication Engineering and to sustain its excellence in teaching, research and community development to create excellent facilities in shaping the future of technocrats by nurturing their talents as per the need of the Nation.",
      mission: [
        { text: "M1: Placeholder for Mission 1." }
      ],
      po: [{text: "PO1: Engineering Knowledge"}],
      peo: [{text: "PEO1: Core Competency"}],
      pso: [{text: "PSO1: Apply knowledge in Electronics"}]
    ,
      images: [
        "/images/departments/etc/IMG20250516111930.jpg",
        "/images/departments/etc/IMG20250516115054.jpg",
        "/images/departments/etc/IMG_5069.JPG"
      ],
      gallery: [
        "/images/departments/etc/IMG20250516111930.jpg",
        "/images/departments/etc/IMG20250516115054.jpg",
        "/images/departments/etc/IMG_5069.JPG",
        "/images/departments/etc/IMG_5073.JPG",
        "/images/departments/etc/OMG_6566.JPG",
        "/images/departments/etc/IMG20250516111930 (1).jpg"
      ]
    },
    faculty: [
      {
        name: "Mr.Arun Kumar Pradhan",
        designation: "Associate Professor",
        doj: "9/5/2012",
        qualification: "M.Tech",
        bputId: "T132028901"
      },
      {
        name: "Dr.Minu Samantaray",
        designation: "Assistant Professor",
        doj: "2/7/2007",
        qualification: "Ph.D",
        bputId: "T082028902"
      },
      {
        name: "Mrs.Susmita Satapathy",
        designation: "Assistant Professor",
        doj: "7/12/2017",
        qualification: "M.Tech",
        bputId: "T210128910"
      },
      {
        name: "Dr.Sakuntala Mahapatra",
        designation: "Professor & Dean",
        doj: "9/7/2008",
        qualification: "Ph.D",
        bputId: "T082028906"
      },
      {
        name: "Mr. Rabindra Bhojray",
        designation: "Associate Professor",
        doj: "7/11/2009",
        qualification: "M.Tech",
        bputId: "T092028906"
      }
    ],
    laboratories: [
      { 
        name: "Basic Electronics Lab",
        equipments: [
          "Cathode Ray Oscilloscope (30 MHz)",
          "Function Generator (3 MHz)",
          "Universal Trainer Board (DC 0-30v, ±15v, AC 5V/10V/20V)",
          "Digital Multimeters"
        ],
        keyExperiments: [
          "Familiarization with electronic components (Active & Passive) & electron equipments (Multi-meters, CROs and function generators)",
          "Study of V-I characteristics of P-N junction diode & Calculate DC & AC resistance",
          "Construction of half-wave rectifier and full wave rectifier circuits (with & without Filter)",
          "Construction of positive, negative and biased clipper circuits & study of their output waveforms by CRO",
          "Construction of positive, negative clamper circuits & study of their output waveforms by CRO",
          "Design of inverting and non-inverting amplifiers using Op-Amp for a given gain with the help of breadboard and distinct components",
          "Study and realization of logic gates (Truth table verification)",
          "V I Characteristics of NPN transistor (Beyond Syllabus)"
        ]
      },
      { 
        name: "Analog Electronics Circuits Lab",
        equipments: [
          "Cathode Ray Oscilloscope (30 MHz)",
          "Function Generator (3 MHz)",
          "Universal Trainer Board (DC 0-30v, ±15v, AC 5V/10V/20V)",
          "Digital Multimeter"
        ]
      },
      { 
        name: "Signal System Lab",
        equipments: [
          "DELL OPTIPLEX 330 PC (Intel Core 2 Duo @2.20GHz, 1GB RAM)",
          "LENOVO Think Center PC (Intel Pentium Dual CPU @1.80GHz, 1GB RAM)",
          "MATLAB 2007a (Standalone with simulink tool)"
        ],
        keyExperiments: [
          "Write a program to generate the discrete sequences (i) unit step (ii) unit impulse (iii) ramp (iv) periodic sinusoidal sequences. Plot all the sequences.",
          "Find the Fourier transform of a square pulse. Plot its amplitude and phase spectrum.",
          "Write a program to convolve two discrete time sequences. Plot all the sequences. Verify the result by analytical calculation.",
          "Write a program to find the trigonometric Fourier series coefficients of a rectangular periodic signal. Reconstruct the signal by combining the Fourier series coefficients with appropriate weightings.",
          "Write a program to find the trigonometric and exponential Fourier series coefficients of a periodic rectangular signal. Plot the discrete spectrum of the signal.",
          "Generate a discrete time sequence by sampling a continuous time signal. Show that with sampling rates less than Nyquist rate, aliasing occurs while reconstructing the signal.",
          "Find the power content and power spectral density for the signal: X(t)=cos(2*pi*47)+cos(2*pi*219), 0<t<10 sampled at 1000 samples/sec.",
          "Write a program to find the magnitude and phase response of first order low pass and high pass filter. Plot the responses in logarithmic scale.",
          "Write a program to find the response of a low pass filter and high pass filter, when a speech signal is passed through these filters.",
          "Write a program to find the autocorrelation and cross correlation of sequences.",
          "Generate a uniformly distributed length 1000 random sequence in the range (0,1). Plot the histogram and the probability function for the sequence. Compute the mean and variance of the random signal. (Beyond Syllabus)",
          "Generate a Gaussian distributed length 1000 random sequence. Compute the mean and variance of the random signal by a suitable method. (Beyond Syllabus)"
        ]
      },
      { 
        name: "DSDLab",
        equipments: [
          "Universal Trainer Board (DC 0-30v, ±15v, AC 5V/10V/20V, Function Generator & 7 Segment Display)",
          "Cathode Ray Oscilloscope (30 MHz)",
          "Function Generator (3 MHz)",
          "Digital Multimeter"
        ],
        keyExperiments: [
          "Digital Logic Gates: Investigate logic behavior of AND, OR, NAND, NOR, EX-OR, EX-NOR, Invert and Buffer gates, use of Universal NAND Gate.",
          "Gate-level minimization: Two level and multi level implementation of Boolean functions.",
          "Combinational Circuits: design, assemble and test: adders and subtractors, code converters, gray code to binary and 7 segment display.",
          "Design, implement and test a given design example with (i) NAND Gates only (ii) NOR Gates only and (iii) using minimum number of Gates.",
          "Design with multiplexers and de-multiplexers.",
          "Flip-Flop: assemble, test and investigate operation of SR, D & J-K flip-flops.",
          "Shift Registers: Design and investigate the operation of all types of shift registers with parallel load.",
          "Counters: Design, assemble and test various ripple and synchronous counters – decimal counter, Binary counter with parallel load.",
          "Binary Multiplier: Design and implement a circuit that multiplies 4-bit unsigned numbers to produce a 8 bit product.",
          "Design of Running light using 555 Timer. (Beyond Syllabus)",
          "Design, assemble and testing of Ring Counter. (Beyond Syllabus)"
        ]
      },
      { 
        name: "Electronics Device Lab",
        equipments: [
          "DELL OPTIPLEX 330 PC (Intel Core 2 Duo @2.20GHz, 1GB RAM)",
          "LENOVO Think Center PC (Intel Pentium Dual CPU @1.80GHz, 1GB RAM)",
          "MATLAB 2007a (Standalone with simulink tool)",
          "HFSS 14 (Standalone License)"
        ],
        keyExperiments: [
          "Wave-propagation in conductors and dielectrics using HFSS/CST/MATLAB.",
          "Current and charge flow of electromagnetic wave in a rectangular waveguide using HFSS/CST/MATLAB.",
          "Uniform Plane Wave Propagation in an Arbitrary Direction.",
          "Transverse Electric Waves in a Parallel-Plate Waveguide.",
          "To calculate Dispersion and Group Velocity.",
          "To design Rectangular Waveguide.",
          "To design cavity Resonator.",
          "To show the modes of a rectangular waveguide using HFSS.",
          "To show azimuth and elevation patterns.",
          "To show the input and output impedance.",
          "SWR measurements of rectangular waveguide.",
          "Reflection of plane waves."
        ]
      },
      { 
        name: "Analog and Digital Communication Lab",
        equipments: [
          "Cathode Ray Oscilloscope (30 MHz & 25MHz)",
          "Function Generator (3MHz) & Spectrum Analyzer (0.15MHz to 1050MHz)",
          "Analog Communication Kits: AM, FM, DSB/SSB, PAM, VSB",
          "Digital Communication Kits: ASK, PSK, FSK, DPSK, QPSK, MSK, QAM",
          "Pulse Code Modulation (PCM) & Delta/Sigma Modulation Kits",
          "LAN Trainer & ISDN Trainer",
          "Multiplexing & Filtering: TDM, Active/Passive Filters",
          "Noise Signal Generator, ADC/DAC 8 Channel, Level Converter"
        ],
        keyExperiments: [
          "Analyze and plot the spectrum of various signals with aid of spectrum analyzer.",
          "Analyze the process of frequency division multiplexing and frequency division de-multiplexing.",
          "Study and design of AM modulator and demodulator (Full AM, SSB, DSBSC, SSBSC).",
          "Study of FM modulation and Demodulation Techniques.",
          "Observer the process of PAM, quantization and determination of quantization noise.",
          "Using MATLAB/SCILAB generate a carrier and a modulating signal. Modulate using AM & FM, analyze waveform and frequency spectrum.",
          "Using Lab-View software simulate AM & FM modulation and demodulation system.",
          "Study the functioning of PCM and Delta modulator, demonstrate the process of PCM modulation and Delta modulation.",
          "To study Time Division Multiplexing and different channel coding and decoding techniques.",
          "Generation and reception of different types of signals like ASK, PSK, FSK.",
          "To transmit and received three separate signals audio, video and tone simultaneously through satellite link.",
          "To compare different forms of BPSK, QPSK, OQPSK (experimentally) and analyze their spectrum.",
          "To transmit different types of signals using ISDN system and analyze LAN data communication using LAN trainer.",
          "Generation of VSB, DPSK Modulator, MSK Modulator (Beyond Syllabus)"
        ]
      },
      { 
        name: "Digital Signal Processing Lab",
        equipments: [
          "LENOVO Think Center PC (Intel Pentium Dual CPU E2160 @1.80GHz, 1GB RAM)",
          "DSP Trainer Kit (VI Micro System VSK-6713, TMS320C6713)",
          "Cathode Ray Oscilloscope (30 MHZ)",
          "Function Generator (3 MHz)",
          "MATLAB 2007a (Standalone with simulink tool)",
          "VI Debugger For 6713"
        ],
        keyExperiments: [
          "(i) Introduction to MATLAB software and study of its important commands. (ii) Familiarization with the architecture of a standard DSP kit.",
          "(a) Introduction to MATLAB software and study of its important commands. (b) Generation of various types of waveforms using MATLAB and DSP kit.",
          "Linear convolution of sequences and verification of linear convolution using DSP kit.",
          "Circular convolution of two sequences and comparison of the result with linear convolution using MATLAB and DSP kit.",
          "(a) Computation of autocorrelation and cross correlation using MATLAB. (b) Computation of power spectral density using MATLAB and DSP kit.",
          "Finding the convolution of a periodic sequence using DFT and IDFT in MATLAB.",
          "(i) Implementation of FFT algorithm by DIT and DIF using MATLAB. (ii) Finding the FFT of a given 1-D signal using DSP kit and plotting the same.",
          "Design and implementation of FIR (low pass and high pass) Filters using windowing techniques in MATLAB and DSP kit.",
          "Design and implementation of IIR (low pass and high pass) Filters in MATLAB and DSP kit.",
          "(i) Convolution of long duration sequences using overlap add, overlap save using MATLAB. (ii) Implementation of noise cancellation using adaptive filters on a DSP Kit.",
          "Envelop detector using MATLAB (Beyond Syllabus)",
          "Signal Reconstruction using MATLAB (Beyond Syllabus)"
        ]
      },
      { 
        name: "Microprocessor and Microcontroller Lab",
        equipments: [
          "8085 Microprocessor Trainer Kit (8-BIT)",
          "8086 Microprocessor Trainer Kit (16-BIT)",
          "8051 Microcontroller Trainer Kit (8-BIT)",
          "Cathode Ray Oscilloscope (30MHZ)",
          "Digital To Analog Converter Board",
          "Elevator Simulator",
          "8279 & 8255 Interface Boards",
          "Stepper Motor Kit & Traffic Light Controller"
        ],
        keyExperiments: [
          "Introduction to 8086 microprocessor and its register structures.",
          "Programs for 16 bit arithmetic operations using 8086 (Addition, Subtraction, Multiplication, Division and 2's complement).",
          "Programs for Searching using 8086 (Find largest and smallest numbers).",
          "Programs for Sorting using 8086 (Ascending and descending order).",
          "Programs for String manipulation operations using 8086 (Data block transfer).",
          "Interfacing and Programming of Stepper Motor.",
          "Interfacing and Programming of Traffic light control system.",
          "Programming using Arithmetic, Logical and Bit Manipulation instructions of 8051 microcontroller.",
          "Interfacing ADC and DAC.",
          "A design problem using 8051.",
          "Generate a square wave and rectangular wave of given frequency at the output pin of 8255 chip. (Beyond Syllabus)",
          "Study of Elevator Simulator. (Beyond Syllabus)"
        ]
      },
      { 
        name: "MWE Lab",
        equipments: [
          "Klystron Power supply",
          "Klystron Mount & Klystron Tube",
          "Isolator & Frequency meter",
          "Variable attenuator",
          "Slotted section"
        ],
        keyExperiments: [
          "Reflex Klystron Characteristics.",
          "Gunn diode characteristics.",
          "Directional Coupler Characteristics.",
          "Measurement of Voltage Standing wave ratio.",
          "Radiation Pattern Measurement of a Horn Antenna.",
          "Impedance, Wavelength and Frequency Measurement.",
          "Determination of Polarization of Horn Antenna.",
          "Measurement of Scattering Parameters.",
          "Coupling Measurement of H-Plane, E-Plane and Magic Tee junction.",
          "Measurement of Dielectric Constant.",
          "Measurement of Phase Shift.",
          "Scattering Parameters of Circulator/Isolators.",
          "To study the cavity resonator. (Beyond Syllabus)",
          "Measurement of Dielectric constant of a low loss solid dielectric. (Beyond Syllabus)"
        ]
      },
      { 
        name: "Future Ready Contributor Programme Lab",
        equipments: [],
        keyExperiments: [
          "Who Is A Contributor? Enable students to build a new vision of who they can become as 'future-ready contributors'.",
          "Developing A Growth Identity: Enable students to develop a growth identity & build their self-esteem.",
          "Become A Creator Of Your Destiny: Help students learn to deal positively with challenging life situations.",
          "Achieving Sustainable Success: Developing a steady success in an uncertain world.",
          "Career Development Pathways: Open up career possibilities and build a contributive career.",
          "Unleashing Our Power To Contribute: Be contributors 'NOW' and start contributing at any point through any role.",
          "Project 1: Building A Contributor Profile For A Real-Life Contributor (Think Solutions, Value Thinking, Engage Deeply).",
          "Project 2: Building A Solution To A Citizen Challenge (Think In Enlightened Self-Interest, Human-Centric Thinking & Empathy, Trust Conduct).",
          "Project 3: Building A Vision & Plan For Running A Contributor Company."
        ]
      },
      { 
        name: "Communication Engineering Lab",
        equipments: [
          "DELL OPTIFLEX 330 PC",
          "Cathode Ray Oscilloscope (30MHZ)",
          "Antenna Trainer Kit",
          "Satellite Communication Trainer (1100-1300MHZ PPL MICROWAVE)",
          "Fiber Optics Kit",
          "Colour TV & DVD Player"
        ],
        keyExperiments: [
          "Radiation pattern of Dipole, Yagi, Helical and Slot Antenna.",
          "Study of different blocks of colour TV receiver such as RF amplifier, IF amplifier, sync separator, vertical oscillator, colour picture tube etc.",
          "Polarization Detection of Dipole, Yagi, Helical and Slot Antenna.",
          "Measurement of Refractive Index profile, Numerical Aperture.",
          "Attenuation and bending loss/dispersion in a multimode optical fiber.",
          "Measurement of Gain of a fiber communication link using (a) optical fiber, (b) free space.",
          "Establishing and testing an optical Fiber analog and digital Link.",
          "Simulation of a pn sequence generator using MATLAB.",
          "Simulation of direct sequence spread spectrum technique using MATLAB.",
          "Simulation of TDM and WDM using Matlab.",
          "To establish a direct communication link between uplink transmitter and downlink receiver using tone signal. (Beyond Syllabus)",
          "To set up an active satellite link and demonstrate link fail operation. (Beyond Syllabus)"
        ]
      },
      { 
        name: "Project Lab",
        equipments: [
          "SYSTEM (PC) DELL/ LENOVO (OPTIPLEX 330/ Think Center)",
          "UPS (APC/ Back-UPS RS 600, 600VA/360W)",
          "DSO (APLAB/ SCIENTIFIC D36060C/ SMO1060, 60mhz two channel)",
          "UNIVERSAL PROGRAMMER (TOP WIN TOP2008, USB connected)",
          "DAQ (NI USB6000, 12 bit 10 KS/S Multifunction I/O)",
          "Raspberry Pi 2",
          "Arduino",
          "LabVIEW (NI 2013 License Version)"
        ]
      },
      { 
        name: "Additional Lab Facilities",
        equipments: [
          "National MEMS Design Centre (NMDC): MEMS perpetual licensed software (COMSOL, Coventorware, Intellisuite).",
          "PCB Prototyping and Design Lab: CNC Based MITS PCB Antenna Prototyping Machine (Eleven Lab), OrCAD Simulation software.",
          "IoT Maker's Space/Microchip Lab: Chipkit Wi-Fire, Atmel QTouch, Microchip Explorer 8, Atmel Xplained kits, PIC Kit 3.",
          "Mechatronics Lab: Robotics, automation, unmanned vehicles (UVs) and Industry 4.0 tools.",
          "Cisco Thingqbator: CISCO sponsored IoT Incubation Center.",
          "Sponsored Research Laboratory: Dedicated lab for Govt. Sponsored projects (BRFST, BRNS, DDP)."
        ],
        keyExperiments: [
          "NMDC Achievements: Student awards at ISSS-2014 for 'Wireless heartbeat monitoring system' and 'ZigBee based calling bell'.",
          "PCB Lab Projects: Designed prototypes for Gas sensing applications and DRA based MIMO antenna for WiMax and WLAN.",
          "IoT Lab Projects: Intelligent IoT system for Sensing Hazardous Gases in Manhole (DST Funded), IoT Based Smart Dustbin for Smart City.",
          "Sponsored Research Projects: 16-Channel Wireless Acquisition System for Magnetic Diagnostics of ADITYA-U Tokamak (BRNS Funded)."
        ]
      }
    ],
    syllabus: [
      { year: "First Year", title: "SYLLABUS FOR FIRST YEAR", buttonText: "VIEW / DOWNLOAD 1ST YEAR SYLLABUS", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Course-Structure-and-Detailed-Syllabus-for-1st-Year-B.Tech-Admission-Batch-2023-24.pdf" },
      { year: "Second Year", title: "SYLLABUS FOR SECOND YEAR", buttonText: "VIEW / DOWNLOAD 2ND YEAR SYLLABUS", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/ES05-ETC-2nd-Year.pdf" },
      { year: "Third Year", title: "SYLLABUS FOR THIRD YEAR", buttonText: "VIEW / DOWNLOAD 3RD YEAR SYLLABUS", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/ES05-ETC-3rd-Year.pdf" },
      { year: "Fourth Year", title: "SYLLABUS FOR FOURTH YEAR", buttonText: "VIEW / DOWNLOAD 4TH YEAR SYLLABUS", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/ETC-ECE_7th-8th-sem.pdf" },
      { year: "M.Tech", title: "SYLLABUS FOR M. TECH", buttonText: "VIEW / DOWNLOAD M. TECH SYLLABUS", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/MTECH-ETC_merged.pdf" }
    ],
    placement: [
      { year: "2024-25", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Placement-2024-25-ETC.pdf" },
      { year: "2023-24", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Placement-2023-24-ETC.pdf" },
      { year: "2022-23", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Placement-2022-23-ETC.pdf" },
      { year: "2021-22", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Placement-2021-22-ETC.pdf" }
    ],
    startup: [
      { title: "Student Start up", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Student-Startup.pdf" },
      { title: "Product Development", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/ETC_product-development.pdf" }
    ],
    clubs: [
      {
        name: "Department Technical Clubs",
        description: "The department encourages holistic student development through active technical and professional clubs that foster innovation, teamwork, leadership, and practical learning beyond the classroom. Students can engage in hands-on projects, national-level competitions, and interactive workshops.",
        link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Club.pdf"
      }
    ],
    bputQuestions: {
      title: "Previous Year Question Papers (PYQ)",
      description: "Access a comprehensive repository of BPUT Previous Year Question papers to enhance your exam preparation. Reviewing past papers helps you understand the exam pattern, identify important topics, and improve your time management skills during actual examinations.",
      benefits: [
        "Familiarize yourself with the exam structure and question formats.",
        "Identify frequently asked topics and weightage distribution.",
        "Practice solving questions within the stipulated time.",
        "Assess your preparation level and focus on weak areas."
      ],
      link: "https://www.bputonline.com/"
    },
    lectureNotes: [
      { title: "Microprocessor & Microcontroller Module 1", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Microprocessor-Microcontroller-Module-1.pdf" },
      { title: "Microprocessor & Microcontroller Module 2", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Microprocessor-Microcontroller-Module-2.pdf" },
      { title: "Microprocessor & Microcontroller Module 3", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Microprocessor-Microcontroller-Module-3.pdf" },
      { title: "VLSI Design 1", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/VLSI-DESIGN.pdf" },
      { title: "VLSI Design 2", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/VLSI-2.pdf" },
      { title: "Radar & TV Engg.", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Radar-TV-Engg.pdf" },
      { title: "Digital System Design", link: "#" }
    ],
    professionalSocieties: [
      { name: "IEEE", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/IEEE-Student-Branch.pdf" },
      { name: "ISTE", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/ISTE-Indian-Society-For-Technical-Education.pdf" },
      { name: "IETE", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/IETE.pdf" },
      { name: "VSI", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/VSI.pdf" }
    ],
    evoluerMagazine: [
      { year: "2024-25", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/EVOLUER-Magazine-2024-2025.pdf" },
      { year: "2023-24", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/EVOLUER-Magazine-2023-2024.pdf" },
      { year: "2022-23", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/EVOLUER-Magazine-2022-2023.pdf" }
    ],
    ingeniumNewsletter: {
      title: "The Ingenium Newsletter",
      description: "Stay connected with the latest updates, departmental milestones, and student achievements through our official newsletter, 'The Ingenium'. Published quarterly, it highlights our relentless pursuit of academic excellence, innovative research projects, and the vibrant campus life of the Electronics and Telecommunication Engineering department.",
      link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/The-Ingenium-1Compress_20250908_033818.pdf"
    },
    innovationTeaching: {
      title: "Innovation in Teaching and Learning",
      description: "Our department continuously strives to adopt innovative pedagogical methods to enhance the learning experience. We integrate modern tools, practical demonstrations, and interactive sessions to ensure students grasp complex engineering concepts effectively.",
      link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Innovation-website1.pdf"
    },
    publications: [
      { title: "Publication", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Journal-List.pdf" },
      { title: "Patent", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/List-of-Patent-details.pdf" },
      { title: "Chapters and Conferences", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Chapters-and-Conferences.pdf" }
    ],
    interInstituteEvents: {
      title: "Inter-Institute Events",
      description: "Our students regularly participate and excel in various inter-institute events, technical symposiums, and competitions. These events provide a platform to showcase their skills, exchange ideas, and foster a spirit of healthy competition and collaboration with peers from other institutions.",
      link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Student-participation-Intercollege-1.pdf"
    }
  },
  "electronics-vlsi-design": {
    hero: {
      breadcrumb: "VLSI DESIGN TECHNOLOGY",
      title: "ELECTRONICS ENGINEERING",
      highlight: "(VLSI DESIGN TECHNOLOGY)",
      subtitle: "In order to cope up with the changing need of the industry as well as academia, the Department of Electronics (VLSI Design) at present offers following programme variants with unique philosophies and objectives:",
      features: [
        "B.Tech. in Electronics Engineering (VLSI Design Technology) – 30 Seats",
        "M.Tech. in VLSI Design – 18 Seats"
      ],
      description: [
        "Very Large Scale Integrated (VLSI) Circuit Design is a highly intricate process involving the creation of complex computer chips, known as integrated circuits (ICs), through the use of sophisticated computer-aided design (CAD) tools on workstations or personal computers (PCs). Pursuing an M.Tech in VLSI Design is a comprehensive two-year postgraduate program tailored to provide students with extensive knowledge in VLSI system design, covering a broad spectrum of subjects ranging from algorithms and hardware description languages to system architectures, physical designs, verification techniques, and low-power design strategies.",
        "B.Tech. - Electronics Engineering (VLSI Design and Technology) is a 4-year program designed to prepare engineering graduates who have comprehensive knowledge about Integrated circuit designs, which is usually known as chip design. It aims to prepare skilled graduates who know the key aspects of VLSI Design which is required in VLSI domain Industries. This program will support the development of semiconductor ecosystem in India. The curriculum of VLSI Design has been designed to cater to the ever-changing demands of VLSI industry and needs of the society through research.",
        "Through B.Tech. - Electronics Engineering (VLSI Design and Technology) program, graduates will develop an in-depth understanding of semiconductor devices, VLSI circuit design and verification, FPGA design, and fabrication process, along with hands-on experience with leading EDA (Electronic Design & Automation) tools. The evergreen VLSI domain is for the design and verification of electronics systems and circuits and its applications are found in areas like Communications, Signal & Image Processing, Space Research and Automation Industry.",
        "Recent advancements in VLSI design have ushered in a new era of compact and reliable systems capable of delivering data at unprecedented speeds. This has led to a surge in the applications of integrated circuits (ICs) across diverse industries, including high-performance computing, telecommunications, image and video processing, controls, and consumer electronics. With the constant evolution of VLSI technologies and the relentless demand for innovative electronic devices, there exists a significant need for skilled VLSI engineers who can navigate the dynamic landscape of chip design, contributing to the development of cutting-edge solutions that meet the ever-growing demands of the modern world."
      ]
    },
    sidebar: {
      heading: "ELECTRONICS\nVLSI DESIGN",
      title: "VLSI DESIGN",
      items: [
        { id: "student-achievements-&-participation", label: "STUDENT ACHIEVEMENTS & PARTICIPATION", icon: "Trophy" },
        { id: "professional-activities-&-student-chapters", label: "PROFESSIONAL ACTIVITIES & STUDENT CHAPTERS", icon: "Users" },
        { id: "projects-to-startups", label: "PROJECTS TO STARTUPS", icon: "Rocket" },
        { id: "faculties", label: "FACULTIES", icon: "Users" },
        { id: "laboratories", label: "LABORATORIES", icon: "Microscope" }
      ]
    },
    faculty: [
      {
        name: "Mr.Arun Kumar Pradhan",
        designation: "Associate Professor",
        doj: "9/5/2012",
        qualification: "M.Tech",
        bputId: "T132028901"
      },
      {
        name: "Dr.Minu Samantaray",
        designation: "Assistant Professor",
        doj: "2/7/2007",
        qualification: "Ph.D",
        bputId: "T082028902"
      },
      {
        name: "Mrs.Susmita Satapathy",
        designation: "Assistant Professor",
        doj: "7/12/2017",
        qualification: "M.Tech",
        bputId: "T210128910"
      },
      {
        name: "Dr.Sakuntala Mahapatra",
        designation: "Professor & Dean",
        doj: "9/7/2008",
        qualification: "Ph.D",
        bputId: "T082028906"
      },
      {
        name: "Mr. Rabindra Bhojray",
        designation: "Associate Professor",
        doj: "7/11/2009",
        qualification: "M.Tech",
        bputId: "T092028906"
      }
    ],
    laboratories: [
      { name: "VLSI & Embedded System Lab", description: "Facilities for VLSI design and embedded systems." },
      { name: "Digital Signal Processing Lab", description: "Facilities for Digital Signal Processing." },
      { name: "Signals & Systems Lab", description: "Facilities for Signals & Systems." },
      { name: "Project Lab", description: "Project development and research." },
      { name: "Microwave Engineering Lab", description: "Facilities for Microwave Engineering." },
      { name: "Digital Electronics Lab", description: "Facilities for Digital Electronics." },
      { name: "Microprocessor Lab", description: "Facilities for Microprocessor programming." },
      { name: "Analog Electronics Lab", description: "Facilities for Analog Electronics." },
      { name: "ADC Lab", description: "Analog and Digital Communication Lab." },
      { name: "Wireless Communication Lab", description: "Facilities for Wireless Communication." },
      { name: "MEMS Design Center", description: "Facilities for MEMS Design." },
      { name: "PCB Lab", description: "Printed Circuit Board fabrication and testing." },
      { name: "CISCO ThingQbator", description: "CISCO ThingQbator innovation lab." }
    ],
    specialLaboratories: [
      { name: "ARF Fabless Design Center", description: "Advanced Research Facility for Fabless Design." },
      { name: "MIETY C2S Center (VLSI Lab)", description: "Ministry of Electronics and Information Technology Chips to Startup Center." },
      { name: "IoT Makerspace / Microchip Lab", description: "Internet of Things and Microchip innovations." }
    ],
    stats: [
      { value: "30", label: "B.Tech Seats" },
      { value: "18", label: "M.Tech Seats" },
      { value: "100%", label: "Placement Assistance" },
      { value: "5+", label: "Advanced Labs" }
    ],
    homeContent: {
      intro: "In order to cope up with the changing need of the industry as well as academia, the Department of Electronics (VLSI Design) at present offers following programme variants with unique philosophies and objectives:",
      highlights: [
        "B.Tech. in Electronics Engineering (VLSI Design Technology) \u2013 30 Seats",
        "M.Tech. in VLSI Design \u2013 18 Seats"
      ],
      paragraphs: [
        "Very Large Scale Integrated (VLSI) Circuit Design is a highly intricate process involving the creation of complex computer chips, known as integrated circuits (ICs), through the use of sophisticated computer-aided design (CAD) tools on workstations or personal computers (PCs). Pursuing an M.Tech in VLSI Design is a comprehensive two-year postgraduate program tailored to provide students with extensive knowledge in VLSI system design, covering a broad spectrum of subjects ranging from algorithms and hardware description languages to system architectures, physical designs, verification techniques, and low-power design strategies.",
        "B.Tech. \u2013 Electronics Engineering (VLSI Design and Technology) is a 4-year program designed to prepare engineering graduates who have comprehensive knowledge about Integrated circuit designs, which is usually known as chip design. It aims to prepare skilled graduates who know the key aspects of VLSI Design which is required in VLSI domain Industries. This program will support the development of semiconductor ecosystem in India. The curriculum of VLSI Design has been designed to cater to the ever-changing demands of VLSI industry and needs of the society through research.",
        "Through B.Tech. \u2013 Electronics Engineering (VLSI Design and Technology) program, graduates will develop an in-depth understanding of semiconductor devices, VLSI circuit design and verification, FPGA design, and fabrication process, along with hands-on experience with leading EDA (Electronic Design & Automation) tools. The evergreen VLSI domain is for the design and verification of electronics systems and circuits and its applications are found in areas like Communications, Signal & Image Processing, Space Research and Automation Industry.",
        "Recent advancements in VLSI design have ushered in a new era of compact and reliable systems capable of delivering data at unprecedented speeds. This has led to a surge in the applications of integrated circuits (ICs) across diverse industries, including high-performance computing, telecommunications, image and video processing, controls, and consumer electronics. With the constant evolution of VLSI technologies and the relentless demand for innovative electronic devices, there exists a significant need for skilled VLSI engineers who can navigate the dynamic landscape of chip design, contributing to the development of cutting-edge solutions that meet the ever-growing demands of the modern world."
      ]
    },

    achievements: {
      overview: {
        title: "Student Achievements & Participation",
        description: "The Department of Electronics and Telecommunication Engineering at Trident Academy of Technology, Bhubaneswar takes pride in the outstanding achievements of its students in various inter-institute competitions, hackathons, and technical events.",
        subtitle: "Our students consistently demonstrate innovation, teamwork, and technical excellence by securing top positions across prestigious platforms."
      ,
      images: [
        "/images/departments/vlsi/455789587_7942766909176121_7698136008696861692_n.jpg",
        "/images/departments/vlsi/456084895_7942763579176454_2230763532092766752_n.jpg",
        "/images/departments/vlsi/IMG20260127173037.jpg"
      ],
      gallery: [
        "/images/departments/vlsi/455789587_7942766909176121_7698136008696861692_n.jpg",
        "/images/departments/vlsi/456084895_7942763579176454_2230763532092766752_n.jpg",
        "/images/departments/vlsi/IMG20260127173037.jpg",
        "/images/departments/vlsi/Meity c2s photo1.jpeg",
        "/images/departments/vlsi/Meity c2s photo2.jpeg",
        "/images/departments/vlsi/Meity c2s photo4 (1).jpeg"
      ]
    },
      highlights: [
        "Multiple First Positions in BPUT Hackathon 2024",
        "Strong performance in Robotics Competitions (Robo Soccer, Robo Sumo, Line Follower)",
        "Recognition in Startup Demo & Innovation Events",
        "Consistent Runner-Up & 2nd Runner-Up positions across major technical fests"
      ],
      majorAchievements: [
        {
          title: "BPUT Hackathon 2024",
          award: "First Position",
          details: "Students secured First Position in Industry 4.0 \u2013 Surveillance Management and Low Visibility Traffic Management",
          venue: "BPUT, Rourkela",
          date: "January 2025",
          icon: "trophy"
        },
        {
          title: "BPUT Project Competition",
          award: "First Position",
          venue: "GIET, Gangapatna",
          date: "December 2024",
          icon: "trophy"
        },
        {
          title: "Xenesis 2024 Hackathon",
          award: "2nd Runner-Up",
          venue: "Government College of Engineering, Keonjhar",
          icon: "medal"
        },
        {
          title: "Odisha Technological Conclave",
          award: "2nd Runner-Up",
          venue: "Bhubaneswar",
          icon: "medal"
        }
      ],
      roboticsAchievements: [
        {
          event: "OUTR \u2013 Perception 2024",
          results: [
            { competition: "Robo Soccer", position: "First Position" },
            { competition: "Robo Sumo", position: "1st Runner-Up" }
          ]
        },
        {
          event: "IGIT Sarang \u2013 Horizon Event",
          results: [
            { competition: "Line Follower", position: "First Position" },
            { competition: "Robo Sumo", position: "First Position" },
            { competition: "Robo Soccer", position: "Runner-Up" }
          ]
        },
        {
          event: "IIT Bhubaneswar \u2013 Yantrix",
          results: [
            { competition: "Robo Soccer", position: "Runner-Up" },
            { competition: "Line Follower", position: "2nd Runner-Up" }
          ]
        }
      ],
      innovationEvents: [
        {
          title: "Demo Day / Startup Exhibition",
          awards: ["First Position", "Runner-Up"],
          venue: "Trident Academy of Technology"
        }
      ],
      specialAchievements: [
        { title: "Trithon Triplets Hackathon", award: "1st Runner-Up" },
        { title: "Nirman 3.0 Robotics Event", award: "2nd Runner-Up" }
      ],
      keyContributors: [
        "Asutosh Nayak", "Soumya Ranjan Pradhan", "Ayush Kumar Jena",
        "Saswat Mishra", "Satyajit Jena", "Allisha Routray", "Basudev Das"
      ],
      commitments: [
        "Encouraging innovation and research",
        "Promoting hands-on technical learning",
        "Supporting students in national-level competitions"
      ]
    },
    professionalSocieties: {
      overview: {
        title: "PROFESSIONAL ACTIVITIES & STUDENT CHAPTERS",
        description: "The Department of Electronics and Telecommunication Engineering at Trident Academy of Technology, Bhubaneswar actively engages students through leading professional societies like IEEE, IETE, ISTE, and VSI.",
        subtitle: "These platforms provide opportunities for technical learning, research, innovation, and industry exposure."
      },
      societies: [
        {
          id: "ieee",
          name: "IEEE",
          fullName: "Institute of Electrical and Electronics Engineers",
          description: "The IEEE Student Branch conducts various technical talks, hackathons, and workshops to keep students engaged with the latest advancements in technology.",
          events: [
            { name: "Team Synexis secured 1st Runners-up position in Project Expo", date: "09/08/2025", venue: "Mayfair Lagoon, Bhubaneswar" },
            { name: "Technical talk on 'STI Ecosystem and Funding Opportunities'", date: "08/07/2025", venue: "Trident Academy Of Technology" },
            { name: "Expert Talk On 'AC, DC, and Transient Analysis of Op-Amps in Cadence ADE'", date: "23/06/2025", venue: "Trident Academy Of Technology" },
            { name: "6 week Summer Internship on ASIC & Embedded System Design using Licensed EDA Tools", date: "16/06/25-26/07/25", venue: "Trident Academy Of Technology" },
            { name: "Session on 'Research Conclave: Celebrating National Technology Day 2025'", date: "10/05/2025", venue: "Trident Academy Of Technology" },
            { name: "Workshop on 'Design Thinking and Internship Pathways'", date: "17/04/2025", venue: "Trident Academy Of Technology" },
            { name: "Annual Hackathon, TRITHON 2025", date: "8/03/2025-9/03/25", venue: "Trident Academy Of Technology" },
            { name: "Two-day National Conclave on 'Energy, Semiconductors, Cyber security, and AI- i.e. ESCA-2025'", date: "15/02/2025", venue: "Trident Academy Of Technology" },
            { name: "Sensitization Talk on 'Role of Artificial Intelligence (AI) in career development'", date: "05/02/2025", venue: "Trident Academy Of Technology" },
            { name: "Technical talk on 'Advancements and Applications Fabrication Technology'", date: "07/11/2024", venue: "Trident Academy Of Technology" },
            { name: "Alumina talk on 'Career Paths and Opportunities In VLSI Industry'", date: "29/10/2024", venue: "Trident Academy Of Technology" },
            { name: "IEEE SSH-2024 Hackathon", date: "21/10/2024-22/10/24", venue: "Ghaziabad" },
            { name: "IEEE Day celebrations", date: "26/09/2024 - 28/09/2024", venue: "Trident Academy Of Technology" },
            { name: "Technical talk on 'Introduction to Digital VLSI Design and Standard Flow'", date: "06/08/2024", venue: "Trident Academy Of Technology" }
          ]
        },
        {
          id: "iete",
          name: "IETE",
          fullName: "The Institution of Electronics and Telecommunication Engineers",
          description: "IETE is India's leading recognized professional society devoted to the advancement of Science and Technology of Electronics, Telecommunication & IT. It conducts and sponsors technical meetings, conferences, symposia, and exhibitions.",
          events: [
            { name: "One-day hands-on session titled 'Analog Circuit Design Using Cadence Tools'", date: "24/06/2025", venue: "Trident Academy Of Technology" },
            { name: "A Technical Quiz Competition", date: "03/06/2025", venue: "Trident Academy Of Technology" },
            { name: "A Technical Quiz Competition", date: "06/11/2024", venue: "Trident Academy Of Technology" },
            { name: "IETE Foundation day celebration", date: "09/11/2024", venue: "Trident Academy Of Technology" },
            { name: "A Technical Quiz Competition", date: "10-11-2023 to 11-11-2023", venue: "Trident Academy Of Technology" },
            { name: "A Technical Paper Presentation on Chat GPT in Education", date: "24-05-2023", venue: "Trident Academy Of Technology" }
          ]
        },
        {
          id: "iste",
          name: "ISTE",
          fullName: "Indian Society For Technical Education",
          description: "The Indian Society for Technical Education admitted TAT as an Institutional Member in 2012. This helps the institute to improve the quality and relevance of technical education.",
          events: [
            { name: "A Technical talk on VLSI Design & Verification Flow", date: "19-07-2025", venue: "Trident Academy Of Technology" },
            { name: "A seminar on 'Security Awareness and Data Protection Measures'", date: "12-04-2024", venue: "Trident Academy Of Technology" },
            { name: "A one day workshop on 'Semiconductor Characterization: Present status and Future needs'", date: "10-02-2024", venue: "Trident Academy Of Technology" }
          ]
        },
        {
          id: "vsi",
          name: "VSI",
          fullName: "VLSI Society of India",
          description: "VSI is a premier professional body focused on promoting research, development, and education in the field of VLSI design and related technologies. On 17th August 2024, the department signed a MoU with VSI to strengthen VLSI education, research, and skill development.",
          events: [
            { name: "A technical talk on 'STI Ecosystem and Funding Opportunities for Researchers'", date: "08/07/2025", venue: "Trident Academy Of Technology" },
            { name: "A session on 'Research Conclave: Celebrating National Technology Day 2025'", date: "10/05/2025", venue: "Trident Academy Of Technology" },
            { name: "MoU Signing Ceremony", date: "17/08/2024", venue: "Trident Academy Of Technology" }
          ]
        }
      ]
    },
    startup: {
      title: "PROJECTS TO STARTUPS",
      paragraphs: [
        "The Department of Electronics and Telecommunication Engineering at Trident Academy of Technology, Bhubaneswar encourages students to transform innovative ideas into real-world solutions.",
        "Selected student projects have successfully evolved into startups and are incubated at STPI (2024-25), reflecting the institute's strong focus on innovation and entrepreneurship."
      ],
      keyFocus: [
        "Turning academic projects into startup ventures",
        "Supporting innovation and entrepreneurship",
        "Providing incubation and mentorship opportunities"
      ],
      vision: "To empower students to become future entrepreneurs and innovators, contributing to technological and economic growth.",
      reportLink: "#" // Link to be updated later
    }
  },
  
  "electrical-and-electronics-engineering": {
    name: "Electrical and Electronics Engineering",
    theme: {
      primary: "from-[#F59E0B] to-[#D97706]", // Amber to darker amber
      light: "bg-[#FEF3C7]",
      border: "border-[#FDE68A]",
      text: "text-[#B45309]",
      iconBg: "bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/20",
      alert: "bg-[#FFFBEB] border-[#FCD34D] text-[#92400E]"
    },
    meta: {
      title: "Electrical & Electronics Engineering | Trident Academy of Technology",
      description: "Department of Electrical and Electronics Engineering at Trident Academy of Technology."
    },
    heroImage: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=2000",
    hero: {
      titleLine1: "Electrical & Electronics",
      titleLine2: "Engineering",
      subtitle: "Empowering the future with advanced power systems, renewable energy technologies, and smart grids.",
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Electrical & Electronics Engineering",
      stats: [
        { label: "Established", value: "2005" },
        { label: "B.Tech Intake", value: "60" },
        { label: "Industry Partners", value: "12+" }
      ]
    },
    sidebar: {
      heading: "ELECTRICAL &\nELECTRONICS",
      items: [
        { id: "overview", label: "DEPARTMENT OVERVIEW", icon: "BookOpen", href: "/electrical-and-electronics-engineering/overview" },
        { id: "lecture-notes", label: "LECTURE NOTES", icon: "FileText", href: "/electrical-and-electronics-engineering/lecture-notes" },
        { id: "clubs", label: "CLUBS", icon: "Users", href: "/electrical-and-electronics-engineering/clubs" },
        { id: "professional-societies", label: "PROFESSIONAL SOCIETY & CHAPTERS", icon: "Award", href: "/electrical-and-electronics-engineering/professional-societies" },
        { id: "syllabus", label: "SYLLABUS", icon: "Layers", href: "/electrical-and-electronics-engineering/syllabus" },
        { id: "faculty", label: "FACULTIES", icon: "Users", href: "/electrical-and-electronics-engineering/faculty" },
        { id: "laboratories", label: "LABORATORIES", icon: "Beaker", href: "/electrical-and-electronics-engineering/laboratories" }
      ]
    },
    homeContent: {
      paragraphs: [
        "The Department of Electrical and Electronics Engineering (EEE) was established in the year 2005 and offers an undergraduate programme, B.Tech in Electrical and Electronics Engineering, with an approved intake of 30 students. From the academic session 2024-25, the department has expanded its academic offerings by introducing two postgraduate programmes, namely M.Tech in Electric Vehicle Technology and M.Tech in Energy and Environmental Engineering, each with an approved intake of 18 students. The department is staffed with 15 qualified faculty members who are actively involved in teaching, laboratory instruction, and academic mentoring. During the last three academic years, the faculty members have made notable research contributions, resulting in 10 publications in national journals, 5 publications in international journals, and the filing/granting of 7 patents.",
        "The B.Tech programme in Electrical and Electronics Engineering (EEE) has been duly accredited by the National Board of Accreditation (NBA), reflecting its compliance with prescribed quality standards in technical education.",
        "Students of the department enhance their technical knowledge and practical skills through active participation in various departmental clubs like the Renewable Energy (RENEN) Club, Energy Efficiency Club, and Electric Vehicle Club, which facilitate experiential learning, innovation, and professional development beyond the curriculum.",
        "The Department of Electrical and Electronics Engineering (EEE), along with its students, has installed a 10 kWp on-grid rooftop solar plant for powering specific electrical loads and a 2 kWp solar hybrid system for campus street lighting. Additionally, a 235 kWp on-grid rooftop system on hostel buildings and a 35 kWp canal-top ground-mounted solar system have been installed. Further strengthening sustainability efforts, a 15 kWp solar hybrid system with battery backup powers the campus greenhouse and has been planned for integration with a biomass system.",
        "The department has certified trainers from the Power Sector Skill Council (PSSC) and the Skill Council for Green Jobs (SCGJ) who impart National Skills Qualification Framework (NSQF)-aligned certification courses. These initiatives enhance students' employability by providing industry-relevant skills and facilitating their placement and deployment in reputed organisations."
      ],
      salientFeatures: []
    },
    programmes: [
      {
        title: "Diploma in Electrical Engineering",
        seats: "60 Seats",
        details: "The Department of Electrical and Electronics Engineering at Trident Academy of Technology offers a comprehensive Diploma programme in Electrical Engineering, designed to provide students with a strong foundation in core principles along with exposure to contemporary advancements in the discipline. The curriculum is structured to ensure academic rigor, practical relevance, and alignment with industry and professional standards.\n\nIn addition to the structured academic curriculum, students of the Electrical Engineering programme are provided with diverse experiential learning opportunities. Distinguished Lectures delivered by eminent experts from various domains of Electrical Engineering facilitate knowledge dissemination, intellectual interaction, and exposure to contemporary practices. These activities effectively complement classroom teaching and motivate students to explore interdisciplinary approaches and real-world applications of theoretical concepts.",
        sections: []
      },
      {
        title: "B.Tech. in Electrical & Electronics Engineering",
        seats: "30 Seats",
        details: "The Department of Electrical and Electronics Engineering at Trident Academy of Technology offers a comprehensive B.Tech programme in Electrical and Electronics Engineering, designed to provide students with a strong foundation in core principles along with exposure to contemporary advancements in the discipline. The curriculum is structured to ensure academic rigor, practical relevance, and alignment with industry and professional standards.\n\nIn addition to the structured academic curriculum, students of the Electrical and Electronics Engineering programme are provided with diverse experiential learning opportunities. Distinguished Lectures delivered by eminent experts from various domains of Electrical and Electronics Engineering facilitate knowledge dissemination, intellectual interaction, and exposure to contemporary practices. These activities effectively complement classroom teaching and motivate students to explore interdisciplinary approaches and real-world applications of theoretical concepts.\n\nFurthermore, the Department of Electrical and Electronics Engineering promotes a strong culture of research and innovation by encouraging students participation in hands-on projects, internships, and collaborative activities with industry partners. These initiatives enable students to reinforce theoretical knowledge through practical application while developing industry-relevant skills essential for professional competence and career readiness.\n\nThe Department of Electrical and Electronics Engineering is committed for nurturing competent professionals who are not only technically proficient but also innovative, ethical, and socially responsible. Through a holistic approach to education, the department aims to empower students with leadership qualities and a sense of professional responsibility, enabling them to contribute effectively to technological advancement and societal progress.",
        sections: []
      },
      {
        title: "M.Tech. in Electric Vehicle Technology",
        seats: "18 Seats",
        details: "The M.Tech programme in Electric Vehicle Technology is a forward-looking initiative designed to equip students with comprehensive knowledge and specialized skills in the domain of electric mobility. With the rapid global adoption of electric vehicles and the evolving transportation ecosystem, the programme is both timely and essential, addressing emerging industry requirements and technological advancements.\n\nThe programme provides in-depth coverage of the engineering and technological aspects of electric mobility applications. It enables students to develop a comprehensive understanding of electric vehicle design, including power requirements, torque characteristics, and overall vehicle performance parameters. The curriculum also emphasizes informed selection and integration of engines and electric motors, focusing on optimizing efficiency, sustainability, and performance in electric vehicle systems.\n\nMoreover, the programme offers a holistic understanding of battery pack design, covering critical aspects such as power and energy density, energy storage capacity, and lifecycle performance. Through a balanced integration of theoretical instruction and hands-on learning, students gain exposure to battery testing and evaluation procedures, ensuring reliability, safety, and performance of electric vehicle systems under real-world operating conditions.\n\nIn addition to technical competencies, the M.Tech programme in Electric Vehicle Technology addresses broader aspects of electric mobility, including infrastructure development, environmental sustainability, and economic considerations. The curriculum enables students to study the planning and implementation of charging infrastructure and to analyze its impact on urban environments, energy demand, and overall mobility ecosystems.\n\nFurthermore, the programme develops a comprehensive understanding of the environmental impact of electric vehicles, emphasizing their role in reducing greenhouse gas emissions and advancing sustainable transportation systems. It also addresses economic considerations such as cost\u2013benefit analysis and market dynamics, thereby equipping students with the analytical skills required to effectively navigate the rapidly evolving electric vehicle industry.\n\nIn summary, the M.Tech programme in Electric Vehicle Technology adopts a comprehensive and multidisciplinary approach to electric mobility, extending beyond conventional academic boundaries. By equipping students with a broad skill set and in-depth knowledge of electric vehicle technologies, the programme aims to foster innovation and enable meaningful contributions to the advancement of sustainable and efficient transportation systems.",
        sections: []
      },
      {
        title: "M.Tech. in Energy & Environmental Engineering",
        seats: "18 Seats",
        details: "The M.Tech programme in Energy and Environmental Engineering is designed to develop highly skilled graduates equipped to address the evolving challenges in the fields of energy and environmental management. By fostering innovation, interdisciplinary learning, and a focus on sustainability, the programme prepares students to become future leaders in advancing sustainable development and environmentally responsible solutions.\n\nAs part of the curriculum, students participate in hands-on projects, internships, and research initiatives that address real-world energy and environmental challenges. They gain practical experience in areas such as designing advanced lighting systems, optimizing heating, ventilation, and air conditioning systems, and implementing strategies to improve energy efficiency and minimize environmental impact.\n\nBeyond technical expertise, the programme cultivates a strong sense of environmental responsibility and ethical leadership in students. Through courses on environmental compliance and sustainability, students develop a thorough understanding of the ecological impact of energy systems and the importance of making responsible decisions to promote sustainable practices for the benefit of future generations.\n\nIn essence, the M.Tech programme in Energy and Environmental Engineering integrates knowledge, innovation, and sustainability. By equipping students with the skills and perspectives required to address complex energy and environmental challenges, the programme prepares them to become catalysts for positive change and contributors to a sustainable and resilient future.",
        sections: []
      }
    ],
    overview: {
      paragraphs: [
        "The Department of Electrical and Electronics Engineering (EEE) at Trident Academy of Technology (TAT) currently offers an undergraduate programme in Electrical and Electronics Engineering (B.Tech in EEE) and two postgraduate programmes — M.Tech in Electric Vehicle Technology and M.Tech in Energy and Environmental Engineering under Biju Patnaik University of Technology (BPUT), Odisha. The B.Tech program curriculum, distributed over eight semesters and the M.Tech. program curricula, distributed over four semesters, are delivered under the able headship of Professor P. K. Sahoo with a team of highly experienced and committed faculty members. The programmes aim to provide comprehensive knowledge and exposure across core areas like Power System, Control System, Electrical Machine, Instrumentation, Switchgear and Industrial Protection, Power Electronics, Electrical Drives, and Electromagnetic Fields and Waves.",
        "The department is dynamic and vibrant, equipped with state-of-the-art laboratories including Electrical Machines Lab, Electrical & Electronics Measurement Lab, Electrical Circuit Analysis Lab and Power Electronics Lab, enabling hands-on learning under the guidance of competent and dedicated instructors. The department follows a \"Learn with Fun\" approach to foster intellectual, technological, and personal skill development in addition to the prescribed BPUT curriculum. Students actively engage in a variety of technical and professional clubs and chapters, including IEEE, IET, IETE, and ISTE, to enhance their practical knowledge, leadership, and collaborative abilities.",
        "Over the past five years, the Department has demonstrated strong academic performance, with 10% of students achieving a CGPA of 9.0 and above, and 20% securing a CGPA of 8.0 and above. Coupled with an impressive placement record of approximately 90% during the same period, Trident Academy of Technology has emerged as a preferred choice for both students and parents seeking quality technical education in core engineering disciplines."
      ],
      vision: "To be a model of excellence in technical education and research by producing world-class graduates who are prepared for life-long engagement in the rapidly changing fields of electrical and related fields ",
      mission: [
        { text: "M1. To create and sustain an environment of education where students will acquire the requisite technical knowledge and learn to apply it professionally with due consideration to ethical, social, economic and environmental issues." },
        { text: "M2. To create awareness among student about the energy management & encourage them to explore avenues concerning renewable energy." },
        { text: "M3. To create research oriented environment & also provide quality consultancy." },
        { text: "M4. To hone innovative & entrepreneurial skills of students." }
      ],
      po: [
        { title: "PO1. Engineering knowledge", description: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems." },
        { title: "PO2. Problem analysis", description: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
        { title: "PO3. Design/development of solutions", description: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
        { title: "PO4. Conduct investigations of complex problems", description: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
        { title: "PO5. Modern tool usage", description: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
        { title: "PO6. The engineer and society", description: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
        { title: "PO7. Environment and sustainability", description: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
        { title: "PO8. Ethics", description: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
        { title: "PO9. Individual and team work", description: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
        { title: "PO10. Communication", description: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
        { title: "PO11. Project management and finance", description: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
        { title: "PO12. Life-long learning", description: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
      ],
      peo: [
        { text: "PEO1. An ability to apply advanced engineering principles, methodologies and tools for identification, formulation and solution of engineering problems." },
        { text: "PEO2. An ability to use techniques, problem solving and analytical skills, and modern engineering tools for engineering practice and employability prospects." },
        { text: "PEO3. To understand the impact of engineering solutions in a global, environmental and societal context and develop team sprit to be able to function effectively in multidisciplinary teams." },
        { text: "PEO4. To have an understanding of professional and ethical responsibility and a desire to engage oneself in the process of lifelong learning." }
      ],
      pso: [
        { text: "PSO1. Proficient skills: To exhibit the capacity to employ the newest hardware and software to tackle complicated problems in Electrical and Electronics Engineering, as well as analytical abilities to contribute to practical, economical, and environmentally responsible solutions." },
        { text: "PSO2. Effective career build-up: To have excellent employability rates and plenty of options for further education by becoming proficient in hardware/software design and electrical and electronics circuit design." },
        { text: "PSO3. Professional Engineer: To demonstrate the capacity to design and construct complex systems in the areas of next generation electrical systems, renewable energy, and power systems in order to meet Sustainable Development Goals." }
      ]
    },
    faculty: [
      {
        name: "Mr.Mohammed Nadeem Iqbal",
        designation: "Assistant Professor",
        doj: "22/2/2011",
        qualification: "M.Tech",
        bputId: "T111828903"
      },
      {
        name: "Mr.Shitya Ranjan Das",
        designation: "Associate Professor",
        doj: "3/7/2006",
        qualification: "M.Tech",
        bputId: "T081828906"
      },
      {
        name: "Mr.Pradipta Kumar Sahoo",
        designation: "Prof. & HOD",
        doj: "7/8/2006",
        qualification: "M.Tech",
        bputId: "T081828902"
      },
      {
        name: "Mr.Mir Manjur Elahi",
        designation: "Assistant Professor",
        doj: "10/1/2011",
        qualification: "M.Tech",
        bputId: "T111828902"
      },
      {
        name: "Mrs.Smrutirekha Mahanta",
        designation: "Assistant Professor",
        doj: "14/9/2011",
        qualification: "M.Tech",
        bputId: "T111828905"
      }
    ],
    laboratories: [
      {
        name: "BASIC ELECTRICAL ENGG. LABORATORY",
        description: "This laboratory is designed to provide first-year students with a solid foundation in the practical aspects of electrical engineering. It familiarizes them with basic electrical circuits, components, and measuring instruments.",
        equipments: ["DC Power Supplies", "Function Generators", "Cathode Ray Oscilloscopes (CRO)", "Multimeters", "Rheostats", "Voltmeters & Ammeters"],
        keyExperiments: [
          "Verification of Ohm's Law and Kirchhoff's Laws",
          "Verification of Superposition and Thevenin’s Theorems",
          "Study of R-L-C Series and Parallel Resonant Circuits",
          "Measurement of Power in Single-Phase AC Circuits"
        ]
      },
      {
        name: "Power Electronics Lab",
        description: "Equipped with modern solid-state devices and converter modules, this lab focuses on the application of power semiconductor devices for efficient power conversion and control.",
        equipments: ["SCR, MOSFET, IGBT Trainer Kits", "Digital Storage Oscilloscopes (DSO)", "Single-phase and Three-phase Inverter Modules", "Chopper Modules", "Isolation Transformers"],
        keyExperiments: [
          "V-I Characteristics of SCR, MOSFET, and IGBT",
          "Study of Single-Phase Half and Full-Wave Controlled Rectifiers",
          "Analysis of DC-DC Step-Down and Step-Up Choppers",
          "PWM Techniques in Single-Phase Inverters"
        ]
      },
      {
        name: "Electrical Measurement & Instrumentation Lab",
        description: "This lab provides hands-on experience in measuring various electrical quantities using analog and digital instruments. It emphasizes precision and calibration of measuring devices.",
        equipments: ["LVDT Trainer Kits", "Strain Gauge Modules", "Kelvin’s Double Bridge", "Schering Bridge", "Energy Meters", "Current & Potential Transformers"],
        keyExperiments: [
          "Measurement of Low Resistance using Kelvin's Double Bridge",
          "Measurement of Unknown Capacitance using Schering Bridge",
          "Calibration of Single-Phase Energy Meter",
          "Measurement of Displacement using LVDT"
        ]
      },
      {
        name: "Digital Signal Processing Lab",
        description: "A software and hardware integrated lab that introduces students to signal processing techniques, filter design, and spectral analysis using DSP processors and simulation tools.",
        equipments: ["TMS320C6713 DSP Starter Kits", "MATLAB Software", "Function Generators", "Digital Oscilloscopes", "Computers with Code Composer Studio"],
        keyExperiments: [
          "Generation and Analysis of Standard Signals",
          "Linear and Circular Convolution of Sequences",
          "Design of FIR and IIR Digital Filters",
          "Implementation of FFT Algorithms on DSP Hardware"
        ]
      },
      {
        name: "Communication Engineering Lab",
        description: "Focuses on analog and digital communication techniques, enabling students to understand modulation, demodulation, multiplexing, and coding processes.",
        equipments: ["AM/FM Trainer Kits", "PCM/TDM Trainer Modules", "ASK/FSK/PSK Modulation Kits", "Spectrum Analyzers", "DSO"],
        keyExperiments: [
          "Amplitude Modulation and Demodulation",
          "Frequency Modulation and Phase-Locked Loop (PLL)",
          "Pulse Code Modulation (PCM) and Demodulation",
          "Digital Modulation Techniques: ASK, FSK, PSK"
        ]
      },
      {
        name: "Electrical Machines Lab",
        description: "This core facility provides practical exposure to the operation, testing, and performance analysis of various DC and AC electrical machines under different load conditions.",
        equipments: ["DC Motor-Generator Sets", "Single-Phase and Three-Phase Transformers", "Squirrel Cage and Slip-Ring Induction Motors", "Synchronous Motors/Generators", "Loading Rheostats"],
        keyExperiments: [
          "Open Circuit and Short Circuit Tests on Transformers",
          "Load Test on DC Shunt and Series Motors",
          "Speed Control of DC Shunt Motor",
          "V-Curves and Inverted V-Curves of Synchronous Motor"
        ]
      },
      {
        name: "Electrical Circuit Analysis Lab",
        description: "Dedicated to the in-depth analysis of complex electrical networks. Students learn to analyze transient and steady-state responses of linear circuits.",
        equipments: ["Network Theorem Trainer Kits", "Transient Analysis Kits", "Two-Port Network Modules", "Function Generators", "Dual-Trace Oscilloscopes"],
        keyExperiments: [
          "Verification of Maximum Power Transfer Theorem",
          "Determination of Z, Y, ABCD, and h Parameters of Two-Port Networks",
          "Transient Response of RC and RL Circuits",
          "Analysis of Series and Parallel Resonance"
        ]
      },
      {
        name: "Power System Simulation Lab",
        description: "A computational lab equipped with advanced simulation software for modeling, analyzing, and optimizing large-scale electrical power grids and systems.",
        equipments: ["High-Performance Workstations", "MATLAB/Simulink", "MiPower Software", "ETAP Software"],
        keyExperiments: [
          "Formation of Y-Bus and Z-Bus Matrices",
          "Load Flow Analysis using Gauss-Seidel and Newton-Raphson Methods",
          "Short Circuit and Fault Analysis of Power Systems",
          "Transient Stability Analysis of Single-Machine Infinite-Bus Systems"
        ]
      },
      {
        name: "Control System Lab",
        description: "Provides practical understanding of linear control systems, system dynamics, stability analysis, and compensator design using hardware models and software.",
        equipments: ["DC Servo Motor Kits", "AC Servo Motor Kits", "PID Controller Modules", "Synchro Transmitter-Receiver Pairs", "MATLAB"],
        keyExperiments: [
          "Time Response Analysis of Second-Order Systems",
          "Characteristics of AC and DC Servo Motors",
          "Study of Synchro Transmitter and Receiver",
          "Design and Implementation of PID Controllers"
        ]
      },
      {
        name: "Microprocessor Lab",
        description: "Introduces students to the architecture, programming, and interfacing of microprocessors and microcontrollers, essential for embedded system design.",
        equipments: ["8085/8086 Microprocessor Kits", "8051 Microcontroller Kits", "Stepper Motor Interfacing Modules", "ADC/DAC Interfacing Cards", "Traffic Light Controller Modules"],
        keyExperiments: [
          "Assembly Language Programming for Arithmetic Operations",
          "Interfacing ADC and DAC with Microprocessors",
          "Stepper Motor Speed and Direction Control",
          "Traffic Light Controller Interfacing"
        ]
      },
      {
        name: "POWER SYSTEM LAB",
        description: "A hardware-oriented lab designed to study the protection, operation, and characteristics of power system components such as relays, transmission lines, and insulators.",
        equipments: ["Transmission Line Simulators", "Electromechanical and Solid-State Relays", "Oil Testing Kits", "High Voltage Testing Transformers"],
        keyExperiments: [
          "Characteristics of Overcurrent, Earth Fault, and Directional Relays",
          "Determination of Transmission Line Parameters (ABCD)",
          "Measurement of Dielectric Strength of Transformer Oil",
          "String Efficiency of Suspension Insulators"
        ]
      },
      {
        name: "Electrical Project Lab",
        description: "An innovation hub where students design, build, and test prototypes for their final year projects, bridging the gap between theoretical knowledge and practical engineering.",
        equipments: ["PCB Fabrication Units", "Soldering Stations", "Digital Multimeters", "Microcontroller Development Boards", "Various Sensors and Actuators"],
        keyExperiments: [
          "Design and Fabrication of Custom PCBs",
          "Hardware Integration of Sensor Networks",
          "Prototyping Embedded System Applications",
          "Testing and Validation of Capstone Projects"
        ]
      },
      {
        name: "Electric Vehicle Technology Lab",
        description: "A state-of-the-art facility dedicated to the study of electric mobility, battery management systems, motor drives, and EV charging infrastructure.",
        equipments: ["BLDC Motor Drive Kits", "Battery Management System (BMS) Trainers", "EV Charging Station Simulators", "Lithium-Ion Battery Packs", "Vehicle Dynamics Simulation Software"],
        keyExperiments: [
          "Performance Analysis of BLDC Motors for EVs",
          "Study of Battery Charging and Discharging Characteristics",
          "Simulation of EV Powertrain Dynamics",
          "Analysis of Regenerative Braking Systems"
        ]
      },
      {
        name: "RENEWABLE ENERGY LAB",
        description: "Focuses on sustainable energy generation technologies, enabling students to experiment with solar, wind, and hybrid energy systems.",
        equipments: ["Solar PV Training Systems", "Wind Energy Trainers", "Fuel Cell Demonstration Kits", "Pyranometers", "Grid-Tied Inverter Modules"],
        keyExperiments: [
          "I-V and P-V Characteristics of Solar Panels",
          "Effect of Shading and Tilt Angle on Solar PV Output",
          "Performance Evaluation of Wind Turbine Generators",
          "Study of Solar-Wind Hybrid Energy Systems"
        ]
      }
    ],
    lectureNotes: [
      { title: "Power electronics", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/5.power-electronics-by-lohit-sahoo-156c-1.pdf" },
      { title: "Network Theory", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/4.Network-Theory-LOHIT.pdf" },
      { title: "ODI module-1", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/ODI-module-1-by-LKS.pdf" },
      { title: "Optoelectronics Devices & Instrumentation", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/Optoelectronics-Devices-Instrumentation-Madhulita-(1).pdf" },
      { title: "Electrical Power Transmission & Distribution", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/2.Electrical-Power-Transmission-Distribution-LOHIT-(1).pdf" },
      { title: "Control System Engineering", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/electronics/1.Control-System-Engineering-LOHIT.pdf" }
    ],
    clubs: [
      {
        name: "RENEN (RENEWABLE ENERGY) CLUB",
        purpose: "Encouraging students to learn about renewable energy technologies, participate in innovative projects, and develop practical technical skills. The club aims to create awareness about sustainable energy solutions and inspire students to contribute toward a greener and more environmentally responsible future.",
        activities: "The club organizes workshops, seminars, and technical activities that promote innovation and eco-friendly practices on campus. These initiatives help students explore renewable energy concepts while actively engaging in projects that support a sustainable future."
      },
      {
        name: "EV (ELECTRIC VEHICLE) CLUB",
        purpose: "Encouraging students to explore electric vehicle design, battery technologies, charging infrastructure, and energy-efficient mobility systems. The club provides a platform for students to understand modern transportation technologies and the global transition toward sustainable mobility.",
        activities: "The club promotes hands-on learning through practical projects, technical workshops, and participation in competitions. These activities strengthen innovation, problem-solving abilities, and engineering skills related to electric vehicle technology."
      }
    ],
    professionalSocieties: [
      {
        name: "IEEE PES STUDENT CHAPTER",
        description: "The student chapter of the Institute of Electrical and Electronics Engineers Power and Energy Society (IEEE PES), one of the largest multidisciplinary professional organisations of engineers worldwide, is administered by the Department of Electrical & Electronics Engineering at TAT. The chapter provides a professional platform for students to engage with global engineering communities and stay updated with the latest technological developments.\n\nThe chapter entrusts the institution with the responsibility of promoting the advancement of engineering knowledge and professional development among students, faculty members, and individuals associated with the institution. It encourages innovation, collaboration, and technical excellence in the field of electrical and electronics engineering.\n\nThe student chapter provides excellent opportunities for networking, mentoring, and building strong professional connections through shared technical interests. The initiatives extend beyond the institution by supporting local communities while also benefiting the student body through various technical programs and outreach activities. Our students actively participate in this chapter and contribute to its initiatives.\n\nThe primary objective of the chapter within the Department of Electrical & Electronics Engineering is to develop strategies and implementation plans for effective technology transition and management. This approach helps students rapidly learn, adapt, and absorb emerging technologies, preparing them to contribute meaningfully to technological advancement in the country.",
        images: []
      }
    ],
    syllabus: {
      years: [
        {
          year: "FIRST YEAR",
          buttons: [
            { text: "VIEW/DOWNLOAD 1ST YEAR SYLLABUS", link: "#" }
          ]
        },
        {
          year: "SECOND YEAR",
          buttons: [
            { text: "VIEW / DOWNLOAD 3RD SEM SYLLABUS", link: "#" },
            { text: "VIEW / DOWNLOAD 4th Sem SYLLABUS", link: "#" }
          ]
        },
        {
          year: "THIRD YEAR",
          buttons: [
            { text: "VIEW / DOWNLOAD 5TH SEM SYLLABUS", link: "#" },
            { text: "VIEW / DOWNLOAD 6TH SEM SYLLABUS", link: "#" }
          ]
        },
        {
          year: "FOURTH YEAR",
          buttons: [
            { text: "VIEW / DOWNLOAD 7TH SEM SYLLABUS", link: "#" },
            { text: "VIEW / DOWNLOAD 8TH SEM SYLLABUS", link: "#" }
          ]
        }
      ],
      addOnCourses: ["Smart Grid Technologies", "Renewable Energy Systems", "Industrial Automation"]
    }
  },
  "mechanical-engineering": {
    heroImage: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000",
    hero: {
      titleLine1: "Mechanical",
      titleLine2: "Engineering",
      subtitle: "Building the future of mechanics and automation.",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Mechanical Engineering",
      stats: [
        { label: "Intake", value: "30" },
        { label: "Established", value: "2011" }
      ]
    },
    sidebar: {
      heading: "MECHANICAL\nENGINEERING",
      items: [
        { id: "overview", label: "DEPARTMENT OVERVIEW", icon: "BookOpen" },
        { id: "placement", label: "PLACEMENT", icon: "Award" },
        { id: "lecture-notes", label: "LECTURE NOTES", icon: "FileText" },
        { id: "syllabus", label: "SYLLABUS", icon: "Layers" },
        { id: "faculty", label: "FACULTY", icon: "Users" },
        { id: "laboratories", label: "LABORATORIES", icon: "Cpu" }
      ]
    },
    homeContent: {
      paragraphs: [
        "The NBA Accredited Department of Mechanical Engineering, with an intake capacity of 30 Seats and established in the year of 2011, is amongst the top-rated departments of the NAAC Accredited institute Trident Academy of Technology, leading in academics, placements, research projects, entrepreneurship and students' achievements. The undergraduate course structure of mechanical engineering is designed keeping in view the technological evolution and industrial requirements. The department offers the course curriculum as per the credit-based system of Biju Patnaik University of Technology (BPUT) under AICTE. The students here get a platform to showcase their talents at the state and national level competitions. The Department of Mechanical Engineering aims to produce high-quality individuals with a keen interest in the frontier areas of mechanical engineering, automobile engineering and mechatronics engineering.",
        "Department is equipped with a number of state-of-the-art labs, including EV Technology, Advanced Manufacturing lab, Renewable energy, Robotics, 3D Printing and CNC(Turning & Milling). Students are exposed to these laboratories through curricular teaching-learning processes during their four-year engineering studies."
      ],
      salientFeatures: [
        "The Department of Mechanical Engineering imparts cutting-edge skills through teaching, training, industrial internship, industrial projects, research and consultancy in leading areas of mechanical engineering.",
        "The well-qualified and experienced faculty members are committed to ensuring an understanding of fundamental concepts and exploring the students' talent to lay a strong foundation.",
        "Students are provided with training on current technologies, design tools and product design skills to become industry-ready.",
        "A set of innovative pedagogy is designed such that the students are able to connect theory with applications and apply them in furthering their careers.",
        "The department is strategically aligned with industry through MoUs to enhance students' knowledge and skills through internships, real-world projects, expert talks, workshops, seminars, and conferences."
      ]
    },
    overview: {
      paragraphs: [
        "The Department of Mechanical Engineering imparts cutting-edge skills through teaching, training, industrial internship, industrial projects, research and consultancy in leading areas of mechanical engineering.",
        "The undergraduate course structure of mechanical engineering is designed keeping in view the technological evolution and industrial requirements. The department is strategically aligned with industry through MoUs to enhance students' knowledge and skills through internships, real-world projects, expert talks, workshops, seminars, and conferences."
      ],
      vision: "To be a premier department of Mechanical Engineering recognized for academic excellence, innovative research, and producing industry-ready graduates capable of addressing global engineering challenges.",
      mission: [
        { text: "M1. To impart quality education through innovative teaching-learning processes and state-of-the-art facilities." },
        { text: "M2. To foster a culture of research, innovation, and entrepreneurship among students." },
        { text: "M3. To strengthen industry-institute interaction for bridging the gap between academia and industry requirements." },
        { text: "M4. To instill ethical values, teamwork, and lifelong learning skills in students for sustainable societal development." }
      ],
      po: [
        { title: "PO1. Engineering knowledge", description: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems." },
        { title: "PO2. Problem analysis", description: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
        { title: "PO3. Design/development of solutions", description: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
        { title: "PO4. Conduct investigations of complex problems", description: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
        { title: "PO5. Modern tool usage", description: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
        { title: "PO6. The engineer and society", description: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
        { title: "PO7. Environment and sustainability", description: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
        { title: "PO8. Ethics", description: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
        { title: "PO9. Individual and team work", description: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
        { title: "PO10. Communication", description: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
        { title: "PO11. Project management and finance", description: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
        { title: "PO12. Life-long learning", description: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
      ],
      peo: [
        { text: "PEO1. To apply mechanical engineering principles and advanced tools to design, analyze, and solve complex engineering problems." },
        { text: "PEO2. To pursue successful careers in mechanical and allied industries, entrepreneurship, or higher education." },
        { text: "PEO3. To demonstrate professionalism, leadership, and ethical responsibility in multidisciplinary environments." },
        { text: "PEO4. To engage in lifelong learning and adapt to technological advancements for sustainable development." }
      ],
      pso: [
        { text: "PSO1. Apply the knowledge of manufacturing, thermal, and fluid sciences to model, design, and analyze mechanical systems." },
        { text: "PSO2. Utilize modern CAD/CAM/CAE tools and automation technologies to develop innovative and sustainable solutions for the industry." }
      ]
    ,
      images: [
        "/images/departments/mechanical/IMG20250516113501.jpg",
        "/images/departments/mechanical/IMG20250516113522.jpg",
        "/images/departments/mechanical/IMG20260309120121.jpg"
      ],
      gallery: [
        "/images/departments/mechanical/IMG20250516113501.jpg",
        "/images/departments/mechanical/IMG20250516113522.jpg",
        "/images/departments/mechanical/IMG20260309120121.jpg",
        "/images/departments/mechanical/DSC_9624.JPG",
        "/images/departments/mechanical/DSC_9628.JPG"
      ]
    },
    laboratories: {
      core: [
        {
          name: "Workshop & Digital Manufacturing Lab",
          experimentList: [
            "Preparation of job in fitting section / Study of lathe and turning operation.\nPreparation of job in blacksmith section / Study of milling machine and milling operation.\nPreparation of job in carpentry section / Milling operation on CNC milling machine.\nStudy of CNC lathe machine and turning operation on CNC lathe.\nStudy of Robot (Pick and Place and Palletizing operation).\nStudy of additive manufacturing using 3D printer and product development.",
            "1. Carpentry Section\nStudy of different hand tools, measuring instruments and equipment used in carpentry work along with safety precautions.\n\nPreparation of Job:\nCarpentry job involving different types of joints.\n\nOperations Included:\n• Measuring\n• Marking\n• Sawing\n• Planing\n• Chiseling\n• Mortising\n• Tenoning\n• Half-lap joint\n• Mortise & Tenon joint\n• Nail joint",
            "2. Fitting Section\nStudy of different hand tools, measuring instruments and equipment used in fitting work along with safety precautions. Study of drilling machine and grinding machine.\n\nPreparation of Job:\nPaper weight / Square or rectangular joint (male-female joint).\n\nOperations Included:\n• Measuring\n• Marking\n• Filing\n• Sawing\n• Drilling\n• Tapping\n• Dieing\n• Punching",
            "3. Blacksmith Section\nStudy of different hand tools, equipment and open hearth furnace used in blacksmith work. Study of different heat treatment processes and safety precautions.\n\nPreparation of Job:\nWeeding hook / Chisel.\n\nOperations Included:\n• Measuring\n• Marking\n• Cutting\n• Upsetting\n• Drawing down\n• Bending\n• Fullering\n• Quenching",
            "4. Turning / Milling Section (Conventional & CNC)\nA. Lathe Machine\n• Study of lathe machine\n• Different parts and applications of lathe\n• Study of measuring and marking instruments\n\nB. Milling Machine\n• Study of milling machine\n• Different parts and applications of milling machine\n• Study of measuring and marking instruments\n\nC. CNC Lathe\n• Study of CNC lathe machine and its parts\n• Part programming for turning operations\n\nD. CNC Milling Machine\n• Study of CNC milling machine and its parts\n• Part programming for milling operations",
            "5. Robotics Lab\n• Study of robot\n• Pick and place operation with demonstration and explanation of code\n• Palletizing operation with demonstration and explanation of code",
            "6. Additive Manufacturing Lab\n• Study of 3D printer\n• Demonstration of additive manufacturing operation and product development"
          ],
          equipmentList: ["Lathe Machines", "Milling Machines", "Welding Sets", "Carpentry Tools", "3D Printers"]
        },
        {
          name: "Engineering Graphics & Design Lab",
          experimentList: [
            "Introduction to AutoCAD\n• Basic AutoCAD commands\n• Code provisions of IS-696 regarding lines, lettering and dimensioning",
            "Drawing of Scales\n• Plane scales\n• Diagonal scales\n• Vernier scales\n• Scales of chords",
            "Construction of Geometrical Figures\n• Simple geometrical constructions\n• Engineering curves",
            "Orthographic Projections\n• Projection of a point situated in various quadrants\n• Projections of straight lines\n• Projection of plane figures\n• Projection of simple solids\n• Section of solids and development of surfaces",
            "Isometric and Perspective Views\n• Isometric projection\n• Perspective view"
          ],
          equipmentList: ["Drawing Boards", "Drafting Machines", "AutoCAD Software", "Computer Workstations"]
        },
        {
          name: "Machine Drawing and Solid Modelling Lab",
          description: "Course Objective\nThis laboratory course aims to develop students’ skills in creating detailed machine drawings and 3D solid models using Computer-Aided Design (CAD) software. By the end of the course, students will be proficient in interpreting technical drawings, designing mechanical components, and producing accurate models. These skills are essential for effective communication and design in modern engineering practice.",
          experimentList: [
            "Sketcher Workbench\n• Creating sketches\n• Selecting and editing geometry, features, and models\n• Creating sketcher geometry and using sketcher tools\n• Using sketches and datum features",
            "Basic Solid Part Modeling\n• Creating extrudes, revolves, and ribs\n• Creating holes, shells, draft, and patterns\n• Creating rounds, chamfers, and using layers",
            "Advanced Solid Part Modeling\n• Advanced selection, creating sweeps and blends\n• Sweeps with variable sections\n• Helical sweeps and swept blends\n• Relations, parameters, and family tables\n• Measuring and inspecting models",
            "Assembly Design\n• Creating assemblies using top-down and bottom-up approaches\n• Assembling with constraints, exploding assemblies, and replacing components\n• Cross-sections in assemblies",
            "Drafting Workbench\n• Introduction to drafting, creating new drawings and drawing views\n• Adding model details and tolerance information to drawings\n• Adding notes, symbols, tables, balloons, and layers in drawings"
          ],
          equipmentList: ["SolidWorks", "CATIA", "Computer Workstations"]
        },
        {
          name: "Material Testing Lab",
          description: "Course Objective\nThis laboratory course aims to familiarize students with the techniques and equipment used to evaluate the properties and performance of engineering materials so that students will be able to conduct standard material tests, analyze data, and understand the mechanical behavior of materials under various conditions, reinforcing theoretical knowledge from material science courses.",
          experimentList: [
            "Determination of tensile strength of materials by Universal Testing Machine.",
            "Determination of compressive strength of materials by Universal Testing Machine.",
            "Determination of bending strength of materials by Universal Testing Machine.",
            "Double shear test in Universal Testing Machine.",
            "Determination of rigidity modulus of material.",
            "Determination of fatigue strength of material.",
            "Estimation of spring constant under tension and compression.",
            "Load measurement using load indicator and load cells.",
            "Strain measurement using strain gauge.",
            "Stress measurement using strain rosette."
          ],
          equipmentList: ["Universal Testing Machine (UTM)", "Impact Testing Machine", "Hardness Testers"]
        },
        {
          name: "Thermal Engineering Lab",
          description: "Course Objective\nThis laboratory course aims to provide students with practical experience in analyzing and evaluating thermal systems and processes. Through this course, students will learn to conduct experiments, interpret experimental data, and apply the principles of thermodynamics and heat transfer to real-world engineering problems, thereby enhancing their understanding of thermal engineering concepts.",
          experimentList: [
            "Study of cut-sections of 2-stroke and 4-stroke diesel engine/petrol engine.",
            "Study of steam power plant.",
            "Study of refrigeration system.",
            "Study of gas turbine power plant.",
            "Performance analysis of reciprocating air compressor.",
            "Performance analysis of centrifugal / axial flow compressor.",
            "Determination of performance characteristics of gear pump.",
            "Load test on 4-stroke single cylinder C.I. engine.",
            "Load test on 4-stroke single cylinder S.I. engine.",
            "Morse test on multi-cylinder S.I. or C.I. engine."
          ],
          equipmentList: ["Bomb Calorimeter", "Air Compressor Test Rig", "Boiler Models", "Steam Turbine Model"]
        },
        {
          name: "Programming Internet of Things Lab",
          description: "Overall Course Objectives\nTo empower students with a comprehensive understanding of IoT and Embedded Systems, Arduino and Raspberry Pi platforms, and C and Python programming. This will enable them to create innovative IoT designs and products and understand how these devices interact with the physical world. Students will also learn debugging techniques and network protocols essential for embedded systems.",
          experimentList: [
            "Module 1: Introduction to Internet of Things and Embedded Systems [12 Hours]\nThis module introduces the significant role of the Internet of Things (IoT) in the modern world and explores future trends in connected technologies. It explains the concepts of IoT and embedded systems, their components, and their impact on society.\n\nSub Topics:\n• Embedded Systems Hardware and Software\n• Networking and the Internet\n• What is the Internet of Things (IoT)?\n\nFormative Assessments: 4 quizzes and 4 peer-review assignments.",
            "Module 2: The Arduino Platform and C Programming [13 Hours]\nThis module provides detailed knowledge of the Arduino platform, including the physical board, libraries, and the integrated development environment (IDE). Students will learn how to program Arduino boards using C language and understand the role of shields in extending hardware capabilities.\n\nSub Topics:\n• Arduino Environment\n• Arduino Programs\n• C Programming Basics\n• C Operators\n• Arduino Sketch Structure\n\nFormative Assessments: 4 quizzes and 4 peer-review assignments.",
            "Module 3: The Raspberry Pi Platform and Python Programming [19 Hours]\nThe Raspberry Pi is a small and affordable single-board computer used to design and develop practical IoT devices. In this module, students will learn how to set up the Raspberry Pi environment, install and run a Linux operating system, and execute Python programs.\n\nSub Topics:\n• Raspberry Pi Processor\n• Operating System Benefits\n• Raspberry Pi Configuration\n• Navigating the File System\n• Linux Graphical User Interface\n• Python Programming on Raspberry Pi\n\nFormative Assessments: 4 quizzes and 4 peer-review assignments.",
            "Learning Outcomes\nOn successful completion of the course, students will be able to:\n• Understand and define key concepts of the Internet of Things (IoT) and its societal impact.\n• Understand the design considerations and components of IoT devices.\n• Program the Arduino development board and use shields and libraries effectively.\n• Compile and execute programs using C programming language for embedded systems.\n• Set up and operate the Raspberry Pi platform with a Linux operating system.\n• Develop Python programs on Raspberry Pi and debug them using appropriate tools.\n• Understand networking fundamentals including Internet structure and network protocols relevant to IoT devices."
          ],
          equipmentList: ["Arduino Kits", "Raspberry Pi", "Various Sensors (Temperature, Pressure, etc.)", "Actuators"]
        },
        {
          name: "Basic Manufacturing Processes Lab",
          experimentList: [
            "Determination of grain size.",
            "Determination of clay content and permeability of moulding sand.",
            "Preparation of pattern and study of foundry practices.",
            "Practice and preparation of jobs through arc welding.",
            "Practice and preparation of jobs through oxy-acetylene welding.",
            "Determination of strength of brazed and soldered joints.",
            "Practice and preparation of jobs using sheet metal forming processes such as forming and deep drawing.",
            "Demonstration of different types of rolling mills.",
            "Demonstration of extrusion processes."
          ],
          equipmentList: ["Sand Testing Equipment", "Moulding Boxes", "Forging Hearth", "Sheet Metal Tools"]
        },
        {
          name: "Fluid Mechanics and Fluid Machinery Lab",
          description: "Objective\nTo study the flow measurement techniques and analyze the performance characteristics of various fluid machinery through practical experiments.",
          experimentList: [
            "Calibration of venturimeter.",
            "Pressure measurement with pitot-static tube.",
            "Determination of pipe flow losses.",
            "Verification of Bernoulli’s theorem.",
            "Flow visualization by Hele-Shaw apparatus.",
            "Performance test on centrifugal pump.",
            "Performance test on reciprocating pump.",
            "Determination of viscosity of a fluid."
          ],
          equipmentList: ["Bernoulli's Apparatus", "Venturimeter", "Pelton Wheel Turbine Rig", "Centrifugal Pump Test Rig"]
        },
        {
          name: "Machines and Mechanisms Lab",
          experimentList: [
            "Design of any one working model related to Kinematics & Dynamics of Machines (Module I & II).",
            "Design of any one working model related to Kinematics & Dynamics of Machines (Module III, IV & V).",
            "Experiments on simple, compound and reverted gear trains.",
            "Study of interference and undercutting for gear drives.",
            "Determination of moment of inertia of a flywheel.",
            "Study of performance characteristics of a spring-loaded governor.",
            "Experiment / study on screw jack.",
            "Experiment / study on clutches.",
            "Experiment on static and dynamic balancing apparatus."
          ],
          equipmentList: ["Kinematic Models", "Cam and Follower Apparatus", "Gear Trains", "Gyroscope"]
        },
        {
          name: "Design of Machine Elements-I Lab",
          experimentList: [
            "Design of riveted joint.",
            "Design of welded joint.",
            "Design of cotter joint.",
            "Design of knuckle joint.",
            "Design of shaft.",
            "Design of flexible coupling.",
            "Design of rigid coupling.",
            "Design of helical spring.",
            "Design of journal bearing.",
            "Design of elements of roller bearing."
          ],
          equipmentList: ["Design Data Books", "CAD Software (ANSYS)", "Computer Workstations"]
        },
        {
          name: "Design of Machine Elements - II Lab",
          description: "Course Objectives\nThis laboratory course provides hands-on experience in designing critical machine elements such as cranks, pistons, shafts, clutches, brakes, and gear systems. Students will apply theories of failure and fatigue analysis to solve practical design problems, reinforcing theoretical concepts through computational and analytical exercises.",
          experimentList: [
            "Problems for practice on theories of failure.",
            "Problems for practice on fatigue failure.",
            "Design of crank, piston and cylinder.",
            "Design of connecting rod and shaft.",
            "Design of clutches.",
            "Design of brakes (block brake, band brake and internal expanding brake).",
            "Design of belt, rope and chain drives.",
            "Design of spur, bevel and helical gears."
          ],
          equipmentList: ["Design Data Books", "CAD Software (ANSYS)", "Computer Workstations"]
        },
        {
          name: "Machining Lab",
          description: "Course Objectives\nThis laboratory course provides hands-on experience in fundamental machining operations, including turning, milling, grinding, and threading. Students will analyze tool geometry using ASA and ORS systems, measure cutting forces, and evaluate the role of coolants in machining processes. Emphasis is placed on developing practical skills in operating lathes, milling machines, and grinding machines for manufacturing precision components.",
          experimentList: [
            "A study on tool geometry in both ASA and ORS systems.",
            "Preparation of a threaded joint using drilling and tapping operations.",
            "Perform operations such as taper turning, thread cutting, knurling, and groove cutting on a lathe machine.",
            "Determine the cutting forces during turning of a cylindrical component on a lathe machine.",
            "Perform gear cutting on a milling machine.",
            "Working with shaper, planer, and slotting machines.",
            "Working with surface grinding and cylindrical grinding machines.",
            "A study on the importance of coolant during machining."
          ],
          equipmentList: ["Centre Lathes", "Universal Milling Machine", "Surface Grinder", "Shaper Machine"]
        },
        {
          name: "Soft Computing Lab",
          description: "Course Objectives\nThis laboratory course introduces soft computing techniques such as fuzzy logic, neural networks, and genetic algorithms using MATLAB and Python. Students will design fuzzy systems, implement perceptron models, and solve optimization problems. The course emphasizes hybrid systems (GA-ANN/Fuzzy) and real-world applications such as thermal system modeling, CFD optimization, and robotics path planning.",
          experimentList: [
            "Introduction to MATLAB/Python Fuzzy Logic Toolbox / scikit-fuzzy – Create a simple fuzzy inference system (FIS).",
            "Application of Fuzzy Logic in mechanical systems.",
            "Introduction to Neural Networks in MATLAB / Python (TensorFlow/Keras) – Implement a perceptron model.",
            "Application of Artificial Neural Networks (ANN) in mechanical engineering.",
            "Introduction to Genetic Algorithms – Implement a basic GA using MATLAB / Python (DEAP library).",
            "Solving optimization problems using Genetic Algorithms – Example: Design optimization of truss structures, springs, or shafts.",
            "Study of Hybrid Soft Computing Systems – Combining GA with ANN/Fuzzy for performance enhancement.",
            "Case Study / Mini Project – Example: Thermal system modeling, CFD optimization, or robotics path planning.",
            "Simulation and Analysis of soft computing models – Performance testing, model comparison, and analysis using real data."
          ],
          equipmentList: ["MATLAB Software", "Python Environment", "Computer Workstations"]
        },
        {
          name: "Project for Product Development - I Lab",
          description: "Course Objectives\nThis course aims to develop students’ ability to plan, manage, and evaluate product development projects. Students will learn how to analyze market and customer needs, apply structured product development models, and propose strategies for successful product launches in real industrial contexts.",
          experimentList: [
            "Learning Outcomes\nUpon completing the course, students are expected to be able to:\n• Plan and independently execute projects aimed at collecting, systematizing, and analyzing information about markets and customer contexts as key inputs for product development in different industrial sectors.\n• Apply important models for organizing and managing product development and their implementation in practical commercial settings.\n• Analyze complex product development situations and propose suitable strategies, plans, and action programs for different types of organizations.\n• Identify the need for additional knowledge and tools (analytical and computer-based) required to conduct product development tasks.\n• Critically evaluate the outcomes of a product development project and reflect on uncertainties and risks involved in implementation.",
            "Instruction\nThe course is organized as an independent project carried out in teams of 4–5 students. Each team develops an idea into a product concept ready for market launch for a specific company. The project work is supported through methodological lectures that guide students in applying product development tools and techniques.\n\nThroughout the course, project progress is presented during a series of seminars where opposition groups act as “control gates”. These sessions provide feedback and evaluation at different stages of development. The course concludes with a final seminar where the opponent group assesses the project and decides whether the product should be launched or not."
          ],
          equipmentList: ["Prototyping Tools", "3D Printers", "Design Software"]
        },
        {
          name: "IC Engines & Heat Transfer Lab",
          experimentList: [
            "IC Engines Experiments\n• Performance test on a 4-stroke diesel engine – Determine brake power, indicated power, mechanical efficiency, BSFC, and heat balance.\n• Performance test on a 4-stroke petrol (SI) engine – Evaluate power output, fuel consumption, and overall efficiency.\n• Morse test on a multi-cylinder petrol engine – Determine indicated power of each cylinder.\n• Retardation test (motoring test) – Determine frictional power of the engine.\n• Study of fuel-injection systems – In-line pump, rotary pump, CRDI systems, and injection characteristics.",
            "Heat Transfer Experiments\n• Heat transfer by natural convection – Determine heat transfer coefficient from a vertical or horizontal cylinder/plate.\n• Heat transfer by forced convection – Determine the convective heat transfer coefficient in a forced air flow duct.\n• Thermal conductivity of insulating material – Measure thermal conductivity using a guarded hot plate or heat flow meter.\n• Heat transfer in a shell-and-tube heat exchanger – Determine LMTD and overall heat transfer coefficient.\n• Radiation heat transfer experiment – Study Stefan-Boltzmann law and emissivity."
          ],
          equipmentList: ["IC Engine Test Rigs", "Thermal Conductivity Apparatus", "Heat Exchanger Test Rig"]
        },
        {
          name: "Mechanical Vibration Lab",
          experimentList: [
            "Mass – Spring System.",
            "Simple and Compound Pendulums.",
            "Mass Moment of Inertia Estimation – Part I: Bifilar Suspension Method.",
            "Mass Moment of Inertia Estimation – Part II: Auxiliary Mass Method.",
            "Forced Vibration with Negligible Damping.",
            "Transverse Vibration of a Beam."
          ],
          equipmentList: ["Spring-Mass System Apparatus", "Universal Vibration Apparatus", "Rotor Balancing Machine", "Vibration Sensors"]
        }
      ],
      additional: [
        {
          name: "EV TECH LAB",
          description: "An Electric Vehicle Technology Lab as an additional lab facility has been set in the department to impact the latest technology on Electric Vehicles to the students. This lab is equipped with two EV 2 wheelers (Wokinawa make) with one 2 Wheeler cut section model where students are exposed to hands on practice of assembling and dismantling of all EV components. Besides, this lab houses 3 special sections with three wall display TV Units for Mechanical, Electrical and Electronics sections where students are imparted training and demo with EV power train live model, battery pack, traction motor and controller, battery management system and diagnostic tools.",
          experimentList: [
            "Study of EV battery management systems",
            "Performance analysis of BLDC motors",
            "EV charging infrastructure simulation",
            "Design of EV powertrains"
          ],
          equipmentList: ["EV Powertrain Models", "Battery Management System Kits", "BLDC Motors", "Simulation Software"]
        },
        {
          name: "RENEWABLE ENERGY LAB",
          description: "A special lab of sustainability solar and wind energy has been setup with 500 watt field model wind turbine, a vertical axis Tulip model and a blade less suction model for students training and practices on the renewable energy technology. Besides, this lab is equipped with PV solar panels, solar off-grid setup, solar nano-grid to study the parameters of solar PV system using MPPT and PWM controller.",
          experimentList: [
            "Performance analysis of solar PV panels",
            "Study of wind turbine characteristics",
            "Biomass gasification processes",
            "Fuel cell performance testing"
          ],
          equipmentList: ["Solar PV Training Kit", "Wind Turbine Model", "Biomass Gasifier", "Fuel Cell Training System"]
        },
        {
          name: "CAD/CAM/CAE Lab",
          description: "CAD/CAM laboratories provide significant engineering benefits by integrating Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) processes. This integration enables engineers and students to design, analyze, and manufacture components efficiently within a unified digital environment. By combining design and manufacturing workflows, CAD/CAM technology improves productivity, reduces design time, and enhances product accuracy and quality.\n\nKey advantages of CAD/CAM laboratories include easy creation of complex 3D models, rapid design modifications, automated generation of CAM codes, and direct integration with manufacturing systems. These capabilities support faster prototyping, efficient production planning, and better product development processes.\n\nKey Benefits for Students\n• Design Efficiency and Accuracy: CAD tools enable students to create precise 2D and 3D models quickly. They allow easy editing and modification of designs while maintaining high drawing quality and accuracy. Advanced simulation and analysis features also help identify design issues early in the development stage.\n• Manufacturing Integration (CAM): CAD models can be directly transferred to CAM systems to generate CNC toolpaths and machine instructions. This seamless integration reduces manual errors, improves efficiency, and significantly saves time during the manufacturing process.\n\nCommon Software and Tools Used\nCAD Software: AutoCAD, CATIA, Pro/ENGINEER, Solid Edge, Siemens NX, Creo, Fusion 360\nCAM & Analysis Tools: ANSYS for engineering analysis and CNC programming using G and M codes",
          experimentList: [
            "Advanced 3D modeling and assembly",
            "Finite element analysis (FEA) of structural components",
            "Computational fluid dynamics (CFD) simulations",
            "Computer-aided manufacturing (CAM) and tool path generation"
          ],
          equipmentList: ["ANSYS", "SolidWorks", "MasterCAM", "High-Performance Workstations"]
        }
      ]
    },
    faculty: [
      { name: "Mrs. Itishree Behera", designation: "Assistant Professor", doj: "25/7/2013", qualification: "M.Tech", bputId: "T132728903" },
      { name: "Mr. Purna Chandra Routray", designation: "Assistant Professor", doj: "5/7/2013", qualification: "M.Tech", bputId: "T132728904" },
      { name: "Mr. Prasanna Kumar Padhy", designation: "Assistant Professor", doj: "20/8/2007", qualification: "M.Tech", bputId: "T210128907" },
      { name: "Mr. Ashis Kumar Barik", designation: "Assistant Professor", doj: "11/4/2013", qualification: "M.Tech", bputId: "T132728905" },
      { name: "Dr. Ajay Kumar Sahoo", designation: "Prof. & HOD", doj: "1/12/2007", qualification: "Ph.D", bputId: "T082728901" },
      { name: "Mrs. Kalyani Pradhan", designation: "Assistant Professor", doj: "1/9/2012", qualification: "M.Tech", bputId: "T132728901" },
      { name: "Mr. Diptiranjan Panda", designation: "Assistant Professor", doj: "5/8/2008", qualification: "M.Tech", bputId: "T082728904" },
      { name: "Mr. Deepak Kumar Mohapatra", designation: "Assistant Professor", doj: "12/9/2012", qualification: "M.Tech", bputId: "T132728902" },
      { name: "Mr. Tusarkanta Kumbhar", designation: "Assistant Professor", doj: "24/8/2015", qualification: "M.Tech", bputId: "T162728901" }
    ],
    syllabus: {
      years: [
        {
          year: "FIRST YEAR",
          buttons: [
            { text: "VIEW/DOWNLOAD 1ST YEAR SYLLABUS", link: "#" }
          ]
        },
        {
          year: "SECOND YEAR",
          buttons: [
            { text: "VIEW / DOWNLOAD 3RD SEM SYLLABUS", link: "#" },
            { text: "VIEW / DOWNLOAD 4th Sem SYLLABUS", link: "#" }
          ]
        },
        {
          year: "THIRD YEAR",
          buttons: [
            { text: "VIEW / DOWNLOAD 5TH SEM SYLLABUS", link: "#" },
            { text: "VIEW / DOWNLOAD 6TH SEM SYLLABUS", link: "#" }
          ]
        },
        {
          year: "FOURTH YEAR",
          buttons: [
            { text: "VIEW / DOWNLOAD 7TH SEM SYLLABUS", link: "#" },
            { text: "VIEW / DOWNLOAD 8TH SEM SYLLABUS", link: "#" }
          ]
        }
      ]
    },
    placement: [
      { year: "2019 - 2020", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Mechanical/2019-20.pdf" },
      { year: "2020 - 2021", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Mechanical/2020-21.xlsx" },
      { year: "2021 - 2022", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Mechanical/2021-22.pdf" },
      { year: "2022 - 2023", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Mechanical/2022-23.pdf" },
      { year: "2023 - 2024", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Mechanical/2023-24-1.pdf" },
      { year: "2024 - 2025", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Mechanical/2024-25.pdf" },
      { year: "2025 - 2026", link: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Mechanical/2025-26.pdf" }
    ],
    lectureNotes: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  ENVIRONMENTAL ENGINEERING (M.TECH)         │
     └─────────────────────────────────────────────┘ */
  "environmental-engineering-mtech": {
    name: "Environmental Engineering (M.Tech)",
    shortName: "ENV",
    theme: { accent: "#27AE60", accentDark: "#1E8449", gradient: "from-[#27AE60] to-[#2ECC71]" },

    sidebar: {
      heading: "ENVIRONMENTAL\nENGINEERING",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen" },
        { id: "syllabus", label: "Syllabus", icon: "Layers" },
        { id: "faculty", label: "Faculties", icon: "Users" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker" }
      ]
    },

    hero: {
      titleLine1: "Environmental",
      titleLine2: "Engineering",
      subtitle: "A 2-year M.Tech programme dedicated to developing engineers who can design sustainable solutions for water treatment, waste management, air pollution control, and environmental impact assessment.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Environmental Engineering (M.Tech)",
      stats: [
        { label: "Duration", value: "2 Yrs" },
        { label: "AICTE Approved", value: "Yes" },
        { label: "Degree", value: "M.Tech" }
      ]
    },

    overview: {
      paragraphs: [
        "The M.Tech programme in Environmental Engineering at Trident Academy of Technology is designed to equip postgraduate students with advanced knowledge in environmental science, pollution control technologies, and sustainable development practices. The programme addresses critical global challenges including water scarcity, air pollution, waste management, and climate change.",
        "Students gain expertise in environmental impact assessment, water and wastewater treatment, solid waste management, air pollution control, environmental modelling, and green building technologies. The curriculum integrates theoretical knowledge with practical applications through laboratory work, field studies, and research projects.",
        "Graduates of this programme are prepared for careers in environmental consulting firms, government regulatory agencies, research institutions, and industries focused on sustainability and environmental compliance."
      ],
      vision: "To be a centre of excellence in Environmental Engineering education and research, producing environmentally conscious engineers who contribute to sustainable development and ecological balance.",
      mission: [
        "M1. Provide advanced education in environmental engineering principles, pollution control technologies, and sustainable development practices.",
        "M2. Foster research and innovation in areas of water treatment, waste management, air quality, and environmental impact assessment.",
        "M3. Develop professionals with strong ethical values who can address complex environmental challenges through interdisciplinary approaches."
      ],
      po: [
        "PO1. Apply advanced knowledge of environmental science and engineering to solve complex environmental problems.",
        "PO2. Design and evaluate water treatment, wastewater treatment, and solid waste management systems.",
        "PO3. Conduct environmental impact assessments and develop mitigation strategies.",
        "PO4. Utilize modern tools and techniques for environmental monitoring, modelling, and data analysis.",
        "PO5. Pursue independent research and contribute to the advancement of environmental engineering knowledge."
      ]
    ,
      images: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg"
      ],
      gallery: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg",
        "/images/departments/cse/4-768x576.jpeg",
        "/images/departments/cse/5-768x576.jpeg",
        "/images/departments/cse/cse (1).jpg",
        "/images/departments/cse/WhatsApp-Image-2026-03-09-at-6.07.33-PM-1.jpeg",
        "/images/departments/cse/WhatsApp-Image-2026-03-11-at-3.41.52-PM-768x576.jpeg"
      ]
    },

    syllabus: {
      documents: [
        { title: "M.Tech Environmental Engineering — Semester I & II", btnText: "View / Download Syllabus", fileUrl: "#" },
        { title: "M.Tech Environmental Engineering — Semester III & IV", btnText: "View / Download Syllabus", fileUrl: "#" }
      ]
    },

    laboratories: [
      {
        name: "Environmental Chemistry Lab",
        description: "Equipped for analysis of water, soil, and air samples using advanced analytical instruments.",
        experimentList: [
          "Determination of pH, conductivity, and TDS of water samples.",
          "Analysis of dissolved oxygen (DO) and biochemical oxygen demand (BOD).",
          "Chemical oxygen demand (COD) estimation.",
          "Determination of hardness and alkalinity of water.",
          "Analysis of chlorides, fluorides, and heavy metals in water.",
          "Soil quality analysis — pH, organic matter, and nutrient content.",
          "Air quality monitoring using high-volume samplers."
        ],
        equipmentList: ["Spectrophotometer", "BOD Incubator", "COD Digester", "pH Meter", "High Volume Air Sampler", "Turbidity Meter"]
      },
      {
        name: "Water & Wastewater Treatment Lab",
        description: "Focuses on design and evaluation of treatment processes for potable water and industrial wastewater.",
        experimentList: [
          "Jar test for coagulation and flocculation optimization.",
          "Sedimentation analysis and column settling test.",
          "Sand filtration efficiency study.",
          "Activated sludge process simulation.",
          "Adsorption studies using activated carbon.",
          "Ion exchange for water softening.",
          "Membrane filtration (microfiltration, ultrafiltration) studies."
        ],
        equipmentList: ["Jar Test Apparatus", "Column Settling Tank", "Sand Filter Unit", "Activated Sludge Model", "Membrane Filtration Setup"]
      }
    ],

    faculty: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  ENERGY & ENVIRONMENTAL ENGINEERING (M.TECH)│
     └─────────────────────────────────────────────┘ */
  "energy-and-environmental-engineering-mtech": {
    name: "Energy & Environmental Engineering (M.Tech)",
    shortName: "EEE-MT",
    theme: { accent: "#E67E22", accentDark: "#D35400", gradient: "from-[#E67E22] to-[#F39C12]" },

    sidebar: {
      heading: "ENERGY &\nENVIRONMENTAL\nENGINEERING",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen" },
        { id: "syllabus", label: "Syllabus", icon: "Layers" },
        { id: "faculty", label: "Faculties", icon: "Users" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker" }
      ]
    },

    hero: {
      titleLine1: "Energy &",
      titleLine2: "Environmental",
      subtitle: "A specialized 2-year M.Tech programme bridging energy systems and environmental sustainability — training engineers in renewable energy, energy efficiency, and environmental management.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Energy & Environmental Engineering (M.Tech)",
      stats: [
        { label: "Duration", value: "2 Yrs" },
        { label: "AICTE Approved", value: "Yes" },
        { label: "Degree", value: "M.Tech" }
      ]
    },

    overview: {
      paragraphs: [
        "The M.Tech programme in Energy and Environmental Engineering at Trident Academy of Technology addresses the dual challenge of meeting growing energy demands while minimizing environmental impact. This interdisciplinary programme combines advanced concepts from energy engineering, environmental science, and sustainability.",
        "The curriculum covers renewable energy systems (solar, wind, biomass, hydrogen fuel cells), energy storage technologies, smart grid systems, energy auditing, environmental impact assessment, climate change mitigation, and sustainable development frameworks.",
        "Students engage in cutting-edge research projects and gain hands-on experience with solar PV systems, wind turbine models, and energy simulation software. The programme prepares graduates for roles in the rapidly growing clean energy sector, environmental consulting, and research institutions."
      ],
      vision: "To become a premier institution for advanced education and research in energy and environmental engineering, driving the transition towards a sustainable and clean energy future.",
      mission: [
        "M1. Provide comprehensive education in renewable energy technologies, energy management, and environmental protection strategies.",
        "M2. Foster interdisciplinary research addressing the energy-environment nexus and sustainable development goals.",
        "M3. Develop industry-ready professionals capable of designing efficient energy systems while ensuring environmental compliance and sustainability."
      ],
      po: [
        "PO1. Apply advanced knowledge of energy systems, thermodynamics, and environmental science to complex engineering challenges.",
        "PO2. Design and optimize renewable energy systems including solar, wind, biomass, and hybrid configurations.",
        "PO3. Conduct energy audits, life cycle assessments, and environmental impact evaluations.",
        "PO4. Utilize modern simulation and modelling tools for energy system analysis and environmental monitoring.",
        "PO5. Engage in independent research and contribute to the advancement of clean energy and sustainability knowledge."
      ]
    ,
      images: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg"
      ],
      gallery: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg",
        "/images/departments/cse/4-768x576.jpeg",
        "/images/departments/cse/5-768x576.jpeg",
        "/images/departments/cse/cse (1).jpg",
        "/images/departments/cse/WhatsApp-Image-2026-03-09-at-6.07.33-PM-1.jpeg",
        "/images/departments/cse/WhatsApp-Image-2026-03-11-at-3.41.52-PM-768x576.jpeg"
      ]
    },

    syllabus: {
      documents: [
        { title: "M.Tech Energy & Environmental Engg. — Semester I & II", btnText: "View / Download Syllabus", fileUrl: "#" },
        { title: "M.Tech Energy & Environmental Engg. — Semester III & IV", btnText: "View / Download Syllabus", fileUrl: "#" }
      ]
    },

    laboratories: [
      {
        name: "Renewable Energy Systems Lab",
        description: "A state-of-the-art lab equipped with solar PV training systems, wind turbine models, and biomass gasification setups for hands-on learning in renewable energy technologies.",
        experimentList: [
          "Performance analysis of solar PV panels under varying conditions.",
          "Study of MPPT (Maximum Power Point Tracking) controllers.",
          "Characterization of a small wind turbine — power curve analysis.",
          "Study of a biomass gasification system.",
          "Hydrogen fuel cell performance testing.",
          "Energy storage system analysis — battery charge/discharge characteristics.",
          "Grid-connected vs. off-grid solar system comparison study."
        ],
        equipmentList: ["Solar PV Training Kit", "Wind Turbine Model (500W)", "Biomass Gasifier", "Fuel Cell Training System", "Battery Analyzer"]
      },
      {
        name: "Energy Auditing & Management Lab",
        description: "Focuses on energy efficiency assessment, thermal imaging, power quality analysis, and building energy simulation.",
        experimentList: [
          "Energy audit of an electrical installation — load analysis and power factor measurement.",
          "Thermal imaging for heat loss detection in buildings and equipment.",
          "Power quality analysis using a power analyzer.",
          "Illumination measurement and lighting efficiency study.",
          "Building energy simulation using software tools.",
          "Study of smart grid components and demand response strategies."
        ],
        equipmentList: ["Power Analyzer", "Thermal Imaging Camera", "Lux Meter", "Power Quality Analyzer", "Energy Simulation Software"]
      }
    ],

    faculty: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  ELECTRICAL VEHICLE TECHNOLOGY (M.TECH)     │
     └─────────────────────────────────────────────┘ */
  "electrical-vehicle-technology-mtech": {
    name: "Electrical Vehicle Technology (M.Tech)",
    shortName: "EVT",
    theme: { accent: "#3498DB", accentDark: "#2980B9", gradient: "from-[#3498DB] to-[#5DADE2]" },

    sidebar: {
      heading: "ELECTRICAL VEHICLE\nTECHNOLOGY",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen" },
        { id: "syllabus", label: "Syllabus", icon: "Layers" },
        { id: "faculty", label: "Faculties", icon: "Users" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker" }
      ]
    },

    hero: {
      titleLine1: "Electrical Vehicle",
      titleLine2: "Technology",
      subtitle: "A forward-looking 2-year M.Tech programme focused on the design, development, and optimization of electric vehicles — covering powertrains, battery management, charging infrastructure, and autonomous driving systems.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Electrical Vehicle Technology (M.Tech)",
      stats: [
        { label: "Duration", value: "2 Yrs" },
        { label: "AICTE Approved", value: "Yes" },
        { label: "Degree", value: "M.Tech" }
      ]
    },

    overview: {
      paragraphs: [
        "The M.Tech programme in Electrical Vehicle Technology at Trident Academy of Technology is at the forefront of India's electric mobility revolution. This specialized programme prepares engineers to design, develop, test, and optimize next-generation electric vehicles and their critical subsystems.",
        "The curriculum encompasses EV powertrain design (BLDC motors, PMSM, induction motors), battery technology and management systems (BMS), power electronics for motor drives, regenerative braking systems, EV charging infrastructure (AC/DC, fast charging, wireless charging), vehicle dynamics and control, autonomous driving fundamentals, and IoT-enabled vehicle diagnostics.",
        "The department's dedicated EV Tech Lab, equipped with Wokinawa EV 2-wheelers, cut-section models, and live powertrain demonstration units, provides students with unparalleled hands-on experience. Graduates are highly sought after by automotive OEMs, EV startups, battery manufacturers, and charging infrastructure companies."
      ],
      vision: "To be a leading centre of excellence in Electric Vehicle Technology education and research, driving India's transition to sustainable e-mobility through innovation and industry collaboration.",
      mission: [
        "M1. Deliver advanced education in EV powertrain design, battery technology, power electronics, and charging infrastructure.",
        "M2. Foster hands-on research and industry collaboration to accelerate the development and adoption of electric vehicles.",
        "M3. Develop skilled professionals with strong technical expertise and ethical values to lead the electric mobility revolution."
      ],
      po: [
        "PO1. Apply advanced knowledge of electrical engineering, power electronics, and control systems to design and optimize EV powertrains.",
        "PO2. Design and evaluate battery management systems (BMS), energy storage solutions, and charging infrastructure.",
        "PO3. Utilize simulation tools (MATLAB/Simulink, ANSYS) for modelling and analysis of EV subsystems.",
        "PO4. Conduct independent research in EV technologies and contribute to the advancement of sustainable mobility.",
        "PO5. Demonstrate professional ethics and leadership in the rapidly evolving electric vehicle industry."
      ]
    ,
      images: [
        "/images/departments/electrical/WhatsApp Image 2026-02-18 at 4.17.04 PM (2).jpeg",
        "/images/departments/electrical/WhatsApp Image 2026-02-18 at 4.17.09 PM.jpeg",
        "/images/departments/electrical/WhatsApp Image 2026-02-18 at 4.29.28 PM.jpeg"
      ],
      gallery: [
        "/images/departments/electrical/WhatsApp Image 2026-02-18 at 4.17.04 PM (2).jpeg",
        "/images/departments/electrical/WhatsApp Image 2026-02-18 at 4.17.09 PM.jpeg",
        "/images/departments/electrical/WhatsApp Image 2026-02-18 at 4.29.28 PM.jpeg",
        "/images/departments/electrical/WhatsApp Image 2026-02-18 at 4.31.24 PM.jpeg",
        "/images/departments/electrical/EE lab (1).png",
        "/images/departments/electrical/WhatsApp Image 2026-03-09 at 6.45.56 PM (1).jpeg"
      ]
    },

    syllabus: {
      documents: [
        { title: "M.Tech Electrical Vehicle Technology — Semester I & II", btnText: "View / Download Syllabus", fileUrl: "#" },
        { title: "M.Tech Electrical Vehicle Technology — Semester III & IV", btnText: "View / Download Syllabus", fileUrl: "#" }
      ]
    },

    laboratories: [
      {
        name: "EV Powertrain & Motor Drives Lab",
        description: "A comprehensive lab for studying electric vehicle powertrain components, motor characteristics, and power electronics converters used in EV applications.",
        experimentList: [
          "Characterization of BLDC motor — torque-speed curves and efficiency mapping.",
          "Study of PMSM (Permanent Magnet Synchronous Motor) for EV traction applications.",
          "Design and testing of DC-DC converters (buck, boost, buck-boost) for EV power electronics.",
          "Three-phase inverter design and control for motor drives.",
          "Regenerative braking system simulation and testing.",
          "Study of EV powertrain architectures — series, parallel, and series-parallel hybrid.",
          "Vehicle dynamics simulation using MATLAB/Simulink."
        ],
        equipmentList: ["BLDC Motors", "PMSM Motor", "DC-DC Converter Kits", "Three-Phase Inverter", "Motor Drive Controller", "MATLAB/Simulink Workstations"]
      },
      {
        name: "Battery Technology & BMS Lab",
        description: "Dedicated to battery cell characterization, pack design, and battery management system development for electric vehicles.",
        experimentList: [
          "Battery cell characterization — capacity testing, C-rate analysis, and cycle life evaluation.",
          "Study of battery chemistries — Li-ion, LiFePO4, NMC comparison.",
          "Design and testing of Battery Management System (BMS) — cell balancing and SOC estimation.",
          "Thermal management of battery packs — temperature monitoring and cooling strategies.",
          "EV charging system study — AC Level 1/2, DC fast charging (CCS, CHAdeMO).",
          "Battery pack assembly and disassembly — hands-on with Wokinawa EV 2-wheeler battery.",
          "Wireless charging system fundamentals and efficiency analysis."
        ],
        equipmentList: ["Battery Analyzer", "BMS Development Kit", "EV Battery Packs (Wokinawa)", "Charging Station Simulator", "Thermal Imaging Camera"]
      }
    ],

    faculty: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  STRUCTURAL ENGINEERING (M.TECH)            │
     └─────────────────────────────────────────────┘ */
  "structural-engineering-mtech": {
    name: "Structural Engineering (M.Tech)",
    shortName: "SE",
    theme: { accent: "#8E44AD", accentDark: "#7D3C98", gradient: "from-[#8E44AD] to-[#9B59B6]" },

    sidebar: {
      heading: "STRUCTURAL\nENGINEERING",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen" },
        { id: "syllabus", label: "Syllabus", icon: "Layers" },
        { id: "faculty", label: "Faculties", icon: "Users" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker" }
      ]
    },

    hero: {
      titleLine1: "Structural",
      titleLine2: "Engineering",
      subtitle: "A rigorous 2-year M.Tech programme training engineers in advanced structural analysis, earthquake-resistant design, and modern construction technologies for building safe and resilient infrastructure.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Structural Engineering (M.Tech)",
      stats: [
        { label: "Duration", value: "2 Yrs" },
        { label: "AICTE Approved", value: "Yes" },
        { label: "Degree", value: "M.Tech" }
      ]
    },

    overview: {
      paragraphs: [
        "The M.Tech programme in Structural Engineering at Trident Academy of Technology provides advanced education in the analysis, design, and construction of structures that are safe, durable, and resilient. The programme covers both theoretical foundations and practical applications of modern structural engineering.",
        "The curriculum includes advanced structural analysis (matrix methods, finite element analysis), reinforced concrete and prestressed concrete design, steel structure design, earthquake engineering and seismic-resistant design, bridge engineering, wind engineering, structural dynamics, stability of structures, and composite materials in construction.",
        "Students utilize state-of-the-art structural analysis software (STAAD.Pro, ETABS, SAP2000, ANSYS) and gain hands-on experience in the structural testing laboratory. The programme prepares graduates for careers in structural design consultancies, construction companies, infrastructure development organizations, and research institutions."
      ],
      vision: "To be a distinguished centre of learning and research in Structural Engineering, producing competent professionals who design safe, sustainable, and innovative structures for society.",
      mission: [
        "M1. Provide advanced education in structural analysis, design, and construction using state-of-the-art methodologies and tools.",
        "M2. Foster research and innovation in earthquake-resistant design, bridge engineering, and sustainable construction practices.",
        "M3. Develop ethical and industry-ready professionals who contribute to building resilient infrastructure for communities."
      ],
      po: [
        "PO1. Apply advanced knowledge of structural mechanics, finite element analysis, and material behaviour to solve complex structural engineering problems.",
        "PO2. Design and analyse reinforced concrete, prestressed concrete, steel, and composite structures in accordance with relevant design codes.",
        "PO3. Evaluate the seismic performance of structures and design earthquake-resistant structural systems.",
        "PO4. Utilize modern structural analysis and design software for modelling, simulation, and optimization.",
        "PO5. Conduct independent research and contribute to the advancement of structural engineering knowledge."
      ]
    ,
      images: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg"
      ],
      gallery: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg",
        "/images/departments/cse/4-768x576.jpeg",
        "/images/departments/cse/5-768x576.jpeg",
        "/images/departments/cse/cse (1).jpg",
        "/images/departments/cse/WhatsApp-Image-2026-03-09-at-6.07.33-PM-1.jpeg",
        "/images/departments/cse/WhatsApp-Image-2026-03-11-at-3.41.52-PM-768x576.jpeg"
      ]
    },

    syllabus: {
      documents: [
        { title: "M.Tech Structural Engineering — Semester I & II", btnText: "View / Download Syllabus", fileUrl: "#" },
        { title: "M.Tech Structural Engineering — Semester III & IV", btnText: "View / Download Syllabus", fileUrl: "#" }
      ]
    },

    laboratories: [
      {
        name: "Structural Analysis & Design Lab",
        description: "Equipped with advanced structural analysis software and computational resources for modelling, simulation, and design of complex structures.",
        experimentList: [
          "Analysis of continuous beams and frames using matrix methods.",
          "Finite Element Analysis (FEA) of structural components using ANSYS.",
          "Structural modelling and analysis using STAAD.Pro.",
          "Seismic analysis of multi-storey buildings using ETABS.",
          "Design of RC beam, column, and slab elements as per IS codes.",
          "Prestressed concrete beam design and analysis.",
          "Wind load analysis and design of tall structures.",
          "Bridge deck analysis and design using SAP2000."
        ],
        equipmentList: ["STAAD.Pro", "ETABS", "SAP2000", "ANSYS", "AutoCAD Structural Detailing", "High-Performance Workstations"]
      },
      {
        name: "Structural Testing Lab",
        description: "A comprehensive testing facility for evaluating the strength, stiffness, and ductility of structural elements and materials under various loading conditions.",
        experimentList: [
          "Flexural testing of RC beams — load-deflection characteristics.",
          "Compression testing of concrete cubes and cylinders.",
          "Split tensile strength test of concrete.",
          "Pull-out test for bond strength of reinforcement in concrete.",
          "Non-destructive testing (NDT) of structures — rebound hammer and UPV test.",
          "Strain measurement on structural elements using strain gauges.",
          "Load testing of structural models."
        ],
        equipmentList: ["Universal Testing Machine (UTM)", "Rebound Hammer", "Ultrasonic Pulse Velocity Tester", "Strain Gauges & Data Logger", "Loading Frame"]
      }
    ],

    faculty: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  INDUSTRIAL SAFETY ENGINEERING (M.TECH)     │
     └─────────────────────────────────────────────┘ */
  "industrial-safety-engineering-mtech": {
    name: "Industrial Safety Engineering (M.Tech)",
    shortName: "ISE",
    theme: { accent: "#E74C3C", accentDark: "#C0392B", gradient: "from-[#E74C3C] to-[#C0392B]" },

    sidebar: {
      heading: "INDUSTRIAL SAFETY\nENGINEERING",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen" },
        { id: "syllabus", label: "Syllabus", icon: "Layers" },
        { id: "faculty", label: "Faculties", icon: "Users" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker" }
      ]
    },

    hero: {
      titleLine1: "Industrial Safety",
      titleLine2: "Engineering",
      subtitle: "A comprehensive 2-year M.Tech programme focused on occupational health, workplace safety, hazard analysis, fire safety, and industrial risk management — preparing safety professionals for high-demand roles.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Industrial Safety Engineering (M.Tech)",
      stats: [
        { label: "Duration", value: "2 Yrs" },
        { label: "AICTE Approved", value: "Yes" },
        { label: "Degree", value: "M.Tech" }
      ]
    },

    overview: {
      paragraphs: [
        "The M.Tech programme in Industrial Safety Engineering at Trident Academy of Technology addresses the critical need for qualified safety professionals in India's rapidly growing industrial sector. This programme provides comprehensive training in occupational health and safety, hazard identification and risk assessment, fire safety engineering, and industrial hygiene.",
        "The curriculum covers industrial safety management systems (ISO 45001), hazard and operability studies (HAZOP), failure mode and effects analysis (FMEA), fault tree analysis, fire safety engineering, construction safety, process safety management, ergonomics, environmental health, personal protective equipment (PPE) design and selection, and emergency response planning.",
        "Students gain practical experience through industrial visits, safety audits, and research projects in collaboration with industries. Graduates are in high demand across manufacturing, oil & gas, construction, mining, chemical, and pharmaceutical industries as safety officers, safety engineers, and risk management consultants."
      ],
      vision: "To be a nationally recognized centre for Industrial Safety Engineering education and research, producing competent safety professionals who create safer workplaces and protect human life.",
      mission: [
        "M1. Provide advanced education in occupational health, workplace safety, risk assessment, and safety management systems.",
        "M2. Foster research and practical training in fire safety, hazard analysis, and emergency response planning.",
        "M3. Develop safety leaders with strong ethical values who can design, implement, and manage comprehensive safety programmes in industrial settings."
      ],
      po: [
        "PO1. Apply advanced knowledge of safety engineering, risk assessment, and management systems to identify and mitigate industrial hazards.",
        "PO2. Design and implement occupational health and safety management systems in compliance with national and international standards.",
        "PO3. Conduct hazard analysis studies (HAZOP, FMEA, FTA) and develop risk mitigation strategies for industrial processes.",
        "PO4. Evaluate fire safety systems, emergency response plans, and personal protective equipment for industrial applications.",
        "PO5. Conduct independent research and safety audits to contribute to the advancement of industrial safety practices."
      ]
    ,
      images: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg"
      ],
      gallery: [
        "/images/departments/cse/1-768x576.jpeg",
        "/images/departments/cse/2-768x432.jpeg",
        "/images/departments/cse/3-768x576.jpeg",
        "/images/departments/cse/4-768x576.jpeg",
        "/images/departments/cse/5-768x576.jpeg",
        "/images/departments/cse/cse (1).jpg",
        "/images/departments/cse/WhatsApp-Image-2026-03-09-at-6.07.33-PM-1.jpeg",
        "/images/departments/cse/WhatsApp-Image-2026-03-11-at-3.41.52-PM-768x576.jpeg"
      ]
    },

    syllabus: {
      documents: [
        { title: "M.Tech Industrial Safety Engineering — Semester I & II", btnText: "View / Download Syllabus", fileUrl: "#" },
        { title: "M.Tech Industrial Safety Engineering — Semester III & IV", btnText: "View / Download Syllabus", fileUrl: "#" }
      ]
    },

    laboratories: [
      {
        name: "Industrial Safety & Hazard Analysis Lab",
        description: "A specialized lab for hands-on training in hazard identification, risk assessment techniques, safety instrumentation, and personal protective equipment evaluation.",
        experimentList: [
          "Hazard identification and risk assessment of an industrial process.",
          "HAZOP (Hazard and Operability) study of a chemical process plant.",
          "Failure Mode and Effects Analysis (FMEA) of a mechanical system.",
          "Fault Tree Analysis (FTA) for reliability and safety evaluation.",
          "Noise level measurement and mapping in industrial environments.",
          "Air quality monitoring and dust concentration measurement.",
          "Evaluation and selection of personal protective equipment (PPE).",
          "Ergonomic assessment of workstation design."
        ],
        equipmentList: ["Sound Level Meter", "Air Quality Monitor", "Dust Sampler", "PPE Testing Equipment", "Ergonomic Assessment Tools", "Lux Meter"]
      },
      {
        name: "Fire Safety & Emergency Response Lab",
        description: "Equipped with fire detection systems, suppression equipment models, and simulation tools for training in fire safety engineering and emergency response planning.",
        experimentList: [
          "Study of fire detection and alarm systems — smoke detectors, heat detectors, flame detectors.",
          "Fire suppression system analysis — sprinkler systems, CO2 systems, foam systems.",
          "Fire extinguisher types and their applications — hands-on practice.",
          "Fire load calculation and compartment fire simulation.",
          "Evacuation planning and emergency escape route design.",
          "First aid and rescue techniques — practical training.",
          "Safety audit of a building — fire safety compliance check."
        ],
        equipmentList: ["Fire Detection System Models", "Fire Extinguishers (All Types)", "Sprinkler System Model", "Fire Simulation Software", "First Aid Training Kit"]
      }
    ],

    faculty: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  DATA SCIENCE (M.TECH)                      │
     └─────────────────────────────────────────────┘ */
  "data-science-mtech": {
    name: "Data Science (M.Tech)",

    meta: {
      title: "Data Science (M.Tech) — Trident Academy of Technology",
      description: "M.Tech in Data Science at Trident Academy of Technology — AICTE Approved postgraduate programme in Machine Learning, Big Data Analytics, and AI.",
    },

    theme: {
      primary: "text-[#E11D48]",
      bgPrimary: "bg-[#E11D48]",
      borderPrimary: "border-[#E11D48]",
      borderPrimary10: "border-[#E11D48]/10",
      bgPrimary10: "bg-[#E11D48]/10",
      hoverTextPrimary: "hover:text-[#E11D48]",
      hoverBgPrimary: "hover:bg-[#E11D48]",
      shadowPrimary20: "shadow-[#E11D48]/20",
      accent: "text-[#E5AA3E]",
      bgAccent: "bg-[#E5AA3E]",
      secondary: "text-[#BE123C]",
      gradient: "from-[#881337]/95 via-[#9F1239]/90 to-[#BE123C]/80",
      btn: "bg-[#F43F5E]",
      btnHover: "hover:bg-[#E11D48]",
    },

    hero: {
      titleLine1: "Data",
      titleLine2: "Science",
      subtitle: "A cutting-edge 2-year M.Tech programme training the next generation of data scientists in machine learning, deep learning, big data analytics, NLP, and AI-driven decision making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Data Science (M.Tech)",
      stats: [
        { label: "Duration", value: "2 Yrs" },
        { label: "AICTE Approved", value: "Yes" },
        { label: "Degree", value: "M.Tech" }
      ],
    },

    acmBanner: null,

    sidebar: {
      heading: "DATA SCIENCE\n(M.TECH)",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen", href: "/overview" },
        { id: "syllabus", label: "Syllabus", icon: "Layers", href: "/syllabus" },
        { id: "faculties", label: "Faculties", icon: "Users", href: "/faculties" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker", href: "/laboratories" },
        { id: "placement", label: "Placement Data", icon: "BarChart3", href: "/placement" }
      ],
    },

    overview: {
      paragraphs: [
        "The M.Tech programme in Data Science at Trident Academy of Technology is designed to meet the surging demand for skilled data scientists across industries. This 2-year postgraduate programme provides an intensive, research-oriented curriculum that bridges the gap between theoretical computer science, statistical modelling, and real-world data-driven applications.",
        "The programme covers core areas including Advanced Machine Learning, Deep Learning & Neural Networks, Big Data Technologies (Hadoop, Spark), Natural Language Processing (NLP), Computer Vision, Statistical Inference, Data Visualization, Cloud Computing for Data Science, and Reinforcement Learning. Students also gain proficiency in Python, R, SQL, TensorFlow, PyTorch, and industry-standard tools.",
        "With a strong emphasis on research dissertations and industry projects, students work on real-world datasets and solve practical problems in domains such as healthcare analytics, financial modelling, IoT data analysis, and recommendation systems. The programme prepares graduates for roles as Data Scientists, ML Engineers, AI Researchers, and Analytics Consultants in top-tier organizations."
      ],
      tabs: [
        {
          id: 'vision',
          label: 'Vision',
          content: 'To be a nationally recognized centre of excellence in Data Science education and research, producing innovative data scientists who leverage advanced analytics and artificial intelligence to solve complex real-world problems and drive data-informed decision making.',
        },
        {
          id: 'mission',
          label: 'Mission',
          content: 'M1. Provide rigorous postgraduate education in data science, machine learning, and AI, with strong foundations in mathematics, statistics, and computer science.\n\nM2. Foster a research-driven learning environment where students engage with cutting-edge technologies, real-world datasets, and industry collaboration.\n\nM3. Develop ethical, innovative, and industry-ready data science professionals who can lead AI-driven transformation across diverse sectors.',
        },
        {
          id: 'peo',
          label: 'PEO',
          content: 'PEO-1. To produce data science professionals capable of designing and deploying machine learning models and AI solutions for complex, real-world problems.\nKeyword: AI & ML Solutions.\n\nPEO-2. To develop strong analytical and research skills in students, enabling them to pursue advanced research or leadership roles in data-driven organizations.\nKeywords: Research & Analytics.\n\nPEO-3. To instill professional ethics, communication skills, and a commitment to lifelong learning in the rapidly evolving field of data science and AI.\nKeywords: Ethics & Lifelong Learning.',
        },
        {
          id: 'po',
          label: 'PO',
          content: '1. Advanced Knowledge: Apply in-depth knowledge of mathematics, statistics, and computer science to formulate and solve complex data science problems.\n\n2. Data Analysis & Modelling: Design and implement machine learning, deep learning, and statistical models for extracting insights from structured and unstructured data.\n\n3. Big Data Technologies: Utilize distributed computing frameworks (Hadoop, Spark) and cloud platforms for processing and analysing large-scale datasets.\n\n4. Research & Innovation: Conduct independent research, design experiments, analyse results, and publish findings in the domain of data science and artificial intelligence.\n\n5. Tools & Technologies: Demonstrate proficiency in Python, R, SQL, TensorFlow, PyTorch, and industry-standard data science tools and libraries.\n\n6. Ethics & Responsibility: Apply ethical principles in data collection, processing, and modelling, with awareness of bias, fairness, and privacy considerations.\n\n7. Communication: Effectively communicate data-driven insights through visualizations, reports, and presentations to technical and non-technical audiences.\n\n8. Lifelong Learning: Recognize the need for continuous learning and adapt to emerging trends in AI, machine learning, and data engineering.',
        },
        {
          id: 'pso',
          label: 'PSO',
          content: 'PSO1: Machine Learning Engineering — Design, train, evaluate, and deploy machine learning and deep learning models for real-world applications across diverse domains.\n\nPSO2: Big Data Analytics — Process, analyse, and derive actionable insights from large-scale structured and unstructured datasets using distributed computing technologies.\n\nPSO3: AI Research & Innovation — Conduct cutting-edge research in artificial intelligence, publish findings, and contribute to the advancement of data science knowledge.',
        }
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600"
      ]
    },

    programmes: [
      {
        title: "M.Tech in Data Science",
        seats: "18 Seats",
        details: "2-Year Full-Time Programme | AICTE Approved",
        sections: [
          {
            heading: "Programme Overview",
            text: "The M.Tech in Data Science is a 2-year full-time postgraduate programme designed to train students in the science and engineering of data. The programme equips students with advanced skills in machine learning, deep learning, natural language processing, big data analytics, computer vision, and AI — enabling them to build intelligent systems and data-driven solutions for industry and research."
          },
          {
            heading: "Curriculum Highlights",
            text: "The curriculum is carefully crafted to cover:\n• Advanced Machine Learning & Deep Learning (CNNs, RNNs, GANs, Transformers)\n• Big Data Technologies (Hadoop, Apache Spark, Kafka)\n• Natural Language Processing & Computer Vision\n• Statistical Inference & Bayesian Methods\n• Data Engineering & Cloud Computing (AWS, GCP, Azure)\n• Reinforcement Learning & Optimization\n• Research Methodology & Dissertation\n• Industry Internship / Collaborative Research Project"
          },
          {
            heading: "Career Prospects",
            text: "Graduates of this programme are highly sought after in roles such as Data Scientist, Machine Learning Engineer, AI Researcher, NLP Engineer, Big Data Engineer, Analytics Consultant, and Computer Vision Engineer. Top recruiters include leading technology companies, financial institutions, healthcare analytics firms, e-commerce platforms, and research organizations."
          }
        ]
      }
    ],

    questionBank: {
      years: [
        { id: "1st-semester", label: "1st Semester", color: "bg-[#5B50C2]", subjects: [] },
        { id: "2nd-semester", label: "2nd Semester", color: "bg-[#D18E47]", subjects: [] },
        { id: "3rd-semester", label: "3rd Semester", color: "bg-[#C3594B]", subjects: [] },
        { id: "4th-semester", label: "4th Semester", color: "bg-[#27AE60]", subjects: [] }
      ]
    },

    syllabus: [
      {
        program: "M.TECH.",
        years: [
          {
            title: "SYLLABUS FOR FIRST YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 1ST SEM SYLLABUS", href: "#" },
              { label: "VIEW / DOWNLOAD 2ND SEM SYLLABUS", href: "#" }
            ]
          },
          {
            title: "SYLLABUS FOR SECOND YEAR",
            buttons: [
              { label: "VIEW / DOWNLOAD 3RD SEM SYLLABUS", href: "#" },
              { label: "VIEW / DOWNLOAD 4TH SEM SYLLABUS", href: "#" }
            ]
          }
        ]
      }
    ],

    faculties: [],

    laboratories: [
      {
        name: "Machine Learning & AI Lab",
        location: "Computing Block, Room C-401",
        hardware: ["GPU Workstations (NVIDIA RTX 3090)", "High-Performance Computing Cluster", "32GB RAM Workstations"],
        software: ["Python (Anaconda)", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Jupyter Notebook", "Google Colab Pro", "MATLAB"],
        experimentList: [
          "Implementation of linear regression and logistic regression from scratch.",
          "Decision tree, random forest, and gradient boosting classifiers.",
          "Support Vector Machine (SVM) for classification and regression tasks.",
          "Convolutional Neural Networks (CNN) for image classification.",
          "Recurrent Neural Networks (RNN/LSTM) for sequence modelling and time series forecasting.",
          "Generative Adversarial Networks (GANs) for image generation.",
          "Transfer learning using pre-trained models (ResNet, VGG, BERT).",
          "Reinforcement learning — Q-learning and policy gradient methods.",
          "Hyperparameter tuning and model optimization techniques."
        ]
      },
      {
        name: "Big Data Analytics Lab",
        location: "Computing Block, Room C-402",
        hardware: ["Multi-Node Hadoop Cluster", "Apache Spark Cluster", "16GB+ RAM Workstations"],
        software: ["Apache Hadoop", "Apache Spark", "Apache Kafka", "Hive", "PySpark", "MongoDB", "Tableau", "Power BI", "AWS/GCP Cloud Services"],
        experimentList: [
          "Setting up and configuring a Hadoop distributed file system (HDFS).",
          "MapReduce programming for large-scale data processing.",
          "Real-time data streaming and processing with Apache Kafka and Spark Streaming.",
          "Data warehousing and querying with Apache Hive.",
          "NoSQL database operations with MongoDB — CRUD and aggregation pipelines.",
          "Exploratory data analysis and visualization using Tableau and Power BI.",
          "Cloud-based data pipeline design using AWS (S3, EMR, Redshift) or GCP (BigQuery, Dataflow).",
          "Natural language processing — text classification, sentiment analysis, and named entity recognition.",
          "Computer vision — object detection and image segmentation using YOLO and U-Net."
        ]
      }
    ],

    clubs: [],
    publications: [],
    placement: [],
    events: []
  },

  /* ┌─────────────────────────────────────────────┐
     │  DIPLOMA IN ELECTRICAL ENGINEERING          │
     └─────────────────────────────────────────────┘ */
  "diploma-electrical-engineering": {
    name: "Diploma in Electrical Engineering",
    
    meta: {
      title: "Diploma in Electrical Engineering — Trident Academy of Technology",
      description: "The Department of Electrical and Electronics Engineering at Trident Academy of Technology offers a comprehensive Diploma programme in Electrical Engineering.",
    },

    theme: { accent: "#D97706", accentDark: "#B45309", gradient: "from-amber-500 to-orange-600" },

    hero: {
      titleLine1: "Diploma in",
      titleLine2: "Electrical Engineering",
      subtitle: "The Department of Electrical and Electronics Engineering at Trident Academy of Technology offers a comprehensive Diploma programme in Electrical Engineering, designed to provide students with a strong foundation in core principles along with exposure to contemporary advancements in the discipline.",
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Diploma in Electrical Engineering",
      stats: [
        { label: "Intake Seats", value: "60" },
        { label: "Established", value: "2024" },
        { label: "Advanced Labs", value: "7+" },
        { label: "Placement Rate", value: "90%" },
      ],
    },

    sidebar: {
      heading: "DIPLOMA EE",
      items: [
        { id: "overview", label: "Department Overview", icon: "BookOpen", href: "/diploma-electrical-engineering/overview" },
        { id: "faculties", label: "Faculties", icon: "Users", href: "/diploma-electrical-engineering/faculties" },
        { id: "laboratories", label: "Laboratories", icon: "Beaker", href: "/diploma-electrical-engineering/laboratories" },
        { id: "clubs", label: "Departmental Clubs", icon: "Code2", href: "/diploma-electrical-engineering/clubs" }
      ],
    },

    overview: {
      paragraphs: [
        "The Department of Electrical and Electronics Engineering at Trident Academy of Technology offers a comprehensive Diploma programme in Electrical Engineering, designed to provide students with a strong foundation in core principles along with exposure to contemporary advancements in the discipline. The curriculum is structured to ensure academic rigor, practical relevance, and alignment with industry and professional standards.",
        "In addition to the structured academic curriculum, students of the Electrical Engineering programme are provided with diverse experiential learning opportunities. Distinguished Lectures delivered by eminent experts from various domains of Electrical Engineering facilitate knowledge dissemination, intellectual interaction, and exposure to contemporary practices.",
        "These activities effectively complement classroom teaching and motivate students to explore interdisciplinary approaches and real-world applications of theoretical concepts.",
        "Furthermore, the department promotes a strong culture of research and innovation by encouraging student participation in hands-on projects, internships, and collaborative activities with industry partners. These initiatives enable students to reinforce theoretical knowledge through practical application while developing industry-relevant skills essential for professional competence and career readiness."
      ],
      tabs: [
        {
          id: 'highlights',
          label: 'Programme Highlights',
          content: "• Strong entry pathway into the electrical engineering industry with practical, skill-focused training\n• Hands-on learning through labs, fieldwork, and project-based activities\n• High employability in power generation, transmission, distribution, and renewable energy sectors\n• Opportunities in government sectors such as OERC, GRIDCO, OPTCL, TPCODL, and NESCO as Junior Engineers (JE)\n• Excellent scope in private industry including power plants, electrical contractors, and manufacturing firms\n• Cost-effective & time-efficient program that enables students to start a professional career earlier\n• Pathway to higher studies — lateral entry to B.Tech (direct 2nd year), and later M.Tech or advanced specializations\n• Opportunities for entrepreneurship in electrical contracting, solar installation, and energy auditing services",
        }
      ],
      images: [
        "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600"
      ]
    },

    faculties: [
      { name: "Mr. Pradipta Kumar Sahoo", designation: "Prof. & HOD", qualification: "M.Tech", doj: "7/8/2006", bputId: "T081828902" },
      { name: "Mr. Shitya Ranjan Das", designation: "Associate Professor", qualification: "M.Tech", doj: "3/7/2006", bputId: "T081828906" },
      { name: "Mr. Mohammed Nadeem Iqbal", designation: "Assistant Professor", qualification: "M.Tech", doj: "22/2/2011", bputId: "T111828903" },
      { name: "Mr. Mir Manjur Elahi", designation: "Assistant Professor", qualification: "M.Tech", doj: "10/1/2011", bputId: "T111828902" },
      { name: "Mrs. Smrutirekha Mahanta", designation: "Assistant Professor", qualification: "M.Tech", doj: "14/9/2011", bputId: "T111828905" }
    ],

    laboratories: [
      { name: "Basic Electrical Engineering Laboratory", description: "Provides first-year students with a solid foundation in practical aspects of electrical engineering — basic circuits, components, and measuring instruments.", equipments: [], software: [], experiments: [], images: [] },
      { name: "Power Electronics Lab", description: "Modern solid-state devices and converter modules for efficient power conversion and control systems design.", equipments: [], software: [], experiments: [], images: [] },
      { name: "Electrical Machines Lab", description: "Comprehensive study of DC machines, transformers, induction motors, synchronous machines, and special machines.", equipments: [], software: [], experiments: [], images: [] },
      { name: "Electrical Measurement & Instrumentation Lab", description: "Bridges, potentiometers, CROs, transducers, and digital instruments for precision measurement training.", equipments: [], software: [], experiments: [], images: [] },
      { name: "Control Systems Lab", description: "Study of time and frequency response, stability analysis, and PID controller design using MATLAB/Simulink.", equipments: [], software: [], experiments: [], images: [] },
      { name: "Power Systems Lab", description: "Load flow analysis, fault analysis, relay testing, and power system protection schemes.", equipments: [], software: [], experiments: [], images: [] },
      { name: "Renewable Energy Lab", description: "Solar PV systems, wind energy trainers, and hybrid energy system design and testing.", equipments: [], software: [], experiments: [], images: [] }
    ],

    clubs: [
      {
        title: "Renewable Energy (RENEN) Club",
        description: "To create awareness and promote research in renewable energy technologies among students.",
        activities: [
          "Solar panel installations",
          "Energy audit workshops",
          "Green campus initiatives",
          "Technical seminars on sustainable energy solutions"
        ]
      },
      {
        title: "Energy Efficiency Club",
        description: "To educate students about energy conservation and efficient utilization of electrical energy.",
        activities: [
          "Energy audits",
          "LED lighting drives",
          "Power factor improvement projects",
          "Awareness campaigns on National Energy Conservation Day"
        ]
      },
      {
        title: "Electric Vehicle Club",
        description: "To explore electric mobility technologies and encourage innovation in EV design.",
        activities: [
          "EV prototype building",
          "Battery management workshops",
          "Participation in national-level EV competitions",
          "Industry visits to EV manufacturing units"
        ]
      }
    ],

    programmes: [],
    questionBank: null,
    syllabus: [],
    publications: [],
    placement: [],
    events: [],
    homeContent: {}
  }
};

export default departmentData;

/**
 * Helper: Get all department slugs for generating routes
 */
export const departmentSlugs = Object.keys(departmentData);

/**
 * Helper: Get a specific department's data by slug
 */
export function getDepartment(slug) {
  return departmentData[slug] || null;
}
