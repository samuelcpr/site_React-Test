import Video from '../../assets/img/logoanimado.gif'
import ImgSocial from '../../assets/img/whatsapp.svg'
import { Slid } from './style'

export function SlideShow() {
    return (
        <Slid>
            <div className="slider">



                <img src={Video} alt="" />

                <div className="contatoSocial">
                    <img id="swing" src={ImgSocial} alt="" />

                </div>
                <a href="#" id="habilite-gzip"></a>
            </div>
        </Slid >
    )
}