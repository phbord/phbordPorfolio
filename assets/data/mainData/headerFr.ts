import {headerInterface} from '../../../src/interfaces/mainData/headerInterface';

const headerFr: headerInterface[] = [
  {name: 'Compétences techniques', href: '/'},
  {name: 'Expériences', href: '/experiences'},
  {name: 'Formations', href: '/training'},
  {name: 'Liens', href: '/links'},
  {name: 'Téléchargements', href: '/downloads'},
  {name: 'Stratégies Obliques', href: '/oblique-strategies'},
  {
    name: `Description d'expériences`,
    href: '/ExperiencesDescription',
    isNotMenu: true,
  },
  {
    name: 'CV à télécharger',
    href: 'https://www.dropbox.com/s/myarm5ozn29wwim/CV_pierre-henri_bord_dev-front.pdf?dl=0',
    isDownload: true,
    isBlank: true,
  },
  {
    name: `Téléchargement de certificats`,
    href: '/DownloadsCertificate',
    isNotMenu: true,
  },
  {
    name: `Liens`,
    href: '/LinksExample',
    isNotMenu: true,
  },
  {
    name: `Formations`,
    href: '/TrainingsExample',
    isNotMenu: true,
  },
];

export default headerFr;
