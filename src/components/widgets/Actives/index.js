import React from 'react';
import "./index.scss";
const Actives = () => {
    return (
        <div className="card-wrap-content-actives">
            <div className="d-flex justify-content-between align-items-center">
                <h3>Ваши активы</h3>
                <img src="/assets/icons/settings.svg" alt="settings" className="cursor"/>
            </div>
            <div className="card-wrap-content-actives-body">
                <div className="card-wrap-content-actives-body-item d-flex align-items-start">
                    <div className="card-сheck-type">
                        Счет
                    </div>
                    <div className="card-check-number">
                        <h4>100 258 065 000.00 UZS</h4>
                        <p>Основной счет <span className="dots">••</span> <span className="card-number">1245</span></p>
                    </div>
                </div>
                <div className="card-wrap-content-actives-body-item d-flex align-items-start">
                    <div className="card-сheck-type card-check-type-yellow">
                        Счет
                    </div>
                    <div className="card-check-number">
                        <h4>1 258 065.00 UZS</h4>
                        <p>Дополнителный счет <span className="dots">••</span> <span className="card-number">1245</span></p>
                    </div>
                </div>
                <div className="card-wrap-content-actives-body-item d-flex align-items-start align-items-center">
                    <div className="card-сheck-type">
                        Счет
                    </div>
                    <div className="card-check-number">
                        <p>Дополнителный счет <span className="dots">••</span> <span className="card-number">6642</span></p>
                    </div>
                </div>
                <div className="card-wrap-content-actives-body-item d-flex align-items-start">
                    <div className="card-сheck-type card-check-type-yellow">
                        <img src="/assets/icons/visa.svg" alt="visa"/>
                    </div>
                    <div className="card-check-number">
                        <h4>30 630.18 $</h4>
                        <p>Для переводов <span className="dots">••</span> <span className="card-number">1239</span></p>
                    </div>
                </div>
                <div className="show-all d-flex align-items-center">
                    <span className="icon icon-chevron-down"/>
                    <span className="show-all-text">Показать счета и карты (6)</span>
                </div>
            </div>
        </div>
    );
};

export default Actives;