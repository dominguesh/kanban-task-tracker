import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Kanban App</h1>
        <p className="tagline">
          A portfolio-grade Trello-style task tracker — system design, DevSecOps, and
          governed AI-assisted delivery.
        </p>
      </header>

      <main className="app-main">
        <section className="card" aria-labelledby="status-heading">
          <h2 id="status-heading">Current release focus</h2>
          <ul>
            <li>Public landing and containerized stack (v1)</li>
            <li>Boards, lists, and cards in upcoming milestones (v2)</li>
          </ul>
        </section>
      </main>

      <footer className="app-footer">
        <span>API status: </span>
        <a href="http://localhost:3000/" target="_blank" rel="noreferrer">
          http://localhost:3000
        </a>
      </footer>
    </div>
  );
}
