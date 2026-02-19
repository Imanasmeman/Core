import './EmployeeCard.css';

function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <div className="employee-card-avatar">
        <img src={employee.avatar} alt={employee.name} />
        <div className="employee-badge">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="white"/>
            <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <h3 className="employee-name">{employee.name}</h3>
      <p className="employee-role">{employee.role}</p>
      <div className="employee-colors">
        {employee.colors.map((color, index) => (
          <span
            key={index}
            className="color-dot"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeCard;
