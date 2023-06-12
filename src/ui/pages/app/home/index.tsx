import React, { useRef } from "react";
import { lightTheme } from "infra/packages/styled-components/theme";
import { FontsEnum } from "infra/types/components/text";
import { Box } from "native-base";
import { StatusBar } from "react-native";
import Text from "ui/components/Text";
import MapView from "react-native-maps";

import Header from "./components/Header";

import FiltersBottomSheet from "./components/FiltersBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import Controls from "./components/Controls";
import useMapa from "./hooks/useMapa";
import MenuButton from "./components/MenuButton";

const Home = ({
  navigation: { openDrawer },
}: {
  navigation: { openDrawer: () => void };
}) => {
  const filtersRef = useRef<BottomSheet>(null);

  const {
    items: { location, mapRef, mapType },
    handlers: { handleGoToUserLocation, setMapType },
  } = useMapa();

  if (!location?.coords) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text
          color={lightTheme.colors.text_light}
          size="lg"
          fontFamily={FontsEnum.BaiSemibold}
          centered
        >
          Precisamos da sua localização para te mostrar o mapa de picos perto de
          você!
        </Text>
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      flex={1}
      background={lightTheme.colors.background}
      alignItems="center"
      justifyContent="center"
    >
      <StatusBar
        barStyle={mapType === "standard" ? "dark-content" : "light-content"}
      />
      <MapView
        ref={mapRef}
        style={{ flex: 1, borderWidth: 2, width: "100%" }}
        userInterfaceStyle="dark"
        mapType={mapType}
        showsIndoorLevelPicker={true}
        showsIndoors={false}
        showsBuildings={false}
        showsCompass={false}
        showsMyLocationButton={false}
        showsUserLocation
        maxZoomLevel={20}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.023,
          longitudeDelta: 0.023,
        }}
      />

      <Header
      // openDrawer={openDrawer}
      // handleOpenFilters={() => {
      //   filtersRef.current.expand();
      // }}
      />
      <Controls
        handleGoToUserLocation={handleGoToUserLocation}
        handleChangeMapType={setMapType}
        handleOpenFiltersModal={() => filtersRef.current.expand()}
      />
      <MenuButton handleOpenDrawer={openDrawer} />
      <FiltersBottomSheet ref={filtersRef} />
    </Box>
  );
};

export default Home;
