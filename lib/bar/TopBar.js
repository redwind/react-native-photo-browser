import React, { PropTypes } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import { BarContainer } from './BarContainer';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TopBar extends React.Component {

  static propTypes = {
    displayed: PropTypes.bool,
    title: PropTypes.string,
    height: PropTypes.number,
    backTitle: PropTypes.string,
    backImage: PropTypes.any,
    onBack: PropTypes.func,
  };

  static defaultProps = {
    displayed: false,
    title: '',
    backTitle: '',
    backImage: require('../../Assets/angle-left.png'),
  };

  renderBackButton() {
    const { onBack, backImage } = this.props;

    // do not display back button if there isn't a press handler
    if (onBack) {
      return (
        <TouchableOpacity style={styles.backContainer} onPress={onBack}>
          <Icon name="ios-arrow-back" size={25} color="#fff" />
          {Platform.OS === 'ios' &&
            <Text style={[styles.text, styles.backText]}>
              {this.props.backTitle}
            </Text>}
        </TouchableOpacity>
      );
    }

    return null;
  }

  render() {
    const {
      displayed,
      title,
      height,
    } = this.props;

    return (
      <BarContainer
        style={styles.container}
        displayed={displayed}
        height={height}
      >
        {this.renderBackButton()}
        <Text style={styles.text}>{title}</Text>
      </BarContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  backContainer: {
    position: 'absolute',
    flexDirection: 'row',
    left: 10,
    top: 25,
    width: 50,
  },
  backText: {
    paddingTop: 14,
    marginLeft: -10,
  },
});
