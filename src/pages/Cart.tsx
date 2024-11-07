import { Button, Flex, Table } from "antd";
import { useEffect, useMemo, useState } from "react";
import { CartItem } from "../types/type";
import { useAppDispatch, useAppSelector } from "../hook/hook";
import { addToCart, cartSelector, removeFromCart } from "../store/cart/cartSlice";
import { formatPrice } from "../utils/priceFormat";

function Cart() {
    
    const dispatch = useAppDispatch();
    const selectedItems = useAppSelector(cartSelector);
    const [cartItems, setCartItems] = useState<Array<CartItem>>([]);
    //const [triggerRerender, setTriggerRerender] = useState<boolean>(true);
    

    useEffect(() => {
        setCartItems(selectedItems);
    }, []);

    const calculateTotalPrice = useMemo(() => {
        return cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.salePrice, 0)
    }, [cartItems])

    const removeCartItem = (targetItem: CartItem) => {
        dispatch(removeFromCart(targetItem));
        const newCart = cartItems.filter((item) => item.id !== targetItem.id);
        setCartItems(newCart);
    }

    const columns = [
        {
            title: "Mã hàng",
            dataIndex: 'id',
            key: 'id',
        }, 
        {
            title: "Tên sản phẩm",
            dataIndex: 'title',
            key: 'title',
        }, 
        {
            title: "Hình ảnh",
            dataIndex: 'imageURL',
            key: 'imageURL',
            render: (imageURL: string) => 
                <img src={imageURL}></img>
        },
        {
            title: "Số lượng",
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: "Giá gốc",
            dataIndex: 'originalPrice',
            key: 'originalPrice',
            render: (price: number) => <span>{formatPrice(price)}</span>
        },
        {
            title: "Giá giảm",
            dataIndex: 'salePrice',
            key: 'salePrice',
            render: (price: number) => <span>{formatPrice(price)}</span>
        }, 
        {
            title: "Thao tác",
            key: 'action',
            render: (record: CartItem) => (<Button onClick={() => removeCartItem(record)} type="primary">Xóa</Button>)
        }
    ]


    return (
        <Flex gap={32} vertical className="px-24 py-8">
            <Flex className="w-full justify-between">
                <h1 className="text-4xl font-bold">Giỏ hàng</h1>
                <Flex gap={32}>
                    <h1 className="text-2xl font-bold">Tổng tiền: {formatPrice(calculateTotalPrice)}</h1>
                    <Button type="primary">Đặt hàng</Button>
                </Flex>
            </Flex>
            <Table columns={columns} dataSource={cartItems} />
        </Flex>


    )
}

export default Cart;