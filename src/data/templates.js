const template1 = {
    id: 1,
    name: "Modern Grid",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateColumns: "1fr 1fr",
            templateRows: "auto 1fr",
            columnGap: "2rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    sections: ["personalInfo"]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["contact", "skills","Interests","Coursework", "education"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "projects", "language"]
                },
            ],
        },
        colorScheme: {
            background: "#FFFFFF",
            text: "#333333"
        }
    },
};

const template3 = {
    id: 3,
    name: "Simple Tactical",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "1fr 0.1fr 12fr",
            templateColumns: "3fr 2fr",
            rowGap: "0rem",
            columnGap: "2rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    sections: ["personalInfo"]
                },
                {
                    name: "contacts",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 3,
                    sections: ["contact"],
                },
                {
                    name: "leftColumn",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary", "workExperience", "education"]
                },
                {
                    name: "rightColumn",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["strengths", "skills", "achievements"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        fontFamily: "'Lato', sans-serif",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template8 = {
    id: 8,
    name: "Professional One Column",
    pdf: "/templates/template8.pdf",
    filteredColumn: "1",
    isAvatar: "false",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1fr",
            areas: [
                {
                    name: 'mainColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: [
                        "header",
                        "contact",
                        "summary",
                        "experience",
                        "education",
                        "achievements",
                        "skills",
                        "certifications"
                    ]
                }
            ]
        },
        padding: "20px",
        fontFamily: "'Georgia', serif",
        fontLink: "",
        fontSize: "16px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template9 = {
    id: 9,
    name: "Modern Sidebar",
    filteredColumn: "3",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1.3fr 2fr",
            columnGap: "3rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "achievements", "skills", "certificates"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["summary", "workExperience", "education", "projects"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "25px",
        fontFamily: "'Poppins', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#1c1c1c",
            primary: "#00a66f",
        }
    }
};

const template10 = {
    id: 10,
    name: "Simple Two Columns",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1fr 4fr",
            columnGap: "2rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "skills", "language"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "education", "certificates",]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "30px",
        fontFamily: "'Poppins', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#003366",
            primary: "#00a66f",
        }
    }
};

