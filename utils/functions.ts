/**
 * Scroll to a specific section of the page
 * 
 * @param sectionId {string} The ID of the section to scroll to
 * @returns {void}
 */
export const scrollToSection = (sectionId: string): void => {
    if (!sectionId) return;

    const targetDiv = document.getElementById(sectionId);
    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Download file
 * 
 * @param {string} fileName
 * @param {string} fileSource
 * @return {void}
 */
export const downloadFile = (fileName: string, fileSource: string): void => {
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileSource;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}