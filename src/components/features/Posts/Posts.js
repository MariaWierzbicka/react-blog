import styles from './Posts.module.scss';
import { useSelector } from 'react-redux';
import {getAllPosts} from '../../../redux/postsRedux';
import SinglePost from '../SinglePost/SinglePost';
import { Col, Row } from 'react-bootstrap';

const Posts = () => {

  const posts = useSelector(state => getAllPosts(state))

  return (
    <Row className={`${styles.posts} md-justify-content-start lg-justify-content-between`}>        
      {posts.map(post => <Col key={post.id} sm="12" md="6" lg="4"><SinglePost key={post.id} {...post} /></Col>)}
    </Row>
  )
}

export default Posts;