import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";
import { Stethoscope, MessageCircle } from "lucide-react";

export function DoctorQA() {
  const qaData = [
    {
      question: "Why are my periods so different from my friends?",
      answer: "Every girl's body is different. Some have shorter periods than others; some bleed less and some bleed more. Go to the doctor if your period is excessively painful, if it lasts longer than seven days or makes you skip school. These are signs of a hormonal imbalance or excessive menstrual bleeding.",
      category: "Normal Variation"
    },
    {
      question: "Is it bad if I skip a month sometimes?",
      answer: "Period skipping is normal, especially for the first few years. Your body is still adjusting to it all. Still, if you miss for several months or experience accompanying symptoms like a weight change or hirsutism, it wouldn't hurt to see a physician.",
      category: "Normal Variation"
    },
    {
      question: "Why does my mood get really bad before my period?",
      answer: "This is probably premenstrual syndrome or PMS. Right before your period, your hormones drop and this may cause sadness, anger, anxiety. You can try journaling, talking to someone, and light exercise such as walking or stretching. If you're concerned, mention it to a physician; it could be PMDD which is a more extreme situation, but something that can be treated.",
      category: "Emotional Changes"
    },
    {
      question: "I feel super tired during my period. Is that normal?",
      answer: "Yes, that is normal. You're losing blood and your body's working overtime. Make sure you eat iron-rich foods (beans, leafy greens, fortified cereals) and hydrate. However, if you feel faint or lightheaded frequently, a physician might check your blood iron status.",
      category: "Physical Symptoms"
    },
    {
      question: "Sometimes I get clumps or clots in my blood—is that bad?",
      answer: "Small clots can be normal (dime-sized or smaller). Blood gets old and you're shedding pieces of tissue. If you constantly pass large clots, however, or find yourself soaking pads in minutes, see a doctor as this can mean excessive menstrual bleeding.",
      category: "Physical Symptoms"
    },
    {
      question: "Am I able to swim or participate in sports on my period?",
      answer: "Yes. You shouldn't allow your period to hold you back from anything. Swimming is made easier with tampons or menstrual cups, and it's no issue to use a pad for other things. Even cramping can be relieved by exercise.",
      category: "Activities"
    },
    {
      question: "Why am I sometimes left with an odour when I am on my period?",
      answer: "Some smell is okay, it's just blood and normal bacteria. But if they smell really strong, it could be a sign of an illness or if your pad has not been changed often enough. Consult a doctor if the smell is pungent or fishy, and attempt to switch the pads on a regular basis.",
      category: "Hygiene"
    },
    {
      question: "Is it okay to be embarrassed to have my period?",
      answer: "Totally normal, but you don't have to be. Every girl gets their period, and it's a normal and healthy part of life. Talking about it makes the stigma smaller.",
      category: "Emotional Support"
    },
    {
      question: "What do I do if I don't have any pads or tampons—what can I use?",
      answer: "They can be used with soft, clean towels folded thick enough to soak up flow, like cotton cloth or worn-out T-shirts. Keep them clean in a clean bag after washing them with soap and water and, if possible at all, drying out in the sun. This is referred to as the use of reused cloth pads, and done the right way, it's safe.",
      category: "Emergency Solutions"
    },
    {
      question: "How do I stay clean if I cannot shower every day?",
      answer: "Gently wash your private area from the front to the back with a clean, wet cloth saturated with water once or twice a day. Wash only the outside. Wearing pantyhose or underwear made of a breathable material is also useful.",
      category: "Hygiene"
    },
    {
      question: "How do I keep the same cloth or pad on all day?",
      answer: "Change it every 6 to 8 hours if at all possible. To minimize irritation, fold over a fresh layer of cloth over the soiled one if you can't. Wash or rinse as soon as you can. Having one pad on for extended periods can lead to infection or rash.",
      category: "Hygiene"
    },
    {
      question: "What do I do if I lack products or am too shy to ask?",
      answer: "Free period products are available at some schools, community centers, shelters, and even food pantries; these are usually low-key and not judged. You may be able to receive assistance from a teacher, school nurse, or other adult if you are comfortable with them. Many others want to help.",
      category: "Access & Support"
    },
    {
      question: "Why do my cramps worsen some months?",
      answer: "Cramps happen when your uterus muscles contract to shed its lining. Other times your stress or hormonal level may make them worse. You can relieve them with exercise, a heat pack, and hydration. If cramps force you to vomit or miss school regularly, that's not normal—see a doctor.",
      category: "Physical Symptoms"
    },
    {
      question: "Why do I get bloated or puffy before my period?",
      answer: "The hormonal changes cause water retention in your body. It is temporary. Drinking water and reducing super salty foods can help.",
      category: "Physical Symptoms"
    },
    {
      question: "What do I do if my period bleeds through my clothes at school?",
      answer: "It happens to us all. If you can, wrap a sweatshirt around your waist and go to the bathroom to change your pad or insert additional toilet paper temporarily. If you can, bring an additional set of underwear with you.",
      category: "Emergency Solutions"
    },
    {
      question: "Is it wrong that I use toilet paper instead of a pad for a while?",
      answer: "It's okay as an extremely short-term solution, but it will not absorb well and will deteriorate. Change it often and switch to a pad or clean cloth as quickly as possible.",
      category: "Emergency Solutions"
    },
    {
      question: "What if I don't have a location where I can change my pad or cloth in private?",
      answer: "Try to make arrangements for times when you can have some privacy, even if just for a few minutes. Public restrooms, school nurse's offices, or even standing in an alleyway with a friend standing guard can help.",
      category: "Privacy"
    },
    {
      question: "How do I avoid rashes when changing isn't an option?",
      answer: "If you can't change your pad often, putting a thin layer of petroleum jelly (if you have it) onto the skin will reduce friction. Wearing loose clothes also facilitates air circulation.",
      category: "Hygiene"
    },
    {
      question: "What if I can't wash my hands before or after changing?",
      answer: "If you can't access soap and water, at least apply hand sanitizer before and after. If you can't have those, try to touch only the clean side of pads or cloths and wash as soon as possible after.",
      category: "Hygiene"
    },
    {
      question: "How do I keep my reusable cloths clean if I don't have the ability to dry them in the sun?",
      answer: "Sunlight is most effective in killing bacteria, but if that is not available, dry them in the cleanest, driest spot you can think of—such as hanging them in a well-ventilated area. Dry them thoroughly before reusing to prevent infections.",
      category: "Hygiene"
    }
  ];

  const categories = [
    { name: "Normal Variation", color: "bg-blue-100 text-blue-800" },
    { name: "Physical Symptoms", color: "bg-green-100 text-green-800" },
    { name: "Emotional Changes", color: "bg-purple-100 text-purple-800" },
    { name: "Hygiene", color: "bg-pink-100 text-pink-800" },
    { name: "Activities", color: "bg-orange-100 text-orange-800" },
    { name: "Emergency Solutions", color: "bg-red-100 text-red-800" },
    { name: "Access & Support", color: "bg-yellow-100 text-yellow-800" },
    { name: "Emotional Support", color: "bg-indigo-100 text-indigo-800" },
    { name: "Privacy", color: "bg-teal-100 text-teal-800" }
  ];

  const getCategoryColor = (category: string) => {
    const categoryObj = categories.find(cat => cat.name === category);
    return categoryObj ? categoryObj.color : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pink-600">
            <Stethoscope className="h-5 w-5" />
            Ask a Doctor
          </CardTitle>
          <CardDescription>
            Common questions about menstruation answered by pediatrician Dr. Vani Venkatachalam of Care & Cure Pediatrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg mb-6">
            <MessageCircle className="h-5 w-5 text-blue-600" />
            <p className="text-sm text-blue-700">
              These answers are from real questions asked by young girls. If you have concerns not covered here, 
              please speak with a healthcare provider, parent, or trusted adult.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-purple-600">Frequently Asked Questions</CardTitle>
          <CardDescription>
            Click on any question to see the doctor's answer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {qaData.map((qa, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-start gap-3 w-full">
                    <div className="flex-1">
                      <p className="text-sm">{qa.question}</p>
                    </div>
                    <Badge variant="outline" className={`${getCategoryColor(qa.category)} text-xs flex-shrink-0`}>
                      {qa.category}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2">
                    <p className="text-sm text-gray-700 leading-relaxed">{qa.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <CardContent className="p-6">
          <h3 className="text-lg mb-4 text-purple-700">Remember</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-pink-600 mb-2">You're Not Alone</h4>
              <p className="text-gray-700">
                Every girl goes through this. It's completely normal to have questions and concerns 
                about your period and your changing body.
              </p>
            </div>
            <div>
              <h4 className="text-pink-600 mb-2">When to Seek Help</h4>
              <p className="text-gray-700">
                Don't hesitate to talk to a healthcare provider, parent, school nurse, or trusted 
                adult if you have concerns that aren't answered here.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
