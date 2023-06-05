import Image from 'next/image'
export const Footer = () => {

    return (
        <footer>

            <div className='footer__btn--container'>
                <div className=' btn footer__btn '>
                    <button className='btn footer__btn--bI'>Basic info</button>
                    <button className='btn footer__btn--file'>File</button>
                    <button className='btn footer__btn--m-action'>Mutual Action</button>
                    <button className='btn footer__btn--contact'>Contact</button>
                </div>
                <button className='btn footer__btn--i-action'>Internal Actions</button>
            </div>

            <div className='footer__section'>
                <aside className='footer__section--list'>
                    <ul>
                        <p className='footer__section--list--heading'> Overview
                        </p>
                        <div className='footer__section--list--hr-line' />

                        <li className='footer__section--list--title'>Welcome</li>
                        <div className='footer__section--list--hr-line' />

                        <li className='footer__section--list--title'>Product Capabilities</li>
                        <div className='footer__section--list--hr-line' />

                        <li className='footer__section--list--title'>Customer Success Stories</li>
                        <div className='footer__section--list--hr-line' />

                        <li className='footer__section--list--title'>File Sharing</li>
                        <div className='footer__section--list--hr-line' />

                        <li className='footer__section--list--title'>Our Deck</li>


                    </ul>
                </aside>


                <div className="footer__section--top">

                    <p className='footer__section--top--title'>Company Profile</p>
                    <div className='footer__section--top--icons' >
                        <Image
                            src="/download.svg"
                            alt="download"
                            width={10.5}
                            height={16}
                        />

                        <img src="/vector.svg" alt="" />

                        <Image
                            src="/hide.svg"
                            alt="hide"
                            width={20}
                            height={20}
                        />

                        <img src="/vector.svg" alt="" />

                        <Image
                            src="/recycle.svg"
                            alt='recycle'
                            width={20}
                            height={20}
                        />

                    </div>
                </div>


                <div className="footer__section--bg-img">

                    <div className="footer__section--pdf-logo-container">
                        <div className="footer__section--pdf-and-download-icons">

                            <img src="/pdf2.svg" width="24px" height="18.87" alt="" />

                            <span className="footer__section--pdf-and-download-icons--num">1/15</span>

                            <img src="/vector.svg" alt="" />
                            <img src="/d2.svg" alt="" width="14.5px" height="20px" />

                            <img src="/vector.svg" alt="" />

                            <img src="/m1.svg" alt="" width="18" height="18" />

                            <img src="/vector.svg" alt="" />

                            <img src="/m2.svg" alt="" width="18" height="18" />

                            <img src="/vector.svg" alt="" />

                            <img src="/v2.svg" alt="" width="18" height="18" />
                        </div>


                        <div className='footer__section--logo'>
                            <img src="/wework-logo-1 2.svg" alt="" />
                            <div className='footer__section--logo--title'>For all the ways you work, we&apos;re here</div></div>
                    </div>

                </div>




                <div className='footer__section--share-and-message-icon'>
                    <img src="/msg.svg" alt="" />

                    <img className='vector' src="/vector.svg" alt="" />

                    <img src="/share.svg" alt="" />
                </div>
            </div>

        </footer>
    )
}