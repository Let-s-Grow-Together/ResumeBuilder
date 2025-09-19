
import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

function WorkExperience({ areaName }) {
	const {
		data,
		style,
		editMode,
		updateField,
		selectedSection,
		setSelectedSection,
		viewTypes,
	} = useResume();

	const workExpRef = useRef();
	const viewType = viewTypes?.experience || "list";

	const experiences = data.experience && data.experience[0] ? data.experience[0].items : [];

	const handleFieldBlur = (index, key, e) => {
		const updated = [...experiences];
		updated[index][key] = e.target.innerText.trim();

		const newExperienceData = [{ ...data.experience[0], items: updated }];
		updateField("experience", null, newExperienceData);
	};

	const handleDescriptionBlur = (expIndex, descIndex, e) => {
		const updated = [...experiences];
		const updatedDescription = [...updated[expIndex].description];
		updatedDescription[descIndex] = {
			...updatedDescription[descIndex],
			text: e.target.innerText.trim(),
		};
		updated[expIndex] = {
			...updated[expIndex],
			description: updatedDescription,
		};

		const newExperienceData = [{ ...data.experience[0], items: updated }];
		updateField("experience", null, newExperienceData);
	};

	const isSelected = selectedSection === "experience";
	const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
	const headingStyle = layoutHeading ?? style?.workExpe?.heading;

	const renderExperience = () => {
		if (!experiences || experiences.length === 0) {
			return <div>No work experience added yet</div>;
		}

		return experiences.map((exp, index) => {
			const roleStyle = style?.workExpe?.role;
			const organizationStyle = style?.workExpe?.organization;
			const locationStyle = style?.workExpe?.location;
			const dateStyle = style?.workExpe?.date;
			const workPlaceStyle = style?.workExpe?.eachWorkPlace;
			const roleOrgContainerStyle = style?.workExpe?.roleOrgContainer;
			const locationDatesContainerStyle = style?.workExpe?.locationDatesContainer;

			return (
				<div
					className="workPlace"
					key={exp.id || index}
					style={workPlaceStyle}
				>
					<div
						className="role-org-container"
						style={{

							...roleOrgContainerStyle
						}}
					>
						<h3
							contentEditable={editMode}
							data-id={exp.id}
							suppressContentEditableWarning
							onBlur={(e) => handleFieldBlur(index, "role", e)}
							style={roleStyle}
							dangerouslySetInnerHTML={{ __html: exp.role }}
						/>

						<h4
							contentEditable={editMode}
							data-id={exp.id}
							suppressContentEditableWarning
							onBlur={(e) => handleFieldBlur(index, "organization", e)}
							style={organizationStyle}
							dangerouslySetInnerHTML={{ __html: exp.organization }}
						/>
					</div>

					<div
						className="location-dates-container"
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							flexWrap: 'wrap',
							marginBottom: '16px',
							...locationDatesContainerStyle
						}}
					>
						<div
							contentEditable={editMode}
							data-id={exp.id}
							suppressContentEditableWarning
							onBlur={(e) => handleFieldBlur(index, "location", e)}
							style={locationStyle}
							className="location-text"
						>
							{exp.location}
						</div>

						<div className="dates-container" style={{ display: 'flex', gap: '4px', ...dateStyle }}>
							<div
								contentEditable={editMode}
								data-id={exp.id}
								suppressContentEditableWarning
								onBlur={(e) => handleFieldBlur(index, "startDate", e)}
								className="date-text"
							>
								{exp.startDate}
							</div>
							<span> - </span>
							<div
								contentEditable={editMode}
								data-id={exp.id}
								suppressContentEditableWarning
								onBlur={(e) => handleFieldBlur(index, "endDate", e)}
								className="date-text"
							>
								{exp.endDate}
							</div>
						</div>
					</div>

					{exp.techStack && (
						<div className="tech-stack-container" style={{
							marginBottom: '16px',
							fontStyle: 'italic'
						}}>
							<span
								contentEditable={editMode}
								data-id={exp.id}
								suppressContentEditableWarning
								onBlur={(e) => handleFieldBlur(index, "techStack", e)}
							>
								{exp.techStack}
							</span>
						</div>
					)}

					{viewType === "list" ? (
						<ul style={style?.workExpe?.wholeList}>
							{exp.description?.map((item, i) => (
								<li
									key={item.id || `desc-${i}`}
									data-id={item.id}
									contentEditable={editMode}
									suppressContentEditableWarning
									onBlur={(e) => handleDescriptionBlur(index, i, e)}
									style={style?.workExpe?.listItem}
									dangerouslySetInnerHTML={{ __html: item.text }}
								/>
							))}
						</ul>
					) : (
						<div style={style?.workExpe?.eachExperience}>
							{exp.description?.map((item, i) => (
								<p
									key={item.id || `desc-${i}`}
									data-id={item.id}
									contentEditable={editMode}
									suppressContentEditableWarning
									onBlur={(e) => handleDescriptionBlur(index, i, e)}
									style={style?.workExpe?.content}
									dangerouslySetInnerHTML={{ __html: item.text }}
								/>
							))}
						</div>
					)}
				</div>
			);
		});
	};

	return (
		<div
			className={`workExperience resumeSection ${editMode && isSelected ? "selected" : ""}`}
			onClick={() => setSelectedSection("experience")}
			style={{ ...style?.workExpe?.box, position: "relative" }}
			ref={workExpRef}
		>
			<h2 className={`${style?.workExpe?.dottedheading ? "dotted-heading" : ""}`} style={headingStyle}>
				Work Experience
			</h2>
			{renderExperience()}

			<InlineToolbar editMode={editMode} containerRef={workExpRef} sectionName="experience" />
		</div>
	);
}

export default WorkExperience;
