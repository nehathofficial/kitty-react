import Banner from '../Components/Home/Banner'
import Faq from '../Components/Home/Faq'
import HowItWorks from '../Components/Home/HowItWorks'
import Testimonial from '../Components/Home/Testimonial'
import WhyChooseKitty from '../Components/Home/WhyChooseKitty'
import Layout from '../Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <Banner />
      <WhyChooseKitty />
      <HowItWorks />
      <Faq />
      <Testimonial />
    </Layout>
  )
}
 
export default Home