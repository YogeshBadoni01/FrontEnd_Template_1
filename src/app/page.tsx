import Hero from './components/Hero'
import ApplicationChoose from './components/ApplicationChoose'
import ControlCustom from './components/ControlCustom'
import EveryThingNeed from './components/EveryThingNeed'
import CustomerCarosal from './components/CustomerCarousel'
import WalletExperinece from './components/WalletExperinece'
import Technology from './components/Technology'
import PicingPlan from './components/PicingPlan'
import FeatureWithPremium from './components/FeatureWithPremium'

export default function Home() {

  

  return (
    <>
      <Hero/>
    {/* <div className=" max-w-[1400px] mx-auto w-full relative px-[30px] " > */}
      <ApplicationChoose/>
      <ControlCustom/>
      {/* <div className="bg-[#fcf6fa] rounded-ss-[900px] bg_section  pt-10 pb-[100px] md:pt-[60px] md:pb-[120px] lg:pb-[100px] xl:pt-[100px] xl:pb-[140px] xxl:pt-[140px] xxl:pb-[200px]"> */}
      <div className="bg-[#fcf6fa] rounded-ss-[900px] bg_section  pt-10  md:pt-[60px] md:pb-[120px] lg:pb-[100px] xl:pt-[100px]  xxl:pt-[140px]   pb-[70px] hlg:pb-[90px] xl:pb-[120px] xxl:pb-[160px]">
          <EveryThingNeed/>
          <CustomerCarosal/>
      </div>
      <WalletExperinece/>
      <Technology/>
      <PicingPlan/>
    {/* </div> */}
      <FeatureWithPremium/>
    </>
  )
}
