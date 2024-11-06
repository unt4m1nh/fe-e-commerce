export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export type Book = {

}

export type CartItem = {
    id: string;
    title: string;
    imageURL: string;
    quantity: number;
    salePrice: number;
    originalPrice: number;
}