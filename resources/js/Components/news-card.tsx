interface NewsCardProps {
  title: string
  content: string
  author: {
    name: string
    avatar: string
  }
  tags: string[]
  date: string
}

export function NewsCard({ title, content, author, tags, date }: NewsCardProps) {

  return (
    <article className="bg-zinc-900 rounded-lg p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-1 rounded text-xs font-medium
              ${tag === "new" ? `bg-amber-500 text-black` : ""}
              ${tag === "popular" ? "bg-red-500 text-white" : ""}
              ${tag === "pinned" ? "bg-amber-500 text-black" : ""}
            `}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-zinc-400 mb-4">{content}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <img
              src={author.avatar || "/placeholder.svg"}
              alt={author.name}
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium text-white">{author.name}</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-zinc-400">{date}</span>
          <button className={`text-amber-500 hover:text-amber-400 text-sm font-medium`}>
            Read more →
          </button>
        </div>
      </div>
    </article>
  )
}

