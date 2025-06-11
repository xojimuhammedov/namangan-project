import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import "react-lazy-load-image-component/src/effects/opacity.css";
// import announcementPlaceholder from "@/assets/images/announcement-placeholder.png";
// import userAvatarPlaceholder from "@/assets/images/icons/UserAvatarPlaceholder.svg";

// const placeholders = {
//   announcement: announcementPlaceholder,
//   user: userAvatarPlaceholder,
// };

function PlaceholderImage({ src, alt, styles, imageFor }) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={styles.width}
      height={styles.height}
      draggable={false}
      effect="opacity"
      style={{
        objectFit: "cover",
        ...styles,
      }}
      onError={(e) => {
        e.target.onerror = null;
        // e.target.src = placeholders[imageFor];
      }}
    />
  );
}

export default PlaceholderImage;

PlaceholderImage.defaultProps = {
  styles: {},
  src: "",
  alt: "image",
};

PlaceholderImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  styles: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  imageFor: PropTypes.string.isRequired,
};
