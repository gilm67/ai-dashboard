export default function Home() {
  return (
    <main
      style={{
        fontFamily: "sans-serif",
        padding: "3rem",
        textAlign: "center",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#222" }}>
        🚀 Welcome to Your AI Dashboard
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#555" }}>
        This dashboard is now live and ready to be embedded in your website.
      </p>
      <div
        style={{
          display: "inline-block",
          padding: "1rem 2rem",
          fontSize: "1rem",
          background: "#007bff",
          color: "#fff",
          borderRadius: "6px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        ✅ Business Simulator Placeholder
      </div>
    </main>
  );
}
