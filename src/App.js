import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const loadData = async () => {
    try {
      const res = await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
      setData({ error: "Failed to load data" });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello PWA 🚀</h1>
      <button onClick={loadData}>Load Data từ Google Sheet</button>
      <pre style={{ textAlign: "left", margin: "20px auto", maxWidth: "600px" }}>
        {data ? JSON.stringify(data, null, 2) : "Chưa có dữ liệu..."}
      </pre>
    </div>
  );
}

export default App;
