import { Container } from '@mantine/core'
import React from 'react'
import './Support.scss';
import qr from '../../../images/qr.jpeg';

const Support = () => {
  return (
    <div className='support'>
      <h4>Мектептің жаны – мұғалім. Мұғалім қандай болса, мектеп сондай болмақшы. Яғни, мұғалім білімді болса, ол мектептен балалар көбірек білім алып
        шықпақшы. Солай болған соң, ең әуелі мектепке керегі – білімді, педагогика, методикадан хабардар, жақсы оқыта білетін мұғалім.
      </h4>
      <h4 className='yellow'>
        Ахмет Байтұрсынұлы
      </h4>
      <br />
      <h4>
        Елімізге болашақта пайдалы ұлағатты ұстаздар шығару мақсатында жасалынып жатқан жұмыстарға қол ұшын созуға ниет білдірсеңіз <span className='yellow'>QR</span>-ды сканерлеңіз
      </h4>
      <div>
        <img src={qr} width="250" />
      </div>
      <br />
      <div>
        <h4>
          <div>
            Компания: ЧАСТНЫЙ «ФОНД РАЗВИТИЯ ЧЕЛОВЕЧЕСКОГО КАПИТАЛА QALAM HUMAN CAPITAL DEVELOPMENT»
          </div>
          <div>
            Адрес: Казахстан, Усть-Каменогорск, Набережная Имени Е.П.Славского,дом 16, кв/офис 203
          </div>
          <div>
            БИН (ИИН): 210540032722
          </div>
          <div>
            Банк: АО "KaspiBank"
          </div>
          <div>
            КБе: 18
          </div>
          <div>
            БИК: CASPKZKA
          </div>
          <div>
            Номер счёта: KZ70722S000008978648
          </div>
        </h4>
      </div>
    </div>
  )
}

export default Support