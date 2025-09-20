const sharedStyles = {

    "2": {
        heading: {
            color: "var(--heading-color)",
            textDecoration: "none",
            textAlign: "center",
            borderTop: "2px solid var(--heading-color)",
            borderBottom: "2px solid var(--heading-color)"
        },
    },

    "3": {
        heading: {
            color: "var(--content-color)",
            borderBottom: "2px solid var(--content-color)",
            marginBottom: "10px"
        },
        content: {
            color: "var(--content-color)",
            marginBottom: "2rem"
        }
    },

    "4": {
        heading: {
            fontSize: "24px",
            color: "var(--content-color)",
            textDecoration: "none",
            borderBottom: "2px solid var(--secondary-heading-color)"
        },
        box: {
            margin: "25px 0px"
        },
    },

    "5": {
        heading: {
            borderBottom: "2px solid var(--secondary-color)",
            textDecoration: "none"
        },
    },

    "7": {
        personalInfo: {
            avatar: {
                card: {
                    backgroundColor: "none"
                }
            }
        },
        heading: {
            textDecoration: 'none',
            borderBottom: '2px solid var(--primary-color)',
            paddingLeft: '10px'
        }
    },

    "501": {
        heading: {
            fontSize: "1.7rem",
            marginBottom: "0.1rem"
        }
    },
    "502": {
        heading: {
            fontSize: "1.5rem",
            textTransform: "uppercase",
            borderBottom: "2px solid #545454",
            paddingBottom: "5px",
            marginBottom: "15px"
        },
    }

};

