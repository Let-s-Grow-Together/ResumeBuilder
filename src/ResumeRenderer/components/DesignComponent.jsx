import { useResume } from "../../context/ResumeContext";

export default function designIcons() {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();
    return (
        <>
            <div style={style?.designIcons1?.box}
                className="designIcon1"></div>
            <div style={style?.designIcons2?.box}
                className="designIcon2"></div>
            <div style={style?.designIcons3?.box}
                className="designIcon3"></div>
        </>
    )
}