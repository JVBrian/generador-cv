export const SidebarListElement = ({ text, icon }) => {
  return (
    <div className="sidebarListElement">
      <span className="material-icons">{icon}</span>
      <p>{text}</p>
    </div>
  );
};
