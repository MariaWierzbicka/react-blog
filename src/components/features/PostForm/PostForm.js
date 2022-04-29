import { Form, Button, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";
import { getAllCategories } from '../../../redux/categoriesRedux';
import shortid from 'shortid';


const PostForm = ({action, actionText, ...props}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(state => getAllCategories(state));

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [category, setCategory] = useState(props.category || '');

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const id = props.id

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    setCategoryError(!categoryError);
 
    if(content && publishedDate && category){
      dispatch(action( {id, title, author, publishedDate, shortDescription, content, category} ));
      navigate('/');
    };
  };

  return (
    <>
    <Form onSubmit={validate(handleSubmit)}>
      <Col md={6} sm={12}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            {...register("title", { required: true, minLength: 3 })}
            type="text"
            value={title}
            placeholder="Type title"
            onChange={e => setTitle(e.target.value)}/>
            {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min: 3)</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Author</Form.Label>
          <Form.Control 
            {...register("author", { required: true, minLength: 3 })}
            type="text" value={author} placeholder="Type author"
            onChange={e => setAuthor(e.target.value)}/>
            {errors.author && <small className="d-block form-text text-danger mt-2">Name is too short (min: 3)</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Published</Form.Label>
          <DatePicker 
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)} />
            {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categories</Form.Label>
          <Form.Select value={category} onChange={e => setCategory(e.target.value) }>
            <option value="" disabled>Select category...</option>
            {categories.map(category =>
                <option key={shortid()}>{category.name}</option>
            )}
          </Form.Select>
          {categoryError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>
      </Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          {...register("shortDescription", { required: true, minLength: 20 })}
          as="textarea" value={shortDescription} rows={2} maxLength="70" placeholder="Type description" 
          onChange={e => setShortDescription(e.target.value)}/>
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Description is too short (min: 20)</small>}
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Main content</Form.Label>
          <ReactQuill value={content} onChange={value => setContent(value)} />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
      </Form>
    </>
  )
}

export default PostForm;
