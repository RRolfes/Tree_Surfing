import React from 'react';
import ReactDOM from 'react-dom';


const mapCenter = { lat: 37.775, lng: -121.671 };

const options = {
  center: mapCenter,
  zoom: 8,
  scrollwheel: false
};



class Map extends React.Component {

  constructor(props) {
    super(props);

    this.addTreeHouse = this.addTreeHouse.bind(this);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, options);

    this.registerListeners();
  }

  componentDidUpdate() {
    Object.keys(this.props.treeHouses).forEach( id => {
      this.addTreeHouse(this.props.treeHouses[id]);
    });
    if (this.props.location && this.props.location.setLocation){
      const lat = this.props.location.lat;
      const lng = this.props.location.lng;
      const northEast = this.props.location.northeast;
      const southWest = this.props.location.southwest;
      const newLatLng = new google.maps.LatLng(lat, lng);

      const northEastBound = new google.maps.LatLng(northEast[0], northEast[1]);
      const southWestBound = new google.maps.LatLng(southWest[0], southWest[1]);
      const newBounds = new google.maps.LatLngBounds(southWestBound, northEastBound);

      this.map.fitBounds(newBounds);
      this.map.setZoom(this.map.getZoom() + 1);
      this.map.panTo(newLatLng);

      this.props.resetLocation();
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter(bounds);
    });
  }

  addTreeHouse(treeHouse) {
    const pos = new google.maps.LatLng(treeHouse.lat, treeHouse.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      icon: 'http://res.cloudinary.com/dreuhltzt/image/upload/v1501105521/icons8-Treehouse-48_o9q0uy.png'
    });
  }


  render() {
      return (
        <div className='map' ref='map'/>
      );
  }
}

export default Map;
