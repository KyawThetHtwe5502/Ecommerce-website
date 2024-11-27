
import BestSelling from '../components/BestSelling'
import Categories from '../components/Categories'
import CategoryBanner from '../components/CategoryBanner'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import HeroSection from '../components/HeroSection'
import HrSection from '../components/HrSection'
import OurProducts from '../components/OurProducts'
import TodayProducts from '../components/TodayProducts'


const Home = () => {
  return (
    <div>
        <Heading/>
        <HeroSection/>
        <TodayProducts/>
        <HrSection/>
        <Categories/>
        <HrSection />
        <BestSelling/>
        <CategoryBanner/>
        <OurProducts/>
        <Feature/>
        <Footer/>
    </div>
  )
}

export default Home