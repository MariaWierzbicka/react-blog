import styles from './SinglePost.module.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SinglePost = (props) => {

  return (
    <div className={styles.singlePost}>
      <h4>{props.title}</h4>
      <p><span>Author: </span>{props.author}<br></br><span>Published: </span>{props.publishedDate}</p>
      <p>{props.shortDescription}</p>
      <Link to={'post/' + props.id}>
        <Button>Read more</Button>
      </Link>
    </div>
  )
}

export default SinglePost;