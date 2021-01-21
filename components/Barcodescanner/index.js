import React, {
    AppRegistry,
    Component,
  } from 'react-native';
  import BarcodeScanner from 'react-native-barcodescanner';
  
  class BarcodeScannerExampleApp extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        torchMode: 'off',
        cameraType: 'back',
      };
    }
  
    barcodeReceived(e) {
      console.log('Barcode: ' + e.data);
      console.log('Type: ' + e.type);
    }
  
    render() {
      return (
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived}
          style={{ flex: 1 }}
          torchMode={this.state.torchMode}
          cameraType={this.state.cameraType}
        />
      );
    }
  }
  

   export default BarcodeScannerExampleApp;