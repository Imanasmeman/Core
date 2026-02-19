import { Calendar, Filter, Download } from 'lucide-react';
import './DateFilter.css';

function DateFilter({ startDate, endDate, onDateChange }) {
  return (
    <div className="date-filter">
      <div className="date-picker">
        <Calendar size={16} />
        <span>{startDate} - {endDate}</span>
      </div>
      <button className="filter-icon-btn">
        <Filter size={18} />
      </button>
      <button className="filter-icon-btn">
        <Download size={18} />
      </button>
    </div>
  );
}

export default DateFilter;
