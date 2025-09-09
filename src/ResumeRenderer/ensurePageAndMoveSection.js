import createNewPageFromBaseFlex from './createNewPageFromBaseFlex';

function moveLastSectionToNewPageFlex(template, fromAreaName) {
    const layout = { ...template.layout };

    const areaKeys = Object.keys(layout).filter(k => k.startsWith("areas")).sort();
    const firstAreaKey = areaKeys[0] || "areas1";
    const lastAreaKey = areaKeys[areaKeys.length - 1];

    const fromArea = layout[firstAreaKey]?.find(area => area.name === fromAreaName);
    if (!fromArea || !fromArea.sections || fromArea.sections.length === 0) {
        return null;
    }

    const movedSection = fromArea.sections[fromArea.sections.length - 1];

    const updatedFirstAreaList = layout[firstAreaKey].map(area =>
        area.name === fromAreaName ? { ...area, sections: area.sections.slice(0, -1) } : area
    );

    const updatedLastAreaList = layout[lastAreaKey].map(area =>
        area.name === fromAreaName ? { ...area, sections: [movedSection, ...area.sections] } : area
    );

    const updatedTemplate = {
        ...template,
        layout: {
            ...layout,
            [firstAreaKey]: updatedFirstAreaList,
            [lastAreaKey]: updatedLastAreaList,
        }
    };

    return updatedTemplate;
}

export default function ensurePageAndMoveSection(template, fromAreaName) {
    const result = moveLastSectionToNewPageFlex(template, fromAreaName);

    if (result) return result;

    const templateWithNewPage = createNewPageFromBaseFlex(template);

    const finalResult = moveLastSectionToNewPageFlex(templateWithNewPage, fromAreaName);

    return finalResult || template;
}
