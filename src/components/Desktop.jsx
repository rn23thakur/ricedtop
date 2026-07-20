import "../css/Desktop.css";
import Taskbar from "./Taskbar";
import WallpaperFrame from "./WallpaperFrame";
import StatusBar from "./features/StatusBar";
import VolumeBar from "./features/VolumeBar";
import Launcher from "./features/Launcher";
import { buildWallpapers } from "../utils/wallpapers";
import { useState, useEffect } from "react";

const wallpapers = buildWallpapers()

function Desktop() {
    const [activeWallpaper, setActiveWallpaper] = useState(wallpapers[1].path)
    const [desktopBg, setDesktopBg] = useState("black");
    const [activePanel, setActivePanel] = useState(null);

    useEffect(() => {
        function handleMouseLeaveWindow(event) {
            if (!event.relatedTarget && event.clientY <= 0) {
                setActivePanel(null);
            }
        }

        document.addEventListener("mouseout", handleMouseLeaveWindow);

        return () => {
            document.removeEventListener("mouseout", handleMouseLeaveWindow);
        };
    }, []);

    return (
        <div className="desktop" style={{ "--desktop-bg": desktopBg }}>
            <Taskbar></Taskbar>
            <WallpaperFrame imageSrc={activeWallpaper}></WallpaperFrame>

            <StatusBar activePanel={activePanel} setActivePanel={setActivePanel} />
            <Launcher activePanel={activePanel} setActivePanel={setActivePanel} />
            <VolumeBar activePanel={activePanel} setActivePanel={setActivePanel} />
        </div>
    );
}
export default Desktop;