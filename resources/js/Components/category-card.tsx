import { ArrowRight } from "lucide-react"
import { Link } from "@inertiajs/react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

interface CategoryCardProps {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export function CategoryCard({ id, title, description, image, imageAlt }: CategoryCardProps) {

  return (
    <Card className="bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-700">
          <img src={image || "/placeholder.svg"} alt={imageAlt} className="object-cover" />
        </div>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-400 mb-4 text-sm">{description}</p>
        <Link href={`/services/${id}`}>
          <Button className={`w-full bg-amber-500 hover:bg-amber-600 text-white`}>
            View Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

