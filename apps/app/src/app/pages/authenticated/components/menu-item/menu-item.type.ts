export type MenuItem = {
  label: string;
  icon: string;
  routerLink: string;
  action: string;
  submenu: SubMenuItem[] | [];
};

export type SubMenuItem = {
  label: string;
  icon: string;
  routerLink: string;
  action: string;
};
