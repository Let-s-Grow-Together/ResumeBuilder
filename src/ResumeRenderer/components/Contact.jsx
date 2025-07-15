

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import { useResume } from '../../context/ResumeContext';
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

export default function Contact() {
    const { data, style, editMode, updateField } = useResume();
    const contact = data.contact;

    const handleBlur = (key, e) => {
        updateField("contact", key, e.target.innerHTML.trim());
    };

    return (
        <div className="contactList" style={{ ...style?.contact?.box, position: "relative" }}>
            {style?.contact?.heading?.display !== "none" && (
                <h2 style={style?.contact?.heading}>
                    Contact
                    {editMode && (
                        <FloatingToolbarSimple
                            sectionKey="contact"
                            position={{ top: "-45px", right: "20px" }}
                        />
                    )}
                </h2>
            )}

            {/* PHONE */}
            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faPhone} style={style?.contact?.icon} />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("phoneNo", e)}
                    style={style?.contact?.content}
                    dangerouslySetInnerHTML={{ __html: contact.phoneNo || "" }}
                />
            </div>

            {/* EMAIL */}
            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faEnvelope} style={style?.contact?.icon} />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("email", e)}
                    style={style?.contact?.content}
                    dangerouslySetInnerHTML={{ __html: contact.email || "" }}
                />
            </div>

            {/* ADDRESS */}
            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faLocationDot} style={style?.contact?.icon} />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("address", e)}
                    style={style?.contact?.content}
                    dangerouslySetInnerHTML={{ __html: contact.address || "" }}
                />
            </div>

            {/* PORTFOLIO */}
            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faGlobe} style={style?.contact?.icon} />
                <a
                    href={contact.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("portfolio", e)}
                    style={style?.contact?.anchor}
                    dangerouslySetInnerHTML={{ __html: contact.portfolio || "" }}
                />
            </div>

            {/* LINKEDIN */}
            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faLinkedin} style={style?.contact?.icon} />
                <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("linkedin", e)}
                    style={style?.contact?.anchor}
                    dangerouslySetInnerHTML={{ __html: contact.linkedin || "" }}
                />
            </div>

            {/* GITHUB */}
            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faGithub} style={style?.contact?.icon} />
                <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("github", e)}
                    style={style?.contact?.anchor}
                    dangerouslySetInnerHTML={{ __html: contact.github || "" }}
                />
            </div>

            {/* SKYPE */}
            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faSkype} style={style?.contact?.icon} />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("skype", e)}
                    style={style?.contact?.content}
                    dangerouslySetInnerHTML={{ __html: contact.skype || "" }}
                />
            </div>
        </div>
    );
}

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
// import { useResume } from '../../context/ResumeContext';
// import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

// export default function Contact() {
//     const { data, style, editMode, updateField } = useResume();
//     const contact = data.contact;
//     const handleBlur = (key, e) => {
//         updateField("contact", key, e.target.innerText.trim());
//     };

