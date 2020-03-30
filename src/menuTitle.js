/** @format */

/*
this menu is mapper process by i18 to get content
*/
const menu = {
  Inbound: {
    title: 'Inbound.title',
    icon: 'faAngleRight',
    children: {
      Recieving: {
        title: 'Recieving',
        icon: 'faTruck'
      },
      Search: {
        title: 'Search',
        icon: 'faSearch'
      }
    }
  },
  Outbound: { title: 'Outbound', icon: 'faAngleLeft', children: {} }
};

export default menu;
