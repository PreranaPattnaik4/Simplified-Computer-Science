
import { User, Calendar, Folder } from 'lucide-react';
import Image from 'next/image';

const BlogHeader = ({ title, description }: { title: string, description: string }) => (
    <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left">
        <div className="w-full md:w-2/3">
          <div className="h-1 w-16 bg-accent mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </section>
);

const InterviewTip = ({ number, title, children }: { number: number, title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">{number}. {title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{children}</p>
    </div>
);

export default function InterviewTipsPage() {
  const pageDescription = "Corporate interviews are a crucial step in securing your dream job. As we step into 2025, the job market continues to evolve, making it even more important to stay ahead of the curve.";
  
  return (
    <div className="bg-white">
      <BlogHeader 
          title="20 Essential Tips to Ace Corporate Interviews in 2025"
          description={pageDescription}
      />
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex justify-start items-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <User size={16} /> Prerana
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Calendar size={16} /> July 1, 2024
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Folder size={16} /> Interview Tips, Career
            </div>
        </div>
        
        <div className="prose lg:prose-xl max-w-none mx-auto text-muted-foreground">
            <p className="lead text-xl mb-8">
                Whether you are a fresher or an experienced professional, mastering the interview process is key to standing out among other candidates. To help you succeed, we’ve compiled 20 essential tips that will guide you through the process and make sure you’re ready to impress.
            </p>
        </div>

        <div className="mt-8">
            <InterviewTip number={1} title="Research the Company">
                Before stepping into any interview, do thorough research on the company. Understand its culture, values, recent news, and the industry it operates in. This will show your genuine interest in the company and help you tailor your responses.
            </InterviewTip>
            <InterviewTip number={2} title="Know the Job Description">
                Read the job description carefully and understand the role’s key responsibilities. Highlight the skills and experience you have that match the job requirements, and be ready to discuss them.
            </InterviewTip>
            <InterviewTip number={3} title="Prepare Your Elevator Pitch">
                An elevator pitch is a short summary of who you are, your professional background, and what you can bring to the table. Have it ready for the “Tell me about yourself” question. Keep it concise, impactful, and relevant.
            </InterviewTip>
            <InterviewTip number={4} title="Practice Common Interview Questions">
                While every interview is different, there are certain questions that are almost always asked, such as: “Tell me about yourself,” “What are your strengths and weaknesses?,” and “Why do you want to work here?” Prepare answers to these questions so you can respond confidently.
            </InterviewTip>
            <InterviewTip number={5} title="Showcase Your Soft Skills">
                While technical skills are important, employers also value soft skills such as communication, teamwork, and problem-solving. Make sure you highlight these qualities through examples from your past experience.
            </InterviewTip>
            <InterviewTip number={6} title="Dress Professionally">
                Your appearance is one of the first things the interviewer will notice. Dress appropriately for the company’s culture and the role you’re applying for. When in doubt, it’s better to be slightly overdressed than underdressed.
            </InterviewTip>
            <InterviewTip number={7} title="Arrive Early">
                Punctuality is a sign of professionalism. Arrive at least 10-15 minutes early for your interview to show that you value the opportunity and respect the interviewer’s time.
            </InterviewTip>
            <InterviewTip number={8} title="Be Confident but Humble">
                Confidence is important, but don’t come off as arrogant. Stay calm, make eye contact, and listen actively. Show your enthusiasm for the role and company, but remain humble.
            </InterviewTip>
            <InterviewTip number={9} title="Bring Copies of Your Resume">
                Even if the interviewer has already seen your resume, bring printed copies to the interview. This demonstrates preparedness and professionalism.
            </InterviewTip>
            <InterviewTip number={10} title="Prepare Questions for the Interviewer">
                At the end of the interview, you’ll likely be asked, “Do you have any questions for us?” Always have thoughtful questions ready, such as: “What does success look like in this role?” or “How do you support professional development within the company?”
            </InterviewTip>
            <InterviewTip number={11} title="Use the STAR Technique for Behavioral Questions">
                For behavioral questions, use the STAR technique: Situation: Describe the context. Task: Explain the task you had to complete. Action: Discuss the actions you took. Result: Share the outcome.
            </InterviewTip>
            <InterviewTip number={12} title="Highlight Relevant Experience">
                When answering questions, relate your responses to your previous work experience. Focus on achievements and contributions that are relevant to the job you’re interviewing for.
            </InterviewTip>
            <InterviewTip number={13} title="Stay Positive">
                Avoid speaking negatively about past employers or colleagues. Always stay positive, even when discussing challenges or difficult situations. Employers want to see how you handle adversity with a positive attitude.
            </InterviewTip>
            <InterviewTip number={14} title="Practice Mock Interviews">
                Conduct mock interviews with friends or mentors to simulate the real experience. This will help you get comfortable with the interview process and boost your confidence.
            </InterviewTip>
            <InterviewTip number={15} title="Master Your Body Language">
                Non-verbal communication is just as important as what you say. Maintain good posture, use hand gestures when appropriate, and avoid crossing your arms, which can appear defensive.
            </InterviewTip>
            <InterviewTip number={16} title="Focus on Achievements, Not Just Responsibilities">
                When discussing your past roles, focus on what you achieved rather than just listing your responsibilities. Share measurable results, like increased sales, improved efficiency, or successful project completions.
            </InterviewTip>
            <InterviewTip number={17} title="Be Honest About Gaps in Employment">
                If you have employment gaps, be prepared to explain them honestly. Focus on what you learned during that time and how it contributed to your personal or professional growth.
            </InterviewTip>
            <InterviewTip number={18} title="Stay Calm Under Pressure">
                Interviewers may ask tough or unexpected questions to test how you handle pressure. Stay calm, take a deep breath, and respond thoughtfully. If you don’t know the answer, it’s okay to say so and offer to follow up later.
            </InterviewTip>
            <InterviewTip number={19} title="Follow-Up with a Thank-You Note">
                After the interview, send a thank-you email expressing your appreciation for the opportunity. This simple gesture demonstrates professionalism and reinforces your interest in the role.
            </InterviewTip>
            <InterviewTip number={20} title="Keep Learning and Improving">
                The interview process is a learning experience. Whether you land the job or not, take note of what went well and what could be improved for your next interview. Continuous improvement is key to success in the long run.
            </InterviewTip>
        </div>

        <div className="mt-12 text-center text-lg text-muted-foreground prose lg:prose-xl max-w-none mx-auto">
           <p>Acing a corporate interview requires preparation, confidence, and the ability to communicate your skills and experiences effectively. By following these 20 tips for 2025, you’ll increase your chances of making a great impression and landing the job. Remember, interviews are a two-way street—while you’re assessing whether the company is a good fit for you, they’re also evaluating if you are the right fit for them. So, approach each interview with the mindset of a collaborative conversation, and you’ll be on your way to success!</p>
            <p><strong>Good luck, and happy interviewing!</strong></p>
        </div>
        
      </main>
    </div>
  );
}
