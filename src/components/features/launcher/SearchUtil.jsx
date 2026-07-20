import { useState, useEffect, useRef } from "react";

const LAUNCHER_ITEMS = [
    { id: "wallpaper", name: "Wallpaper", type: "command" },
    { id: "lock", name: "Lock", type: "command" },
    { id: "chrome", name: "Chrome", type: "app" },
    { id: "terminal", name: "Terminal", type: "app" }
];

export default function SearchUtil({ isOpen }) {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);

    // Auto-focus input when launcher opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus({ preventScroll: true });
        } else if (!isOpen) {
            setQuery(""); // Optional: clear search on close
            setSelectedIndex(0);
        }
    }, [isOpen]);

    const filteredItems = LAUNCHER_ITEMS.filter(item => 
        item.id.toLowerCase().includes(query.toLowerCase())
    );

    const handleKeyDown = (e) => {
        if (filteredItems.length === 0) return;

        if (e.key === "ArrowUp") {
            e.preventDefault(); // Stop page from scrolling
            setSelectedIndex((prev) => 
                prev === 0 ? filteredItems.length - 1 : prev - 1
            );
        }
        else if (e.key === "ArrowDown") {
            e.preventDefault(); // Stop page from scrolling
            setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
        }
        else if (e.key === "Enter") {
            if (filteredItems[selectedIndex]) {
                console.log("Selected: ", filteredItems[selectedIndex].name);
            }
        }
    };

    return (
        <div onKeyDown={handleKeyDown} style={launcherStyles.wrapper}>
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                }}
                placeholder="Search apps and commands..."
                style={launcherStyles.input}
            />
            
            {filteredItems.length > 0 && (
                <ul style={launcherStyles.list}>
                    {filteredItems.map((item, index) => (
                        <li
                            key={item.id}
                            style={{
                                ...launcherStyles.listItem,
                                backgroundColor: index === selectedIndex ? '#007aff' : 'transparent',
                                color: index === selectedIndex ? '#ffffff' : '#333333',
                            }}
                        >
                            <span style={launcherStyles.itemType}>{item.type}</span>
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}


const launcherStyles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "15px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
    },
    input: {
        width: "100%",
        padding: "12px 16px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        outline: "none",
        boxSizing: "border-box",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        border: "1px solid #eee",
        flex: 1,
        overflowY: "auto",
    },
    listItem: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 16px",
        fontSize: "14px",
        cursor: "pointer",
        transition: "background-color 0.1s ease",
    },
    itemType: {
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        padding: "2px 6px",
        borderRadius: "4px",
        backgroundColor: "rgba(0,0,0,0.05)",
        color: "#666",
    }
};