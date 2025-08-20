import { useResume } from "../context/ResumeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useResume();

  return (
    <div style={{ margin: "10px 0" }}>
      <label>Theme: </label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="default">default</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="purple">Purple</option>
      </select>
    </div>
  );
}
