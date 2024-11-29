import { Link } from "react-router-dom";
import Container from "./Container"
import { Input } from "./ui/input"
import {CiHeart, CiSearch, CiShoppingCart} from "react-icons/ci";



const Heading = () => {
  return (
    <header className="py-5 border-b border-b-slate-500">
        <Container>
        <div className="flex items-center justify-between">
        <div className="flex justify-between items-center gap-x-48">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <ul className="flex items-center gap-x-12">
            <li>Home</li>
            <li>Contact</li>
            <Link to="/about">About</Link>
            <li>Sign Up</li>
        </ul>
        </div>
        <div className="flex items-center gap-x-12">
            <div className="relative">

        <Input type="email" placeholder="What are you looking for?" className="bg-secondary" />
        <CiSearch className="absolute top-1/3 right-2"  />
            </div>
            <div className="flex items-center gap-x-12">
                <CiHeart/>
                <CiShoppingCart/>
            </div>
        </div>
    </div>
    </Container>
    </header>
    
    
  )
}

export default Heading