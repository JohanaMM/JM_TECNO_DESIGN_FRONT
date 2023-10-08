import React from "react";
import "../estilos/card.css";
import remera from '../image/imagen1_card_1.png'
import ellipse1 from '../image/Ellipse 10.png'
import ellipse2 from '../image/Ellipse 7-1.png'
import ellipse3 from '../image/Ellipse 7.png'
import ellipse4 from '../image/Ellipse 8.png'
import ellipse5 from '../image/Ellipse 9.png'


function ECommerceCard() {
    return (
        <div class="container-fluid bg-trasparent my-4 p-3" >
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                <div class="col hp">
                    <div class="card h-100 shadow-sm">
                        <a href="#">
                            <img src={remera} class="card-img-top" alt="product.title" />
                            <span>
                                <i class="far fa-heart" ></i>
                            </span>
                        </a>
                        <div>
                            <a href="#">Comics</a>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title">
                                <a href="#">Remera tecno</a>
                            </h1>
                            <h3 class="card-subtitle">
                                <p>Remeras 100% polyester, sublimada, logo la chiqui  </p>
                            </h3>
                            <h3 class="card-talle">
                                <a>Talles</a>
                                <ul>
                                    <p>S</p>
                                    <p>M</p>
                                    <p>L</p>
                                    <p>XL</p>
                                </ul>
                            </h3>
                            <h3 class="card-color">
                                <a>Color</a>
                                <ul>
                                <img src={ellipse1}></img>
                                <img src={ellipse2}></img>
                                <img src={ellipse3}></img>
                                <img src={ellipse4}></img>
                                <img src={ellipse5}></img>

                                </ul>
                            </h3>

                            <div class="clearfix mb-3">
                                <span class="card-price">$ 5000</span>
                            </div>
                            <div class="card-boton">
                                <a href="#">add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ECommerceCard