//     return (
//         <div className="contactList" style={{...style?.contact?.box,position:"relative"}}>
//             {style?.contact?.heading?.display !== "none" && (
//                 <h2 style={style?.contact?.heading}>Contact
//                 {editMode && (
//                     <FloatingToolbarSimple
//                         sectionKey="contact"
//                         position={{ top: "-45px", right: "20px" }}
//                     />
//                 )}</h2>
//             )}

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faPhone} style={style?.contact?.icon} />
//                 <p
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onBlur={(e) => handleBlur("phoneNo", e)}
//                     style={style?.contact?.content}
//                 >
//                     {contact.phoneNo}
//                 </p>
//             </div>

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faEnvelope} style={style?.contact?.icon} />
//                 <p
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onBlur={(e) => handleBlur("email", e)}
//                     style={style?.contact?.content}
//                 >
//                     {contact.email}
//                 </p>
//             </div>

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faLocationDot} style={style?.contact?.icon} />
//                 <p
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onBlur={(e) => handleBlur("address", e)}
//                     style={style?.contact?.content}
//                 >
//                     {contact.address}
//                 </p>
//             </div>

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faGlobe} style={style?.contact?.icon} />
//                 <a
//                     href={contact.portfolio}
//                     target="_blank"
//                     rel="noreferrer"
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onBlur={(e) => handleBlur("portfolio", e)}
//                     style={style?.contact?.anchor}
//                 >
//                     {editMode ? contact.portfolio : "Portfolio"}
//                 </a>
//             </div>

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faLinkedin} style={style?.contact?.icon} />
//                 <a
//                     href={contact.linkedin}
//                     target="_blank"
//                     rel="noreferrer"
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onBlur={(e) => handleBlur("linkedin", e)}
//                     style={style?.contact?.anchor}
//                 >
//                     {editMode ? contact.linkedin : "LinkedIn"}
//                 </a>
//             </div>

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faGithub} style={style?.contact?.icon} />
//                 <a
//                     href={contact.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onBlur={(e) => handleBlur("github", e)}
//                     style={style?.contact?.anchor}
//                 >
//                     {editMode ? contact.github : "GitHub"}
//                 </a>
//             </div>


//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faSkype} style={style?.contact?.icon} />
//                 <p
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onBlur={(e) => handleBlur("skype", e)}
//                     style={style?.contact?.content}
//                 >
//                     {contact.skype}
//                 </p>
//             </div>
//         </div>
//     );
// }


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
// import { useResume } from '../../context/ResumeContext';
// import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

// export default function Contact() {
//     const { data, style, editMode, updateField } = useResume();
//     const contact = data.contact;

//     // Save HTML content
//     const handleBlur = (key, e) => {
//         updateField("contact", key, e.target.innerHTML.trim());
//     };

//     // Helper to render editable <p> or <a> with innerHTML
//     const EditableField = ({ tag = "p", field, icon, href, styleObj }) => {
//         const commonProps = {
//             contentEditable: editMode,
//             suppressContentEditableWarning: true,
//             onBlur: (e) => handleBlur(field, e),
//             style: styleObj,
//             dangerouslySetInnerHTML: { __html: contact[field] || "" },
//         };

//         return (
//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={icon} style={style?.contact?.icon} />
//                 {href ? (
//                     <a
//                         href={contact[field]}
//                         target="_blank"
//                         rel="noreferrer"
//                         {...commonProps}
//                     >
//                         {editMode ? contact[field] : field.charAt(0).toUpperCase() + field.slice(1)}
//                     </a>
//                 ) : (
//                     <p {...commonProps} />
//                 )}
//             </div>
//         );
//     };

//     return (
//         <div className="contactList" style={{ ...style?.contact?.box, position: "relative" }}>
//             {style?.contact?.heading?.display !== "none" && (
//                 <h2 style={style?.contact?.heading}>
//                     Contact
//                     {editMode && (
//                         <FloatingToolbarSimple
//                             sectionKey="contact"
//                             position={{ top: "-45px", right: "20px" }}
//                         />
//                     )}
//                 </h2>
//             )}

//             {/* Editable Fields */}
//             <EditableField field="phoneNo" icon={faPhone} styleObj={style?.contact?.content} />
//             <EditableField field="email" icon={faEnvelope} styleObj={style?.contact?.content} />
//             <EditableField field="address" icon={faLocationDot} styleObj={style?.contact?.content} />
//             <EditableField field="portfolio" icon={faGlobe} styleObj={style?.contact?.anchor} href />
//             <EditableField field="linkedin" icon={faLinkedin} styleObj={style?.contact?.anchor} href />
//             <EditableField field="github" icon={faGithub} styleObj={style?.contact?.anchor} href />
//             <EditableField field="skype" icon={faSkype} styleObj={style?.contact?.content} />
//         </div>
//     );
// }

