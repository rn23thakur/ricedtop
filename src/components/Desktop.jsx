import "../css/Desktop.css";
import Taskbar from "./Taskbar";
import WallpaperFrame from "./WallpaperFrame";
import StatusBar from "./features/StatusBar";
import { buildWallpapers } from "../utils/wallpapers";
import { useState } from "react";

const wallpapers = buildWallpapers()

function Desktop() {
    const [activeWallpaper, setActiveWallpaper] = useState(wallpapers[100].path)
    const [desktopBg, setDesktopBg] = useState("black");
    const [activePanel, setActivePanel] = useState(null);

    return (
        <div className="desktop" style={{ "--desktop-bg": desktopBg }}>
            <Taskbar></Taskbar>
            <WallpaperFrame imageSrc={activeWallpaper}></WallpaperFrame>

            <StatusBar activePanel={activePanel} setActivePanel={setActivePanel} />
        </div>
    );
}
export default Desktop;