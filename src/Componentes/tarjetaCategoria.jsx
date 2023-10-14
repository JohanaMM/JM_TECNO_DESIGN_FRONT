import React from "react";
import "../estilos/card.css";
import remera from '../image/imagen1_card_1.png'

function TarjetaCategoria() {
  return (
    <>
      <div class="container-fluid bg-trasparent my-4 p-3" >
        <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          <div class="col hp">
            <div class="card h-100 shadow-sm">
              <div className="imagen">
                <img src={remera} class="card-img-top" alt="product.title" />
                <p class="card-title"
                style={{
                  padding:'20px'
                }}>
                  Remera tecno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TarjetaCategoria;