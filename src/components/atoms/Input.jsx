import { Controller } from "react-hook-form";
import {
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Flex,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import appendStyles from "@/helpers/appendStyles";
import FormLabel from "./FormLabel";

const onKeyDown = (type, e) => {
  switch (type) {
    case "number":
      if (e.key === "e" || e.key === "E" || e.key === "+" || e.key === "-") {
        e.preventDefault();
      }
      break;
    default:
      return null;
  }
};

export default function Input({
  name,
  control,
  errors,
  labelProps,
  inputProps,
  leftAddonValue,
  rightAddonValue,
  leftElementValue,
  rightElementValue,
  formControlProps,
  inputStyleName,
  showError,
  isFormElement,
  rightValue,
}) {
  return (
    <FormControl {...formControlProps} isInvalid={!!errors[name]}>
      <Flex justifyContent="space-between">
        <FormLabel {...labelProps} />
        {labelProps.rightElement}
      </Flex>
      {isFormElement ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <InputGroup size="md">
              {leftAddonValue ? (
                <InputLeftAddon>{leftAddonValue}</InputLeftAddon>
              ) : null}
              {leftElementValue ? (
                <InputLeftElement pointerEvents="none">
                  {leftElementValue}
                </InputLeftElement>
              ) : null}

              <ChakraInput
                id={name}
                {...field}
                {...appendStyles("input", inputStyleName)}
                {...inputProps}
                errorBorderColor="blue"
                autoComplete="off"
                outline={!showError && errors[name] ? "2px solid #ff312f" : ""}
                onKeyDown={(e) => onKeyDown(inputProps.type, e)}
              />

              {rightElementValue ? (
                <InputRightElement top={1} width="3rem" cursor="pointer">
                  {rightElementValue}
                </InputRightElement>
              ) : null}

              {rightAddonValue ? (
                <InputRightAddon>{rightAddonValue}</InputRightAddon>
              ) : null}
            </InputGroup>
          )}
        />
      ) : (
        <InputGroup size="md" position="relative">
          {leftAddonValue ? (
            <InputLeftAddon>{leftAddonValue}</InputLeftAddon>
          ) : null}
          {leftElementValue ? (
            <InputLeftElement pointerEvents="none">
              {leftElementValue}
            </InputLeftElement>
          ) : null}

          <ChakraInput
            id={name}
            {...appendStyles("input", inputStyleName)}
            {...inputProps}
            errorBorderColor="blue"
            autoComplete="off"
            outline={!showError && errors[name] ? "2px solid #ff312f" : ""}
          />

          {rightElementValue ? (
            <InputRightElement top={1} width="3rem" cursor="pointer">
              {rightElementValue}
            </InputRightElement>
          ) : null}

          {rightValue && (
            <Box position="absolute" right="14px">
              {rightValue}
            </Box>
          )}

          {rightAddonValue ? (
            <InputRightAddon>{rightAddonValue}</InputRightAddon>
          ) : null}
        </InputGroup>
      )}

      {errors[name] && showError && (
        <FormErrorMessage p="1px" fontSize="13px">
          {errors[name]?.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

Input.defaultProps = {
  label: "",
  errors: {},
  inputProps: {
    type: "text",
  },
  formControlProps: {},
  leftAddonValue: null,
  rightAddonValue: null,
  leftElementValue: null,
  rightElementValue: null,
  labelRightElement: null,
  isRequired: false,
  inputStyleName: "announceInput",
  labelStyleName: "",
  showError: false,
  isFormElement: true,
  name: "",
  control: {},
  labelProps: {
    label: "",
  },
  rightValue: null,
};

Input.propTypes = {
  name: PropTypes.string,
  control: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  inputProps: PropTypes.shape({
    styleName: PropTypes.string,
    type: PropTypes.string,
  }),
  formControlProps: PropTypes.shape({}),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  isRequired: PropTypes.bool,
  leftAddonValue: PropTypes.node,
  rightAddonValue: PropTypes.node,
  leftElementValue: PropTypes.node,
  rightElementValue: PropTypes.node,
  labelRightElement: PropTypes.node,
  inputStyleName: PropTypes.string,
  labelStyleName: PropTypes.string,
  showError: PropTypes.bool,
  labelProps: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    tooltip: PropTypes.string,
    labelStyleName: PropTypes.string,
    rightElement: PropTypes.node,
  }),
  isFormElement: PropTypes.bool,
  rightValue: PropTypes.node,
};
