const optionsKnowledges: object = {
  table: 'Knowledges',
  orderBy: 'order',
  ascending: true,
};

const optionsExperiences: object = {
  table: 'Experiences',
  orderBy: 'year_start',
  orderByBis: 'month_start',
};

const optionsTrainings: object = {
  table: 'Trainings',
  orderBy: 'year_start',
  orderByBis: 'year_end',
};

const optionsLinks: object = {
  table: 'Links',
  orderBy: 'order',
};

const optionsDownloads: object = {
  table: 'Downloads',
  orderBy: 'year',
  orderByBis: 'order',
};

export {
  optionsKnowledges,
  optionsExperiences,
  optionsTrainings,
  optionsLinks,
  optionsDownloads,
};
