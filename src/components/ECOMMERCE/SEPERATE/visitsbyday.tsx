"use client"

import { useState } from "react"
import {
  Typography,
  Paper,
  IconButton,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from "@mui/material"
import {
  MoreVert as MoreVertIcon,
  ChevronRight as ChevronRightIcon,
  Edit as EditIcon,
  AdminPanelSettings as AdminIcon,
  AutoStories as AuthorIcon,
  Engineering as MaintainerIcon,
  Person as SubscriberIcon,
  Person as PersonIcon,
} from "@mui/icons-material"
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

export default function VisitsByDay() {
  const [users] = useState([
    {
      id: 1,
      name: "Jordan Stevenson",
      username: "@amiccoo",
      email: "susanna.Lind57@gmail.com",
      role: "Admin",
      status: "Pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Benedetto Rossiter",
      username: "@brossiter15",
      email: "estelle.Bailey10@gmail.com",
      role: "Editor",
      status: "Active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Bentlee Emblin",
      username: "@emblinf",
      email: "milo86@hotmail.com",
      role: "Author",
      status: "Active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Bertha Biner",
      username: "@bbinerh",
      email: "lonnie35@hotmail.com",
      role: "Editor",
      status: "Pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Beverlie Krabbe",
      username: "@bkrabbe1d",
      email: "ahmad_Collins@yahoo.com",
      role: "Maintainer",
      status: "Active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Bradan Rosebotham",
      username: "@brosebothamz",
      email: "tillman.Gleason68@hotmail.com",
      role: "Editor",
      status: "Pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Bree Kilday",
      username: "@bkildayr",
      email: "otho21@gmail.com",
      role: "Subscriber",
      status: "Active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  const visitData = [
    { day: "S", visits: 20 },
    { day: "M", visits: 65 },
    { day: "T", visits: 25 },
    { day: "W", visits: 80 },
    { day: "T", visits: 100 },
    { day: "F", visits: 15 },
    { day: "S", visits: 25 },
  ]

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin":
        return <AdminIcon className="text-red-500" />
      case "Editor":
        return <EditIcon className="text-blue-400" />
      case "Author":
        return <AuthorIcon className="text-amber-500" />
      case "Maintainer":
        return <MaintainerIcon className="text-green-500" />
      case "Subscriber":
        return <SubscriberIcon className="text-indigo-500" />
      default:
        return <PersonIcon />
    }
  }

  const getStatusChip = (status: string) => {
    return (
      <Chip
        label={status}
        size="small"
        className={`${status === "Active" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}
      />
    )
  }

  return (
    <main className="container mx-auto p-3 md:p-5 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="lg:col-span-2 ">
          <TableContainer component={Paper} className="shadow-sm">
            <Table>
              <TableHead>
                <TableRow className="bg-gray-50">
                  <TableCell className="font-medium text-gray-600">USER</TableCell>
                  <TableCell className="font-medium text-gray-600">EMAIL</TableCell>
                  <TableCell className="font-medium text-gray-600">ROLE</TableCell>
                  <TableCell className="font-medium text-gray-600">STATUS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className="hover:bg-gray-50 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar src={user.avatar} alt={user.name} className="w-10 h-10" />
                        <div>
                          <Typography variant="body1" className="font-medium">
                            {user.name}
                          </Typography>
                          <Typography variant="body2" className="text-gray-500">
                            {user.username}
                          </Typography>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">{user.email}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getRoleIcon(user.role)}
                        <span className="text-gray-600">{user.role}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusChip(user.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="lg:col-span-1">
          <Card className="shadow-sm h-full">
            <CardHeader
              title="Visits by Day"
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              titleTypographyProps={{ variant: "h6" }}
              className="pb-0 pt-3"
            />
            <CardContent className="py-3">
              <Typography variant="body2" color="text.secondary" className="mb-4">
                Total 248.5k Visits
              </Typography>

              <div className="h-[150px] w-full mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={visitData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-2 shadow-md rounded-md border">
                              <p className="text-sm font-medium">{`${payload[0].value}k visits`}</p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Bar dataKey="visits" radius={[4, 4, 0, 0]} fill="#6366F1" fillOpacity={1}>
                      {visitData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#6366F1" fillOpacity={entry.visits < 30 ? 0.3 : 1} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <Typography variant="subtitle1" className="font-medium">
                      Most Visited Day
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total 62.4k Visits on Thursday
                    </Typography>
                  </div>
                  <IconButton size="small" className="bg-gray-100">
                    <ChevronRightIcon />
                  </IconButton>
                </div>
                
              </div>
              <div className="h-[150px] w-full mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={visitData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-2 shadow-md rounded-md border">
                              <p className="text-sm font-medium">{`${payload[0].value}k visits`}</p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Bar dataKey="visits" radius={[4, 4, 0, 0]} fill="#6366F1" fillOpacity={1}>
                      {visitData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#6366F1" fillOpacity={entry.visits < 30 ? 0.3 : 1} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
