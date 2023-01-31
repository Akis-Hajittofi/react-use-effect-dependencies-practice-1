function SelectTypeForm(props) {
  // Detects which option the user selected
  // Calls setDataType, which is passed via props

  const changeDataType = (event) => {
    const selectedDataType = event.target.value;
    props.setDataType(selectedDataType);
  };

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={changeDataType}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
