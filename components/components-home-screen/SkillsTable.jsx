function SkillsTable(prop) {
  return (
    <>
      <div className="table">
        <div className="table--header">{prop.title}</div>
        <div className="table--content">{prop.content}</div>
      </div>
    </>
  );
}

export default SkillsTable;
