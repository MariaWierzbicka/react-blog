import { Form, Button, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const PostForm = ({action, actionText, ...props}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const id = props.id
  const payload = {id, title, author, publishedDate, shortDescription, content};

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(action( payload ))
    navigate('/');
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Col md={6} sm={12}>
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text"  value={title} placeholder="Type title" onChange={e => setTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={author} placeholder="Type author" onChange={e => setAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Published</Form.Label>
          <Form.Control type="text" value={publishedDate} placeholder="Type date" onChange={e => setPublishedDate(e.target.value)}/>
        </Form.Group>
      </Col>
      <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" value={shortDescription} rows={3} placeholder="Type description" onChange={e => setShortDescription(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Main content</Form.Label>
          <Form.Control as="textarea" value={content} rows={5} placeholder="Type text" onChange={e => setContent(e.target.value)} />
        </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  )
}

export default PostForm;