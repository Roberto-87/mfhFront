import getData from "../hooks/getData";

const fetchData = async () => {
  const exhibitionsFetched = await getData("exhibitions");
  const allExhibitions = exhibitionData(exhibitionsFetched);
  return allExhibitions;
};

const exhibitionData = (exhibitions) => {
  const allExhibitions = [];

  for (let i = 0; i < exhibitions.length; i++) {
    const exhibition = {
      title: exhibitions[i].exhibitionName,
      place: exhibitions[i].place,
      date: exhibitions[i].date,
      format: exhibitions[i].format,
      images: exhibitions
        .filter(
          (image) => image.exhibitionName === exhibitions[i].exhibitionName
        )
        .map((each) => each.image),
    };
    if (
      !allExhibitions
        .map((exhibition) => exhibition.title)
        .includes(exhibition.title)
    ) {
      allExhibitions.push(exhibition);
    }
  }
  return allExhibitions;
};

export default fetchData;
