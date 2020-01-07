import React from "react";
import {View, Text} from "react-native";
import QRCode from "react-native-qrcode-svg";

const QrCode = props => {
    return(
        <View>
            <QRCode 
            value={props.val}
            />
        </View>
    )
};

export default QrCode;