import { useContext } from 'react'
import productsData from '../assets/productsData'
import { CartContext } from '../store'

export default function Pouducts() {
    const [state, dispatch] = useContext((CartContext))
    return (
        <div className="row row-cols-3 g-3">
            {productsData.map((v) => {
                return (
                    <div className="col" key={v.id}>
                        <div className="card">
                            <img src={v.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">{v.title}<span className="float-end">{v.price}</span></h6>

                                <button type="button" className="btn btn-outline-primary w-100" onClick={() => {
                                    dispatch({
                                        type: 'ADD_TO_CART',
                                        payload: {
                                            ...v,
                                            quantity: 1
                                        }
                                    })
                                }}>加購物車</button>
                            </div>
                        </div>
                    </div>
                )

            })}

        </div>
    )
}
