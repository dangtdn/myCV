import React from 'react'

export default function Experience() {
    return (
        <div className="experience-page text-white py-5">
            <div className="container mx-auto">
                <h4><span>EXPERIENCE</span></h4>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-9">
                        <div className="info-content">
                            <div className="date-box">
                                03/2021<br />
                                -<br />
                                04/2021
                            </div>
                            <div className="content-box">
                                <h5>Apartment management system project</h5>
                                <p>
                                    <span>Project description: </span>
                                    {/* Đây là website giúp nhân viên quản lý nội bộ của một chung cư bao gồm: căn hộ, tài sản chung, dịch vụ, biên lai và phân quyền quản lý cho từng chức vụ của nhân viên. Tuy nhiên, đây vẫn chỉ là bản demo nên không tránh những sai xót và viết bằng data tĩnh nên dữ liệu sẽ trở lại ban đầu khi reload trang. Tôi đã áp dụng những kiến thức đã học để xây dựng dự án này.  */}
                                    By applying all of knowledge that I have learned, this website created for the purpose of helping building managers can supervise internal information including: apartment, common property, services, receipts, and division of management authority. However, this website is still a demo version; therefore, it can not avoid mistakes and static data in the source code, it will be back to the original when reloading the page.
                                    <a href="https://github.com/dangtdn/He_Thong_Quan_Ly_Chung_Cu.git" target="_blank" className="link-git pl-1">Github</a>
                                </p>
                                <p><span>Team: </span>Only me</p>
                                <p><span>Technology: </span>Frontend: ReactJS + Redux + Hook, Bootstrap, Sass.</p>
                                <p><span>Product: </span><a href="https://demo_he_thong_qlcc.surge.sh" target="_blank">Link demo</a> (username: admin; password: 123456)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="info-content">
                            <div className="date-box">
                                11/2020<br />
                                -<br />
                                05/2021
                            </div>
                            <div className="content-box">
                                <h5>Cybersoft - Cyberlearn Programing Education Center</h5>
                                <p>
                                    <span>Programming course: </span>
                                    thinking in programming, problem-solving, Java language, OOP
                                </p>
                                <p>
                                    <span>Front-end Foundation course: </span>
                                    basic knowledge of HTML5, CSS3, Boostrap 4, SASS/SCSS, Javascript (ES5/ES6), Reactjs, AJAX, Git, ...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
