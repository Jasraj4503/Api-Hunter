import axios from "axios";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "../assets/css/Product.css"
import { useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Home = () => {

  const [showProduct, setShowproduct] = useState([])
  const navigate = useNavigate()


  async function getData() {
    const res = await axios.get("http://localhost:5000/product")
    setShowproduct(res.data)
  }

  async function deleteProduct(id) {
        if (window.confirm("Do you want to delete this product?")) {
            await axios.delete(`http://localhost:5000/product/${id}`);
            getData() 
        }
    }

  function editProduct(id){
    navigate(`/productForm/${id}`)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="container py-4">
        <div className="row g-4">
          {
            showProduct && showProduct.map((product) => (
              <div className="col-lg-4" key={product.id}>
                <div className="product-card card border-0 shadow-sm">
                  <div className="card-top-area">
                    <img src={product.img} alt="No img" className="card-img-top-custom" />
                  </div>
                  <div className="card-body">

                    {/* Title & Price */}
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bold">{product.title}</h5>
                      <span className="price-text"><FaIndianRupeeSign/>{product.price}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted">
                      {product.description}
                    </p>

                    {/* Category & Stock */}
                    <div className="d-flex justify-content-between align-items-center my-2">
                      <span className="category-pill">{product.product_cat}</span>
                      <span className="text-muted">Stock:{product.stock}</span>
                    </div>

                    {/* Buttons */}
                    <div className="d-flex justify-content-between mt-3">
                      <button className="edit-btn" onClick={()=> editProduct(product.id)}>
                        <FaEdit /> Edit
                      </button>

                      <button className="delete-btn" onClick={()=> deleteProduct(product.id)}>
                        <FaRegTrashAlt />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home
