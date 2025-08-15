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
        heading: {
            textDecoration: 'none',
            borderBottom: '2px solid var(--primary-color)',
            paddingLeft: '10px'
        }
    }
};

const templateStyles = {
    "1": {
        
    },
    "2": {
        vars: {
            "--heading-color": "#003366",
            "--accent-color": "#3498db",
            "--secondary-heading-color": "gray",
            "--content-color": "#111",
            "--section-padding": "1rem"
        },
        personalInfo: {
            box: {
                border: "1px solid white",
            },
            name: {
                color: "var(--heading-color)",
            },
            position: {
                color: "var(--secondary-heading-color)",
                fontWeight: "400",
            },
            summary: {
                color: "var(--content-color)",
                paddingTop: "10px"
            }
        },
        contact: {
            visibleFields: ["email", "phoneNo", "address", "linkedin", "github"],
            heading: {
                display: "none"
            },
            innerBox: {
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row-reverse"
            },
            icon: {
                color: "var(--heading-color)",
                marginLeft: "10px"
            }
        },
        skills: {
            heading: {
                ...sharedStyles["2"].heading,
            },
            eachSkillBox: {
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
    "3": {
        vars: {
            "--heading-color": "#333",
            "--secondary-heading-color": "#2091FF",
            "--content-color": "gray",
        },
        personalInfo: {
            box: {
                border: "1px solid white",
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
            }
        },
        contact: {
            visibleFields: ["phoneNo", "portfolio", "linkedin", "address"],
            box: {
                display: "flex",
                flexWrap: "wrap"
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
            addIcon:{
                height: "40px"
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
        projects:{
            box:{
                padding : "0px",
                borderLeft: "0px solid white"
            },
            heading:{
                textDecoration: "none",
                ...sharedStyles["3"].heading
            },
            title:{
                fontSize: "18px"
            }
        },
        certificate: {
            box:{
                marginTop: "15px"
            },
            heading:{
                ...sharedStyles["3"].heading
            },
            eachcertificate:{
                marginBottom: "5px"
            },
            title:{
                fontSize: "18px",
                fontWeight: "700"
            },
            organiz:{
                fontSize: "16px",
                color: "var(--secondary-heading-color)",
            },
            date:{
                padding: "2px",
                color: "var(--content-color)",
                fontStyle: "italic"
            }
        }
    },
    "4": {
        vars: {
            "--heading-color": "#333",
            "--secondary-heading-color": "#608abf",
            "--content-color": "#636466",
        },
        avatar: {
            card: {
                background: "linear-gradient(135deg, var(--secondary-heading-color) 50%, white 50%)"
            },
            heading: {
                color: "#333"
            }
        },
        contact: {
            visibleFields: ["phoneNo", "email", "address"],
            box: {
                ...sharedStyles["4"].box
            },
            heading: {
                ...sharedStyles["4"].heading
            },
        },
        summary: {
            box: {
                ...sharedStyles["4"].box
            },
            heading: {
                ...sharedStyles["4"].heading,
                marginBottom: "10px"
            }
        },
        skills: {
            box: {
                ...sharedStyles["4"].box
            },
            heading: {
                ...sharedStyles["4"].heading
            }
        },
        education: {
            box: {
                ...sharedStyles["4"].box,
                border: "none"
            },
            heading: {
                ...sharedStyles["4"].heading
            },
            sideline: "true",
            timeline: {
                borderLeft: "3px solid var(--secondary-heading-color)"
            },
            dot: {
                backgroundColor: "var(--secondary-heading-color)"
            },
            name: {
                color: "var(--content-color)"
            },
            city: {
                color: "var(--content-color)"
            },
            description: {
                color: "var(--content-color)"
            }
        },
        workExpe: {
            box: {
                ...sharedStyles["4"].box,
                border: "none"
            },
            heading: {
                ...sharedStyles["4"].heading
            },
            sideline: "true",
            timeline: {
                borderLeft: "3px solid var(--secondary-heading-color)"
            },
            dot: {
                backgroundColor: "var(--secondary-heading-color)"
            },
            role: {
                color: "var(--content-color)"
            },
            organization: {
                color: "var(--content-color)"
            },
            dates: {
                color: "var(--secondary-heading-color)"
            },
            wholeList: {
                color: "var(--content-color)"
            }
        },
        projects:{
            box: {
                ...sharedStyles["4"].box,
                border: "none",
                paddingLeft: "25px"
            },
            heading: {
                ...sharedStyles["4"].heading,
            },
            title:{
                color: "var(--content-color)",
                paddingLeft: "10px"
            },
            list:{
                paddingLeft: "20px"
            }
        },
        certificate: {
            heading: {
                ...sharedStyles["4"].heading,
                marginBottom: "5px"
            },
            eachcertificate: {
                paddingLeft: "5px"
            },
            title: {
                color: "var(--content-color)",
                fontSize: "20px"
            },
            organiz: {
                color: "var(--secondary-heading-color)"
            },
            date:{
                fontStyle: "italic"
            }
        }
    },
    "5": {
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
                marginLeft: "1rem"
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
            }
        },
        contact: {
            heading: {
                ...sharedStyles["5"].heading,
                marginBottom: "1rem"
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
                marginLeft: "1rem"
            }
        },
    },
    "6": {
        vars: {
            "--primary-color": "#3e465b",
            "--secondary-color": "#fff"
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
            heading: {
                color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)"
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
                color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)"
            },
            content: {
                marginTop: "5px",
                marginBottom: "10px",
                color: "var(--primary-color)"
            }
        },
        language: {
            box: {
                paddingRight: "1rem",
                paddingLeft: "1rem"
            },
            list: "true",
            heading: {
                color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)"
            },
            wholeList: {
                marginTop: "5px",
                marginBottom: "10px",
                color: "var(--primary-color)",
            }
        },
        skills: {
            box: {
                paddingRight: "1rem",
                paddingLeft: "1rem"
            },
            heading: {
                color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
                marginBottom: "5px"
            },
            eachSkillBox: {
                color: "var(--primary-color)",
                border: "1px solid var(--primary-color)"
            }
        },
        personalInfo: {
            box: {
                color: "var(--primary-color)",
                marginTop: "2rem",
                fontSize: "20px",
                marginBottom: "1rem",
                border: "none"
            },
            position: {
                marginRight: "16rem",
                paddingBottom: "5px",
                borderBottom: "3px solid var(--primary-color)"
            },
            summary: {
                display: "none"
            }
        },
        education: {
            box: {
                color: "var(--primary-color)",
                border: "none",
                paddingTop: "1rem",
                padding: "0rem"
            },
            heading: {
                color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
                marginBottom: "5px"
            }
        },
        workExpe: {
            box: {
                color: "var(--primary-color)",
                border: "none",
                paddingTop: "1.5rem",
                padding: "0rem"
            },
            heading: {
                color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
                marginBottom: "5px"
            }
        },
        projects:{
            box: {
                color: "var(--primary-color)",
                border: "none",
                paddingTop: "1.5rem",
                padding: "0rem"
            },
            heading: {
                color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
                marginBottom: "5px"
            }
        },
        certificate:{
            box: {
                color: "var(--primary-color)",
                border: "none",
                paddingTop: "1.5rem",
                padding: "0rem",
                paddingLeft: "1rem"
            },
            heading: {
                color: "var(--primary-color)",
                textDecoration: "none",
                borderBottom: "2px solid var(--primary-color)",
                marginBottom: "5px"
            },
            innerBox: {
                paddingLeft: "10px"
            }
        }
    },
    "7": {
        vars: {
            "--primary-color": '#2EBCB0',
        },
        avatar: {
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
                left: '125px',
                top: '-130px',
                textAlign: 'left'
            },
            heading: {
                color: '#333',
                fontSize: '32px',
            },
            position: {
                fontSize: '18px',
                color: 'var(--primary-color)'
            }
        },
        contact: {
            box: {
                marginTop: '2rem',
            },
            heading: {
                display: 'none',
            },
            innerBox: {
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row-reverse"
            },
            icon: {
                color: "var(--primary-color)",
                marginLeft: "10px",
                marginRight: '20px'
            }
        },
        summary: {
            box:{
                paddingLeft: "15px",
                marginBottom: "15px"
            },
            heading: {
                ...sharedStyles["7"].heading,
                marginBottom: "15px",
                fontSize: "23px"
            },
            content:{
                
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
                marginTop: '5px',
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
                paddingLeft: '10px'
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
                left: '-20px'
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
            innerBox: {
                textAlign: 'left',
                paddingLeft: '10px'
            },
            eachOrganiz: {
                marginBottom: '10px'
            }
        },
        award: {
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
        language: {
            viewType: "list",
            heading: {
                ...sharedStyles["7"].heading,
            },
            list: 'true',
            wholeList: {
                paddingLeft: '35px'
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
            title:{
                fontSize: "16px",
                fontWeight: "700"
            },
            organiz:{
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
        achieve:{
            box:{
                textAlign: "left",
                paddingLeft: "15px",
                marginBottom: "15px"
            },
            heading:{
                ...sharedStyles["7"].heading,
                marginBottom: "5px"
            },
            innerbox:{
                paddingLeft: "10px"
            },
            list:{
                paddingLeft: "15px"
            },
        }
    },

    "10":{
        avatar:{
            card: {
                background: "none",
                display:"none"
            },
            heading:{
                color:"#cb78f2ff",
                display:"none"
            },
            position:{
                color:"#cb78f2ff",
                display:"none"
            },
            imageDiv:{
                marginTop:"-30px",
                marginLeft:"-20px"
            }
        },
        skills:{
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px",
                marginTop:"20px",
                paddingBottom:"0px" 
            },
            everySkillBox:{
                justifyContent:"flex-start",
            },
            eachSkillBox:{
                border:"none",
                background:"lightgray",
                borderRadius:"5px",
                color:"white",
                marginRight:"5px"
            }
        },
        achieve:{
            box:{
                marginTop:"20px" 
            },
            heading:{
                marginBottom:"10px",
                borderBottom:"1px solid #142c45ff"
            },
            innerbox:{
                marginLeft:"5px"
            },
            title:{
                marginTop:"10px",
                marginBottom:"5px"
            },
        },
        contact:{
            box:{
                paddingBottom:"5px", 
            },
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px"
            }
        },
        personalInfo:{
            box:{
                padding:"15px",
                marginBottom:"10px", 
                background:"#142c45ff",
                color:"white" 
            },
            name:{
                paddingBottom:"5px"
            },
            position:{
                marginBottom:"8px",
                borderBottom:"1px solid white",
                width:"fit-content",
                paddingRight:"10px"
            },
        },
        language:{
            box:{
                display:"block"
            },
            heading:{
                marginBottom:"10px",
                borderBottom:"1px solid #142c45ff"
            }
        },
        award:{
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px"
            },
            innerbox:{
                marginBottom:"10px"
            },
            title:{
                marginBottom:"5px"
            }
        },
        projects:{
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px"
            },
            title:{
                marginBottom:"5px"
            },
            eachProject:{
                marginBottom:"10px"
            }
        },
        summary:{
            box:{
                marginTop:"10px",
                paddingBottom:"5px" 
            },
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px"
            }
        },
        workExpe:{
            box:{
                marginTop:"20px" 
            },
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px"
            },
            eachWorkPlace:{
                marginBottom:"15px"
            },
            role:{
                margin:"5px"
            },
            organization:{
                margin:"5px 10px"
            },
            dates:{
                margin:"5px 10px" 
            },
        },
        education:{
            box:{
                marginTop:"20px" 
            },
            heading:{
                marginBottom:"10px",
                borderBottom:"1px solid #142c45ff" 
            },
            eachEducation:{
                marginBottom:"15px",
                marginLeft:"5px"
            },
            degree:{
                marginBottom:"5px"
            },
            school:{
                margin:"5px"
            },
            dates:{
                margin:"5px"
            }
        },
        organiz:{
            heading:{
                marginBottom:"10px",
                borderBottom:"1px solid #142c45ff" 
            },
            title:{
                marginBottom:"5px",
            },
            innerbox:{
                marginBottom:"10px",
            },
        },
        certificate:{
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px" 
            },
            title:{
                marginBottom:"5px"
            },
            organiz:{
                marginBottom:"3px"
            },
            eachcertificate:{
                marginBottom:"10px"
            }
        }
    },

    "11":{
        avatar:{
            card: {
                background: "none",
                display:"none"
            },
            heading:{
                color:"#142c45ff",
                marginTop:"-120px",
                marginLeft:"60px",
                display:"none"
            },
            position:{
                color:"#142c45ff",
                marginTop:"0px",
                marginLeft:"60px",
                display:"none"
            },
            imageDiv:{
                marginTop:"-30px",
                marginLeft:"-30px",
                // border:"4px solid #142c45ff",
                border: "3px solid white",
                boxShadow: "0 0 0 3px #142c45ff",
            },
            image:{
                borderBottom:"0px solid white",
                borderTop:"0px solid white",
                borderLeft:"0px solid white",
                borderRight:"0px solid white",
            }
        },
        skills:{
            box:{
                backgroundColor:"inherit",
                 marginTop:"40px" 
            },
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px",
                marginTop:"20px",
                paddingBottom:"0px" 
            },
            everySkillBox:{
                justifyContent:"flex-start"
            },
            eachSkillBox:{
                border:"none",
                background:"gray",
                borderRadius:"5px",
                color:"white",
                marginRight:"10px"
            }
        },
        achieve:{
            box:{
                marginTop:"40px" 
            },
            heading:{
                marginBottom:"10px",
                borderBottom:"1px solid #142c45ff"
            },
            innerbox:{
                marginLeft:"5px"
            },
            title:{
                marginTop:"10px",
                marginBottom:"5px"
            },
        },
        contact:{
            box:{
                padding:"10px",
                background:"#142c45ff",
                color:"white",
                borderRadius:"8px",  
            },
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px",
                display:"none"
            },
            listItem:{
                padding:"5px"
            }
        },
        personalInfo:{
            box:{
                // padding:"15px",
                marginBottom:"10px", 
                // background:"#142c45ff",
                color:"#142c45ff",
                marginTop:"-140px",
                marginLeft:"120px"
                // position:"absolute",
                // top:"7.4%",
                // left:"25%"  
            },
            name:{
                paddingBottom:"5px"
            },
            position:{
                marginBottom:"8px",
                borderBottom:"1px solid white",
                width:"fit-content",
                paddingRight:"10px",
                overFlow:"auto"
            },
        },
        language:{
            box:{
                display:"block",
                marginTop:"40px" 
            },
            heading:{
                marginBottom:"10px",
                borderBottom:"1px solid #142c45ff"
            }
        },
        award:{
            box:{
                 marginTop:"40px" 
            },
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px"
            },
            innerbox:{
                marginBottom:"10px"
            },
            title:{
                marginBottom:"5px"
            }
        },
        projects:{
            box:{
                 marginTop:"40px" 
            },
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px"
            },
            title:{
                marginBottom:"5px"
            },
            eachProject:{
                marginBottom:"10px"
            }
        },
        summary:{
            box:{
                marginTop:"40px" ,
                paddingBottom:"5px" 
            },
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px"
            }
        },
        workExpe:{
            box:{
                marginTop:"40px" 
            },
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px"
            },
            eachWorkPlace:{
                marginBottom:"15px"
            },
            role:{
                margin:"5px"
            },
            organization:{
                margin:"5px 10px"
            },
            dates:{
                margin:"5px 10px" 
            },
        },
        education:{
            box:{
                marginTop:"40px" 
            },
            heading:{
                marginBottom:"10px",
                borderBottom:"1px solid #142c45ff" 
            },
            eachEducation:{
                marginBottom:"15px",
                marginLeft:"5px"
            },
            degree:{
                marginBottom:"5px"
            },
            school:{
                margin:"5px"
            },
            dates:{
                margin:"5px"
            }
        },
        organiz:{
            box:{
                 marginTop:"40px" 
            },
            heading:{
                marginBottom:"10px",
                borderBottom:"1px solid #142c45ff" 
            },
            title:{
                marginBottom:"5px",
            },
            innerbox:{
                marginBottom:"10px",
            },
        },
        certificate:{
            box:{
                 marginTop:"40px" 
            },
            heading:{
                borderBottom:"1px solid #142c45ff",
                marginBottom:"10px" 
            },
            title:{
                marginBottom:"5px"
            },
            organiz:{
                marginBottom:"3px"
            },
            eachcertificate:{
                marginBottom:"10px"
            }
        }
    },
       "12": {
    avatar: {
        card: { background: "none", display:"none" },
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
            fontWeight: "600"
        },
        eachSkillBox: {
            background: "#00897b",
            color: "white",
            borderRadius: "5px",
            padding: "4px 8px",
            margin: "4px",
            display: "inline-block"
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
    avatar: {
        card:{
            background:"linear-gradient(135deg, #fbc02d 50%, white 50%)",
            display:"none"
        },
        imageDiv: {
            border: "3px solid #fbc02d",
            borderRadius: "50%",
            overflow: "hidden",
            width: "100px",
            height: "100px",
            margin: "0 auto",    
        }
    },
    personalInfo: {
        box: { textAlign: "center", marginTop: "15px" },
        name: { fontSize: "22px", fontWeight: "600", color: "#fbc02d" },
        position: { fontSize: "14px", opacity: 0.9 }
    },
    contact: {
        heading: { borderBottom: "2px solid #fbc02d", marginBottom: "10px" },
        listItem: { padding: "4px 0" }
    },
    skills: {
        heading: { borderBottom: "2px solid #fbc02d", marginBottom: "10px" },
        eachSkillBox: {
            background: "#fbc02d",
            color: "#1b263b",
            borderRadius: "5px",
            padding: "4px 8px",
            margin: "4px",
            display: "inline-block"
        }
    },
    summary: {
        heading: { borderBottom: "2px solid #1b263b", marginBottom: "10px" }
    },
    workExpe: {
        box:{
            backgroundImage: "url(`https://novoresume.com/yna_pub/images/bg-select/squared.png`)"
        },
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
        card:{
            display:"none"
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
        box: { display: "inline-block",  },
        name: { fontSize: "24px", fontWeight: "700", color: "white" },
        position: { fontSize: "14px", opacity: 0.9 }
    },
    contact: {
        box: { display: "inline-block", marginLeft: "auto", textAlign: "right" },
        listItem: { padding: "2px 0", color: "white" }
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
            display: "inline-block"
        }
    },
    language: {
        heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" }
    },
    award: {
        heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" }
    },
    organiz: {
        heading: { borderBottom: "2px solid #ff6f61", marginBottom: "10px" }
    }
},
"15": {
    avatar: {
        card: { display: "none" },
        imageDiv: {
            border: "3px solid white",
            borderRadius: "50%",
            overflow: "hidden",
            width: "70px",
            height: "70px",
            marginRight: "12px"
        }
    },
    personalInfo: {
        box: { display: "inline-block" },
        name: { fontSize: "22px", fontWeight: "700", color: "white" },
        position: { fontSize: "13px", opacity: 0.9 }
    },
    contact: {
        box: { display: "inline-block", marginLeft: "auto", textAlign: "right" },
        listItem: { padding: "2px 0", color: "white" }
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
            display: "inline-block"
        }
    },
    language: {
        heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" }
    },
    award: {
        heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" }
    },
    workExpe: {
        heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" }
    },
    projects: {
        heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" }
    },
    education: {
        heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" }
    },
    organiz: {
        heading: { borderBottom: "2px solid #00796b", marginBottom: "8px" }
    }
,
"16": {
  avatar: {
    card: { display: "none" },
    imageDiv: { border: "2px solid white", borderRadius: "50%", width: "100px", height: "100px", margin: "0 auto 10px" }
  },
  personalInfo: {
    name: { fontSize: "26px", fontWeight: "700", color: "#2e7d32" },
    position: { fontSize: "14px", fontStyle: "italic" }
  },
  contact: {
    listItem: { color: "white", marginBottom: "4px" }
  },
  skills: {
    eachSkillBox: { background: "#2e7d32", color: "white", borderRadius: "4px", padding: "3px 6px", margin: "2px", display: "inline-block" }
  },
  language: {
    listItem: { color: "white" }
  },
  summary: { heading: { borderBottom: "2px solid #2e7d32", marginBottom: "8px" } },
  workExpe: { heading: { borderBottom: "2px solid #2e7d32", marginBottom: "8px" } },
  projects: { heading: { borderBottom: "2px solid #2e7d32", marginBottom: "8px" } },
  education: { heading: { borderBottom: "2px solid #2e7d32", marginBottom: "8px" } },
  award: { heading: { borderBottom: "2px solid #2e7d32", marginBottom: "8px" } },
  organiz: { heading: { borderBottom: "2px solid #2e7d32", marginBottom: "8px" } },
}
}




}

export default templateStyles;