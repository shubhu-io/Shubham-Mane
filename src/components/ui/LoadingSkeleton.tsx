export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0d1117]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

export function CardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl p-6 bg-gray-100 dark:bg-[#161b22] animate-pulse"
        >
          <div className="h-4 bg-gray-200 dark:bg-[#30363d] rounded w-3/4 mb-4" />
          <div className="h-3 bg-gray-200 dark:bg-[#30363d] rounded w-full mb-2" />
          <div className="h-3 bg-gray-200 dark:bg-[#30363d] rounded w-5/6 mb-4" />
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 dark:bg-[#30363d] rounded w-16" />
            <div className="h-6 bg-gray-200 dark:bg-[#30363d] rounded w-20" />
            <div className="h-6 bg-gray-200 dark:bg-[#30363d] rounded w-14" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function StatSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl p-4 bg-gray-100 dark:bg-[#161b22] animate-pulse"
        >
          <div className="h-8 w-16 bg-gray-200 dark:bg-[#30363d] rounded mb-2 mx-auto" />
          <div className="h-3 w-20 bg-gray-200 dark:bg-[#30363d] rounded mx-auto" />
        </div>
      ))}
    </div>
  )
}
