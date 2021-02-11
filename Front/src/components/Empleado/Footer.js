import iconfacebook from '../../image/iconfacebook.png'
import iconlinkedin from '../../image/iconlinkedin.png'
import icontwitter from '../../image/icontwitter.png'

import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <ul className='politicaTerminos'>
                    <li>Terminos y condiciones</li>
                    <li>Politica de privacidad</li>
                    <li>Politica de cookies</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <ul className='icons'>
                    <li><a href='https://www.facebook.com/' target="_blank"><img src={iconfacebook} alt='facebook' /></a></li>
                    <li><a href='https://www.linkedin.com/' target="_blank"><img src={iconlinkedin} alt='linkedin' /></a></li>
                    <li><a href='https://www.twitter.com/' target="_blank"><img src={icontwitter} alt='twitter' /></a></li>
                </ul>
            </div>
            <p>© Sharp View 2021</p>
        </footer>
    )
}

export default Footer