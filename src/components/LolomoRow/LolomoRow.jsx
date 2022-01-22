import RowHeader from './RowHeader';
import RowContainer from './RowContainer';

function LolomoRow({ data }) {
  return (
    <div role="lolomoRow">
      <RowHeader />
      <RowContainer data={data} />
    </div>
  );
}

export default LolomoRow;
