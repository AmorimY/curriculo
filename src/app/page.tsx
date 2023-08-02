import Image from 'next/image'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'
import './components/styles/home.scss'
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtn } from './components/social-btns/social-btns'

export default function Home() {
  return (
    <main className='conteiner'>
      <Header/>
      <Experience/>
          <Info/>
          <div className="buttons">
          <SocialBtn/>
            <a className='btn-primary' href='mailto:rafael.amorimoliveira@hotmail.com'>
              Contact me
              <EmailIcon/>
              </a>
          </div>


    </main>
  )
}
