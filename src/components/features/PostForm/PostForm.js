import { Form, Button, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';


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
    <>
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
          <DatePicker 
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)} />
        </Form.Group>
      </Col>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" value={shortDescription} rows={2} maxLength="70" placeholder="Type description" onChange={e => setShortDescription(e.target.value)}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Main content</Form.Label>
          <ReactQuill value={content} onChange={value => setContent(value)} />
          {/* <Form.Control as="textarea" value={content} rows={5} placeholder="Type text" onChange={e => setContent(e.target.value)} /> */}
        </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
      </Form>
    </>
  )
}

export default PostForm;
