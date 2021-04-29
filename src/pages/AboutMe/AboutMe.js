import React from 'react'

export default function AboutMe() {
    return (
        <div className="about-me-page text-white py-5">
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-lg-7">
                        <h4><span>SUMMARY</span></h4>
                        <div className="info-content">
                            <div className="content-box p-4">
                                <p>
                                    Welcome!
                                </p>
                                <p>
                                I am really enthusiastic about gaining new technological knowledge and always want to improve my self in this field. 
                                </p>
                                <p>
                                I believe that patience and responsibility are two main factors which can help me complete my works effectively. The more technology develops, the more I learn.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <h4><span>CONTACT ME</span></h4>
                        <div className="contact-content">
                            <div className="content-box p-4">
                                <p className="d-flex align-items-center">
                                    <span><i className="fa fa-map-marker-alt" /></span>
                                    <span>Lang Dai Hoc khu C, Le Van Luong - Phuoc Kieng - Nha Be</span>
                                </p>
                                <p><span><i className="fa fa-phone" /></span>
                                    <span>0907319096</span>
                                </p>
                                <p><span><i className="fa fa-envelope" /></span>
                                    <span>nguyendanglop93@gmail.com</span>
                                </p>
                                <p><span><i className="fab fa-facebook" /></span>
                                    <a href="https://www.facebook.com/nhatdang.nguyen.319/" target="_blank"><span>My Facebook</span></a>
                                </p>
                                <p><span><i className="fab fa-github" /></span>
                                    <a href="https://github.com/dangtdn" target="_blank"><span>My Github</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
