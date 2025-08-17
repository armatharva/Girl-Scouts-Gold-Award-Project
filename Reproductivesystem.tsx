import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar, Clock, Info } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ReproductiveSystem() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-pink-600">Understanding Your Reproductive System</CardTitle>
          <CardDescription>
            Learn about your body and how menstruation works
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="anatomy" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
          <TabsTrigger value="cycle">Menstrual Cycle</TabsTrigger>
          <TabsTrigger value="hormones">Hormones</TabsTrigger>
        </TabsList>

        <TabsContent value="anatomy">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Female Reproductive System Diagram</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg overflow-hidden relative">
                  {/* Anatomy diagram - replace with your actual screenshot */}
                  <ImageWithFallback 
                    src="./anatomy-diagram.jpg"
                    alt="Female Reproductive System Anatomy Diagram"
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Fallback for when image is not available */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Info className="h-16 w-16 text-pink-500 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Anatomical Diagram</p>
                      <p className="text-sm text-gray-500">
                        Add your anatomy diagram as "anatomy-diagram.jpg"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-pink-600">Organ Functions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-600 mb-2">Uterus</h4>
                    <p className="text-sm text-gray-700">
                      A pear-shaped organ where a baby can grow. The inner lining (endometrium) 
                      thickens each month and is shed during menstruation if pregnancy doesn't occur.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-600 mb-2">Ovaries</h4>
                    <p className="text-sm text-gray-700">
                      Two small organs that store eggs and produce hormones like estrogen and progesterone. 
                      They release one egg each month during ovulation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-600 mb-2">Fallopian Tubes</h4>
                    <p className="text-sm text-gray-700">
                      Tubes that connect the ovaries to the uterus. The egg travels through these 
                      tubes after being released from the ovary.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-600 mb-2">Cervix</h4>
                    <p className="text-sm text-gray-700">
                      The narrow lower part of the uterus that connects to the vagina. 
                      It produces mucus that changes throughout your cycle.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-600 mb-2">Vagina</h4>
                    <p className="text-sm text-gray-700">
                      A muscular tube that connects the cervix to the outside of the body. 
                      This is where menstrual blood flows out.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cycle">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <Calendar className="h-5 w-5" />
                  The Menstrual Cycle
                </CardTitle>
                <CardDescription>
                  Understanding the phases of your monthly cycle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="text-red-600 mb-2">Menstruation</h4>
                    <p className="text-sm mb-2">Days 1-5</p>
                    <p className="text-xs text-gray-600">
                      The uterine lining sheds, resulting in menstrual bleeding. 
                      This is the first day of your cycle.
                    </p>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="text-pink-600 mb-2">Follicular Phase</h4>
                    <p className="text-sm mb-2">Days 1-13</p>
                    <p className="text-xs text-gray-600">
                      Hormones signal the ovaries to prepare an egg for release. 
                      The uterine lining begins to thicken again.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="text-purple-600 mb-2">Ovulation</h4>
                    <p className="text-sm mb-2">Around Day 14</p>
                    <p className="text-xs text-gray-600">
                      A mature egg is released from the ovary and travels 
                      down the fallopian tube.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-blue-600 mb-2">Luteal Phase</h4>
                    <p className="text-sm mb-2">Days 15-28</p>
                    <p className="text-xs text-gray-600">
                      If the egg isn't fertilized, hormone levels drop and 
                      the cycle prepares to start over.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="text-yellow-800 mb-2">Important Notes:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Cycle length can vary from 21-35 days (28 days is average)</li>
                    <li>• It's normal for cycles to be irregular when you first start</li>
                    <li>• Every person's cycle is unique to them</li>
                    <li>• Tracking your cycle can help you understand your patterns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="hormones">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <Clock className="h-5 w-5" />
                  Hormones and Your Cycle
                </CardTitle>
                <CardDescription>
                  How hormones control your menstrual cycle and affect how you feel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-pink-600 mb-2">Estrogen</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Builds up the uterine lining and is highest just before ovulation.
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Effects:</strong> Increased energy, better mood, clearer skin
                      </div>
                    </div>

                    <div>
                      <h4 className="text-purple-600 mb-2">Progesterone</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Maintains the uterine lining after ovulation. Drops if pregnancy doesn't occur.
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Effects:</strong> Can cause bloating, breast tenderness, mood changes
                      </div>
                    </div>

                    <div>
                      <h4 className="text-green-600 mb-2">FSH & LH</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Brain hormones that signal the ovaries to prepare and release eggs.
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Effects:</strong> Control the timing of your cycle
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-orange-600 mb-4">How Hormones Affect You</h4>
                    <div className="space-y-3">
                      <div className="bg-pink-50 p-3 rounded-lg">
                        <h5 className="text-pink-600 text-sm mb-1">Week 1 (Period)</h5>
                        <p className="text-xs">Lower energy, need for rest, cramps possible</p>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h5 className="text-green-600 text-sm mb-1">Week 2 (Pre-ovulation)</h5>
                        <p className="text-xs">Rising energy, better mood, increased confidence</p>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h5 className="text-purple-600 text-sm mb-1">Week 3 (Post-ovulation)</h5>
                        <p className="text-xs">Peak energy, then gradual decline</p>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h5 className="text-blue-600 text-sm mb-1">Week 4 (Pre-period)</h5>
                        <p className="text-xs">PMS symptoms, mood changes, cravings</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="text-green-800 mb-2">Managing Hormonal Changes:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Track your cycle to predict how you might feel</li>
                    <li>• Eat nutritious foods and stay hydrated</li>
                    <li>• Get enough sleep, especially during your period</li>
                    <li>• Exercise regularly to help balance hormones</li>
                    <li>• Practice stress management techniques</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
