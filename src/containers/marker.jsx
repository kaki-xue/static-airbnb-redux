import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';

class Marker extends Component {

    render() {
      let marker = null;


      if (this.props.selectedflat) {
        return ( <div
      style={{height:'20px', width:'20px', backgroundColor:'red', borderRadius:'50%'}}
      lat = {this.props.selectedflat.lat}
      lng = {this.props.selectedflat.lng} />

      ) };


    }

}


    function mapStateToProps(state) {

      return {
        selectedflat: state.selectedflat

      }
    }


export default connect(mapStateToProps)(Marker);
