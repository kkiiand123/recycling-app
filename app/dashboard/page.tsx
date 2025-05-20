"use client"

import type React from "react"

import Link from "next/link"
import {
  BarChart3,
  Calendar,
  ClipboardList,
  FileText,
  Gift,
  Home,
  Recycle,
  Settings,
  ShoppingBag,
  Truck,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <AppSidebar />
        <div className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center border-b bg-white px-4 shadow-sm">
            <SidebarTrigger />
            <div className="ml-4">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
          </header>
          <main className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Good afternoon, Acme Corporation</h2>
              <p className="text-gray-600">Here's an overview of your recycling activity</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Total Paper Recycled Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Paper Recycled</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">248 kg</div>
                      <p className="text-xs text-green-600">+12% from last month</p>
                    </div>
                    <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                      <Recycle size={24} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Monthly Goal: 300kg</span>
                      <span>83%</span>
                    </div>
                    <Progress value={83} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Points Wallet Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Points Wallet</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">1,240</div>
                      <p className="text-xs text-gray-500">Available points</p>
                    </div>
                    <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                      <Gift size={24} />
                    </div>
                  </div>
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700">Redeem Now</Button>
                </CardContent>
              </Card>

              {/* Participation Status Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Participation Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">Active</div>
                      <p className="text-xs text-gray-500">Last feedback: 2 weeks ago</p>
                    </div>
                    <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                      <BarChart3 size={24} />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-md bg-green-100 p-2 text-center text-xs font-medium text-green-800">
                      High Awareness
                    </div>
                    <div className="rounded-md bg-blue-100 p-2 text-center text-xs font-medium text-blue-800">
                      Committed
                    </div>
                    <div className="rounded-md bg-purple-100 p-2 text-center text-xs font-medium text-purple-800">
                      Regular
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="mb-4 mt-8 text-lg font-semibold text-gray-800">Quick Actions</h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <QuickActionButton
                icon={<ClipboardList className="h-5 w-5" />}
                label="Submit Recycling Log"
                href="/recycling-log"
              />
              <QuickActionButton
                icon={<ShoppingBag className="h-5 w-5" />}
                label="View Marketplace"
                href="/marketplace"
              />
              <QuickActionButton icon={<Truck className="h-5 w-5" />} label="Schedule Collection" href="/collection" />
              <QuickActionButton icon={<FileText className="h-5 w-5" />} label="Reports & Roles" href="/reports" />
            </div>

            <h3 className="mb-4 mt-8 text-lg font-semibold text-gray-800">Recent Activity</h3>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  <ActivityItem
                    title="Paper Collection Scheduled"
                    description="Collection scheduled for May 25, 2025"
                    time="2 hours ago"
                    icon={<Calendar className="h-4 w-4 text-blue-600" />}
                  />
                  <ActivityItem
                    title="Recycling Log Submitted"
                    description="15kg of office paper logged"
                    time="Yesterday"
                    icon={<ClipboardList className="h-4 w-4 text-green-600" />}
                  />
                  <ActivityItem
                    title="Points Earned"
                    description="Earned 120 points for recycling"
                    time="3 days ago"
                    icon={<Gift className="h-4 w-4 text-purple-600" />}
                  />
                  <ActivityItem
                    title="Feedback Submitted"
                    description="Participation survey completed"
                    time="1 week ago"
                    icon={<FileText className="h-4 w-4 text-orange-600" />}
                  />
                </div>
              </CardContent>
            </Card>
          </main>
          <BottomNavigation />
        </div>
      </div>
    </SidebarProvider>
  )
}

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
            <Recycle className="h-5 w-5 text-blue-600" />
          </div>
          <div className="font-semibold">EcoCycle</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive>
              <Link href="/dashboard">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/marketplace">
                <ShoppingBag className="h-5 w-5" />
                <span>Marketplace</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/collection">
                <Truck className="h-5 w-5" />
                <span>Collections</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/reports">
                <FileText className="h-5 w-5" />
                <span>Reports</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/profile">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          <div>
            <div className="text-sm font-medium">Acme Corp</div>
            <div className="text-xs text-gray-500">Business</div>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

function QuickActionButton({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <Link href={href}>
      <Button variant="outline" className="h-auto w-full justify-start gap-2 p-4 text-left">
        <div className="rounded-full bg-blue-100 p-2 text-blue-600">{icon}</div>
        <span>{label}</span>
      </Button>
    </Link>
  )
}

function ActivityItem({
  title,
  description,
  time,
  icon,
}: {
  title: string
  description: string
  time: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4 p-4">
      <div className="mt-0.5 rounded-full bg-gray-100 p-2">{icon}</div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="text-xs text-gray-400">{time}</div>
    </div>
  )
}

function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 z-10 flex w-full justify-around border-t bg-white p-2 md:hidden">
      <Link href="/dashboard" className="flex flex-col items-center p-2 text-blue-600">
        <Home className="h-5 w-5" />
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/marketplace" className="flex flex-col items-center p-2 text-gray-500">
        <ShoppingBag className="h-5 w-5" />
        <span className="text-xs">Market</span>
      </Link>
      <Link href="/collection" className="flex flex-col items-center p-2 text-gray-500">
        <Truck className="h-5 w-5" />
        <span className="text-xs">Collection</span>
      </Link>
      <Link href="/reports" className="flex flex-col items-center p-2 text-gray-500">
        <FileText className="h-5 w-5" />
        <span className="text-xs">Reports</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center p-2 text-gray-500">
        <User className="h-5 w-5" />
        <span className="text-xs">Profile</span>
      </Link>
    </div>
  )
}
