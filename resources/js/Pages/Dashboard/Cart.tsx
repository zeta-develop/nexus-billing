import { useState } from "react"
import { Trash2, Plus, Minus } from "lucide-react"
import { DashboardLayout } from "@/Layouts/DashboardLayout"
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table"
import { Button } from "@/Components/ui/button"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Basic Web Hosting", price: 5.99, quantity: 1 },
    { id: 2, name: "Minecraft Premium Server", price: 19.99, quantity: 1 },
  ])

  const updateQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Your Items</CardTitle>
          </CardHeader>
          <CardContent>
            {cartItems.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-zinc-400">Product</TableHead>
                    <TableHead className="text-zinc-400">Price</TableHead>
                    <TableHead className="text-zinc-400">Quantity</TableHead>
                    <TableHead className="text-zinc-400">Total</TableHead>
                    <TableHead className="text-zinc-400">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium text-white">{item.name}</TableCell>
                      <TableCell className="text-zinc-300">${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-white">{item.quantity}</span>
                          <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, 1)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-zinc-300">${(item.price * item.quantity).toFixed(2)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-zinc-400 text-center py-8">Your cart is empty.</p>
            )}
          </CardContent>
        </Card>

        {cartItems.length > 0 && (
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-white">Total:</span>
                <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Proceed to Checkout</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}

