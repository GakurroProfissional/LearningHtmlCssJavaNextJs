import './globals.css'
import './globalsMenu.css'
import './globalsTags.css'
import './globalsPages.css'
import Menu from './menu/page'
import Presentation from './presentation/page'
import Spacing from './spacing/page'
import Footer from './footer/page'
import Image from 'next/image'
import SpacingLarge from './spacingLarge/page'


export const metadata = {
  title: 'Portifólio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>

        <Image
          src='/images/bgCachu1.jpg'
          alt="backg"
          className="imagePositionPresentation" /*css ta no pages presentation*/
          fill
        />

        <Menu />
        <Spacing />
        <Presentation />

        {children}
        <SpacingLarge />
        <Footer />
      </body>
    </html>
  )
}
