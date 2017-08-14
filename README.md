# CityImpact
[Demo Page](https://jonathanlofton.github.io/CityImpactDemo/)

## Overview

Feeling out of touch with your community?

CityImpact enables users to have their finger on the pulse of their local communities. All at the tip of their fingers with this easy to use, intuitive mobile application. CityImpact was created with React Native, and a MongoDB / Node.js backend to bring this experience to the user.

Navigate around the map to find events near you. And if you feel like participating go ahead and join it!
(gif of user moving around and clicking events and going to the show page)

Host an event yourself by holding down anywhere on the map to create an event in that location.
(gif of creating event and going to show page to join event)

The mission is to make it effortless for someone to get involved with their respective communities.

## Technologies
  CityImpact utilizes a Redux data architecture to enable unidirectional data flow with React Native to allow for cross mobile functionality. MongoDB / Express / Node.js backend serves as an API for the application and also means our whole application is written in 100% javascript!

  Third Party APIS involved:

   + [React Native Geocoding](https://developers.google.com/maps/documentation/javascript/geocoding)
      - An event is made with latitude longitude, this allows for events to have an address associated with them as well.

    <p align="center">
    <img src="./docs/Mapview.png">
    </p>

## Features
  ### OAuth integration

  ### Requesting Geographical Data
  + When a new user logs into CityImpact their Geographical location will be requested so the map will be oriented appropriately.

  ``` javascript
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.props.receiveCurrentUser(nextProps.user);
    }
  }

  _getLocationAsync = async () => {
    const { Location, Permissions } = Expo;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  ```

  ### Creating Address from Latitiude / Longitude Data
  + Using latitude / longitutde data which is produced from a user pressing on the map, that user can create an event that's visible on the map as a marker. If another user goes to the show page of that event there will be an address shown, that address was created by using the latitude / longitutde data produced from the press.

  ``` javascript
  coordsToAddress() {
    const { params } = this.props.navigation.state;

    Geocoder.setApiKey('AIzaSyAjlc_-1s0PP53gxwcZHpGtNQryjcKzvZs');
    Geocoder.getFromLatLng(
      this.props.navigation.state.params.latitude,
      this.props.navigation.state.params.longitude
    ).then(
      json =>  {
      this.setState({address: json.results[0].formatted_address});
    },
    error => {
      alert(error);
    });
  }
```

 <p align="center">
 <img src="./docs/Eventshow.png">
 </p>

## Future Features
  This is just the beginning. Our goal is to have an application that makes it easy for people to help their community in many ways. Here are some soon to come features that we will be adding.

  + Adding friends through their CityImpact account
  + Events can be anything, having a more detailed way to sort / search events by categories like community service (clean park, volunteer) / local (yard sale, block party, bbq) / charity events
  + Page to donate to events or charities
  + Search / filter for events on map and index
