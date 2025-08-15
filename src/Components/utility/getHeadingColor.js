// import {templateStyles }from "../../data/templateStyle";
// import { templates } from "../../data/templates";


// export function getHeadingColor(templateId, sectionName) {
//   const template = allTemplates.find(t => t.id === templateId);
//   if (!template) return "#000"; // fallback black

//   const areas = template.layout.grid.areas;
//   const column = areas.find(a => a.sections.includes(sectionName));
//   return column?.headingColor || "#000";
// }

import { templates } from "../../data/templates";

export function getHeadingColor(templateId, sectionName) {
  // Step 1: Template find karo
  const template = templates.find(t => t.id === templateId);
  if (!template) return "#000"; // fallback

  // Step 2: Us template ke grid areas nikalo
  const areas = template.layout?.grid?.areas || [];

  // Step 3: Section ke liye matching area dhoondo
  const area = areas.find(a => a.sections?.includes(sectionName));

  // Step 4: Heading color return karo
  return area?.headingColor || "#000";
}
