import getData from "../hooks/getData";

export const fetchData = async () => {
  const exhibitionsFetched = await getData("exhibitions");
  const allExhibitions = exhibitionData(exhibitionsFetched);
  return allExhibitions;
};

const exhibitionData = (exhibitions) => {
  const allExhibitions = [];

  const exhibitionOnly = exhibitions.filter(
    (exhibition) => exhibition.type === "exhibition"
  );

  for (let i = 0; i < exhibitionOnly.length; i++) {
    const exhibition = {
      id:exhibitionOnly[i].id,
      title: exhibitionOnly[i].exhibitionName,
      place: exhibitionOnly[i].place,
      date: exhibitionOnly[i].date,
      format: exhibitionOnly[i].format,
      type: exhibitionOnly[i].type,
      images: exhibitionOnly
        .filter(
          (image) => image.exhibitionName === exhibitionOnly[i].exhibitionName
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

export const returnCuratorialText = async () => {
  const exhibitions = await getData("exhibitions");
  const curatorialText = exhibitions.filter(
    (exhibition) => exhibition.type !== "exhibition"
  );
  return curatorialText;
};
