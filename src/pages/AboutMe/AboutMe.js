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
                                    Xin chào!
                                </p>
                                <p>
                                Tôi rất đam mê với các kiến thức công nghệ mới và thường hay học hỏi, tìm hiểu để nâng cao kỹ năng của bản thân.  
                                </p>
                                <p>
                                Tính kiên nhẫn và tinh thần trách nhiệm cao sẽ giúp tôi luôn hoàn thành tốt các công việc.
                                </p>
                                <p>
                                Công nghệ sẽ không ngừng phát triển và tôi sẽ không ngừng học hỏi.
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
                                    <a href="https://www.facebook.com/nhatdang.nguyen.319/"><span>My Facebook</span></a>
                                </p>
                                <p><span><i className="fab fa-github" /></span>
                                    <a href="https://github.com/dangtdn"><span>My Github</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
