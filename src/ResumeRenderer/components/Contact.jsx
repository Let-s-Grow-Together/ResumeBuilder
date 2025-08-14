import { useEffect, useState } from "react";
import EditableText from "../../Components/shared/EditableText";
import EditableIcon from './EditableIcon';
import { useResume } from "../../context/ResumeContext";
import AddLinkButton from "../../Components/shared/AddLinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    const { editMode, data, style } = useResume();

    const [contacts, setContacts] = useState(() => {
        const local = localStorage.getItem("customContactData");
        return local ? JSON.parse(local) : data.contact || [];
    });

    const [iconMap, setIconMap] = useState(() => {
        const local = localStorage.getItem("customContactIcons");
        if (local) return JSON.parse(local);

        const fallbackMap = {};
        (data.contact || []).forEach((c, i) => {
            fallbackMap[i] = c.icon || "email";
        });
        return fallbackMap;
    });

    useEffect(() => {
        localStorage.setItem("customContactData", JSON.stringify(contacts));
        localStorage.setItem("customContactIcons", JSON.stringify(iconMap));
    }, [contacts, iconMap]);

    const handleUpdateText = (index, field, newValue) => {
        const updated = [...contacts];
        updated[index][field] = newValue;
        setContacts(updated);
    };

    const handleDelete = (index) => {
        const updated = contacts.filter((_, i) => i !== index);

        const updatedMap = {};
        updated.forEach((_, i) => {
            updatedMap[i] = iconMap[i >= index ? i + 1 : i];
        });

        setContacts(updated);
        setIconMap(updatedMap);
    };

    const handleAdd = () => {
        const newContact = {
            id: Date.now(),
            icon: "email",
            textShown: "New Contact",
            link: ""
        };
        const updated = [...contacts, newContact];
        const newIndex = updated.length - 1;
        setContacts(updated);
        setIconMap({ ...iconMap, [newIndex]: "email" });
    };

    return (
        <div className="contact" style={style?.contact?.box}>
            <h2 style={style?.contact?.heading}>Contact</h2>
            <ul className="contactList" style={style?.contact?.list}>
                {contacts.map((contact, index) => (
                    <li key={index} className="contactItem" style={style?.contact?.listItem}>
                        <EditableIcon
                            currentIconKey={iconMap[index]}
                            field={index}
                            iconMap={iconMap}
                            setIconMap={setIconMap}
                            editMode={editMode}
                        />

                        <EditableText
                            value={contact.textShown}
                            onChange={(val) => handleUpdateText(index, "textShown", val)}
                            link={contact.link}
                            onEnterPress={handleAdd}
                        />

                        {editMode && (
                            <AddLinkButton
                                index={index}
                                link={contact.link}
                                onSetLink={(i, newLink) => handleUpdateText(i, "link", newLink)}
                            />
                        )}

                        {editMode && (
                            <button className="delete-btn" style={style?.contact?.deleteIcon} onClick={() => handleDelete(index)}>
                                <FontAwesomeIcon icon={faTrash} style={style?.contact?.trashIcon} />
                            </button>
                        )}
                    </li>
                ))}
            </ul>

            {editMode && (
                <button className="add-btn" style={style?.contact?.addIcon} onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlus} style={style?.contact?.plusIcon} />  Add Contact
                </button>
            )}
        </div>
    );
}