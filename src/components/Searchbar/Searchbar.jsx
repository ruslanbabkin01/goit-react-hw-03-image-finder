import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import React, { Component } from 'react';
import {
  Header,
  SearchForm,
  BtnSubmit,
  InputForm,
  ButtonIcon,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ query: '' });

    if (this.state.query.trim() === '') {
      return Notify('Insert correct request');
    }
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <BtnSubmit type="submit">
            <ButtonIcon />
          </BtnSubmit>

          <InputForm
            type="text"
            name="query"
            autoComplete="off"
            value={this.state.query}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
