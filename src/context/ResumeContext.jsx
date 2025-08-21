import { createContext, useContext, useState, useEffect } from "react";

export const ResumeContext = createContext();
export const useResume = () => useContext(ResumeContext);

export function ResumeProvider({ children, initialData, style, editModeFromURL, templateId }) {
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem("resumeData");
        return saved ? JSON.parse(saved) : initialData;
    });

    const [editMode, setEditMode] = useState(editModeFromURL || false);
    const [selectedSection, setSelectedSection] = useState(null);

    const [customLayoutAreas, setCustomLayoutAreas] = useState(null);
    const [sectionOrder, setSectionOrder] = useState([]);

    const [viewTypes, setViewTypes] = useState(() => {
        const key = `resumeViewTypes-${templateId}`;
        const saved = localStorage.getItem(key);

        if (saved) return JSON.parse(saved);

        const defaultViewTypes = {};

        const sectionMap = {
            workExpe: "experience",
            education: "education",
            projects: "projects",
            skills: "skills",
            organiz: "organizations",
            award: "awards",
            language: "language",
            certificate: "certifications",
            achieve: "achievements",
            summary: "summary"
        };

        Object.entries(sectionMap).forEach(([styleKey, dataKey]) => {
            if (style?.[styleKey]?.viewType) {
                defaultViewTypes[dataKey] = style[styleKey].viewType;
            }
        });

        localStorage.setItem(key, JSON.stringify(defaultViewTypes));
        return defaultViewTypes;
    });

    useEffect(() => {
        if (!templateId || !style?.layout?.grid?.areas) return;

        const layoutKey = `resumeCustomAreas-${templateId}`;
        const saved = localStorage.getItem(layoutKey);

        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) {
                    setCustomLayoutAreas(parsed);
                    return;
                }
            } catch { }
        }

        setCustomLayoutAreas(style.layout.grid.areas || []);
    }, [templateId, style]);

    useEffect(() => {
        if (!templateId) return;

        const sectionKey = `resumeSectionOrder-${templateId}`;
        const saved = localStorage.getItem(sectionKey);

        const fallback = (customLayoutAreas || style?.layout?.grid?.areas || []).flatMap(
            (a) => a.sections
        );

        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                setSectionOrder(parsed);
            } else {
                setSectionOrder(fallback);
            }
        } catch {
            setSectionOrder(fallback);
        }
    }, [templateId, style, customLayoutAreas]);

    useEffect(() => {
        if (!templateId) return;
        const sectionKey = `resumeSectionOrder-${templateId}`;
        localStorage.setItem(sectionKey, JSON.stringify(sectionOrder));
    }, [sectionOrder, templateId]);

    useEffect(() => {
        if (!templateId || !customLayoutAreas) return;
        const layoutKey = `resumeCustomAreas-${templateId}`;
        localStorage.setItem(layoutKey, JSON.stringify(customLayoutAreas));
    }, [customLayoutAreas, templateId]);

    useEffect(() => {
        localStorage.setItem("resumeData", JSON.stringify(data));
    }, [data]);

    useEffect(() => {
        if (!templateId) return;
        const key = `resumeViewTypes-${templateId}`;
        localStorage.setItem(key, JSON.stringify(viewTypes));
    }, [viewTypes, templateId]);

    const save = () => {
        localStorage.setItem("resumeData", JSON.stringify(data));
        setEditMode(false);
    };

    const updateField = (section, key, value) => {
        setData((prev) => {
            if (key === null && section) {
                return {
                    ...prev,
                    [section]: value,
                };
            }

            if (key && section) {
                return {
                    ...prev,
                    [section]: {
                        ...prev[section],
                        [key]: value,
                    },
                };
            }

            if (!section && key) {
                return {
                    ...prev,
                    [key]: value,
                };
            }

            return prev;
        });
    };

    const isNestedSection = (section) => {
        const nestedSections = [
            "experience", "education", "projects", "certifications",
            "achievements", "organizations", "strengths", "awards"
        ];
        return nestedSections.includes(section);
    };

    const addEntryAfter = (section, id) => {
        setData((prev) => {
            if (!section || !id) return prev;

            if (isNestedSection(section)) {
                const updated = prev[section].map(item => {
                    if (!Array.isArray(item.description)) return item;
                    const index = item.description.findIndex(desc => desc.id === id);
                    if (index === -1) return item;

                    const newDesc = {
                        id: `${item.id}_desc_${crypto.randomUUID()}`,
                        text: "New description entry"
                    };

                    return {
                        ...item,
                        description: [
                            ...item.description.slice(0, index + 1),
                            newDesc,
                            ...item.description.slice(index + 1)
                        ]
                    };
                });

                return { ...prev, [section]: updated };
            }
            else {
                const currentSection = prev[section];
                const index = currentSection.findIndex((entry) => entry.id === id);
                if (index === -1) return prev;

                const newEntry = { id: `${section}_${crypto.randomUUID()}`, text: "New entry" };

                const updated = [
                    ...currentSection.slice(0, index + 1),
                    newEntry,
                    ...currentSection.slice(index + 1),
                ];

                return { ...prev, [section]: updated };
            }
        });
    };

    const removeEntry = (section, id) => {
        setData((prev) => {
            if (!section || !id) return prev;

            if (isNestedSection(section)) {
                const updated = prev[section].map(item => {
                    if (!Array.isArray(item.description)) return item;
                    const index = item.description.findIndex(desc => desc.id === id);
                    if (index === -1 || item.description.length === 1) return item;

                    return {
                        ...item,
                        description: item.description.filter(desc => desc.id !== id)
                    };
                });

                return { ...prev, [section]: updated };
            } else {
                const currentSection = prev[section];
                if (currentSection.length === 1) return prev;

                const updated = currentSection.filter((entry) => entry.id !== id);
                return { ...prev, [section]: updated };
            }
        });
    };

    const templates = {
        experience: () => ({
            id: `exp_${crypto.randomUUID()}`,
            role: "New Role",
            organization: "New Organization",
            location: "Location",
            startDate: "Start",
            endDate: "End",
            description: [
                { id: `desc_${crypto.randomUUID()}`, text: "New bullet point" }
            ]
        }),
        education: () => ({
            id: `edu_${crypto.randomUUID()}`,
            school: "New School",
            degree: "New Degree",
            city: "City",
            startDate: "Start",
            endDate: "End",
            description: [
                { id: `desc_${crypto.randomUUID()}`, text: "New achievement" }
            ]
        }),
        projects: () => ({
            id: `proj_${crypto.randomUUID()}`,
            title: "New Project",
            link: "https://your-project-link.com",
            githubLink: "https://github.com/your-repo",
            description: [
                { id: `desc_${crypto.randomUUID()}`, text: "Project detail goes here..." }
            ]
        }),

        certifications: () => ({
            id: `cer_${crypto.randomUUID()}`,
            title: "New Certification",
            organization: "Certifying Body",
            date: "Year",
            description: [
                { id: `desc_${crypto.randomUUID()}`, text: "Certification detail goes here..." }
            ]
        }),

        strengths: () => ({
            id: `str_${crypto.randomUUID()}`,
            title: "New Strength",
            description: [
                { id: `desc_${crypto.randomUUID()}`, text: "Strength detail goes here..." }
            ]
        }),

        awards: () => ({
            id: `awr_${crypto.randomUUID()}`,
            title: "New Award Title",
            description: [
                { id: `desc_${crypto.randomUUID()}`, text: "Award description goes here..." }
            ]
        }),

        organizations: () => ({
            id: `org_${crypto.randomUUID()}`,
            title: "New Organization",
            description: [
                { id: `desc_${crypto.randomUUID()}`, text: "Contribution details go here..." }
            ]
        }),

        achievements: () => ({
            id: `ach_${crypto.randomUUID()}`,
            title: "New Achievement",
            description: [
                { id: `desc_${crypto.randomUUID()}`, text: "Achievement details go here..." }
            ]
        }),
    };

    const addFullEntryAfter = (section, id) => {
        setData((prev) => {
            const currentSection = prev[section];
            if (!Array.isArray(currentSection)) return prev;

            const index = currentSection.findIndex((entry) => entry.id === id);
            if (index === -1) return prev;

            const template = templates[section];
            if (!template) return prev;

            const newEntry = template();

            const updated = [
                ...currentSection.slice(0, index + 1),
                newEntry,
                ...currentSection.slice(index + 1),
            ];

            return { ...prev, [section]: updated };
        });
    };

    const removeFullEntry = (section, id) => {
        setData((prev) => {
            const currentSection = prev[section];
            if (!Array.isArray(currentSection)) return prev;

            if (currentSection.length === 1) return prev;

            const updated = currentSection.filter((entry) => entry.id !== id);
            return { ...prev, [section]: updated };
        });
    };

    return (
        <ResumeContext.Provider
            value={{
                data,
                setData,
                style,
                editMode,
                setEditMode,
                save,
                updateField,
                selectedSection,
                setSelectedSection,
                sectionOrder,
                setSectionOrder,
                customLayoutAreas,
                setCustomLayoutAreas,
                viewTypes,
                setViewTypes,
                addEntryAfter,
                removeEntry,
                addFullEntryAfter,
                removeFullEntry
            }}
        >
            {children}
        </ResumeContext.Provider>
    );
}
