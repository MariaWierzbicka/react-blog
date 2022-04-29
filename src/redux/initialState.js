const initialState = {

  categories: [
    {
      name: 'Sports',
    },
    {
      name: 'News',
    },
    {
      name: 'Movies',
    }
  ],
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the first article',
      publishedDate: new Date('03-02-2022'),
      author: 'John Doe',
      category: 'Sports'
    },
    {
      id: '2',
      title: 'Second title',
      shortDescription: 'Short description of the other article...',
      content: 'Main content of the second article',
      publishedDate: new Date('02-02-2022'),
      author: 'Jane Doe',
      category: 'Sports'
    },
    {
      id: '3',
      title: 'Article number three',
      shortDescription: 'Short description of the article no.3...',
      content: 'Main content of the third article',
      publishedDate: new Date('03-02-2022'),
      author: 'Amanda Doe',
      category: 'News'
  }
  ]
};

export default initialState;