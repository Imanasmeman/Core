import { Home, User, Users, FolderKanban, UserPlus, FileText, Settings, ChevronRight, ChevronLeft, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState('Team Management');

  const menuItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/my-info', label: 'My Info', icon: User, hasSubmenu: true },
    { path: '/employees', label: 'People', icon: Users },
    {
      label: 'Team Management',
      icon: Users,
      hasSubmenu: true,
      subItems: [
        { path: '/timesheet', label: 'Timesheet' },
        { path: '/reimbursement', label: 'Reimbursement' }
      ]
    },
    { path: '/project-setup', label: 'Project Setup', icon: FolderKanban, hasSubmenu: true },
    { path: '/hiring', label: 'Hiring', icon: UserPlus },
    { path: '/report', label: 'Report', icon: FileText }
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMenu = (label) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h1 className="sidebar-logo">CORE</h1>
        <button
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item.path ? (
              <Link
                to={item.path}
                className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              >
                <item.icon size={18} />
                {!isCollapsed && <span>{item.label}</span>}
                {item.hasSubmenu && !isCollapsed && <ChevronRight size={16} className="submenu-arrow" />}
              </Link>
            ) : (
              <>
                <button
                  className={`sidebar-item ${expandedMenu === item.label ? 'expanded' : ''}`}
                  onClick={() => toggleMenu(item.label)}
                >
                  <item.icon size={18} />
                  {!isCollapsed && <span>{item.label}</span>}
                  {!isCollapsed && (
                    <ChevronRight
                      size={16}
                      className={`submenu-arrow ${expandedMenu === item.label ? 'rotated' : ''}`}
                    />
                  )}
                </button>
                {expandedMenu === item.label && !isCollapsed && item.subItems && (
                  <div className="submenu">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`submenu-item ${isActive(subItem.path) ? 'active' : ''}`}
                      >
                        <Clock size={16} />
                        <span>{subItem.label}</span>
                        <ChevronRight size={14} className="submenu-arrow" />
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link to="/settings" className="sidebar-item">
          <Settings size={18} />
          {!isCollapsed && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
