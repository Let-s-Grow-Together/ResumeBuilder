const mockUserData = {
    firstName: "Jane",
    lastName: "Doe",
    position: "Web Developer",
    profilePhoto: "https://media-public.canva.com/p7zgk/MAEugcp7zgk/1/t.jpg",
    summary: 'Jane Doe is a very good coder no one can beat him !',
    contact: [
        {
            icon: "email",
            textShown: "jane.doe@example.com",
        },
        {
            icon: "phone",
            textShown: "+91 9876543210",
        },
        {
            icon: "address",
            textShown: "123, Park Lane, Delhi, India",
        },
        {
            icon: "portfolio",
            textShown: "My Portfolio",
        },
        {
            icon: "github",
            textShown: "GitHub Profile",
        },
        {
            icon: "linkedin",
            textShown: "LinkedIn Profile",
        }
    ],

    skills: ["JavaScript", "React", "HTML5", "CSS3", "Git & GitHub"],
    skillsDisplayType: "block",
    
    projects: [
        {
            Title: "Weather App",
            Link: "https://github.com/janeDoe/weather-app",
            GithubLink: "",
            Description: [
                { id: "uuid1", text: "Built a weather forecast app..." },
                { id: "uuid2", text: "Implemented search by city..." },
                { id: "uuid3", text: "Displayed real time weather" },
            ]
        },
        {
            Title: "Weather App",
            Link: "https://github.com/janeDoe/weather-app",
            GithubLink: "",
            Description: [
                { id: "uuid1", text: "Built a weather forecast app..." },
                { id: "uuid2", text: "Implemented search by city..." },
                { id: "uuid3", text: "Displayed real time weather" },
            ]
        },
    ],

    achievements: [
        {
            Title: "Top 5 Finalist - Hackathon",
            Description: "Built a disaster alert app during a 24-hour..."
        },
        {
            Title: "Open Source Contributor",
            Description: "Contributed to documentation and bug fixes..."
        }
    ],

    education: [
        {
            School: "ABC Public School",
            Degree: "Senior Secondary (Science)",
            City: "Delhi",
            "Start Date": "2017",
            "End Date": "2019",
            Description: [
                { id: "edu1", text: "Scored 8.9 CGPA in Class 10" },
                { id: "edu2", text: "Top 5% of graduating class" },
            ]
        },
        {
            School: "XYZ Institute of Technology",
            Degree: "B.Tech in Computer Science",
            City: "Delhi",
            "Start Date": "2019",
            "End Date": "2023",
            Description: [
                { id: "edu1", text: "Scored 8.9 CGPA in Class 10" },
                { id: "edu2", text: "Top 5% of graduating class" },
            ]
        }
    ],

    experience: [
        {
            Role: "Frontend Developer Intern",
            Organization: "TechNova Pvt Ltd",
            Location: "Remote",
            "Start Date": "2023",
            "End Date": "2024",
            Description: [
                { id: 'desc1', text: "Built reusable React components" },
                { id: 'desc2', text: "Integrated REST APIs" },
                { id: 'desc3', text: "Improved UI performance" },
            ]
        },
        {
            Role: "Frontend Developer Intern",
            Organization: "TechNova Pvt Ltd",
            Location: "Remote",
            "Start Date": "2023",
            "End Date": "2024",
            Description: [
                { id: 'desc1', text: "Built reusable React components" },
                { id: 'desc2', text: "Integrated REST APIs" },
                { id: 'desc3', text: "Improved UI performance" },
            ]
        }
    ],

    certifications: [
        {
            Title: "React - Frontend Library",
            Organization: "freeCodeCamp",
            Date: "2023"
        },
        {
            Title: "Responsive Web Design",
            Organization: "Coursera",
            Date: "2022"
        }
    ],
    organizations: [
        {
            Title: "American Management Association",
            Date: "(2015-Present)"
        },
        {
            Title: "Association of Private Enterprise Education",
            Date: "(2014-Present)"
        }
    ],
    strengths: [
        {
            Title: "Strategic Planning",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia et ut facilis dolorem debitis provident eos"
        },
        {
            Title: "Collaboration",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia"
        },
        {
            Title: "Media Relations",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia"
        }
    ],
    language: ["English", "Spanish", "French"],
    awards: [
        {
            Title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
            Date: 'Venture(USA)'
        },
        {
            Title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
            Date: 'Venture(USA)'
        },
        {
            Title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
            Date: 'Venture(USA)'
        }
    ]
};

export default mockUserData;

