const Event = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("click");
  };
  const handleChange = () => {
    console.log("Entered");
  };
  return (
    <div>
      <form>
        <input type="text" name="input" onChange="{handleChange}" />
        <button onClick="{handleClick}">Click me</button>
      </form>
    </div>
  );
};
