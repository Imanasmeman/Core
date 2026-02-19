import { Download, Filter, Plus, Grid, List, Network } from 'lucide-react';
import './EmployeeFilters.css';

function EmployeeFilters({ viewMode, onViewModeChange }) {
  return (
    <div className="employee-filters">
      <button className="filter-btn secondary">
        <Download size={18} />
      </button>
      <button className="filter-btn secondary">
        <Filter size={18} />
      </button>
      <button className="filter-btn primary">
        <Plus size={18} />
      </button>
      <div className="view-switcher">
        <button
          className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => onViewModeChange('grid')}
        >
          <Grid size={18} />
        </button>
        <button
          className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => onViewModeChange('list')}
        >
          <List size={18} />
        </button>
        <button className="view-btn">
          <Network size={18} />
        </button>
      </div>
    </div>
  );
}

export default EmployeeFilters;
