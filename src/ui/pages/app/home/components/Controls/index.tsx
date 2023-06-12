import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Popover,
  Stack,
} from "native-base";
import ControlButton from "./ControlButton";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import MapVisionStandard from "assets/images/map-vision.png";
import MapVisionSatelite from "assets/images/map-vision-satelite.png";
import { TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { FontsEnum } from "infra/types/components/text";
import Text from "ui/components/Text";
import { lightTheme } from "infra/packages/styled-components/theme";

interface ControlsProps {
  handleGoToUserLocation: () => void;
  handleChangeMapType: (prop: "satellite" | "standard") => void;
  handleOpenFiltersModal: () => void;
}

const Controls = ({
  handleGoToUserLocation,
  handleChangeMapType,
  handleOpenFiltersModal,
}: ControlsProps) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <Box
      position="absolute"
      bottom={heightPercentageToDP(5)}
      right={widthPercentageToDP(7)}
    >
      <ControlButton iconName="sliders" onPress={handleOpenFiltersModal} />
      <Popover
        placement="left"
        initialFocusRef={ref}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        trigger={(triggerProps) => {
          return (
            <Button
              width={"45px"}
              height="45px"
              justifyItems="center"
              alignItems="center"
              backgroundColor="transparent"
              my="10px"
              {...triggerProps}
            >
              <ControlButton {...triggerProps} iconName="clone" />
            </Button>
          );
        }}
      >
        <Popover.Content
          accessibilityLabel="Delete Customerd"
          w={widthPercentageToDP(70)}
          zIndex={99999}
          // bottom={20}
          right={30}
        >
          <Popover.Body backgroundColor={lightTheme.colors.background_dark}>
            <Text
              color={"#FF927B"}
              fontFamily={FontsEnum.BaiSemibold}
              size="md"
            >
              Mudar tipo do mapa
            </Text>
            <HStack
              alignItems="center"
              justifyContent="center"
              mt="20px"
              mb="10px"
            >
              <TouchableOpacity
                style={{
                  marginRight: widthPercentageToDP(5),
                  borderRadius: 10,
                  overflow: "hidden",
                }}
                onPress={() => {
                  handleChangeMapType("standard");
                  setIsOpen(false);
                }}
              >
                <Image
                  source={MapVisionStandard}
                  width="100px"
                  height="100px"
                  alt="standard map vision"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                }}
                onPress={() => {
                  handleChangeMapType("satellite");
                  setIsOpen(false);
                }}
              >
                <Image
                  source={MapVisionSatelite}
                  width="100px"
                  height="100px"
                  alt="satellite map vision"
                />
              </TouchableOpacity>
            </HStack>
          </Popover.Body>
        </Popover.Content>
      </Popover>
      <ControlButton iconName="street-view" onPress={handleGoToUserLocation} />
    </Box>
  );
};

export default Controls;
