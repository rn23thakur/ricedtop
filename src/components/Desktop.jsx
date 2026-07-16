import "../css/Desktop.css";
import Taskbar from "./Taskbar";
import WallpaperFrame from "./WallpaperFrame";
import EdgeTrigger from "./edges/EdgeTrigger";
import { buildWallpapers } from "../utils/wallpapers";

import { useState } from "react";

const wallpapers = buildWallpapers()

function Desktop() {
    const [activeWallpaper, setActiveWallpaper] = useState(wallpapers[22].path)
    return (
        <div className="desktop">
            <Taskbar></Taskbar>
            <WallpaperFrame imageSrc={activeWallpaper}></WallpaperFrame>
            <EdgeTrigger edge="status-bar" onActivate={() => {
                console.log("status bar triggered");
            }} />
            <EdgeTrigger edge="volume" onActivate={() => {
                console.log("volume bar triggered");
            }} />
            <EdgeTrigger edge="launcher" onActivate={() => {
                console.log("launcher triggered");
            }} />
        </div>
    );
}

export default Desktop;