import { useContext } from 'react';
import logo from '../assets/images/logo.png'
import { AppContext } from '../providers/Index';
const Header = () => {
    const useAppContext=useContext(AppContext);
    const {isOpenMenu,setisOpenMenu}=useAppContext;
    const handleOpenMenu = () => {
        setisOpenMenu(!isOpenMenu);
    }
    console.log(isOpenMenu);
    return (
        <header className="TopNav__TopNavWrapper-sc-1g6u0p6-16 hhDmbf">
            <div className="TopNav__TopNavContent-sc-1g6u0p6-21 gGaWuG">
                <nav className="TopNav__LeftNav-sc-1g6u0p6-17 cxfgnQ">
                    <div className="TopNav__TopNavItem-sc-1g6u0p6-6 gUpPpB">
                        <div className="SVGIcon-uyvh4z-0 TopNav__NavToggleIcon-sc-1g6u0p6-2 fAFphR" onClick={()=> { handleOpenMenu() }}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={18} viewBox="0 0 24 18" fill="none"
                                    className="injected-svg" data-src="/static/media/Hambuger.c5fd2d63.svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path
                                        d="M22.4937 0H1.50628C0.669456 0 0 0.592593 0 1.33333C0 2.07407 0.669456 2.66667 1.50628 2.66667H22.4937C23.3305 2.66667 24 2.07407 24 1.33333C24 0.592593 23.3305 0 22.4937 0Z"
                                        fill="#2F904F" />
                                    <path
                                        d="M1.72662 9.99999H14.2734C15.2326 9.99999 16 9.4074 16 8.66666C16 7.92592 15.2326 7.33333 14.2734 7.33333H1.72662C0.767386 7.33333 0 7.92592 0 8.66666C0 9.4074 0.767386 9.99999 1.72662 9.99999Z"
                                        fill="#2F904F" />
                                    <path
                                        d="M22.2496 14.4H1.75041C0.777958 14.4 0 14.9926 0 15.7333C0 16.4741 0.777958 17.0667 1.75041 17.0667H22.2496C23.222 17.0667 24 16.4741 24 15.7333C24 14.9926 23.222 14.4 22.2496 14.4Z"
                                        fill="#2F904F" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <a className="TopNav__TopNavLinkItem-sc-1g6u0p6-7 eofORe" href="/">
                        <div className="TopNav__KamereoLogo-sc-1g6u0p6-0 dCAXhN">
                            <div>
                                <img src={logo} width='160px' />
                            </div>
                        </div>
                    </a>
                </nav>
                <nav className="TopNav__MiddleNav-sc-1g6u0p6-18 dvueth">
                    <div className="TopNav__InputContainer-sc-1g6u0p6-12 ekjCbP">
                        <span
                            className="ant-input-search TopNav__AntdInput-sc-1g6u0p6-1 kNCBli ant-input-search-enter-button ant-input-search-default ant-input-group-wrapper">
                            <span className="ant-input-wrapper ant-input-group">
                                <input placeholder="Tìm kiếm trong Chợ" className="ant-input" type="text" defaultValue />
                                <span className="ant-input-group-addon"><button type="button"
                                    className="ant-btn ant-input-search-button ant-btn-primary"><span>Tìm</span></button></span></span></span>
                    </div>
                </nav>
                <nav className="TopNav__RightNav-sc-1g6u0p6-19 ldzGYq">
                    <a className="TopNav__TopNavLinkItem-sc-1g6u0p6-7 bUlzUw" href="/signin">
                        <div className="SVGIcon-uyvh4z-0 bQEYqa">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} fill="none" viewBox="0 0 24 24" className="injected-svg"
                                    data-src="/static/media/Cart.b445db40.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path
                                        d="m7.5 7.6694v-0.97c0.01176-1.1338 0.42676-2.2264 1.1707-3.0821 0.74392-0.85569 1.7682-1.4186 2.8893-1.5879 0.625-0.06141 1.2559 0.00869 1.8522 0.20578s1.1448 0.51681 1.6101 0.93859 0.8371 0.93629 1.0916 1.5104c0.2545 0.57414 0.386 1.1952 0.3861 1.8232v1.38"
                                        stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path
                                        d="m8.9998 22h6c4.02 0 4.74-1.61 4.95-3.57l0.75-6c0.27-2.44-0.43-4.43-4.7-4.43h-8c-4.27 0-4.97 1.99-4.7 4.43l0.75 6c0.21 1.96 0.93 3.57 4.95 3.57z"
                                        stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path d="m15.496 12h5e-3" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                    <path d="m8.4951 12h5e-3" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                </svg>
                            </div>
                        </div>
                    </a>
                    <div className="TopNav__TopNavButton-sc-1g6u0p6-8 girgsR"><a className="TopNav__LinkText-sc-1g6u0p6-3 qLQav"
                        href="/signin"><span>Đăng nhập</span></a></div>
                    <div className="TopNav__TopNavButton-sc-1g6u0p6-8 girgsR"><a className="TopNav__LinkText-sc-1g6u0p6-3 qLQav"
                        href="/contact-us"><span>Đăng ký</span></a></div>
                </nav>
            </div>
        </header>
    )
}

export default Header