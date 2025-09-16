import './Sidebar.css';

interface SidebarProps {
  offices: string[];
  selectedOffice: string | null;
  onSelectOffice: (office: string | null) => void;
}

export const Sidebar = ({ offices, selectedOffice, onSelectOffice }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <h3>Offices</h3>
      <ul>
        {/* Button to show all offices */}
        <li
          className={selectedOffice === null ? 'active' : ''}
          onClick={() => onSelectOffice(null)}
        >
          All Offices
        </li>
        
        {/* Map over the unique offices to create a button for each */}
        {offices.map((office) => (
          <li
            key={office}
            className={selectedOffice === office ? 'active' : ''}
            onClick={() => onSelectOffice(office)}
          >
            {office}
          </li>
        ))}
      </ul>
    </aside>
  );
};