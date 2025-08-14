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
    },
    "8": {
        heading:{
            borderBottom: '2px solid #red'
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
            "--primary-color": "#ffffff",

             "--left-bg-color": "#f6f6f6",
               "--right-bg-color": "#ffffff",
    "--right-text-color": "#0A3965",
            "--secondary-heading-color": "#608abf",
            "--content-color": "#636466",
        },
        avatar: {
            card: {
                background: "linear-gradient(138.5deg, var(--secondary-heading-color) 50%, white 50%)",
                position:'relative',
                top: '-58px',
                left:'-58px',
                overflow: "hidden",
                backgroundColor: "#f6f6f6"
            },
            heading: {
                color: "#333"
            },
            imageDiv:{
                position: 'relative',
                top: '2px',


            }
        },
        contact: {
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
            visibleFields: ["email", "phoneNo", "address", "linkedin"],
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
                ...sharedStyles["7"].heading
            },
            everySkillBox: {
                paddingLeft: '10px',
                rowGap: '10px'
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
 "8": {
        vars: {
            "--primary-color": "#ffffff",
    "--left-bg-color": "#0A3965",
    "--left-text-color": "#ffffff",
     "--right-bg-color": "#ffffff",
    "--right-text-color": "#0A3965"
        },
     
        avatar: {
            card: {
                background: "none",
                width: "300px",
                height: '150px',
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
                left: '125px',
                top: '-130px',
                textAlign: 'left'
            },
            heading: {
                display: 'none'
            },
            position: {
               display: 'none'
            }
        },
        contact: {
            visibleFields: ["email", "phoneNo", "address", "linkedin"],
            box: {
                marginTop: '2rem',
            },
            heading: {
                 ...sharedStyles["7"].heading
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
            },
            list :{
                marginTop: '.5rem'
            }
        },
        summary: {
            box:{
                // paddingLeft: "15px",
                marginTop: "6rem",
                marginBottom: "15px",
            },
            eachSummary:{
                marginTop: '.5rem'
            },
            list:{
                marginTop: '.5rem !important'
            },
            heading: {
                 borderBottom: '2px solid #0A3965'
                // display: 'none'
                //  ...sharedStyles["7"].heading
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
               borderBottom: '2px solid #0A3965'
            },
            dates: {
                color: '#0A3965'
            },
            // wholeList: {
            //     marginTop: '5px',
            //     padding: '4px',
            //     borderLeft: '1px solid var(--primary-color)',
            //     borderRight: '1px solid var(--primary-color)',
            //     backgroundImage: 'linear-gradient(to right, var(--primary-color) 2%, white 2%, white 98%, var(--primary-color) 98%), linear-gradient(to right, var(--primary-color) 2%, white 2%, white 98%, var(--primary-color) 98%)',
            //     backgroundSize: '100% 1px',
            //     backgroundPosition: 'top, bottom',
            //     backgroundRepeat: 'no-repeat',
               
            // },'
           
            bulletIcon: {
                type: "fontawesome",
                icon: "faWindowMinimize",
                color: "var(--primary-color)",
                size: "0.5rem",
                marginRight: "0.5rem",
            },
            eachWorkPlace: {
                paddingLeft: '10px',
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
            eachEducation:{
                marginTop: '.5rem'
            },
            heading: {
                ...sharedStyles["7"].heading,
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
            viewType: "list",
            box: {
                marginBottom: '2rem',
                 marginTop: '2rem'

            },
            heading: {
                ...sharedStyles["7"].heading
            },
            // everySkillBox: {
            //     paddingLeft: '10px',
            //     rowGap: '10px'
            // },
           wholeList:{
            marginLeft: '1rem',
            marginTop: '.5rem'
           },
           list:{
            rowGap: '10px'
           }
        },
        personalInfo:{
            borderBottom: "none",
            summaryBox: {
                display: 'none'
            },
            position:{
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
                borderBottom: '2px solid #0A3965',
                textAlign: 'left',
                marginBottom: '10px',
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
            viewType: "list",
            box: {
                border: 'none',
                marginBottom: '1rem'
            },
            heading: {
               borderBottom: '2px solid #0A3965',
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
        language: {
            viewType: "list",
            heading: {
                ...sharedStyles["7"].heading,
            },
            list: 'true',
            wholeList: {
                paddingLeft: '35px',
                 marginLeft: '-10px'
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
    
}



export default templateStyles;












