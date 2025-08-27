export default function Settings({ email, prompt }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">⚙️ Cài đặt</h2>
      <label className="block mb-2">
        Email nhận thông báo:
        <input
          defaultValue={email}
          className="w-full p-2 rounded bg-slate-700 mt-1"
        />
      </label>
      <label className="block mb-2">
        Prompt AI:
        <textarea
          defaultValue={prompt}
          className="w-full p-2 rounded bg-slate-700 mt-1"
        />
      </label>
      <button className="bg-green-600 px-4 py-2 rounded mt-2">
        💾 Lưu cài đặt
      </button>
    </div>
  );
}
