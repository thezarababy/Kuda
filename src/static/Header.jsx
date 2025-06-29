import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { ChevronDown } from 'lucide-react'
import KudaBtn from "../component/reuseable/KudaBtn"
import { Menu} from 'lucide-react'


const Header = () => {
return (
    <header className='flex justify-between items-center h-16  max-w-[1280px] mx-auto mt-3 pb-3 px-6' style={{boxShadow: "0 2px 8px 0 rgba(0,0,0,0.06)"}}>
        <div className='flex '>
            <img src={logo} alt='' className ='mr-4'/>
            <div className='flex items-center font-semibold max-tablet:hidden'>
                 <Link to="/personal" className='flex mr-4'>Personal<ChevronDown className='pt-2 ' color='#40196D
                '/></Link>
                <Link to="/business" className='flex mr-4'>Business <ChevronDown className='pt-2 ' color='#40196D'/></Link>
                <Link to="/company" className='flex mr-4'>Company<ChevronDown className='pt-2 ' color='#40196D'/></Link>
                <Link to="/help" className='flex mr-4'>Help<ChevronDown className='pt-2 ' color='#40196D' /></Link>
            </div>
           
        </div>
        <div className='flex font-semibold max-tablet:hidden '>
           <KudaBtn title="Sign In" />

           <KudaBtn title="Join Kuda" bgColor="#40196D" textColor="white" radius="10px" />

        </div>
        <Menu size={48} className=' hidden max-tablet:block'/>
           
    </header>
)
}

export default Header