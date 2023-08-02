
import Image from 'next/image'
import './header.scss'

export function Header(){
    return(
        <>
                <div className="header">
            <div>
              <h1>Hi i am Rafael Amorim</h1>
              <h2>Sou um desenvolvedor de software</h2>
              <p>Amante da tecnolgia e entusiasta na programação.</p>
              <p>Estou em busca da minha primeira oportunidade</p>
              <p>na área de desenvolvimento/TI, adoro desafios e tenho </p>
              <p>facilidade para lidar com colegas </p>
            </div>
        <Image
              src="/71077121 (1).jpg"
              alt="eu"
              width={325}
              height={277}
              priority
            />
        </div>
        </>
    )
}