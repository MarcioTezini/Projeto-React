import React from "react";
import './style.css';
import { Buttom } from "../../Share/Buttom";
import logo from "../../../assets/img/Amazon-Logo.png";

export const Descktop = () => {

    return (
        <section className="container">
            <div>
                <img className="logoAmz" src={logo} alt="logo-amazon"/>
            </div>
            <div className="linksNav">
                <Buttom
                className="btn-descktop"
                text="Bebidas"
                />
                <Buttom
                className="btn-descktop"
                text="Eletronicos"
                />
                <Buttom
                className="btn-descktop"
                text="Roupas"
                />
            </div>
        </section>
    )
}
