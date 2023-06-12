import { useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";
import MapView from "react-native-maps";

const useMapa = () => {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [userLocation, setUserLocation] = useState<Location.LocationObject>();
  const [mapType, setMapType] = useState<"standard" | "satellite">("standard");
  const mapRef = useRef<MapView>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão negada");
        return;
      }

      await Location.watchPositionAsync({}, (location) => {
        setLocation(location);
        setUserLocation(location);
      });
    })();
  }, []);

  const handleGoToUserLocation = async () => {
    const location = await Location.getCurrentPositionAsync();

    mapRef.current.animateToRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.023,
      longitudeDelta: 0.023,
    });
  };

  return {
    items: {
      location,
      mapRef,
      mapType,
    },
    handlers: {
      setMapType,
      handleGoToUserLocation,
    },
  };
};

export default useMapa;
