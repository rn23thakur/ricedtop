import "../css/WallpaperFrame.css";

function WallpaperFrame( {imageSrc} ) {
    return (
        <div className="wallpaper-frame" style={{ backgroundImage: `url(${imageSrc})` }}>

        </div>
    )
}

export default WallpaperFrame;