"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Upload, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RolesPage() {
  const [formData, setFormData] = useState({
    coordinator: "",
    reportFrequency: "",
    nextReportDate: "",
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
        <h1 className="text-2xl font-bold">Role Assignment & Reporting</h1>
      </div>

      <Tabs defaultValue="roles">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>
          <TabsTrigger value="reports">Report Submission</TabsTrigger>
        </TabsList>

        <TabsContent value="roles">
          <Card>
            <CardHeader>
              <CardTitle>Coordinator Role Assignment</CardTitle>
              <CardDescription>Assign roles to team members for recycling coordination</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="coordinator">Select Coordinator Role</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, coordinator: value })}>
                    <SelectTrigger id="coordinator">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="supervisor">Supervisor</SelectItem>
                      <SelectItem value="coordinator">Recycling Coordinator</SelectItem>
                      <SelectItem value="reporter">Reporter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label>Current Team Members</Label>
                  <div className="space-y-3">
                    <TeamMember name="Jane Smith" email="jane@acmecorp.com" role="Admin" />
                    <TeamMember name="John Doe" email="john@acmecorp.com" role="Supervisor" />
                    <TeamMember name="Sarah Johnson" email="sarah@acmecorp.com" role="Coordinator" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Add New Team Member</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Email address" className="flex-1" />
                    <Button>Invite</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Report Submission</CardTitle>
              <CardDescription>Upload formal reports and schedule future submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label>Upload Reports</Label>
                  <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                    <Upload className="mb-2 h-6 w-6 text-gray-400" />
                    <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-400">PDF, DOCX up to 10MB</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reportFrequency">Report Submission Frequency</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, reportFrequency: value })}>
                    <SelectTrigger id="reportFrequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nextReportDate">Next Report Due Date</Label>
                  <div className="relative">
                    <Input
                      id="nextReportDate"
                      type="date"
                      value={formData.nextReportDate}
                      onChange={(e) => setFormData({ ...formData, nextReportDate: e.target.value })}
                    />
                    <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Save Report Settings
                </Button>
              </form>

              <div className="mt-6 space-y-2">
                <h3 className="font-medium">Recent Report Submissions</h3>
                <div className="rounded-md border">
                  <div className="grid grid-cols-3 border-b p-3 text-sm font-medium text-gray-500">
                    <div>Report</div>
                    <div>Date</div>
                    <div>Status</div>
                  </div>
                  <ReportItem name="Monthly Recycling Report" date="Apr 15, 2025" status="Approved" />
                  <ReportItem name="Quarterly Summary" date="Mar 31, 2025" status="Approved" />
                  <ReportItem name="Waste Audit Results" date="Feb 22, 2025" status="Pending" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TeamMember({ name, email, role }: { name: string; email: string; role: string }) {
  return (
    <div className="flex items-center justify-between rounded-md border p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Users className="h-5 w-5" />
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-gray-500">{email}</div>
        </div>
      </div>
      <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">{role}</div>
    </div>
  )
}

function ReportItem({ name, date, status }: { name: string; date: string; status: string }) {
  return (
    <div className="grid grid-cols-3 items-center border-b p-3 text-sm last:border-0">
      <div>{name}</div>
      <div>{date}</div>
      <div>
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            status === "Approved" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  )
}
