import { useState, useMemo } from 'react';
import Navbar from '../components/layout/Navbar';
import SearchBar from '../components/common/SearchBar';
import EmployeeFilters from '../components/employees/EmployeeFilters';
import EmployeeCard from '../components/employees/EmployeeCard';
import Pagination from '../components/common/Pagination';
import { employees } from '../data/employeesData';
import './Employees.css';

function Employees() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const [viewMode, setViewMode] = useState('grid');

  const filteredEmployees = useMemo(() => {
    return employees.filter(emp =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const paginatedEmployees = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredEmployees.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredEmployees, currentPage, itemsPerPage]);

  return (
    <div className="employees-page">
      <Navbar title="People" />

      <div className="employees-content">
        <div className="employees-header">
          <SearchBar
            placeholder="Search by Employee Name or Number"
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <EmployeeFilters
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>

        <div className={`employees-grid ${viewMode}`}>
          {paginatedEmployees.map(employee => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalItems={filteredEmployees.length}
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

export default Employees;
