import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, XCircle, DollarSign, Leaf, Clock } from "lucide-react";

export function ProductComparison() {
  const products = [
    {
      name: "Disposable Pads",
      description: "Absorbent pads that stick to underwear",
      pros: [
        "Easy to use for beginners",
        "Widely available",
        "No insertion required",
        "Good for heavy flow",
        "Visible flow monitoring"
      ],
      cons: [
        "Can feel bulky",
        "May shift during activity",
        "Creates waste",
        "Can cause odor if not changed often",
        "May cause rashes with sensitive skin"
      ],
      cost: "Low ($5-15/month)",
      ecoFriendly: "Low",
      availability: "High",
      duration: "4-6 hours",
      color: "pink"
    },
    {
      name: "Tampons",
      description: "Absorbent cylinders inserted into the vagina",
      pros: [
        "Discreet and comfortable",
        "Great for swimming/sports",
        "No external bulk",
        "Available in different absorbencies",
        "Freedom of movement"
      ],
      cons: [
        "Insertion learning curve",
        "Risk of TSS if left too long",
        "Cannot be used overnight (8+ hours)",
        "May be uncomfortable for some",
        "Creates waste"
      ],
      cost: "Low-Medium ($8-20/month)",
      ecoFriendly: "Low",
      availability: "High",
      duration: "4-8 hours",
      color: "purple"
    },
    {
      name: "Menstrual Cups",
      description: "Reusable silicone cups that collect flow",
      pros: [
        "Eco-friendly and cost-effective",
        "Can wear for up to 12 hours",
        "No toxic shock syndrome risk",
        "Holds more than tampons/pads",
        "Lasts for years with proper care"
      ],
      cons: [
        "Steeper learning curve",
        "Requires cleaning and sterilizing",
        "Initial higher cost",
        "May be messy to empty",
        "Not suitable for everyone"
      ],
      cost: "High upfront ($20-40), Low long-term",
      ecoFriendly: "Very High",
      availability: "Medium",
      duration: "Up to 12 hours",
      color: "green"
    },
    {
      name: "Period Underwear",
      description: "Special underwear with built-in absorbent layers",
      pros: [
        "Feels like regular underwear",
        "No insertion or placement needed",
        "Reusable and eco-friendly",
        "Good backup protection",
        "Comfortable for daily wear"
      ],
      cons: [
        "Higher upfront cost",
        "May not be sufficient for heavy days alone",
        "Takes time to dry after washing",
        "Limited styles available",
        "May feel damp when full"
      ],
      cost: "High ($15-40 per pair)",
      ecoFriendly: "High",
      availability: "Medium",
      duration: "6-12 hours",
      color: "blue"
    }
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-pink-600">Menstrual Product Comparison</CardTitle>
          <CardDescription>
            Explore different options to find what works best for you
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className={`text-${product.color}-600`}>{product.name}</CardTitle>
                  <CardDescription className="mt-2">{product.description}</CardDescription>
                </div>
                <Badge variant="outline" className={`border-${product.color}-300 text-${product.color}-600`}>
                  {index + 1}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="flex items-center gap-2 text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  Pros
                </h4>
                <ul className="space-y-1 text-sm">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-red-600 mb-2">
                  <XCircle className="h-4 w-4" />
                  Cons
                </h4>
                <ul className="space-y-1 text-sm">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Cost</span>
                  </div>
                  <p className="text-xs text-gray-600">{product.cost}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Eco-Friendly</span>
                  </div>
                  <p className="text-xs text-gray-600">{product.ecoFriendly}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <p className="text-xs text-gray-600">{product.duration}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-sm">Availability</span>
                  <p className="text-xs text-gray-600">{product.availability}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <CardContent className="p-6">
          <h3 className="text-lg mb-4 text-purple-700">Choosing the Right Product for You</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="text-pink-600 mb-2">For Beginners:</h4>
              <p>Start with disposable pads - they're easiest to learn with and widely available.</p>
            </div>
            <div>
              <h4 className="text-pink-600 mb-2">For Active Lifestyles:</h4>
              <p>Tampons or menstrual cups offer the most freedom for sports and swimming.</p>
            </div>
            <div>
              <h4 className="text-pink-600 mb-2">For Eco-Conscious:</h4>
              <p>Menstrual cups and period underwear are the most environmentally friendly options.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
