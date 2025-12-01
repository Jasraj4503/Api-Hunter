import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    async function loadData() {
        const res = await axios.get("http://localhost:5000/category");
        setData(res.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    async function deleteCategory(id) {
        if (window.confirm("Do you want to delete this category?")) {
            await axios.delete(`http://localhost:5000/category/${id}`);
            loadData();  
        }
    }

    function editCategory(id) {
        navigate(`/category/${id}`);
    }

    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">Category List</h3>

            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {data.length ? (
                        data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.category}</td>
                                <td>{item.status}</td>
                                <td>
                                    <button
                                        onClick={() => editCategory(item.id)}
                                        className="btn btn-primary btn-sm me-2"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteCategory(item.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-4">
                                No categories found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryList;
