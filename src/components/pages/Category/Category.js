import styles from './Category.module.scss';
import { Row, Col, Button } from 'react-bootstrap';
import { getPostsByCategory } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import dateToString from '../../../utils/dateToString';


const Category = () => {


  const { categoryName } = useParams();

  const posts = useSelector(state => getPostsByCategory(state, categoryName) );
  
  return (
    <>
    <Row className="py-2 justify-content-between align-items-center">
      <Col xs="9">
      <h2 className={styles.pageTitle}>{categoryName}</h2>      
      </Col>
    </Row>
    <Row className={`justify-content-${posts.length % 3 === 0 ? 'between' : 'around'}`}>       
      {posts.map(post =>
        <Col key={shortid()} className={styles.singlePost} xs={12} sm={5} md={3}>
          <h4>{post.title}</h4>
          <p><span>Author: </span>{post.author}<br></br><span>Published: </span>{dateToString(post.publishedDate)} <br></br>
          <span>Category: </span>{post.category}</p>
          <p className={styles.description}>{post.shortDescription}</p>
            <Link key={post.id} to={'/post/' + post.id}>
              <Button>Read more</Button>
            </Link>
        </Col>
        )}
        </Row>
    </>
  )
};

export default Category;
