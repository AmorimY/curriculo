import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>Experiencia em projetos pessoais e acadêmicos.</p>
          <div className="experience-time">
            <div className="experience-language">
              <Image
              src="/reactt.png"
                alt="React Logo"
                width={40}
                height={40}
                priority
              />
              <div className="experience-unit">
                <div className="experience-measure measure-1">
                  <span>6 meses</span>
                </div>
              </div>
            </div>
            <div className="experience-language">
              <Image
              src="/ts.png"
                alt="Typescript Logo"
                width={40}
                height={40}
                priority
              />
              <div className="experience-unit">
                <div className="experience-measure measure-3">
                  <span>1 Ano</span>
                </div>
              </div>
            </div>
            <div className="experience-language">
              <Image
              src="/js.png"
                alt="Javascript Logo"
                width={40}
                height={40}
                priority
              />
            <div className="experience-unit">
              <div className="experience-measure measure-3">
                <span>1 Ano</span>
              </div>
            </div>
            </div>
            <div className="experience-language">
              <Image
              src="/javaa.png"
                alt="Java Logo"
                width={40}
                height={40}
                priority
              />
              <div className="experience-unit">
                <div className="experience-measure measure-1">
                  <span>6 meses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )}