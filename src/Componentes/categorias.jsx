import React from "react";
import Remera from '../image/camiseta.png'
import Buzo from '../image/capucha.png'
import Bolsas from '../image/bolsa-de-la-compra.png'
import Mate from '../image/te-de-mate.png'
import Taza from '../image/taza-de-cafe.png'
import Otros from '../image/mas.png'
import '../estilos/categorias.css'

function categorias() {
    return (
        <div className="cont-categorias">
            <img src={Remera} className="categoriaImg" alt="Remeras" />
            <img src={Buzo} className="categoriaImg" alt="Buzos" />
            <img src={Bolsas} className="categoriaImg" alt="Bolsas" />
            <img src={Mate} className="categoriaImg" alt="Mates" />
            <img src={Taza} className="categoriaImg" alt="Tazas" />
            <img src={Otros} className="categoriaImg" alt="Otros" />
        </div>
    )
}

export default categorias