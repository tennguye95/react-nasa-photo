import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Photo from './Photo';

class PhotoContainer extends Component {
  render() {
    return (
      <Container>
        <Photo
          photo={this.props.photo}
          addtoFavorites={this.props.addtoFavorites}
          favorites={this.props.favorites}
          removeFromFavorites={this.props.removeFromFavorites}
          likePhoto={this.props.likePhoto}
          likes={this.props.likes}
        />
      </Container>
    );
  }
}

export default PhotoContainer;
