import { Form, Button, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router';



const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({title, author, publishedDate, shortDescription, content}));
    navigate('/');
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <Col md={6} sm={12}>
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Type title" onChange={e => setTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Type author" onChange={e => setAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Published</Form.Label>
          <Form.Control type="text" placeholder="Type date" onChange={e => setPublishedDate(e.target.value)}/>
        </Form.Group>
      </Col>
      <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Type description" onChange={e => setShortDescription(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Main content</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Type text" onChange={e => setContent(e.target.value)} />
        </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddPostForm;