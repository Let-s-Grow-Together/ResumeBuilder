import bgImage from "../../public/assets/bg.jpg";



const template1 = {
    id: 1,
    name: "Modern Grid",
    filteredColumn: "2",
    isAvatar: "false",
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
                    sections: ["contact", "skills", "strengths"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "projects", "education"]
                },
            ],
        },
        colorScheme: {
            background: "#FFFFFF",
            text: "#333333"
        }
    },
};

const template2 = {
    id: 2,
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

const template3 = {
    id: 3,
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
                    sections: ["personalInfo"]
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
        fontFamily: "'Lato', sans-serif",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}

const template4 = {
    id: 4,
    name: "Avatar template",
    pdf: "/templates/template4.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "2fr 3fr",
            rowGap: "0rem",
            columnGap: "2rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "summary", "skills"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["education", "workExperience"]
                },
            ]
        },
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "18px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}

const template5 = {
    id: 5,
    name: "Spacious Two Column",
    pdf: "/templates/template5.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "3fr 9fr",
            templateColumns: "2fr 3fr",
            columnGap: "0rem",
            areas: [
                {
                    name: 'header',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar"],
                    style: { background: "linear-gradient(to bottom, #163853 0%, #163853 66%, #ffffff 66%, #ffffff 100%)" }
                },
                {
                    name: "headerLeft",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["personalInfo"],
                    style: { background: "linear-gradient(to bottom, #163853 0%, #163853 66%, #ffffff 66%, #ffffff 100%)" }
                },
                {
                    name: 'leftColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["education", "language", "skills"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "contact"]
                }
            ]
        },
        fontFamily: "Montserrat, sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poltawski+Nowy:ital,wght@0,400..700;1,400..700&display=swap",
        fontSize: "16px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}

const template6 = {
    id: 6,
    name: "Simple Tactical",
    pdf: "/templates/template6.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "2fr 3fr",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "summary", "language", "skills"],
                    style: { backgroundColor: "#3e465b" }
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
        padding: "0mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "18px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}

const template7 = {
    id: 7,
    name: 'Premium Template',
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "1fr 12fr",
            templateColumns: "1fr 1fr",
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
    name: "Modern Sidebar Resume",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1.3fr 2fr",
            columnGap: "2rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "skills", "certifications", "education"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["summary", "workExperience"]
                }
            ]
        },
        padding: "25px",
        fontFamily: "'Poppins', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#1c1c1c",
        }
    }
};

const template10 = {
    id: 10,
    name: "Premium Two Columns",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "65mm 80mm",
            columnGap: "4rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    style: { backgroundColor: 'rgb(206 210 213 / 38%)', color: '#004b8d', padding: '1rem' },
                    sections: ["avatar", "contact", "skills", "language", "certificates"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    style: { backgroundColor: '#ffff', color: '#004b8d' },
                    sections: ["education", "workExperience", "projects"]
                }
            ]
        },
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
const template11 = {
    id: 11,
    name: 'Executive Professional',
    pdf: "/templates/template11.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto 12fr",
            templateColumns: "115mm 65mm",
            columnGap: "2rem",

            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "personalInfo"]
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
                    style: { backgroundColor: "#142c45ff", borderRadius: "10px", color: "white", padding: "10px" },
                    sections: ["skills", "organizations", "awards"]
                }
            ]
        },
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
const template12 = {
    id: 12,
    name: 'Example12',
    filteredColumn: "1",
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
                    style: { backgroundColor: "#e6f4f1", padding: "5px", borderRadius: "8px" },
                    sections: ["contact", "skills", "language"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["summary", "workExperience", "education", "projects"]
                }
            ]
        },
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
    name: 'Example13',
    filteredColumn: "1",
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
                    sections: ["avatar", "contact", "skills", "language"]
                },
                {
                    name: "rightColumn",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["summary", "workExperience", "education", "projects", "organizations"]
                }
            ]
        },
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
    name: 'Example14',
    pdf: "/templates/template14.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "50mm auto",
            templateColumns: "1fr 1fr",
            columnGap: "2rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    style: { backgroundColor: "#ff6f61", color: "white", padding: "15px", borderRadius: "8px" },
                    sections: ["avatar", "personalInfo", "contact"]
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
                    sections: ["education", "skills", "language", "awards", "organizations"]
                }
            ]
        },
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
    name: 'Example15',
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "40mm auto",
            templateColumns: "1.2fr 0.8fr",
            columnGap: "1.5rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    style: { backgroundColor: "#00796b", color: "white", padding: "12px", borderRadius: "6px" },
                    sections: ["avatar", "contact"]
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
                    sections: ["workExperience", "projects", "education", "organizations"]
                }
            ]
        },
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
const template16 = {
    id: 16,
    name: 'SidebarLeft',
    pdf: "/templates/template16.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "125mm 60mm",
            columnGap: "1.5rem",
            areas: [
                {
                    name: "sidebar",
                    rowStart: 1, rowEnd: 2,
                    colStart: 2, colEnd: 3,
                    style: { backgroundColor: "#2e7d32", color: "white", padding: "10px" },
                    sections: ["personalInfo", "contact", "skills", "language"]
                },
                {
                    name: "main",
                    rowStart: 1, rowEnd: 2,
                    colStart: 1, colEnd: 2,
                    sections: ["summary", "workExperience", "projects", "education", "awards", "organizations"]
                }
            ]
        },
        padding: "8mm",
        fontFamily: "'Roboto', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",
        fontSize: "13px",
        colorScheme: { background: "#ffffff", text: "#333333" }
    }
};

