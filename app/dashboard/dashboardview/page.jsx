'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, PieChart, TrendingUp, TrendingDown, Users, DollarSign, Megaphone } from "lucide-react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function DashboardPage() {
  const activities = [
    {
      text: "Julian earned commission from referral",
      date: "Today",
      time: "10:30 AM"
    },
    {
      text: "New referral signup from Facebook campaign",
      date: "Today",
      time: "09:45 AM"
    },
    {
      text: "Campaign milestone reached - 50 referrals",
      date: "Yesterday",
      time: "03:20 PM"
    },
    {
      text: "Updated referral reward structure",
      date: "Yesterday",
      time: "11:00 AM"
    }
  ];

  const leaderboardData = [
    { rank: "1", name: "Emery Dokidis", rate: "150", revenue: "$1200", avatar: "/images/emery.jpg" },
    { rank: "2", name: "Kadin Lipshutz", rate: "132", revenue: "$980", avatar: "/images/kadin.jpg" },
    { rank: "3", name: "Randy Culhane", rate: "110", revenue: "$880", avatar: "/images/randy.jpg" },
  ];

  const performanceData = [
    { month: 'Jan', performance: 65 },
    { month: 'Feb', performance: 59 },
    { month: 'Mar', performance: 80 },
    { month: 'Apr', performance: 81 },
    { month: 'May', performance: 76 },
    { month: 'Jun', performance: 85 },
  ];

  const channelData = [
    { name: 'Facebook', value: 78, icon: <FaFacebookF />, color: '#1877F2' },
    { name: 'LinkedIn', value: 65, icon: <FaLinkedinIn />, color: '#0A66C2' },
    { name: 'Twitter', value: 45, icon: <FaTwitter />, color: '#1DA1F2' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Tabs defaultValue="overview" className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>
        
        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Total Promoters" 
              value="1,234" 
              trend="↑ 12.5%" 
              trendType="increase"
              icon={<Users className="w-5 h-5 text-blue-500" />}
            />
            <StatCard 
              title="Conversion Rate" 
              value="23.5%" 
              trend="↓ 2.4%" 
              trendType="decrease"
              icon={<TrendingDown className="w-5 h-5 text-red-500" />}
            />
            <StatCard 
              title="Revenue Generated" 
              value="$12,345" 
              trend="↑ 8.7%" 
              trendType="increase"
              icon={<DollarSign className="w-5 h-5 text-green-500" />}
            />
            <StatCard 
              title="Active Campaigns" 
              value="3" 
              trend="No change" 
              icon={<Megaphone className="w-5 h-5 text-purple-500" />}
            />
          </div>

          {/* Metric Cards with Progress */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              label="Repeat Referral Rate" 
              value="42%" 
              progress={42}
              color="bg-blue-500"
            />
            <MetricCard 
              label="Referral Engagement" 
              value="67%" 
              progress={67}
              color="bg-green-500"
            />
            <MetricCard 
              label="Churn Rate" 
              value="28%" 
              progress={28}
              color="bg-red-500"
            />
            <MetricCard 
              label="Upsell Rate" 
              value="19%" 
              progress={19}
              color="bg-purple-500"
            />
          </div>

          {/* Charts with enhanced styling */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 hover:shadow-md transition-shadow">
              <CardHeader className="border-b bg-gray-50">
                <CardTitle className="text-lg">Promoter Performance</CardTitle>
                <CardDescription>Last 6 months trend analysis</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="month" 
                        fontSize={12}
                        tickLine={false}
                      />
                      <YAxis 
                        unit="%" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem',
                        }}
                        formatter={(value) => [`${value}%`, 'Performance']}
                      />
                      <Bar
                        dataKey="performance"
                        fill="#3B82F6"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={50}
                      />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="border-b bg-gray-50">
                <CardTitle className="text-lg">Channel Performance</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 mb-4">
                    <CircularProgressbar
                      value={57}
                      text={`${57}%`}
                      styles={buildStyles({
                        pathColor: '#3B82F6',
                        textColor: '#1F2937',
                        trailColor: '#E5E7EB',
                        textSize: '20px',
                        pathTransitionDuration: 0.5,
                      })}
                    />
                  </div>
                  <div className="text-sm text-gray-600">Overall Success Rate</div>
                </div>

                <div className="space-y-4">
                  {channelData.map((channel, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: channel.color }}
                      >
                        {channel.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{channel.name}</span>
                          <span className="text-sm font-semibold text-gray-900">{channel.value}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${channel.value}%`,
                              backgroundColor: channel.color
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activities and Leaderboard with enhanced styling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="border-b bg-gray-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Recent Activities</CardTitle>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View All
                  </button>
                </div>
              </CardHeader>
              <CardContent className="p-0 max-h-[400px] overflow-y-auto">
                {activities.map((activity, index) => (
                  <ActivityItem 
                    key={index}
                    {...activity}
                    isLast={index === activities.length - 1}
                  />
                ))}
              </CardContent>
            </Card>

            {/* Enhanced Leaderboard */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="border-b bg-gray-50">
                <CardTitle className="text-lg">Top Performers</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Promoter</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {leaderboardData.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4 text-sm">{row.rank}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={row.avatar} />
                                <AvatarFallback>{row.name[0]}</AvatarFallback>
                              </Avatar>
                              <span className="ml-2 text-sm font-medium">{row.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm">{row.rate}</td>
                          <td className="py-4 px-4 text-sm font-medium text-green-600">{row.revenue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StatCard({ title, value, trend, trendType, icon }) {
  const trendColor = 
    trendType === 'increase' ? 'text-green-500' : 
    trendType === 'decrease' ? 'text-red-500' : 
    'text-gray-500';

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <span className="text-xl">{icon}</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={`text-xs ${trendColor}`}>
            {trend} vs last month
          </p>
        )}
      </CardContent>
    </Card>
  )
}

function MetricCard({ label, value, progress, color }) {
  // Convert color class to actual color value
  const colorMap = {
    'bg-blue-500': '#3B82F6',
    'bg-green-500': '#22C55E',
    'bg-red-500': '#EF4444',
    'bg-purple-500': '#A855F7'
  };

  const actualColor = colorMap[color] || '#3B82F6';

  return (
    <Card className="hover:shadow-md transition-shadow p-4">
      <CardContent className="p-0">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20">
            <CircularProgressbar
              value={progress}
              text={value}
              styles={buildStyles({
                pathColor: actualColor,
                textColor: '#1F2937',
                trailColor: '#E5E7EB',
                textSize: '20px',
                pathTransitionDuration: 0.5
              })}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-700 mb-1">{label}</h3>
            <p className="text-xs text-gray-500">
              {progress > 50 ? 'Above Target' : 'Below Target'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ActivityItem({ text, date, time, isLast }) {
  return (
    <div className={`flex items-start gap-3 p-4 ${!isLast ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors`}>
      <div className="flex-shrink-0">
        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
      </div>
      <div className="flex-grow">
        <p className="text-sm text-gray-800 font-medium">{text}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-500">{date}</span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      </div>
    </div>
  )
}