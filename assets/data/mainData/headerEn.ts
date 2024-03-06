import {headerInterface} from '../../../src/interfaces/mainData/headerInterface';

const headerEn: headerInterface[] = [
  {name: 'Technical skills', href: '/'},
  {name: 'Experiences', href: '/experiences'},
  {name: 'Training', href: '/training'},
  {name: 'Links', href: '/links'},
  {name: 'Downloads', href: '/downloads'},
  {name: 'Oblique Strategies', href: '/oblique-strategies'},
  {
    name: `Description d'expériences`,
    href: '/ExperiencesDescription',
    isNotMenu: true,
  },
  {
    name: 'CV to download',
    href: 'https://www.dropbox.com/s/myarm5ozn29wwim/CV_pierre-henri_bord_dev-front.pdf?dl=0',
    isDownload: true,
    isBlank: true,
  },
  {
    name: `Downloading certificates`,
    href: '/DownloadsCertificate',
    isNotMenu: true,
  },
  {
    name: `Links`,
    href: '/LinksExample',
    isNotMenu: true,
  },
  {
    name: `Training`,
    href: '/TrainingsExample',
    isNotMenu: true,
  },
];

export default headerEn;
