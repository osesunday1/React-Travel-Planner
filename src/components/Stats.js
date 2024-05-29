function Stats({ addItem }) {

  const numItems = addItem.length;
  const numPacked = addItem.filter((item) => item.packed).length;
  const percentage = Math.round(numPacked / numItems * 100);

  if (numItems==0) 
    return (
    <p className="stats">
    <em>You need to put in items</em>
    </p>
      );
  return (
    <>

      <footer className="stats">
        <em>  
        {percentage === 100? "you've got everything ready to go":
        `You have ${numItems} items on your list, and you already packed  ${numPacked} ( ${percentage}%)`} </em>
      </footer>
    </>
  );
}


export default Stats;