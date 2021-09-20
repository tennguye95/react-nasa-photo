import React, { Component } from 'react';
import { Segment, Image, Header, Icon, Menu } from 'semantic-ui-react';
import { FaThumbsUp, FaRegThumbsUp } from 'react-icons/fa';

class Photo extends Component {
  render() {
    console.log(this.props.photo);
    return (
      <React.Fragment>
        <Segment.Group horizontal>
          <Segment compact>
            <Header as="h2" textAlign="center">
              {this.props.photo.title}
              {this.props.photo &&
              this.props.favorites.find(
                (photo) => photo.url === this.props.photo.url
              ) ? (
                <Icon
                  name="star"
                  color="yellow"
                  // floated="right"
                  onClick={() =>
                    this.props.removeFromFavorites(this.props.photo)
                  }
                />
              ) : (
                <Icon
                  name="star outline"
                  color="grey"
                  // floated="right"
                  onClick={() => this.props.addtoFavorites(this.props.photo)}
                />
              )}
            </Header>
          </Segment>
        </Segment.Group>
        <Segment>
          <Image
            alt={this.props.photo.title}
            src={this.props.photo.hdurl}
            centered
          />
          <div className="mx">
            {this.props.photo &&
            this.props.likes.find(
              (photo) => photo.url === this.props.photo.url
            ) ? (
              <FaThumbsUp
                onClick={() => this.props.likePhoto(this.props.photo, false)}
                fontSize="2rem"
                color="grey"
              />
            ) : (
              <FaRegThumbsUp
                onClick={() => this.props.likePhoto(this.props.photo, true)}
                fontSize="2rem"
                color="grey"
                text="like"
              />
            )}
          </div>
        </Segment>
        <Segment secondary>{this.props.photo.explanation}</Segment>
      </React.Fragment>
    );
  }
}

export default Photo;
