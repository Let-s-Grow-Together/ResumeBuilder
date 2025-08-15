export const template111 = {
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
    id: 10,
    name: "Premium Two Columns",
    pdf: "/templates/template10.pdf",
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
                    sections: ["avatar", "contact", "skills", "language"]
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
const template1112 = {
    id: 12,
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
                    headingColor: "#fff",
                    style: { backgroundColor: "#142c45ff", borderRadius: "10px", color: "white", padding: "10px" },
                    sections: ["avatar", "contact", "education", "skills", "language"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    style: { borderBottom: "2px solid  #0A3965" },
                    sections: ["personalInfo", "summary", "workExperience", "organizations", "awards"]
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
    id: 13,
    name: 'Moderan',
    layout: {
        grid: {
            templateRows: "1fr 12fr",
            templateColumns: "40% 5% 60%",
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








export const templates = [template111, template113, template117, template119, template1110, template1111, template1112, template1113];
