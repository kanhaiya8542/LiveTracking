import React, { Component } from 'react';
import {
  Text, AppRegistry, StyleSheet,
  View
} from 'react-native';


import MapView from 'react-native-maps';


import RunInfo from './components/run-info';
import RunInfoNumeric from './components/run-info-numeric';

const styles = StyleSheet.create({

  infoWrapper: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1


  },
  map: {
    ...StyleSheet.absoluteFillObject
  }



});
export default class LiveTracking extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    setInterval(() => {
      this.distanceInfo.setState({ value: Math.random() * 100 });
      this.speedInfo.setState({ value: Math.random() * 15 });
      this.directionInfo.setState({
        value: this.directionInfo.state == 'N' ? 'NW' : 'N'
      });
    }, 1000);


  }


  render() {
    return (
      <View style={{ flex: 1 }}>

      
      <MapView style={styles.map} />

        <View style={styles.infoWrapper}>


          <RunInfoNumeric title="Distance" unit="km"

            ref={(info) => this.distanceInfo = info}
          />
          <RunInfoNumeric title="Speed" unit="km/h"

            ref={(info) => this.speedInfo = info}
          />


          <RunInfo title="Direction"
            value="NE"
            ref={(info) => this.directionInfo = info}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('LiveTracking', () => LiveTracking);
