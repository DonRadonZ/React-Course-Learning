export default function Stats({ items }) {
  if (!items.length) return (
    <p className='stats'><em>Start adding some items to your buying List</em></p>);

  const numItems = items.length;
  const numBought = items.filter((item) => item.bought).length;
  const percentage = Math.round((numBought / numItems) * 100);
  return (<footer className="stats">
    <em>
      {percentage === 100 ? 'You got everything!'
        : `You have ${numItems} items on your list, 
    and you already packed ${numBought} (${percentage}%)`}
    </em>
  </footer>
  );
}
