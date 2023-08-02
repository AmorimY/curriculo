import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
             <SectionTitle text="Languages"/>
            <div className="languages-info">
              <span>EN - Avançado</span>
              <span>ES - Básico</span>
              <span>PT - Br Nativo</span>
            </div>
            <SectionTitle text="Educação"/>
            <div className="education-info">
            <span>Análise e desenvolvimento de sistemas</span>
            <span>- 3◦ Semestre </span>
            </div>
          </div>
    )
}