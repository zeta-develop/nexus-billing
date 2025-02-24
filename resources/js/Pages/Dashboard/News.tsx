import { DashboardLayout } from "@/Layouts/DashboardLayout"
import { NewsCard } from "@/Components/news-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card"

const newsItems = [
  {
    id: 1,
    title: "Hypixel: Server Update",
    content:
      "We're thrilled to be able to bring these changes to you and can't wait to see you in-game. Thank you for your ongoing support of Hypixel! This is a fictional announcement for demonstration purposes",
    author: {
      name: "Vertisan",
      avatar: "/placeholder.svg",
    },
    tags: ["new", "popular", "pinned"],
    date: "1 year ago",
  },
  {
    id: 2,
    title: "Rust: Weapon DLC",
    content:
      "We're thrilled to announce some major updates to Rust that we believe will enhance your gameplay experience significantly. Below are the key changes and improvements we've made.",
    author: {
      name: "Vertisan",
      avatar: "/placeholder.svg",
    },
    tags: ["popular", "pinned"],
    date: "1 year ago",
  },
]

export default function NewsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Latest Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {newsItems.map((item) => (
                <NewsCard key={item.id} {...item} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

