
import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import Marker from './marker'


class Map extends Component {

    render() {
      let marker = null;
      let center = { lat: 48.856614, lng: 2.352222 };
      // if(this.props.selectedflat) {
      //   center = {lat: this.props.selectedflat.lat, lng: this.props.selectedflat.lng};
      // }

      // if (this.props.selectedflat) {
      //   marker = <div
      // style={{height:'20px', width:'20px', backgroundColor:'red', borderRadius:'50%'}}
      // lat = {this.props.selectedflat.lat}
      // lng = {this.props.selectedflat.lng} />;
      // center = {lat: this.props.selectedflat.lat, lng: this.props.selectedflat.lng}
      // };

      return (

        <div className="col-sm-5" style={{height: '100vh'}}>
          <GoogleMapReact center={center} defaultZoom={15}>
          <Marker />
          </GoogleMapReact>
        </div>
        )
    }

}


    function mapStateToProps(state) {

      return {
        selectedflat: state.selectedflat

      }
    }


export default connect(mapStateToProps)(Map);