const templateStyles = {

    "1": {
        /* layoutStyles: {
            leftColumn: {
                heading: {
                    borderBottom: "2px solid #ffffff",
                    color:"red"
                }
            },
            rightColumn: {
                heading: {
                    color: "#394E63",
                    borderBottom: "2px solid #394E63",
                    marginBottom: "1rem"
                }
            }
        }, */
    },

    "3": {
        vars: {
            "--heading-color": "#333",
            "--secondary-heading-color": "#2091FF",
            "--content-color": "gray",
        },
        layoutStyles: {
            leftColumn: {
                heading: {
                    ...sharedStyles["3"].heading
                },
                content: {

                }
            },
            rightColumn: {
                heading: {
                    ...sharedStyles["3"].heading
                }
            }
        },
        personalInfo: {
            box: {
                border: "1px solid white",
                position: "relative"
            },
            name: {
                color: "var(--heading-color)",
            },
            position: {
                color: "var(--secondary-heading-color)",
                fontWeight: "400",
            },
            summary: {
                display: "none",
            },
            mixBox: {
                paddingLeft: "5px"
            },
            summaryBox: {
                display: "none"
            },
            avatar: {
                imageDiv: {
                    zIndex: "10",
                },
            }
        },
        contact: {
            list: {
                display: "flex",
                flexWrap: "wrap",
                paddingLeft: "0px"
            },
            anotherBox: {
                paddingLeft: "0px"
            },
            heading: {
                display: "none"
            },
            innerBox: {
                marginRight: "25px"
            },
            icon: {
                color: "var(--content-color)"
            },
            content: {
                // marginLeft: "5px",
                paddingLeft: "5px",
                color: "var(--content-color)"
            },
            anchor: {
                // marginLeft: "5px",
                paddingLeft: "5px",
                color: "var(--content-color)"
            },
            addIcon: {
                height: "40px"
            },
            listItem: {
                marginRight: "16px"
            }
        },
        summary: {
            box: {
                marginBottom: "25px"
            },
            heading: {
                fontWeight: "400"
            },
            content: {
                ...sharedStyles["3"].content
            }
        },
        workExpe: {
            box: {
                border: "none",
                paddingLeft: "0px"
            },
            heading: {
                textDecoration: "none"
            },
            role: {
                fontSize: "18px"
            },
            organization: {
                color: "var(--secondary-heading-color)",
                padding: "5px 0px",
                fontSize: "16px"
            },
            dates: {
                color: "var(--content-color)",
            },
            wholeList: {
                color: "var(--content-color)"
            },
            eachExperience: {
                color: "var(--content-color)"
            }
        },
        education: {
            box: {
                border: "none",
                paddingLeft: "0px"
            },
            heading: {
                textDecoration: "none",
            },
            degree: {
                fontSize: "18px"
            },
            school: {
                fontSize: "16px",
                color: "var(--secondary-heading-color)",
                paddingBottom: "5px"
            },
            list: {
                fontSize: "14px",
                color: "var(--content-color)"
            },
            dates: {
                color: "var(--content-color)"
            },
            paragraphWrapper: {
                fontSize: "14px",
                color: "var(--content-color)"
            }
        },
        skills: {
            heading: {
                textDecoration: "none",
                marginBottom: "15px"
            },
            wholeList: {
                paddingLeft: "15px"
            },
        },
        achieve: {
            box: {
                marginTop: "25px",
                textAlign: "left",
            },
            heading: {
                ...sharedStyles["3"].heading
            },
            content: {
                padding: "2px",
                color: "var(--content-color)"
            },
            title: {
                fontWeight: "700",
                fontSize: "18px"
            },
            list: {
                color: "var(--content-color)"
            }
        },
        strength: {
            box: {
                marginTop: "0px",
                textAlign: "left",
                marginBottom: "25px"
            },
            title: {
                fontWeight: "700",
                fontSize: "18px"
            },
            list: {
                color: "var(--content-color)"
            },
            eachStrength: {
                color: "var(--content-color)"
            }
        },
        projects: {
            box: {
                padding: "0px",
                borderLeft: "0px solid white"
            },
            heading: {
                textDecoration: "none",
            },
            title: {
                fontSize: "18px"
            },
            list: {
                color: "var(--content-color)"
            },
            bullets: {
                color: "var(--content-color)"
            }
        },
        certificate: {
            box: {
                marginTop: "15px"
            },
            heading: {
                ...sharedStyles["3"].heading
            },
            eachcertificate: {
                marginBottom: "5px"
            },
            title: {
                fontSize: "18px",
                fontWeight: "700"
            },
            organiz: {
                fontSize: "16px",
                color: "var(--secondary-heading-color)",
            },
            date: {
                padding: "2px",
                color: "var(--content-color)",
                fontStyle: "italic"
            },
            certWrapper: {
                color: "var(--content-color)"
            },
            list: {
                color: "var(--content-color)"
            }
        },
        award: {
            title: {
                color: "var(--content-color)"
            },
            list: {
                color: "var(--content-color)"
            },
            awardWrapper: {
                color: "var(--content-color)"
            }
        },
        organiz: {
            title: {
                fontWeight: "700",
                fontSize: "18px"
            },
            list: {
                color: "var(--content-color)"
            },
            organizWrapper: {
                color: "var(--content-color)"
            }
        }
    },

    "6": {
        personalInfo: {
            box: {
                // backgroundColor:"#2e3c47ff",
                color: "#2e3c47ff",
                padding: "10px",
                marginBottom: "15px"
            },
            avatar: {
                card: {
                    background: "none"
                },
                imageDiv: {
                    // marginLeft: "-15px",
                    // marginTop: "35px",
                    width: "170px",
                    height: "170px",
                    position: "absolute",
                    top: "1.5rem",
                    left: "0.5rem",
                    border: "5px solid white"
                },
            },
            summaryBox: {
                marginTop: "-40px",
                display: "none"
            },
            position: {
                fontWeight: "100",
                marginLeft: "14.5rem"
            },
            name: {
                color: "white",
                marginLeft: "14.5rem",
                display: "flex",
                marginTop: "1.5rem",
                fontSize: "35px"
            },
            firstName: {
                paddingRight: "10px"
            }
        },
        summary: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"45%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "500"
            },
        },
        workExpe: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            eachWorkPlace: {
                // padding: "10px"
            },
            organization: {
                fontWeight: "600"
            }
        },
        education: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "5px",
                // padding: "15px"
            },
            heading: {
                // paddingLeft:"45%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            eachEducation: {
                // padding: "10px",
                degree: {
                    margin: "5px"
                }
            },
            school: {
                fontWeight: "600"
            }
        },
        skills: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
        },
        organiz: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "600"
            }
        },
        award: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"35%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "600"
            }
        },
        language: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"43%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            listItem: {
                margin: "5px -5px"
            }
        },
        projects: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            title: {
                fontWeight: "600"
            }

        },
        achieve: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            title: {
                fontWeight: "600"
            }

        },
        certificate: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            eachcertificate: {
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600"
            }
        },
        contact: {
            heading: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            listItem: {
                marginLeft: "-5px"
            }
        },
        strength: {
            heading: {

                borderBottom: "2px solid #2e3c47ff",
                padding: "0px",
                marginBottom: "15px"
            },
            title: {
                fontWeight: "600"
            }
        }

    },

    "9": {
        layoutStyles: {
            leftColumn: {
                heading: {
                    borderBottom: "2px solid #6d4a4aff",
                    color: "#6d4a4aff",
                    marginBottom: "0.75rem"
                }
            },
            rightColumn: {
                heading: {
                    color: "#6d4a4aff",
                    borderBottom: "2px solid #6d4a4aff",
                    marginBottom: "0.75rem"
                }
            }
        },
        avatar: {
            showAvatar: true,
            showImage: true,
            card: {
                backgroundColor: '#7c2b2b',
                color: '#F5F5F5',
                borderRadius: '5px',
                padding: '1rem',
            },
            heading: {
                borderBottom: 'none',
                color: '#F5F5F5'
            }
        },
        skills: {
            eachSkillBox: {
                background: "#7c2b2b",
                color: "#fff",
                borderRadius: "5px",
                border: "none"
            }
        },
        language: {
            eachLanguageBox: {
                background: "#7c2b2b",
                color: "#fff",
                borderRadius: "5px",
                border: "none"
            }
        },
        contact: {
            box: {
                marginTop: "20px",
            }
        }
    },

    "10": {
        layoutStyles: {
            leftColumn: {
                heading: {
                    borderBottom: "2px solid #0d47a1",
                    marginBottom: "0.75rem"
                }
            },
            rightColumn: {
                heading: {
                    color: "#0d47a1",
                    borderBottom: "2px solid #0d47a1",
                    marginBottom: "0.75rem"
                }
            }
        },
        avatar: {
            showAvatar: true,
            showImage: true,
            heading: {
                borderBottom: 'none',
                display: "flex",
                gap: '5px',
                // marginLeft: '5rem'
            },
            card: {
                padding: '1rem',
            },
            position: {

            },
            innerBox: {
                // marginTop: '1rem'
                display: 'flex'
            },
        },
        contact: {
            box: {
                // marginTop: ".7rem"
            },
            icon: {
                // color: "#3f51b5",
                // marginLeft: "10px"
            },
            deleteIcon: {
                color: '#3f51b5',
                border: 'none'
            }
        }
    },

    "11": {
        layoutStyles: {
            rightColumn: {
                eachSkillBox: {
                    border: "1px solid white"
                },
                eachLanguageBox: {
                    border: "1px solid white"
                }
            }
        },
        personalInfo: {
            summaryBox: {
                display: "none"
            }
        }
    },

    "12": {
        layoutStyles: {
            leftColumn: {
                heading: {
                    borderBottom: "2px solid #00897b",
                    color: "#000",
                    marginBottom: "0.75rem"
                }
            },
            rightColumn: {
                heading: {
                    color: "#000",
                    borderBottom: "2px solid #00897b",
                    marginBottom: "0.75rem"
                }
            }
        },
        avatar: {
            card: { background: "none", display: "none" },
            imageDiv: {
                border: "3px solid white",
                boxShadow: "0 0 0 3px #00897b",
                borderRadius: "50%",
                overflow: "hidden",
                width: "100px",
                height: "100px",
                margin: "0 auto"
            }
        },
        personalInfo: {
            box: {
                background: "#00897b",
                color: "white",
                padding: "20px",
                textAlign: "center",
                borderRadius: "8px"
            },
            name: { fontSize: "26px", fontWeight: "600" },
            position: { fontSize: "16px", opacity: 0.9 }
        },
        contact: {
            box: { marginTop: "20px" },
            heading: {
                borderBottom: "2px solid #00897b",
                marginBottom: "10px",
                fontWeight: "600"
            },
            listItem: { padding: "5px 0" }
        },
        skills: {
            box: { marginTop: "20px" },
            heading: {
                borderBottom: "2px solid #00897b",
                marginBottom: "10px",
                fontWeight: "600",
            },
            eachSkillBox: {
                background: "#00897b",
                color: "white",
                borderRadius: "5px",
                padding: "4px 8px",
                margin: "4px",
                display: "inline-block",
                border: "none"
            }
        },
        language: {
            box: { marginTop: "20px" },
            heading: {
                borderBottom: "2px solid #00897b",
                marginBottom: "10px",
                fontWeight: "600"
            }
        },
        summary: {
            box: { marginTop: "20px" },
            heading: {
                borderBottom: "2px solid #00897b",
                marginBottom: "10px",
                fontWeight: "600"
            }
        },
        workExpe: {
            box: { marginTop: "20px" },
            heading: {
                borderBottom: "2px solid #00897b",
                marginBottom: "10px",
                fontWeight: "600"
            },
            eachWorkPlace: { marginBottom: "15px" }
        },
        education: {
            box: { marginTop: "20px" },
            heading: {
                borderBottom: "2px solid #00897b",
                marginBottom: "10px",
                fontWeight: "600"
            },
            eachEducation: { marginBottom: "15px" }
        },
        projects: {
            box: { marginTop: "20px" },
            heading: {
                borderBottom: "2px solid #00897b",
                marginBottom: "10px",
                fontWeight: "600"
            }
        },
        award: {
            box: { marginTop: "20px" },
            heading: {
                borderBottom: "2px solid #00897b",
                marginBottom: "10px",
                fontWeight: "600"
            }
        },
        organiz: {
            box: { marginTop: "20px" },
            heading: {
                borderBottom: "2px solid #00897b",
                marginBottom: "10px",
                fontWeight: "600"
            }
        }
    },

    "13": {
        layoutStyles: {
            leftColumn: {
                heading: { borderBottom: "2px solid #fbc02d", marginBottom: "10px" },
            },
            rightColumn: {
                heading: { borderBottom: "2px solid #1b263b", marginBottom: "10px" }
            }
        },
        personalInfo: {
            box: { textAlign: "center", marginTop: "15px", marginBottom: "20px" },
            name: { fontSize: "24px", fontWeight: "600", color: "#fbc02d" },
            position: { fontSize: "16px", opacity: 0.9 },
            mixBox: {
                display: "flex",
                flexDirection: "column",
                paddingLeft: "0px",
                marginLeft: "-20px"
            },
            avatar: {
                box: {
                    paddingLeft: "18px"
                }
            },
            summaryBox: {
                display: "none"
            }
        },
        contact: {
            heading: { borderBottom: "2px solid #fbc02d", marginBottom: "10px" },
            listItem: { padding: "4px 0" },
            pickerWrapper: {
                backgroundColor: "#1b263b"
            },
            addIcon: {
                border: "none",
                background: "#fbc02d"
            }
        },
        skills: {
            eachSkillBox: {
                background: "#fbc02d",
                color: "#1b263b",
                borderRadius: "5px",
                padding: "4px 8px",
                margin: "4px",
                display: "inline-block",
                border: "none"
            }
        },
        language: {
            eachLanguageBox: {
                border: "none"
            }
        },
        workExpe: {
            heading: { borderBottom: "2px solid #1b263b", marginBottom: "10px" }
        },
        education: {
            heading: { borderBottom: "2px solid #1b263b", marginBottom: "10px" }
        },
        projects: {
            heading: { borderBottom: "2px solid #1b263b", marginBottom: "10px" }
        },
        award: {
            heading: { borderBottom: "2px solid #1b263b", marginBottom: "10px" }
        },
        organiz: {
            heading: { borderBottom: "2px solid #1b263b", marginBottom: "10px" }
        }
    },

    "14": {
        avatar: {
            card: {
                display: "none"
            },
            imageDiv: {
                border: "3px solid white",
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                marginRight: "15px"
            }
        },
        personalInfo: {
            box: { display: "inline-block", },
            name: { fontSize: "24px", fontWeight: "700", color: "white" },
            position: { fontSize: "18px", color: "white" },
        },
        contact: {
            heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" },
            icon: { color: "#ff6f61" }
        },
        summary: {
            heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" }
        },
        workExpe: {
            heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" }
        },
        projects: {
            heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" }
        },
        education: {
            heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" }
        },
        skills: {
            heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" },
            eachSkillBox: {
                background: "#ff6f61",
                color: "white",
                borderRadius: "5px",
                padding: "4px 8px",
                margin: "4px",
                display: "inline-block",
                border: "none"
            }
        },
        language: {
            heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" },
            eachLanguageBox: {
                background: "#ff6f61",
                color: "white",
                borderRadius: "5px",
                padding: "4px 8px",
                margin: "4px",
                display: "inline-block",
                border: "none"
            }
        },
        award: {
            heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" }
        },
        organiz: {
            heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" }
        }
    },

    "15": {
        layoutStyles: {
            leftColumn: {
                heading: {
                    borderBottom: "2px solid #00796b",
                    color: "#000",
                    marginBottom: "0.75rem"
                }
            },
            rightColumn: {
                heading: {
                    color: "#000",
                    borderBottom: "2px solid #00796b",
                    marginBottom: "0.75rem"
                }
            }
        },
        avatar: {
            card: { display: "none" },
            imageDiv: {
                border: "3px solid white",
                borderRadius: "50%",
                overflow: "hidden",
                width: "70px",
                height: "70px",
                // marginRight: "12px"
            }
        },
        personalInfo: {
            box: { display: "inline-block" },
            name: { fontSize: "22px", fontWeight: "700", color: "white" },
            position: { fontSize: "18px", color: "white" },
            summaryBox: { display: 'none' }
        },
        contact: {
            heading: { display: 'none' },
            box: { display: "inline-block", marginLeft: "auto", textAlign: "right" },
            listItem: { padding: "5px 0", color: "white", display: "flex" },
            addIcon: { backgroundColor: "#00796b", border: "1px solid white", color: "white" },
            // trashIcon:{color:"white"}
            pickerWrapper: { backgroundColor: "#00796b" }
        },
        summary: {
            heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" }
        },
        skills: {
            heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" },
            eachSkillBox: {
                background: "#00796b",
                color: "white",
                borderRadius: "4px",
                padding: "3px 7px",
                margin: "3px",
                display: "inline-block",
                border: "none"
            },
            everySkillBox: {
                marginLeft: "-2px"
            },
        },
        language: {
            heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" },
            eachLanguageBox: {
                background: "#00796b",
                color: "white",
                borderRadius: "4px",
                padding: "3px 7px",
                margin: "3px",
                display: "inline-block",
                border: "none"
            },
            wholeList: {
                paddingLeft: "15px"
            },
            everyLanguageBox: {
                marginLeft: "-2px"
            }
        },
        award: {
            heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" },
            list: {
                paddingLeft: "15px"
            }
        },
        workExpe: {
            heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" },
            wholeList: {
                paddingLeft: "15px",
            },
            eachWorkPlace: {
                marginLeft: "0px"
            },
            content: {
                marginLeft: "0px"
            }
        },
        projects: {
            heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" },
            list: {
                paddingLeft: "15px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        education: {
            heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" },
            list: {
                paddingLeft: "15px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        organiz: {
            heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" },
            list: {
                paddingLeft: "15px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        strength: {
            list: {
                paddingLeft: "15px"
            }
        },
        achieve: {
            list: {
                paddingLeft: "15px"
            }
        },
        certificate: {
            content: {
                paddingLeft: "1px"
            }
        }
    },

    "21": {
        personalInfo: {
            box: {
                // backgroundColor: "#2e3c47ff",
                color: "white",
                // padding: "10px",
                // marginBottom: "15px",
                // justifyContent:"flex-reverse"
            },
            mixBox: {
                paddingLeft: "20px",
                paddingTop: "10px"
            },
            avatar: {
                card: {
                    background: "none",
                    display: "flex",
                    justifyContent: "flex-reverse"
                },
                imageDiv: {
                    // marginLeft: "-15px",
                    // marginTop: "-35px"
                }
            },
            summaryBox: {
                marginTop: "0px",
                fontWeight: "100"
            },
            position: {
                fontWeight: "100"
            }
        },
        summary: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"45%",
                color: "#F4C562",
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "10px"
            },
            list: {
                color: "#2e3c47ff"
            },
            eachSummary: {
                color: "#2e3c47ff"
            }
        },
        workExpe: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#F4C562",
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "10px",
                padding: "0px"
            },
            eachWorkPlace: {
                marginLeft: "0px",
                color: "#2e3c47ff"
            },
            organization: {
                fontWeight: "600"
            }

        },
        education: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px",
                // padding: "15px"
            },
            heading: {
                // paddingLeft:"45%",
                color: "#F4C562",
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            eachEducation: {
                // padding: "0px",
                color: "#2e3c47ff",
                // degree: {
                //     margin: "0px"
                // },

            },
            school: {
                fontWeight: "600"
            }

        },
        skills: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            eachSkillBox: {
                background: "#1C3345",
                border: "none"
            }
        },
        organiz: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            innerbox: {
                // padding: "10px"
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600"
            }
        },
        award: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"35%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            innerbox: {
                // padding: "0px",
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600"
            }
        },
        strength: {
            heading: {
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            list: {
                color: "#2e3c47ff"
            },
            eachStrength: {
                color: "#2e3c47ff"
            },

            title: {
                fontWeight: "600",
                color: "#2e3c47ff"
            }
        },
        language: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"43%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            listItem: {
                margin: "5px -5px",
                color: "#2e3c47ff"
            }
        },
        projects: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            eachProject: {
                color: "#2e3c47ff"
            }
        },
        achieve: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            innerbox: {
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600"
            }
        },
        certificate: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            eachcertificate: {
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600"
            }
        },
        contact: {
            box: {
                margin: "5px 10px -10px 10px"
            },
            heading: {
                display: "none"
            },
            list: {
                display: "flex",
                justifyContent: "space-between"
            }
        }

    },

    "23": {
        personalInfo: {
            box: {
                // backgroundColor:"#2e3c47ff",
                color: "#2e3c47ff",
                padding: "10px",
                marginBottom: "15px"
            },
            avatar: {
                card: {
                    background: "none"
                },
                imageDiv: {
                    // marginLeft: "-15px",
                    // marginTop: "35px",
                    width: "150px",
                    height: "150px",
                    position: "absolute",
                    top: "2rem",
                    left: "2.5rem",
                    border: "5px solid white"
                },
            },
            summaryBox: {
                marginTop: "-40px",
                display: "none"
            },
            position: {
                fontWeight: "100",
                marginLeft: "13rem"
            },
            name: {
                color: "white",
                marginLeft: "13rem",
                display: "flex",
                paddingTop: "1rem",
                fontSize: "35px"
            },
            firstName: {
                paddingRight: "10px"
            }
        },
        summary: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"45%",
                // color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px",
                fontWeight: "500"
            },
        },
        workExpe: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                // color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px"
            },
            eachWorkPlace: {
                marginLeft: "0px"
            },
            organization: {
                fontWeight: "600"
            }
        },
        education: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "5px",
                // padding: "15px"
            },
            heading: {
                // paddingLeft:"45%",
                // color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px"
            },
            eachEducation: {
                // padding: "10px",
                degree: {
                    margin: "5px"
                }
            },
            school: {
                fontWeight: "600"
            }
        },
        skills: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px"
            },
        },
        organiz: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                // color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "600"
            }
        },
        award: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"35%",
                // color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "600"
            }
        },
        language: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"43%",
                // color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px"
            },
            listItem: {
                margin: "5px -5px"
            }
        },
        projects: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px"
            },

        },
        achieve: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                // paddingBottom: "0px",
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px"
            },
            innerbox: {
                marginLeft: "0px"
            },
            title: {
                fontWeight: "600"
            }

        },
        certificate: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                // paddingBottom: "0px",
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px"
            },
            eachcertificate: {
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600"
            }
        },
        contact: {
            heading: {
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px",
                marginBottom: "15px"
            },
            listItem: {
                marginLeft: "-5px"
            }
        },
        strength: {
            heading: {
                background: "#2e3c47ff",
                color: "white",
                padding: "5px 0px 5px 10px",
                marginBottom: "15px"
            },
            title: {
                fontWeight: "600"
            }
        }

    },

    "24": {
        layoutStyles: {
            leftColumn: {

                heading: {
                    borderBottom: "2px solid white",
                    padding: "0px",
                    marginBottom: "16px"
                },
                eachSkillBox: {
                    border: "2px solid white"
                },
                eachLanguageBox: {
                    border: "2px solid white"
                }
            },
            rightColumn: {
                eachSkillBox: {
                    border: "2px solid #73869cff"
                },
                eachLanguageBox: {
                    border: "2px solid #73869cff"
                }

            }
        },
        personalInfo: {
            box: {
                marginBottom: "1rem"
            },
            mixBox: {
                display: "flex",
                flexDirection: "column"
            },
            avatar: {
                card: {
                    background: "none"
                },
                imageDiv: {
                    width: "170px",
                    height: "170px",
                    border: "5px solid white"
                }
            },
            summaryBox: {
                display: "none"
            },
            name: {
                // display:"flex",
                fontSize: "26px"
            },
            position: {
                fontWeight: "100",
                color: "white",
                display: "none"
            },
            anotherBox: {
                // marginLeft: "-140px",
                // marginTop: "10px"
            }
        },
        summary: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"45%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #73869cff",
                width: "fit-content",
                marginBottom: "10px",
                fontWeight: "500",
                padding: "0px"
            },
        },
        workExpe: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"40%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #73869cff",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            eachWorkPlace: {
                margin: "15px 0px"
            },
            organization: {
                fontWeight: "600"
            }
        },

        education: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "30px",
                // padding: "15px"
            },
            heading: {
                // paddingLeft:"45%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #73869cff",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            eachEducation: {
                // padding: "10px",
            },
            school: {
                fontWeight: "600"
            }
        },
        skills: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "30px",
                // marginLeft: "20px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#73869cff",
                borderBottom: "2px solid #73869cff",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            eachSkillBox: {
                border: "1px solid white"
            },
            listItem: {
                marginLeft: "90px"
            }
        },
        organiz: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"40%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #73869cff",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "600"
            }
        },
        award: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"35%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid white",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            innerbox: {
                // padding: "10px"
            }
        },
        language: {
            viewType: "block",
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "30px"
            },
            heading: {
                // marginLeft:"43%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #73869cff",
                width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            listItem: {
                margin: "5px -5px"
            }
        },
        projects: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #73869cff",
                width: "fit-content",
                marginBottom: "15px",
                // background:"#2e3c47ff",
                // color:"white",
                padding: " 0px"
            },
            title: {
                fontWeight: "600"
            }

        },
        achieve: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #73869cff",
                width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",

            },
            title: {
                fontWeight: "600"
            }

        },
        certificate: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #73869cff",
                width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
            },
            eachcertificate: {
                // color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600"
            }

        },
        strength: {
            heading: {
                background: "#2e3c47ff",
                color: "white",
                padding: " 0px",
                marginBottom: "15px",
                borderBottom: "2px solid #73869cff"
            },
            title: {
                fontWeight: "600"
            },
        },
        contact: {
            box: {
                marginBottom: "30px"
            },
            heading: {
                // background:"#2e3c47ff",
                color: "white",
                // padding:"5px 0px 5px 10px",
                marginBottom: "15px",
                borderBottom: "2px solid white"
            },
            listItem: {
                marginLeft: "-5px"
            }
        }

    },

    "25": {
        personalInfo: {
            box: {
                // backgroundColor:"#2e3c47ff",
                color: "#2e3c47ff",
                padding: "-10px 0px -10px 0px",
                marginBottom: "15px"
            },
            avatar: {
                card: {
                    background: "none"
                },
                imageDiv: {
                    marginLeft: "20px",
                    marginTop: "35px",
                    width: "245px",
                    height: "245px",
                    position: "absolute",
                    bottom: "-14.6rem",
                    right: "-1.4rem",
                    border: "10px solid white",
                    boxShadow: "none"
                },
            },
            summaryBox: {
                marginTop: "-40px",
                display: "none"
            },
            position: {
                fontWeight: "100",
                paddingLeft: "2rem",
                marginLeft: "1rem"
            },
            name: {
                color: "white",
                marginLeft: "1.5rem",
                display: "flex",
                paddingTop: "3rem",
                paddingLeft: "1.2rem",
                fontSize: "43px"
            },
            firstName: {
                paddingRight: "10px"
            }
        },
        summary: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"45%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "500"
            },
        },
        workExpe: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px",

            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            eachWorkPlace: {
                // padding: "10px",
                marginLeft: "0px"
            },
            organization: {
                fontWeight: "600"
            }
        },
        education: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "5px",
                // padding: "15px"
            },
            heading: {
                // paddingLeft:"45%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            eachEducation: {
                // padding: "10px",
                degree: {
                    margin: "5px"
                }
            },
            school: {
                fontWeight: "600"
            },
            listItem: {
                marginLeft: "-5px"
            },
            content: {
                marginLeft: "-5px"
            }
        },
        skills: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "25px"
            },
            heading: {
                // marginLeft:"47%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
        },
        organiz: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "600"
            }
        },
        award: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"35%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "600"
            }
        },
        language: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "25px"
            },
            heading: {
                // marginLeft:"43%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            listItem: {
                margin: "5px -5px"
            }
        },
        projects: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            title: {
                fontWeight: "600"
            }

        },
        achieve: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            title: {
                fontWeight: "600"
            }

        },
        certificate: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            eachcertificate: {
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600"
            }
        },
        contact: {
            box: {
                marginBottom: "25px"
            },
            heading: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            listItem: {
                marginLeft: "-5px"
            }
        }

    },

    "26": {
        personalInfo: {
            box: {
                // backgroundColor:"#2e3c47ff",
                color: "#2e3c47ff",
                padding: "20px 20px 10px 10px",
                marginBottom: "0px"
            },
            avatar: {
                card: {
                    background: "none"
                },
                imageDiv: {
                    // marginLeft: "-15px",
                    // marginTop: "35px",
                    width: "170px",
                    height: "170px",
                    border: "3px solid black",
                    boxShadow: "none"
                },
            },
            mixBox: {
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                marginLeft: "-30px"
            },
            summaryBox: {
                marginTop: "-40px",
                display: "none"
            },
            position: {
                fontWeight: "100",
                // marginLeft: "14.5rem",
                fontSize: "24px"
            },
            name: {
                // color: "white",
                // marginLeft: "14.5rem",
                // display: "flex",
                marginTop: "1.5rem",
                fontSize: "35px"
            },
            firstName: {
                paddingRight: "10px",
                fontWeight: "100"
            },
            lastName: {
                fontWeight: "600"
            }
        },
        summary: {
            box: {
                borderBottom: "4px solid #7D7D7D",
                marginBottom: "15px",
                paddingBottom: "15px"
            },
            heading: {
                // marginLeft:"45%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "600"
            },
        },
        workExpe: {
            box: {
                borderBottom: "4px solid #7D7D7D",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            eachWorkPlace: {
                // padding: "10px",
                marginLeft: "0px"
            },
            organization: {
                fontWeight: "500"
            }
        },
        education: {
            box: {
                borderBottom: "4px solid #7D7D7D",
                marginBottom: "5px",
                // padding: "15px"
            },
            heading: {
                // paddingLeft:"45%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            eachEducation: {
                // padding: "10px",
                degree: {
                    margin: "5px"
                }
            },
            school: {
                fontWeight: "500"
            }
        },
        skills: {
            box: {
                borderBottom: "4px solid #7D7D7D",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
        },
        organiz: {
            box: {
                borderBottom: "4px solid #7D7D7D",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "500"
            }
        },
        award: {
            box: {
                borderBottom: "4px solid #7D7D7D",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"35%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "500"
            }
        },
        language: {
            box: {
                borderBottom: "4px solid #7D7D7D",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"43%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            listItem: {
                margin: "5px -5px"
            }
        },
        projects: {
            box: {
                borderBottom: "4px solid #7D7D7D",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            title: {
                fontWeight: "500"
            }

        },
        achieve: {
            box: {
                borderBottom: "4px solid #7D7D7D",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            title: {
                fontWeight: "500"
            }

        },
        certificate: {
            box: {
                borderBottom: "4px solid #7D7D7D",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            eachcertificate: {
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "500"
            }
        },
        contact: {
            box: {
                background: "#E2E2E2",
                padding: "5px 10px 5px 10px"
            },
            heading: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px",
                paddingBottom: "0px",
                display: "none"
            },
            list: {
                display: "flex",
                justifyContent: "space-around"
            },
            listItem: {
                // marginLeft: "-5px",
                padding: "5px 10px 5px 10px",
                borderRight: "1px solid  #7D7D7D"
            }
        },
        strength: {
            box: {
                borderBottom: "4px solid #7D7D7D",
            },
            heading: {
                fontWeight: "700",

                // borderBottom: "2px solid #2e3c47ff",
                padding: "0px",
                marginBottom: "15px"
            },
            title: {
                fontWeight: "500"
            }
        },


    },

    "27": {
        layoutStyles: {
            leftColumn: {

                heading: {
                    color: "#E5A86B",
                    textTransform: "uppercase",
                    borderTop: "10px solid white",
                    // width:"50px",
                    paddingTop: "5px"
                }
            },
            rightColumn: {

                heading: {
                    color: "#353941",
                    textTransform: "uppercase",
                    borderTop: "10px solid #353941",
                    // width:"50px",
                    paddingTop: "5px"
                }
            }
        },
        personalInfo: {
            box: {
                // backgroundColor:"#2e3c47ff",
                color: "#2e3c47ff",
                // padding: "20px 20px 10px 0px",
                marginBottom: "0px",
                marginLeft: "-20px"
            },
            avatar: {
                card: {
                    background: "none",
                    background: "#353941",
                    width: "253px",
                    height: "200px"
                },
                imageDiv: {
                    // marginLeft: "-15px",
                    marginTop: "0px",
                    position: "absolute",
                    top: "25px",
                    left: "45px",
                    width: "150px",
                    height: "150px",
                    border: "7px solid white",
                    boxShadow: "none",
                },
            },
            mixBox: {
                display: "flex",
                // justifyContent: "space-between",
                marginLeft: "0px"
            },
            summaryBox: {
                marginTop: "-40px",
                display: "none"
            },
            position: {
                fontWeight: "100",
                // marginLeft: "14.5rem",
                fontSize: "14px"
            },
            name: {
                // color: "white",
                // marginLeft: "14.5rem",
                display: "flex",
                marginTop: "4rem",
                fontSize: "35px"
            },
            firstName: {
                paddingRight: "10px",
                fontWeight: "600"
            },
            lastName: {
                fontWeight: "600"
            }
        },
        summary: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "15px",
                paddingBottom: "25px"
            },
            heading: {
                // marginLeft:"45%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "600"
            },
        },
        workExpe: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "25px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            eachWorkPlace: {
                // padding: "10px",
                marginLeft: "0px",
                marginBottom: "5px"
            },
            organization: {
                fontWeight: "500",
                marginBottom: "5px",
                // borderBottom: "1px solid #353941"
            },
            listItem: {
                marginBottom: "5px"
            },
            role: {
                marginBottom: "5px",
                textTransform:"uppercase"
            }
        },
        education: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "25px",
                // padding: "15px"
            },
            heading: {
                // paddingLeft:"45%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width:"fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            eachEducation: {
                // padding: "10px",
                degree: {
                    margin: "5px"
                }
            },
            school: {
                fontWeight: "500",
                marginBottom: "5px",
                textTransform:"uppercase",
                // borderBottom: "1px solid #353941"
            },
            degree: {
                marginBottom: "5px",
                textTransform:"uppercase"
            },
            listItem: {
                marginBottom: "5px"
            }
        },
        skills: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "25px"
            },
            heading: {
                // marginLeft:"47%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
        },
        organiz: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "25px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "500",
                marginBottom: "5px"
            }
        },
        award: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "25px"
            },
            heading: {
                // marginLeft:"35%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "500",
                marginBottom: "5px"
            }
        },
        language: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "25px"
            },
            heading: {
                // marginLeft:"43%",
                color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            listItem: {
                margin: "0px 0px 5px -5px",
                borderBottom: "1px solid #353941"
            }
        },
        projects: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "25px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            title: {
                fontWeight: "500",
                marginBottom: "5px"
            }

        },
        achieve: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "25px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            title: {
                fontWeight: "500",
                marginBottom: "5px"
            }

        },
        certificate: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "25px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #2e3c47ff",
                // width: "fit-content",
                marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "700"
            },
            eachcertificate: {
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "500",
                marginBottom: "5px"
            }
        },
        contact: {
            box: {
                background: "#E5A86B",
                padding: " 15px  "
            },
            heading: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px",
                paddingBottom: "0px",
                display: "none"
            },
            list: {
                display: "flex",
                justifyContent: "space-around"
            },
            listItem: {
                // marginLeft: "-5px",
                padding: "5px 10px 5px 10px",
                // borderRight: "1px solid  #7D7D7D"
            }
        },
        strength: {
            box: {
                // borderBottom: "4px solid #7D7D7D",
                marginBottom: "25px"
            },
            heading: {
                fontWeight: "700",

                // borderBottom: "2px solid #2e3c47ff",
                padding: "0px",
                marginBottom: "15px"
            },
            title: {
                fontWeight: "500",
                marginBottom: "5px"
            }
        },


    },

    "112": {
        vars: {
            "--heading-color": "#003366",
            // "--heading-spacing": "0.75rem",
            "--accent-color": "#3498db",
            "--secondary-heading-color": "gray",
            "--content-color": "#111",
            "--section-padding": "1rem"
        },

        personalInfo: {
            box: {
                border: "1px solid white",
                marginTop: '2rem',
            },
            name: {
                color: "#003366",
                display: 'flex',
                gap: '5px'
            },
            position: {
                color: "#003366",
                fontWeight: "400",
            },
            summary: {
                color: "var(--content-color)",
                paddingTop: "10px"
            },
            avatar: {
                card: {
                    display: 'none'
                }
            }
        },
        contact: {
            box: {
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column'
            },
            heading: {
                display: "none"
            },
            listItem: {
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: "10px"
            },
            icon: {
                color: "#003366",
                marginLeft: "10px"
            },
            deleteIcon: {
                marginLeft: "10px",
                color: '#003366',
                border: 'none'
            }
        },

        skills: {
            heading: {
                ...sharedStyles["2"].heading,

            },
            eachSkillBox: {
                marginTop: '.5rem',
                borderRadius: "1vh",
                fontWeight: "400",
                backgroundColor: "var(--heading-color)",
                border: "none",
                color: "white"
            }
        },
        workExpe: {
            box: {
                border: "none"
            },
            heading: {
                ...sharedStyles["2"].heading,
            },
            role: {
                color: "var(--content-color)"
            },
            organization: {
                color: "var(--content-color)"
            },
            dates: {
                color: "gray"
            },
            wholeList: {
                listStyle: "square"
            },
        },
        education: {
            box: {
                border: "none"
            },
            heading: {
                ...sharedStyles["2"].heading,
            },
            eachSchool: {
                color: "var(--content-color)"
            },
            city: {
                color: "gray"
            },
        },
        organiz: {
            box: {
            },
            heading: {
                ...sharedStyles["2"].heading,
                marginBottom: "10px"
            },
            innerBox: {
                display: "flex",
                flexWrap: "wrap"
            },
            eachOrganiz: {
                padding: "0px 20px",
                marginBottom: "20px"
            },
            title: {
                color: "var(--content-color)"
            },
            date: {
                textAlign: "left"
            },
        }
    },

    "113": {
        vars: {
            "--heading-color": "#333",
            "--secondary-heading-color": "#2091FF",
            "--content-color": "gray",
        },
        designIcons1: {
            box: {
                background: "rgba(112, 24, 166, 0.3)",
                height: "90px",
                width: "90px",
                borderRadius: "15%",
                // border: "3.5px solid white",
                position: "absolute",
                top: "9%",
                left: "22%",
                transform: "rotate(45deg)"
            }
        },
        designIcons2: {
            box: {
                // background: "linear-gradient(150deg, pink 50%, transparent 50%)",
                background: "pink",
                height: "100px",
                width: "100px",
                borderRadius: "20%",
                // border: "3.5px solid white",
                position: "absolute",
                top: "5%",
                left: "17%",
                zIndex: "1",
                transform: "rotate(45deg)"
            }
        },
        designIcons3: {
            box: {
                background: "rgba(16, 164, 172, 0.2)",
                height: "90px",
                width: "90px",
                borderRadius: "15%",
                // border: "3.5px solid white",
                position: "absolute",
                top: "10%",
                left: "16%",
                zIndex: "1",
                transform: "rotate(45deg)"
            }
        },
        personalInfo: {
            box: {
                border: "1px solid white",
                position: "relative"
            },
            name: {
                color: "var(--heading-color)",
            },
            position: {
                color: "var(--secondary-heading-color)",
                fontWeight: "400",
            },
            summary: {
                display: "none",
            },
            avatar: {
                box: {
                    paddingLeft: "20px"
                },
                imageDiv: {
                    zIndex: "10",
                }
            },
            anotherBox: {
                paddingLeft: "40px"
            }
        },
        contact: {
            box: {
                display: "flex",
                flexWrap: "wrap",
                position: "relative"
            },
            heading: {
                display: "none"
            },
            innerBox: {
                marginRight: "25px"
            },
            icon: {
                color: "var(--content-color)"
            },
            content: {
                marginLeft: "5px",
                color: "var(--content-color)"
            },
            anchor: {
                marginLeft: "5px",
                color: "var(--content-color)"
            },
            addIcon: {
                height: "40px"
            },
            list: {
                display: "flex"
            }
        },
        summary: {
            box: {
                marginBottom: "25px"
            },
            heading: {
                ...sharedStyles["3"].heading
            },
            content: {
                ...sharedStyles["3"].content
            }
        },
        workExpe: {
            box: {
                border: "none",
                paddingLeft: "0px"
            },
            heading: {
                ...sharedStyles["3"].heading,
                textDecoration: "none"
            },
            role: {
                fontSize: "18px"
            },
            organization: {
                color: "var(--secondary-heading-color)",
                padding: "5px 0px",
                fontSize: "16px"
            },
            dates: {
                color: "var(--content-color)",
            },
            wholeList: {
                color: "var(--content-color)"
            }
        },
        education: {
            box: {
                border: "none",
                paddingLeft: "0px"
            },
            heading: {
                ...sharedStyles["3"].heading,
                textDecoration: "none",
            },
            name: {
                fontSize: "18px"
            },
            city: {
                fontSize: "16px",
                color: "var(--secondary-heading-color)",
                paddingBottom: "5px"
            },
            description: {
                fontSize: "14px"
            }
        },
        skills: {
            heading: {
                ...sharedStyles["3"].heading,
                textDecoration: "none",
                marginBottom: "15px"
            },
            eachSkillBox: {
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "1px solid black",
                padding: "4px"
            }
        },
        achieve: {
            box: {
                marginTop: "25px",
                textAlign: "left",
            },
            heading: {
                ...sharedStyles["3"].heading
            },
            content: {
                padding: "2px",
                color: "var(--content-color)"
            }
        },
        strength: {
            box: {
                marginTop: "0px",
                textAlign: "left",
                marginBottom: "25px"
            },
            heading: {
                ...sharedStyles["3"].heading
            },
            content: {
                padding: "2px",
                color: "var(--content-color)"
            }
        },
        projects: {
            box: {
                padding: "0px",
                borderLeft: "0px solid white"
            },
            heading: {
                textDecoration: "none",
                ...sharedStyles["3"].heading
            },
            title: {
                fontSize: "18px"
            }
        },
        certificate: {
            box: {
                marginTop: "15px"
            },
            heading: {
                ...sharedStyles["3"].heading
            },
            eachcertificate: {
                marginBottom: "5px"
            },
            title: {
                fontSize: "18px",
                fontWeight: "700"
            },
            organiz: {
                fontSize: "16px",
                color: "var(--secondary-heading-color)",
            },
            date: {
                padding: "2px",
                color: "var(--content-color)",
                fontStyle: "italic"
            }
        }
    },

    "115": {
        vars: {
            '--primary-color': '#163853',
            '--secondary-color': '#333',
            '--text-color': 'white',
        },
        avatar: {
            position: {
                display: "none"
            },
            heading: {
                display: "none"
            },
            card: {
                background: "var(--primary-color)",
                paddingTop: "0rem",
                paddingBottom: "0rem"
            },
            imageDiv: {
                position: "relative",
                background: "white",
                width: "160px",
                height: "160px",
                top: "5rem",
                marginTop: "0px",
                border: "6px solid white",
                boxShadow: "0 0 0 10px var(--primary-color)"
            }
        },
        personalInfo: {
            box: {
                border: 'none',
                color: "var(--text-color)"
            },
            position: {
                marginBottom: "5px"
            },
            mixBox: {
                paddingLeft: "20px",
                paddingTop: "10px"
            }
        },
        education: {
            box: {
                border: "none",
                paddingLeft: "0rem",
                paddingRight: "2rem"
            },
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        skills: {
            box: {
                paddingRight: "2rem"
            },
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
            list: "true",
            wholeList: {
                // marginLeft: "1rem"
                paddingLeft: "15px"
            },
            everySkillBox: {
            }
        },
        workExpe: {
            box: {
                border: "none",
                paddingLeft: "0rem"
            },
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
            sideline: true,
            timeline: {
                borderLeft: "2px solid black"
            },
            dot: {
                width: "0px",
                height: "0px"
            },
            eachWorkPlace: {
                paddingLeft: "0px",
                marginLeft: "0px"
            },
            content: {
                marginLeft: "0px"
            }
        },
        contact: {
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
            listItem: {
                paddingLeft: "1px"
            },
            visibleFields: ["phoneNo", "email", "address"],
        },
        language: {
            box: {
                paddingRight: "2rem",
                marginBottom: "1rem"
            },
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
            list: "true",
            wholeList: {
                marginLeft: "-4px"
            }
        },
        achieve: {
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
        },
        projects: {
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        summary: {
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
        },
        strength: {
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
            list: {
                paddingLeft: "16px"
            }
        },
        organiz: {
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
            list: {
                paddingLeft: "15px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        award: {
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
        },
        certificate: {
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
            },
            content: {
                paddingLeft: "0px"
            }
        }
    },

    "116": {
        vars: {
            "--primary-color": "#3e465b",
            "--secondary-color": "#fff"
        },
        layoutStyles: {
            leftColumn: {
                heading: {
                    borderBottom: "2px solid #ffffff",
                    marginBottom: "1rem"
                },
                eachSkillBox: {
                    border: "1px solid white"
                },
                eachLanguageBox: {
                    border: "1px solid white"
                }
            },
            rightColumn: {
                heading: {
                    color: "var(--primary-color)",
                    borderBottom: "2px solid #394E63",
                    borderBottom: "2px solid var(--primary-color)",
                    marginBottom: "1rem"
                },
                eachSkillBox: {
                    border: "1px solid #3e465b"
                },
                eachLanguageBox: {
                    border: "1px solid #3e465b"
                }
            }
        },
        avatar: {
            position: {
                display: "none"
            },
            heading: {
                display: "none"
            },
            card: {
                background: "none",
            },
            imageDiv: {
                border: "none"
            }
        },
        contact: {
            visibleFields: ["phoneNo", "email", "portfolio", "address"],
            box: {
                paddingRight: "1rem",
                paddingLeft: "1rem"
            },
            pickerWrapper: {
                backgroundColor: "#3e465b"
            },
            heading: {
                color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
            },
            innerBox: {
                color: "var(--primary-color)"
            },
            anchor: {
                color: "var(--primary-color)"
            }
        },
        summary: {
            box: {
                paddingRight: "1rem",
                paddingLeft: "1rem"
            },
            heading: {
                // color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
                marginBottom: "15px"
            },
            content: {
                marginTop: "5px",
                marginBottom: "10px",
                // color: "var(--primary-color)"
            }
        },
        language: {
            box: {
                paddingRight: "1rem",
                paddingLeft: "1rem"
            },
            list: "true",
            heading: {
                // color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)"
            },
            wholeList: {
                marginTop: "5px",
                marginBottom: "10px",
                paddingLeft: "16px"
                // color: "var(--primary-color)",
            }
        },
        skills: {
            box: {
                paddingRight: "1rem",
                paddingLeft: "1rem"
            },
            heading: {
                // color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
                marginBottom: "15px",
                paddingBottom: "0px"
            },
            everySkillBox: {
                marginTop: "10px"
            },
            eachSkillBox: {
                // color: "var(--primary-color)",
                border: "1px solid white"
            },
            wholeList: {
                paddingLeft: "16px"
            }
        },
        personalInfo: {
            box: {
                // color: "var(--primary-color)",
                marginTop: "2rem",
                fontSize: "20px",
                marginBottom: "1rem",
                border: "none"
            },
            position: {
                // marginRight: "16rem",
                paddingBottom: "5px",
                // borderBottom: "3px solid var(--primary-color)"
            },
            summary: {
                display: "none"
            },
            /* summaryBox:{
                paddingLeft: "0px"
            }, */
            /* anotherBox:{
                paddingLeft: "0px"
            },
            mixBox:{
                paddingLeft: "0px"
            }, */
        },
        education: {
            box: {
                // color: "var(--primary-color)",
                border: "none",
                paddingTop: "1rem",
                padding: "0rem 1rem"
            },
            heading: {
                // color: "var(--primary-color)",
                textDecoration: "none",
                // borderBottom: "2px solid var(--primary-color)",
                marginBottom: "5px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        workExpe: {
            box: {
                // color: "var(--primary-color)",
                border: "none",
                paddingTop: "1.5rem",
                padding: "0rem 1rem"
            },
            heading: {
                // color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
                marginBottom: "5px"
            },
            eachWorkPlace: {
                marginLeft: "2px"
            },
            content: {
                paddingLeft: "0px",
                marginLeft: "0px"
            },
        },
        projects: {
            box: {
                // color: "var(--primary-color)",
                border: "none",
                paddingTop: "1.5rem",
                padding: "0rem 1rem"
            },
            heading: {
                // color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
                marginBottom: "5px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        certificate: {
            box: {
                // color: "var(--primary-color)",
                border: "none",
                paddingTop: "1.5rem",
                padding: "0rem 1rem",
                // paddingLeft: "1rem"
            },
            heading: {
                // color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
                marginBottom: "5px"
            },
            innerBox: {
                // paddingLeft: "10px"
            }
        },
        organiz: {
            box: {
                padding: "0rem 1rem"
            },
            list: {
                paddingLeft: "15px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        strength: {
            box: {
                padding: "0rem 1rem"
            },
            list: {
                paddingLeft: "15px"
            }
        },
        award: {
            box: {
                padding: "0rem 1rem"
            }
        },
        achieve: {
            box: {
                padding: "0rem 1rem"
            }
        }
    },

    "117": {
        vars: {
            "--primary-color": '#2EBCB0',
        },

        avatar: {
            showAvatar: true,
            showImage: true,
            card: {
                background: "none",
                width: "300px",
                height: '150px',
            },
            imageDiv: {
                marginLeft: '0px'
            },
            nextLine: {
                display: 'none'
            },
            sideBox: 'true',
            innerBox: {
                position: 'relative',
                left: '143px',
                top: '-130px',
                textAlign: 'left'
            },
            heading: {
                color: '#333',
                fontSize: '25px',
            },
            position: {
                fontSize: '18px',
                color: 'var(--primary-color)'
            }
        },

        contact: {
            box: {
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column'
            },
            heading: {
                display: "none"
            },
            listItem: {
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                // gap: "10px"
            },
            icon: {
                color: "#2EBCB0",
                marginLeft: "10px"
            },
            deleteIcon: {
                marginLeft: "10px",
                color: '#2EBCB0',
                border: 'none'
            },
            pickerWrapper: {

            }
        },

        summary: {
            box: {
                paddingLeft: "0px",
                marginBottom: "15px"
            },
            heading: {
                ...sharedStyles["7"].heading,
                marginBottom: "15px",
                fontSize: "23px"
            },
            content: {
                paddingLeft: "10px"
            }
        },
        workExpe: {
            viewType: "list",
            box: {
                border: 'none',
            },
            heading: {
                ...sharedStyles["7"].heading
            },
            dates: {
                color: 'var(--primary-color)'
            },
            wholeList: {
                margin: '5px 0px 5px 15px',
                padding: '4px',
                borderLeft: '1px solid var(--primary-color)',
                borderRight: '1px solid var(--primary-color)',
                backgroundImage: 'linear-gradient(to right, var(--primary-color) 2%, white 2%, white 98%, var(--primary-color) 98%), linear-gradient(to right, var(--primary-color) 2%, white 2%, white 98%, var(--primary-color) 98%)',
                backgroundSize: '100% 1px',
                backgroundPosition: 'top, bottom',
                backgroundRepeat: 'no-repeat',

            },
            bulletIcon: {
                type: "fontawesome",
                icon: "faWindowMinimize",
                color: "var(--primary-color)",
                size: "0.5rem",
                marginRight: "0.5rem",
            },
            eachWorkPlace: {
                paddingLeft: '0px'
            },
            sideline: 'false',
            timeline: {
                borderLeft: '1px solid var(--primary-color)',
                paddingLeft: '13px'
            },
            dot: {
                backgroundColor: 'var(--primary-color)',
                top: '0px',
                left: '-19px'
            }
        },
        education: {
            viewType: "list",
            box: {
                border: 'none'
            },
            heading: {
                ...sharedStyles["7"].heading
            },
            eachSchool: {
                paddingLeft: '10px'
            },
            sideline: 'true',
            timeline: {
                border: 'none',
                paddingLeft: '10px'
            },
            dot: {
                backgroundColor: 'var(--primary-color)',
                top: '7px',
                left: '0px'
            }
        },
        projects: {
            viewType: "list",
            box: {
                border: 'none'
            },
            heading: {
                ...sharedStyles["7"].heading
            },
            eachProject: {
                paddingLeft: '10px'
            },
        },
        skills: {
            viewType: "block",
            box: {
                marginBottom: '2rem'
            },
            heading: {
                ...sharedStyles["7"].heading,
                marginBottom: "15px"
            },
            everySkillBox: {
                paddingLeft: '10px',
            },
            eachSkillBox: {
                color: 'white',
                backgroundColor: 'var(--primary-color)',
                border: 'none',
                borderRadius: '5px',
                padding: '6px 8px'
            }
        },
        organiz: {
            viewType: "block",
            box: {
                border: 'none',
                marginBottom: '1rem'
            },
            heading: {
                ...sharedStyles["7"].heading,
                textAlign: 'left',
                marginBottom: '10px',
                color: '#333',
            },
            innerbox: {
                textAlign: 'left',
                paddingLeft: '10px'
            },
            title: {
                marginBottom: '5px',
                fontWeight: "600"
            },
            listItem: {
                fontStyle: "italic"
            }
        },
        award: {
            // viewType: "block",
            box: {
                border: 'none',
                marginBottom: '1rem'
            },
            heading: {
                ...sharedStyles["7"].heading,
                textAlign: 'left',
                marginBottom: '10px',
                color: '#333',
            },
            innerbox: {
                textAlign: 'left',
                paddingLeft: '10px'
            },
            title: {
                fontWeight: '600'
            },
        },
        language: {
            viewType: "list",
            heading: {
                ...sharedStyles["7"].heading,
            },
            list: 'true',
            wholeList: {
                paddingLeft: '30px'
            }
        },
        certificate: {
            viewType: "list",
            box: {
                border: 'none',
                marginBottom: '1rem'
            },
            heading: {
                ...sharedStyles["7"].heading,
                textAlign: 'left',
                marginBottom: '10px',
                color: '#333',
            },
            innerBox: {
                textAlign: 'left',
                paddingLeft: '10px'
            },
            title: {
                fontSize: "16px",
                fontWeight: "700"
            },
            organiz: {
                fontSize: "15px",
                marginLeft: "2px",
                color: 'var(--primary-color)'
            },
            date: {
                marginLeft: "2px",
                fontStyle: 'italic',
            },
            eachcertificate: {
                marginBottom: '5px'
            }
        },
        achieve: {
            box: {
                textAlign: "left",
                paddingLeft: "15px",
                marginBottom: "15px"
            },
            heading: {
                ...sharedStyles["7"].heading,
                marginBottom: "5px"
            },
            innerbox: {
                paddingLeft: "10px"
            },
            list: {
                paddingLeft: "15px"
            },
        }
    },

    "501": {
        vars: {

        },
        personalInfo: {
            box: {
                border: "none"
            },
            anotherBox: {
                display: "none"
            },
            avatar: {
                box: {
                    padding: "0px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    margin: "auto"
                },
                imageDiv: {
                    width: "150px",
                    marginBottom: "1.5rem",
                    boxShadow: "0 0 0 10px #394E63, 0 0 0 15px #f0f0f0"
                }
            },
            summaryBox: {
                display: "none"
            },
            list: {
                display: "none"
            }
        },
        avatar: {
            box: {
                marginBottom: "2rem",
                paddingTop: "20px"
            },
            hexWrapper: {
                display: "none"
            },
            innerBox: {
                textAlign: "left"
            },
            contHeading: {
                textAlign: "left",
                fontSize: "2rem",
                color: "#394E63",
                paddingLeft: "5rem"
            },
            firstName: {
                fontWeight: "400"
            }
        },
        summary: {
            about: "true",
            box: {
                marginBottom: "2rem"
            },
            heading: {
                ...sharedStyles["501"].heading,
            },
            content: {
                padding: "0px",
                lineHeight: "18px"
            }
        },
        workExpe: {
            dottedheading: "true",
            layoutType: "layout2",
            viewType: "block",
            dates: {
                fontSize: "0.8rem",
                fontWeight: "400"
            },
            box: {
                marginBottom: "2rem"
            },
            heading: {
                ...sharedStyles["501"].heading,
            },
            leftWork: {
                width: "30%",
            },
            rightWork: {
                width: "70%"
            },
            organization: {
                borderLeft: "1px solid black",
                paddingLeft: "1rem",
                fontSize: "1.1rem"
            },
            eachWorkPlace: {
                marginBottom: "1rem"
            },
            eachExperience: {
                borderLeft: "1px solid black",
                paddingLeft: "1rem"
            }
        },
        education: {
            dottedheading: "true",
            layoutType: "layout2",
            box: {
                marginBottom: "2rem"
            },
            heading: {
                ...sharedStyles["501"].heading,
            },
            viewType: "block",
            leftEdu: {
                width: "30%",
            },
            rightEdu: {
                width: "70%"
            },
            degree: {
                borderLeft: "1px solid black",
                fontSize: "1.1rem",
                paddingLeft: "1rem",
            },
            dates: {
                fontSize: "0.8rem",
                fontWeight: "400"
            },
            eachEducation: {
                marginBottom: "1rem"
            },
            paragraphWrapper: {
                borderLeft: "1px solid black",
                paddingLeft: "1rem"
            }
        },
        skills: {
            layoutType: "layout2",
            box: {
                marginBottom: "2rem"
            },
            heading: {
                ...sharedStyles["501"].heading,
            },
            backBars: {
                background: "#394E63"
            },
            perValues: {
                color: "green",
                display: "none",
            }
        },
        language: {
            viewType: "block",
            box: {
                fontSize: "1rem",
                marginBottom: "1rem"
            },
            heading: {
                ...sharedStyles["501"].heading,
            },
            eachLanguageBox: {
                border: "1px solid #ccc"
            }
        },
        contact: {
            box: {
                width: "118%",
                marginBottom: "2rem",
                marginLeft: "-1.5rem",
                backgroundColor: "#32A548",
                paddingLeft: "1.5rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem"
            },
            heading: {
                marginBottom: "0.1rem",
                ...sharedStyles["501"].heading
            },
            listItem: {
                marginBottom: "0.3rem"
            }
        },
        projects: {
            heading: {
                ...sharedStyles["501"].heading,
            },
            eachProject: {
                paddingLeft: "0px"
            },
            title: {
                fontWeight: "700",
                fontSize: "1.2rem"
            }
        },
        organiz: {
            heading: {
                ...sharedStyles["501"].heading,
            }
        },
        strength: {
            heading: {
                ...sharedStyles["501"].heading
            }
        },
        award: {
            heading: {
                ...sharedStyles["501"].heading
            }
        },
        achieve: {
            heading: {
                ...sharedStyles["501"].heading
            }
        },
        certificate: {
            heading: {
                ...sharedStyles["501"].heading
            }
        }
    },

    "502": {
        personalInfo: {
            box: {
                display: "flex",
            },
            avatar: {
                box: {
                    display: "none"
                }
            },
            anotherBox: {
                marginLeft: "0px"
            },
            name: {
                display: "flex",
                borderBottom: "2px solid #545454",
                color: "#545454",
                fontSize: "2.5rem"
            },
            lastName: {
                marginLeft: "10px",
                fontWeight: "700"
            },
            position: {
                color: "#545454",
                fontSize: "1.2rem"
            },
            list: {
                display: "none"
            },
            summaryBox: {
                display: "none"
            }
        },
        contact: {
            heading: {
                display: "none"
            },
            listItem: {
                display: "flex",
                flexDirection: "row-reverse"
            },
            iconWrapper: {
                paddingLeft: "15px"
            }
        },
        summary: {
            heading: {
                ...sharedStyles["502"].heading,
                textAlign: "center",
                width: "80%",
                margin: "auto",
                marginBottom: "0px"
            },
            eachSummary: {
                textAlign: "justify",
                paddingTop: "10px"
            },
            list: {
                textAlign: "justify",
                paddingTop: "10px"
            }
        },
        education: {
            heading: {
                ...sharedStyles["502"].heading,
                width: "70%",
            }
        },
        skills:{
            box:{
                marginBottom: "35px"
            },
            heading:{
                ...sharedStyles["502"].heading,
                width: "70%"
            },
            wholeList:{
                paddingLeft: "15px"
            }
        },
        certificate:{
            heading:{
                ...sharedStyles["502"].heading,
                width:"70%"
            }
        },
        workExpe:{
            heading:{
                ...sharedStyles["502"].heading,
                width: "80%"
            }
        },
        projects: {
            heading:{
                ...sharedStyles["502"].heading,
                width: "70%"
            }
        },
        organiz:{
            heading:{
                ...sharedStyles["502"].heading,
                width: "70%"
            }
        },
        award:{
            heading:{
                ...sharedStyles["502"].heading,
                width: "80%"
            }
        },
        language:{
            heading:{
                ...sharedStyles["502"].heading,
                width: "70%"
            }
        },
        strength:{
            heading:{
                ...sharedStyles["502"].heading,
                width: "70%"
            }
        },
        achieve:{
            heading:{
                ...sharedStyles["502"].heading,
                width: "70%"
            }
        }
    },

    "516": {
        designIcon1: {
            box: {
                backgroundColor: "#626262ff",
                height: "5vh",
                width: "2vh",
                zIndex: "100",
                position: "absolute",
                left: "-50%"
            }
        },
        avatar: {
            card: { display: "none" },
            imageDiv: {
                border: "2px solid white",
                borderRadius: "0%",
                width: "100px",
                height: "100px",
                marginLeft: "-10px"
            }
        },

        personalInfo: {
            box: {
                background: "#626262ff",
                border: "none",

            },
            avatar: {
                imageDiv: {
                    margin: "-57px 10px 0px 11px",
                    borderRadius: "0px",
                    height: "25vh",
                    width: "11vw"
                }
            },
            name: {
                fontSize: "50px",
                fontWeight: "500",
                color: "#626262ff",
                position: "absolute",
                left: "-180%",
                top: "5%",
                width: "7.2vw",
                display: "flex",
                flexWrap: "wrap"
            },
            position: {
                fontSize: "14px",
                fontStyle: "italic",
                display: "none"
            },
            summaryContent: { display: "none" }
        },

        contact: {
            heading: { display: "none" },
            box: {
                background: "#626262ff",
                padding: "0px 10px",
                textAlign: "center",
                borderLeft: "2px solid #626262ff"
            },
            listItem: {
                color: "white",
                marginBottom: "4px"
            }
        },

        skills: {
            box: {
                background: "white",
                borderLeft: "2px solid #626262ff",
                paddingLeft: "10px"
            },
            heading: {
                color: "#626262ff",
                fontWeight: "500",
                fontSize: "23px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            eachSkillBox: {
                background: "1px solid #626262ff",
                color: "#626262ff",
                borderRadius: "4px",
                padding: "3px 6px",
                margin: "2px",
                display: "inline-block"
            }
        },

        language: {
            box: {
                borderLeft: "2px solid #626262ff",
                paddingLeft: "10px"
            },
            heading: {
                color: "#626262ff",
                fontWeight: "500",
                fontSize: "23px",
                paddingBottom: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            listItem: {
                color: "#304160ff",
                padding: "2px"
            }
        },

        summary: {
            box: {
                borderLeft: "2px solid #626262ff",
                paddingLeft: "10px"
            },
            heading: {
                marginBottom: "8px",
                color: "#626262ff",
                fontWeight: "500",
                fontSize: "23px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            }
        },

        workExpe: {
            box: {
                borderLeft: "2px solid #626262ff",
                paddingLeft: "10px"
            },
            heading: {
                marginBottom: "8px",
                color: "#626262ff",
                fontWeight: "500",
                fontSize: "23px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            eachWorkPlace: {
                marginBottom: "15px"
            },
            role: {
                color: "#112850ff",
                fontWeight: "500",
                paddingBottom: "4px"
            },
            organization: {
                color: "#304160ff",
                fontWeight: "500",
                paddingBottom: "4px"
            },
            dates: {
                color: "#626262ff",
                fontWeight: "500",
                paddingBottom: "4px"
            },
            listItem: {
                padding: "2px"
            }
        },

        projects: {
            box: {
                borderLeft: "2px solid #626262ff",
                paddingLeft: "10px"
            },
            heading: {
                marginBottom: "8px",
                color: "#626262ff",
                fontWeight: "500",
                fontSize: "23px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            eachProject: {
                marginBottom: "15px"
            },
            title: {
                color: "#112850ff",
                fontWeight: "500",
                paddingBottom: "5px"
            },
            listItem: {
                padding: "2px"
            }
        },

        education: {
            box: {
                borderLeft: "2px solid #626262ff",
                paddingLeft: "10px"
            },
            heading: {
                marginBottom: "8px",
                color: "#626262ff",
                fontWeight: "500",
                fontSize: "23px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            eachEducation: {
                marginBottom: "15px"
            },
            degree: {
                color: "#112850ff",
                fontWeight: "500",
                paddingBottom: "4px"
            },
            school: {
                color: "#304160ff",
                fontWeight: "500",
                paddingBottom: "4px"
            },
            dates: {
                color: "#626262ff",
                fontWeight: "500",
                paddingBottom: "4px"
            },
            listItem: {
                padding: "2px"
            }
        },

        award: {
            box: {
                borderLeft: "2px solid #626262ff",
                paddingLeft: "10px"
            },
            heading: {
                marginBottom: "8px",
                color: "#626262ff",
                fontWeight: "500",
                fontSize: "23px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            innerbox: {
                marginBottom: "15px"
            },
            title: {
                color: "#112850ff",
                fontWeight: "500",
                paddingBottom: "4px"
            }
        },

        organiz: {
            box: {
                borderLeft: "2px solid #626262ff",
                paddingLeft: "10px"
            },
            heading: {
                marginBottom: "8px",
                color: "#626262ff",
                fontWeight: "500",
                fontSize: "23px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            title: {
                color: "#112850ff",
                fontWeight: "500",
                paddingBottom: "4px"
            }
        },
    },

    "521": {
        personalInfo: {
            box: {
                // backgroundColor: "#2e3c47ff",
                color: "#2e3c47ff",
                padding: "0px",
                marginBottom: "15px",
                display: "flex",
                justifyContent: "center"
            },
            avatar: {
                card: {
                    background: "none"
                },
                imageDiv: {
                    marginLeft: "-15px",
                    marginTop: "-35px",
                    display: "none"
                }
            },
            summaryBox: {
                marginTop: "-40px",
                display: "none"
            },
            position: {
                fontWeight: "100",
                // marginLeft:"45px"
            },
            anotherBox: {
                // marginLeft:"200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            name: {
                display: "flex",
                gap: "10px",
                letterSpacing: "7px",
                fontSize: "38px"
            }
        },
        summary: {
            box: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "20px",
                paddingBottom: "5px"
            },
            heading: {
                // marginLeft:"45%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width:"fit-content",
                // marginBottom:"15px",
                display: "none"
            },
        },
        workExpe: {
            box: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "20px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width:"fit-content",
                // marginBottom:"15px"
            },
            eachWorkPlace: {
                padding: "0px",
                marginLeft: "0px"
            },
            listItem: {
                marginLeft: "10px"
            },
        },
        education: {
            box: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "20px",
                padding: "0px"
            },
            heading: {
                // paddingLeft:"45%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width:"fit-content",
                // marginBottom:"15px"
            },
            eachEducation: {
                padding: "0px",
                marginBottom: "10px",
                degree: {
                    margin: "5px"
                }
            },
            listItem: {
                marginLeft: "10px"
            }
        },
        skills: {
            box: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "20px"
            },
            heading: {
                // marginLeft:"47%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
        },
        organiz: {
            box: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
            innerbox: {
                padding: "0px",
                marginBottom: "10px"
            },
            title: {
                fontWeight: "600"
            },
            listItem: {
                marginLeft: "10px"
            }
        },
        award: {
            box: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"35%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
            innerbox: {
                padding: "0px",
                marginBottom: "10px"
            },
            title: {
                fontWeight: "600"
            },
            listItem: {
                marginLeft: "10px"
            }
        },
        language: {
            box: {
                borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"43%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width: "fit-content",
                // marginBottom:"15px"
            },
            listItem: {
                margin: "5px 10px"
            }
        },
        contact: {
            box: {
                borderTop: "2px solid #2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                padding: "10px 10px 0px 10px"
            },
            heading: {
                display: "none"
            },
            list: {
                display: "flex",
                justifyContent: "space-around"
            }
        },
        strength: {
            box: {
                marginBottom: "20px",
                borderBottom: "2px solid #2e3c47ff"
            },
            title: {
                fontWeight: "600"
            },
            listItem: {
                marginLeft: "10px"
            }
        },
        certificate: {
            box: {
                marginBottom: "20px",
                borderBottom: "2px solid #2e3c47ff"
            },
            title: {
                fontWeight: "600"
            },
            listItem: {
                marginLeft: "10px"
            }
        },
        achieve: {
            box: {
                marginBottom: "20px",
                borderBottom: "2px solid #2e3c47ff"
            },
            title: {
                fontWeight: "600"
            },
            listItem: {
                marginLeft: "10px"
            }
        },
        projects: {
            box: {
                marginBottom: "20px",
                borderBottom: "2px solid #2e3c47ff"
            },
            title: {
                fontWeight: "600"
            },
            listItem: {
                marginLeft: "10px"
            }
        }

    },

    "522": {
        personalInfo: {
            box: {
                // backgroundColor:"#2e3c47ff",
                color: "#2e3c47ff",
                padding: "10px",
                marginBottom: "15px"
            },
            avatar: {
                card: {
                    background: "none"
                },
                imageDiv: {
                    marginLeft: "-15px",
                    marginTop: "-35px"
                },
            },
            summaryBox: {
                marginTop: "-40px"
            },
            position: {
                fontWeight: "100"
            }
        },
        summary: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"45%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width:"fit-content",
                // marginBottom:"15px"
            },
        },
        workExpe: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width:"fit-content",
                // marginBottom:"15px"
            },
            eachWorkPlace: {
                padding: "10px"
            }
        },
        education: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "5px",
                padding: "15px"
            },
            heading: {
                // paddingLeft:"45%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                // width:"fit-content",
                // marginBottom:"15px"
            },
            eachEducation: {
                padding: "10px",
                degree: {
                    margin: "5px"
                }
            }
        },
        skills: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
        },
        organiz: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
            innerbox: {
                padding: "10px"
            }
        },
        award: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"35%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
            innerbox: {
                padding: "10px"
            }
        },
        language: {
            box: {
                // borderBottom:"2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"43%",
                color: "#2e3c47ff",
                // borderBottom:"2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
            listItem: {
                margin: "5px 15px"
            }
        },

    },

    "523": {
        personalInfo: {
            box: {
                backgroundColor: "#FEE14B",
                color: "#111416",
                padding: "0px",
                marginBottom: "15px",
                mixBox: {
                    display: "flex",
                },
            },

            avatar: {
                card: {
                    background: "none",
                    display: "flex"
                },
                imageDiv: {
                    marginLeft: "-20px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    borderRadius: "0px",
                    height: "150px",
                    width: "150px",
                    boxShadow: "none",
                    borderRight: "5px solid white"
                },

            },
            summaryBox: {
                marginTop: "-40px",
                display: "none"
            },
            position: {
                fontWeight: "100",
                fontSize: "13px"
            },
            anotherBox: {
                marginLeft: "30px",
                marginTop: "30px",

            },
            name: {
                fontWeight: "600"
            }
        },
        summary: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "25px",
                marginLeft: "85px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            content: {
                lineHeight: "20px"
            }
        },
        workExpe: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "25px",
                marginLeft: "85px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            eachWorkPlace: {
                padding: "0px 0px 5px 0px",
                marginLeft: "0px"
            }
        },
        education: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "25px",
                padding: "0px",
                marginLeft: "85px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            eachEducation: {
                padding: "10px 0px",

            }
        },
        skills: {
            layoutType: "layout2",
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "25px",
                marginLeft: "85px",
                paddingRight: "10px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            listItem: {
                marginLeft: "90px"
            },
            frontBars: {
                background: "#111416"
            }
        },
        organiz: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "25px",
                marginLeft: "85px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            innerbox: {
                padding: "10px 0px"
            },
            title: {
                fontWeight: "600"
            }
        },
        award: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "25px",
                marginLeft: "85px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            innerbox: {
                padding: "0px 0px 10px 0px"
            },
            title: {
                fontWeight: "600"
            }
        },
        language: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "25px",
                marginLeft: "85px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            listItem: {
                margin: "5px -5px"
            }
        },
        contact: {
            box: {
                marginLeft: "85px",
                marginBottom: "25px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            }
        },
        strength: {
            box: {
                marginBottom: "25px",
                marginLeft: "85px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            title: {
                fontWeight: "600",
                padding: "0px",
            },
            listItem: {
                padding: "0px",
                marginLeft: "2px"
            }
        },
        certificate: {
            box: {
                marginBottom: "25px",
                marginLeft: "85px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            title: {
                fontWeight: "600"
            }
        },
        projects: {
            box: {
                marginBottom: "25px",
                marginLeft: "85px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            title: {
                fontWeight: "600"
            }
        },
        achieve: {
            box: {
                marginBottom: "25px",
                marginLeft: "85px"
            },
            heading: {
                background: "#111416",
                color: "lightgray",
                width: "fit-content",
                padding: "5px 10px",
                marginBottom: "15px"
            },
            title: {
                fontWeight: "600"
            }
        }

    },

    "524": {
        personalInfo: {
            box: {
                borderTop: "25px solid #2e3c47ff",
                borderBottom: "none",
                borderRadius: "10px 0px 0px 0px",
                color: "#2e3c47ff",
                padding: "10px",
                marginBottom: "15px"
            },
            avatar: {
                card: {
                    background: "none"
                },
                imageDiv: {
                    marginLeft: "-15px",
                    marginTop: "-35px"
                }
            },
            summaryBox: {
                marginTop: "-35px",
                borderTop: "2px solid #2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                padding: "5px",
                paddingBottom: "5px"
            },
            position: {
                fontWeight: "100"
            },
            anotherBox: {
                marginLeft: "-140px",
                marginTop: "10px"
            }
        },
        summary: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"45%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                width: "fit-content",
                marginBottom: "10px"
            },
        },
        workExpe: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
            eachWorkPlace: {
                padding: "10px"
            }
        },
        contact: {
            box: {
                marginLeft: "20px"
            },
            heading: {
                borderBottom: "2px solid #2e3c47ff",
                width: "fit-content",
                marginBottom: "10px"
            }
        },
        education: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px",
                padding: "15px"
            },
            heading: {
                // paddingLeft:"45%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
            eachEducation: {
                padding: "10px",
            }
        },
        skills: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px",
                marginLeft: "20px"
            },
            heading: {
                // marginLeft:"47%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                width: "fit-content",
                marginBottom: "15px"
            },
            listItem: {
                marginLeft: "90px"
            }
        },
        organiz: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
            innerbox: {
                padding: "10px"
            }
        },
        award: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"35%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
            innerbox: {
                padding: "10px"
            }
        },
        language: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"43%",
                color: "#2e3c47ff",
                borderBottom: "2px solid #2e3c47ff",
                width: "fit-content",
                // marginBottom:"15px"
            },
            listItem: {
                margin: "5px"
            }
        },

    },

    "525": {
        personalInfo: {
            box: {
                // border: "15px solid #2e3c47ff",
                // borderBottom:"none",
                borderRadius: "10px",
                color: "#2e3c47ff",
                padding: "10px",
                marginBottom: "15px"
            },
            mixBox: {
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between"
            },
            avatar: {
                card: {
                    background: "none",

                },
                imageDiv: {
                    marginLeft: "-15px",
                    marginTop: "-20px",
                    width: "140px",
                    height: "140px"
                }
            },
            summaryBox: {
                marginTop: "-35px",
                borderTop: "2px solid #2e3c47ff",
                borderBottom: "4px solid #2e3c47ff",
                padding: "5px",
                paddingBottom: "5px",
                display: "none"
            },
            position: {
                fontWeight: "100",
                color: "#75CA9B",
                fontSize: "13px"
            },
            anotherBox: {
                marginLeft: "-30px",
                marginTop: "0px"
            },
            name: {
                display: "flex",
                gap: "10px",
                color: "#124F44",
                fontWeight: "600"
            }
        },
        summary: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"45%",
                color: "#3E7067",
                borderBottom: "4px solid #3E7067",
                // width: "fit-content",
                marginBottom: "10px",
                padding: "0px"
            },
        },
        workExpe: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"40%",
                color: "#3E7067",
                borderBottom: "4px solid #3E7067",
                // width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            eachWorkPlace: {
                // padding: "10px",
                // marginBottom:"10px",
                marginLeft: "0px"
            },
            role: {
                color: "#185349",
                marginBottom: "4px"
            },
            organization: {
                color: "#75CA9B",
                marginBottom: "4px"
            },
            listItem: {
                marginBottom: "4px"
            }
        },

        education: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px",
                // padding: "15px",
                // width: "fit-content",

            },
            heading: {
                // paddingLeft:"45%",
                color: "#3E7067",
                borderBottom: "4px solid #3E7067",
                // width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            eachEducation: {
                // padding: "10px",
                marginBottom: "10px"
            },
            degree: {
                color: "#185349",
                marginBottom: "4px"
            },
            school: {
                color: "#75CA9B",
                marginBottom: "4px"
            },
            listItem: {
                marginBottom: "4px"
            }
        },
        skills: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px",
                // marginLeft: "20px",

            },
            heading: {
                // marginLeft:"47%",
                color: "#3E7067",
                borderBottom: "4px solid #3E7067",
                // width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            eachSkillBox: {
                marginLeft: "0px",
                borderBottom: "2px solid #3E7067"
            }
        },
        organiz: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px",

            },
            heading: {
                // marginLeft:"40%",
                color: "#3E7067",
                borderBottom: "4px solid #3E7067",
                // width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "600",
                color: "#185349"
            }
        },
        award: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px",

            },
            heading: {
                // marginLeft:"35%",
                color: "#3E7067",
                borderBottom: "4px solid #3E7067",
                // width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            innerbox: {
                // padding: "10px"
            },
            title: {
                fontWeight: "600",
                color: "#185349"
            }
        },
        language: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "35px"
            },
            heading: {
                // marginLeft:"43%",
                color: "#3E7067",
                borderBottom: "4px solid #3E7067",
                // width: "fit-content",
                marginBottom: "15px",
                padding: "0px"
            },
            listItem: {
                margin: "5px"
            }
        },
        contact: {
            box: {
                position: "absolute",
                left: "35px",
                top: "110px"
            },
            heading: {
                display: "none",
            },
            list: {
                display: "flex",
                flexWrap: "wrap",
                width: "80%",
                fontSize: "13px"
            },
            hiddenItems: [2, 3],
        },

        achieve: {
            heading: {
                borderBottom: "4px solid #3E7067",
                padding: "0px",
                marginBottom: "15px",
                color: "#3E7067"
            },
            title: {
                fontWeight: "600",
                color: "#185349"
            }
        },
        strength: {
            heading: {
                borderBottom: "4px solid #3E7067",
                padding: "0px",
                marginBottom: "15px",
                color: "#3E7067"
            },
            title: {
                fontWeight: "600",
                color: "#185349"
            }
        },
        certificate: {
            heading: {
                borderBottom: "4px solid #3E7067",
                padding: "0px",
                marginBottom: "15px",
                color: "#3E7067"
            },
            title: {
                fontWeight: "600",
                color: "#185349"
            }
        },
        projects: {
            heading: {
                borderBottom: "4px solid #3E7067",
                padding: "0px",
                marginBottom: "15px",
                color: "#3E7067"
            },
            title: {
                fontWeight: "600",
                color: "#185349"
            }
        },

    },

    "526": {
        contact: {
            box: {
                textAlign: "right"
            },
            heading: {
                display: "none"
            },
            listItem: {
                color: "#626262ff",
                marginBottom: "4px"
            }
        },
        summary: {
            box: {
                textAlign: "right",
                marginBottom: "2rem"
            },
            heading: {
                marginBottom: "20px",
                color: "#626262ff",
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            }
        },
        skills: {
            box: {
                textAlign: "right",
                marginBottom: "2rem"
            },
            heading: {
                marginBottom: "20px",
                color: "#626262ff",
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            eachSkillBox: {
                background: "1px solid #626262ff",
                color: "#626262ff",
                borderRadius: "4px",
                padding: "3px 6px",
                margin: "2px",
                display: "inline-block"
            }
        },
        language: {
            box: {
                textAlign: "right",
                marginBottom: "2rem"
            },
            heading: {
                marginBottom: "20px",
                color: "#626262ff",
                fontWeight: "600",
                fontSize: "20px",
                paddingBottom: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            listItem: {
                color: "#626262ff",
                padding: "2px"
            }
        },
        personalInfo: {
            box: {
                textAlign: "left",
                borderBottom: "2px solid #626262ff",
                paddingBottom: "60px"
            },
            avatar: {
                imageDiv: {
                    display: "none"
                }
            },
            name: {
                display: "flex",
                fontSize: "45px",
                marginLeft: "-300px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontWeight: "500",
                color: "#626262ff"
            },
            firstName: {
                paddingRight: "10px"
            },
            position: {
                display: "flex",
                marginLeft: "-300px",
                fontSize: "16px",
                fontWeight: "500",
                color: "#626262ff"
            },
            summaryContent: {
                display: "none"
            }
        },
        education: {
            box: {
                // textAlign:"left",
                borderBottom: "2px solid #626262ff",
                marginBottom: "2rem"
            },
            heading: {
                marginBottom: "20px",
                color: "#626262ff",
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            eachEducation: {
                marginBottom: "25px"
            },
            degree: {
                color: "#626262ff",
                fontWeight: "600",
                paddingBottom: "4px"
            },
            school: {
                color: "#626262ff",
                fontWeight: "500",
                paddingBottom: "4px"
            },
            dates: {
                color: "#626262ff",
                fontWeight: "500",
                paddingBottom: "4px"
            },
            listItem: {
                padding: "2px",
                color: "#626262ff"
            }
        },
        workExpe: {
            box: {
                textAlign: "left",
                borderBottom: "2px solid #626262ff",
                marginBottom: "2rem"
            },
            heading: {
                marginBottom: "20px",
                color: "#626262ff",
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "3px",
                textTransform: "uppercase",
            },
            eachWorkPlace: {
                marginBottom: "25px"
            },
            role: {
                color: "#626262ff",
                fontWeight: "600",
                paddingBottom: "4px"
            },
            organization: {
                color: "#304160ff",
                fontWeight: "500",
                paddingBottom: "4px"
            },
            dates: {
                color: "#626262ff",
                fontWeight: "500",
                paddingBottom: "4px"
            },
            listItem: {
                padding: "2px",
                color: "#626262ff"
            }
        },
        projects: {
            box: {
                textAlign: "left",
                marginBottom: "2rem"
            },
            heading: {
                marginBottom: "20px",
                color: "#626262ff",
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            eachProject: {
                marginBottom: "25px"
            },
            title: {
                color: "#626262ff",
                fontWeight: "600",
                paddingBottom: "5px"
            },
            listItem: {
                padding: "2px",
                color: "#626262ff"
            }
        },

        award: {
            box: {
                textAlign: "left",
                marginBottom: "2rem",
                borderBottom: "2px solid #626262ff"
            },
            heading: {
                marginBottom: "20px",
                color: "#626262ff",
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            innerbox: {
                marginBottom: "25px",
                color: "#626262ff"
            },
            title: {
                color: "#626262ff",
                fontWeight: "600",
                paddingBottom: "4px"
            }
        },

        organiz: {
            box: {
                textAlign: "left",
                marginBottom: "2rem",
                borderBottom: "2px solid #626262ff",
            },
            heading: {
                marginBottom: "20px",
                color: "#626262ff",
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "3px",
                textTransform: "uppercase"
            },
            innerbox: {
                marginBottom: "25px",
                color: "#626262ff"
            },
            title: {
                color: "#626262ff",
                fontWeight: "600",
                paddingBottom: "4px"
            }
        },

    },

    "1110": {
        avatar: {
            card: {
                background: "none",
                display: "none"
            },
            heading: {
                color: "#cb78f2ff",
                display: "none"
            },
            position: {
                color: "#cb78f2ff",
                display: "none"
            },
            imageDiv: {
                marginTop: "-30px",
                marginLeft: "-20px"
            }
        },
        strength: {
            heading: {
                borderBottom: "1px solid #142c45ff",
                marginBottom: "10px",
                marginTop: "20px",
                paddingBottom: "10px"
            },
        },
        skills: {
            heading: {
                borderBottom: "1px solid #142c45ff",
                marginBottom: "10px",
                marginTop: "20px",
                paddingBottom: "0px"
            },
            everySkillBox: {
                justifyContent: "flex-start",
            },
            eachSkillBox: {
                border: "none",
                background: "lightgray",
                borderRadius: "5px",
                color: "white",
                marginRight: "5px"
            },
            wholeList: {
                paddingLeft: "15px"
            }
        },
        achieve: {
            box: {
                marginTop: "20px"
            },
            heading: {
                marginBottom: "10px",
                borderBottom: "1px solid #142c45ff"
            },
            title: {
                marginTop: "10px",
                marginBottom: "5px"
            },
            list: {
                paddingLeft: "15px"
            }
        },
        contact: {
            box: {
                paddingBottom: "5px",
            },
            heading: {
                borderBottom: "1px solid #142c45ff",
                marginBottom: "10px"
            },
            listItem: {
                paddingLeft: "0px"
            }
        },
        personalInfo: {
            mixBox: {
                // marginLeft: '1rem',
                display: 'flex',
                alignItems: 'center'
            },
            box: {
                padding: "15px 0px",
                marginBottom: "10px",
                background: "#142c45ff",
                color: "white",
            },
            name: {
                paddingBottom: "5px"
            },
            name: {
                display: 'flex',
                gap: '5px',
                alignItems: "center"
            },
            position: {
                marginBottom: "8px",
                borderBottom: '2px solid #ffff',
                width: "fit-content",
                paddingRight: "10px",
            },
            summaryBox: {
                // marginLeft:'5rem',
                marginTop: '2rem'
            },
            anotherBox: {
                marginTop: '-1rem',
            }
        },
        language: {
            box: {
                display: "block"
            },
            heading: {
                marginBottom: "10px",
                borderBottom: "1px solid #142c45ff"
            },
            wholeList: {
                paddingLeft: "15px"
            }
        },
        award: {
            heading: {
                borderBottom: "1px solid #142c45ff",
                marginBottom: "10px"
            },
            innerbox: {
                marginBottom: "10px"
            },
            title: {
                marginBottom: "5px"
            }
        },
        projects: {
            heading: {
                borderBottom: "1px solid #142c45ff",
                marginBottom: "10px"
            },
            title: {
                marginBottom: "5px"
            },
            eachProject: {
                marginBottom: "10px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        summary: {
            box: {
                marginTop: "10px",
                paddingBottom: "5px"
            },
            heading: {
                borderBottom: "1px solid #142c45ff",
                marginBottom: "10px"
            }
        },
        workExpe: {
            box: {
                marginTop: "20px"
            },
            heading: {
                borderBottom: "1px solid #142c45ff",
                marginBottom: "10px"
            },
            eachWorkPlace: {
                marginBottom: "15px"
            },
            content: {
                marginLeft: "0px"
            }
        },
        education: {
            box: {
                marginTop: "20px"
            },
            heading: {
                marginBottom: "10px",
                borderBottom: "1px solid #142c45ff"
            },
            eachEducation: {
                marginBottom: "15px",
            },
            degree: {
                marginBottom: "5px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        organiz: {
            heading: {
                marginBottom: "10px",
                borderBottom: "1px solid #142c45ff"
            },
            title: {
                marginBottom: "5px",
            },
            innerbox: {
                marginBottom: "10px",
            },
            content: {
                paddingLeft: "0px"
            },
            list: {
                paddingLeft: "15px"
            }
        },
        certificate: {
            heading: {
                borderBottom: "1px solid #142c45ff",
                marginBottom: "10px"
            },
            title: {
                marginBottom: "5px"
            },
            organiz: {
                marginBottom: "3px"
            },
            eachcertificate: {
                marginBottom: "10px"
            },
            content: {
                paddingLeft: "0px"
            }
        }
    },

    "1111": {
        vars: {
            "--left-heading-color": "#142c45",
            "--right-heading-color": "#ffff"
        },
        designIcons1: {
            box: {
                background: "#142c45",
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                border: "3.5px solid white",
                position: "absolute",
                top: "16.2%",
                left: "60.5%"
            }
        },

        avatar: {
            showAvatar: true,
            showImage: true,
            card: {
                top: '50px',
                left: '40px'

                // background: "none",
                // display:"none"
            },
            contHeading: {
                marginLeft: '9rem',
                marginTop: '-6rem'
            },
            heading: {
                color: "white",
                // marginLeft: "173px",
                marginTop: "-71px",
                fontSize: "26px",
                display: "flex",
                gap: '5px'

            },
            position: {
                color: "white",
                marginTop: "0px",
                fontSize: "large"
            },
            imageDiv: {
                marginTop: "-30px",
                marginLeft: "-30px",
                // border:"4px solid #142c45ff",
                border: "3px solid white",
                boxShadow: "0 0 0 3px #142c45ff",
            },
            image: {
                borderBottom: "0px solid white",
                borderTop: "0px solid white",
                borderLeft: "0px solid white",
                borderRight: "0px solid white",
            }
        },
        skills: {
            box: {
                backgroundColor: "inherit",
                marginTop: "40px"
            },
            heading: {
                marginBottom: "10px",
                marginTop: "20px",
                paddingBottom: "0px"
            },
            everySkillBox: {
                justifyContent: "flex-start"
            },
            eachSkillBox: {
                border: "none",
                background: "gray",
                borderRadius: "5px",
                color: "white",
                marginRight: "10px"
            }
        },
        achieve: {
            box: {
                marginTop: "40px"
            },
            heading: {

                borderBottom: "1px solid #142c45ff"
            },
            innerbox: {
                marginLeft: "5px"
            },
            title: {
                marginTop: "10px",
                marginBottom: "5px"
            },
        },
        contact: {
            box: {
                padding: "10px",
                background: "#142c45ff",
                color: "white",
                borderRadius: "0px",
            },
            heading: {
                // borderBottom: "1px solid #142c45ff",
                marginBottom: "10px",
                display: "none"
            },
            listItem: {
                padding: "5px"
            }
        },
        personalInfo: {
            box: {
                // padding:"15px",
                marginBottom: "10px",
                // background:"#142c45ff",
                color: "#142c45ff",
                marginTop: "-140px",
                marginLeft: "120px"
                // position:"absolute",
                // top:"7.4%",
                // left:"25%"  
            },
            name: {
                paddingBottom: "5px"
            },
            position: {
                marginBottom: "8px",
                borderBottom: "1px solid white",
                width: "fit-content",
                paddingRight: "10px",
                overFlow: "auto"
            },
        },
        language: {
            box: {
                display: "block",
                marginTop: "40px"
            },
            heading: {
                marginBottom: "10px",
            }
        },
        award: {
            box: {
                marginTop: "40px"
            },
            heading: {
                marginBottom: "10px"
            },
            innerbox: {
                marginBottom: "10px"
            },
            title: {
                marginBottom: "5px"
            }
        },
        projects: {
            box: {
                marginTop: "40px"
            },
            heading: {
                marginBottom: "10px"
            },
            title: {
                marginBottom: "5px"
            },
            eachProject: {
                marginBottom: "10px"
            }
        },
        summary: {
            box: {
                marginTop: "40px",
                paddingBottom: "5px"
            },
            heading: {
                marginBottom: "10px"
            }
        },
        workExpe: {
            box: {
                marginTop: "40px"
            },
            heading: {
                marginBottom: "10px"
            },
            eachWorkPlace: {
                marginBottom: "15px"
            },
            role: {
                margin: "5px"
            },
            organization: {
                margin: "5px 10px"
            },
            dates: {
                margin: "5px 10px"
            },
        },
        education: {
            box: {
                marginTop: "40px"
            },
            heading: {
                marginBottom: "10px",
            },
            eachEducation: {
                marginBottom: "15px",
                marginLeft: "5px"
            },
            degree: {
                marginBottom: "5px"
            },
            school: {
                margin: "5px"
            },
            dates: {
                margin: "5px"
            }
        },
        organiz: {
            box: {
                marginTop: "40px"
            },
            heading: {
                marginBottom: "10px",
            },
            title: {
                marginBottom: "5px",
            },
            innerbox: {
                marginBottom: "10px",
            },
        },
        certificate: {
            box: {
                marginTop: "40px"
            },
            heading: {
                borderBottom: "1px solid #142c45ff",
                marginBottom: "10px"
            },
            title: {
                marginBottom: "5px"
            },
            organiz: {
                marginBottom: "3px"
            },
            eachcertificate: {
                marginBottom: "10px"
            }
        }
    },

    "1112": {
        vars: {
            "--left-heading-color": "#fff",
            "--right-heading-color": "#142c45"
        },

        avatar: {
            showAvatar: true,
            showImage: true,
            card: {
                background: "none",
                width: "300px",
                height: '150px',
                display: "none"
            },
            imageDiv: {
                marginLeft: '4rem'
            },
            nextLine: {
                display: 'none'
            },
            sideBox: 'true',
            innerBox: {
                position: 'relative',
                left: '374px',
                color: '#000',
                top: '-130px',
                textAlign: 'left'
            },
            heading: {
                // display: 'none'
                color: '#000',
                fontSize: '1.5rem',
                borderBottom: 'none',
                gap: '5px',
                display: 'flex'
            },
            position: {
                fontSize: '2rem'
            }
        },
        contact: {
            visibleFields: ["email", "phoneNo", "address", "linkedin"],
            box: {
                marginTop: '2rem',
            },
            heading: {
                //  ...sharedStyles["7"].heading
            },
            innerBox: {
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row-reverse"
            },
            icon: {
                color: "var(--primary-color)",
                // marginLeft: "10px",
                marginRight: '20px'
            },
            list: {
                marginTop: '.5rem'
            },
            pickerWrapper: {
                backgroundColor: "var(--right-heading-color)",
                paddingLeft: "10px"
            }
        },
        summary: {
            box: {
                // paddingLeft: "15px",
                // marginTop: "6rem",
                marginBottom: "15px",
            },
            eachSummary: {
                marginTop: '.5rem'
            },
            list: {
                marginTop: '.5rem !important'
            },
            heading: {
                // display: 'none'
                //  ...sharedStyles["7"].heading
            },
            content: {

            }
        },
        workExpe: {
            viewType: "list",
            box: {
                border: 'none',
            },
            heading: {
            },
            dates: {
                color: '#0A3965'
            },
            content: {
                marginLeft: "0px",
                paddingLeft: "0px"
            },
            bulletIcon: {
                type: "fontawesome",
                icon: "faWindowMinimize",
                color: "var(--primary-color)",
                size: "0.5rem",
                marginRight: "0.5rem",
            },
            eachWorkPlace: {
                // paddingLeft: '10px',
                marginLeft: "0px",
                marginTop: '.5rem'
            }
        },
        education: {
            marginTop: ".5rem",
            viewType: "list",
            box: {
                border: 'none',
                marginTop: ".5rem"
            },
            eachEducation: {
                marginTop: '.5rem'
            },
            heading: {
                // ...sharedStyles["7"].heading,
                marginTop: "1rem"
            },
            eachSchool: {
                paddingLeft: '10px'
            },
            sideline: 'true',
            timeline: {
                border: 'none',
                paddingLeft: '10px'
            },
            dot: {
                backgroundColor: 'var(--primary-color)',
                top: '7px',
                left: '-20px'
            },
            list: {
                paddingLeft: "15px"
            },
            content: {
                paddingLeft: "0px"
            },

        },
        projects: {
            viewType: "list",
            box: {
                border: 'none'
            },
            heading: {
                // ...sharedStyles["7"].heading
            },
            list: {
                paddingLeft: "15px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        skills: {
            viewType: "list",
            box: {
                marginBottom: '2rem',
                marginTop: '2rem'

            },
            heading: {
                // ...sharedStyles["7"].heading
            },
            wholeList: {
                marginLeft: '0px',
                paddingLeft: "16px",
                marginTop: '.5rem'
            },
            list: {
                rowGap: '10px'
            }
        },
        personalInfo: {
            borderBottom: "none",
            summaryBox: {
                display: 'none'
            },
            position: {
                textDecoration: "underline",
                textDecorationThickness: "2px",
            }


        },
        organiz: {
            viewType: "list",
            box: {
                border: 'none',
                marginBottom: '1rem'
            },
            heading: {
                // ...sharedStyles["7"].heading,
                // borderBottom: '2px solid #0A3965',
                textAlign: 'left',
                marginBottom: '10px',
            },
            innerBox: {
                textAlign: 'left',
                paddingLeft: '10px'
            },
            eachOrganiz: {
                marginBottom: '10px'
            },
            list: {
                paddingLeft: "15px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        award: {
            viewType: "list",
            box: {
                border: 'none',
                marginBottom: '1rem'
            },
            heading: {
                textAlign: 'left',
                marginBottom: '10px',
            },
            innerBox: {
                textAlign: 'left',
                paddingLeft: '10px'
            },
            date: {
                fontStyle: 'italic'
            },
            eachAward: {
                marginBottom: '5px'
            },
            list: {
                paddingLeft: "15px"
            }
        },
        language: {
            viewType: "list",
            heading: {
                // ...sharedStyles["7"].heading,
                marginTop: "1rem"
            },
            list: 'true',
            wholeList: {
                // paddingLeft: '35px',
                marginLeft: '-4px'
            }
        },
        certificate: {
            viewType: "list",
            box: {
                border: 'none',
                marginBottom: '1rem',
            },
            heading: {
                // ...sharedStyles["7"].heading,
                textAlign: 'left',
                marginBottom: '10px',
                color: '#333',
            },
            innerBox: {
                textAlign: 'left',
                // paddingLeft: '10px'
            },
            title: {
                fontSize: "16px",
                fontWeight: "700"
            },
            organiz: {
                fontSize: "15px",
                // marginLeft: "2px",
                color: 'var(--primary-color)'
            },
            date: {
                // marginLeft: "2px",
                fontStyle: 'italic',
            },
            eachcertificate: {
                marginBottom: '5px'
            },
            content: {
                paddingLeft: "0px"
            }
        },
        achieve: {
            box: {
                textAlign: "left",
                // paddingLeft: "15px",
                marginBottom: "15px"
            },
            heading: {
                marginBottom: "5px"
            },
            innerbox: {
                // paddingLeft: "10px",
                // color: '#000'
            },
            list: {
                paddingLeft: "15px"
            },
        }
    },

    "1113": {
        vars: {
            "--left-heading-color": "#000",
            "--right-heading-color": "#000"
        },
        avatar: {
            showAvatar: true,
            showImage: false,

            brTag: {
                display: "none"
            },

            box: {
                padding: "10px",
                marginTop: "1px",
                //    marginRight: "100px", 
            },

            card: {
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "-1rem",
                background: "transparent",
            },
            hexWrapper: {
                width: "104px",
                height: "104px",
                backgroundColor: "#002F5F",
                clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
            },

            initialsBox: {
                width: "96px",
                height: "96px",
                backgroundColor: "#fff",
                clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "bold",
                color: "#002F5F",
                flexShrink: 0,
            },



            innerBox: {
                display: "flex",
                flexDirection: "column",
            },

            heading: {
                display: "flex",
                gap: "8px",
                margin: 0,
                fontSize: "20px",
                fontWeight: "bold",
            },

            position: {
                margin: "4px 0 0",
                fontSize: "14px",
                color: "#555",
            },
        },

        contact: {
            box: {
                marginTop: '2rem'
            },
            heading: {
                display: "none"
            },
            listItem: {
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: "10px"
            },
            icon: {
                color: "#002F5F",
                marginLeft: "10px"
            },
            deleteIcon: {
                marginLeft: "10px",
                color: '#002F5F',
                border: 'none'
            },
            pickerWrapper: {
                paddingRight: "15px",
            }
        },

        skills: {
            viewType: "list",
            box: {
                marginBottom: '2rem',
                marginTop: '2rem'

            },
            heading: {
                // ...sharedStyles["7"].heading
            },
            wholeList: {
                // marginLeft: '1rem',
                paddingLeft: "15px",
                marginTop: '.5rem'
            },
            list: {
                rowGap: '10px'
            }
        },
        summary: {

            eachSummary: {
                marginTop: '.5rem'
            },
            list: {
                marginTop: '.5rem !important'
            },

            content: {

            }
        },
        education: {
            marginTop: ".5rem",
            viewType: "list",
            box: {
                border: 'none',
                marginTop: ".5rem"
            },
            eachEducation: {
                marginTop: '.5rem'
            },
            heading: {
                marginTop: "1rem"
            },
            eachSchool: {
                // paddingLeft: '10px'
            },
            sideline: 'true',
            timeline: {
                border: 'none',
                paddingLeft: '10px'
            },
            dot: {
                backgroundColor: 'var(--primary-color)',
                top: '7px',
                left: '-20px'
            },
            content: {
                paddingLeft: "0px"
            }
        },
        language: {
            viewType: "list",
            heading: {
                // ...sharedStyles["7"].heading,
                marginTop: "1rem"
            },
            list: 'true',
            wholeList: {
                // paddingLeft: '35px',
                marginLeft: '-5px'
            }
        },
        projects: {
            viewType: "list",
            box: {
                border: 'none',
            },
            heading: {
                // ...sharedStyles["7"].heading
            },
            eachProject: {
                marginTop: "1rem",

            },
            list: {
                paddingLeft: "15px"
            },
            content: {
                paddingLeft: "0px"
            }

        },
        workExpe: {
            viewType: "list",
            box: {
                border: 'none',
            },
            heading: {
                //    borderBottom: '2px solid #0A3965'
            },
            dates: {
                color: '#0A3965'
            },
            bulletIcon: {
                type: "fontawesome",
                icon: "faWindowMinimize",
                color: "var(--primary-color)",
                size: "0.5rem",
                marginRight: "0.5rem",
            },
            eachWorkPlace: {
                // paddingLeft: '10px',
                marginLeft: "0rem",
                marginTop: '.5rem'
            },
            content: {
                marginLeft: "0px"
            }

        },
        award: {
            viewType: "list",
            box: {
                border: 'none',
                marginBottom: '1rem'
            },
            heading: {
                //    borderBottom: '2px solid #0A3965',
                textAlign: 'left',
                marginBottom: '10px',
            },
            innerBox: {
                textAlign: 'left',
                paddingLeft: '10px'
            },
            date: {
                fontStyle: 'italic'
            },
            eachAward: {
                marginBottom: '5px'
            }
        },
        organiz: {
            viewType: "list",
            box: {
                border: 'none',
                marginBottom: '1rem'
            },
            heading: {
                // ...sharedStyles["7"].heading,
                // borderBottom: '2px solid #0A3965',
                textAlign: 'left',
                marginBottom: '10px',
            },
            innerBox: {
                textAlign: 'left',
                // paddingLeft: '10px'
            },
            eachOrganiz: {
                marginBottom: '10px'
            },
            list: {
                paddingLeft: "15px"
            },
            content: {
                paddingLeft: "0px"
            }
        },
        certificate: {
            content: {
                paddingLeft: "0px"
            }
        }

    },

    "1115": {
        vars: {
            "--left-heading-color": "#ffff",
            "--right-heading-color": " #4c934c",
            "--right-heading-spacing": "1rem",
            "--left-heading-spacing": "1rem"
        },
        layoutStyles: {
            rightColumn: {
                eachSkillBox: {
                    border: "1px solid #4c934c"
                },
                eachLanguageBox: {
                    border: "1px solid #4c934c"
                }
            }
        },
        avatar: {

            showAvatar: true,
            showImage: true,
            card: {
                width: '100%',
                padding: '1rem',
            },
            box: {
                backgroundColor: '#6fb66f',
                color: '#ffff',
                borderRadius: '10px'

            },
            heading: {
                display: 'flex',
                borderBottom: 'none'
            },
            position: {
                color: '#fff'
            },
            contHeading: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
        },
        contact: {
            icon: {
                color: "#fff",
            },
            deleteIcon: {
                color: '#fff',
                border: 'none'
            },
            pickerWrapper: {
                background: "linear-gradient(rgba(0,128,0,0.55), rgba(0,128,0,0.55))"
            }
        },
        skills: {
            eachSkillBox: {
                border: '1px solid #ffffff',
                gap: '5px',
                borderRadius: '5px'
            }
        },
        language: {
            wholeList: {
                paddingLeft: "15px"
            }
        },
        certificate: {
            content: {
                paddingLeft: "0px"
            }
        },
        workExpe: {
            eachWorkPlace: {
                marginLeft: "0px"
            },
            content: {
                marginLeft: "0px"
            }
        },
        education: {
            content: {
                paddingLeft: "0px"
            }
        },
        projects: {
            content: {
                paddingLeft: "0px"
            }
        },
        organiz: {
            content: {
                paddingLeft: "0px"
            },
            list: {
                paddingLeft: "10px"
            }
        },
        strength: {
            list: {
                paddingLeft: "15px"
            }
        },
        award: {
            list: {
                paddingLeft: "15px"
            }
        },
        achieve: {
            list: {
                paddingLeft: "15px"
            }
        }
    },
    "28": {
        personalInfo: {
            box: {
                // backgroundColor: "#2e3c47ff",
                // color: "white",
                // padding: "10px",
                // marginBottom: "15px",
                // justifyContent:"flex-reverse"
            },
            mixBox: {
                paddingLeft: "20px",
                paddingTop: "10px"
            },
            avatar: {
                card: {
                    background: "none",
                    display: "flex",
                    justifyContent: "flex-reverse"
                },
                imageDiv: {
                    // marginLeft: "-15px",
                    // marginTop: "-35px",
                    display: "none"
                }
            },
            summaryBox: {
                marginTop: "0px",
                display: "none"
            },
            name: {
                display: "flex",
                marginLeft: "11rem",
                marginTop: "2rem",
                fontSize: "2rem",
                alignItems: "center",
                justifyContent: "center"
            },
            firstName: {
                marginRight: "10px"
            },
            position: {
                fontWeight: "100",
                display: "none"
            }
        },
        summary: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px",
                display: "none"
            },
            heading: {
                // marginLeft:"45%",
                color: "#F4C562",
                // borderBottom: "2px solid #F4C562",
                width: "fit-content",
                // marginBottom: "10px",
                fontSize: "18px"
            },
            list: {
                color: "#2e3c47ff"
            },
            eachSummary: {
                color: "#2e3c47ff"
            }
        },
        workExpe: {
            roleOrgContainer: {
                // display:'flex',
                justifyContent: 'space-between',
            },
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                // color: "#F4C562",
                // borderBottom: "2px solid #F4C562",
                width: "fit-content",
                // marginBottom: "10px",
                fontWeight: "700",
                textTransform: 'uppercase',
                fontSize: "18px"
            },
            eachWorkPlace: {
                marginLeft: "0px",
                color: "#2e3c47ff"
            },
            wholeList: {
                // listStyle:"none",
                paddingLeft: "15px",
                fontSize: "12px"
            },
            role: {
                // textTransform:"uppercase",
                fontSize: "14px",
            },
            organization: {
                fontWeight: "900",
                fontSize: "13px"
            },
            listItem: {
                paddingBottom: "3px",
                lineHeight: "18px",
                fontWeight: "600"
            },
            dates: {
                fontSize: "12px",
                fontWeight: "600"
            }

        },
        education: {
            layoutType: "layout3",
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "40px",
                // padding: "15px"
            },
            heading: {
                // paddingLeft:"45%",
                // color: "#F4C562",
                // borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "0px",
                fontWeight: "700",
                textTransform: 'uppercase',
                fontSize: "18px"
            },
            eachEducation: {
                // padding: "0px",
                color: "#2e3c47ff",
                // degree: {
                //     margin: "0px"
                // },
            },
            school: {
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: "900"
            },
            list: {
                listStyle: "none",
                paddingLeft: "0px",
                fontSize: "12px",
                fontWeight: "600"
            },
            content: {
                paddingLeft: "0px",

            },
            degree: {
                fontSize: "12px",
                fontWeight: "600"
            },
            dates: {
                fontSize: "12px",
                fontWeight: "600"
            }

        },
        skills: {
            layoutType: "layout3",
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "9px",
                paddingBottom: "0px",
                fontWeight: "700",
                textTransform: 'uppercase',
                fontSize: "18px"
            },
            categoryBox: {
                // background: "#1C3345",
                // border: "none",
                marginBottom: "5px",
                display: "flex",
                gap: "5px",
                alignItems: "center"
            },
            h3: {
                fontSize: "10px",
                fontWeight: "900"
            },
            span: {
                fontWeight: "600",
                fontSize: "12px"
            }
        },
        organiz: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"40%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "10px",
                fontWeight: "900",
                textTransform: 'uppercase',
                fontSize: "18px"
            },
            innerbox: {
                // padding: "10px"
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600",
                // textTransform:"uppercase",
                fontSize: "14px",
            }
        },
        award: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "40px"
            },
            heading: {
                // marginLeft:"35%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "0px",
                fontWeight: "700",
                textTransform: 'uppercase',
                fontSize: "18px"
            },
            innerbox: {
                // padding: "0px",
                color: "#2e3c47ff"
            },
            list: {
                listStyle: "none",
                paddingLeft: "0px",
                fontSize: "10px",
                fontWeight: "600"
            },
            title: {
                fontWeight: "800",
                fontSize: "10px",
                // textTransform:"uppercase"
            }
        },
        strength: {
            heading: {
                fontWeight: "900",
                textTransform: 'uppercase',
                fontSize: "18px"
            },
            list: {
                color: "#2e3c47ff"
            },
            eachStrength: {
                color: "#2e3c47ff"
            },
            title: {
                color: "#2e3c47ff",
                fontWeight: "600",
                // textTransform:"uppercase",
                fontSize: "14px",
            }
        },
        language: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"43%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #F4C562",
                width: "fit-content",
                // marginBottom: "15px",
                fontWeight: "900",
                textTransform: 'uppercase',
                fontSize: "18px"
            },
            listItem: {
                margin: "5px 0px",
                color: "#2e3c47ff"
            }
        },
        projects: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "10px",
                paddingBottom: "0px",
                fontWeight: "900",
                textTransform: 'uppercase',
                fontSize: "18px"
            },
            eachProject: {
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600",
                // textTransform:"uppercase",
                fontSize: "14px",
            }
        },
        achieve: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #F4C562",
                width: "fit-content",
                // marginBottom: "15px",
                paddingBottom: "0px",
                fontWeight: "900",
                textTransform: 'uppercase',
                fontSize: "18px"
            },
            innerbox: {
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600",
                // textTransform:"uppercase",
                fontSize: "14px",
            }
        },
        certificate: {
            box: {
                // borderBottom: "2px solid #2e3c47ff",
                marginBottom: "15px"
            },
            heading: {
                // marginLeft:"47%",
                // color: "#2e3c47ff",
                // borderBottom: "2px solid #F4C562",
                width: "fit-content",
                marginBottom: "10px",
                paddingBottom: "0px",
                fontWeight: "900",
                textTransform: 'uppercase',
                fontSize: "18px"
            },
            eachcertificate: {
                color: "#2e3c47ff"
            },
            title: {
                fontWeight: "600",
                // textTransform:"uppercase",
                fontSize: "14px",
            }
        },
        contact: {
            box: {
                margin: "10px 0px 0px 30px",
                borderBottom: "2px solid black",
            },
            heading: {
                display: "none"
            },
            list: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px"
            },
            hiddenItems: [2, 3],

        },
        coursework: {
            box: {
                marginBottom: "40px"
            },
            heading: {
                marginBottom: "5px",
                textTransform: "uppercase",
                fontSize: "18px"
            },
            listItem: {
                paddingBottom: "5px",

            },
            eachCourseBox: {
                display: "block",
                paddingTop: "5px",
                fontSize: "12px",
                fontWeight: "600"
            }
        },
        interests: {
            box: {
                marginBottom: "40px"
            },
            heading: {
                textTransform: "uppercase",
                marginBottom: "10px",
                fontSize: "18px"
            },
            everyInterestBox: {
                display: "flex",
                justifyContent: "space-between",
                paddingRight: "10px",
                fontSize: "12px",
                fontWeight: "600"
            },
            wholeList: {
                marginLeft: "14px",
                display: "flex",
                gap: "1rem",
                // justifyContent:"space-between"
            },
        }

    },
}


export default templateStyles;