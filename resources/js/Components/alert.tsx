interface AlertProps {
  message: string
  code?: string
  type?: "warning" | "error" | "success" | "info"
}

export function Alert({ message, code, type = "warning" }: AlertProps) {
  const bgColor = {
    warning: "bg-red-500",
    error: "bg-red-600",
    success: "bg-green-500",
    info: "bg-blue-500",
  }[type]

  return (
    <div className={`${bgColor} text-white p-4 rounded-lg flex items-center gap-2`}>
      {message}
      {code && <code className="bg-black/20 px-2 py-1 rounded text-sm">{code}</code>}
    </div>
  )
}

