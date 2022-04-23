import styles from './Home.module.scss';
import Posts from '../../features/Posts/Posts'
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <>
    <Row className="justify-content-between align-items-center">
      <Col xs="9">
      <h2 className={styles.pageTitle}>All posts</h2>      
      </Col>
      <Col xs="3 " className="d-flex justify-content-end" >
        <Link to='post/add'>
          <Button variant="outline-info">Add post</Button>
        </Link>
        </Col>
    </Row>
      <Posts />
    </>
  )
};

export default Home;