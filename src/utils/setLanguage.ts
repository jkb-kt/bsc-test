import i18n from "../locale";

export default (lng: string) => {
  localStorage.setItem("lng", lng);
  i18n.changeLanguage(lng);
};
