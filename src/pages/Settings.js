
function Settings() {
  return (
    <section className="dashboard-panel">
      <h2>Settings</h2>
      <p>Manage your workspace preferences.</p>

      <div className="project-row">
        <strong>Workspace name</strong>
        <span>Nexora Digital</span>
      </div>

      <div className="project-row">
        <strong>Account type</strong>
        <span>Demo workspace</span>
      </div>

      <div className="project-row">
        <strong>Notifications</strong>
        <span>Not connected</span>
      </div>
    </section>
  );
}

export default Settings;
