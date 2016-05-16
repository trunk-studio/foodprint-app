import React, {
  Component,
  Alert,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import InfoBar from '../components/InfoBar';
import CoverCard from '../components/CoverCard';
import NewsBoard from '../components/NewsBoard';
import activityData from '../src/activity.json';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { requestNews } from '../actions/SearchActions';
import { requestToday } from '../actions/DateActions';
import { requestWeather } from '../actions/WeatherActions';
import { requestSetLocation } from '../actions/GeoActions';


const coverImg = {uri: 'https://image.freepik.com/free-vector/kitchen-elements-and-food_23-2147514325.jpg'}; //require('../images/dashboard.jpg');
const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 21,
    marginBottom: 50,
  },
  icon: {
    lineHeight: 15,
    fontSize: 20,
  },
});

export default class Dashboard extends Component {
  componentDidMount() {
    this.props.requestNews();
    this.props.requestToday();
  }

  render() {
    function onListItemPress(detail) {
      Actions.newsDetail({
        newsTitle: detail.title,
        newsContent: detail.content,
      });
    }
    const { listData, month, date, weekday, temp, desc, iconId } = this.props;
    let activityListData = [];
    for (const item of activityData.activity.list) {
      activityListData.push({
        title: item.title,
        content: item.description,
      });
    }
    return (
      <View style={styles.wrapper}>
        <CoverCard img={coverImg} title={'食安一指通'} height={windowSize.height * 0.3} />
        {/*
        <InfoBar month={month} date={date} weekday={weekday} temp={temp} desc={desc}
          iconId={iconId} locationName={this.props.locationName}
        />
        */}
        <NewsBoard boardTitle={'最新消息'} listData={activityListData}
          itemCount={3} onItemPress={onListItemPress}
        />
      </View>
    );
  }
}

Dashboard.propTypes = {
  onListItemPress: React.PropTypes.func,
  requestNews: React.PropTypes.func,
  requestSearchPost: React.PropTypes.func,
  requestToday: React.PropTypes.func,
  requestSetLocation: React.PropTypes.func,
  requestWeather: React.PropTypes.func,
  uri: React.PropTypes.string,
  month: React.PropTypes.number,
  date: React.PropTypes.number,
  weekday: React.PropTypes.string,
  desc: React.PropTypes.string,
  iconId: React.PropTypes.string,
  listData: React.PropTypes.array,
  temp: React.PropTypes.number,
  countryName: React.PropTypes.string,
  locationName: React.PropTypes.string,
};

Dashboard.defaultProps = {
  onListItemPress: null,
  requestNews: null,
  requestSearchPost: null,
  requestToday: null,
  requestSetLocation: null,
  requestWeather: null,
  month: 1,
  date: 1,
};

function _injectPropsFromStore(state) {
  return {
    listData: state.search.newsList,
    month: state.getToday.month,
    date: state.getToday.date,
    weekday: state.getToday.weekday,
    desc: state.weather.desc,
    iconId: state.weather.iconId,
    countryName: state.geo.countryName,
    locationName: state.geo.locationName,
    temp: state.weather.temp,
  };
}

const _injectPropsFormActions = {
  requestNews,
  requestToday,
  requestSetLocation,
  requestWeather,
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(Dashboard);
