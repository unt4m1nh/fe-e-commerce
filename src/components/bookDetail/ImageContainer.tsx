import { Flex, notification } from "antd"
import SmallContainer from "./SmallContainer"
import Button from "../button/Button"
import { CartItem, NotificationType } from "../../types/type";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { addToCart, cartSelector } from "../../store/cart/cartSlice";
import { makeId } from "../../utils/makeId"

const ImageContainer = () => {

    const [api, contextHolder] = notification.useNotification();
    const dispatch = useAppDispatch();
    const selectedItems = useAppSelector(cartSelector);

    const addItemToCart = () => {
        const newId = makeId(5);
        const newItem: CartItem = {
            id: newId,
            title: 'TsdadRsasd',
            imageURL: '',
            quantity: 3,
            originalPrice: 2000000,
            salePrice: 1500000,
        };
        dispatch(addToCart(newItem));
        console.log(selectedItems)
        openNotificationWithIcon('success');
    }

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Thành công',
            description:
                'Sản phẩm đã được thêm vào giỏ hàng',
        });
    };

    return (
        <>
            {contextHolder}
            <Flex vertical gap={8} className="p-4">
                <img className="size-96"
                    src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_30582023_015823.jpg" ></img>
                <Flex gap={2} justify="center">
                    <SmallContainer />
                    <SmallContainer />
                    <SmallContainer />
                </Flex>
                <Flex justify="center">
                    <Button onClick={addItemToCart} bgColor="var(--soft-red)" textColor="#FFFFFF" text="Thêm vào giỏ hàng" />
                </Flex>
            </Flex>
        </>
    )

}

export default ImageContainer