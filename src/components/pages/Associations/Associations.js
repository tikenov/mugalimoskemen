import React from 'react'
import './Associations.scss';
import nurorda from '../../../images/nurorda.png';
import dostyk from '../../../images/dostyk.png';
import nis from '../../../images/nis.jpg';
import asar_ume from '../../../images/asar_ume.png';
const Associations = () => {
  return (
    <div className='associations'>
      <div className="text">
        <h4><span className='yellow'>Mugalim</span> Oskemen жобасымен бірлесіп серіктестік мақсатында студенттерге жан-жақты қолдау мақсатында оқу ғимараттарын қолдануға, мамандарменбірге жұмыс
          жасауға, оқу тәжірибесіменбөлісуге және студенттерді тәжірибелікдаму мақсатында жұмыс жасаймыз.</h4>
      </div>
      <div className='row'>
        <a href='https://ukk.nis.edu.kz/'>
          <img src={nis} width="260" />
        </a>
        <b>НАЗАРБАЕВ ЗИЯТКЕРЛІК МЕКТЕБІ</b>
      </div>
      <div className='row'>
        <a href="https://nurordaoskemen.edu.kz/">
          <img src={nurorda} width="280" />
        </a>
        <b>«НҰРОРДА» МЕКТЕП-ЛИЦЕЙІ</b>
      </div>
      <div className='row'>
        <a href="https://www.instagram.com/dostyq.oskemen/">
          <img src={dostyk} width="250" />
        </a>
        <b>«ДОСТЫҚ» БІЛІМ БЕРУ ОРТАЛЫҒЫ</b>
      </div>
      <div className='row'>
        <a href="https://www.instagram.com/dostyq.oskemen/">
          <img src={asar_ume} width="100" />
        </a>
        <b>ASARUME STORE</b>
      </div>
    </div>
  )
}

export default Associations