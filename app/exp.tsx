import './globals.css'

import Image from 'next/image'
import dbnotfull from'./dbnotfull.png'
import glow from './glow.png'
import nft from './nft.png'

const ExpCards = () => {
    return(
    <>
    <div className="card-line-container">
        <div className="cardAbout left-card" style={{ gridRow: 1 }}>
          <div className="popup">
                <div>I used to do meetings with my club memebers</div>
              </div>
            <div className="image-container">
                <Image src={glow} width={100} height={100} alt="PFP"/>
            </div>
            <div className="text-content">
             <div>Vice President</div>
            </div>
        </div>
        <div className="cardAbout right-card" style={{ gridRow: 2 }}>
            <div className="image-container1">
            <Image src={nft} width={100} height={300} alt="PFP"/>
            </div>
            <div className="text-content">
              <div>Articles</div>
               <div className="popup">
                <div>I used to do meetings with my club memebers</div>
              </div>
            </div>
        </div>
        <div className="cardAbout left-card" style={{ gridRow: 3 }}>
            <div className="image-container2">
            <Image src={dbnotfull} width={100} height={400} alt="PFP"/>
            </div>
            <div className="text-content1">
             <div>Dashboard Project</div>
               <div className="popup">
                <div>I used to do meetings with my club memebers</div>
              </div>
            </div>
     </div>
    </div>
    </>
    )
}
export default ExpCards;