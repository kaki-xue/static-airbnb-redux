



import React, {Component} from 'react';
import Flat from './flat';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setFlats} from '../actions/index'

class FlatList extends Component {
  componentWillMount() {
   this.props.setFlats();
  }


    render() {
      return(
        <div className="col-sm-7 flat-list">

          {this.props.flats.map((flat)=> {
            return <Flat flat={flat} key={flat.name} />
          })}
        </div>
        )
    }

}
    function mapDispatchToProps(dispatch) {
      return bindActionCreators(

        {setFlats:setFlats},
        dispatch
        );
    }
    function mapStateToProps(state) {
      return {
        flats: state.flats

      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
