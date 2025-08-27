import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import Settings from "./components/Settings";
import Scheduler from "./components/Scheduler";

const API_BASE = "https://script.google.com/macros/s/YOUR_SCRIPT_DEPLOY_ID/exec";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_BASE + "?action=getInitData")
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-10">⏳ Đang tải...</div>;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🚀 AI Task Reminder
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Settings email={data.email} prompt={data.prompt} />
        <Scheduler />
      </div>

      <TaskList tasks={data.tasks} />
    </div>
  );
}
