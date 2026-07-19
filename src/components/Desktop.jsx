import "../css/Desktop.css";
import Taskbar from "./Taskbar";
import WallpaperFrame from "./WallpaperFrame";
import EdgeTrigger from "./edges/EdgeTrigger";
import EdgePanel from "./edges/EdgePanel.jsx"
import { buildWallpapers } from "../utils/wallpapers";

import { useState } from "react";

const wallpapers = buildWallpapers()

function Desktop() {
    const [activeWallpaper, setActiveWallpaper] = useState(wallpapers[90].path)
    const [desktopBg, setDesktopBg] = useState("black");
    const [statusBarOpen, setStatusBarOpen] = useState(false);
    const [launcherOpen, setLauncherOpen] = useState(false);
    const [volumeOpen, setVolumeOpen] = useState(false);

    return (
        <div className="desktop" style={{ "--desktop-bg": desktopBg }}>
            <Taskbar></Taskbar>
            <WallpaperFrame imageSrc={activeWallpaper}></WallpaperFrame>
            <EdgeTrigger edge="status-bar" onActivate={() => {
                setStatusBarOpen(true);
            }} />
            <EdgeTrigger edge="volume" onActivate={() => {
                setVolumeOpen(true);
            }} />
            <EdgeTrigger edge="launcher" onActivate={() => {
                setLauncherOpen(true);
            }} />
            <EdgePanel edge="top-edge" featureName="status-bar" isOpen={statusBarOpen} onClose={() => setStatusBarOpen(false)}>
                <h1>Status Bar</h1>
            </EdgePanel>
            <EdgePanel edge="bottom-edge" featureName="launcher" isOpen={launcherOpen} onClose={() => setLauncherOpen(false)}>
                <h1>Launcher</h1>
            </EdgePanel>
            <EdgePanel edge="right-edge" featureName="volume" isOpen={volumeOpen} onClose={() => setVolumeOpen(false)}>
                <h1>Volume</h1>
            </EdgePanel>
        </div>
    );
}

export default Desktop;
