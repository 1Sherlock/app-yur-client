import React from 'react';
import "./index.scss"
const Course = () => {
    return (
        <div className="card-wrap-content-course">
            <div className="card-wrap-content-course-header d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Курсы валют</h3>
                <p className="mb-0">
                    <span className="icon icon-refresh"/> 24.08.2022
                </p>
            </div>
            <div className="card-wrap-content-course-body">
                <div className="card-wrap-content-course-body-item">
                    <div className="info-header d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img src="/assets/icons/usa.svg" alt="usa"/>
                            <h4 className="mb-0">USD</h4>
                            <p className="mb-0">Доллар США</p>
                        </div>
                        <h5 className="mb-0 course-up">+5.21%</h5>
                    </div>
                    <div className="info-body">
                        <div className="info-body-item">
                            <p className=""><span className="icon icon-up up"/> Продажа</p>
                            <h6 className="mb-0">10 690,12</h6>
                        </div>
                        <div className="info-body-item">
                            <p className=""><span className="icon icon-up"/> Покупка</p>
                            <h6 className="mb-0">10 740,12</h6>
                        </div>
                        <div className="line"/>
                    </div>
                </div>
                <div className="card-wrap-content-course-body-item">
                    <div className="info-header d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img src="/assets/icons/gbr.svg" alt="usa"/>
                            <h4 className="mb-0">GBR</h4>
                            <p className="mb-0">Фунт стерлинг</p>
                        </div>
                        <h5 className="mb-0 course-down">-1.56%</h5>
                    </div>
                    <div className="info-body">
                        <div className="info-body-item">
                            <p className=""><span className="icon icon-up up"/> Продажа</p>
                            <h6 className="mb-0">10 690,12</h6>
                        </div>
                        <div className="info-body-item">
                            <p className=""><span className="icon icon-up"/> Покупка</p>
                            <h6 className="mb-0">10 740,12</h6>
                        </div>
                        <div className="line"/>
                    </div>
                </div>
                <div className="card-wrap-content-course-body-item">
                    <div className="info-header d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img src="/assets/icons/chf.svg" alt="usa"/>
                            <h4 className="mb-0">CHF</h4>
                            <p className="mb-0">Швейцарский фр...</p>
                        </div>
                        <h5 className="mb-0 course-up">+5.21%</h5>
                    </div>
                    <div className="info-body">
                        <div className="info-body-item">
                            <p className=""><span className="icon icon-up up"/> Продажа</p>
                            <h6 className="mb-0">10 690,12</h6>
                        </div>
                        <div className="info-body-item">
                            <p className=""><span className="icon icon-up"/> Покупка</p>
                            <h6 className="mb-0">10 740,12</h6>
                        </div>
                        <div className="line"/>
                    </div>
                </div>
                <div className="card-wrap-content-course-body-item">
                    <div className="info-header d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img src="/assets/icons/euro.svg" alt="usa"/>
                            <h4 className="mb-0">EURO</h4>
                            <p className="mb-0">Евро</p>
                        </div>
                        <h5 className="mb-0 course-up">+5.21%</h5>
                    </div>
                    <div className="info-body">
                        <div className="info-body-item">
                            <p className=""><span className="icon icon-up up"/> Продажа</p>
                            <h6 className="mb-0">10 690,12</h6>
                        </div>
                        <div className="info-body-item">
                            <p className=""><span className="icon icon-up"/> Покупка</p>
                            <h6 className="mb-0">10 740,12</h6>
                        </div>
                        <div className="line"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;