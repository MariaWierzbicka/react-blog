import styles from './Posts.module.scss';
import { useSelector } from 'react-redux';
import {getAllPosts} from '../../../redux/postsRedux';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { Container } from 'react-bootstrap';

const Posts = () => {

  const posts = useSelector(state => getAllPosts(state))

  return (
    <Container> 
      <Row className={`justify-content-${posts.length % 3 === 0 ? 'between' : 'around'}`}>       
      {posts.map(post =>
        <Col key={shortid()} className={styles.singlePost} xs={12} sm={5} md={3}>
          <h4>{post.title}</h4>
          <p><span>Author: </span>{post.author}<br></br><span>Published: </span>{post.publishedDate}</p>
          <p>{post.shortDescription}</p>
            <Link key={post.id} to={'post/' + post.id}>
              <Button>Read more</Button>
            </Link>
        </Col>
        )}
        </Row>
    </Container>
  )
}

export default Posts;

// className={`justify-content-${posts.length % 3 === 0 ? 'between' : 'around'}`}