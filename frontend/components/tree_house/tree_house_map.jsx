import React from 'react';
import ReactDOM from 'react-dom';

const mapCenter = { lat: 39.8283, lng: -98.580 };

class Map extends React.Component {

  constructor(props) {
    super(props);

    this.addTreeHouse = this.addTreeHouse.bind(this);
  }

  componentDidMount () {
    const map = (this.refs.map);
    const options = {
      center: mapCenter,
      zoom: 3
    };

    this.map = new google.maps.Map(map, options);
    const treeHouses = this.props.treeHouses;
    Object.keys(treeHouses).forEach( id => {
      this.addTreeHouse(treeHouses[id]);
    });
  }

  addTreeHouse(treeHouse) {
    const pos = new google.maps.LatLng(treeHouse.lat, treeHouse.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
  }


  render() {
    return (
      <div>
        <div className='map' ref='map'/>
      </div>
    );
  }
}

export default Map;
