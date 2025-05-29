


function SupaTable({ enterprises }) {
    if (enterprises.length === 0) {
        return <p className="no-data-message">No enterprises found.</p>;
    }

    // Get column names from the first record
    const columns = enterprises.length > 0 ? Object.keys(enterprises[0]) : [];

    // Function to format cell values based on their type
    function formatCellValue(value) {
        if (value === null || value === undefined) {
            return '';
        }
        if (typeof value === 'boolean') {
            return value ? '✅' : '❌';
        }
        return value.toString();
    };

    return (
        <div className="table-responsive">
            <table className="enterprises-table">
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column}>{column}</th>
                        ))}
                        <th>EDIT/DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {enterprises.map((enterprise, index) => (
                        <tr key={index}>
                            {columns.map(column => (
                                <td key={`${index}-${column}`}>
                                    {formatCellValue(enterprise[column.toString()])}
                                </td>
                            ))}
                            <td>    
                                <button onClick={() => console.log(enterprise)}>✏️</button>
                                <button onClick={() => console.log(enterprise)}>❌</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SupaTable;