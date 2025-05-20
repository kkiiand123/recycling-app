"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft, Award, BookOpen, Filter, Leaf, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TipsPage() {
  return (
    <div className="mx-auto max-w-4xl p-4 pt-8">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="mr-4 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Recycling Tips & Educational Hub</h1>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input placeholder="Search tips and guides..." className="pl-10" />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="sorting">Sorting</TabsTrigger>
          <TabsTrigger value="reducing">Reducing</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-6 sm:grid-cols-2">
            <TipCard
              title="Paper Sorting Guide"
              description="Learn how to properly sort different types of paper waste for maximum recycling efficiency."
              category="Sorting"
              icon={<BookOpen className="h-5 w-5" />}
            />

            <TipCard
              title="Reducing Office Paper Waste"
              description="Practical tips to reduce paper consumption in your office environment."
              category="Reducing"
              icon={<Leaf className="h-5 w-5" />}
            />

            <TipCard
              title="The Impact of Paper Recycling"
              description="Understand the environmental impact of your paper recycling efforts."
              category="Sustainability"
              icon={<Leaf className="h-5 w-5" />}
            />

            <TipCard
              title="Paper Recycling Quiz"
              description="Test your knowledge about paper recycling with this interactive quiz."
              category="Interactive"
              icon={<Award className="h-5 w-5" />}
            />
          </div>
        </TabsContent>

        <TabsContent value="sorting">
          <div className="grid gap-6 sm:grid-cols-2">
            <TipCard
              title="Paper Sorting Guide"
              description="Learn how to properly sort different types of paper waste for maximum recycling efficiency."
              category="Sorting"
              icon={<BookOpen className="h-5 w-5" />}
            />

            <TipCard
              title="Identifying Recyclable Paper"
              description="How to identify which paper products can be recycled and which cannot."
              category="Sorting"
              icon={<BookOpen className="h-5 w-5" />}
            />
          </div>
        </TabsContent>

        <TabsContent value="reducing">
          <div className="grid gap-6 sm:grid-cols-2">
            <TipCard
              title="Reducing Office Paper Waste"
              description="Practical tips to reduce paper consumption in your office environment."
              category="Reducing"
              icon={<Leaf className="h-5 w-5" />}
            />

            <TipCard
              title="Digital Alternatives to Paper"
              description="Explore digital tools and solutions that can replace paper-based processes."
              category="Reducing"
              icon={<Leaf className="h-5 w-5" />}
            />
          </div>
        </TabsContent>

        <TabsContent value="sustainability">
          <div className="grid gap-6 sm:grid-cols-2">
            <TipCard
              title="The Impact of Paper Recycling"
              description="Understand the environmental impact of your paper recycling efforts."
              category="Sustainability"
              icon={<Leaf className="h-5 w-5" />}
            />

            <TipCard
              title="Sustainable Office Practices"
              description="Comprehensive guide to creating a more sustainable office environment."
              category="Sustainability"
              icon={<Leaf className="h-5 w-5" />}
            />
          </div>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Your Recycling Impact</CardTitle>
          <CardDescription>See the positive environmental impact of your recycling efforts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-3">
            <ImpactStat
              value="42"
              label="Trees Saved"
              description="Your paper recycling has saved approximately 42 trees."
            />

            <ImpactStat
              value="16,500"
              label="Gallons of Water"
              description="You've helped conserve about 16,500 gallons of water."
            />

            <ImpactStat
              value="1,240"
              label="kWh of Energy"
              description="Your recycling efforts have saved 1,240 kWh of energy."
            />
          </div>

          <div className="mt-6 rounded-lg bg-blue-50 p-4 text-blue-800">
            <h3 className="mb-2 font-medium">Did You Know?</h3>
            <p className="text-sm">
              Recycling one ton of paper saves 17 trees, 7,000 gallons of water, 380 gallons of oil, 3.3 cubic yards of
              landfill space and 4,000 kilowatts of energy — enough to power the average home for six months.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TipCard({
  title,
  description,
  category,
  icon,
}: {
  title: string
  description: string
  category: string
  icon: React.ReactNode
}) {
  return (
    <Card className="overflow-hidden">
      <div className="h-2 bg-blue-600"></div>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="rounded-full bg-blue-100 p-2 text-blue-600">{icon}</div>
          <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">{category}</div>
        </div>
        <h3 className="mb-2 text-lg font-medium">{title}</h3>
        <p className="mb-4 text-sm text-gray-500">{description}</p>
        <Button variant="outline" className="w-full">
          Read More
        </Button>
      </CardContent>
    </Card>
  )
}

function ImpactStat({
  value,
  label,
  description,
}: {
  value: string
  label: string
  description: string
}) {
  return (
    <div className="rounded-lg border p-4 text-center">
      <div className="text-3xl font-bold text-blue-600">{value}</div>
      <div className="font-medium">{label}</div>
      <p className="mt-2 text-xs text-gray-500">{description}</p>
    </div>
  )
}
