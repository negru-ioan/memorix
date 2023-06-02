const shuffle = () => {
  const assets = [
    { image: '/memorix/assets/css.png' },
    { image: '/memorix/assets/html5.png' },
    { image: '/memorix/assets/svelte.png' },
    { image: '/memorix/assets/js.png' },
    { image: '/memorix/assets/angular.png' },
    { image: '/memorix/assets/node.png' },
    { image: '/memorix/assets/react.png' },
    { image: '/memorix/assets/ts.png' },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
