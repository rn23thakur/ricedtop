import React from "react";
import { useRef, useEffect } from "react";
import "../../../css/Launcher.css";

export default function SearchBar({ isOpen, query, setQuery }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus({ preventScroll: true });
        }
    }, [isOpen]);
    
    if (!isOpen) return null;

    return (
        <>
            <form className="search-bar-form" onSubmit={(e) => e.preventDefault()}>
                {/* Visual anchor / Icon placeholder */}
                <span className="search-icon">🔍</span>
                
                {/* The Controlled Input */}
                <input 
                    ref={inputRef}
                    type="text" 
                    className="search-input" 
                    placeholder="Type to search..." 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
            </form>
        </>
    );
}