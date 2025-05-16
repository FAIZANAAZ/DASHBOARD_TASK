import { Card, CardContent, Typography, IconButton } from "@mui/material"
import { MoreVert, Person, BarChart, TrendingUp } from "@mui/icons-material"
import Image from "next/image"

export default function Overview() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4">
        {/* Sales Overview Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow md:col-span-2 flex flex-col justify-center items-center">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <Typography variant="h6" className="text-gray-700 font-medium">
                  Sales Overview
                </Typography>
                <div className="flex items-center gap-1">
                  <Typography variant="body2" className="text-gray-500">
                    Total 42.5k Sales
                  </Typography>
                  <Typography variant="body2" className="text-green-500 font-medium">
                    +18%
                  </Typography>
                </div>
              </div>
              <IconButton size="small">
                <MoreVert />
              </IconButton>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4">
                {/* 1 div */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <Person className="text-blue-400" />
                </div>
                <div>
                  <Typography variant="h6" className="font-semibold">
                    8,458
                  </Typography>
                  <Typography variant="caption" className="text-gray-500">
                    New Customers
                  </Typography>
                </div>
              </div>
{/* 2 div */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="bg-amber-50 p-2 rounded-lg">
                  <BarChart className="text-amber-400" />
                </div>
                <div>
                  <Typography variant="h6" className="font-semibold">
                    $28.5k
                  </Typography>
                  <Typography variant="caption" className="text-gray-500">
                    Total Profit
                  </Typography>
                </div>
              </div>
{/* 3 div */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="bg-cyan-50 p-2 rounded-lg">
                  <TrendingUp className="text-cyan-400" />
                </div>
                <div>
                  <Typography variant="h6"className="  sm:font-semibold">
                    2,450k
                  </Typography>
                  <Typography variant="caption" className="text-gray-500">
                    New Transactions
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ratings Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <Typography variant="h6" className="text-gray-700 font-medium">
                  Ratings
                </Typography>
                <div className="mt-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Year of 2021</span>
                </div>
              </div>
              <div className="relative md:top-7 w-20 h-20 sm:w-40 sm:h-40">
                <Image
                  src="/boy1.png"
                  alt="Male avatar with glasses"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-4">
              <Typography variant="h5" className="font-semibold">
                8.14k
              </Typography>
              <Typography variant="body2" className="text-green-500 font-medium">
                +15.6%
              </Typography>
            </div>
          </CardContent>
        </Card>

        {/* Sessions Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow ">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <Typography variant="h6" className="text-gray-700 font-medium">
                  Sessions
                </Typography>
                <div className="mt-1">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Last Month</span>
                </div>
              </div>
              <div className="relative md:top-7 w-20 h-20 sm:w-40 sm:h-40 ">
                <Image
                  src="/girl1.png"
                  alt="Female avatar with dreadlocks"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-4">
              <Typography variant="h5" className="font-semibold">
                12.2k
              </Typography>
              <Typography variant="body2" className="text-red-500 font-medium">
                -25.5%
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
