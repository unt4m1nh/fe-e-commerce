import { Flex } from "antd";
import BookCard from "./BookCard";
import { useNavigate } from "react-router-dom";

const BookList = () => {
    const navigate = useNavigate();
    return (
        <Flex wrap gap={24} align="center">
            <BookCard
                book_image="https://cdn0.fahasa.com/media/catalog/product/t/h/the-space-barons-01.jpg"
                book_title="Clue of the Wooden Puppet"
                original_price={250000}
                sale_price={10}
                ratings={5}
                total_reviews={1000}
                onClick={() => {
                    navigate(`/book/1`)
                }}
            />
            <BookCard
                book_image="https://cdn0.fahasa.com/media/catalog/product/t/h/the-space-barons-01.jpg"
                book_title="Clue of the Wooden Puppet"
                original_price={250000}
                sale_price={10}
                ratings={5}
                total_reviews={1000}
                onClick={() => {
                    navigate(`/book/2`)
                }}
            />
            <BookCard
                book_image="https://cdn0.fahasa.com/media/catalog/product/t/h/the-space-barons-01.jpg"
                book_title="Clue of the Wooden Puppet"
                original_price={250000}
                sale_price={10}
                ratings={5}
                total_reviews={1000}
                onClick={() => {
                    navigate(`/book/3`)
                }}
            />
            <BookCard
                book_image="https://cdn0.fahasa.com/media/catalog/product/t/h/the-space-barons-01.jpg"
                book_title="Clue of the Wooden Puppet"
                original_price={250000}
                sale_price={10}
                ratings={5}
                total_reviews={1000}
                onClick={() => {
                    navigate(`/book/4`)
                }}
            />
            <BookCard
                book_image="https://cdn0.fahasa.com/media/catalog/product/t/h/the-space-barons-01.jpg"
                book_title="Clue of the Wooden Puppet"
                original_price={250000}
                sale_price={10}
                ratings={5}
                total_reviews={1000}
                onClick={() => {
                    navigate(`/book/5`)
                }}
            />
            <BookCard
                book_image="https://cdn0.fahasa.com/media/catalog/product/t/h/the-space-barons-01.jpg"
                book_title="Clue of the Wooden Puppet"
                original_price={250000}
                sale_price={10}
                ratings={5}
                total_reviews={1000}
                onClick={() => {
                    navigate(`/book/6`)
                }}
            />
        </Flex>
    )
}

export default BookList;