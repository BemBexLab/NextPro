import Location from "../../../public/icons/location";
import TimeSquare from "../../../public/icons/timeSquare";
import Work from "../../../public/icons/work";

export const jobsData = [
  {
    id: 1,
    position: {
      icon: <Work width={25} height={26} />,
      position_name: "Business Manager"
    },
    job_nature: {
      icon: <TimeSquare />,
      nature: "Full Time"
    },
    location: {
      icon: <Location />,
      location: "California"
    },
    summary: `Join our leadership team as a Business Manager, overseeing daily operations, developing business strategies, and ensuring company goals are met. You’ll coordinate across departments and foster a collaborative, growth-driven environment.`,
    responsibilities: [
      "Develop and implement effective business strategies and programs.",
      "Monitor operational performance and suggest improvements.",
      "Manage budgets, forecasts, and resource allocation.",
      "Lead, motivate, and support teams across multiple departments.",
      "Analyze market trends and identify business growth opportunities.",
      "Establish strong relationships with partners and stakeholders."
    ],
    qualifications: [
      "Bachelor’s degree in Business Administration, Management, or a related field.",
      "5+ years of experience in business management or similar roles.",
      "Excellent leadership, organizational, and communication skills.",
      "Proven ability to drive business growth and manage budgets.",
      "Analytical mindset with strong problem-solving skills."
    ],
    experience: "5+ Years",
    salary: "$95,000 – $120,000 / year"
  },

  {
    id: 2,
    position: {
      icon: <Work />,
      position_name: "Support Ninja"
    },
    job_nature: {
      icon: <TimeSquare />,
      nature: "Full Time"
    },
    location: {
      icon: <Location />,
      location: "Anywhere"
    },
    summary: `We’re looking for a friendly and proactive Support Ninja to deliver outstanding customer service and technical support. You’ll troubleshoot issues, resolve customer queries, and ensure a seamless experience for our users.`,
    responsibilities: [
      "Provide fast and effective support via chat, email, and phone.",
      "Troubleshoot product and technical issues with clarity and patience.",
      "Document and escalate complex cases to the technical team.",
      "Contribute to our internal knowledge base and help articles.",
      "Deliver personalized solutions for customer needs.",
      "Gather feedback to help improve our products and services."
    ],
    qualifications: [
      "Bachelor’s degree or equivalent experience.",
      "2+ years in a technical support or customer service role.",
      "Excellent communication and problem-solving skills.",
      "Comfortable with learning new technologies quickly.",
      "Empathetic, patient, and genuinely enjoys helping others."
    ],
    experience: "2+ Years",
    salary: "$40,000 – $55,000 / year"
  },

  {
    id: 3,
    position: {
      icon: <Work />,
      position_name: "Digital Assistant"
    },
    job_nature: {
      icon: <TimeSquare />,
      nature: "Full Time"
    },
    location: {
      icon: <Location />,
      location: "California"
    },
    summary: `Seeking a reliable Digital Assistant to support our team with a range of administrative and digital marketing tasks. Ideal for someone who’s organized, tech-savvy, and eager to help teams work efficiently.`,
    responsibilities: [
      "Manage email communications and schedule appointments.",
      "Assist with content updates, basic website management, and social media posts.",
      "Prepare presentations and organize digital files.",
      "Help monitor and report on campaign performance.",
      "Conduct research and gather data for projects.",
      "Provide ad-hoc support to marketing and operations teams."
    ],
    qualifications: [
      "Associate’s or Bachelor’s degree preferred.",
      "1+ years’ experience as a virtual or digital assistant.",
      "Proficient in Microsoft Office/Google Workspace and social media tools.",
      "Strong organizational and time-management skills.",
      "Ability to handle sensitive information with confidentiality."
    ],
    experience: "1-2 Years",
    salary: "$32,000 – $45,000 / year"
  }
];
