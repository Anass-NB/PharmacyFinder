import { Button, Linking, StyleSheet, TouchableOpacity,ImageBackground } from "react-native";
import { Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import ReportPharmacy from "./ReportPharmacy";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import i18n from "./i18n";









const PharmacyMap = ({ route, }) => {
  const { name, description, latitude, longitude, phone1, address, id, ville, distance, report_count, support_shipping } = route.params;

  const pharmacyRegion = {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const handleOpenMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const handleWhatsappMessage = () => {
    const url = `https://wa.me/${phone1}?text=${encodeURIComponent("Bonjour")}`;
    Linking.openURL(url);
  };
  const handleSaveIpAddress = async () => {
    await saveIpAddress();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./../../assets/mapback.jpg")} style={styles.mapButtonBackground} >
 
        <Button
          title={i18n.t("open_in_google_maps") }
          onPress={handleOpenMaps}
          color="#03C988"
          style={styles.mapButton}
        />
      </ImageBackground>


      <View style={{ margin: 10 }}>

        <Text style={styles.pharmacyName}> {name} <Text style={styles.city} >{ville}</Text></Text>

        <Text style={styles.pharmacyWebsite}>
          <Text style={styles.mainTitle}>{i18n.t("address")} </Text>: {address}
        </Text>
        <Text style={styles.pharmacyDescription}><Text style={styles.mainTitle}>
          {i18n.t("description")}</Text>: {description}</Text>
        <Text style={styles.pharmacyDescription}><Text style={styles.mainTitle}>
          {i18n.t("distance")}</Text>: {parseFloat(distance).toFixed(2)} KM</Text>

        <View style={styles.buttonSection}>

          {report_count >= 5 ?
            <View style={styles.enPermanence}>
              <Text style={styles.enPermanenceText}>
                {i18n.t("Pharmacie_En_permanence")}
              </Text>
            </View>
            : <ReportPharmacy id={id} />
          }
          <View style={styles.callBtn}>
            <Feather name="phone-call" size={19} color="white" style={styles.iconCall} />
            <Button title={i18n.t("call")} color={"red"} onPress={() => {
              Linking.openURL(`tel:${phone1}`)
            }} />
          </View>
        </View>
        <View>{support_shipping == 0 ? (<Text style={styles.shippingTextSupport}>{i18n.t("NotSupportShipping")}</Text>) : (<View>
          <Text style={styles.shippingTextSupportTrue}>{i18n.t("SupportShipping")}</Text>
          <TouchableOpacity onPress={handleWhatsappMessage} style={styles.pharmacyContact}>
            <FontAwesome name="whatsapp" size={24} color="#25D366" />
            <Text style={{ marginStart: 10 }}>{i18n.t("ContactPharmacy")}</Text>
          </TouchableOpacity>
        </View>)}</View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  map: {
    height: "50%",
    width: "100%",

  },
  callBtn: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  iconCall: {
    padding: 2,
  },
  buttonSection: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  pharmacyDescription: {

  },
  enPermanence: {
    flex: 1,
    fontSize: 16,
    backgroundColor: "#153462",

    textAlign: "center",
    justifyContent: "center",
    // borderRadius: 8,
    alignItems: "center"
  },
  enPermanenceText: {
    color: "white",
    fontWeight: "bold"
  },
  pharmacyName: {
    fontSize: 22,
    borderBottomColor: "green",
    borderBottomWidth: 2,
    paddingBottom: 15,
    margin: 6
  },
  mainTitle: {
    fontSize: 15,
    color: "#03C988"
  },
  pharmacyWebsite: {
    color: "blue"
  },
  city: {
    color: "#03C988",
    fontSize: 15
  },
  shippingTextSupport: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    // backgroundColor: '#F45050',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

  },
  shippingTextSupportTrue: {
    fontSize: 16,
    color: '#153462',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 2,
    // backgroundColor: '#F45050',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  pharmacyContact: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#03C988",
    borderWidth: 1,
    borderRadius: 2,
    paddingVertical: 4
  },
  mapButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

  },
  mapButton: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#03C988',
  },
  mapButtonBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

})
export default PharmacyMap;