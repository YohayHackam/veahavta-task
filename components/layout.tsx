import Footer from '@/components/layout-components/footer'
import Header from '@/components/layout-components/header'
import Main from '@/components/layout-components/main'
import { useLocale } from '@/lib/hooks'
import theme from '@/lib/theme.preval'

export default function Layout({ children, pageProps }: any) {
  const { dir, locale, router } = useLocale()
  if (['/404', '/500'].includes(router.pathname)) {
    return <>{children}</>
  }
  return (
    <>
      <div className="app-wrapper" dir={dir}>
        <Header data={pageProps.data.common} />
        <Main>{children}</Main>
        <Footer data={pageProps.data.common} />
      </div>
      <style jsx global>
        {`
          html {
            min-height: 100% !important;
            height: 100%;
            scroll-behavior: smooth;
          }
          body {
            min-height: 100% !important;
            height: 100%;
          }
          #__next {
            min-height: -webkit-fill-available;
            height: 100%;
          }
          .app-wrapper {
            display: grid;
            flex-direction: column;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr auto;
            min-height: -webkit-fill-available;
            height: 100%;
          }

          * {
            box-sizing: border-box;
          }

          *:focus-visible {
            outline: none !important;
            box-shadow: 0 0 0 2px ${theme.colors.primary} !important;
            border-radius: ${theme.borderRadius['2xl']};
          }
        `}
      </style>
    </>
  )
}
