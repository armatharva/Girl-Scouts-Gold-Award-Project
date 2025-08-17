import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { 
  Header, 
  VideoDemo, 
  ProductComparison, 
  HygieneAdvice, 
  ReproductiveSystem, 
  DoctorQA 
} from "./components/EducationalComponents";
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [activeTab, setActiveTab] = useState("demo");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Girl Scouts Logo in corner */}
      <div className="fixed top-4 right-4 z-50 text-center bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-green-200">
        <div className="w-16 h-16 mx-auto mb-2 overflow-hidden rounded-full">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1587653394453-7692616605ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJsJTIwc2NvdXRzJTIwbG9nbyUyMGJhZGdlfGVufDF8fHx8MTc1NTM4OTExNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Girl Scouts Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xs text-gray-600 leading-tight max-w-20">
          Girl Scouts Gold Award
        </p>
      </div>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="demo" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              Video Demo
            </TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              Products
            </TabsTrigger>
            <TabsTrigger value="hygiene" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              Hygiene
            </TabsTrigger>
            <TabsTrigger value="health" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              Health Info
            </TabsTrigger>
            <TabsTrigger value="anatomy" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              Anatomy
            </TabsTrigger>
            <TabsTrigger value="qa" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              Ask a Doctor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="demo">
            <VideoDemo />
          </TabsContent>

          <TabsContent value="products">
            <ProductComparison />
          </TabsContent>

          <TabsContent value="hygiene">
            <HygieneAdvice />
          </TabsContent>

          <TabsContent value="health">
            <Card>
              <CardHeader>
                <CardTitle className="text-pink-600">Why Menstrual Hygiene Matters</CardTitle>
                <CardDescription>
                  Understanding the importance of cleanliness during your menstrual cycle
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg mb-3 text-purple-600">Health Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Prevents bacterial and fungal infections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Reduces risk of urinary tract infections (UTIs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Prevents toxic shock syndrome (TSS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Maintains healthy pH balance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg mb-3 text-purple-600">Comfort & Confidence</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Eliminates unpleasant odors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Prevents skin irritation and rashes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Allows you to stay active and social</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Boosts overall well-being</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-lg mb-3 text-pink-700">Connection to Overall Health</h3>
                  <p className="mb-3">
                    Your menstrual health is closely linked to your overall well-being. Good hygiene habits during your period help:
                  </p>
                  <ul className="space-y-1">
                    <li>• Maintain your body's natural defense systems</li>
                    <li>• Support your immune system</li>
                    <li>• Promote better sleep and mood</li>
                    <li>• Build healthy lifelong habits</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="text-red-700 mb-2">Warning Signs to Watch For:</h4>
                  <p className="text-red-600">
                    See a healthcare provider if you experience: severe pain, very heavy bleeding, 
                    strong or fishy odors, fever, or unusual discharge. These could be signs of infection or other conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="anatomy">
            <ReproductiveSystem />
          </TabsContent>

          <TabsContent value="qa">
            <DoctorQA />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
