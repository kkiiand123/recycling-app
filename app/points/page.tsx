"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft, ChevronRight, Gift, ShoppingBag, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PointsWalletPage() {
  return (
    <div className="mx-auto max-w-4xl p-4 pt-8">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="mr-4 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Points & Rewards Wallet</h1>
      </div>

      <Card className="mb-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <CardContent className="p-6">
          <div className="mb-2 text-sm font-medium text-blue-100">Available Balance</div>
          <div className="mb-4 text-4xl font-bold">1,240 Points</div>
          <div className="flex gap-2">
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Redeem Points
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-600">
              View History
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="redeem">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="redeem">Redeem</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>

        <TabsContent value="redeem">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Redemption Options</h2>

            <div className="space-y-4">
              <RedemptionCard
                title="10% Off Recycled Paper Products"
                points={500}
                description="Get 10% off your next purchase of recycled paper products from our partner suppliers."
                icon={<Tag className="h-5 w-5" />}
              />

              <RedemptionCard
                title="$25 Office Supply Voucher"
                points={750}
                description="Redeem a $25 voucher for eco-friendly office supplies from Green Office Co."
                icon={<ShoppingBag className="h-5 w-5" />}
              />

              <RedemptionCard
                title="Free Collection Service"
                points={1000}
                description="Redeem for a free paper waste collection service (up to 50kg)."
                icon={<Gift className="h-5 w-5" />}
              />

              <RedemptionCard
                title="Sustainability Workshop"
                points={1500}
                description="Host a sustainability workshop for your team led by environmental experts."
                icon={<Gift className="h-5 w-5" />}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Points History</CardTitle>
              <CardDescription>Track your points earned and redeemed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <PointsHistoryItem title="Paper Recycling" date="May 18, 2025" points="+120" type="earned" />

                <PointsHistoryItem
                  title="Office Supply Voucher Redemption"
                  date="May 10, 2025"
                  points="-750"
                  type="redeemed"
                />

                <PointsHistoryItem title="Cardboard Recycling" date="May 5, 2025" points="+85" type="earned" />

                <PointsHistoryItem title="Participation Bonus" date="May 1, 2025" points="+200" type="earned" />

                <PointsHistoryItem title="Monthly Recycling" date="Apr 28, 2025" points="+150" type="earned" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Rewards</CardTitle>
              <CardDescription>Special offers and rewards coming soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <UpcomingRewardCard
                  title="Double Points Weekend"
                  date="May 25-26, 2025"
                  description="Earn double points on all recycling submissions during this weekend."
                />

                <UpcomingRewardCard
                  title="New Eco-Friendly Products"
                  date="June 1, 2025"
                  description="New sustainable products will be available in the marketplace."
                />

                <UpcomingRewardCard
                  title="Sustainability Challenge"
                  date="June 15, 2025"
                  description="Participate in our monthly challenge to earn bonus points and special rewards."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RedemptionCard({
  title,
  points,
  description,
  icon,
}: {
  title: string
  points: number
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="mt-1 rounded-full bg-blue-100 p-3 text-blue-600">{icon}</div>
          <div className="flex-1">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-medium">{title}</h3>
              <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                {points} points
              </div>
            </div>
            <p className="text-sm text-gray-500">{description}</p>
            <Button className="mt-3 bg-blue-600 hover:bg-blue-700">Redeem Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PointsHistoryItem({
  title,
  date,
  points,
  type,
}: {
  title: string
  date: string
  points: string
  type: "earned" | "redeemed"
}) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
      <div className={`font-medium ${type === "earned" ? "text-green-600" : "text-red-600"}`}>{points}</div>
    </div>
  )
}

function UpcomingRewardCard({
  title,
  date,
  description,
}: {
  title: string
  date: string
  description: string
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-blue-600">{date}</p>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  )
}
