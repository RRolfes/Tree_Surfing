import React from 'react';
import ReactDOM from 'react-dom';

const mapCenter = { lat: 37.775, lng: -121.671 };

class Map extends React.Component {

  constructor(props) {
    super(props);

    this.addTreeHouse = this.addTreeHouse.bind(this);
  }

  componentDidMount () {
    const map = (this.refs.map);
    const options = {
      center: mapCenter,
      zoom: 9,
      scrollwheel: false
    };

    this.map = new google.maps.Map(map, options);
    const treeHouses = this.props.treeHouses;
    Object.keys(treeHouses).forEach( id => {
      this.addTreeHouse(treeHouses[id]);
    });
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter(bounds);
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
      <div className='map' ref='map'/>
    );
  }
}

export default Map;
