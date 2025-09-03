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
        { id: "skill_1", text: "React", value: 50 },
        { id: "skill_2", text: "JavaScript", value: 40 },
        { id: "skill_3", text: "HTML5", value: 60 },
/**
 * BACK END DEVELOPMENT| Java • Python • Spring • Express • NodeJS
DATA PIPELINES| Amazon Redshift • Amazon EFS • 53
MISCELLANEOUS| Amazon AWS • Recommendations • Collaborative filtering • Machine learning • MongoDB
FRONT END DEVELOPMENT| ReactiS • Redux • JavaScript • Bootstrap • Materialize • HTML • CSS
SOFT SKILLS| Team player • Bias for action • Deliver results
 */
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
            school: "UNIVERSITY OF ILLINOUS - URBANA CHAMPAIGN (UIUC)",
            degree: "M.S., Mechanical Engineering",
            city: "Urbana-Champaign, IL",
            startDate: "2016",
            endDate: "Dec 2016",
            description: [
                { id: "des1", text: "GPA: 3.74/4" },
                // { id: "des2", text: "Top 1% of graduating class" },
            ]
        },
        {
            id: "edu2",
            school: "INDIAN INSTITUTE OF TECHNOLOGY DELHI (ITD)",
            degree: "B.S., Mechanical Engineering",
            city: "New Delhi, India",
            startDate: "2015",
            endDate: "May 2014 ",
            description: [
                { id: "des1", text: "GPA: 8.98/10" },
                // { id: "des2", text: "Top 5% of graduating class" },
            ]
        },
        /*


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
        }, */
    ],

    experience: [
        {
            id: "exp1",
            role: " Software Engineer |",
            organization: "AMAZON ",
            location: "Seattle, WA",
            startDate: " Jul 2019",
            endDate: "Present",
            description: [
                { id: 'des1', text: "Ideated and developed a new strategy to recommend Amazon's Choice items related to customer's incomplete missions" },
                { id: 'des2', text: "Led technical architecture discussions with Amazon's Choice and Amazon API teams and designed user experience with Amazon Gateway team" },
                { id: 'des3', text: "Built a data pipeline with Amazon Redshift and Amazon EFS to use offline data, thereby limiting traffic for Amazon's Choice service and eliminating scalability issues" },
                { id: 'des4', text: "Ideated and developed a new strategy to recommend Amazon's Choice items related to customer's incomplete missions" },
                { id: 'des5', text: "Led technical architecture discussions with Amazon's Choice and Amazon API teams and designed user experience with Amazon Gateway team" },
                { id: 'des6', text: "Built a data pipeline with Amazon Redshift and Amazon EFS to use offline data, thereby limiting traffic for Amazon's Choice service and eliminating scalability issues" },
                { id: 'des7', text: "Ideated and developed a new strategy to recommend Amazon's Choice items related to customer's incomplete missions" },
                { id: 'des8', text: "Led technical architecture discussions with Amazon's Choice and Amazon API teams and designed user experience with Amazon Gateway team" },
                { id: 'des9', text: "Built a data pipeline with Amazon Redshift and Amazon EFS to use offline data, thereby limiting traffic for Amazon's Choice service and eliminating scalability issues" },
            ]
        },
        {
            id: "exp2",
            role: "Software Engineer ",
            organization: "FINTECH CORPORATION",
            location: "Chicago,IL",
            startDate: "Jan 2017",
            endDate: "Jun 2019,",
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
            title: 'CHARAK SCHOLARSHIP',
            description: [
                { id: "des1", text: 'for top 35 exchange students from india|French Embassy | 2012 | New Delhi' }
            ]
        },
        {
            id: "awr2",
            title: 'DIRECTORS MERIT AWARD',
            description: [
                { id: "des1", text: 'For top 7 percent students in the class | IT Delhi | 2011 | New Delhi' }
            ]
        },
        {
            id: "awr3",
            title: 'K. VASUDEVAN AWARD',
            description: [
                { id: "des1", text: 'For topping the institute among 850 students| IT Delhi | 2011 | New Delhi' }
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


// EXPERIENCE
//  - , 
// Amazon's Choice recommendations for incon
// Lete missions
// • 
// • 
// • 
// Personalized. recommendations.with.Topic.Modeling
// • Implemented a recommendation feature in Java using topics and incomplete missions of customers to improve recommendations on Amazon
// • Built an extensible 'filters' module to remove Adult topics from final dataset
// Complementary.recommendations.for Hardlines
// • Ideated and developed a new algorithm using Collaborative Filtering to improve coverage of complementary recommendations for 500 million products on Amazon
// • Created a data pipeline using Amazon EFS, Amazon Distributed Data Service and Amazon Distributed Job Service to create fresh dataset at regular intervals
// • Implemented multiprocessing and LRU cache in Python to solve scalability challenges
// • Conducted A/B tests and used Bayesian inference to launch the feature on Amazon
// Mitigating the impact.of.Black.Hole Effect.on. Recommendation Service
// • Performed stress test on the service after artificially creating black hole effect. Black Hole Effect occurs when unhealthy host gets disproportionate share of requests because Load Balancer is configured to use least connections algorithm
// • Alleviated the impact of black hole effect by adding time delay to error responses
// Experiments altogether generated more than $X million incremental revenue for Amazon and played a pivotal role in achieving annual team goal
// FINTECH CORPORATION
// Software Engineer | Jan 2017 - Jun 2019, Chicago, IL
// • Implemented API for custom order management and execution
// • Developed and tested regional solutions tailored for stock exchanges of Americas