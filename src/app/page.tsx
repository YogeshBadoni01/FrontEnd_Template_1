import { BackgroundImage, Box, Center, Chip } from '@mantine/core'
import Image from 'next/image'
import { Theme } from './Theme/Theme'
import Link from 'next/link'
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
      <div className="bg-red-500 rounded-ss-[900px] bg_section bg-opacity-5 pt-[100px]">
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
