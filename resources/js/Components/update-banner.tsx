import { X } from "lucide-react"
import { useColor } from "@/context/color-context"



interface UpdateBannerProps {
  show: boolean;
  onDismiss: () => void;
}

export function UpdateBanner({ show, onDismiss }: UpdateBannerProps) {
  const { selectedColor } = useColor()

  if (!show) return null

  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-zinc-900 p-2 shadow-lg sm:p-3">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg">
                <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span>Nexus version 2.2.0 is here, see what's new</span>
              </p>
            </div>
            <div className="flex-shrink-0 sm:ml-3">
              <button
                type="button"
                className={`mr-2 inline-flex text-${selectedColor}-500 hover:text-${selectedColor}-400`}
              >
                View Changelog →
              </button>
              <button
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-zinc-800 focus:outline-none"
                onClick={onDismiss}
              >
                <span className="sr-only">Dismiss</span>
                <X className="h-6 w-6 text-zinc-400" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

