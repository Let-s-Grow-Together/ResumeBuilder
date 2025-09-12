const rawMockUserData = {
    firstName: "MARKO",
    lastName: "KEVINARS",
    position: "GRAPHIC DESIGNER",
    profilePhoto: ``,
    summary: [
        { id: "summary_1", text: "My Name Is Marto Kevienars lorem empus id is fringilla molestie ornare diam in olestie ipsum etium rosn ollicitudin estporttitor amet hitmassa Done cporttitor dolor shit dolor amet tiren lorem nist molestie pretium etfring is the shitp lorem ipcum retiumci amet" },
    ],
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

    skills: [
        { id: "skill_1", text: "React", value: "50" },
        { id: "skill_2", text: "JavaScript", value: "40" },
        { id: "skill_3", text: "HTML5", value: "60" },
        { id: "skill_4", text: "CSS3", value: "70" },
        { id: "skill_5", text: "Git & GitHub", value: "20" },
        {
            id: "s1",
            category: "FRONT END DEVELOPMENT |",
            items: ["ReactJS", "Redux", "JavaScript", "HTML", "CSS"]
        },
        {
            id: "s1",
            category: "BACK END DEVELOPMENT |",
            items: ["Java", "Python", "Spring", "Express", "NodeJS"]
        },
        {
            id: "s2",
            category: "SOFT SKILLS |",
            items: ["Team player", "Bias for action", "Deliver results"]
        },
        {
            id: "s1",
            category: "DATA PIPELINES |",
            items: ["Amazon Redshift", "Amazon EFS", "53",]
        },
    ],

    interests: [
        { id: "int_1", text: "Travel", icon: "✈️" },
        { id: "int_2", text: "Fitness", icon: "💪" },
        { id: "int_3", text: "Nutrition", icon: "🥗" },
        { id: "int_4", text: "Coding", icon: "💻" },
    ],

    language: [
        { id: "lang_1", text: "English" },
        { id: "lang_2", text: "German" },
        { id: "lang_3", text: "French" },
        { id: "lang_4", text: "Russian" },
    ],
    coursework: [
        { id: "cw_1", text: "Data Structures and Algorithms" },
        { id: "cw_2", text: "Developing Android Apps" },
        { id: "cw_3", text: "Machine Learning" },
        { id: "cw_4", text: "Data Mining" },
        { id: "cw_5", text: "Applied Statistics" },
        { id: "cw_6", text: "Linear Algebra" },
        { id: "cw_7", text: "Differential Equations" },
        { id: "cw_8", text: "Robotics: Mechanical Design" }
    ],


    
   projects: [
        {
            id: "proj1",
            title: "Weather App",
            link: "https://github.com/janeDoe/weather-app",
            githubLink: "",
            description: [
                { id: "des1", text: "Built a weather forecast app..." },
                { id: "des2", text: "Implemented search by city..." },
                { id: "des3", text: "Displayed real time weather" },
            ]
        },
        {
            id: "proj2",
            title: "Weather App",
            link: "https://github.com/janeDoe/weather-app",
            githubLink: "",
            description: [
                { id: "des1", text: "Built a weather forecast app..." },
                { id: "des2", text: "Implemented search by city..." },
                { id: "des3", text: "Displayed real time weather" },
            ]
        },
    ],
    education: [
        {
            id: "edu1",
            school: "XYZ Institute of Technology",
            degree: "B.Tech in Computer Science",
            city: "Delhi",
            startDate: "2016",
            endDate: "2020",
            description: [
                { id: "des1", text: "Scored 8.5 CGPA" },
                { id: "des2", text: "Top 1% of graduating class" },
            ]
        },
        {
            id: "edu2",
            school: "ABC Public School",
            degree: "Senior Secondary (Science)",
            city: "Delhi",
            startDate: "2015",
            endDate: "2016",
            description: [
                { id: "des1", text: "Scored 8.9 CGPA in Class 12" },
                { id: "des2", text: "Top 5% of graduating class" },
            ]
        },
       
    ],

    experience: [
        {
            id: "exp1",
            role: "Senior Web Designer",
            organization: "Art Creative Solution",
            location: "Remote",
            startDate: "2023",
            endDate: "2024",
            description: [
                { id: 'des1', text: "Built reusable React components" },
                { id: 'des2', text: "Integrated REST APIs" },
                { id: 'des3', text: "Improved UI performance of various projects" },
            ]
        },
        {
            id: "exp2",
            role: "Junior Web Designer",
            organization: "Art Creative Solution",
            location: "Remote",
            startDate: "2021",
            endDate: "2023",
            description: [
                { id: 'des1', text: "Built reusable React components that were generic and can be changed according to developers needs" },
                { id: 'des2', text: "Integrated REST APIs" },
                { id: 'des3', text: "Improved UI performance in main project of the company" },
            ]
        }
    ],

    certifications: [
        {
            id: "cer1",
            title: "React - Frontend Library",
            organization: "freeCodeCamp",
            date: "2023",
            description: [
                { id: 'des1', text: "Built reusable React components" },
                { id: 'des2', text: "Integrated REST APIs" },
                { id: 'des3', text: "Improved UI performance" },
            ]
        },
        {
            id: "cer2",
            title: "Responsive Web Design",
            organization: "Coursera",
            date: "2022",
            description: [
                { id: 'des1', text: "Built reusable React components" },
                { id: 'des2', text: "Integrated REST APIs" },
                { id: 'des3', text: "Improved UI performance" },
            ]
        }
    ],

    achievements: [
        {
            id: "ach1",
            title: "Top 5 Finalist - Hackathon",
            description: [
                { id: "des1", text: "Built a disaster alert app during a 24-hour..." }
            ]
        },
        {
            id: "ach2",
            title: "Open Source Contributor",
            description: [
                { id: "des1", text: "Contributed to documentation and bug fixes..." }
            ]
        }
    ],

    organizations: [
        {
            id: "org1",
            title: "American Management Association",
            description: [
                { id: "des1", text: "Contributed to documentation and bug fixes..." }
            ]
        },
        {
            id: "org2",
            title: "Association of Private Enterprise Education",
            description: [
                { id: "des1", text: "Contributed to documentation and bug fixes..." }
            ]
        }
    ],

    strengths: [
        {
            id: "str1",
            title: "Strategic Planning",
            description: [
                { id: "des1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia et ut facilis dolorem debitis provident eos" }
            ]
        },
        {
            id: "str2",
            title: "Collaboration",
            description: [
                { id: "des1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia" }
            ]
        },
        {
            id: "str3",
            title: "Media Relations",
            description: [
                { id: "des1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia" }
            ]
        }
    ],

    awards: [
        {
            id: "awr1",
            title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
            description: [
                { id: "des1", text: 'Venture(USA)' }
            ]
        },
        {
            id: "awr2",
            title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
            description: [
                { id: "des1", text: 'Venture(USA)' }
            ]
        },
        {
            id: "awr3",
            title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
            description: [
                { id: "des1", text: 'Venture(USA)' }
            ]
        }
    ]
};

