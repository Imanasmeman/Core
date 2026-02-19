import { useState, useMemo } from 'react';
import Navbar from '../components/layout/Navbar';
import SearchBar from '../components/common/SearchBar';
import DateFilter from '../components/timesheet/DateFilter';
import SummaryCard from '../components/timesheet/SummaryCard';
import TimesheetTable from '../components/timesheet/TimesheetTable';
import Pagination from '../components/common/Pagination';
import { Clock, Timer, AlertCircle, Calendar } from 'lucide-react';
import { timesheetData } from '../data/employeesData';
import './Timesheet.css';

function Timesheet() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const [sortConfig, setSortConfig] = useState(null);

  const parseTime = (timeStr) => {
    if (timeStr === '-') return 0;
    const parts = timeStr.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1] || 0);
  };

  const filteredData = useMemo(() => {
    return timesheetData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.employeeId.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = parseTime(a[sortConfig.key]);
      const bValue = parseTime(b[sortConfig.key]);

      if (sortConfig.direction === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
  }, [filteredData, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  const summaryStats = useMemo(() => {
    const stats = {
      total: 0,
      regular: 0,
      overtime: 0,
      ot2: 0,
      holiday: 0,
      anomalies: 3
    };

    filteredData.forEach(item => {
      stats.total += parseTime(item.total);
      stats.regular += parseTime(item.regular);
      stats.overtime += parseTime(item.overtime);
      stats.ot2 += parseTime(item.ot2);
      stats.holiday += parseTime(item.holiday);
    });

    return stats;
  }, [filteredData]);

  const handleSort = (key) => {
    setSortConfig(prev => {
      if (prev?.key === key) {
        return prev.direction === 'asc'
          ? { key, direction: 'desc' }
          : null;
      }
      return { key, direction: 'asc' };
    });
  };

  return (
    <div className="timesheet-page">
      <Navbar breadcrumb={['Team Management', 'Timesheet']} />

      <div className="timesheet-content">
        <div className="timesheet-header">
          <SearchBar
            placeholder="Search by Employee Name or Number"
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <DateFilter
            startDate="Nov 6, 2025"
            endDate="Nov 6, 2025"
          />
        </div>

        <div className="summary-grid">
          <SummaryCard
            icon={Clock}
            label="Total"
            value={summaryStats.total}
            color="#1a1a1a"
          />
          <SummaryCard
            icon={Timer}
            label="Regular"
            value={summaryStats.regular}
            color="#666"
          />
          <SummaryCard
            icon={Timer}
            label="Overtime"
            value={summaryStats.overtime}
            color="#FF8C42"
          />
          <SummaryCard
            icon={Timer}
            label="OT2"
            value={summaryStats.ot2}
            color="#8B9467"
          />
          <SummaryCard
            icon={Calendar}
            label="Holiday"
            value={summaryStats.holiday}
            color="#6BA3D9"
          />
          <SummaryCard
            icon={AlertCircle}
            label="Anomalies"
            value={summaryStats.anomalies}
            color="#E76F51"
          />
        </div>

        <TimesheetTable
          data={paginatedData}
          onSort={handleSort}
          sortConfig={sortConfig}
        />

        <Pagination
          currentPage={currentPage}
          totalItems={sortedData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={(value) => {
            setItemsPerPage(value);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
}

export default Timesheet;
