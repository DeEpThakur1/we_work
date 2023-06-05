import Image from 'next/image'




export const Main = () => {


    return (
        <main className='main__section'>
            <div className='main__section--heading--container'>

                <h1 className='main__section--heading'>WeWork + Salesforce</h1>

                <button className='main__section--btn'>Publish/Share</button>
            </div>

            <div className="main__section--bg" />


            <div className="main__section--work" >

                <Image
                    src="/wework 1.svg"
                    alt='we work'
                    width={77}
                    height={77}
                    className='main__section--work--img'
                />

                <Image
                    src="/plush.svg"
                    alt='+'
                    width={17.5}
                    height={17.5}
                    className='main__section--work--img'
                />

                <Image
                    src="/sale.svg"
                    alt='sale'
                    width={98.28}
                    height={88.56}
                    className='main__section--work--img'
                />

            </div>

            <div className='main__section--container2'>

                <h3 className='main__section--container2--heading' >Project Scope Recap </h3>

                <section className='main__section--container2--progress'>

                    <p className='main__section--container2--progress--heading'>Mutual Action Plan</p>

                    <span className='main__section--container2--progress--heading-number'>3%</span>

                </section>


            </div >
            <div className="main__section--progress-bar">

                <span className='main__section--progress-bar--first-dot'></span>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--dot"></div>
                <div className="main__section--progress-bar--last-dot"></div>
            </div>

        </main>
    )
}