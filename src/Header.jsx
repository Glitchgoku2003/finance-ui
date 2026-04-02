import { useDashboard } from './DashboardContext.jsx';

export function Header() {
  const { state, dispatch } = useDashboard();

  const handleRoleChange = (e) => {
    dispatch({ type: 'SET_USER_ROLE', payload: e.target.value });
  };

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return (
    <header className={`header ${state.isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className="glitch">
        Finance Dashboard
      </h1>
      
      <div className="role-selector">
        <label htmlFor="role-select" style={{ marginRight: '8px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>
          Role:
        </label>
        <select
          id="role-select"
          value={state.userRole}
          onChange={handleRoleChange}
          className="role-selector-select"
        >
          <option value="viewer">Viewer 👁️</option>
          <option value="admin">Admin ⚡</option>
        </select>

        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle pulse"
          title={state.isDarkMode ? 'Switch to light mode ☀️' : 'Switch to dark mode 🌙'}
        >
          {state.isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
