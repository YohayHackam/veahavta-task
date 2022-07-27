import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { ContactHeading, ItemHeader } from '../data-components/header-text'
import { ContextText, BaseTextarea } from '../data-components/content-text'
import { CircleImage } from '../data-components/circle-icon'
import ContactForm from '../form-components/contact-form'

export default function ContactUs({ data }: HomePageType) {
  return (
    <>
      <div className="ContactUsBackground mt-64" id="contact-us">
        <div className="circlesBackground" />
        <div className="AboutWrapper mr-80 mt-40 ">
          <ContactHeading className=" text-header-blue font-bold bg-white w-max rounded-full text-center px-6 py-1 mb-6">
            {data.homepage.contactUsHeading}
          </ContactHeading>
          <ItemHeader className=" text-5xl mb-4">
            {data.homepage.contactUsTitle}
          </ItemHeader>
          <ContextText className="whitespace-normal ml-24">
            {data.homepage.contactUsText}
          </ContextText>
          <WrapperLarge className=" grid-cols-1fr-1fr ">
            {data?.common?.contactUsLinks?.map((link, idx) => (
              <WrapperLarge
                className=" grid-cols-auto-1fr items-center"
                key={idx}
              >
                <CircleImage src={link.imagePath} alt={link.linkType} />
                <WrapperLarge className=" mr-4">
                  <BaseTextarea>{link.text}</BaseTextarea>
                  <BaseTextarea>{link.linkValue}</BaseTextarea>
                </WrapperLarge>
              </WrapperLarge>
            ))}
          </WrapperLarge>
          <ContactForm />
        </div>
      </div>
      <style jsx>
        {`
          div.ContactUsBackground {
            position: relative;
            width: 1920px;
            height: 680px;
            background: #f4f3fd;
            z-index: -1;
          }
          div.circlesBackground {
            position: absolute;
            width: 1920px;
            height: 680px;
            z-index: -1;
            opacity: 0.2;
            background: url('/img/contact/Vector-1.svg') 100% 30px no-repeat,
              url('/img/contact/Vector.svg') 0 100% no-repeat;
          }

          div.AboutWrapper {
            width: 500px;
          }
        `}
      </style>
    </>
  )
}
