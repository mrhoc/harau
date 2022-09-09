import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../providers/Index';
import AppStore from '../assets/images/AppStore.76c5b55d.svg'
import GoogleStore from '../assets/images/GoogleStore.cb918cd4.svg'
import adea69c8d35c1cfa32ee173db7ac457b from '../assets/images/adea69c8d35c1cfa32ee173db7ac457b.png'
import a1951685fa3474f6eb8c306adbe6204a from '../assets/images/a1951685fa3474f6eb8c306adbe6204a.png'
import ba2622d292e9341b265ded7245853198 from '../assets/images/ba2622d292e9341b265ded7245853198.png'
import a482c967e50fef21791147c113f4a4afb from '../assets/images/a482c967e50fef21791147c113f4a4afb.png'
const Register = () => {
    const useAppContext=useContext(AppContext);
    const {txtSearch,products}=useAppContext;
    console.log(txtSearch);
    console.log(products);
    return (
        <div classname="bulZNJ">
            <div className="GateLayout__Container-cr7ybx-0 ktLqKF">
                <div className="GateLayout__Content-cr7ybx-1 jdPVrB">
                
                    <div className="ant-row-flex ant-row-flex-center ant-row-flex-top">
                        <section className="ContactUsForm__Container-sc-4ujnee-0 gRZjzk">
                            <div className="PageHeader__Container-sc-19x4r8h-1 bYkpeS"><h2 className="PageHeader__Header-sc-19x4r8h-0 jTfioR"><span>Liên hệ với chúng tôi</span></h2></div>
                            <form className="ant-form ant-form-horizontal login-form">
                                <div className="ant-row ant-form-item">
                                    <div className="ant-col ant-form-item-label"><label htmlFor="userName" className="ant-form-item-no-colon" title="Họ và tên">Họ và tên</label></div>
                                    <div className="ant-col ant-form-item-control-wrapper">
                                        <div className="ant-form-item-control"><span className="ant-form-item-children"><span className="ContactUsForm__AntdInput-sc-4ujnee-1 hFbADc ant-input-affix-wrapper"><span className="ant-input-prefix"><i aria-label="icon: user" className="anticon anticon-user ContactUsForm__PrefixIcon-sc-4ujnee-2 cLKrB"><svg viewBox="64 64 896 896" focusable="false" className data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" /></svg></i></span><input placeholder="Họ và tên" id="userName" data-__meta="[object Object]" data-__field="[object Object]" className="ant-input" type="text" defaultValue /></span></span></div>
                                    </div>
                                </div>
                                <div className="ant-row ant-form-item">
                                    <div className="ant-col ant-form-item-label"><label htmlFor="companyName" className="ant-form-item-no-colon" title="Tên Doanh Nghiệp">Tên Doanh
                                        Nghiệp</label></div>
                                    <div className="ant-col ant-form-item-control-wrapper">
                                        <div className="ant-form-item-control"><span className="ant-form-item-children"><span className="ContactUsForm__AntdInput-sc-4ujnee-1 hFbADc ant-input-affix-wrapper"><span className="ant-input-prefix"><i aria-label="icon: shop" className="anticon anticon-shop ContactUsForm__PrefixIcon-sc-4ujnee-2 cLKrB"><svg viewBox="64 64 896 896" focusable="false" className data-icon="shop" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z" /></svg></i></span><input placeholder="Tên Doanh Nghiệp" id="companyName" data-__meta="[object Object]" data-__field="[object Object]" className="ant-input" type="text" defaultValue /></span></span></div>
                                    </div>
                                </div>
                                <div className="ant-row ant-form-item">
                                    <div className="ant-col ant-form-item-label"><label htmlFor="phoneNumber" className="ant-form-item-no-colon" title="Số Điện Thoại">Số Điện Thoại</label>
                                    </div>
                                    <div className="ant-col ant-form-item-control-wrapper">
                                        <div className="ant-form-item-control"><span className="ant-form-item-children"><span className="ContactUsForm__AntdInput-sc-4ujnee-1 hFbADc ant-input-affix-wrapper"><span className="ant-input-prefix"><i aria-label="icon: phone" className="anticon anticon-phone ContactUsForm__PrefixIcon-sc-4ujnee-2 cLKrB"><svg viewBox="64 64 896 896" focusable="false" className data-icon="phone" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" /></svg></i></span><input placeholder="Số Điện Thoại" autoComplete="phone" id="phoneNumber" data-__meta="[object Object]" data-__field="[object Object]" className="ant-input" type="text" defaultValue /></span></span></div>
                                    </div>
                                </div>
                                <div className="ant-row ant-form-item">
                                    <div className="ant-col ant-form-item-label"><label htmlFor="email" className="ant-form-item-no-colon" title="Email">Email</label></div>
                                    <div className="ant-col ant-form-item-control-wrapper">
                                        <div className="ant-form-item-control"><span className="ant-form-item-children"><span className="ContactUsForm__AntdInput-sc-4ujnee-1 hFbADc ant-input-affix-wrapper"><span className="ant-input-prefix"><i aria-label="icon: mail" className="anticon anticon-mail ContactUsForm__PrefixIcon-sc-4ujnee-2 cLKrB"><svg viewBox="64 64 896 896" focusable="false" className data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" /></svg></i></span><input placeholder="Email" autoComplete="username" id="email" data-__meta="[object Object]" data-__field="[object Object]" className="ant-input" type="text" defaultValue /></span></span></div>
                                    </div>
                                </div>
                                <div className="ant-row ant-form-item" style={{ marginTop: 12 }}>
                                    <div className="ant-col ant-form-item-control-wrapper">
                                        <div className="ant-form-item-control"><span className="ant-form-item-children"><button type="submit" className="ant-btn Button-jgr7l8-0 iPsOaJ ant-btn-primary ant-btn-block"><span>Gửi</span></button></span>
                                        </div>
                                    </div>
                                </div>
                                <p><span>Bằng việc nhấn Gửi, bạn đã đồng ý với</span> <a target="_blank" href="docs/term-of-service"><span>Chính sách bảo mật</span></a>
                                    &amp; <a target="_blank" href="docs/privacy-policy"><span>Điều khoản sử dụng</span></a></p>
                                <p><span>Đã có tài khoản?</span> <a href="/signin"><span>Đăng nhập</span></a></p></form>
                        </section>
                    </div>
                    <div className="GateLayout__DownloadAppContainer-cr7ybx-8 hLkNwS">
                        <div className="DownloadApp__Container-sc-18txisl-0 fFuSo"><p><span>Đặt hàng mọi lúc, mọi nơi thông qua ứng dụng của chúng tôi:</span>
                        </p>
                            <div className="DownloadApp__StoreContainer-sc-18txisl-1 liFjBl"><a href="" target="_blank"><img src={AppStore} className="DownloadApp__AppStoreImage-sc-18txisl-2 gFLAxF" /></a><a href="" target="_blank"><img src={GoogleStore} className="DownloadApp__GoogleStoreImage-sc-18txisl-3 ebLbRP" /></a></div>
                        </div>
                    </div>
                </div>
                <div className="GateLayout__Bg-cr7ybx-2 fDxdCa"><img src={adea69c8d35c1cfa32ee173db7ac457b} className="GateLayout__ImageTopLeft-cr7ybx-3 hHcaRl" /><img src={a1951685fa3474f6eb8c306adbe6204a} className="GateLayout__ImageTopRight-cr7ybx-4 eZkJsz" /><img src={ba2622d292e9341b265ded7245853198} className="GateLayout__ImageBottomLeft-cr7ybx-5 hwiqXA" /><img src={a482c967e50fef21791147c113f4a4afb} className="GateLayout__ImageBottomRight-cr7ybx-6 ioIsJo" /></div>
            </div>
        </div>
    );
}

export default Register;
