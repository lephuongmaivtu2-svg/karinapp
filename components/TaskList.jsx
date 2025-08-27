export default function TaskList({ tasks }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl mt-6 shadow">
      <h2 className="text-xl font-semibold mb-3">📋 Danh sách Task</h2>
      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li key={i} className="p-3 bg-slate-700 rounded flex justify-between">
            <span>
              {t.task} — <span className="italic">{t.due}</span>
            </span>
            <span
              className={`px-2 py-1 rounded text-sm ${
                t.status === "done" ? "bg-green-600" : "bg-yellow-500"
              }`}
            >
              {t.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
