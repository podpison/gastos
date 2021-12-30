import { ActionsType } from "./store";
import { itemsAPI } from "./../api/api";
import { Dispatch } from "redux";

type CarouselItem = {
    img: string
    mainDescription: string
    countDescription: string
    price: string
}
type AdvantagesItem = {
    img: string
    description: string
}
export type FoodProgram = {
    name: string
    weight: string
    description: string
    orderInfo: {
        name: string
        price: string
    }[]
    weekSchedule: {
        name: string
        schedule: {
            food: string
            name: string
            time: string
            weight: string
        }[]
    }[]
};
type FoodPicture = {
    pictures: string[]
};

export type OrderInfoType = FoodProgram['orderInfo'];
export type WeekScheduleType = FoodProgram['weekSchedule'];

export type FAQItemType = {
    headline: string
    variants: string[]
    type: 'clickable' | 'input' | 'information'
};
type MainPageFAQType = {
    mainPageFAQ: FAQItemType[]
};
type OnlineOrderModalFAQType = {
    onlineOrderModalFAQ: FAQItemType[]
};
export type FAQType = [OnlineOrderModalFAQType, MainPageFAQType];

export type OnlineOrderModalProductType = {
    name: string
    price: number
    count: number
}

export type BlogItemType = {
    mainImage: string
    headline: string
    text: string[]
    date: string
}

export type LunchType = {
    image: string
    name: string
    weight: number
    calories: number
    price: number
    products: string[]
}

export type GastroShopItemType = {
    image: string
    name: string
    composition: string
    nutrients: {
        proteins: number
        fats: number
        carbohydrates: number
    }
    calories: number
    price: number
}

export type GastroShopChapterType = {
    image: string
    name: string
    items: GastroShopItemType[]
}

//each item can be as an item or undefined or just an empty array
let initialState = {
    carouselItems: [] as CarouselItem[],
    advantagesItems: [] as AdvantagesItem[],
    foodPrograms: [] as FoodProgram[],
    foodPictures: [] as FoodPicture[],
    FAQ: [] as unknown as FAQType | undefined | [],
    onlineOrderModalProduct: [] as OnlineOrderModalProductType[],
    blogItems: [] as BlogItemType[] | undefined | [],
    lunchItems: [] as LunchType[] | undefined | [],
    gastroShopItems: [] as GastroShopChapterType[] | undefined | []
};

type Actions = ActionsType<typeof staticActions>;

export const staticReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case 'STATIC/SET-ITEMS':
            return { ...state, [action.itemsType]: action.items };
        case 'STATIC/SET-PRODUCT-TO-ONLINE-ORDER-MODAL':
            let newArray = state.onlineOrderModalProduct.map(i => !i.count ? ({ ...i, count: 1 }) : i);

            state.onlineOrderModalProduct.forEach(p => {
                if (action.product.name === p.name) {
                    let index = newArray.findIndex(i => i.name === p.name);
                    newArray[index].count = newArray[index].count + 1;
                }
            });
            if (newArray.some(e => e.name === action.product.name) === false) {
                newArray.push({ ...action.product, count: 1 })
            };

            return { ...state, onlineOrderModalProduct: newArray }
        default:
            return { ...state };
    };
};

export type StaticItemsType = CarouselItem[] | AdvantagesItem[];

export const staticActions = {
    setItems: (itemsType: string, items: StaticItemsType) => ({ type: 'STATIC/SET-ITEMS', itemsType, items } as const),
    setProductToOnlineOrderModal: (product: OnlineOrderModalProductType) => ({ type: 'STATIC/SET-PRODUCT-TO-ONLINE-ORDER-MODAL', product } as const)
};

export const getStaticItems = (itemsType: string) => async (dispatch: Dispatch) => {
    let items = await itemsAPI.getItems(itemsType);
    dispatch(staticActions.setItems(itemsType, items));
};