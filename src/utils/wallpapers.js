const wallpaperModules = import.meta.glob('../assets/wallpapers/*.{jpg,jpeg,png,svg}', {
    eager: true,
    import: 'default',
});

function camelToSpaces(str){
    return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')      // lower/digit -> upper boundary
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')   // acronym -> word boundary
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2')      // letter -> digit boundary
    .replace(/([0-9])([a-zA-Z])/g, '$1 $2')      // digit -> letter boundary
    .trim();
}

export function buildWallpapers() {
    return Object.entries(wallpaperModules).map(([filePath, url], index) => {
        const filename = filePath.split('/').pop();
        const baseName = filename.replace(/\.[^/.]+$/, '');

        return {
            id: index + 1,
            name: camelToSpaces(baseName),
            path: url,
        };
    });
}