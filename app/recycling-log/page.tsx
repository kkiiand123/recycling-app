"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RecyclingLogPage() {
  const [formData, setFormData] = useState({
    wasteType: "",
    quantity: "",
    collectionDate: "",
    processingNotes: "",
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
        <h1 className="text-2xl font-bold">Log Paper Waste Quantities</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Paper Waste Details</CardTitle>
          <CardDescription>Record the details of your paper waste for recycling</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="wasteType">Paper Waste Type</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, wasteType: value })}>
                <SelectTrigger id="wasteType">
                  <SelectValue placeholder="Select waste type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">Office Paper</SelectItem>
                  <SelectItem value="cardboard">Cardboard</SelectItem>
                  <SelectItem value="newsprint">Newsprint</SelectItem>
                  <SelectItem value="mixed">Mixed Paper</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity (kg)</Label>
              <Input
                id="quantity"
                type="number"
                placeholder="Enter quantity in kg"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="collectionDate">Collection Date</Label>
              <div className="relative">
                <Input
                  id="collectionDate"
                  type="date"
                  required
                  value={formData.collectionDate}
                  onChange={(e) => setFormData({ ...formData, collectionDate: e.target.value })}
                />
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="processingNotes">Processing Notes/Handling Details</Label>
              <Textarea
                id="processingNotes"
                placeholder="Enter any additional notes about processing or handling"
                rows={4}
                value={formData.processingNotes}
                onChange={(e) => setFormData({ ...formData, processingNotes: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Verification Documents/Photos</Label>
              <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                <Upload className="mb-2 h-6 w-6 text-gray-400" />
                <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400">PNG, JPG, PDF up to 10MB</p>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Submit Recycling Log
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
