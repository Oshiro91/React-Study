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
                
                <div className="search-results">
                    {} Results for {}
                </div>
            </div>
        </div>
    )
}