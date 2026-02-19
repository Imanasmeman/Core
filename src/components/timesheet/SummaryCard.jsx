import './SummaryCard.css';

function SummaryCard({ icon: Icon, label, value, color }) {
  return (
    <div className="summary-card">
      <div className="summary-icon" style={{ color }}>
        <Icon size={20} />
      </div>
      <div className="summary-content">
        <span className="summary-label">{label}</span>
        <span className="summary-value">{value}</span>
      </div>
    </div>
  );
}

export default SummaryCard;
