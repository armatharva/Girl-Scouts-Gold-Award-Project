import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Play, Info } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

export function VideoDemo() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-pink-600">How to Use a Pad</CardTitle>
          <CardDescription>
            Watch this step-by-step demonstration video
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
            {/* Video placeholder - replace with your actual video file */}
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="./video-thumbnail.jpg" // Add your video thumbnail here
            >
              <source src="./pad-demonstration-video.mp4" type="video/mp4" />
              <source src="./pad-demonstration-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            
            {/* Fallback for when video is not available */}
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-center p-6">
                <Play className="h-16 w-16 text-pink-500 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Instructional Video</p>
                <Alert className="max-w-sm mx-auto">
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-left">
                    <strong>To add your video:</strong><br />
                    1. Save your video as "pad-demonstration-video.mp4"<br />
                    2. Place it in the same folder as index.html<br />
                    3. Optionally add a thumbnail as "video-thumbnail.jpg"
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="text-pink-700 mb-2">Quick Tips:</h4>
            <ul className="space-y-1 text-sm text-pink-600">
              <li>• Change your pad every 4-6 hours</li>
              <li>• Always wash hands before and after</li>
              <li>• Dispose of used pads responsibly</li>
              <li>• Keep extra pads in your bag</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-purple-600">Step-by-Step Instructions</CardTitle>
          <CardDescription>
            Follow these simple steps for proper pad application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              "Wash your hands thoroughly with soap and water",
              "Remove the pad from its wrapper and unfold it completely", 
              "Peel off the backing strip to expose the adhesive",
              "Center the pad in your underwear with the adhesive side down",
              "Press down firmly to ensure the pad sticks properly",
              "If the pad has wings, wrap them around the underwear"
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="text-yellow-800 mb-2">Remember:</h4>
            <p className="text-yellow-700 text-sm">
              It's completely normal to feel nervous the first few times. With practice, using a pad becomes quick and easy. 
              Don't hesitate to ask a trusted adult for help if you need it!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
