"use client"
import Image from "next/image"
import { Card, CardContent, Typography, Button, Box, CircularProgress, Chip } from "@mui/material"
import ArrowUpward from "@mui/icons-material/ArrowUpward"

export default function MarketingSales() {
  // Sample data for the dashboard
  const dashboardData = {
    impression: {
      value: "84k",
      change: -24,
      total: "Total Impression",
    },
    order: {
      value: "22k",
      change: 15,
      total: "Total Order",
    },
    marketing: {
      title: "Marketing & Sales",
      total: "Total 245.8k Sales",
      change: 25,
      expense: {
        title: "Marketing Expense",
        metrics: [
          { value: "8.5k", label: "Operating" },
          { value: "1.2k", label: "Financial" },
          { value: "9.6k", label: "COGS" },
          { value: "1.6k", label: "Expense" },
        ],
      },
    },
    visitors: {
      title: "Live Visitors",
      total: "Total 890 Visitors Are Live",
      change: 78.2,
      chartData: [15, 30, 25, 10, 5, 10, 5, 20, 15, 5, 10, 25, 20, 15, 30],
    },
  }

  return (
    <main className="p-3 sm:p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-6">
        {/* Impression Card */}

<div className="col-span-1 sm:col-span-2 md:col-span-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
          {/* Impression Card */}
          <Card
            sx={{
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              borderRadius: "16px",
              height: "100%",
              width: "100%",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
               
              },
            }}
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col space-y-4 md:space-y-6">
                <div className="flex items-center justify-between gap-2 md:gap-8">
             <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      variant="determinate"
                      value={75}
                      size={80}
                      thickness={5}
                      sx={{ color: "#6366F1" }}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image src="/marketicon2.png" alt="Impression icon" width={24} height={24} />
                    </Box>
                  </Box>
                  <div>
                    <div className="flex items-end">
                      <Typography variant="h4" component="div" className="text-xl md:text-2xl font-bold">
                        {dashboardData.impression.value}
                      </Typography>
                      <div className="flex items-center text-green-500">
                        <ArrowUpward fontSize="small" />
                        <Typography variant="body2" className="ml-1">
                          {dashboardData.impression.change}%
                        </Typography>
                      </div>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                      {dashboardData.impression.total}
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Card */}
          <Card
            sx={{
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              borderRadius: "16px",
              height: "100%",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              },
            }}
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col space-y-4 md:space-y-6">
                <div className="flex items-center justify-between gap-2 md:gap-8">
                 <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      variant="determinate"
                      value={35}
                      size={80}
                      thickness={5}
                      sx={{ color: "#F59E0B" }}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image src="/marketicon1.png" alt="Order icon" width={24} height={24} />
                    </Box>
                  </Box>
                  <div>
                    <div className="flex items-end">
                      <Typography variant="h4" component="div" className="text-xl md:text-2xl font-bold">
                        {dashboardData.order.value}
                      </Typography>
                      <div className="flex items-center text-green-500">
                        <ArrowUpward fontSize="small" />
                        <Typography variant="body2" className="ml-1">
                          {dashboardData.order.change}%
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <Typography variant="body2" color="text.secondary">
                        {dashboardData.order.total}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>


        {/* Marketing & Sales Card */}
        <Card
          className="col-span-1 md:col-span-2"
          sx={{
            width: "100%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            borderRadius: "16px",
            gridColumn: { xs: "1 / span 1", md: "2 / span 2" },
            gridRow: { xs: "3", md: "1 / span 2" },
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            },
          }}
        >
          <CardContent className="p-6">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <Typography variant="h6" component="div">
                    {dashboardData.marketing.title}
                  </Typography>
                  <div className="flex items-center mt-1">
                    <Typography variant="body2" color="text.secondary">
                      {dashboardData.marketing.total}
                    </Typography>
                    <div className="flex items-center text-green-500 ml-2">
                      <ArrowUpward fontSize="small" />
                      <Typography variant="body2" className="ml-1">
                        {dashboardData.marketing.change}%
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <div className="flex items-center space-x-8 mb-4">
                  <Image src="/Illustration.png" alt="Order icon" width={74} height={74} />
                </div>

                <div className="flex flex-col">
                  <Typography variant="subtitle1">{dashboardData.marketing.expense.title}</Typography>
                  <div className="flex flex-wrap md:max-w-[280px] gap-3 mt-4">
                    {dashboardData.marketing.expense.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center">
                        <Typography variant="body1" className="font-medium mr-2" sx={{ marginRight: 2 ,
                           backgroundColor: "rgba(0,0,0,0.05)",
                            borderRadius: "10px",
                            padding: "4px 8px",
                        }}>
                          {metric.value}
                        </Typography>
                        <Chip
                          label={metric.label}
                          size="small"
                          sx={{
                           
                            fontSize: "0.75rem",
                            height: "24px",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex space-x-3 mt-6 gap-3">
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    borderColor: "#E5E7EB",
                    color: "#6366F1",
                    padding: { xs: "6px 12px", sm: "8px 16px" },
                    fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                    "&:hover": {
                      borderColor: "#6366F1",
                      backgroundColor: "rgba(99, 102, 241, 0.04)",
                    },
                  }}
                >
                  Details
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    backgroundColor: "#6366F1",
                    padding: { xs: "6px 12px", sm: "8px 16px" },
                    fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                    "&:hover": {
                      backgroundColor: "#4F46E5",
                    },
                  }}
                >
                  Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Visitors Card */}
        <Card
          sx={{
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            borderRadius: "16px",
            gridColumn: { xs: "1", md: "4 / span 1" },
            gridRow: { xs: "4", md: "1 / span 2" },
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            },
          }}
        >
          <CardContent className="p-6">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <Typography variant="h6" component="div">
                    {dashboardData.visitors.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="mt-1">
                    {dashboardData.visitors.total}
                  </Typography>
                </div>
                <div className="flex items-center text-green-500">
                  <Typography variant="body2" className="font-medium mr-1">
                    +{dashboardData.visitors.change}%
                  </Typography>
                  <ArrowUpward fontSize="small" />
                </div>
              </div>

              <div className="flex items-end justify-between h-40 mt-6">
                {dashboardData.visitors.chartData.map((value, index) => (
                  <div
                    key={index}
                    className="w-2 sm:w-3 bg-green-500 rounded-t-sm transition-all duration-300 hover:bg-green-600"
                    style={{ height: `${value * 3}px` }}
                  ></div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
