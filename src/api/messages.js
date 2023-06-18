const total = 35;
const dataMockup = [
  {
    date: '16-06-2023',
    author: 'Hanek Dzbanek',
    title: 'Hello World!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet vestibulum diam, ut dictum urna. Suspendisse bibendum tristique ipsum, in iaculis felis mollis vitae. Nullam lacus augue, tristique consectetur facilisis vitae, dictum quis tellus. Sed faucibus dolor ipsum, ut tempus libero aliquet ut. Integer congue tellus eget semper sagittis. Integer cursus libero elit, in feugiat elit egestas non.',
  },
  {
    date: '16-06-2023',
    author: 'Ala Comakota',
    title: 'Kici kici',
    content:
      'Curabitur aliquam orci id mauris tincidunt ultrices. Integer et ultrices magna. Sed vitae libero scelerisque, venenatis nunc at, bibendum ipsum. Integer id ligula purus. Nam elementum a lectus nec egestas. Donec molestie augue in elit viverra, ac gravida libero varius. Morbi facilisis ex vel pulvinar mollis.',
  },
  {
    date: '16-06-2023',
    author: 'Edek Zkrainykredek',
    title: 'Pomaluj mój świat!',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed congue, enim ut consequat condimentum, ligula purus pretium augue, non hendrerit diam nisi vitae est.',
  },
  {
    date: '16-06-2023',
    author: 'Elmo Zulicysezamkowej',
    title: 'Daj smaczka',
    content:
      'Etiam scelerisque ante at lorem interdum, vitae bibendum neque commodo. Donec tellus ante, rutrum ac consequat efficitur, pellentesque et mi. Nunc orci quam, semper eget maximus ut, dictum in turpis. Nunc egestas dolor mauris, ut consectetur magna finibus eu. Sed quam mi, ornare non elementum sed, rutrum eu mi. Donec felis metus, porta sed nunc eu, elementum dictum mauris. Nulla placerat eu neque vitae interdum. Pellentesque vel venenatis arcu. Maecenas ac nisi ipsum. Etiam erat metus, congue lobortis euismod id, laoreet eget felis.',
  },
  {
    date: '16-06-2023',
    author: 'Batman',
    title: "I'm Batman",
    content:
      'Duis in tincidunt mi. Nullam tempor laoreet tortor, et consequat ex luctus et. Sed eleifend nulla lectus, sed vehicula quam ullamcorper congue. Suspendisse potenti. Sed egestas nulla vel mollis tempor. In sodales metus a eros egestas tempor. Morbi eu tincidunt erat. Pellentesque ut ex sed augue dignissim luctus.',
  },
];

let items = [];
for (let i = 0; i < total; i++) {
  items.push(dataMockup[Math.floor(Math.random() * dataMockup.length)]);
}

export async function fetchMessages(page = 1, perPage = 10) {
  return {
    items: items.slice((page-1) * perPage, page * perPage),
    page,
    perPage,
    total,
  };
}

export async function searchMessages(searchText, page = 1, perPage = 10) {
  // make API call for search
  return {
    items: items.slice((page-1) * perPage, page * perPage),
    page,
    perPage,
    total,
  };
}