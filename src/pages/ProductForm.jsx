import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

const ProductForm = () => {

  const { register, handleSubmit, reset } = useForm()
  const [categories, setCategories] = useState([])
  const navigate = useNavigate();
  const { id } = useParams()

  const getCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/category")
      setCategories(res.data || [])
    } catch (err) {
      console.log(err)
      toast.error("Failed to load categories");
    }
  }

  async function loadProduct() {
    const res = await axios.get(`http://localhost:5000/product/${id}`)
    reset(res.data)
  }

  async function onSubmit(data) {
    if (id) {
      await axios.put(`http://localhost:5000/product/${id}`, data)
      alert("Product Updated")
    }
    else {
      await axios.post("http://localhost:5000/product", data)
      toast.success("Product added");
    }
    reset()
    navigate("/")
  }

  useEffect(() => {
    getCategories()
    loadProduct()
  }, [id])

  return (
    <>
      <div className="container-box m-5 bg-white">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">
              {id ? "Edit Category" : "Add Category"}
            </h3>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="mt-3">
                <label className="form-label">Image</label>
                <input
                  type="url"
                  {...register('img', { required: true })}
                  className="form-control"
                  placeholder="Enter image url"
                />
              </div>

              <div className="mt-3">
                <label className="form-label">Title</label>
                <input type="text" {...register('title')} className="form-control" placeholder="Enter title" />
              </div>

              <div className="mt-3">
                <label className="form-label">Price</label>
                <input type="number" {...register('price')} className="form-control" placeholder="Enter price" />
              </div>

              <div className="mt-3">
                <label className="form-label">Description</label>
                <input type="text" {...register('description')} className="form-control" placeholder="Enter description" />
              </div>

              <div className="mt-3">
                <label className="form-label">Stock</label>
                <input type="number" {...register('stock')} className="form-control" placeholder="Enter product stock" />
              </div>

              <div className="mt-3">
                <label className="form-label">Category</label>
                <select type="text" {...register('product_cat')} className="form-control" placeholder="Enter product category" >
                  <option value="">Select Category</option>
                  {
                    categories.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.category}
                      </option>
                    ))
                  }
                </select>
              </div>

              <div className="mt-4 text-center">
                <button className="btn btn-success">
                  {id ? "Update Category" : "Add Category"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductForm
