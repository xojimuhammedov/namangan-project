import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { FormLabel as CHLabel, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import appendStyles from "@/helpers/appendStyles";
import TooltipIcon from "@/components/atoms/icons/TooltipIcon";

function FormLabel({
  label,
  labelStyleName,
  tooltip,
  labelProps,
  isOptional,
  styles,
}) {
  const { t } = useTranslation();
  return (
    label && (
      <CHLabel
        {...appendStyles("label", labelStyleName)}
        {...labelProps}
        flexWrap="wrap"
        {...styles}>
        {label}
        {isOptional && (
          <Text ml="6px" fontWeight={500} as="span">
            {t("optinional")}
          </Text>
        )}
        {tooltip && (
          <Tooltip title={tooltip}>
            <TooltipIcon
              ml="6px"
              cursor="pointer"
              mt="2px"
              color="#BECAD7"
              display="inline"
            />
          </Tooltip>
        )}
      </CHLabel>
    )
  );
}

export default FormLabel;

FormLabel.defaultProps = {
  labelProps: {},
  tooltip: "",
  labelStyleName: "defaultLabel",
  isOptional: false,
  styles: {},
};

FormLabel.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
  labelProps: PropTypes.shape({}),
  tooltip: PropTypes.string,
  labelStyleName: PropTypes.string,
  isOptional: PropTypes.bool,
  styles: PropTypes.shape({}),
};
