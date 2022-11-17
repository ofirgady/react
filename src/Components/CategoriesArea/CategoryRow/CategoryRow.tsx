import CategoryModel from "../../../Models/CategoryModel";
import appConfig from "../../../Utils/AppConfig";
import "./CategoryRow.css";

interface CategoryListProps {
    category: CategoryModel;
}

function CategoryRow(props: CategoryListProps): JSX.Element {
    return (
			<tr>
                <td>{props.category.name}</td>
                <td>{props.category.description}</td>
                <td><img src={appConfig.categoryImagesUrl  + props.category.imageName} /></td>
            </tr>
    );
}

export default CategoryRow;
