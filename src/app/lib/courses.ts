
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
Use virtual environments (like \`conda create --name myenv python=3.8\`) to manage dependencies for different projects and avoid conflicts.` 
                },
                { 
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
                { slug: "functions-and-modules", title: "Functions and modular programming", content: "Content for functions and modules." },
                { slug: "file-io", title: "File I/O and working with data sources", content: "Content for file I/O." }
            ]
        },
        {
            title: "Module 2: Data Manipulation with NumPy and Pandas",
            lessons: [
                { slug: "intro-to-numpy", title: "Introduction to NumPy arrays and vectorized operations", content: "Content for NumPy." },
                { slug: "intro-to-pandas", title: "Pandas Series and DataFrame objects", content: "Content for Pandas." },
                { slug: "data-cleaning", title: "Data cleaning, transformation, and merging", content: "Content for data cleaning." },
                { slug: "data-aggregation", title: "Grouping, aggregation, and pivot tables", content: "Content for data aggregation." },
                { slug: "time-series-analysis", title: "Time series data analysis with Pandas", content: "Content for time series analysis." }
            ]
        },
        {
            title: "Module 3: Data Visualization with Matplotlib and Seaborn",
            lessons: [
                { slug: 'visualization-principles', title: 'Principles of effective data visualization', content: 'Content for visualization principles.' },
                { slug: 'matplotlib-plotting', title: 'Creating various plot types with Matplotlib', content: 'Content for Matplotlib.' },
                { slug: 'seaborn-plotting', title: 'Statistical data visualization with Seaborn', content: 'Content for Seaborn.' },
                { slug: 'customizing-plots', title: 'Customizing plots for presentations', content: 'Content for customizing plots.' },
            ]
        },
        {
            title: "Module 4: Machine Learning Fundamentals with Scikit-Learn",
            lessons: [
                { slug: 'ml-concepts', title: 'Introduction to machine learning concepts', content: 'Content for ML concepts.' },
                { slug: 'supervised-learning', title: 'Supervised learning: regression and classification', content: 'Content for supervised learning.' },
                { slug: 'unsupervised-learning', title: 'Unsupervised learning: clustering and dimensionality reduction', content: 'Content for unsupervised learning.' },
                { slug: 'model-evaluation', title: 'Model evaluation and cross-validation', content: 'Content for model evaluation.' },
                { slug: 'ml-pipeline', title: 'Building a complete machine learning pipeline', content: 'Content for ML pipeline.' },
            ]
        },
        {
            title: "Module 5: Introduction to Deep Learning",
            lessons: [
                { slug: 'neural-networks-concepts', title: 'Core concepts of neural networks', content: 'Content for neural networks.' },
                { slug: 'tensorflow-keras-intro', title: 'Introduction to TensorFlow and Keras (or PyTorch)', content: 'Content for TensorFlow/Keras.' },
                { slug: 'building-a-neural-network', title: 'Building a simple neural network for classification', content: 'Content for building a neural network.' },
                { slug: 'activation-optimizers', title: 'Understanding activation functions and optimizers', content: 'Content for activation functions.' },
            ]
        },
        {
            title: "Final Quiz",
            lessons: [
                { 
                    slug: "quiz-q1", 
                    title: "Question 1", 
                    content: `### Question 1: What is the primary advantage of using Python for data science?

*   A) Its performance is faster than C++
*   B) Its simple syntax and extensive libraries
*   C) It is the only language for web development
*   D) It has built-in database management

<br/>
**Correct Answer: B** 
<br/>
**Explanation:** Python's readability and vast ecosystem of libraries like Pandas, NumPy, and Scikit-learn make it the top choice for data scientists.`
                },
                { 
                    slug: "quiz-q2", 
                    title: "Question 2", 
                    content: `### Question 2: Which library is most commonly used for data manipulation and analysis in Python?

*   A) NumPy
*   B) Matplotlib
*   C) Pandas
*   D) TensorFlow

<br/>
**Correct Answer: C** 
<br/>
**Explanation:** Pandas provides high-performance, easy-to-use data structures (like the DataFrame) and data analysis tools.`
                },
                { 
                    slug: "quiz-q3", 
                    title: "Question 3", 
                    content: `### Question 3: What does the following list comprehension do? \`[x**2 for x in range(5)]\`

*   A) Creates a list of numbers from 0 to 4.
*   B) Creates a list containing the square of numbers from 0 to 4.
*   C) Creates a list with the number 5 repeated twice.
*   D) Throws a syntax error.

<br/>
**Correct Answer: B**
<br/>
**Explanation:** The list comprehension iterates from 0 up to (but not including) 5, and for each number \`x\`, it calculates \`x**2\` (x squared) and adds it to the new list, resulting in \`[0, 1, 4, 9, 16]\`.`
                },
                { 
                    slug: "quiz-q4", 
                    title: "Question 4", 
                    content: `### Question 4: In machine learning, what is the difference between classification and regression?

*   A) Classification predicts a continuous value, while regression predicts a discrete category.
*   B) Classification is unsupervised, while regression is supervised.
*   C) Classification predicts a discrete category, while regression predicts a continuous value.
*   D) There is no difference.

<br/>
**Correct Answer: C**
<br/>
**Explanation:** Classification models predict a category (e.g., 'spam' or 'not spam'), whereas regression models predict a numerical value (e.g., house price).`
                },
                { 
                    slug: "quiz-q5", 
                    title: "Question 5", 
                    content: `### Question 5: What is the main purpose of an activation function in a neural network?

*   A) To calculate the loss of the model.
*   B) To introduce non-linearity into the network.
*   C) To initialize the weights of the network.
*   D) To increase the number of layers.

<br/>
**Correct Answer: B**
<br/>
**Explanation:** Without non-linear activation functions, a neural network would just be a linear model, unable to learn complex patterns in data.`
                }
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
