import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen" >
        <Card className="w-11/12 md:w-2/5 bg-slate-100">
            <CardHeader className="text-center">
                <CardTitle className="text-4xl" >Login<span className="text-red-500">.</span></CardTitle>
            </CardHeader>
            <form>
                    <CardContent className="flex flex-col gap-3">
                      <div>
                        <Label>Email</Label>
                        <Input type="email" />
                        <p className="text-xs text-red-500 h-2"></p>
                      </div>
                        <div>
                        <Label>Password</Label>
                        <Input type="password" />
                        <p className="text-xs text-red-500 h-2"></p>
                        </div>

                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Login</Button>
                    </CardFooter>
                </form>
        </Card>
    </div>
  )
}

export default Login