"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function ParticipationPage() {
  const [formData, setFormData] = useState({
    awarenessLevel: "",
    commitmentPledge: false,
    feedback: "",
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
        <h1 className="text-2xl font-bold">Participation & Feedback</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Engage & Track Your Recycling Commitment</CardTitle>
          <CardDescription>Help us understand your recycling awareness and commitment</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label>What is your organization's current level of recycling awareness?</Label>
              <RadioGroup
                value={formData.awarenessLevel}
                onValueChange={(value) => setFormData({ ...formData, awarenessLevel: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="low" />
                  <Label htmlFor="low" className="font-normal">
                    Low - We're just getting started
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="font-normal">
                    Medium - We have some processes in place
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high" className="font-normal">
                    High - We have comprehensive recycling practices
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-start space-x-3 rounded-md border p-4">
              <Checkbox
                id="commitment"
                checked={formData.commitmentPledge}
                onCheckedChange={(checked) => setFormData({ ...formData, commitmentPledge: checked as boolean })}
              />
              <div className="space-y-1">
                <Label htmlFor="commitment" className="font-medium">
                  Commitment Pledge
                </Label>
                <p className="text-sm text-gray-500">
                  We pledge to actively participate in paper recycling initiatives, educate our members, and
                  continuously improve our recycling practices.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">Feedback/Comments</Label>
              <Textarea
                id="feedback"
                placeholder="Share your thoughts, challenges, or suggestions about the recycling program"
                rows={4}
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Your Participation Level</CardTitle>
          <CardDescription>Track your organization's engagement with the recycling program</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span>Overall Participation</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-blue-600" style={{ width: "75%" }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <ParticipationMetric label="Submissions" value="12" />
              <ParticipationMetric label="Feedback" value="8" />
              <ParticipationMetric label="Collections" value="15" />
              <ParticipationMetric label="Consistency" value="High" />
            </div>

            <div className="rounded-md bg-blue-50 p-4 text-blue-800">
              <h3 className="mb-2 flex items-center font-medium">
                <Check className="mr-2 h-5 w-5" />
                Your Impact
              </h3>
              <p className="text-sm">
                Your organization has helped save approximately 42 trees and 16,500 gallons of water through your
                recycling efforts!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ParticipationMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border p-3 text-center">
      <div className="text-xl font-bold text-blue-600">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  )
}
