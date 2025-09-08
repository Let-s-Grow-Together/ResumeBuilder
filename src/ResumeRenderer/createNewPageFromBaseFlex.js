export default function createNewPageFromBaseFlex(template) {
    const updatedTemplate = JSON.parse(JSON.stringify(template));
    const layout = updatedTemplate.layout;

    const areaKeys = Object.keys(layout).filter(k => k.startsWith("areas")).sort();
    const lastAreaKey = areaKeys.length > 0 ? areaKeys[areaKeys.length - 1] : "areas1";
    const baseAreas = layout[lastAreaKey] || [];

    const nextAreaKey = `areas${areaKeys.length + 1}`;

    const flowingAreas = baseAreas.filter(area => area.paginate !== false);

    const newAreas = flowingAreas.map(area => ({
        ...area,
        sections: [],
    }));

    layout[nextAreaKey] = newAreas;

    return updatedTemplate;
}
