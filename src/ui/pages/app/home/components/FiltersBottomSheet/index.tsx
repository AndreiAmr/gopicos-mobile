import React from "react";
import {} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Text from "ui/components/Text";
import { lightTheme } from "infra/packages/styled-components/theme";
import { FontsEnum } from "infra/types/components/text";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const FiltersBottomSheet = React.forwardRef(
  (prop, ref: React.Ref<BottomSheetMethods>) => {
    return (
      <BottomSheet
        snapPoints={["80%", "90%"]}
        enablePanDownToClose
        ref={ref}
        index={-1}
        style={{
          zIndex: 2,
        }}
        animationConfigs={{
          duration: 200,
        }}
      >
        <Text
          color={lightTheme.colors.light_purple_21}
          fontFamily={FontsEnum.BaiSemibold}
          size="sm"
        >
          São Paulo, Brasil
        </Text>
      </BottomSheet>
    );
  }
);

export default FiltersBottomSheet;
