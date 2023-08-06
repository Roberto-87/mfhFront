const navigationOk = (currentLink) => {
  const links = [
    "/works",
    "/admin",
    "/exhibitions",
    "/text",
    "/bio",
    "/contact",
  ];
  if (!links.includes(currentLink)) return false;
  else return true;
};

export default navigationOk;
