"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Filter, Search, ShoppingBag, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="mx-auto max-w-6xl p-4 pt-8">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="mr-4 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Marketplace</h1>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="paper">Paper Products</TabsTrigger>
          <TabsTrigger value="office">Office Supplies</TabsTrigger>
          <TabsTrigger value="eco">Eco-Friendly</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              name="Recycled Copy Paper"
              price="$24.99"
              pointsDiscount="200 points = $5 off"
              rating={4.5}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Eco-Friendly Notebooks"
              price="$12.99"
              pointsDiscount="100 points = $2 off"
              rating={4.2}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Biodegradable Pens (10 pack)"
              price="$8.99"
              pointsDiscount="80 points = $1.50 off"
              rating={4.0}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Recycled Paper Folders"
              price="$15.99"
              pointsDiscount="120 points = $3 off"
              rating={4.7}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Sustainable Desk Organizer"
              price="$29.99"
              pointsDiscount="250 points = $6 off"
              rating={4.3}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Plant-based Sticky Notes"
              price="$5.99"
              pointsDiscount="50 points = $1 off"
              rating={3.9}
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
        </TabsContent>

        <TabsContent value="paper">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              name="Recycled Copy Paper"
              price="$24.99"
              pointsDiscount="200 points = $5 off"
              rating={4.5}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Recycled Paper Folders"
              price="$15.99"
              pointsDiscount="120 points = $3 off"
              rating={4.7}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Eco-Friendly Cardstock"
              price="$18.99"
              pointsDiscount="150 points = $3.50 off"
              rating={4.2}
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
        </TabsContent>

        <TabsContent value="office">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              name="Biodegradable Pens (10 pack)"
              price="$8.99"
              pointsDiscount="80 points = $1.50 off"
              rating={4.0}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Sustainable Desk Organizer"
              price="$29.99"
              pointsDiscount="250 points = $6 off"
              rating={4.3}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Eco-Friendly Stapler"
              price="$12.99"
              pointsDiscount="100 points = $2 off"
              rating={3.8}
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
        </TabsContent>

        <TabsContent value="eco">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              name="Eco-Friendly Notebooks"
              price="$12.99"
              pointsDiscount="100 points = $2 off"
              rating={4.2}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Plant-based Sticky Notes"
              price="$5.99"
              pointsDiscount="50 points = $1 off"
              rating={3.9}
              image="/placeholder.svg?height=200&width=200"
            />

            <ProductCard
              name="Bamboo Desk Accessories"
              price="$34.99"
              pointsDiscount="300 points = $7 off"
              rating={4.6}
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="fixed bottom-0 left-0 z-20 flex w-full items-center justify-between border-t bg-white p-4 shadow-md">
        <div>
          <div className="text-sm text-gray-500">3 items in cart</div>
          <div className="font-medium">Total: $43.97</div>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
          <ShoppingCart className="h-4 w-4" />
          Checkout
        </Button>
      </div>
    </div>
  )
}

function ProductCard({
  name,
  price,
  pointsDiscount,
  rating,
  image,
}: {
  name: string
  price: string
  pointsDiscount: string
  rating: number
  image: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square bg-gray-100">
        <img src={image || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium">{name}</h3>
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">{rating}</span>
        </div>
        <div className="mb-1 text-lg font-bold">{price}</div>
        <div className="mb-3 text-xs text-blue-600">{pointsDiscount}</div>
        <div className="flex gap-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
          <Button variant="outline" size="icon">
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
