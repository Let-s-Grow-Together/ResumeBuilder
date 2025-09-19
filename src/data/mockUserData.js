const rawMockUserData = {
    firstName: "MARKO",
    lastName: "KEVINARS",
    position: "GRAPHIC DESIGNER",
    profilePhoto: `data:image/jpeg;base64,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`,
    summary: [
        { id: "summary_1", text: "My Name Is Marko Kevienars lorem empus id is fringilla molestie ornare diam in olestie ipsum etium rosn ollicitudin estporttitor amet hitmassa Done cporttitor dolor shit dolor amet tiren lorem nist molestie pretium etfring is the shitp lorem ipcum retiumci amet" },
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

    "skills": [
        {
            "category": "FRONT END DEVELOPMENT",
            "items": [
                { "name": "React", "value": 50 },
                { "name": "JavaScript", "value": 40 },
            ]
        },
        {
            "category": "BACK END DEVELOPMENT",
            "items": [
                { "name": "Java", "value": 30 },
                { "name": "Python", "value": 50 },
            ]
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
        /* {
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
        }, */
    ],

    experience: [
        {
            items: [
                {
                    id: "exp1",
                    role: "Software Engineer |",
                    organization: "AMAZON",
                    location: "Seattle, WA",
                    startDate: "Jul 2019",
                    endDate: "Present",
                    techStack: "Java, Spring, Python, AWS, Machine Learning, Recommendations",
                    description: [
                        {
                            id: "des1",
                            text: "Ideated and developed a new strategy to recommend Amazon's Choice items related to customer's incomplete missions"
                        },
                    ]
                },
                {
                    id: "exp2",
                    role: "Software Engineer",
                    organization: "FINTECH CORPORATION",
                    location: "Chicago, IL",
                    startDate: "Jan 2017",
                    endDate: "Jun 2019",
                    description: [
                        {
                            id: "des1",
                            text: "Built reusable React components that were generic and can be changed according to developers needs"
                        },
                        {
                            id: "des2",
                            text: "Integrated REST APIs"
                        },
                    ]
                }
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