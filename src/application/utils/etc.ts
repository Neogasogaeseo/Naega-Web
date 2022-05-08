export const getRandomID = () => String(new Date().getTime());

export const getGeneralLocationParams = () => {
  const currentLocation = window.location;
  return currentLocation.pathname.split('/');
};
