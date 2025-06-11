import { Box, Heading, Text } from "@chakra-ui/react";
import { Modal as AModal } from "antd";
import PropTypes from "prop-types";

function Modal({ isOpen, body, width, header, onCancel, footer, bodyStyles }) {
  return (
    <AModal
      open={isOpen}
      onCancel={onCancel}
      centered
      width={width}
      footer={null}
      maskClosable={false}>
      {header && (
        <Box p="20px" pb={0} {...header.styles}>
          {header.title && (
            <Heading size="md" fontSize="22px" fontWeight={700} mb="8px">
              {header.title}
            </Heading>
          )}
          <Text fontSize="14px" color="var(--secondary)" lineHeight="20px">
            {header.description}
          </Text>
        </Box>
      )}
      <Box p="20px" borderRadius="12px" my="16px" mb="18px" {...bodyStyles}>
        {body}
      </Box>
      {footer}
    </AModal>
  );
}

export default Modal;

Modal.defaultProps = {
  width: "350px",
  footer: null,
  body: null,
  header: null,
  bodyStyles: {},
};

Modal.propTypes = {
  body: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  width: PropTypes.string,
  header: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.node,
    styles: PropTypes.object,
  }),
  onCancel: PropTypes.func.isRequired,
  footer: PropTypes.node,
  bodyStyles: PropTypes.object,
};
