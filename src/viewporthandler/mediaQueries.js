const size = {
    tablet: '665px',
    laptop: '960px',
    desktop: '1440px',
};
const Device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
};
export default Device;
