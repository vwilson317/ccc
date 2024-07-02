import React from 'react';
// import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Link } from 'expo-router';

const { width } = Dimensions.get('screen');

class Barraca extends React.Component {
  render() {
    // @ts-ignore
    const { navigation, barraca, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Product', { product: barraca })}>
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={{ uri: barraca.image }} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Product', { product: barraca })}>
          <Block flex space="between" style={styles.productDescription}>
            <Text size={14} style={styles.productTitle}>{barraca.title}</Text>
            {/* <Text size={12} muted={!priceColor} color={priceColor}>Menu</Text> */}
            <Link href="">Menu</Link>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

// export default withNavigation(Product);
export default Barraca;

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme?.COLORS?.WHITE,
    marginVertical: theme?.SIZES?.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: (theme?.SIZES?.BASE != undefined ? theme?.SIZES?.BASE : 0) / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: (theme?.SIZES?.BASE != undefined ? theme?.SIZES?.BASE : 0) / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - (theme?.SIZES?.BASE != undefined ? theme?.SIZES?.BASE : 0) * 3 ,
  },
  shadow: {
    shadowColor: theme?.COLORS?.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});