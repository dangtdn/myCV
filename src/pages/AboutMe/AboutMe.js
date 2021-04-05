import React from 'react'

export default function AboutMe() {
    return (
        <div className="about-me-page text-white pt-5">
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-7">
                        <h4><span>SUMMARY</span></h4>
                        <div className="info-content">
                            <div className="content-box p-4">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum labore perspiciatis laudantium error aperiam est.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat delectus ipsam ad alias necessitatibus quo est. Molestias, doloremque voluptas!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odio quos enim consectetur temporibus cupiditate adipisci omnis distinctio sunt! Voluptate maiores architecto maxime dignissimos perspiciatis voluptates, eum quisquam ab repellat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <h4><span>CONTACT ME</span></h4>
                        <div className="contact-content">
                            <div className="content-box p-4">
                                <p><span><i className="fa fa-map-marker-alt" /></span>
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
