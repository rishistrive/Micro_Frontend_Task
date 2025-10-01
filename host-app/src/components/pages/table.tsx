import React from "react";

interface Column<T> {
  key: keyof T;
  label: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onAction?: (row: T) => void; 
  actionLabel?: string;        
  className?: string;
}

export default function Table<T extends Record<string, any>>({
  columns,
  data,
  onAction,
  actionLabel = "Action",
  className,
}: TableProps<T>) {
  return (
    <table className={className} style={tableStyle}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} style={thStyle}>
              {col.label}
            </th>
          ))}
          {onAction && <th style={thStyle}>{actionLabel}</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} style={trStyle}>
            {columns.map((col) => (
              <td key={String(col.key)} style={tdStyle}>
                {row[col.key]}
              </td>
            ))}
            {onAction && (
              <td style={tdStyle}>
                <button style={btnStyle} onClick={() => onAction(row)}>
                  {actionLabel}
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ---------- Styles ----------
const tableStyle: React.CSSProperties = {
  borderCollapse: "collapse",
  width: "100%",
};

const thStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "8px",
  backgroundColor: "#f5f5f5",
  textAlign: "left",
};

const trStyle: React.CSSProperties = {
  borderBottom: "1px solid #ccc",
};

const tdStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "8px",
};

const btnStyle: React.CSSProperties = {
  padding: "5px 10px",
  border: "none",
  borderRadius: "3px",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
};
