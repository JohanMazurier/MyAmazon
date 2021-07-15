import React, {useEffect} from 'react';
import Banner from '../components/Banner';
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderHistoryScreen(props) {

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    const deleteHandler = () => {
        /// TODO: dispatch delete action
    };

    return (
        <div className="productListPage">

            <div className="productListPageContainer">
                <Banner/>
                <div className="productListTitle">
                    <div>
                        <h1>Liste des produits</h1>
                    </div>
                </div>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Référence</th>
                            <th>Nom du produit</th>
                            <th>Prix</th>
                            <th>Catégorie</th>
                            <th>Auteur/Créateur</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.from}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="editProduct"
                                        onClick={() =>
                                            props.history.push(`/product/${product._id}/edit`)
                                        }
                                    >
                                        Editer
                                    </button>
                                    <button
                                        type="button"
                                        className="deleteProduct"
                                        onClick={() => deleteHandler(product)}
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}