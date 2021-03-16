import { Producto } from "../type/index";

export function getOffset():number {
    return 1
}

export function getPrecioFinal(p:Producto):number {
    if( p.precio_oferta != null && p.precio_oferta > 0) {
        return p.precio_oferta
    } else {
        return p.precio_normal
    }
}