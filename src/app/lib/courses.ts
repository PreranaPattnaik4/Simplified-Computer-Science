
import placeholderImages from './placeholder-images.json';

const courses = [
  {
    slug: 'advanced-ai-deep-learning-with-tensorflow',
    title: 'Advanced AI: Deep Learning with TensorFlow',
    description: 'Master deep learning concepts and build advanced neural networks using TensorFlow. This course covers everything from fundamental principles to advanced applications, preparing you for a career at the forefront of AI.',
    level: 'Advanced',
    primaryCategory: 'Artificial Intelligence',
    suggestedTags: ['Python', 'TensorFlow', 'PyTorch'],
    image: placeholderImages.course1.src,
    rating: 5,
    students: 125,
    comments: 23,
    author: 'Prerana',
    isTopCourse: true,
    syllabus: [
      { title: 'Module 1: Introduction to Deep Learning', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Advanced Concepts', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'full-stack-web-development-with-nextjs-and-react',
    title: 'Full-Stack Web Development with Next.js & React',
    description: 'Build and deploy modern, server-rendered web applications from scratch. You will learn the entire stack, from front-end development with React to back-end with Next.js, and deploy your applications with confidence.',
    level: 'Intermediate',
    primaryCategory: 'Software Development',
    suggestedTags: ['JavaScript', 'Next.js', 'DevOps'],
    image: placeholderImages.course2.src,
    rating: 4,
    students: 852,
    comments: 102,
    author: 'Prerana',
    isTopCourse: true,
    syllabus: [
      { title: 'Module 1: React Fundamentals', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Next.js and Server-Side Rendering', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'aws-certified-cloud-practitioner-exam-prep',
    title: 'AWS Certified Cloud Practitioner: Exam Prep',
    description: 'A comprehensive guide to mastering the AWS cloud and passing the CCP exam.',
    level: 'Beginner',
    primaryCategory: 'Cloud & IT Infrastructure',
    suggestedTags: ['AWS', 'DevOps', 'Network Security'],
    image: placeholderImages.course3.src,
    rating: 5,
    students: 2341,
    comments: 450,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { title: 'Module 1: Introduction to AWS', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Core AWS Services', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'data-structures-and-algorithms-in-python',
    title: 'Data Structures & Algorithms in Python',
    description: 'Strengthen your core computer science fundamentals with practical Python examples.',
    level: 'Intermediate',
    primaryCategory: 'Software Development',
    suggestedTags: ['Python', 'Algorithms'],
    image: placeholderImages.course4.src,
    rating: 5,
    students: 1780,
    comments: 250,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { title: 'Module 1: Core Data Structures', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Common Algorithms', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'introduction-to-generative-ai-and-large-language-models',
    title: 'Introduction to Generative AI & Large Language Models',
    description: 'Explore the fundamentals of generative AI and learn how LLMs are transforming industries.',
    level: 'Beginner',
    primaryCategory: 'Artificial Intelligence',
    suggestedTags: ['Python', 'TensorFlow'],
    image: placeholderImages.course5.src,
    rating: 4,
    students: 950,
    comments: 120,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { title: 'Module 1: What is Generative AI?', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Working with LLMs', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'docker-and-kubernetes-the-complete-guide',
    title: 'Docker & Kubernetes: The Complete Guide',
    description: 'Containerize and orchestrate your applications for scalable and efficient deployments. This course provides hands-on experience with the tools that power modern cloud infrastructure.',
    level: 'Intermediate',
    primaryCategory: 'Cloud & IT Infrastructure',
    suggestedTags: ['Docker', 'Kubernetes', 'DevOps'],
    image: placeholderImages.course6.src,
    rating: 5,
    students: 1150,
    comments: 180,
    author: 'Prerana',
    isTopCourse: true,
    syllabus: [
      { title: 'Module 1: Docker Fundamentals', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Kubernetes Orchestration', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'cybersecurity-fundamentals-defending-the-digital-frontier',
    title: 'Cybersecurity Fundamentals: Defending the Digital Frontier',
    description: 'Learn the core principles of cybersecurity and how to protect systems from threats.',
    level: 'Beginner',
    primaryCategory: 'Cybersecurity',
    suggestedTags: ['Network Security'],
    image: placeholderImages.course7.src,
    rating: 4,
    students: 780,
    comments: 95,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { title: 'Module 1: Introduction to Cybersecurity', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Common Threats and Defenses', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'advanced-natural-language-processing-with-pytorch',
    title: 'Advanced Natural Language Processing with PyTorch',
    description: 'Dive deep into NLP techniques and build sophisticated language models with PyTorch.',
    level: 'Advanced',
    primaryCategory: 'Artificial Intelligence',
    suggestedTags: ['Python', 'PyTorch'],
    image: placeholderImages.course8.src,
    rating: 5,
    students: 450,
    comments: 85,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { title: 'Module 1: NLP Fundamentals', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Advanced NLP Models', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'sql-for-data-science-from-beginner-to-advanced',
    title: 'SQL for Data Science: From Beginner to Advanced',
    description: 'Master the language of data and perform complex queries for insightful analysis.',
    level: 'Intermediate',
    primaryCategory: 'Data Science & Analytics',
    suggestedTags: ['SQL', 'NoSQL'],
    image: placeholderImages.course9.src,
    rating: 5,
    students: 2100,
    comments: 320,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { title: 'Module 1: SQL Basics', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Advanced SQL Queries', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'introduction-to-ux-ui-design-principles',
    title: 'Introduction to UX/UI Design Principles',
    description: 'Learn the fundamentals of user experience and user interface design to create intuitive products.',
    level: 'Beginner',
    primaryCategory: 'Software Development',
    suggestedTags: ['UX/UI Design'],
    image: placeholderImages.course10.src,
    rating: 4,
    students: 650,
    comments: 70,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { title: 'Module 1: UX/UI Fundamentals', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Design Principles', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'compiler-design-and-theory-from-code-to-execution',
    title: 'Compiler Design & Theory: From Code to Execution',
    description: 'Understand the inner workings of compilers and how source code is translated into machine code.',
    level: 'Advanced',
    primaryCategory: 'Software Development',
    suggestedTags: ['Algorithms'],
    image: placeholderImages.course11.src,
    rating: 5,
    students: 250,
    comments: 45,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { title: 'Module 1: Compiler Theory', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Practical Compiler Design', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'object-oriented-design-patterns-in-javascript',
    title: 'Object-Oriented Design Patterns in JavaScript',
    description: 'Learn to write scalable, maintainable, and reusable code with proven design patterns.',
    level: 'Intermediate',
    primaryCategory: 'Software Development',
    suggestedTags: ['JavaScript', 'Algorithms'],
    image: placeholderImages.course12.src,
    rating: 4,
    students: 890,
    comments: 110,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { title: 'Module 1: OOD Principles', topics: ['Topic 1A', 'Topic 1B'] },
      { title: 'Module 2: Common Design Patterns', topics: ['Topic 2A', 'Topic 2B'] },
    ]
  },
  {
    slug: 'mastering-python-for-data-science-and-ai',
    title: 'Mastering Python for Data Science & AI',
    description: 'A comprehensive course covering Python fundamentals and its advanced applications in data science and artificial intelligence. Perfect for aspiring data scientists and AI specialists.',
    level: 'Intermediate',
    primaryCategory: 'Data Science & Analytics',
    suggestedTags: ['Python', 'TensorFlow', 'PyTorch'],
    image: placeholderImages.course13.src,
    rating: 5,
    students: 3200,
    comments: 450,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
        {
            title: "Module 1: Python Fundamentals for Data Science",
            topics: [
                "Introduction to Python and its data ecosystem",
                "Variables, data types, and operators",
                "Control flow: loops and conditional statements",
                "Functions and modular programming",
                "File I/O and working with data sources"
            ]
        },
        {
            title: "Module 2: Data Manipulation with NumPy and Pandas",
            topics: [
                "Introduction to NumPy arrays and vectorized operations",
                "Pandas Series and DataFrame objects",
                "Data cleaning, transformation, and merging",
                "Grouping, aggregation, and pivot tables",
                "Time series data analysis with Pandas"
            ]
        },
        {
            title: "Module 3: Data Visualization with Matplotlib and Seaborn",
            topics: [
                "Principles of effective data visualization",
                "Creating various plot types with Matplotlib",
                "Statistical data visualization with Seaborn",
                "Customizing plots for presentations"
            ]
        },
        {
            title: "Module 4: Machine Learning Fundamentals with Scikit-Learn",
            topics: [
                "Introduction to machine learning concepts",
                "Supervised learning: regression and classification",
                "Unsupervised learning: clustering and dimensionality reduction",
                "Model evaluation and cross-validation",
                "Building a complete machine learning pipeline"
            ]
        },
        {
            title: "Module 5: Introduction to Deep Learning",
            topics: [
                "Core concepts of neural networks",
                "Introduction to TensorFlow and Keras (or PyTorch)",
                "Building a simple neural network for classification",
                "Understanding activation functions and optimizers"
            ]
        }
    ]
  },
];

export function getCourses() {
  return courses;
}

export function getCourseBySlug(slug: string) {
  return courses.find(course => course.slug === slug);
}
