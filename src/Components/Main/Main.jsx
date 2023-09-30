import React,{useEffect} from 'react'
import "./main.css"
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import img from '../../Assets/img.webp'
import img1 from '../../Assets/img1.webp'
import img2 from '../../Assets/img2.webp'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc : img,
    destTitle : 'Bora-Bora Beach',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$700',
    description : 'For those looking for a trip that combines total adventure with complete relaxation, this 14-night exploration of French Polynesia and New Zealand is ideal.You will start with four nights in Bora Bora  a tropical paradise of white sandy beaches and turquoise lagoons.'
  },
  {
    id:2,
    imgSrc : img1,
    destTitle : 'Mekka Madina',
    location : 'Saudi-Arabia',
    grade : 'Holy Place',
    fees : '$500',
    description : 'Mecca is a city located in the Sirat Mountains in western Saudi Arabia, inland from the Red Sea coast and Medina, officially known as Al-Madinah al-Munawwarah, is a city located on the western side of Saudi Arabia, along the Red Sea coast.'
  },
  {
    id:3,
    imgSrc : img2,
    destTitle : 'Aqsa-Masjid',
    location : 'Palistine',
    grade : 'Beautiful mosque',
    fees : '$600',
    description : 'Al-Aqsa Mosque (Arabic: جامع الأقصى, romanized: Jāmiʿ al-Aqṣā, lit. (congregational mosque of Al-Aqsa), also known as the Qibli Mosque or Qibli Chapel (Arabic: المصلى القبلي, romanized: al-muṣallā al-qiblī, lit. (prayer hall of the qibla (south)),[2] is a congregational mosque or prayer hall in the Al-Aqsa mosque compound in the Old City of Jerusalem. In some sources the building is also named al-Masjid al-Aqṣā,[3][4][5] but this name primarily applies to the whole compound in which the building sits, which is itself also known as "Al-Aqsa Mosque".[6] The wider compound is known as Al-Aqsa or the Al-Aqsa Mosque.'
  },

{
    id:4,
    imgSrc : img3,
    destTitle : 'Eiffel TOwer',
    location : 'Paris',
    grade : 'Tower',
    fees : '$1000',
    description : 'The symbol of Paris and one of the most photographed structures in the world, a visit to the Eiffel Tower is a must for all travelers. Few landmarks inspire such a passion for travel as this single iron structure.'
  },
  {
    id:5,
    imgSrc : img4,
    destTitle : 'Machu Pichu',
    location : 'South America',
    grade : 'Mountains',
    fees : '$1500',
    description : 'Much of the attraction comes from its location, high in the jungle-clad mountains of Peru. Set on a high plateau with soaring green mountains, the setting is surreal. The sheer tenacity of the original builders to create this amazing place in what would have been impenetrable jungle, is, in itself, impressive.'
  },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
    },[])
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* high order array method(map) by using list of onject in one array */}

        {
          Data.map(({id , imgSrc , destTitle , location , grade , fees , description})=>{
               return( 
                <div key={id}
                data-aos='fade-up' className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex"> 
                   <HiOutlineLocationMarker className='icon'/> <span className='name'>{location}</span>  
                   </span>

                   <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                   </div>

                   <div className="desc">
                    <p>{description}</p>
                   </div>
                   <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                   </button>
                  </div>
                </div>
           )
          })
        }
      </div>
    </section>
  )
}

export default Main
