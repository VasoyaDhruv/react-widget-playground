// src/components/Widget.jsx
import './Widget.css';

export default function Widget() {
  return (
    <div className="widget-card">
      <h3>Hello Widget</h3>
      <button onClick={() => alert("Clicked!")}>Click Me</button>
    </div>
  );
}
