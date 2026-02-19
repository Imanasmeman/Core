import { ArrowUpDown } from 'lucide-react';
import './TimesheetTable.css';

function TimesheetTable({ data, onSort, sortConfig }) {
  const columns = [
    { key: 'name', label: 'Employee', sortable: false },
    { key: 'department', label: 'IT', sortable: false },
    { key: 'total', label: 'Total', sortable: true },
    { key: 'regular', label: 'Regular', sortable: true },
    { key: 'overtime', label: 'Overtime', sortable: true },
    { key: 'ot2', label: 'OT 2', sortable: true },
    { key: 'holiday', label: 'Holiday', sortable: true }
  ];

  const handleSort = (key) => {
    if (!columns.find(col => col.key === key).sortable) return;
    onSort(key);
  };

  return (
    <div className="table-container">
      <table className="timesheet-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => handleSort(column.key)}
                className={column.sortable ? 'sortable' : ''}
              >
                <div className="th-content">
                  <span>{column.label}</span>
                  {column.sortable && (
                    <ArrowUpDown
                      size={14}
                      className={sortConfig?.key === column.key ? 'active' : ''}
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <div className="employee-cell">
                  <img src={row.avatar} alt={row.name} className="employee-avatar" />
                  <span>{row.name}</span>
                </div>
              </td>
              <td>{row.department}</td>
              <td>{row.total}</td>
              <td>{row.regular}</td>
              <td>{row.overtime}</td>
              <td>{row.ot2}</td>
              <td>{row.holiday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimesheetTable;
