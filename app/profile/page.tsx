"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, Building, Edit2, HelpCircle, LogOut, Mail, MapPin, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Acme Corporation",
    type: "Business",
    email: "contact@acmecorp.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Ave, Suite 100, San Francisco, CA 94107",
    contactPerson: "John Smith",
  })

  const handleSave = () => {
    // Save profile data
    setIsEditing(false)
  }

  return (
    <div className="mx-auto max-w-4xl p-4 pt-8">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="mr-4 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Profile & Settings</h1>
      </div>

      <div className="mb-6 flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white sm:flex-row sm:justify-start">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-600 sm:mb-0 sm:mr-6">
          <Building className="h-10 w-10" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold">{profileData.name}</h2>
          <p className="text-blue-100">{profileData.type}</p>
        </div>
        {!isEditing && (
          <Button
            variant="outline"
            size="sm"
            className="mt-4 border-white text-white hover:bg-blue-600 sm:ml-auto sm:mt-0"
            onClick={() => setIsEditing(true)}
          >
            <Edit2 className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        )}
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="help">Help & Support</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Organization Details</CardTitle>
              <CardDescription>Manage your organization information</CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Organization Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Organization Type</Label>
                      <Select
                        defaultValue={profileData.type}
                        onValueChange={(value) => setProfileData({ ...profileData, type: value })}
                      >
                        <SelectTrigger id="type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Business">Business</SelectItem>
                          <SelectItem value="Office">Office</SelectItem>
                          <SelectItem value="School">School</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person</Label>
                    <Input
                      id="contactPerson"
                      value={profileData.contactPerson}
                      onChange={(e) => setProfileData({ ...profileData, contactPerson: e.target.value })}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSave}>
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <ProfileItem
                    icon={<Building className="h-5 w-5 text-blue-600" />}
                    label="Organization"
                    value={`${profileData.name} (${profileData.type})`}
                  />

                  <ProfileItem
                    icon={<Mail className="h-5 w-5 text-blue-600" />}
                    label="Email"
                    value={profileData.email}
                  />

                  <ProfileItem
                    icon={<Phone className="h-5 w-5 text-blue-600" />}
                    label="Phone"
                    value={profileData.phone}
                  />

                  <ProfileItem
                    icon={<MapPin className="h-5 w-5 text-blue-600" />}
                    label="Address"
                    value={profileData.address}
                  />

                  <ProfileItem
                    icon={<User className="h-5 w-5 text-blue-600" />}
                    label="Contact Person"
                    value={profileData.contactPerson}
                  />

                  <div className="pt-4">
                    <Button variant="outline" className="text-red-600 hover:bg-red-50 hover:text-red-700">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <NotificationSetting
                  title="Collection Reminders"
                  description="Receive reminders about upcoming collections"
                  defaultChecked={true}
                />

                <NotificationSetting
                  title="Points Updates"
                  description="Get notified when you earn or redeem points"
                  defaultChecked={true}
                />

                <NotificationSetting
                  title="Marketplace Deals"
                  description="Receive updates about special offers in the marketplace"
                  defaultChecked={false}
                />

                <NotificationSetting
                  title="Report Reminders"
                  description="Get reminders about upcoming report submissions"
                  defaultChecked={true}
                />

                <NotificationSetting
                  title="Educational Content"
                  description="Receive tips and educational content about recycling"
                  defaultChecked={false}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="help">
          <Card>
            <CardHeader>
              <CardTitle>Help & Support</CardTitle>
              <CardDescription>Get help with your recycling program</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">Contact Support</h3>
                  <p className="mb-4 text-sm text-gray-500">Our support team is available Monday-Friday, 9AM-5PM.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span>support@ecocycle.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+1 (800) 123-4567</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Frequently Asked Questions</h3>

                  <FaqItem
                    question="How do I schedule a collection?"
                    answer="You can schedule a collection by navigating to the Collections tab and clicking on 'Schedule a Collection'. Fill out the form with your preferred date, time, and waste details."
                  />

                  <FaqItem
                    question="How are points calculated?"
                    answer="Points are calculated based on the weight and type of paper waste you recycle. You earn 10 points per kg of office paper, 8 points per kg of cardboard, and 12 points per kg of confidential documents."
                  />

                  <FaqItem
                    question="How do I redeem my points?"
                    answer="You can redeem your points in the Points & Rewards section. Browse available rewards and click 'Redeem Now' on the reward you want to claim."
                  />

                  <FaqItem
                    question="Can I change my collection schedule?"
                    answer="Yes, you can reschedule or cancel a collection up to 24 hours before the scheduled time. Go to the Collections tab and select the collection you want to modify."
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProfileItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 rounded-full bg-blue-50 p-2">{icon}</div>
      <div>
        <div className="text-sm font-medium text-gray-500">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  )
}

function NotificationSetting({
  title,
  description,
  defaultChecked,
}: {
  title: string
  description: string
  defaultChecked: boolean
}) {
  const [enabled, setEnabled] = useState(defaultChecked)

  return (
    <div className="flex items-start space-x-4">
      <div className="mt-0.5 rounded-full bg-blue-100 p-2 text-blue-600">
        <Bell className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <Switch checked={enabled} onCheckedChange={setEnabled} />
    </div>
  )
}

function FaqItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  return (
    <div className="rounded-md border p-4">
      <h4 className="font-medium">{question}</h4>
      <p className="mt-2 text-sm text-gray-500">{answer}</p>
    </div>
  )
}
