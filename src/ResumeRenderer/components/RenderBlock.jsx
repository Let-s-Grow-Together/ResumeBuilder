// src/Components/shared/RenderBlock.jsx
export default function RenderBlock({ block, exp, expIndex, style, editMode, handleFieldBlur, handleDescriptionBlur }) {
  switch (block.type) {
    case "heading":
    case "subheading":
      return React.createElement(block.tag, {
        contentEditable: editMode,
        suppressContentEditableWarning: true,
        onBlur: (e) => handleFieldBlur(expIndex, block.field, e),
        style: style?.workExpe?.[block.field],
        dangerouslySetInnerHTML: { __html: exp[block.field] }
      });

    case "meta":
      const text = block.format
        .replace("{location}", exp.location || "")
        .replace("{startDate}", exp.startDate || "")
        .replace("{endDate}", exp.endDate || "");
      return React.createElement(block.tag, {
        contentEditable: editMode,
        suppressContentEditableWarning: true,
        onBlur: (e) => handleFieldBlur(expIndex, "location", e),
        style: style?.workExpe?.dates
      }, text);

    case "list":
      return (
        <ul style={style?.workExpe?.wholeList}>
          {exp[block.field]?.map((item, i) => (
            <li
              key={item.id || i}
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleDescriptionBlur(expIndex, i, e)}
              style={style?.workExpe?.listItem}
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          ))}
        </ul>
      );

    case "paragraphs":
      return (
        <div style={style?.workExpe?.eachExperience}>
          {exp[block.field]?.map((item, i) => (
            <p
              key={item.id || i}
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleDescriptionBlur(expIndex, i, e)}
              style={style?.workExpe?.content}
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          ))}
        </div>
      );

    case "row":
      return (
        <div style={{ display: "flex", gap: "16px" }}>
          {block.columns.map((col, ci) => (
            <div key={ci} style={style?.workExpe?.[`col${ci}`]}>
              {col.map((child, idx) => (
                <RenderBlock
                  key={idx}
                  block={child}
                  exp={exp}
                  expIndex={expIndex}
                  style={style}
                  editMode={editMode}
                  handleFieldBlur={handleFieldBlur}
                  handleDescriptionBlur={handleDescriptionBlur}
                />
              ))}
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}
