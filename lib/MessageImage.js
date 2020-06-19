import PropTypes from 'prop-types';
import React, { Component} from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
// TODO: support web
// @ts-ignore
import Lightbox from 'react-native-lightbox';
import ImageView from "react-native-image-viewing";
import { StylePropType } from './utils';
const styles = StyleSheet.create({
    container: {},
    image: {
        width: 150,
        height: 100,
        borderRadius: 13,
        margin: 3,
        resizeMode: 'cover',
    },
    imageActive: {
        flex: 1,
        resizeMode: 'contain',
    },
});

const images = [
  {
    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
  },
]

export default class MessageImage extends Component {

      constructor(props) {
        super(props);
    this.state = {isVisible: false};
  }

    render() {
        const { containerStyle, lightboxProps, imageProps, imageStyle, currentMessage, } = this.props;
        if (!!currentMessage) {
            return (<View style={[styles.container, containerStyle]}>
          {/* <Lightbox activeProps={{
                style: styles.imageActive,
            }} {...lightboxProps}>
            <Image {...imageProps} style={[styles.image, imageStyle]} source={{ uri: currentMessage.image }}/>
          </Lightbox> */}
          <TouchableOpacity onPress={()=>this.setState(state=>{
              return {isVisible: true}
          })}>
          <Image {...imageProps} style={[styles.image, imageStyle]} source={{ uri: currentMessage.image }}/>
          </TouchableOpacity>
          <ImageView
            images={[{
                uri: currentMessage.image
            }]}
            imageIndex={0}
            visible={this.state.isVisible}
            onRequestClose={() => {
                this.setState(state=>{
                    return {isVisible: false}
                })
            }}
            />
        </View>);
        }
        return null;
    }
}
MessageImage.defaultProps = {
    currentMessage: {
        image: null,
    },
    containerStyle: {},
    imageStyle: {},
    imageProps: {},
    lightboxProps: {},
};
MessageImage.propTypes = {
    currentMessage: PropTypes.object,
    containerStyle: StylePropType,
    imageStyle: StylePropType,
    imageProps: PropTypes.object,
    lightboxProps: PropTypes.object,
};
//# sourceMappingURL=MessageImage.js.map