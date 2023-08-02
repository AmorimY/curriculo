
import Image from 'next/image'
import './header.scss'

export function Header(){
    return(
        <>
                <div className="header">
            <div>
              <h1>Hi i am Rafael Amorim</h1>
              <h2>Sou um desenvolvedor de software</h2>
              <p>Sou apaixonado por tecnologia e um entusiasta da programação em busca de minha primeira oportunidade na área de desenvolvimento/TI. Possuo sólidos conhecimentos em desenvolvimento web, programação e versionamento de código. Tive contato com diversas linguagens, incluindo Java, JavaScript e C#, e estou sempre disposto a encarar novos desafios.
Estou ansioso para contribuir com minha dedicação e habilidades em um ambiente profissional, além de ter facilidade em colaborar e trabalhar em equipe.</p>
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
