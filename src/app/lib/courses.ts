
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
      { 
        title: 'Module 1: Introduction to Deep Learning', 
        lessons: [
          { slug: 'intro-to-deep-learning', title: 'Understanding Deep Learning', content: 'Content for intro to deep learning.' },
          { slug: 'neural-networks-basics', title: 'Neural Networks Basics', content: 'Content for neural networks basics.' },
        ] 
      },
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
      { 
        title: 'Module 1: React Fundamentals', 
        lessons: [
          { slug: 'react-basics', title: 'React Basics', content: 'Content for React basics.' },
          { slug: 'state-props', title: 'State and Props', content: 'Content for state and props.' },
        ] 
      },
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
      { 
        title: 'Module 1: Introduction to AWS', 
        lessons: [
          { slug: 'what-is-aws', title: 'What is AWS?', content: 'Content for what is AWS.' },
          { slug: 'aws-global-infrastructure', title: 'AWS Global Infrastructure', content: 'Content for AWS Global Infrastructure.' },
        ] 
      },
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
      { 
        title: 'Module 1: Core Data Structures', 
        lessons: [
          { slug: 'arrays-and-lists', title: 'Arrays and Lists', content: 'Content for arrays and lists.' },
          { slug: 'stacks-and-queues', title: 'Stacks and Queues', content: 'Content for stacks and queues.' },
        ] 
      },
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
      { 
        title: 'Module 1: What is Generative AI?', 
        lessons: [
          { slug: 'intro-to-genai', title: 'Introduction to Generative AI', content: 'Content for intro to GenAI.' },
          { slug: 'understanding-llms', title: 'Understanding LLMs', content: 'Content for understanding LLMs.' },
        ] 
      },
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
      { 
        title: 'Module 1: Docker Fundamentals', 
        lessons: [
          { slug: 'intro-to-docker', title: 'Introduction to Docker', content: 'Content for intro to Docker.' },
          { slug: 'docker-containers', title: 'Working with Containers', content: 'Content for Docker containers.' },
        ] 
      },
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
      { 
        title: 'Module 1: Introduction to Cybersecurity', 
        lessons: [
          { slug: 'intro-to-cybersecurity', title: 'Introduction to Cybersecurity', content: 'Content for intro to cybersecurity.' },
          { slug: 'common-threats', title: 'Common Threats', content: 'Content for common threats.' },
        ] 
      },
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
      { 
        title: 'Module 1: NLP Fundamentals', 
        lessons: [
          { slug: 'intro-to-nlp', title: 'Introduction to NLP', content: 'Content for intro to NLP.' },
          { slug: 'text-preprocessing', title: 'Text Preprocessing', content: 'Content for text preprocessing.' },
        ] 
      },
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
      { 
        title: 'Module 1: SQL Basics', 
        lessons: [
          { slug: 'intro-to-sql', title: 'Introduction to SQL', content: 'Content for intro to SQL.' },
          { slug: 'select-queries', title: 'SELECT Queries', content: 'Content for SELECT queries.' },
        ] 
      },
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
      { 
        title: 'Module 1: UX/UI Fundamentals', 
        lessons: [
          { slug: 'intro-to-ux-ui', title: 'Introduction to UX/UI', content: 'Content for intro to UX/UI.' },
          { slug: 'design-thinking', title: 'Design Thinking Process', content: 'Content for design thinking.' },
        ] 
      },
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
      { 
        title: 'Module 1: Compiler Theory', 
        lessons: [
          { slug: 'intro-to-compilers', title: 'Introduction to Compilers', content: 'Content for intro to compilers.' },
          { slug: 'lexical-analysis', title: 'Lexical Analysis', content: 'Content for lexical analysis.' },
        ] 
      },
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
      { 
        title: 'Module 1: OOD Principles', 
        lessons: [
          { slug: 'intro-to-ood', title: 'Introduction to OOD', content: 'Content for intro to OOD.' },
          { slug: 'solid-principles', title: 'SOLID Principles', content: 'Content for SOLID principles.' },
        ] 
      },
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
            lessons: [
                { 
                    type: 'content',
                    slug: "introduction-to-python", 
                    title: "Introduction to Python and its data ecosystem", 
                    content: `### Objective
Understand Python's role in data science and set up your development environment.

### 1.1 What is Python?
Python is a high-level, interpreted programming language known for its simple syntax and readability. Its versatility makes it a top choice for web development, automation, and scientific computing.
*   **Key Features:** Dynamic typing, extensive standard library, large ecosystem of third-party packages.
*   **Why Python for Data Science?** Simplified syntax for complex logic, strong support for data manipulation (Pandas), numerical computation (NumPy), and machine learning (Scikit-learn, TensorFlow).

### 1.2 Setting Up Your Environment
We recommend using the Anaconda distribution, which packages Python with essential data science libraries.
1.  Download and install Anaconda from the official website.
2.  Open the Anaconda Navigator and launch a Jupyter Notebook or Spyder IDE.
3.  Verify your installation by running \`python --version\` and \`conda list\` in your terminal.
<br/>
### Tip
Use virtual environments (like \`conda create --name myenv python=3.8\`) to manage dependencies for different projects and a`
                },
                { 
                    type: 'content',
                    slug: "variables-and-data-types", 
                    title: "Variables, data types, and operators", 
                    content: `### Objective
Understand how to store and manipulate data using Python's primitive data types.

### 2.1 Variables
A variable is a named location used to store data in memory.
\`\`\`python
# Variable assignment
course_name = "Mastering Python"
students_enrolled = 3200
rating = 5.0
is_free = True
\`\`\`

### 2.2 Common Data Types
*   **String (\`str\`):** Textual data. Enclosed in single ('') or double ("") quotes.
*   **Integer (\`int\`):** Whole numbers.
*   **Float (\`float\`):** Numbers with a decimal point.
*   **Boolean (\`bool\`):** Represents truth values, \`True\` or \`False\`.

### 2.3 Type Casting
You can convert variables from one type to another.
\`\`\`python
# Convert float to int
rating_int = int(rating) # Becomes 5

# Convert int to string
student_count_str = str(students_enrolled) # Becomes "3200"
\`\`\`

### 2.4 Operators
*   **Arithmetic:** \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (modulo), \`**\` (exponent)
*   **Comparison:** \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`
*   **Logical:** \`and\`, \`or\`, \`not\`

### Example:
\`\`\`python
# Calculate the average rating after a new 4.0 review
new_rating = 4.0
total_ratings = 100 # assuming 100 ratings before
current_total = rating * total_ratings
new_average = (current_total + new_rating) / (total_ratings + 1)
print(f"New average rating: {new_average}")
\`\`\``
                },
                { 
                    type: 'content',
                    slug: "control-flow", 
                    title: "Control flow: loops and conditional statements", 
                    content: `### Objective
Learn to control the execution flow of your program using loops and conditional logic.

### 3.1 Conditional Statements (\`if\`, \`elif\`, \`else\`)
Execute blocks of code based on whether a condition is true.
\`\`\`python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"

print(f"Your grade is: {grade}") # Output: Your grade is: B
\`\`\`

### 3.2 \`for\` Loops
Iterate over a sequence (like a list, tuple, or string).
\`\`\`python
# Print each letter of a word
for letter in "Python":
    print(letter)

# Iterate over a list of numbers
numbers = [1, 2, 3, 4, 5]
sum_of_numbers = 0
for num in numbers:
    sum_of_numbers += num
print(f"Sum: {sum_of_numbers}") # Output: Sum: 15
\`\`\`

### 3.3 \`while\` Loops
Execute a block of code as long as a condition is true.
\`\`\`python
# Countdown from 5
count = 5
while count > 0:
    print(count)
    count -= 1 # Crucial to avoid an infinite loop
print("Blast off!")
\`\`\`

### Tip
Use list comprehensions for a concise way to create lists from loops.
\`\`\`python
# Traditional for loop
squares = []
for i in range(5):
    squares.push(i**2)

# List comprehension equivalent
squares_comp = [i**2 for i in range(5)]
print(squares_comp) # [0, 1, 4, 9, 16]
\`\`\`` 
                },
                { type: 'content', slug: "functions-and-modules", title: "Functions and modular programming", content: "Content for functions and modules." },
                { type: 'content', slug: "file-io", title: "File I/O and working with data sources", content: "Content for file I/O." }
            ]
        },
        {
            title: "Module 2: Data Manipulation with NumPy and Pandas",
            lessons: [
                { type: 'content', slug: "intro-to-numpy", title: "Introduction to NumPy arrays and vectorized operations", content: "Content for NumPy." },
                { type: 'content', slug: "intro-to-pandas", title: "Pandas Series and DataFrame objects", content: "Content for Pandas." },
                { type: 'content', slug: "data-cleaning", title: "Data cleaning, transformation, and merging", content: "Content for data cleaning." },
                { type: 'content', slug: "data-aggregation", title: "Grouping, aggregation, and pivot tables", content: "Content for data aggregation." },
                { type: 'content', slug: "time-series-analysis", title: "Time series data analysis with Pandas", content: "Content for time series analysis." }
            ]
        },
        {
            title: "Module 3: Data Visualization with Matplotlib and Seaborn",
            lessons: [
                { type: 'content', slug: 'visualization-principles', title: 'Principles of effective data visualization', content: 'Content for visualization principles.' },
                { type: 'content', slug: 'matplotlib-plotting', title: 'Creating various plot types with Matplotlib', content: 'Content for Matplotlib.' },
                { type: 'content', slug: 'seaborn-plotting', title: 'Statistical data visualization with Seaborn', content: 'Content for Seaborn.' },
                { type: 'content', slug: 'customizing-plots', title: 'Customizing plots for presentations', content: 'Content for customizing plots.' },
            ]
        },
        {
            title: "Module 4: Machine Learning Fundamentals with Scikit-Learn",
            lessons: [
                { type: 'content', slug: 'ml-concepts', title: 'Introduction to machine learning concepts', content: 'Content for ML concepts.' },
                { type: 'content', slug: 'supervised-learning', title: 'Supervised learning: regression and classification', content: 'Content for supervised learning.' },
                { type: 'content', slug: 'unsupervised-learning', title: 'Unsupervised learning: clustering and dimensionality reduction', content: 'Content for unsupervised learning.' },
                { type: 'content', slug: 'model-evaluation', title: 'Model evaluation and cross-validation', content: 'Content for model evaluation.' },
                { type: 'content', slug: 'ml-pipeline', title: 'Building a complete machine learning pipeline', content: 'Content for ML pipeline.' },
            ]
        },
        {
            title: "Module 5: Introduction to Deep Learning",
            lessons: [
                { type: 'content', slug: 'neural-networks-concepts', title: 'Core concepts of neural networks', content: 'Content for neural networks.' },
                { type: 'content', slug: 'tensorflow-keras-intro', title: 'Introduction to TensorFlow and Keras (or PyTorch)', content: 'Content for TensorFlow/Keras.' },
                { type: 'content', slug: 'building-a-neural-network', title: 'Building a simple neural network for classification', content: 'Content for building a neural network.' },
                { type: 'content', slug: 'activation-optimizers', title: 'Understanding activation functions and optimizers', content: 'Content for activation functions.' },
            ]
        },
        {
            title: "Final Quiz",
            lessons: [
                { 
                    slug: "quiz-q1", 
                    title: "Question 1", 
                    type: 'quiz',
                    content: `### What is the primary advantage of using Python for data science?`,
                    options: [
                        { id: 'A', text: 'Its performance is faster than C++' },
                        { id: 'B', text: 'Its simple syntax and extensive libraries' },
                        { id: 'C', text: 'It is the only language for web development' },
                        { id: 'D', text: 'It has built-in database management' },
                    ],
                    correctAnswer: 'B',
                    explanation: "Python's readability and vast ecosystem of libraries like Pandas, NumPy, and Scikit-learn make it the top choice for data scientists."
                },
                { 
                    slug: "quiz-q2", 
                    title: "Question 2", 
                    type: 'quiz',
                    content: `### Which library is most commonly used for data manipulation and analysis in Python?`,
                    options: [
                        { id: 'A', text: 'NumPy' },
                        { id: 'B', text: 'Matplotlib' },
                        { id: 'C', text: 'Pandas' },
                        { id: 'D', text: 'TensorFlow' },
                    ],
                    correctAnswer: 'C',
                    explanation: "Pandas provides high-performance, easy-to-use data structures (like the DataFrame) and data analysis tools."
                },
                { 
                    slug: "quiz-q3", 
                    title: "Question 3", 
                    type: 'quiz',
                    content: "### What does the following list comprehension do? \n`[x**2 for x in range(5)]`",
                    options: [
                        { id: 'A', text: 'Creates a list of numbers from 0 to 4.' },
                        { id: 'B', text: 'Creates a list containing the square of numbers from 0 to 4.' },
                        { id: 'C', text: 'Creates a list with the number 5 repeated twice.' },
                        { id: 'D', text: 'Throws a syntax error.' },
                    ],
                    correctAnswer: 'B',
                    explanation: "The list comprehension iterates from 0 up to (but not including) 5, and for each number `x`, it calculates `x**2` (x squared) and adds it to the new list, resulting in `[0, 1, 4, 9, 16]`."
                },
                { 
                    slug: "quiz-q4", 
                    title: "Question 4", 
                    type: 'quiz',
                    content: `### In machine learning, what is the difference between classification and regression?`,
                    options: [
                        { id: 'A', text: 'Classification predicts a continuous value, while regression predicts a discrete category.' },
                        { id: 'B', text: 'Classification is unsupervised, while regression is supervised.' },
                        { id: 'C', text: 'Classification predicts a discrete category, while regression predicts a continuous value.' },
                        { id: 'D', text: 'There is no difference.' },
                    ],
                    correctAnswer: 'C',
                    explanation: "Classification models predict a category (e.g., 'spam' or 'not spam'), whereas regression models predict a numerical value (e.g., house price)."
                },
                { 
                    slug: "quiz-q5", 
                    title: "Question 5", 
                    type: 'quiz',
                    content: `### What is the main purpose of an activation function in a neural network?`,
                    options: [
                        { id: 'A', text: 'To calculate the loss of the model.' },
                        { id: 'B', text: 'To introduce non-linearity into the network.' },
                        { id: 'C', text: 'To initialize the weights of the network.' },
                        { id: 'D', text: 'To increase the number of layers.' },
                    ],
                    correctAnswer: 'B',
                    explanation: "Without non-linear activation functions, a neural network would just be a linear model, unable to learn complex patterns in data."
                }
            ]
        }
    ]
  },
  {
    slug: 'cs-basics-get-started',
    title: 'Computer Science Basics: Everything You Need to Know to Get Started',
    description: 'This course will introduce you to the essential concepts, key terminology, and foundational topics that make up the heart of Computer Science.',
    level: 'Beginner',
    primaryCategory: 'Software Development',
    suggestedTags: ['Computer Science', 'Algorithms', 'Python'],
    image: placeholderImages.course14.src,
    rating: 5,
    students: 0,
    comments: 0,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
        {
            title: "Module 1: Introduction to Computer Science",
            lessons: [
                { 
                    slug: "what-is-cs", 
                    title: "What is Computer Science?", 
                    content: `Computer Science is the study of computers and computational systems. It involves understanding how computers process information, how software is developed, and how data is handled. While many think of Computer Science as just coding or programming, the field is far more extensive. It covers areas like data structures, algorithms, artificial intelligence, databases, and much more.\n\nFor beginners, it’s helpful to think of Computer Science as the science of problem-solving using computers. The tools and techniques learned here are applicable to solving real-world problems efficiently and effectively.`
                }
            ]
        },
        {
            title: "Module 2: Key Areas of Computer Science",
            lessons: [
                { slug: "algorithms-data-structures", title: "Algorithms and Data Structures", content: "Algorithms are step-by-step instructions that tell the computer how to perform a task. Understanding algorithms allows you to write code that solves problems in an optimized way.\n\nData Structures organize and store data. Common types include arrays, linked lists, trees, and graphs. Learning these structures is fundamental because they affect the performance of your program." },
                { slug: "programming-languages", title: "Programming Languages", content: "Programming is at the heart of Computer Science. Some popular programming languages include Python, Java, C++, and JavaScript. Each language has its strengths, and knowing the right one for the task is essential.\n\nThe 2024 syllabus focuses on Python for beginners due to its readability and widespread use in educational settings." },
                { slug: "software-engineering", title: "Software Engineering", content: "Software Engineering deals with designing, building, and maintaining software applications. It includes methodologies like Agile and Waterfall, as well as tools for version control (e.g., Git)." },
                { slug: "ai-ml", title: "Artificial Intelligence and Machine Learning", content: "AI is the simulation of human intelligence processes by machines. It includes Machine Learning, where computers learn from data to make decisions without explicit programming. The 2024 syllabus emphasizes the growing importance of AI in fields like healthcare, finance, and robotics." },
                { slug: "databases", title: "Databases", content: "Understanding how to organize, store, and retrieve data is crucial for any programmer. Databases like MySQL and MongoDB are commonly used in real-world applications." },
                { slug: "networking-security", title: "Networking and Security", content: "Networking is about connecting computers and systems, allowing them to communicate and share resources. It covers everything from local networks to the global Internet.\n\nCybersecurity ensures the protection of data and systems from malicious threats. In the 2024 syllabus, this area focuses on encryption, firewalls, and secure software development practices." }
            ]
        },
        {
            title: "Module 3: The 2024 Syllabus Overview",
            lessons: [
                { slug: "programming-fundamentals", title: "Fundamentals of Programming", content: "Students are introduced to basic programming concepts, using languages like Python. Topics covered include variables, data types, loops, conditionals, and functions." },
                { slug: "problem-solving-techniques", title: "Problem-Solving Techniques", content: "Problem-solving is a critical skill for any computer scientist. The syllabus encourages students to break down problems into smaller, manageable parts using algorithms and data structures." },
                { slug: "computer-systems", title: "Understanding Computer Systems", content: "Basic hardware concepts like CPUs, memory, and storage are covered, providing students with an understanding of how software interacts with hardware." },
                { slug: "web-development-intro", title: "Introduction to Web Development", content: "Basic HTML, CSS, and JavaScript are introduced to help students understand how websites are created and structured." },
                { slug: "ethical-computing", title: "Ethical Computing", content: "With technology advancing rapidly, students are also taught the ethical implications of computing. This includes data privacy, the environmental impact of technology, and the importance of ethical decision-making in software development." }
            ]
        },
        {
            title: "Module 4: Your Journey in Computer Science",
            lessons: [
                { slug: "why-learn-cs", title: "Why Learn Computer Science?", content: "Versatility and Career Opportunities: Computer Science is a gateway to a wide range of careers. From software development to data science, cybersecurity, and AI, there is an increasing demand for skilled professionals.\n\nProblem-Solving and Critical Thinking: Learning Computer Science enhances your ability to approach problems logically and solve them efficiently. It encourages critical thinking, pattern recognition, and creativity.\n\nInnovation and Future-Proofing: With technology constantly evolving, understanding Computer Science positions you for future innovations in fields like quantum computing, AI, and blockchain." },
                { slug: "how-to-start", title: "How to Start Your Journey", content: "If you’re a complete beginner, don’t worry! Here’s how you can get started:\n\n1.  **Pick a Programming Language**: Start with Python, which is simple, easy to understand, and powerful enough for advanced topics. Numerous online platforms like Codecademy, freeCodeCamp, and Coursera offer free resources to learn programming.\n2.  **Practice Problem-Solving**: Websites like LeetCode and HackerRank provide practice problems that help you improve your algorithmic thinking and coding skills.\n3.  **Build Small Projects**: Apply what you’ve learned by building simple projects. Start with things like a calculator, a to-do list, or a personal blog. These projects will give you hands-on experience and make abstract concepts concrete.\n4.  **Explore Advanced Topics**: Once you’re comfortable with the basics, dive into more advanced topics like data structures, algorithms, and AI. Participate in open-source projects and collaborate with others to grow your skills." }
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
