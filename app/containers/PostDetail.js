import React, {
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native';
import CoverCard from '../components/CoverCard';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';
const StyleSheet = require('../utils/F8StyleSheet');
const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: '500',
  },
  infoText: {
    flex: 1,
    padding: 2,
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    textShadowColor: '#444',
    textShadowOffset: { width: 1, height: 1 },
  },
  placeText: {
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 10,
  },
  infoContainer: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    marginBottom: 50,
    ios: {
      marginTop: 65,
    },
    android: {
      marginTop: 55,
    },
  },
  scrollFrame: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollContainer: {
    flex: 1,
    margin: 15,
    backgroundColor: 'rgb(246, 246, 246)',
  },
});


function PostDetail(props) {
  function status() {
    let cover;
    if (props.status && props.status !== 'null') {
      cover = (
        <CoverCard
          title={props.status}
          height={windowSize.height * 0.4}
          textStyle={{
            width: windowSize.width,
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fontSize: 20,
            textAlign: 'center',
            color: '#fff',
          }}
          img={{ uri: props.pic }} style={styles.coverContainer}
        />
      );
    } else {
      cover = (
        <CoverCard
          height={windowSize.height * 0.4}
          img={{ uri: props.pic }} style={styles.coverContainer}
        />
      );
    }
    return cover;
  }
  function info() {
    let infos = [];
    if (props.detail_01 !== 'null') {
      infos.push(
        <Text
          style={styles.placeText}
          key={'detail_01'}
        >
          {props.detail_01}
        </Text>
      );
    }
    if (props.detail_02 !== 'null') {
      infos.push(
        <Text
          style={styles.placeText}
          key={'detail_02'}
        >
          {props.detail_02}
        </Text>
      );
    }
    return infos;
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollFrame}>
        {status()}
        <View style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
          <View index={0} style={styles.scrollContainer}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={styles.title}>
                {props.title}
              </Text>
              <Text style={styles.placeText}>
                {info()}
              </Text>
            </View>
            <Text style={{ fontSize: 14, marginBottom: 20, lineHeight: 25 }}>
               {props.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

PostDetail.propTypes = {
  id: React.PropTypes.number,
  title: React.PropTypes.string,
  pic: React.PropTypes.string,
  detail_01: React.PropTypes.string,
  detail_02: React.PropTypes.string,
  detail_03: React.PropTypes.string,
  detail_04: React.PropTypes.string,
  description_01: React.PropTypes.string,
  description_02: React.PropTypes.string,
  status: React.PropTypes.string,
  recommend: React.PropTypes.string,
  level: React.PropTypes.number,
  place: React.PropTypes.string,
  lat: React.PropTypes.number,
  lon: React.PropTypes.number,
  map: React.PropTypes.string,
  url: React.PropTypes.string,
};

PostDetail.defaultProps = {};

function _injectPropsFromStore(state) {
  return {};
}

const _injectPropsFormActions = {};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(PostDetail);
