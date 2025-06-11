import { Button as ChButton } from "@chakra-ui/react";
import PropTypes from "prop-types";

const css = {
  base: {
    borderRadius: "8px",
    alignItems: "center",
    gap: "3px",
    color: "var(--text)",
    transition: "all 0.15s ease-in-out",
  },
  disabled: {
    background: "#9B9FA5",
    cursor: "not-allowed",
    _hover: {
      background: "#9B9FA5",
      opacity: "0.85",
    },
  },
  colorSchema: {
    primary: {
      backgroundColor: "#8a2be2",
      color: "#fff",
      _hover: {
        backgroundColor: "#8a2be2",
        opacity: "0.85",
      },
    },
    "pink-outlined": {
      backgroundColor: "transparent",
      border: "1px solid var(--pink)",
      fontWeight: "700",
      _hover: {
        borderColor: "#EB6181",
        backgroundColor: "#EB6181",
        color: "#fff",
      },
    },
    location: {
      backgroundColor: "#edf3fa",
      border: "1px solid #D9E2F0",
      _hover: {
        backgroundColor: "#fff",
        borderColor: "var(--primary)",
      },
    },
    softBlue: {
      background: "#E9F1FD",
      color: "var(--primary)",
      _hover: {
        backgroundColor: "#CBE0FF",
      },
    },
    softBlue2: {
      background: "#D9E6F8",
      color: "var(--primary)",
      _hover: {
        backgroundColor: "#CBE0FF",
      },
    },
    whiteSchema: {
      backgroundColor: "#fff",
      color: "var(--text)",
      _hover: {
        backgroundColor: "#fff",
        opacity: "0.65",
      },
    },
    link: {
      backgroundColor: "transparent",
      color: "var(--primary)",
      p: "0px",
      fontWeight: "600",
      _hover: {
        backgroundColor: "transparent",
        opacity: "0.65",
      },
      _disabled: {
        backgroundColor: "transparent",
        cursor: "not-allowed",
      },
    },
    uploadMore: {
      backgroundColor: "#E3EEFC",
      color: "var(--text)",
      _hover: {
        backgroundColor: "#E3EEFC",
        opacity: "0.65",
      },
    },
    black: {
      backgroundColor: "#000",
      color: "#fff",
      _hover: {
        backgroundColor: "#000",
        opacity: "0.85",
      },
    },
    gray: {
      backgroundColor: "#9B9FA5",
      color: "#fff",
      _hover: {
        backgroundColor: "#9B9FA5",
        opacity: "0.85",
      },
    },
    green: {
      backgroundColor: "#24AA3C",
      color: "#fff",
      _hover: {
        backgroundColor: "#24AA3C",
        opacity: "0.85",
      },
    },
  },
  sizeStyles: {
    md: {
      fontWeight: "700",
      p: "9px 28px",
      fontSize: "15px",
    },
    sm: {
      padding: "8px",
      height: "32px",
      fontSize: "12px",
      fontWeight: "700",
      gap: "0px",
    },
    lg: {
      padding: "13px 12px",
      fontSize: "14px",
    },
  },
};

function Button({
  colorSchema,
  size,
  variant,
  leftIcon,
  rightIcon,
  loading,
  loadingText,
  disabled,
  text,
  style,
  onClick,
  ariaLabel,
}) {
  return (
    <ChButton
      onClick={onClick}
      colorScheme="blue"
      isLoading={loading}
      variant={variant}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      loadingText={loadingText}
      isDisabled={disabled || loading}
      style={style}
      _disabled={css.disabled}
      aria-label={ariaLabel}
      {...css.base}
      {...css.sizeStyles[size]}
      {...css.colorSchema[colorSchema]}>
      {text}
    </ChButton>
  );
}

export default Button;

Button.defaultProps = {
  colorSchema: "primary",
  size: "md",
  variant: "solid",
  leftIcon: null,
  rightIcon: null,
  loading: false,
  loadingText: "",
  disabled: false,
  style: {},
  onClick: () => {},
};

Button.propTypes = {
  colorSchema: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  style: PropTypes.shape({}),
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};
