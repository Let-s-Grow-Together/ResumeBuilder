const rawMockUserData = {
    firstName: "MARKO",
    lastName: "KEVINARS",
    position: "GRAPHIC DESIGNER",
    profilePhoto: "https://media-public.canva.com/p7zgk/MAEugcp7zgk/1/t.jpg",
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
        { id: "skill_2", text: "JavaScript", value: "40"  },
        { id: "skill_3", text: "HTML5", value: "60"  },
        { id: "skill_4", text: "CSS3", value: "70"  },
        { id: "skill_5", text: "Git & GitHub", value: "20"  },
    ],

    language: [
        { id: "lang_1", text: "English" },
        { id: "lang_2", text: "German" },
        { id: "lang_3", text: "French" },
        { id: "lang_4", text: "Russian" },
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
        {
            id: "edu3",
            school: "ABC Public School",
            degree: "Junior Secondary (Science)",
            city: "Delhi",
            startDate: "2013",
            endDate: "2014",
            description: [
                { id: "des1", text: "Scored 9.5 CGPA in Class 10" },
                { id: "des2", text: "Top 2% of graduating class" },
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