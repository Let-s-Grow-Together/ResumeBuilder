export function applyHeadingColors(layout, styles, templateId) {
  const template = styles[templateId];

  if (!template) return styles;

  layout.grid.areas.forEach(area => {
    if (Array.isArray(area.sections)) {
      area.sections.forEach(sectionName => {
        if (template[sectionName]) {
          if (!template[sectionName].heading) {
            template[sectionName].heading = {};
          }
          template[sectionName].heading.color = area.headingColor || template[sectionName].heading.color;
        }
      });
    }
  });

  return styles;
}
