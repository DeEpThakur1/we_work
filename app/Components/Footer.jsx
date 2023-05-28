import Image from 'next/image'
export const Footer = () => {

    return (
        <footer>

            <div className='footerBtns'>
                {/* <div className='aBtn'> */}
                {/* {btn.map((btns) => (
                        <button key={btns.id} href={btns.path}>
                            {btns.names}
                        </button>
                    ))} */}
                <div id='btn25'>
                    <button className='bI'>Basic info</button>
                    <button className='file'>File</button>
                    <button className='mAction'>Mutual Action</button>
                    <button className='contact'>Contact</button>
                </div>
                <button className='iAction'>Internal Actions</button>
            </div>

            <div className='bList'>
                <aside>
                    <ul>
                        <p> Overview

                        </p>
                        <hr />

                        <li>Welcome</li>
                        <hr />

                        <li>Product Capabilities</li>
                        <hr />

                        <li>Customer Success Stories</li>
                        <hr />

                        <li>File Sharing</li>
                        <hr />

                        <li>Our Deck</li>
                        <hr />

                    </ul>
                </aside>

                {/* <div className="mobile"> */}
                <div className="head">

                    <p>Company Profile</p>

                    <div className="headerLogo">

                        <img src="/wework-logo-1 2.svg" alt="" />

                        <div>For all the ways you work, we&apos;re here</div>
                    </div>

                    <div className="head-I1">
                        <img src="/pdf2.svg" width="24px" height="18.87" alt="" /> <span>1/15</span>
                        <img src="/vector.svg" alt="" />
                        <img src="/d2.svg" alt="" width="14.5px" height="20px" />

                        <img src="/vector.svg" alt="" />

                        <img src="/m1.svg" alt="" width="18" height="18" />

                        <img src="/vector.svg" alt="" />

                        <img src="/m2.svg" alt="" width="18" height="18" />

                        <img src="/vector.svg" alt="" />

                        <img src="/v2.svg" alt="" width="18" height="18" />
                    </div>


                    <div className='head-I2'>
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
                <div className=' footerImg'></div>



                <div className='footerIcon'>
                    <img src="/msg.svg" alt="" />

                    <img src="/vector.svg" alt="" />

                    <img src="/share.svg" alt="" />
                </div>
            </div>
            {/* </div> */}
        </footer>
    )
}