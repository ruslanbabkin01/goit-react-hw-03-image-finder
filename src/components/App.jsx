import React, { Component } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { nanoid } from 'nanoid';
import { ImageGallery, Searchbar, Modal, Loader } from './index';
import { Container } from './App.styled';
import { fetchImages } from 'api/pixabayAPI';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: 'cat',
    totalImg: '',
    showModal: false,
    modalImg: null,
    currentPage: 1,
  };

  searchImages() {}

  onLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  async componentDidMount() {
    const { query, currentPage } = this.state;
    this.setState({ isLoading: true });

    try {
      const response = await fetchImages(query, currentPage);
      this.setState({
        images: response.data.hits,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, isLoading, error } = this.state;
    const { handleSubmit } = this;

    return (
      <Container>
        <Searchbar onSubmit={handleSubmit} />
        <div>
          {error && <p>Whoops, something went wrong: {error.message}</p>}
          {isLoading && <Loader />}
          {images.length > 0 && <ImageGallery images={images} />}
        </div>

        {/* <Modal /> */}
      </Container>
    );
  }
}
