"use client"

import Image from "next/image"
import { Card, CardContent, Typography, Box, LinearProgress } from "@mui/material"
import { DevicesOutlined, ComputerOutlined } from "@mui/icons-material"
import { LineChart } from "./weeklySales"

export default function Chart() {
  // Data for fashion items
  const fashionItems = [
    { id: 1, name: "T-shirts", count: 24 },
    { id: 2, name: "Shoes", count: 50 },
    { id: 3, name: "Watches", count: 12 },
    { id: 4, name: "Sun Glasses", count: 38 },
  ]

  // Data for sales chart
  const chartData = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 50 },
    { name: "May", value: 35 },
    { name: "Jun", value: 25 },
    { name: "Jul", value: 50 },
    { name: "Aug", value: 90 },
  ]

  return (
    <div className="container mx-auto p-2 sm:p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Weekly Sales Card */}
        <Card
          sx={{ bgcolor: "#5A5FE0" }}
          className="bg-[#5A5FE0] text-white col-span-1 md:col-span-2 overflow-visible relative"
        >
          <CardContent className="p-3 sm:p-6">
            <Typography variant="h5" component="h2" className="font-bold mb-1 text-base sm:text-lg md:text-xl">
              Weekly Sales
            </Typography>
            <div className="flex items-center mb-3 sm:mb-6">
              <Typography variant="body1" className="mr-2 text-sm sm:text-base">
                Total $23.5k Earning
              </Typography>
              <Typography variant="body2" className="text-green-400 font-medium text-xs sm:text-sm">
                +62% ↑
              </Typography>
            </div>

            <Typography variant="h6" className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">
              Fashion
            </Typography>

            <div className="flex flex-col sm:flex-row justify-between">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-0">
                {fashionItems.map((item) => (
                  <div key={item.id} className="rounded-lg p-2 sm:p-3 transition-colors flex flex-col">
                    <Typography
                      variant="h4"
                      textAlign={"center"}
                      className="font-bold hover:bg-indigo-600 bg-indigo-600/50 text-center px-2 sm:px-4 py-1 rounded-lg text-base sm:text-lg md:text-xl"
                    >
                      {item.count}
                    </Typography>
                    <Typography variant="body2" className="text-xs sm:text-sm mt-1 text-center">
                      {item.name}
                    </Typography>
                  </div>
                ))}
              </div>

              <div className="flex justify-center sm:justify-end">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52">
                  <Image
                    src="/watch.png"
                    alt="Smart Watch"
                    width={1000}
                    height={1000}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex space-x-1">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${dot === 1 ? "bg-white" : "bg-indigo-300"}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Total Visits Card */}
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-3 sm:p-6">
            <div className="flex justify-between items-start mb-2 sm:mb-4">
              <Typography variant="h6" component="h2" className="text-sm sm:text-base">
                Total Visits
              </Typography>
              <Typography variant="body2" className="text-green-500 font-medium text-xs sm:text-sm">
                +18.4% ↑
              </Typography>
            </div>

            <Typography variant="h4" component="div" className="font-bold mb-3 sm:mb-6 text-lg sm:text-xl md:text-2xl">
              42.5k
            </Typography>

            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <DevicesOutlined className="text-amber-500 mr-1 sm:mr-2 text-sm sm:text-base" />
                <Typography variant="body2" className="text-xs sm:text-sm">
                  Mobile
                </Typography>
              </div>
              <div className="flex items-center">
                <Typography variant="body2" className="text-xs sm:text-sm">
                  vs
                </Typography>
              </div>
              <div className="flex items-center">
                <ComputerOutlined className="text-indigo-600 mr-1 sm:mr-2 text-sm sm:text-base" />
                <Typography variant="body2" className="text-xs sm:text-sm">
                  Desktop
                </Typography>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <Typography variant="h6" className="font-bold text-center text-sm sm:text-base">
                  23.5%
                </Typography>
                <Typography variant="body2" className="text-gray-500 text-center text-xs sm:text-sm">
                  2,890
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className="font-bold text-center text-sm sm:text-base">
                  76.5%
                </Typography>
                <Typography variant="body2" className="text-gray-500 text-center text-xs sm:text-sm">
                  22,465
                </Typography>
              </div>
            </div>

            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="determinate"
                value={76.5}
                sx={{
                  height: {
                    xs: 8,
                    sm: 10,
                  },
                  borderRadius: 5,
                  backgroundColor: "#FCD34D",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 5,
                    backgroundColor: "#4F46E5",
                  },
                }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Sales This Month Card */}
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-3 sm:p-6">
            <Typography variant="h6" component="h2" className="mb-1 sm:mb-2 text-sm sm:text-base">
              Sales This Months
            </Typography>
            <Typography variant="body2" className="text-gray-500 mb-1 text-xs sm:text-sm">
              Total Sales This Month
            </Typography>
            <Typography variant="h4" component="div" className="font-bold mb-2 sm:mb-4 text-lg sm:text-xl md:text-2xl">
              $28,450
            </Typography>

            <div className="h-24 sm:h-32">
              <LineChart
                data={chartData}
                index="name"
                categories={["value"]}
                colors={["#4F46E5"]}
                valueFormatter={(value) => `$${value}k`}
                showLegend={false}
                showXAxis={false}
                showYAxis={false}
                showGridLines={false}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
