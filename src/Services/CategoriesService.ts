import axios from "axios";
import CategoriesModel from "../Models/CategoryModel";
import { categoriesStore, fetchCategoriesAction } from "../Redux/CategoriesState";
import appConfig from "../Utils/AppConfig";

class CategoriesService {

    public async getAllCategories() : Promise<CategoriesModel[]> {
        let categories = categoriesStore.getState().categories;
        if(categories.length === 0 ) {
            const response = await axios.get<CategoriesModel[]>(appConfig.categoriesUrl);
            categories = response.data;
            categoriesStore.dispatch(fetchCategoriesAction(categories))
        }
       return categories;
    }


}

const categoriesService = new CategoriesService();

export default categoriesService;