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
                                    This is a website that helps employees to manage the internal management of an apartment building including: apartments, common properties, services, receipts and decentralization for each employee's position. However, this is still a demo version so I do not avoid mistakes and write in static data so the data will be back to the original when reloading the page. I applied the knowledge I learned to build this project.
                                    <a href="https://github.com/dangtdn/He_Thong_Quan_Ly_Chung_Cu.git" className="link-git pl-1">Github</a>
                                </p>
                                <p><span>Team: </span>Only me</p>
                                <p><span>Technology: </span>Frontend: ReactJS + Redux + Hook, Bootstrap, Sass.</p>
                                <p><span>Product: </span><a href="https://demo_he_thong_qlcc.surge.sh">Link demo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
