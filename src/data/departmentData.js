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
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000",
      breadcrumb: "Computer Science & Engineering",
      stats: [
        { label: "Established", value: "2005" },
        { label: "NBA Accredited", value: "2025" },
        { label: "B.Tech Seats", value: "180" },
        { label: "M.Tech Seats", value: "18" },
      ],
    },

    acmBanner: {
      text: "ACM Student Chapter Annual Report",
      href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/COMPUTER+SCIENCE+%26+ENGINEERING/2024-25Trident-Acm-Student-Chapter-Annual-Report.pdf",
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
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600"
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
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
        tag: "3rd Position",
      },
      {
        title: "Amity Noida – SustainInnovation Event",
        description: "A national level hackathon held in September 2025. Team MADX received remarkable achievement during the event.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
        tag: "National Level",
      },
      {
        title: 'State-Level Hackathon "Srusti TechHack 2.0"',
        description: "Held at Srusti Academy of Management and Technology, Bhubaneswar. Team MAP-X secured 2nd Position.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
        tag: "2nd Position",
      },
      {
        title: "BPUT Hackathon 2025 Grand Finale",
        description: "Held at BPUT Campus, Rourkela on 1st and 2nd November 2025. Our students secured 2nd Position in PS 2.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
        tag: "2nd Position",
      },
      {
        title: "Odisha Cyber Safety Campaign Hackathon",
        description: "Along with IIT BBSR conducted on 14th November 2025. One team INNOVATEX achieved Surprise winners of cash prize Rs 10,000.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
        tag: "Cash Prize ₹10,000",
      },
      {
        title: "The PixelCraft – UI Showdown",
        description: "Prize distribution honoring students who built innovative websites on Preparation Challenges Faced in BTech Placements using AI tools.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
        tag: "Innovation",
      },
      {
        title: "Smart India Hackathon (SIH) 2024",
        description: "The flagship national-level hackathon organized by MoE, Govt. of India. Our CSE department team 'TechTitans' secured the 1st runner-up position in the Software Edition, winning a cash prize of ₹75,000 for their AI-driven healthcare solution.",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600",
        tag: "1st Runner-Up (₹75K)",
      },
      {
        title: "TCS CodeVita Season 11",
        description: "A global programming competition by Tata Consultancy Services. Two of our final-year students ranked among the top 100 globally, securing direct placement offers for the prestigious TCS Digital profile.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
        tag: "Global Top 100",
      },
      {
        title: "Google Solution Challenge 2024",
        description: "An annual contest that invites university students to build solutions for UN Sustainable Development Goals. Our student team's project on accessible education was selected in the Top 50 Global Finalists.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
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
      primary: "text-[#4F46E5]",
      bgPrimary: "bg-[#4F46E5]",
      borderPrimary: "border-[#4F46E5]",
      borderPrimary10: "border-[#4F46E5]/10",
      bgPrimary10: "bg-[#4F46E5]/10",
      hoverTextPrimary: "hover:text-[#4F46E5]",
      hoverBgPrimary: "hover:bg-[#4F46E5]",
      shadowPrimary20: "shadow-[#4F46E5]/20",
      accent: "text-[#F59E0B]",
      bgAccent: "bg-[#F59E0B]",
      secondary: "text-[#8B5CF6]",
      gradient: "from-[#312E81]/95 via-[#3730A3]/90 to-[#4338CA]/80",
      btn: "bg-[#6366F1]",
      btnHover: "hover:bg-[#4338CA]",
    },

    hero: {
      titleLine1: "Computer Science &",
      titleLine2: "Information Technology",
      subtitle: "Focused on the application of computing technologies across diverse industries.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000",
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
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600"
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
    ]
  },

  "computer-science-technology": {
    name: "Computer Science and Technology",

    meta: {
      title: "Computer Science and Technology — Trident Academy of Technology",
      description: "Department of Computer Science and Technology at Trident Academy of Technology.",
    },

    theme: {
      primary: "text-[#008080]",
      bgPrimary: "bg-[#008080]",
      borderPrimary: "border-[#008080]",
      borderPrimary10: "border-[#008080]/10",
      bgPrimary10: "bg-[#008080]/10",
      hoverTextPrimary: "hover:text-[#008080]",
      hoverBgPrimary: "hover:bg-[#008080]",
      shadowPrimary20: "shadow-[#008080]/20",
      accent: "text-[#FF7F50]",
      bgAccent: "bg-[#FF7F50]",
      secondary: "text-[#2E8B57]",
      gradient: "from-[#004d40]/95 via-[#00695c]/90 to-[#00897b]/80",
      btn: "bg-[#20B2AA]",
      btnHover: "hover:bg-[#008B8B]",
    },

    hero: {
      titleLine1: "Computer Science &",
      titleLine2: "Technology",
      subtitle: "Preparing students for future-ready careers in the rapidly evolving field of technology.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000",
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
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600"
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
