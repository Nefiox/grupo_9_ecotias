import {useState,useEffect, useLayoutEffect} from "react";
import {Links} from "react";

function DashboardProducts (){
    const[products, setProducts] = useState([]);
    const[productsList, setProductsList] = useState([]);
    const[countCategory, setCountByCategory] = useState([]);
    const[categoryBoard, setCategoryBoard] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:5000/api/productos")
        .then (res => res.json())
        .then (data => {
            console.log(data)            
            setProducts(data)
            setProductsList(data.products)
            setCountByCategory(data.countByCategory)
            setCategoryBoard(data.countByCategory.data)
            
        })

    }, []);

    useEffect(()=>{
        console.log("Se actualizó el componente")
    },[products,productsList,countCategory, categoryBoard])
    let lastProduct = productsList.pop();
    
    

    return(
        <main>
            <div className="TotalP">
                <h3>Total de productos</h3>
                <p>{products.count}</p>
            </div>
            <div className="TotalC">
                <h3>Total de categorías</h3>
                <p>{countCategory.totalCategories}</p>
            </div>
            <div className="lastProduct"> 
                <h3>Último producto creado</h3>
                <div className="white">{lastProduct.name}    ${lastProduct.price}</div>
                <div className="white">{lastProduct.description}</div>
                <div className="white">{lastProduct.detail}</div>
                

            </div>
            
            <div className="categories">
                <h3>Categorías</h3>
                <div className="line"></div>
                <div>
                        <table>
                            
                            <tr>
                                <th>Categorías</th>
                                {categoryBoard.map((category)=>{
                                return(
                                    <td>{category.category_name}</td>
                                    
                                )
                            })}
                            
                                
                            </tr>
                            <div className="line"></div>
                            <tr>
                                <th>Número de productos</th>
                                {categoryBoard.map((category)=>{
                                    return(
                                        <td>{category.total_products}</td>                                        
                                    )
                                })}
                            </tr>
                        </table>
                        {/* <h4>{category.category_name}  Productos:{category.total_products}</h4>
                        
                        <div className="line"></div> */}
                        
                </div>
                
            </div>
            
            <div className="Pdisp">
                <h3>Productos disponibles</h3>
                <div className="line"></div>
                <ul>
                    {productsList.map((producto,i)=>{
                        return (<div key={i}>
                            <h4>{producto.name} </h4>
                            <div className="line"></div>
                        </div>
                        )
                    })}
                </ul>

            </div>
            

        </main>
        
    )
}

export default DashboardProducts;