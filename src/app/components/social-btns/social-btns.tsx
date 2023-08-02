import { GithubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TweeterIcon } from "../icons/tweeter-icon";
import './social-btns.scss'

export function SocialBtn(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/amorim.rfl/" target="_blank" rel="noopener noreferrer">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/rafaelamorimoliveira/"  target="_blank" rel="noopener noreferrer">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/amorimy"  target="_blank" rel="noopener noreferrer">
                <GithubIcon/>
            </a>
            <a href="https://twitter.com/Amorimrfl"  target="_blank" rel="noopener noreferrer">
                <TweeterIcon/>
            </a>

            
        </div>
    )
}