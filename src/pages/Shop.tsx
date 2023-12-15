import { Button } from '@/components/ui/button'
import kids from '../assets/images/duck.png'
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'

const categories=[
  {
    name:"Building Blocks",
    href:"#"
  },
  {
    name:"Puzzles",
    href:"#"
  },
  {
    name:"Educational Games",
    href:"#"
  },
  {
    name:"Arts & Crafts",
    href:"#"
  }
]
const Shop = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="h-[350px] flex justify-between gap-10 bg-violet-200">
        <div className='w-full flex flex-col gap-2 justify-center px-10'>
          <h2 className='text-5xl font-extrabold'>Kids learn by playing.</h2>
          <h5 className='text-lg  font-medium'>Buy your kids best educational toys from our exclusive store.</h5>
          <Button className='w-fit mt-5' variant={'primary'}>Shop Now <ShoppingBag className='ml-3'/></Button>

        </div>
        <div className='w-full relative overflow-hidden'>
          <img src={kids} className=' absolute w-[800px] bottom-0 -right-10 '  />
        </div>
      </div>
{/* categories here */}
    <div className='w-full mx-auto flex justify-center whitespace-nowrap  gap-10 overflow-x-auto'>
      {
        categories.map((category)=>(
          <Link to={category.href} className=' tracking-tight text-lg text-slate-600 hover:text-black' key={category.name}>{category.name}</Link>
        ))
      }
    </div>
      <section className='px-10 py-20 grid grid-cols-4 gap-5'>
          {
            [1,2,3,4,5].map((index)=>(
              <Card key={index} className=' cursor-pointer p-0 relative overflow-hidden hover:shadow-md'>
            <CardContent className='p-0'>
              <div className='absolute px-3 left-1 top-1 rounded-md w-fit font-bold bg-red-600 text-white'>-5%</div>
              <img src={"https://images.pexels.com/photos/220137/pexels-photo-220137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} className='w-full h-44'  />
              <div className='px-2 py-2 flex flex-col gap-2'>
                <div className='font-semibold'>Rs. 200.00</div>
                <div className='text-sm'>Teddy Bear collection of 5</div>
                <Button className='w-full' size={'sm'}>Add to Cart <ShoppingBag className='ml-2'/></Button>
              </div>
            </CardContent>
          </Card>
            ))
          }
          
      </section>
    </div>
  )
}

export default Shop