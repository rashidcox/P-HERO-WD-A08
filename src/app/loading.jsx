export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-3 text-5xl">
          <span className="animate-bounce delay-100">🐄</span>
          <span className="animate-bounce delay-200">🐐</span>
        </div>
        <p className="text-emerald-600 font-medium text-lg">Please wait...</p>
      </div>
    </div>
  );
}