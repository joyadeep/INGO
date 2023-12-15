import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram } from "lucide-react"

const Contact = () => {
  return (
    <div className="h-screen flex w-full justify-between bg-hero-pattern">
     <div className="pl-14 w-full hidden md:flex flex-col justify-center gap-14">
        <div>
        <h1 className="text-6xl font-extrabold">We're here</h1>
        <p className="text-lg mt-3 text-black tracking-tight">Our door is always open for a good cup of coffee.</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold tracking-tight mb-3">Our Office</h4>
          <p className="font-semibold">Sundahar, Kathmandu</p>
          <p>+977-01-xxxxxx</p>
          <p>test@test.com</p>
          <div className="flex gap-3 pt-4">
            <Facebook size={18}/>
            <Instagram size={18}/>
          </div>
        </div>
     </div>

    <div className="w-full flex items-center">
    <Card className="border-none md:border py-0 my-0 shadow-none w-full md:w-3/4">
      <CardHeader className="pt-0 pb-1">
        <CardTitle>Get In touch</CardTitle>
      </CardHeader>
      <form>
        <CardContent className="flex flex-col space-y-4">
          <div>
            <Label>FullName</Label>
            <Input type="text"/>
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email"/>
          </div>
          <div>
            <Label>Message</Label>
            <Textarea className="resize-none"/>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant={"primary"} className="w-full">Send</Button>
        </CardFooter>
      </form>
    </Card>
    </div>


    </div>
  )
}

export default Contact