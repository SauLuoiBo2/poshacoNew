export interface ProductOrder {
    id: string;
    title: string;
    dimension: string;
    price: number;
    dataInfo: ProductInformation[];
    totalMeterial: number;
    totalPrice: number;
    species: string | null;
    brand: string | null;
    selected?: any;
}

export interface Order {
    id: string;
    price: number;
    products: ProductOrder[];
}

export interface ProductInformation {
    size: string;
    amountSheet: number | string;
}
