"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function RatingPage() {
  return (
    <div className="mx-auto max-w-4xl p-4 pt-8">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="mr-4 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Rating & Review System</h1>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Recent Interactions</CardTitle>
          <CardDescription>
            Rate and review your recent interactions with suppliers and recycling centers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <RatingCard name="EcoPaper Recycling Center" date="May 15, 2025" type="Collection Service" />

            <RatingCard name="Green Office Supplies" date="May 10, 2025" type="Marketplace Purchase" />

            <RatingCard name="Sustainable Paper Co." date="May 5, 2025" type="Marketplace Purchase" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Supplier & Facility Ratings</CardTitle>
          <CardDescription>View aggregate ratings and recent reviews</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <SupplierRatingCard
              name="EcoPaper Recycling Center"
              rating={4.8}
              reviewCount={124}
              type="Recycling Center"
            />

            <SupplierRatingCard name="Green Office Supplies" rating={4.5} reviewCount={87} type="Supplier" />

            <SupplierRatingCard name="Sustainable Paper Co." rating={4.2} reviewCount={56} type="Supplier" />

            <SupplierRatingCard
              name="PaperCycle Collection Services"
              rating={4.7}
              reviewCount={103}
              type="Collection Service"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function RatingCard({
  name,
  date,
  type,
}: {
  name: string
  date: string
  type: string
}) {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    // Submit rating and review
    setIsSubmitted(true)
  }

  return (
    <Card>
      <CardContent className="p-6">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="mb-2 rounded-full bg-green-100 p-3 text-green-600">
              <Star className="h-6 w-6 fill-green-600" />
            </div>
            <h3 className="text-lg font-medium">Thank You for Your Feedback!</h3>
            <p className="text-sm text-gray-500">Your rating and review for {name} has been submitted.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-blue-100 p-2 text-blue-600">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">{name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{date}</span>
                  <span>•</span>
                  <span>{type}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Rate your experience</div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="rounded-md p-1 hover:bg-gray-100"
                  >
                    <Star
                      className={`h-6 w-6 ${rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Write a review</div>
              <Textarea
                placeholder="Share your experience..."
                rows={3}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSubmit} disabled={rating === 0}>
              Submit Review
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function SupplierRatingCard({
  name,
  rating,
  reviewCount,
  type,
}: {
  name: string
  rating: number
  reviewCount: number
  type: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <h3 className="font-medium">{name}</h3>
            <div className="text-sm text-gray-500">{type}</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      rating >= star
                        ? "fill-yellow-400 text-yellow-400"
                        : rating >= star - 0.5
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm font-medium">{rating.toFixed(1)}</div>
              <div className="text-sm text-gray-500">({reviewCount} reviews)</div>
            </div>
          </div>
          <Button variant="outline">View Details</Button>
        </div>

        <div className="mt-4 space-y-3">
          <ReviewItem
            author="John D."
            date="May 12, 2025"
            rating={5}
            comment="Excellent service! The collection team was prompt and professional."
          />

          <ReviewItem
            author="Sarah M."
            date="May 8, 2025"
            rating={4}
            comment="Good quality products and fast delivery. Would recommend."
          />
        </div>
      </CardContent>
    </Card>
  )
}

function ReviewItem({
  author,
  date,
  rating,
  comment,
}: {
  author: string
  date: string
  rating: number
  comment: string
}) {
  return (
    <div className="border-t pt-3">
      <div className="flex items-center justify-between">
        <div className="font-medium">{author}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
      <div className="my-1 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-3 w-3 ${rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="text-sm text-gray-600">{comment}</p>
    </div>
  )
}
