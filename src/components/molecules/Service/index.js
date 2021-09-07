import React from 'react'
import { MiniCard } from '../../atoms';
import './service.scss';

const Service = () => {
    return (
        <div className="container-service">
            <div className="left">
                <img src="img/service.png" />
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1 className="title">Simple process to start</h1>
                    <p className="desc">bagaikan langit yang telah 
                    memberikan kehangatan yang bersinar agak lemah lembut
                    dan menawan dalam menarungi samudra dalam</p>
                    <div className="card-container">
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                    </div> 
                    <button className="btn">
                        <img src="img/play.png"/> How It Works
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Service;
