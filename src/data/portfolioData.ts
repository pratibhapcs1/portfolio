import { Project, EducationItem, SkillItem, AchievementItem, ServiceInterestItem } from '../types';
import profilePhoto from '../assets/images/regenerated_image_1780810045095.jpg';

export const personalInfo = {
  name: 'Pratibha Singh',
  title: 'Future Software Engineer',
  subtitle: 'B.Tech CSE Student',
  location: 'Lucknow, Uttar Pradesh, India',
  email: 'pratibhasingh742006@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pratibha-singh-18b7b628b',
  github: 'https://github.com', // fallback profile link
  bioUrl: profilePhoto,
  bio: 'I am currently pursuing a Bachelor of Technology in Computer Science Engineering from Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM), Lucknow. I have a strong interest in software development, programming, and web technologies. I enjoy solving problems, learning new skills, and working on projects that help me gain practical experience. My goal is to become a professional Software Engineer and contribute to innovative technology solutions.',
  typingTexts: [
    'Passionate about Software Development',
    'Building Skills Every Day',
    'Aspiring Software Engineer'
  ],
  stats: [
    { label: 'Completed Projects', value: 8, suffix: '+' },
    { label: 'DSA Questions Solved', value: 250, suffix: '+' },
    { label: 'Skills Mastery', value: 8, suffix: '' },
    { label: 'CGPA', value: 7.1, suffix: '/10' }
  ]
};

export const educationList: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    institution: 'Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM)',
    period: '2023 – 2027',
    grade: 'Academic CGPA: 7.1/10',
    description: 'Focusing on Core Computer Science theory including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, and Web Development. Active member of cultural and coding forums.'
  },
  {
    id: 'edu-2',
    degree: 'Intermediate (12th Standard - CBSE)',
    institution: 'St. Xavier\'s School',
    period: '2023',
    grade: 'Percentage: 72%',
    description: 'Primary courses included Physics, Chemistry, Mathematics, and Computer Science. Built early focus on basic computation and scientific analytical reasoning.'
  },
  {
    id: 'edu-3',
    degree: 'High School (10th Standard - CBSE)',
    institution: 'St. Xavier\'s School',
    period: '2021',
    grade: 'Percentage: 70%',
    description: 'Secured high distinction in Mathematics and Science. Developed keen logical reasoning and problem-solving fundamentals.'
  }
];

export const skillsList: SkillItem[] = [
  // Programming Languages
  { name: 'Java', level: 85, category: 'programming', icon: 'Coffee' },
  { name: 'JavaScript', level: 80, category: 'programming', icon: 'Code' },
  
  // Web Development
  { name: 'HTML5', level: 90, category: 'webDev', icon: 'FileCode' },
  { name: 'CSS3', level: 85, category: 'webDev', icon: 'Palette' },
  { name: 'React.js', level: 75, category: 'webDev', icon: 'Cpu' },
  { name: 'Tailwind CSS', level: 85, category: 'webDev', icon: 'Wind' },

  // Soft Skills
  { name: 'Communication', level: 90, category: 'softSkills', icon: 'MessageSquare' },
  { name: 'Problem Solving', level: 85, category: 'softSkills', icon: 'Brain' },
  { name: 'Teamwork', level: 88, category: 'softSkills', icon: 'Users' },
  { name: 'Adaptability', level: 90, category: 'softSkills', icon: 'Shuffle' }
];

export const projectsList: Project[] = [
  {
    id: 'proj-1',
    title: 'Menu Management System',
    description: [
      'Developed a responsive web application to organize, filter, and manage food menu items dynamically.',
      'Implemented full CRUD (Create, Read, Update, Delete) features for updating prices, categories, and availability.',
      'Refined client-side state handling to implement searching, sorting based on prices, and category filtering seamlessly.',
      'Enhanced analytical problem-solving skills and solidified understanding of DOM manipulation, Javascript arrays, and local persistence.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Local Storage'],
    githubUrl: 'https://github.com/pratibhasingh742006/Menu-Management-System',
    demoUrl: 'https://menu-management-sys.demo'
  }
];

export const achievementsList: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Strong Problem-Solving Mindset',
    description: 'Consistently practicing algorithms, solving 250+ codings questions on platforms like LeetCode and GeeksforGeeks to strengthen computing fundamentals.',
    badge: 'BrainCircuit'
  },
  {
    id: 'ach-2',
    title: 'Continuous Technical Learning',
    description: 'Actively self-studying modern frameworks like React, Vite, and software engineering principles to stay ahead of academic curriculums.',
    badge: 'BookOpen'
  },
  {
    id: 'ach-3',
    title: 'Passionate About Software Dev',
    description: 'Devoting spare time to build fully styled hands-on applications, learning system layouts, modular states, and client-server workflows.',
    badge: 'Terminal'
  },
  {
    id: 'ach-4',
    title: 'Effective Communication Skills',
    description: 'Excellent presentation and collaborative skills. Experienced in expressing technical solutions clearly to both peer group developers and mentors.',
    badge: 'Sparkles'
  },
  {
    id: 'ach-5',
    title: 'Dedicated and Quick Learner',
    description: 'Highly adaptive to fast-changing environments, holding strong accountability for continuous development and technical implementation.',
    badge: 'TrendingUp'
  }
];

export const servicesInterestsList: ServiceInterestItem[] = [
  {
    id: 'ser-1',
    title: 'Software Development',
    description: 'Writing object-oriented, reusable, clean, and highly robust software components in modern languages like Java.',
    iconName: 'Laptop'
  },
  {
    id: 'ser-2',
    title: 'Web Development',
    description: 'Designing fully responsive, interactive client interfaces that adapt accurately under various screen dimensions and constraints.',
    iconName: 'Globe'
  },
  {
    id: 'ser-3',
    title: 'Programming Core',
    description: 'Mastering algorithmic mechanics, core complexities (Big O), and foundational computer science philosophies.',
    iconName: 'FileText'
  },
  {
    id: 'ser-4',
    title: 'Problem Solving',
    description: 'Deconstructing real-world workflow challenges into structured code processes, using test cases to ensure correct edge configurations.',
    iconName: 'Activity'
  },
  {
    id: 'ser-5',
    title: 'Learning Tech',
    description: 'Exploratory mindset dedicated to analyzing development methodologies, state models, cloud integrations, and APIs.',
    iconName: 'Compass'
  }
];
