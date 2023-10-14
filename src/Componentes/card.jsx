import React from "react";
import "../estilos/card.css";
import remera from '../image/imagen1_card_1.png'
import Colores from "./colores";


function ECommerceCard() {
    return (
        <div class="container-fluid bg-trasparent my-4 p-3" >
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                <div class="col hp">
                    <div class="card h-100 shadow-sm">
                        <div className="imagen">
                            <img src={remera} class="card-img-top" alt="product.title" />
                            <span className="corazon">
                                <i class="far fa-heart" ></i>
                            </span>
                            <span className="categoria">
                                <p>Comics</p>
                            </span>
                        </div>
                        <div class="card-body">
                            <p class="card-title">
                                Remera tecno</p>

                            <p class="card-subtitle">
                                Remeras 100% polyester, sublimada, logo la chiqui
                            </p>
                            <h3 class="card-talle">
                                <p>Talles</p>
                                <ul>
                                    <p>S</p>
                                    <p>M</p>
                                    <p>L</p>
                                    <p>XL</p>
                                </ul>
                            </h3>
                            <h3 class="card-color">
                                <p>Color</p>
                                <Colores />
                            </h3>

                            <div class="clearfix mb-3">
                                <span class="card-price">$ 5000</span>
                            </div>
                            <div class="card-boton">
                                <p>add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ECommerceCard