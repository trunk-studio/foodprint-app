import React, {
  PixelRatio,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
const PIXEL_RATIO = PixelRatio.get();
const StyleSheet = require('../../utils/F8StyleSheet');
import { formatDistance } from '../../utils/place';
const styles = StyleSheet.create({
  commentContent: {
    flex: 1,
    paddingTop: 10 * PIXEL_RATIO,
    paddingBottom: 3.5 * PIXEL_RATIO,
    marginLeft: 13 * PIXEL_RATIO,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontWeight: '700',
    color: '#064C69',
    padding: 2 * PIXEL_RATIO,
    // paddingTop: 3 * PIXEL_RATIO,
    fontSize: 18,
  },
  commentBody: {
    flex: 1,
    marginLeft: 5 * PIXEL_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContent: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 14,
    ios: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 3,
      paddingBottom: 20,
    },
    android: {
      marginLeft: 30,
      marginRight: 30,
      paddingTop: 3,
      paddingBottom: 20,
    },
  },
  infoText: {
    flex: 1,
    flexDirection: 'row',
    padding: 2,
    fontSize: 12,
  },
  itemImg: {
    borderRadius: 3,
    width: 80,
    height: 80,
  },
  rightBlock: {
    flex: 1,
    paddingRight: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function PostListItem(props) {
  function onItemPress() {
    props.onItemPress(props.id);
  }
  return (
    <View style={props.bakColor}>
      <TouchableOpacity underlayColor={"#f3f3f3"} onPress={onItemPress}>
        <View style={styles.commentContent}>
          <View style={styles.imageContent}>
            <Image source={{ uri: props.img }} style={styles.itemImg} />
          </View>
          <View style={styles.commentBody}>
            <Text style={styles.title} numberOfLines={2} >
              {props.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

PostListItem.propTypes = {
  id: React.PropTypes.number,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  img: React.PropTypes.string,
  onItemPress: React.PropTypes.func,
  bakColor: React.PropTypes.object,
  rightText: React.PropTypes.string,
  rightTextStyle: React.PropTypes.object,
  notificationCount: React.PropTypes.number,
  status: React.PropTypes.string,
  level: React.PropTypes.number,
  detail_02: React.PropTypes.string,
  place: React.PropTypes.string,
  distance: React.PropTypes.number,
};

PostListItem.defaultProps = {
  title: '',
  description: '',
  img: 'https://unsplash.it/200/300/?random',
  onItemPress: () => {},
  bakColor: { backgroundColor: 'rgba(255, 255, 255, 1)' },
};
