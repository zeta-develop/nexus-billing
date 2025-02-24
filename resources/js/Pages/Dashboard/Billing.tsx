import { useState } from "react"
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { CreditCard, Plus } from "lucide-react"
import { DashboardLayout } from "@/Layouts/DashboardLayout"
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";

const paymentMethods = [
  { id: 1, type: "Visa", last4: "4242", expiry: "12/2024" },
  { id: 2, type: "Mastercard", last4: "5555", expiry: "06/2025" },
]

const billingHistory = [
  { id: 1, date: "2023-05-01", amount: 49.99, status: "Paid" },
  { id: 2, date: "2023-04-01", amount: 49.99, status: "Paid" },
  { id: 3, date: "2023-03-01", amount: 49.99, status: "Paid" },
]

export default function BillingSettingsPage() {
  const [balance, setBalance] = useState(100) // Initial balance
  const [addAmount, setAddAmount] = useState("")

  const handleAddBalance = () => {
    const amount = Number.parseFloat(addAmount)
    if (!isNaN(amount) && amount > 0) {
      setBalance((prevBalance) => prevBalance + amount)
      setAddAmount("")
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Account Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white mb-4">${balance.toFixed(2)}</p>
            <div className="flex space-x-2">
              <Input
                type="number"
                placeholder="Amount to add"
                value={addAmount}
                onChange={(e) => setAddAmount(e.target.value)}
                className="bg-zinc-700 text-white border-zinc-600"
              />
              <Button onClick={handleAddBalance} className="bg-green-600 hover:bg-green-700 text-white">
                Add Balance
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between bg-zinc-700 p-4 rounded-md">
                  <div className="flex items-center space-x-4">
                    <CreditCard className="h-6 w-6 text-zinc-300" />
                    <div>
                      <p className="text-white font-medium">
                        {method.type} ending in {method.last4}
                      </p>
                      <p className="text-zinc-400 text-sm">Expires {method.expiry}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-zinc-600 text-zinc-300 hover:bg-zinc-600 hover:text-white"
                  >
                    Edit
                  </Button>
                </div>
              ))}
              <Button className="w-full bg-zinc-700 hover:bg-zinc-600 text-white">
                <Plus className="mr-2 h-4 w-4" /> Add Payment Method
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-zinc-400">Date</TableHead>
                  <TableHead className="text-zinc-400">Amount</TableHead>
                  <TableHead className="text-zinc-400">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {billingHistory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="text-zinc-300">{item.date}</TableCell>
                    <TableCell className="text-zinc-300">${item.amount.toFixed(2)}</TableCell>
                    <TableCell className="text-zinc-300">{item.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

