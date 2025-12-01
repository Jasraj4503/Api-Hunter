import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const CategoryForm = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();   // check if editing

    // Load data if edit mode
    useEffect(() => {
        if (id) {
            loadCategory();
        }
    }, [id]);

    async function loadCategory() {
        const res = await axios.get(`http://localhost:5000/category/${id}`);
        reset(res.data); // fill form values
    }

    // ADD or UPDATE handler
    async function onSubmit(data) {
        if (id) {
            await axios.put(`http://localhost:5000/category/${id}`, data);
            alert("Category Updated!");
        } else {
            await axios.post("http://localhost:5000/category", data);
            alert("Category Added!");
        }

        reset();
        navigate("/category-list");
    }

    return (
        <div className="container-box m-5 bg-white">
            <div className="card">
                <div className="card-body">
                    <h3 className="text-center">
                        {id ? "Edit Category" : "Add Category"}
                    </h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mt-3">
                            <label className="form-label">Category</label>
                            <input
                                type="text"
                                {...register('category', { required: true })}
                                className="form-control"
                                placeholder="Enter category name"
                            />
                        </div>

                        <div className="mt-3">
                            <label className="form-label">Status</label>
                            <select {...register('status')} className="form-select">
                                <option value="Active">Active</option>
                                <option value="Deactive">Deactive</option>
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
    );
};

export default CategoryForm;
