import React from 'react';
import { CardSection } from '../common';
import { Text, View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

class EventIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.navigateShowPage = this.navigateShowPage.bind(this);
  }

  toggleModal() {
    this.setState({modalVisible: !this.state.modalVisible})
  }

  navigateShowPage() {
    const { event } = this.props
    this.props.navigator.navigate('EventShowPage', {
      _id: event._id,
      title: event.title,
      latitude: event.latitude,
      longitude: event.longitude,
      description: event.description,
      time: event.time,
      date: event.date,
      address: event.address,
      host: event.host,
      attendees: event.attendees
    });
    this.toggleModal();
  }

  _renderModalContent = () => (
    <View style={modalStyle.fullScreen}>
      <Image
      style={{width: '100%', height: '30%'}}
      source={{uri: 'http://res.cloudinary.com/jlofton/image/upload/v1502388682/jungle_qlctue.jpg'}}
      />
      <View>
        <View style={modalStyle.dateTitle}>
          <Text style={modalStyle.showTitle}>{this.props.event.title}</Text>
          <Text style={modalStyle.date}>August 8th</Text>
        </View>
        <Text style={modalStyle.description}>{this.props.event.description}</Text>

        <View style={modalStyle.joinedView}>
          <Text>THIS IS WHERE COMMENTS OR PEOPLE THAT HAVE JOINED WILL BE VIEWED</Text>
        </View>


        <View style={modalStyle.modalButtonContainer}>
          <TouchableOpacity
            style={modalStyle.backButton}
            onPress={() => {this.toggleModal()}}
            >
            <Text style={modalStyle.backButtonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={modalStyle.backButton}
            onPress={() => {this.toggleModal()}}
            >
            <Text style={modalStyle.joinButtonText}>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  render() {
    const { event } = this.props;
    console.log(event);
    return(
      <TouchableOpacity onPress={() => {this.navigateShowPage()}}>
        <View style={styles.cardSection}>
          <View style={styles.information}>
            <Text style={styles.title}>{event.title}</Text>
            <Text>Description: {event.description}</Text>
            <Text>Location: Your moms house</Text>
          </View>
          <View style={styles.photo}>
            <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://res.cloudinary.com/jlofton/image/upload/v1502388682/jungle_qlctue.jpg'}}
          />
          </View>
        </View>
      </TouchableOpacity>

    );

  }

}


// <Modal
//  animationType={"slide"}
//  transparent={true}
//  visible={this.state.modalVisible}
//  onRequestClose={() => {this.setState({modalVisible: false})}}
//  >
//  {this._renderModalContent()}
//  </ Modal>
export default EventIndexItem;


const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '900',
  },
  cardSection: {
    width: '100%',
    borderBottomWidth: 1,
    height: 120,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  information: {
    flex: 1,
  },
  photo: {
    marginLeft: 10,
    width: 100,
    height: 100,
  },
});

const modalStyle = StyleSheet.create({

  dateTitle: {
    marginTop: 20,
    alignItems: 'center',
  },
  date: {
    marginRight: 10,
  },
  description: {
    marginTop: '10%',
    marginBottom: '10%',
    width: '70%',
    alignSelf: 'center',
  },
  joinedView: {
    height: '30%',
    width: '70%',
    alignSelf: 'center',
  },
  fullScreen: {
    marginTop: 30,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  showTitle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',

  },
  backButton: {
    alignSelf: 'flex-end',
    width: '45%',
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    padding: 10,
    textAlign: 'center',
  },
  joinButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    padding: 10,
    textAlign: 'center',
  }
});
