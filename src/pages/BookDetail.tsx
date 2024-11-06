import { Flex } from "antd";
import ImageContainer from "../components/bookDetail/ImageContainer";
import BookInformation from "../components/bookDetail/BookInformation";
import BookReview from "../components/bookDetail/BookReview";

function BookDetail() {
    return (
     
            <Flex vertical className="px-24 py-8">
                <h1 className="text-4xl font-bold">Thông tin sản phẩm</h1>
                <Flex className="justify-center">
                    <ImageContainer />
                    <BookInformation />
                </Flex>
                <BookReview />
            </Flex>
  
      
    )
}

export default BookDetail;