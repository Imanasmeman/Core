import './EmployeeCard.css';
import {
  Code2,
  Megaphone,
  TrendingUp,
  Palette,
  Headset,
  Landmark,
  Cog,
  Users
} from 'lucide-react';

const DEPARTMENT_META = {
  IT: { icon: Code2 },
  Marketing: { icon: Megaphone },
  Sales: { icon: TrendingUp },
  Design: { icon: Palette },
  Support: { icon: Headset },
  Finance: { icon: Landmark },
  Operations: { icon: Cog },
  HR: { icon: Users }
};

function EmployeeCard({ employee }) {
  const departmentMeta = DEPARTMENT_META[employee.department] || {
    icon: Users
  };
  const DepartmentIcon = departmentMeta.icon;

  return (
    <div className="employee-card">
      <div className="employee-card-avatar">
        <img src={employee.avatar} alt={employee.name} />
        <div className="employee-badge">
          <DepartmentIcon size={16} />
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
