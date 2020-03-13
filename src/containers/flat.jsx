
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFlat} from '../actions/index'

class Flat extends Component {

    handleClick = () => {


      this.props.selectFlat(this.props.flat)

    }


    render() {
      let classes = "flat card";

      if (this.props.flat === this.props.selectedflat) {
         classes += " active"
      };
      return (
       <div className={classes} onClick={this.handleClick}
       style={{ backgroundImage:`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2> {this.props.flat.name}</h2>
        </div>
      </div>
        );
    }

}
 function mapDispatchToProps(dispatch) {
      return bindActionCreators(

        {selectFlat:selectFlat},
        dispatch
        );
    }
    function mapStateToProps(state) {

      return {
        selectedflat: state.selectedflat

      }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Flat);
