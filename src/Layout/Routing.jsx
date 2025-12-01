import { lazy } from "react"

const CategoryList = lazy(()=> import('../pages/CategoryList'))
const Home = lazy(()=>import('../pages/Home'))
const Category = lazy(()=>import('../pages/CategoryForm'))
const ProductForm = lazy(()=>import('../pages/ProductForm'))

const Routing = [
    {
        path:"/",
        element:Home
    },
    {
        path:"/addCategory",
        element:Category
    },
    {
        path:"/category-list",
        element:CategoryList
    },
    {
        path:"/category/:id",
        element:Category
    },
    {
        path:"/productForm",
        element:ProductForm
    },
    {
        path:"/productForm/:id",
        element:ProductForm
    },
]

export default Routing