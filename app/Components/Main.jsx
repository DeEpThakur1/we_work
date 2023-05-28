import Image from 'next/image'
import React from 'react'




export const Main = () => {


    return (
        <main>
            <div className='mainHeading'>

                <h1>WeWork + Salesforce</h1>

                <button className='pSBtn'>Publish/Share</button>
            </div>

            <Image
                src="/hero.svg"
                alt="hero"
                width={1200}
                height={191}
                className='herobg'

            />


            <div className="weWork" >

                <Image
                    src="/wework 1.svg"
                    alt='we work'
                    width={77}
                    height={77}
                    className='weworkImg'
                />

                <Image
                    src="/plush.svg"
                    alt='+'
                    width={17.5}
                    height={17.5}


                />

                <Image
                    src="/sale.svg"
                    alt='sale'
                    width={98.28}
                    height={88.56}
                    className='weworkImg'
                />

            </div>
            <div className='footerHading'>

                <h3>Project Scope Recap </h3>

                <section className='mutualAP'>

                    <p>Mutual Action Plan</p>

                    <span >3%</span>

                </section>


            </div >
            <div id="progressBar">

                <span className="progressFirst"></span>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div id="progressLast"></div>
            </div>

        </main>
    )
}