const template11 = {
    id: 11,
    name: 'Executive Professional',
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "1fr 5fr",
            templateColumns: "3fr 2fr",
            columnGap: "2rem",
            rowGap: "0rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    style: { padding: "30px", paddingBottom: "0px",paddingTop:"40px" },
                    sections: ["personalInfo"]
                },
                {
                    name: "contact",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    style: { padding: "30px", paddingBottom: "0px", paddingLeft: "0px" },
                    sections: ["contact"]
                },

                {
                    name: 'leftColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    style: { paddingLeft: "0px", marginBottom: "10px" },
                    sections: ["summary", "workExperience", "education",]
                },
                {
                    name: 'rightColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    style: { backgroundColor: "#142c45ff", borderRadius: "10px", color: "white", padding: "10px", marginBottom: "10px" },
                    sections: ["skills", "organizations", "awards"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "8mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template12 = {
    id: 12,
    name: 'Business Professional',
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "60mm auto",
            templateColumns: "70mm auto",
            columnGap: "2rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    sections: ["personalInfo"]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    style: { backgroundColor: "#e6f4f1", padding: "0px 5px 5px 20px", borderRadius: "8px" },
                    sections: ["avatar", "contact", "skills", "language"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["summary", "workExperience", "education",]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "10mm",
        fontFamily: "'Poppins', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template13 = {
    id: 13,
    name: 'Dual Tone Professional',
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "80mm auto",
            columnGap: "2rem",
            areas: [
                {
                    name: "leftColumn",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    style: { backgroundColor: "#1b263b", color: "white", padding: "20px", borderRadius: "8px" },
                    sections: ["personalInfo", "contact", "skills", "language"]
                },
                {
                    name: "rightColumn",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["summary", "workExperience", "education", "projects"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "10mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template14 = {
    id: 14,
    name: 'Coral Header',
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "1fr 4fr",
            templateColumns: "1fr 1fr",
            columnGap: "2rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    style: { backgroundColor: "#ff6f61", color: "white", padding: "15px", borderRadius: "8px", paddingBottom: "20px" },
                    sections: ["personalInfo"]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary", "workExperience", "projects"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["contact","education", "skills", "language"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "10mm",
        fontFamily: "'Lato', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template15 = {
    id: 15,
    name: 'Teal Highlight',
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "1fr 5fr",
            templateColumns: "1.2fr 0.8fr",
            columnGap: "1.5rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    style: { backgroundColor: "#00796b", color: "white", padding: "15px", borderRadius: "6px", display: 'flex' },
                    sections: ["personalInfo", "contact"]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary", "skills", "language", "awards"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "projects", "education"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "8mm",
        fontFamily: "'Poppins', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap",
        fontSize: "13px",
        colorScheme: {
            background: "#ffffff",
            text: "#2e2e2e"
        }
    }
};

const template112 = {
    id: 112,
    name: "Clean Classic",
    filteredColumn: "1",
    isAvatar: "false",
    layout: {
        grid: {
            templateRows: "1fr 1fr 1fr 1fr 1fr",
            templateColumns: "1.5fr 0.5fr 1fr",
            rowGap: "0rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["personalInfo"]
                },
                {
                    name: "contact",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 3,
                    colEnd: 4,
                    sections: ["contact"]
                },
                {
                    name: "skills",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 4,
                    sections: ["skills"]
                },
                {
                    name: "workExperience",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 1,
                    colEnd: 4,
                    sections: ["workExperience"]
                },
                {
                    name: "education",
                    rowStart: 4,
                    rowEnd: 5,
                    colStart: 1,
                    colEnd: 4,
                    sections: ["education"]
                },
                {
                    name: "organizations",
                    rowStart: 5,
                    rowEnd: 6,
                    colStart: 1,
                    colEnd: 4,
                    sections: ["organizations"]
                }
            ]
        },
        colorScheme: {
            primary: "#3498DB",
            background: "#FFFFFF",
            text: "#333333"
        }
    },
};

const template113 = {
    id: 113,
    name: "Simple Tactical",
    filteredColumn: "2",
    isAvatar: "false",
    layout: {
        grid: {
            templateRows: "1fr 0.1fr 12fr",
            templateColumns: "3fr 2fr",
            rowGap: "0rem",
            columnGap: "2rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    // style:{position:"relative"},
                    sections: ["personalInfo", "designIcons1"]
                },
                {
                    name: "contacts",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 3,
                    sections: ["contact"]
                },
                {
                    name: "leftColumn",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary", "workExperience", "education"]
                },
                {
                    name: "rightColumn",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["strengths", "skills", "achievements"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        fontFamily: "'Lato', sans-serif",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template115 = {
    id: 115,
    name: "Spacious Two Column",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "1fr 4fr",
            templateColumns: "2fr 3fr",
            columnGap: "1rem",
            areas: [
                {
                    name: "headerLeft",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    sections: ["personalInfo"],
                    style: { background: "linear-gradient(to bottom, #163853 0%, #163853 100%)" }
                },
                {
                    name: 'leftColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["contact", "education", "language", "skills"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "achievements"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        fontFamily: "Montserrat, sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poltawski+Nowy:ital,wght@0,400..700;1,400..700&display=swap",
        fontSize: "16px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template116 = {
    id: 116,
    name: "Simple Tactical",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "2fr 1fr",
            columnGap:"2rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    style: { paddingTop: "20px", backgroundColor: "#3e465b", color: "white" },
                    sections: ["contact", "summary", "language", "skills"],                    
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    style: { paddingTop: "0px", color: "#3e465b", backgroundColor: "white" },
                    sections: ["personalInfo", "education", "workExperience"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "0mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "18px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template117 = {
    id: 117,
    name: 'Premium Template',
    pdf: "/templates/template7.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "1fr 12fr",
            templateColumns: "1fr 1fr",
            columnGap:"3rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar"]
                },
                {
                    name: "contact",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["contact"]
                },

                {
                    name: 'leftColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary", "workExperience", "education",]
                },
                {
                    name: 'rightColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["skills", "organizations", "awards", "language"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "8mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template118 = {
    id: 118,
    name: "Professional One Column",
    pdf: "/templates/template8.pdf",
    filteredColumn: "1",
    isAvatar: "false",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1fr",
            areas: [
                {
                    name: 'mainColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: [
                        "header",
                        "contact",
                        "summary",
                        "experience",
                        "education",
                        "achievements",
                        "skills",
                        "certifications"
                    ]
                }
            ]
        },
        padding: "20px",
        fontFamily: "'Georgia', serif",
        fontLink: "",
        fontSize: "16px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template1110 = {
    id: 1110,
    name: "Premium Two Columns",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "55mm 130mm",
            columnGap: "1.5rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["contact", "skills", "language", "certificates"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["personalInfo", "education", "workExperience"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "25px",
        fontFamily: "'Poppins', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#003366",
            primary: "#00a66f",
        }
    }
};

const template1111 = {
    id: 1111,
    name: 'Executive Professional',
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto 12fr",
            templateColumns: "115mm 65mm",
            columnGap: "1.5rem",

            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    style: { backgroundColor: "#142c45", color: "white", width: "104%", },
                    sections: ["avatar", "designIcons1"]
                },
                {
                    name: "contact",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    style: { marginBottom: "-15px" },
                    sections: ["contact"]
                },

                {
                    name: 'leftColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary", "workExperience", "education", "designIcons2"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    style: { backgroundColor: "#142c45ff", borderRadius: "1px", color: "white", padding: "10px", marginTop: "-10px" },
                    sections: ["skills", "organizations", "awards"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "10mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template1112 = {
    id: 1112,
    name: 'Moderan',
    layout: {
        grid: {
            templateRows: "1fr",
            templateColumns: "1fr 2fr",
            columnGap:"2rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    style: { backgroundColor: "#142c45ff", borderRadius: "10px", color: "white", padding: "10px" },
                    sections: ["avatar", "contact", "education", "skills", "language"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    style: { marginTop: "50px" },
                    sections: ["summary", "workExperience", "organizations", "awards"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "0mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template1113 = {
    id: 1113,
    name: 'Moderan',
    layout: {
        grid: {
            templateRows: "1fr 12fr",
            templateColumns: "1fr 1fr",
            columnGap:"2rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar"]
                },
                {
                    name: "contact",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["contact"]
                },

                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    style:{padding:"10px"},
                    sections: ["summary", "skills", "education", "language"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    style:{padding:"10px"},
                    sections: ["workExperience", "projects", "organizations"]
                },

            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "20px",
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}
const template21 = {
    id: 21,
    name: "Simple Single Column1",
    pdf: "/templates/template21.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto auto auto",
            templateColumns: "1fr 1fr",  // single column
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    style: { background: "#1C3345", padding: "10px", color: "white", width: "110.5%", marginLeft: "-38px", marginTop: "-40px" },
                    sections: ["personalInfo",]
                },
                {
                    name: "contact",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 3,
                    style: { background: "#12232D", color: "white", padding: "10px", width: "110.5%", marginLeft: "-38px", marginTop: "-26px" },
                    sections: ["contact",]
                },
                {
                    name: "leftColumn",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["workExperience", "education", "organizations",]
                },
                {
                    name: "rightColumn",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["skills", "awards", "language"]
                },
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "10mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#F4C562"
        }
    }
};

const template6 = {
    id: 6,
    name: "Simple Single Column2",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto auto",
            templateColumns: "1fr 2fr",
            columnGap: "3rem",
            rowGap: "0rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    style: { background: "#323B4C" },
                    sections: ["personalInfo",]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    style: { background: "#E4E4E4", padding: "5rem 1rem 1rem 2rem", },
                    sections: ["contact", "skills", "language", "awards"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    style: { paddingTop: "2rem", paddingRight: "20px" },
                    sections: ["summary", "workExperience", "education", "organizations"]
                },
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "0mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template23 = {
    id: 23,
    name: "Simple Single Column3",
    pdf: "/templates/template23.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto auto",
            templateColumns: "1fr 2fr",
            columnGap: "3rem",
            rowGap: "0rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    style: { background: "#323B4C" },
                    sections: ["personalInfo",]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    style: { background: "#E4E4E4", padding: "5rem 1rem 1rem 2rem", },
                    sections: ["contact", "skills", "language", "awards"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    style: { paddingTop: "2rem" },
                    sections: ["summary", "workExperience", "education", "organizations"]
                },
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "0mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template1115 = {
    id: 1115,
    name: "Two Columns",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1fr 3fr",
            columnGap: "1rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    // style:{ backgroundPosition: "center", backgroundRepeat: "no-repeat",   backgroundSize: "cover",    backgroundImage:  "url('/assets/bg.jpg')"},
                    style: {
                        background: "linear-gradient(rgba(0,128,0,0.55), rgba(0,128,0,0.55)), url('/assets/bg.jpg')",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        color: "#f5f5f5",
                        padding: '1rem',
                    },

                    sections: ["avatar", "contact", "skills", "language", "certificates"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    style: { backgroundColor: '#ffff', color: ' rgb(92 126 92)' },
                    sections: ["summary", "workExperience", "education", "projects"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "25px",
        fontFamily: "'Poppins', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "rgb(92 126 92)",
            primary: "#00a66f",
        }
    }
};

const template24 = {
    id: 24,
    name: "Simple Single Column4",
    pdf: "/templates/template24.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto auto",
            templateColumns: "1fr 2fr",  // single column
            columnGap: "3rem",
            rowGap: "0rem",
            areas: [
                // {
                //     name: "header",
                //     rowStart: 1,
                //     rowEnd: 2,
                //     colStart: 1,
                //     colEnd: 3,
                //     // style:{background:"#323B4C"},
                //     sections: ["personalInfo",]
                // },
                {
                    name: "leftColumn",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    style: { padding: "2rem 1rem 1rem 2rem", color: "white" },
                    sections: ["personalInfo", "contact", "skills", "language"]
                },
                {
                    name: "rightColumn",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    style: { padding: "2rem 0.5rem 0rem 2rem", background: "white", borderRadius: "100px 0px 0px 100px", color: "879AB2" },
                    sections: ["summary", "workExperience", "education", "organizations"]
                },
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "0mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#879AB2",
            text: "#333333"
        }
    }
};

const template25 = {
    id: 25,
    name: "Simple Single Column5",
    pdf: "/templates/template24.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto auto",
            templateColumns: "1.2fr 1.8fr",
            columnGap: "3rem",
            rowGap: "4.5rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    style: {
                        background: "#D6DEE8", height: "180px",
                        width: "75%", marginLeft: "216px"
                    },
                    sections: ["personalInfo",]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    style: { background: "#D6DEE8", padding: "1rem 1rem 1rem 2rem", borderRadius: "40px" },
                    sections: ["contact", "skills", "language", "awards"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    style: { paddingTop: "1rem" },
                    sections: ["summary", "workExperience", "education"]
                },
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "10mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template501 = {
    id: 501,
    name: 'Corporate Green CV',
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "2fr 3fr",
            rowGap: "0px",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    style: { backgroundColor: "#394E63", color: "white", padding: "1.5rem", fontFamily: "Lato,Sansation" },
                    sections: ["personalInfo", "contact", "skills", "awards",]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    style: { padding: "0rem 1.5rem" },
                    sections: ["avatar", "summary", "workExperience", "education"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "0mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}
const template516 = {
    id: 516,
    name: 'SidebarLeft',
    pdf: "/templates/template16.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "120mm 60mm",
            columnGap: "1.5rem",
            areas: [
                {
                    name: "leftColumn",
                    rowStart: 1, rowEnd: 2,
                    colStart: 2, colEnd: 3,
                    style: { color: "white", padding: "0px", },
                    sections: ["personalInfo", "contact", "skills", "language"]
                },
                {
                    name: "rightColumn",
                    rowStart: 1, rowEnd: 2,
                    colStart: 1, colEnd: 2,
                    style: { marginTop: "150px" },
                    sections: ["designIcons1", "summary", "workExperience", "projects", "education", "awards", "organizations"]
                }
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "0mm 15mm ",
        fontFamily: "comic sans ms",
        fontLink: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",
        fontSize: "13px",
        borderTop: "25px solid lightGray",
        colorScheme: { background: "#ffffff", text: "#333333" }
    }
};
const template521 = {
    id: 521,
    name: "Simple Single Column1",
    pdf: "/templates/template21.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1fr",  // single column
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["personalInfo", "summary", "workExperience", "education", "skills", "organizations", "awards", "language"]
                },
            ]
        },
        padding: "10mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template522 = {
    id: 522,
    name: "Simple Single Column2",
    pdf: "/templates/template22.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1fr",  // single column
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["personalInfo", "summary", "workExperience", "education", "skills", "organizations", "awards", "language"]
                },
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "10mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template523 = {
    id: 523,
    name: "Simple Single Column3",
    pdf: "/templates/template23.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1fr",  // single column
            areas: [
                {
                    name: "mainSection",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["personalInfo", "awards", "language"]
                },
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        frozenSections: ["contact", "summary", "personalInfo"],
        padding: "10mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template524 = {
    id: 524,
    name: "Simple Single Column4",
    pdf: "/templates/template24.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "40mm 1fr",
            templateColumns: "1.2fr 0.8fr",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    sections: ["personalInfo"]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    style: { marginTop: "60px", paddingLeft: "10px" },
                    sections: ["summary", "workExperience", "organizations", "awards", "language"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    style: { marginTop: "60px", borderLeft: "2px solid #2e3c47ff" },
                    sections: ["contact", "education", "skills",]
                },
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "10mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template525 = {
    id: 525,
    name: "Simple Single Column5",
    pdf: "/templates/template24.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "40mm 1fr",
            templateColumns: "1.2fr 0.8fr",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    sections: ["personalInfo"]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    style: { marginTop: "60px", paddingLeft: "10px" },
                    sections: ["summary", "workExperience", "organizations", "awards", "language"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    style: { marginTop: "60px", borderLeft: "2px solid #2e3c47ff", backgroundColor: "#2e3c47ff", color: "white", paddingTop: "10px", borderRadius: "10px" },
                    sections: ["contact", "education", "skills",]
                },
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "10mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template526 = {
    id: 526,
    name: "new26",
    layout: {
        grid: {
            templateRows: "1fr 12fr",
            templateColumns: "60mm 125mm",
            columnGap: "3rem",
            areas: [

                {
                    name: "leftColumn",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    style: { background: "#FFFFFF", marginTop: "1rem" },
                    sections: ["contact", "summary", "skills", "language",]
                    
                },
                {
                    name: "rightColumn",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    style: { marginTop: '1rem', padding: '0rem', },
                    sections: ["personalInfo", "education", "workExperience", "projects"]
                },

            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }

};

const template27 = {
    id: 27,
    name: "Creative Resume",
    pdf: "/templates/template27.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1fr",  // single column
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    style:{width:"700px", marginLeft:"120px", padding:"50px 40px 10px 150px", background:"#EED66E"},
                    sections: ["personalInfo", "summary", "workExperience", "education", "skills", "organizations",]
                },
            ]
        },
        frozenSections:["personalInfo"],
        padding: "0mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
};

const template28 = {
    id: 28,
    name: "Simple double Column1",
    pdf: "/templates/template28.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "1fr 7fr",
            templateColumns: "2fr 1fr",
            columnGap:"2rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    style: { padding: "15px",  marginLeft: "-38px", marginTop: "0px", },
                    sections: ["personalInfo", "contact",]
                },
                // {
                //     name: "contact",
                //     rowStart: 2,
                //     rowEnd: 3,
                //     colStart: 1,
                //     colEnd: 3,
                //     style: { paddingBottom: "-30px", width: "110.5%", marginLeft: "-38px", marginTop: "-26px", borderBottom:"2px solid black" },
                //     sections: ["contact",]
                // },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    style:{marginTop:"0px",},
                    sections: ["skills","workExperience", ]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    style:{marginTop:"0px", textAlign:"left",},
                    sections: [ "education", "awards", "Coursework", "Interests"]
                },
            ]
        },
        frozenSections: ["avatar","contact", "personalInfo"],
        padding: "7mm",
        fontFamily: "Arial, Helvetica",
        fontLink:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "black"
        }
    }
};
export const templates = [template1, template3, template9, template10, template11, template12, template13, template14, template15, template113, template115, 
    template116, template117, template1110, template1111, template1112, template1113, template1115, template21, template6, 
    template23, template24, template25, template501,template516,template521,template522,template523,template524,template525,template526,template27, template28];

