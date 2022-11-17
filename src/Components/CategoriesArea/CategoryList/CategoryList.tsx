import { useState, useEffect } from "react";
import CategoryModel from "../../../Models/CategoryModel";
import categoriesService from "../../../Services/CategoriesService";
import notifyService from "../../../Services/NotifyService";
import usePageTitle from "../../../Utils/usePageTitle";
import CategoryRow from "../CategoryRow/CategoryRow";
import "./CategoryList.css";


function CategoryList(): JSX.Element {

    usePageTitle("Category List");

    const [categories, setCategories] = useState<CategoryModel[]>([]);

    useEffect(()=> {
        categoriesService.getAllCategories()
            .then(categories => setCategories(categories))
            .catch(err => notifyService.error(err));

    }, []);

    return (
        <div className="CategoryList">
			 <table>
                <thead>
                <tr>
                    <th>Category Name</th>
                    <th>Category Description</th>
                    <th>Category Image</th>
                </tr>
                </thead>
                <tbody>
                    {categories.map(c => <CategoryRow key={c.id} category={c} /> )}
                </tbody>
            </table>
        </div>
    );
}

export default CategoryList;
