import { Flex, InputNumber, Rate, Table } from "antd"
import { formatPrice } from "../../utils/priceFormat"
import { useState } from "react"

const { Column } = Table

const BookInformation = () => {


    const addAmountButton = (
        <button className="cursor-pointer" onClick={() => setPurchaseQuantity((prevState) => prevState + 1)}>+</button>
    )

    const [purchaseQuantity, setPurchaseQuantity] = useState<number>(1);

    const minusAmountButton = (
        <button
            className="cursor-pointer disabled:cursor-not-allowed"
            onClick={() => setPurchaseQuantity((prevState) => prevState - 1)}
            disabled={purchaseQuantity > 1 ? false : true}
        >-</button>
    )

    const data = [
        {
            propName: 'Mã hàng',
            propValue: 231312312312,
        },
        {
            propName: 'Nhà xuất bản',
            propValue: 'NXB Trẻ',
        },
        {
            propName: 'Tác giả',
            propValue: 'NXB Trẻ',
        },
        {
            propName: 'Năm xuất bản',
            propValue: 2023,
        },
        {
            propName: 'Ngôn ngữ',
            propValue: 'Tiếng Việt',
        },
        {
            propName: 'Số trang',
            propValue: 239
        }
    ]

    return (
        <Flex vertical gap={8}>
            <Flex vertical className="size-auto rounded-lg border-grey border-2 p-4" >
                <h1 className="text-md font-bold">Các Cuộc Chiến Tranh Tiền Tệ (Tái Bản 2023)</h1>
                <Flex className="text-xs">
                    <Flex justify="space-between" className="w-full">
                        <p>Nhà cung cấp: <strong>NXB Trẻ</strong></p>
                        <p>Tác giả: <strong>James Rickards</strong></p>
                    </Flex>
                </Flex>
                <Flex className="text-xs">
                    <Rate disabled defaultValue={0} />
                    <p>{`(0 đánh giá) | Đã bán 100`}</p>
                </Flex>
                <Flex gap={8}>
                    <h1 className="text-soft-red font-bold">{formatPrice(134000)}</h1>
                    <p className="text-xs text-grey line-through">{formatPrice(150000)}</p>
                </Flex>
            </Flex>
            <Flex vertical gap={8} className="size-auto rounded-lg text-xs border-grey border-2 p-4" >
                <h1 className="text-sm font-bold">Thông tin vận chuyển</h1>
                <Flex gap={8}>
                    <p>Giao hàng đến: Landmark 72</p>
                    <p className="text-blue cursor-pointer font-bold">Thay đổi</p>
                </Flex>
                <Flex gap={8} align="center">
                    <p>Số lượng</p>
                    <InputNumber
                        className="[&::-webkit-inner-spin-button]:appearance-none w-28 "
                        controls={false}
                        min={1}
                        defaultValue={1}
                        value={purchaseQuantity}
                        addonBefore={minusAmountButton}
                        addonAfter={addAmountButton}
                    />
                </Flex>
            </Flex>
            <Flex vertical className="size-auto rounded-lg text-sm border-grey border-2 p-4" >
                <h1 className="text-md font-bold">Thông tin chi tiết</h1>
                <Table dataSource={data} pagination={false} showHeader={false}>
                    <Column className="text-xs text-grey" dataIndex="propName" key="propName" />
                    <Column className="text-xs" dataIndex="propValue" key="propValue" />
                </Table>
            </Flex>
        </Flex>
    )
}

export default BookInformation