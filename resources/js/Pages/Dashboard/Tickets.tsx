import { Button } from "@/Components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table"
import { DashboardLayout } from "@/Layouts/DashboardLayout"

const tickets = [
  { id: "T-1001", subject: "Server connection issue", status: "Open", lastUpdate: "2023-05-15" },
  { id: "T-1002", subject: "Billing inquiry", status: "Closed", lastUpdate: "2023-05-10" },
  { id: "T-1003", subject: "Upgrade request", status: "In Progress", lastUpdate: "2023-05-12" },
]

export default function Tickets() {

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Support Tickets</h2>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">Your Tickets</CardTitle>
            <Button className={`bg-amber-500 hover:bg-green-600`}>New Ticket</Button>
          </CardHeader>
          <CardContent>
            {tickets.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-zinc-400">Ticket ID</TableHead>
                    <TableHead className="text-zinc-400">Subject</TableHead>
                    <TableHead className="text-zinc-400">Status</TableHead>
                    <TableHead className="text-zinc-400">Last Update</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium text-white">{ticket.id}</TableCell>
                      <TableCell className="text-zinc-300">{ticket.subject}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium bg-amber-500 text-white`}
                        >
                          {ticket.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-zinc-400">{ticket.lastUpdate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-zinc-400">No support tickets to display.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