const template111 = {
    id: 111,
    name: "Modern Grid",
    filteredColumn: "2",
    isAvatar: "false",
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
                    sections: ["contact", "skills", "strengths"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "projects", "education"]
                },
            ],
        },
        colorScheme: {
            background: "#FFFFFF",
            text: "#333333"
        }
    },
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
                    sections: ["personalInfo"]
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
        fontFamily: "'Lato', sans-serif",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}

const template114 = {
    id: 114,
    name: "Avatar template",
    pdf: "/templates/template4.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "2fr 3fr",
            rowGap: "0rem",
            columnGap: "2rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "summary", "skills"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["education", "workExperience"]
                },
            ]
        },
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "18px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}

const template115 = {
    id: 115,
    name: "Spacious Two Column",
    pdf: "/templates/template5.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "3fr 9fr",
            templateColumns: "2fr 3fr",
            columnGap: "0rem",
            areas: [
                {
                    name: 'header',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar"],
                    style: { background: "linear-gradient(to bottom, #163853 0%, #163853 66%, #ffffff 66%, #ffffff 100%)" }
                },
                {
                    name: "headerLeft",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["personalInfo"],
                    style: { background: "linear-gradient(to bottom, #163853 0%, #163853 66%, #ffffff 66%, #ffffff 100%)" }
                },
                {
                    name: 'leftColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["education", "language", "skills"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "contact"]
                }
            ]
        },
        fontFamily: "Montserrat, sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poltawski+Nowy:ital,wght@0,400..700;1,400..700&display=swap",
        fontSize: "16px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}

const template116 = {
    id: 116,
    name: "Simple Tactical",
    pdf: "/templates/template6.pdf",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "2fr 3fr",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "summary", "language", "skills"],
                    style: { backgroundColor: "#3e465b" }
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
        padding: "0mm",
        fontFamily: "'Montserrat', sans-serif",
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        fontSize: "18px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}

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

const template119 = {
    id: 119,
    name: "Modern Sidebar Resume",
    pdf: "/templates/template9.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "1.3fr 2fr",
            columnGap: "2rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "achievements", "skills", "certifications", "education"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["personalInfo", "summary", "workExperience"]
                }
            ]
        },
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
                    sections: ["contact", "skills", "language"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["personalInfo", "education", "workExperience", "certificates",]
                }
            ]
        },
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
            columnGap: "2rem",

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
                    style: { backgroundColor: "#142c45ff", borderRadius: "10px", color: "white", padding: "10px" },
                    sections: ["skills", "organizations", "awards"]
                }
            ]
        },
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
const template1112 = {
    id: 1112,
    name: 'Moderan',
    layout: {
        grid: {
            templateRows: "1fr 12fr",
            templateColumns: "1fr 1fr",
            areas: [

                // },

                {
                    name: 'leftColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    style: { backgroundColor: "#142c45ff", borderRadius: "10px", color: "white", padding: "10px", marginTop: "-100px" },
                    sections: ["avatar", "contact", "education", "skills", "language"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["summary", "workExperience", "organizations", "awards"]
                }
            ]
        },
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
const template1113 = {
    id: 1113,
    name: 'Moderan',
    layout: {
        grid: {
            templateRows: "1fr 12fr",
            templateColumns: "40% 5% 50%",
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
                    colStart: 3,
                    colEnd: 4,
                    sections: ["contact"]
                },

                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary", "skills", "education", "language"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 4,
                    sections: ["workExperience", "projects", "organizations", "awards"]
                },

            ]
        },
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



const template1114 = {
    id: 1114,
    name: "new1114",
    layout: {
        grid: {
            templateRows: "1fr 12fr",
            templateColumns: "50% 5% 40%",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["contact"]
                },

                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    // style:{ backgroundPosition: "center", backgroundRepeat: "no-repeat",   backgroundSize: "cover",    backgroundImage:  "url('/assets/bg.jpg')"},
                    sections: ["summary", "workExperience", "projects", "awards"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 4,
                    style: { backgroundColor: '#492359', marginTop: '-8rem', padding: '2rem', color: '#fff', },
                    sections: ["personalInfo", "skills", "education", "language", "organizations",]
                },

            ]
        },
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

const template1115 = {
    id: 1115,
    name: "Two Columns",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "70mm 80mm",
            columnGap: "4rem",
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
                    sections: ["education", "workExperience", "projects"]
                }
            ]
        },
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





export const templates = [template1, template7, template9, template10, template12, template112, template13, template14, template15, template16,template113, template114, template115, template116, template117, template118, template119, template1110, template1111, template1112, template1113, template1114, template1115];
