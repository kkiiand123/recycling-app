import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function WelcomeScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-2 h-20 w-20 rounded-full bg-blue-100 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-full w-full text-blue-600"
            >
              <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
              <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
              <path d="m14 16-3 3 3 3" />
              <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
              <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
              <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">EcoCycle</h1>
          <p className="text-center text-gray-600">Transforming paper waste into sustainable value</p>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/register">
              Register
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link href="/login">Login</Link>
          </Button>
        </div>

        <div className="mt-8 text-center">
          <Link href="/about" className="text-sm text-blue-600 hover:underline">
            About EcoCycle
          </Link>
        </div>
      </div>
    </div>
  )
}
