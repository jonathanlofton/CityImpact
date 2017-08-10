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
  }

  toggleModal() {
    this.setState({modalVisible: !this.state.modalVisible})
  }

  _renderModalContent = () => (
    <View style={styles.fullScreen}>
      <Image
      style={{width: '100%', height: '30%'}}
      source={{uri: 'http://res.cloudinary.com/jlofton/image/upload/v1502388682/jungle_qlctue.jpg'}}
      />
      <View>
        <View style={styles.dateTitle}>
          <Text>August 8th</Text>
          <Text style={styles.showTitle}>{this.props.event.title}</Text>
        </View>
        <Text>{this.props.event.description}</Text>
          <TouchableOpacity
            onPress={() => {this.toggleModal()}}
            >
            <Text style={styles.backButton}>Close</Text>
          </TouchableOpacity>
      </View>
    </View>
  )

  render() {
    const { event } = this.props;
    console.log(event);
    return(
      <TouchableOpacity onPress={() => {this.toggleModal()}}>
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
          <Modal
           animationType={"slide"}
           transparent={true}
           visible={this.state.modalVisible}
           onRequestClose={() => {this.setState({modalVisible: false})}}
           >
           {this._renderModalContent()}
           </ Modal>
        </View>
      </TouchableOpacity>

    );

  }

}

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
  showDescription: {

  },
  backButton: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  dateTitle: {
    flexDirection: 'row',
  }
});
