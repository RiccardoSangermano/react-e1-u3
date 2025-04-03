import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function MyFooter() {
    return (
        <Card bg="dark" text="white">
      <Card.Body className='text-center' >This is some text within a card body.</Card.Body>
    </Card>
    )
}
export default MyFooter;