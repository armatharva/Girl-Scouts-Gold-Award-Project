import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { CheckCircle, Play, Info, Calendar, Clock, Heart, Droplets, Trash2, Shirt, AlertTriangle, Square, Circle, Droplet, DollarSign, Leaf, Pill, ShoppingBag, Stethoscope } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Header Component
export function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 py-6">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full text-white">
            <Heart className="h-6 w-6" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1">
              MenstruationEdu
            </h1>
            <p className="text-gray-600 text-sm">
              Your comprehensive guide to menstrual health and hygiene
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

// Video Demo Component
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
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="./video-thumbnail.jpg"
            >
              <source src="./pad-demonstration-video.mp4" type="video/mp4" />
              <source src="./pad-demonstration-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-center p-6">
                <Play className="h-16 w-16 text-pink-500 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Instructional Video</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-sm mx-auto">
                  <div className="flex gap-2 items-start">
                    <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-xs text-blue-800 text-left">
                      <p><strong>To add your video:</strong></p>
                      <p>1. Save your video as "pad-demonstration-video.mp4"</p>
                      <p>2. Place it in the same folder as index.html</p>
                      <p>3. Optionally add a thumbnail as "video-thumbnail.jpg"</p>
                    </div>
                  </div>
                </div>
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

// Product Comparison Component
export function ProductComparison() {
  const products = [
    {
      name: "Disposable Pads",
      icon: Square,
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
      duration: "4-6 hours",
      availability: "High"
    },
    {
      name: "Tampons",
      icon: Circle,
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
      duration: "4-8 hours",
      availability: "High"
    },
    {
      name: "Menstrual Cups",
      icon: Droplet,
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
      duration: "Up to 12 hours", 
      availability: "Medium"
    },
    {
      name: "Period Underwear",
      icon: Shirt,
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
      duration: "6-12 hours",
      availability: "Medium"
    }
  ];

  return (
    <div className="space-y-6">
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
          <Card key={index} className="bg-gray-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <product.icon className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-medium">{product.name}</h3>
                </div>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded border border-purple-300">
                  {index + 1}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-green-500 text-sm mb-2">✓ Pros</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {product.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-600 text-sm mb-2">✗ Cons</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {product.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t pt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-3 w-3 text-gray-500" />
                    <span className="text-gray-700">Cost</span>
                  </div>
                  <p className="text-gray-600">{product.cost}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-3 w-3 text-gray-500" />
                    <span className="text-gray-700">Eco-Friendly</span>
                  </div>
                  <p className="text-gray-600">{product.ecoFriendly}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span className="text-gray-700">Duration</span>
                  </div>
                  <p className="text-gray-600">{product.duration}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-gray-700">Availability</span>
                  <p className="text-gray-600">{product.availability}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-purple-200">
        <CardContent className="p-6">
          <h3 className="text-purple-700 mb-4">Choosing the Right Product for You</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-pink-600 mb-2 text-sm">For Beginners:</h4>
              <p className="text-gray-700 text-sm">Start with disposable pads - they're easiest to learn with and widely available.</p>
            </div>
            <div>
              <h4 className="text-pink-600 mb-2 text-sm">For Active Lifestyles:</h4>
              <p className="text-gray-700 text-sm">Tampons or menstrual cups offer the most freedom for sports and swimming.</p>
            </div>
            <div>
              <h4 className="text-pink-600 mb-2 text-sm">For Eco-Conscious:</h4>
              <p className="text-gray-700 text-sm">Menstrual cups and period underwear are the most environmentally friendly options.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Hygiene Advice Component
export function HygieneAdvice() {
  const hygieneTopics = [
    {
      title: "Daily Care",
      icon: Droplets,
      tips: [
        "Change your pad or tampon every 4-6 hours",
        "Wash your hands before and after changing products",
        "Use warm water and mild soap for cleaning",
        "Always wipe from front to back",
        "Shower or bathe daily during your period"
      ]
    },
    {
      title: "Proper Disposal",
      icon: Trash2,
      tips: [
        "Wrap used pads in toilet paper or their wrapper",
        "Never flush pads or tampons down the toilet",
        "Use designated disposal bins when available",
        "Wash hands after disposing of products",
        "Keep disposal bags for when bins aren't available"
      ]
    },
    {
      title: "Clothing & Comfort",
      icon: Shirt,
      tips: [
        "Wear breathable cotton underwear",
        "Change underwear daily during your period",
        "Avoid tight-fitting clothes during heavy flow days",
        "Keep extra underwear and products with you",
        "Wash period underwear in cold water"
      ]
    },
    {
      title: "What to Avoid",
      icon: AlertTriangle,
      tips: [
        "Don't use scented products on your vulva",
        "Avoid douching - it disrupts natural balance",
        "Don't leave tampons in for more than 8 hours",
        "Avoid using super absorbent products unnecessarily",
        "Don't ignore unusual odors or symptoms"
      ]
    }
  ];

  const emergencyKit = [
    { icon: Square, item: "Extra pads/tampons" },
    { icon: Droplets, item: "Wet wipes" },
    { icon: Shirt, item: "Spare underwear" },
    { icon: Pill, item: "Pain relief medication" },
    { icon: ShoppingBag, item: "Small disposal bags" }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-pink-600">Menstrual Hygiene Best Practices</CardTitle>
          <CardDescription>
            Essential hygiene tips to keep you healthy and comfortable during your period
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {hygieneTopics.map((topic, index) => (
          <Card key={index} className="bg-gray-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <topic.icon className="h-6 w-6 text-pink-600" />
                <h3 className="text-gray-700">{topic.title}</h3>
              </div>
              <ul className="space-y-2">
                {topic.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-gray-600 pl-4 relative">
                    <span className="absolute left-0 text-pink-500">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-pink-50 border-pink-200">
        <CardContent className="p-6">
          <h3 className="text-pink-700 mb-4">Emergency Kit Essentials</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {emergencyKit.map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-white p-3 rounded border border-pink-200">
                <item.icon className="h-5 w-5 text-pink-600" />
                <span className="text-sm text-gray-700">{item.item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Reproductive System Component
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
                  <ImageWithFallback 
                    src="./anatomy-diagram.jpg"
                    alt="Female Reproductive System Anatomy Diagram"
                    className="w-full h-full object-contain"
                  />
                  
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
                  {[
                    {
                      name: "Uterus",
                      description: "A pear-shaped organ where a baby can grow. The inner lining (endometrium) thickens each month and is shed during menstruation if pregnancy doesn't occur."
                    },
                    {
                      name: "Ovaries", 
                      description: "Two small organs that store eggs and produce hormones like estrogen and progesterone. They release one egg each month during ovulation."
                    },
                    {
                      name: "Fallopian Tubes",
                      description: "Tubes that connect the ovaries to the uterus. The egg travels through these tubes after being released from the ovary."
                    },
                    {
                      name: "Cervix",
                      description: "The narrow lower part of the uterus that connects to the vagina. It produces mucus that changes throughout your cycle."
                    },
                    {
                      name: "Vagina",
                      description: "A muscular tube that connects the cervix to the outside of the body. This is where menstrual blood flows out."
                    }
                  ].map((organ, index) => (
                    <div key={index}>
                      <h4 className="text-purple-600 mb-2">{organ.name}</h4>
                      <p className="text-sm text-gray-700">{organ.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cycle">
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
                {[
                  {
                    phase: "Menstruation",
                    days: "Days 1-5",
                    description: "The uterine lining sheds, resulting in menstrual bleeding. This is the first day of your cycle.",
                    color: "red"
                  },
                  {
                    phase: "Follicular Phase", 
                    days: "Days 1-13",
                    description: "Hormones signal the ovaries to prepare an egg for release. The uterine lining begins to thicken again.",
                    color: "pink"
                  },
                  {
                    phase: "Ovulation",
                    days: "Around Day 14", 
                    description: "A mature egg is released from the ovary and travels down the fallopian tube.",
                    color: "purple"
                  },
                  {
                    phase: "Luteal Phase",
                    days: "Days 15-28",
                    description: "If the egg isn't fertilized, hormone levels drop and the cycle prepares to start over.",
                    color: "blue"
                  }
                ].map((phase, index) => (
                  <div key={index} className={`bg-${phase.color}-50 p-4 rounded-lg`}>
                    <h4 className={`text-${phase.color}-600 mb-2`}>{phase.phase}</h4>
                    <p className="text-sm mb-2">{phase.days}</p>
                    <p className="text-xs text-gray-600">{phase.description}</p>
                  </div>
                ))}
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
        </TabsContent>

        <TabsContent value="hormones">
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
                  {[
                    {
                      hormone: "Estrogen",
                      description: "Builds up the uterine lining and is highest just before ovulation.",
                      effects: "Increased energy, better mood, clearer skin",
                      color: "pink"
                    },
                    {
                      hormone: "Progesterone",
                      description: "Maintains the uterine lining after ovulation. Drops if pregnancy doesn't occur.",
                      effects: "Can cause bloating, breast tenderness, mood changes", 
                      color: "purple"
                    },
                    {
                      hormone: "FSH & LH",
                      description: "Brain hormones that signal the ovaries to prepare and release eggs.",
                      effects: "Control the timing of your cycle",
                      color: "green"
                    }
                  ].map((hormone, index) => (
                    <div key={index}>
                      <h4 className={`text-${hormone.color}-600 mb-2`}>{hormone.hormone}</h4>
                      <p className="text-sm text-gray-700 mb-2">{hormone.description}</p>
                      <div className="text-xs text-gray-600">
                        <strong>Effects:</strong> {hormone.effects}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-orange-600 mb-4">How Hormones Affect You</h4>
                  <div className="space-y-3">
                    {[
                      { week: "Week 1 (Period)", description: "Lower energy, need for rest, cramps possible", color: "pink" },
                      { week: "Week 2 (Pre-ovulation)", description: "Rising energy, better mood, increased confidence", color: "green" },
                      { week: "Week 3 (Post-ovulation)", description: "Peak energy, then gradual decline", color: "purple" },
                      { week: "Week 4 (Pre-period)", description: "PMS symptoms, mood changes, cravings", color: "blue" }
                    ].map((week, index) => (
                      <div key={index} className={`bg-${week.color}-50 p-3 rounded-lg`}>
                        <h5 className={`text-${week.color}-600 text-sm mb-1`}>{week.week}</h5>
                        <p className="text-xs">{week.description}</p>
                      </div>
                    ))}
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
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Doctor Q&A Component
export function DoctorQA() {
  const qas = [
    {
      question: "At what age do most girls get their first period?",
      answer: "Most girls get their first period between ages 10-15, with the average being around 12-13 years old. It's completely normal for it to happen earlier or later than this range."
    },
    {
      question: "How much bleeding is normal during a period?",
      answer: "Normal period flow varies greatly between individuals. Generally, losing 30-40ml of fluid over 3-7 days is typical. If you're changing your pad or tampon every hour for several hours, consult a healthcare provider."
    },
    {
      question: "Is it normal to have irregular periods when you first start?",
      answer: "Yes, it's very normal! It can take 1-2 years for your menstrual cycle to become regular after your first period. Your body is still learning and adjusting to hormonal changes."
    },
    {
      question: "What can I do about menstrual cramps?",
      answer: "Mild to moderate cramps are normal. Try heat therapy, gentle exercise, over-the-counter pain relievers (with parent permission), and relaxation techniques. Severe pain that interferes with daily activities should be evaluated by a doctor."
    },
    {
      question: "Can I swim or exercise during my period?",
      answer: "Absolutely! Physical activity can actually help reduce cramps and improve mood. For swimming, tampons or menstrual cups work best. Listen to your body and rest if needed."
    },
    {
      question: "When should I see a doctor about my period?",
      answer: "Consult a healthcare provider if you experience: periods lasting longer than 7 days, extremely heavy bleeding, severe pain, periods more frequent than every 21 days or less frequent than every 35 days after the first year, or any concerning symptoms."
    },
    {
      question: "Is it normal to feel emotional before or during my period?",
      answer: "Yes, hormonal changes can affect mood. Many people experience mood swings, irritability, or feeling more emotional. However, if these feelings significantly impact your daily life, it's worth discussing with a healthcare provider."
    },
    {
      question: "What foods should I eat during my period?",
      answer: "Focus on iron-rich foods (leafy greens, lean meats), calcium sources (dairy, fortified foods), and plenty of water. Limit excessive caffeine and sugar, which can worsen mood swings and cramps."
    },
    {
      question: "How do I know if I have a menstrual disorder?",
      answer: "Warning signs include: no period by age 16, periods stopping for 3+ months without pregnancy, bleeding between periods, periods lasting more than 7 days, or pain so severe it interferes with daily activities."
    },
    {
      question: "Can stress affect my menstrual cycle?",
      answer: "Yes, stress can significantly impact your cycle, causing periods to be late, early, heavier, lighter, or even skipped. Managing stress through healthy coping strategies can help regulate your cycle."
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-purple-600">Ask a Doctor - Q&A with Dr. Vani Venkatachalam</CardTitle>
          <CardDescription>
            Common questions answered by a pediatrician specializing in adolescent health
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {qas.map((qa, index) => (
          <Card key={index} className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-purple-600 mb-3">Q: {qa.question}</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-purple-700">Dr. Venkatachalam:</strong> {qa.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-purple-50 border-purple-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Stethoscope className="h-6 w-6 text-purple-600" />
            <h3 className="text-purple-700">A Note from Dr. Venkatachalam</h3>
          </div>
          <p className="text-purple-600 italic leading-relaxed">
            "Remember, every person's menstrual experience is unique. Don't hesitate to ask questions and seek help when needed. 
            Your menstrual health is an important part of your overall well-being, and there's no question too small or embarrassing to ask a healthcare provider."
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
