import styles from './SinglePost.module.scss';
import { Button, Col, Row, Modal } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { getPostById, removePost } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';



const SinglePost = (props) => {

  const { postId } = useParams();
  const postData = useSelector(state => getPostById(state, postId));
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove = e => {
    e.preventDefault();
    dispatch(removePost( postData.id ));
    setShow(false);
  }

  if(!postData) return <Navigate to="/" />
  else return (

    <div className={styles.singlePost}>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This action will permanently remove this post.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="danger" onClick={handleRemove}>Delete</Button>
        </Modal.Footer>
    </Modal>

    <Row className="justify-content-between align-items-center">
      <Col xs="8">
        <h2 className={styles.pageTitle}>{postData.title}</h2>      
      </Col>
      <Col xs="4" className="d-flex justify-content-around" >
        <Link to={'/post/edit/'+ postData.id}>
          <Button variant="outline-info">Edit</Button>
        </Link>
        <Button onClick={handleShow} variant="outline-danger">Delete</Button>
      </Col>
    </Row>
      <p><span>Author: </span>{postData.author}<br></br><span>Published: </span>{postData.publishedDate}</p>
      <p>{postData.content}</p>
    </div>
      
  )
}

export default SinglePost;