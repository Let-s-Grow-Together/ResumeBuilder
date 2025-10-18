import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ReactDOMServer from 'react-dom/server';
import { allContactIcons } from "../../utils/iconList";
import "./EditableIcon.css";
import { useResume } from "../../context/ResumeContext";

export default function EditableIcon({ currentIconKey, field, iconMap, setIconMap, editMode }) {
    const { style } = useResume();
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef(null);

    const handleClickOutside = (e) => {
        if (pickerRef.current && !pickerRef.current.contains(e.target)) {
            setShowPicker(false);
        }
    };

    useEffect(() => {
        if (showPicker) document.addEventListener("mousedown", handleClickOutside);
        else document.removeEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showPicker]);

    const usedKeys = Object.values(iconMap);
    const availableIcons = allContactIcons.filter(
        (entry) => !usedKeys.includes(entry.key) || iconMap[field] === entry.key
    );

    const handleSelect = (iconObj) => {
        setIconMap((prev) => ({
            ...prev,
            [field]: iconObj.key,
        }));
        setShowPicker(false);
    };

    const selectedIconObj = allContactIcons.find(entry => entry.key === currentIconKey);
    
    const getSvgMarkup = (icon) => {
        return ReactDOMServer.renderToStaticMarkup(<FontAwesomeIcon icon={icon} />);
    };

    const selectedIconSvg = selectedIconObj ? getSvgMarkup(selectedIconObj.icon) : null;

    return (
        <div className="editable-icon-wrapper" style={{ color: "#333", ...style?.contact?.iconWrapper, position: "relative", display: "inline-block" }}>
            <div
                dangerouslySetInnerHTML={{ __html: selectedIconSvg }}
                style={{
                    width: '14px',
                    height: '14px',
                    cursor: editMode ? "pointer" : "default",
                    color: "#333",
                    ...style?.contact?.icon,
                }}
                onClick={() => editMode && setShowPicker((prev) => !prev)}
            />

            {showPicker && (
                <div ref={pickerRef} className="icon-picker-popup" style={style?.contact?.pickerWrapper}>
                    {availableIcons.length > 0 ? (
                        availableIcons.map((entry) => (
                            <div key={entry.key} className="icon-option" style={style?.contact?.iconPickWrapper} onClick={() => handleSelect(entry)}>
                                 <div
                                        dangerouslySetInnerHTML={{ __html: svgMarkup }}
                                        style={style?.contact?.icon}
                                    />
                            </div>
                        ))
                    ) : (
                        <div className="icon-option none" style={style?.contact?.noIcon} >All icons used</div>
                    )}
                </div>
            )}
        </div>
    );
}
