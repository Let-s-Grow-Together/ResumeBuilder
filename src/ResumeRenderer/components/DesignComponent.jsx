import { useResume } from "../../context/ResumeContext";

export default function designIcons(){
     const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();
    return(
        <div  style={style?.designIcon?.box}
        className="designIcon"></div>
    )
}