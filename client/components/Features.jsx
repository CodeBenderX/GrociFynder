import { ShoppingBasket, Package, Utensils } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Features() {
  return (
    <div className="bg-white/90 backdrop-blur-md py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Fresh Produce */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-gray-100">
              <ShoppingBasket className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Deals on Fresh Produce</h3>
              <p className="text-gray-600 mb-1">Save up to $50/Week</p>
            </div>
          </div>

          {/* Bulk Savings */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-gray-100">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Bulk Savings on Essentials</h3>
              <p className="text-gray-600 mb-1">Exclusive Member Deals</p>
            </div>
          </div>

          {/* Meal Planner */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-gray-100">
              <Utensils className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Weekly Meal Planner</h3>
              <p className="text-gray-600 mb-1">Savings on Monthly Groceries</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8">
            EXPLORE
          </Button>
        </div>
      </div>
    </div>
  )
}

