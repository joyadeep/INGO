import { Button } from "@/components/ui/button"
import { Banknote, CreditCard, Globe2, Heart, Landmark } from "lucide-react"

const dontaionOptions=[
    {
        name:"Cash or Cheque",
        icon:<div className="bg-purple-400/20 w-20 h-20 rounded-full flex items-center justify-center"><Banknote size={32} className="text-purple-400"/></div>,
        description:"Donations and Zakat contributions in the form of Cash or Cash Cheque can be given to COMPANY, at your doorstep"
    },
    {
        name:"Debit/Credit Card",
        icon:<div className="bg-blue-400/20 w-20 h-20 rounded-full flex items-center justify-center"><CreditCard size={32} className="text-blue-400"/></div>,
        description:"You can send in your Donations and Zakat on the Charity Foundation website,using Nepal Bank Secure Payment portal througt a Debit/Credit Card."
    },
    {
        name:"Direct Bank Transfer",
        icon:<div className="bg-red-400/20 w-20 h-20 rounded-full flex items-center justify-center"><Landmark size={32} className="text-red-400"/></div>,
        description:"Transfer your Donations and Zakat to he Charity Foundation Bank Accounts"
    },
    {
        name:"Global Giving",
        icon:<div className="bg-yellow-400/20 w-20 h-20 rounded-full flex items-center justify-center"><Globe2 size={32} className="text-yellow-400"/></div>,
        description:"THF is registered on Global Giving to facilitate our friends/ well wishers abroad"
    }
]

const Donation = () => {
  return (
    <div className="pb-20">
        <div className="h-[400px] bg-amber-50 flex items-center px-36 gap-28">
            <div className="w-full flex flex-col gap-4">
                <h2 className="text-6xl font-bold"><span className="text-green-500">Charity</span> is not About <span className="text-green-500">Pity.</span> It is About <span className="text-green-500">Love.</span></h2>
                <p className="">Empower Change: Support Our Cause and Make a Difference Through Your Generous Contributions Today!</p>
                
            </div>
            <div className="w-full relative">
                <img src={"https://images.pexels.com/photos/1427430/pexels-photo-1427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} className=" absolute -top-20 shadow-2xl w-80 h-80 object-cover rounded-md grayscale"   />
            </div>
        </div>

        <div className="h-fit w-full pt-20 px-20 flex items-center gap-20">
            <div className="w-full">
                <h2 className="text-5xl font-extrabold mb-2">Ways to Donate</h2>
                <p>Donate now and help us make children's future bright.</p>
                <Button className="w-fit mt-10" variant={'primary'}>Donate Now <Heart className="ml-3"/></Button>
            </div>
            <div className="w-full flex flex-wrap gap-5 text-center">
                {
                    dontaionOptions.map((option)=>(
                        <div className="flex flex-col gap-2 w-60">
                            <div className="mx-auto w-fit">{option.icon}</div>
                            <p className="text-lg font-semibold">{option.name}</p>
                            <p className="text-sm">{option.description}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Donation