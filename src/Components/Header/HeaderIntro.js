import React from 'react'

export default function HeaderIntro() {
    return (
        <div className="header">
            <div className="container">
                <div className="images">
                    <div className="row p-0">
                        <div className="col-11 bg-image m-auto">
                            <div className="image">
                                <img className="w-100" src="./img/bg-image.jpg" alt />
                            </div>
                            <div className="avatar-image">
                                <img src="./img/avatar.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="texts text-center text-white mt-3 pb-4">
                    <div className="name">Nguyen Nhat Dang</div>
                    <div className="intro p-2">- I'm a Front-end Developer -</div>
                </div>
            </div>
        </div>
    )
}
