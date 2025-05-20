"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, Calendar, Check, Clock, MapPin, Truck, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CollectionPage() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    wasteType: "",
    quantity: "",
    address: "",
    notes: "",
    notifications: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="mx-auto max-w-4xl p-4 pt-8">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="mr-4 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Collection Scheduler & Tracker</h1>
      </div>

      <Tabs defaultValue="schedule">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Schedule a Collection</CardTitle>
              <CardDescription>Request a paper waste collection service</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Collection Date</Label>
                    <div className="relative">
                      <Input
                        id="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                      <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, time: value })}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                        <SelectItem value="evening">Evening (4PM - 6PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="wasteType">Waste Type</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, wasteType: value })}>
                      <SelectTrigger id="wasteType">
                        <SelectValue placeholder="Select waste type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office">Office Paper</SelectItem>
                        <SelectItem value="cardboard">Cardboard</SelectItem>
                        <SelectItem value="mixed">Mixed Paper</SelectItem>
                        <SelectItem value="confidential">Confidential Documents</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Estimated Quantity (kg)</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="Enter estimated quantity"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Collection Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter collection address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Special Instructions</Label>
                  <Input
                    id="notes"
                    placeholder="Any special instructions for the collection team"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="notifications"
                    checked={formData.notifications}
                    onCheckedChange={(checked) => setFormData({ ...formData, notifications: checked })}
                  />
                  <Label htmlFor="notifications">Receive notifications about this collection</Label>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Schedule Collection
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="space-y-4">
            <CollectionCard
              date="May 25, 2025"
              time="Morning (8AM - 12PM)"
              type="Office Paper"
              quantity="25kg"
              status="pending"
            />

            <CollectionCard
              date="June 2, 2025"
              time="Afternoon (12PM - 4PM)"
              type="Cardboard"
              quantity="40kg"
              status="pending"
            />

            <div className="rounded-md bg-blue-50 p-4 text-blue-800">
              <div className="flex items-start">
                <Bell className="mr-3 mt-0.5 h-5 w-5" />
                <div>
                  <h3 className="font-medium">Collection Reminders</h3>
                  <p className="text-sm">
                    You'll receive notifications 24 hours before each scheduled collection. Make sure your paper waste
                    is properly sorted and accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <div className="space-y-4">
            <CollectionCard
              date="May 10, 2025"
              time="Morning (8AM - 12PM)"
              type="Mixed Paper"
              quantity="15kg"
              status="completed"
            />

            <CollectionCard
              date="April 28, 2025"
              time="Afternoon (12PM - 4PM)"
              type="Office Paper"
              quantity="30kg"
              status="completed"
            />

            <CollectionCard
              date="April 15, 2025"
              time="Morning (8AM - 12PM)"
              type="Cardboard"
              quantity="45kg"
              status="completed"
            />

            <CollectionCard
              date="April 5, 2025"
              time="Evening (4PM - 6PM)"
              type="Confidential Documents"
              quantity="10kg"
              status="completed"
            />
          </div>
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Real-time Updates</CardTitle>
          <CardDescription>Track the status of your current collection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <Truck className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Collection #12345</div>
                <div className="text-sm text-gray-500">Scheduled for May 25, 2025</div>
              </div>
              <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">Pending</div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Request Received</div>
                  <div className="text-sm text-gray-500">May 20, 2025 at 10:23 AM</div>
                </div>
              </div>

              <div className="ml-4 h-6 w-0.5 bg-gray-200"></div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="text-gray-500">
                  <div className="font-medium">Collection Scheduled</div>
                  <div className="text-sm">Waiting for confirmation</div>
                </div>
              </div>

              <div className="ml-4 h-6 w-0.5 bg-gray-200"></div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="text-gray-500">
                  <div className="font-medium">En Route</div>
                  <div className="text-sm">Collection team on the way</div>
                </div>
              </div>

              <div className="ml-4 h-6 w-0.5 bg-gray-200"></div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <Check className="h-5 w-5" />
                </div>
                <div className="text-gray-500">
                  <div className="font-medium">Collected</div>
                  <div className="text-sm">Paper waste successfully collected</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function CollectionCard({
  date,
  time,
  type,
  quantity,
  status,
}: {
  date: string
  time: string
  type: string
  quantity: string
  status: "pending" | "en-route" | "completed" | "cancelled"
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4 sm:flex-1">
            <div className="mt-1 rounded-full bg-blue-100 p-2 text-blue-600">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium">{date}</div>
              <div className="text-sm text-gray-500">{time}</div>
              <div className="mt-1 flex items-center gap-2 text-sm">
                <span className="font-medium">{type}</span>
                <span className="text-gray-400">•</span>
                <span>{quantity}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : status === "en-route"
                    ? "bg-blue-100 text-blue-800"
                    : status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
              }`}
            >
              {status === "pending"
                ? "Pending"
                : status === "en-route"
                  ? "En Route"
                  : status === "completed"
                    ? "Completed"
                    : "Cancelled"}
            </div>

            {status === "pending" && (
              <div className="flex gap-1">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <MapPin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
