const wallpaperModules = import.meta.glob('../assets/wallpapers/*.{jpg,jpeg,png,svg}', {
    eager: true,
    import: 'default',
});

function camelToSpaces(str) {
    return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')      // lower/digit -> upper boundary
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')   // acronym -> word boundary
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2')      // letter -> digit boundary
    .replace(/([0-9])([a-zA-Z])/g, '$1 $2')      // digit -> letter boundary
    .trim();
}

function snakeToSpaces(str) {
    const titleWords = str.split("_");
    const title = titleWords
    .map(titleWord => titleWord.charAt(0).toUpperCase() + titleWord.slice(1))
    .join(" ")
    return title
}

export function buildWallpapers() {
    return Object.entries(wallpaperModules).map(([filePath, url], index) => {
        const filename = filePath.split('/').pop();
        
        const baseName = filename.replace(/\.[^/.]+$/, '');
        
        const formatter = baseName.includes('_') ? snakeToSpaces : camelToSpaces;

        return {
            id: index + 1,
            name: formatter(baseName),
            path: url,
        };
    });
}
