export const DataPreview = ({ data }) => {
  return (
    <div className="table-data grid">
      <p>{new Date(data.Date).toString().substring(3, 21)}</p>
      <p>{data.High}</p>
      <p>{data.Low}</p>
      <p>{data.Open}</p>
      <p>{data.Close}</p>
    </div>
  );
};
