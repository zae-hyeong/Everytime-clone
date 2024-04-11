export default class NavigationItem {
  title: string;
  id: string;
  linkDomain: string;

  constructor(title: string, id: string, linkDomain: string) {
    this.title = title;
    this.id = id;
    this.linkDomain = linkDomain;
  }
}