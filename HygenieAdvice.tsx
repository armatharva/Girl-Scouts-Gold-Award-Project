import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import { Droplets, Clock, Shield, AlertTriangle } from "lucide-react";

export function HygieneAdvice() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-pink-600">Menstrual Hygiene Best Practices</CardTitle>
          <CardDescription>
            Essential tips for staying clean, comfortable, and healthy during your period
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="changing">Changing</TabsTrigger>
          <TabsTrigger value="situations">Situations</TabsTrigger>
          <TabsTrigger value="problems">Problems</TabsTrigger>
        </TabsList>

        <TabsContent value="basics">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Droplets className="h-5 w-5" />
                  Daily Hygiene
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2">Hand Washing</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Always wash hands before and after changing products</li>
                    <li>• Use soap and warm water for at least 20 seconds</li>
                    <li>• Use hand sanitizer if soap isn't available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2">Body Cleaning</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Shower daily if possible</li>
                    <li>• Clean external genital area with mild soap</li>
                    <li>• Rinse thoroughly with clean water</li>
                    <li>• Pat dry with a clean towel</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Shield className="h-5 w-5" />
                  Product Safety
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2">Storage</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Keep products in a clean, dry place</li>
                    <li>• Don't store in bathroom if humid</li>
                    <li>• Check expiration dates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2">Usage</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Use the right absorbency for your flow</li>
                    <li>• Never use scented products internally</li>
                    <li>• Choose breathable materials when possible</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="changing">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Clock className="h-5 w-5" />
                When and How to Change Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-pink-600 mb-3">Pads</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Change every 4-6 hours</li>
                    <li>• More frequently on heavy days</li>
                    <li>• Always change when full or soiled</li>
                    <li>• Change before sleeping and upon waking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-purple-600 mb-3">Tampons</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Change every 4-8 hours maximum</li>
                    <li>• Never leave in longer than 8 hours</li>
                    <li>• Use lowest absorbency needed</li>
                    <li>• Remove before sleeping if over 8 hours</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-600 mb-3">Cups</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Empty every 4-12 hours</li>
                    <li>• Rinse with clean water when possible</li>
                    <li>• Sterilize between cycles</li>
                    <li>• Check for damage regularly</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="text-blue-700 mb-2">Proper Disposal</h4>
                <ul className="space-y-1 text-sm text-blue-600">
                  <li>• Wrap used pads in toilet paper or wrapper</li>
                  <li>• Dispose in trash, not toilet</li>
                  <li>• Use disposal bags when available</li>
                  <li>• Never flush any menstrual products</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="situations">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Special Situations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-pink-600 mb-3">At School</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Keep extra supplies in locker or backpack</li>
                    <li>• Know where school supplies are available</li>
                    <li>• Ask nurse or trusted teacher for help</li>
                    <li>• Use bathroom during breaks to check/change</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-purple-600 mb-3">During Sports</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Use tampons or cups for swimming</li>
                    <li>• Change immediately after activities</li>
                    <li>• Wear dark colors on heavy days</li>
                    <li>• Stay hydrated and listen to your body</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-green-600 mb-3">Traveling</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Pack extra supplies in carry-on</li>
                    <li>• Research product availability at destination</li>
                    <li>• Bring disposal bags for waste</li>
                    <li>• Consider time zone changes for routine</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="problems">
          <div className="space-y-6">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                If you experience severe pain, very heavy bleeding, strong odors, or signs of infection, 
                consult a healthcare provider immediately.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Common Issues & Solutions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-orange-600 mb-2">Odor</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Change products more frequently</li>
                      <li>• Shower daily during period</li>
                      <li>• Avoid scented products</li>
                      <li>• See doctor if odor is strong/fishy</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-orange-600 mb-2">Rashes/Irritation</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Switch to unscented products</li>
                      <li>• Try different materials</li>
                      <li>• Keep area clean and dry</li>
                      <li>• Use barrier cream if needed</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">When to See a Doctor</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span>Periods lasting longer than 7 days</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span>Bleeding between periods</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span>Severe cramping that affects daily life</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span>Very heavy bleeding (soaking pad/tampon hourly)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span>Strong, unusual odor</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span>Signs of infection (fever, unusual discharge)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span>Missing periods for several months</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
