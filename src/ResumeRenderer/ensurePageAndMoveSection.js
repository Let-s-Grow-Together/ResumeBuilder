import createNewPageFromBaseFlex from './createNewPageFromBaseFlex';

function moveLastSectionToNewPageFlex(template, fromAreaName) {
    const updatedTemplate = JSON.parse(JSON.stringify(template));
    const layout = updatedTemplate.layout;

    const areaKeys = Object.keys(layout).filter(k => k.startsWith("areas")).sort();
    const firstAreaKey = areaKeys[0] || "areas1";
    const lastAreaKey = areaKeys[areaKeys.length - 1];

    const fromArea = layout[firstAreaKey]?.find(area => area.name === fromAreaName);
    if (!fromArea || !fromArea.sections || fromArea.sections.length === 0) {
        return false;
    }

    const movedSection = fromArea.sections.pop();

    const targetAreaList = layout[lastAreaKey];
    const targetArea = targetAreaList.find(area => area.name === fromAreaName);

    if (!targetArea) {
        return false;
    }

    targetArea.sections.unshift(movedSection);

    return updatedTemplate;
}

export default function ensurePageAndMoveSection(template, fromAreaName) {
    const result = moveLastSectionToNewPageFlex(template, fromAreaName);

    if (result) return result;

    const templateWithNewPage = createNewPageFromBaseFlex(template);

    const finalResult = moveLastSectionToNewPageFlex(templateWithNewPage, fromAreaName);

    return finalResult || template;
}
