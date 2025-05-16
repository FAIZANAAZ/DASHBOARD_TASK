"use client"
import Image from "next/image"
import {  Typography, IconButton, Avatar } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
import { MoreVertical, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

export default function ActivitySection() {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Activity />
        <SalesOverview />
      </div>
    </div>
  )
}

// This is a placeholder since the original component wasn't provided

function Activity() {
  const activities = [
    {
      id: 1,
      title: "8 Invoices have been paid",
      description: "Invoices have been paid to the company.",
      date: "Wednesday",
      color: "bg-red-500",
      attachment: {
        type: "pdf",
        name: "invoice.pdf",
      },
    },
    {
      id: 2,
      title: "Create a new project for client 😎",
      description: "Invoices have been paid to the company.",
      date: "April, 18",
      color: "bg-blue-500",
      client: {
        name: "John Doe (Client)",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 3,
      title: "Order #37745 from September",
      description: "Invoices have been paid to the company.",
      date: "January, 10",
      color: "bg-cyan-400",
    },
  ]

  return (
    <Card className="shadow-md h-full">
      <CardContent className="p-0">
        <div className="flex justify-between items-center p-6 pb-4">
          <Typography variant="h6" className="text-gray-700 font-medium">
            Activity Timeline
          </Typography>
          <IconButton aria-label="more options">
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="px-6 pb-6">
          {activities.map((activity) => (
            <div key={activity.id} className="relative pl-8 pb-8">
              {/* Timeline dot */}
              <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${activity.color}`}></div>

              {/* Timeline line */}
              {activity.id !== activities.length && (
                <div className="absolute left-2 top-5 w-0.5 h-full bg-gray-200"></div>
              )}

              <div className="mb-1">
                <div className="flex justify-between items-start">
                  <Typography variant="subtitle1" className="font-medium">
                    {activity.title}
                  </Typography>
                  <Typography variant="caption" className="text-gray-500">
                    {activity.date}
                  </Typography>
                </div>
                <Typography variant="body2" className="text-gray-500 mt-1">
                  {activity.description}
                </Typography>

                {activity.attachment && (
                  <div className="flex items-center mt-2 p-2 bg-gray-50 rounded w-fit">
                    <PictureAsPdfIcon className="text-red-500 mr-2" fontSize="small" />
                    <Typography variant="body2" className="text-gray-600">
                      {activity.attachment.name}
                    </Typography>
                  </div>
                )}

                {activity.client && (
                  <div className="flex items-center mt-2">
                    <Avatar
                      src={activity.client.avatar}
                      alt={activity.client.name}
                      sx={{ width: 24, height: 24 }}
                      className="mr-2"
                    />
                    <Typography variant="body2" className="text-gray-600">
                      {activity.client.name}
                    </Typography>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function SalesOverview() {
  const productCategories = [
    { id: 1, name: "Smartphones", image: "/mobile.png", active: true },
    { id: 2, name: "Computers", image: "/computer.png", active: false },
    { id: 3, name: "Gaming", image: "/game.png", active: false },
   
  ]

  const products = [
    {
      id: 1,
      name: "Samsung S22",
      image: "/sumsung.png",
      status: "Out of Stock",
      statusColor: "bg-purple-100 text-purple-700",
      revenue: "$12.5k",
      conversion: "+24%",
      conversionColor: "text-green-500",
    },
    {
      id: 2,
      name: "Apple iPhone 13 Pro",
      image: "/apple.png",
      status: "In Stock",
      statusColor: "bg-green-100 text-green-700",
      revenue: "$45k",
      conversion: "-18%",
      conversionColor: "text-red-500",
    },
    {
      id: 3,
      name: "Oneplus 9 Pro",
      image: "/oneplus.png",
      status: "Coming Soon",
      statusColor: "bg-yellow-100 text-yellow-700",
      revenue: "$98.2k",
      conversion: "+55%",
      conversionColor: "text-green-500",
    },
  ]

  return (
    <Card className="shadow-md h-full">
      <CardContent className="p-0">
        <div className="flex justify-between items-center p-4 sm:p-6 pb-2 sm:pb-4">
          <div>
            <h3 className="text-gray-700 font-medium text-base sm:text-lg">Sales Overview</h3>
            <p className="text-gray-500 text-xs sm:text-sm">82% Activity Growth</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
            <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">More options</span>
          </Button>
        </div>

        {/* Product Categories */}
        <div className="px-4 sm:px-6 flex space-x-3 sm:space-x-4 overflow-x-auto pb-3 sm:pb-4 scrollbar-hide">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-lg border-2 ${
                category.active ? "border-primary" : "border-dashed border-gray-300"
              }`}
            >
              {category.image ? (
                <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                  <Image
                    src={category.image || "/placeholder.svg?height=60&width=60"}
                    alt={category.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ) : (
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 bg-gray-50 hover:bg-gray-100">
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Add new category</span>
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Table Headers - Hidden on small screens */}
        <div className="hidden sm:grid grid-cols-5 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 border-b">
          <div className="col-span-1">IMAGE</div>
          <div className="col-span-1">PRODUCT NAME</div>
          <div className="col-span-1 text-center">STATUS</div>
          <div className="col-span-1 text-center">REVENUE</div>
          <div className="col-span-1 text-center">CONVERSION</div>
        </div>

        {/* Product Rows */}
        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-2 sm:grid-cols-5 px-4 sm:px-6 py-3 sm:py-4 items-center border-b last:border-b-0 hover:bg-gray-50 transition-colors gap-y-2 sm:gap-y-0"
          >
            <div className="col-span-1 flex items-center sm:block">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <Image
                  src={product.image || "/placeholder.svg?height=40&width=40"}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="sm:hidden ml-3 text-xs font-medium">{product.name}</p>
            </div>
            <div className="col-span-1 hidden sm:block">
              <p className="font-medium text-xs sm:text-sm truncate max-w-[120px] lg:max-w-full">{product.name}</p>
            </div>

            <div className="col-span-1 text-right sm:text-center">
              <Badge
                variant="outline"
                className={`px-2 py-0.5 text-xs ${
                  product.status === "Out of Stock"
                    ? "bg-purple-100 text-purple-600 hover:bg-purple-100 hover:text-purple-600"
                    : product.status === "In Stock"
                      ? "bg-green-100 text-green-600 hover:bg-green-100 hover:text-green-600"
                      : "bg-yellow-100 text-yellow-600 hover:bg-yellow-100 hover:text-yellow-600"
                }`}
              >
                {product.status}
              </Badge>
            </div>
            <div className="col-span-1 text-right sm:text-center">
              <p className="font-medium text-xs sm:text-sm">{product.revenue}</p>
            </div>
            <div className="col-span-1 text-right sm:text-center">
              <p className={`${product.conversionColor} font-medium text-xs sm:text-sm`}>{product.conversion}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
