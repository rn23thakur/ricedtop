import "../css/Desktop.css";
import Taskbar from "./Taskbar";
import WallpaperFrame from "./WallpaperFrame";
import EdgeTrigger from "./edges/EdgeTrigger";
import EdgePanel from "./edges/EdgePanel.jsx"
import { buildWallpapers } from "../utils/wallpapers";

import { useState } from "react";

const wallpapers = buildWallpapers()

function Desktop() {
    const [activeWallpaper, setActiveWallpaper] = useState(wallpapers[16].path)
    const [statusBarOpen, setStatusBarOpen] = useState(false);
    const [launcherOpen, setLauncherOpen] = useState(false);
    const [volumeOpen, setVolumeOpen] = useState(false);

    return (
        <div className="desktop">
            <Taskbar></Taskbar>
            <WallpaperFrame imageSrc={activeWallpaper}></WallpaperFrame>
            <EdgeTrigger edge="status-bar" onActivate={() => {
                console.log("hi");
                setStatusBarOpen(true);
                console.log(statusBarOpen)
            }} />
            <EdgeTrigger edge="volume" onActivate={() => {
                setVolumeOpen(true);
            }} />
            <EdgeTrigger edge="launcher" onActivate={() => {
                setLauncherOpen(true);
            }} />
            <EdgePanel edge="status-bar" isOpen={statusBarOpen} onClose={() => setStatusBarOpen(false)}>
                <h1>Status Bar</h1>
            </EdgePanel>
            <EdgePanel edge="launcher" isOpen={launcherOpen} onClose={() => setLauncherOpen(false)}>
                <h1>Launcher</h1>
            </EdgePanel>
            <EdgePanel edge="volume" isOpen={volumeOpen} onClose={() => setVolumeOpen(false)}>
                <h1>Volume</h1>
            </EdgePanel>
        </div>
    );
}

export default Desktop;
