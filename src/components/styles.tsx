import bulma from './index.module.scss';

export default function clss(classes: string): string {
  return classes.split(' ').map(c => bulma[c]).join(' ');
}
