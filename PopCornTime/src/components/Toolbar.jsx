export default function Toolbar() {
    return (
        <div className="toolbar-container">
            <div className="toolbar">
                <div className="toolbar-brand-container">
                    <img src="../public/popcorn_logo.png" alt="PopCornTime Logo" className="toolbar-logo" />
                    <div className="toolbar-brand">PopCornTime</div>
                </div>
                
                <div className="toolbar-search">
                    <input 
                        type="text" 
                        placeholder="Search movies..." 
                        className="search-input"
                    />
                    <button className="search-button">
                        <i className="search-icon">🔍</i>
                    </button>
                </div>
                
                <div className="toolbar-buttons">
                    <button className="toolbar-button login">Login</button>
                    <button className="toolbar-button signup">Sign Up</button>
                </div>
            </div>
        </div>
    )
}