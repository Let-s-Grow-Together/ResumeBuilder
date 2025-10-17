export const fetchTemplates = async () => {
    try {
        const response = await fetch('https://resumebuilder-backend-1-jlsa.onrender.com/api/templates');
        if (!response.ok) {
            throw new Error('Failed to fetch templates');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching templates:', error);
        return [];
    }
};

export const fetchTemplateStyles = async () => {
    try {
        const response = await fetch('https://resumebuilder-backend-1-jlsa.onrender.com/api/template-styles');
        if (!response.ok) {
            throw new Error('Failed to fetch template styles');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching template styles:', error);
        return {};
    }
};

export const fetchMockData = async () => {
    try {
        const response = await fetch('https://resumebuilder-backend-1-jlsa.onrender.com/api/userdata');
        if (!response.ok) {
            throw new Error('Failed to fetch the user data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching template styles:', error);
        return {};
    }
}
