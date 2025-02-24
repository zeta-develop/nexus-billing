export function OnlineUsers() {
  const users = [
    {
      name: "John Smith",
      avatar: "JS",
      status: "online",
      lastSeen: "1 second ago",
    },
  ]

  return (
    <div className="bg-[#25262b] rounded-lg p-6">
      <h3 className="text-white font-medium mb-6">Online users</h3>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.name} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
              {user.avatar}
            </div>
            <div>
              <p className="text-white">{user.name}</p>
              <p className="text-sm text-zinc-400">{user.lastSeen}</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm text-zinc-400">{user.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

