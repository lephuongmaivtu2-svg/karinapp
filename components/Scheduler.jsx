export default function Scheduler() {
  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">⏰ Lịch chạy</h2>
      <select className="w-full p-2 rounded bg-slate-700 mb-2">
        <option>Mỗi X phút</option>
        <option>Mỗi ngày</option>
        <option>Mỗi tuần</option>
      </select>
      <input
        placeholder="ví dụ 15 hoặc 8"
        className="w-full p-2 rounded bg-slate-700 mb-2"
      />
      <div className="flex gap-2">
        <button className="bg-blue-600 px-4 py-2 rounded">📅 Cài lịch</button>
        <button className="bg-red-600 px-4 py-2 rounded">🗑️ Xoá lịch</button>
      </div>
    </div>
  );
}