const addUniqueIdsToDescriptions = (data) => {
    const categories = [
        'projects', 'education', 'experience',
        'certifications', 'achievements',
        'organizations', 'strengths', 'awards'
    ];

    categories.forEach(category => {
        if (data[category]) {
            data[category].forEach(item => {
                if (item.description && Array.isArray(item.description)) {
                    item.description.forEach((desc, index) => {
                        desc.id = `${item.id}des${index + 1}`;
                    });
                }
            });
        }
    });

    return data;
};

const mockUserData = addUniqueIdsToDescriptions(rawMockUserData);

export default mockUserData;

/* const mockUserData = [
    {
        type: "profile",
        label: "Profile",
        data: [
            { label: "First Name", value: "MARKO", type: "text" },
            { label: "Last Name", value: "KEVINARS", type: "text" },
            { label: "Position", value: "GRAPHIC DESIGNER", type: "text" },
            { label: "Profile Photo", value: "https://media-public.canva.com/p7zgk/MAEugcp7zgk/1/t.jpg", type: "image" }
        ]
    },
    {
        type: "summary",
        label: "Summary",
        data: [
            { label: "summary", value: "My name is Marto Kevienars...",type:"text" }
        ]
    },
    {
        type: "contact",
        label: "Contact Information",
        data: [
            { icon: "email", label: "email", value: "jane.doe@example.com", type: "email" },
            { icon: "phone", label: "phone", value: "+91 9876543210", type: "phone" },
            { icon: "portfolio", label: "portfolio", value: "My Portfolio", type: "link" },
            { icon: "github", label: "GitHub", value: "GitHub Profile", type: "link" },
            { icon: "linkedin", label: "LinkedIn", value: "LinkedIn Profile", type: "link" }
        ]
    },
    {
        type: "skills",
        label: "Skills",
        data: [
            { label: "React", value: 50, type: "percentage" },
            { label: "JavaScript", value: 40, type: "percentage" },
            { label: "HTML5", value: 60, type: "percentage" },
            { label: "CSS3", value: 70, type: "percentage" },
            { label: "Git & GitHub", value: 20, type: "percentage" }
        ]
    },
    {
        type: "languages",
        label: "Languages",
        data: [
            { label: "language", value: "English", type: "text" },
            { label: "language", value: "German", type: "text" },
            { label: "language", value: "French", type: "text" },
            { label: "language", value: "Russian", type: "text" }
        ]
    },
    {
        type: "projects",
        label: "Projects",
        data: [
            [
                { label: "title", value: "Weather App", type: "text" },
                { label: "link", value: "https://github.com/janeDoe/weather-app", type: "link" },
                {
                    label: "description",
                    value: [
                        "Built a weather forecast app...",
                        "Implemented search by city...",
                        "Displayed real-time weather"
                    ],
                    type: "list"
                }
            ],
            [
                { label: "title", value: "Weather App", type: "text" },
                { label: "link", value: "https://github.com/janeDoe/weather-app", type: "link" },
                { label: "description", value: ["Built a weather forecast app...", "Implemented search by city...", "Displayed real-time weather"], type: "list" }
            ]
        ]
    },
    {
        type: "education",
        label: "Education",
        data: [
            [
                { label: "degree", value: "B.Tech in Computer Science", type: "text" },
                { label: "school", value: "XYZ Institute of Technology", type: "text" },
                { label: "city", value: "Delhi", type: "text" },
                { label: "duration", value: "2016 - 2020", type: "text" },
                { label: "description", value: ["Scored 8.5 CGPA", "Top 1% of graduating class"], type: "list" }
            ],
            [
                { label: "degree", value: "Senior Secondary (Science)", type: "text" },
                { label: "school", value: "ABC Public School", type: "text" },
                { label: "city", value: "Delhi", type: "text" },
                { label: "duration", value: "2015 - 2016", type: "text" },
                { label: "description", value: ["Scored 8.9 CGPA in Class 12", "Top 5% of graduating class"], type: "list" }
            ]
        ]
    },
    {
        type: "experience",
        label: "Work Experience",
        data: [
            [
                { label: "role", value: "Senior Web Designer", type: "text" },
                { label: "company", value: "Art Creative Solution", type: "text" },
                { label: "location", value: "Remote", type: "text" },
                { label: "duration", value: "2023 - 2024", type: "text" },
                { label: "description", value: ["Built reusable React components", "Integrated REST APIs", "Improved UI performance"], type: "list" }
            ],
            [
                { label: "role", value: "Junior Web Designer", type: "text" },
                { label: "company", value: "Art Creative Solution", type: "text" },
                { label: "location", value: "Remote", type: "text" },
                { label: "duration", value: "2021 - 2023", type: "text" },
                { label: "description", value: ["Built reusable React components", "Integrated REST APIs", "Improved UI performance"], type: "list" }
            ]

        ]
    },
    {
        type: "certifications",
        label: "Certifications",
        data: [
            [
                { label: "title", value: "React - Frontend Library", type: "text" },
                { label: "organization", value: "freeCodeCamp", type: "text" },
                { label: "date", value: "2023", type: "text" },
                { label: "description", value: ["Built reusable React components", "Integrated REST APIs", "Improved UI performance"], type: "list" }
            ],
            [
                { label: "title", value: "Responsive Web Design", type: "text" },
                { label: "organization", value: "Coursera", type: "text" },
                { label: "date", value: "2022", type: "text" },
                { label: "description", value: ["Built reusable React components", "Integrated REST APIs", "Improved UI performance"], type: "list" }
            ]
        ]
    },
    {
        type: "achievements",
        label: "Achievements",
        data: [
            [
                { label: "title", value: "Top 5 Finalist - Hackathon", type: "text" },
                { label: "description", value: ["Built a disaster alert app during a 24-hour hackathon"], type: "list" }
            ],
            [
                { label: "title", value: "Open Source Contributor", type: "text" },
                { label: "description", value: ["Contributed to documentation and bug fixes for an open-source project"], type: "list" }
            ]
        ]
    },
    {
        type: "organizations",
        label: "Organizations",
        data: [
            [
                { label: "title", value: "American Management Association", type: "text" },
                { label: "description", value: ["Contributed to documentation and bug fixes for AMA's website"], type: "list" }
            ],
            [
                { label: "title", value: "Association of Private Enterprise Education", type: "text" },
                { label: "description", value: ["Contributed to documentation and bug fixes for APEE's website"], type: "list" }
            ]
        ]
    },
    {
        type: "strengths",
        label: "Strengths",
        data: [
            [
                { label: "title", value: "Strategic Planning", type: "text" },
                { label: "description", value: ["Strategic thinking, strong problem-solving skills, and effective time management"], type: "list" }
            ],
            [
                { label: "title", value: "Collaboration", type: "text" },
                { label: "description", value: ["Team-oriented with a focus on achieving common goals"], type: "list" }
            ],
            [
                { label: "title", value: "Media Relations", type: "text" },
                { label: "description", value: ["Skilled at building relationships with media professionals and managing press inquiries"], type: "list" }
            ]
        ]
    },
    {
        type: "awards",
        label: "Awards",
        data: [
            [
                { label: "title", value: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)', type: "text" },
                { label: "description", value: ["Venture(USA)"], type: "list" }
            ],
            [
                { label: "title", value: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)', type: "text" },
                { label: "description", value: ["Venture(USA)"], type: "list" }
            ],
            [
                { label: "title", value: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)', type: "text" },
                { label: "description", value: ["Venture(USA)"], type: "list" }
            ]
        ]
    }
]; */
