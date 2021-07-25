import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { MapPin } from 'react-feather'
let mapkey = 'AIzaSyDBW4eEXHaZ2SVTcg3zwLJ3bsSqUeio0jY'
if (process.env.GATSBY_NETLIFY_MAP_KEY) {
  mapkey = process.env.GATSBY_NETLIFY_MAP_KEY
}
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: -28.0914483,
      lng: 153.4425208
    },
    zoom: 17
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%', minHeight: '60vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={this.props.center.lat} lng={this.props.center.lng} text={'Kreyser Avrora'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap

const Marker = () => {
  return (
    <div style={{ color: 'red' }}>
      <MapPin />
    </div>
  )
}
