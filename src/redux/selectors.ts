import { StateType } from "./store";

// STATIC
export const getCarouselItemsSelector = (state: StateType) => state.static.carouselItems;
export const getAdvantagesItemsSelector = (state: StateType) => state.static.advantagesItems;
export const getFoodProgramsSelector = (state: StateType) => state.static.foodPrograms;
export const getFoodPicturesSelector = (state: StateType) => state.static.foodPictures;
export const getFAQSelector = (state: StateType) => state.static.FAQ;
export const getOnlineOrderModalProduct = (state: StateType) => state.static.onlineOrderModalProduct;
export const getBlogItemsSelector = (state: StateType) => state.static.blogItems;
export const getLunchItemsSelector = (state: StateType) => state.static.lunchItems;
export const getGastroShopItemsSelector = (state: StateType) => state.static.gastroShopItems;
