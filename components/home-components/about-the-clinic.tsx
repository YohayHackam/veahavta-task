/* eslint-disable @next/next/no-img-element */
import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { Heading, ItemHeader } from '../data-components/header-text'
import { Text } from '../data-components/paragraph-text'
import { BlueButton } from '../data-components/button-text'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge className="mt-10 mx-5 lg:mx-auto lg:grid-cols-1fr-1fr lg:mt-24.1 lg:gap-2.9 lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className=" flex justify-center ">
        <img src={'/img/about/Rectangle 8.png'} alt="" />
      </div>
      <div className="mt-10 lg:mr-24" id={'about-us'}>
        <Heading className=" text-xl_1_5 text-header-blue mb-2 sm:text-xl_2_5 ">
          {data.homepage.aboutHeading}
        </Heading>
        <ItemHeader className=" text-4xl mb-9 sm:text-xl_5_5 sm:mb-13">
          {data.homepage.aboutTitle}
        </ItemHeader>
        <Text className="text-lg">{data.homepage.aboutUsText}</Text>
        <BlueButton
          className="text-xl_1_5 mt-5.1 sm:mt-8.1 "
          text={data.homepage.aboutUsButton}
        />
      </div>
    </WrapperLarge>
  )
}
