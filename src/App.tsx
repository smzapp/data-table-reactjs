import './App.css';
import DataTable from './components/DataTable/Index';
import { Column } from './components/DataTable/TableHeader';

const columns: Array<Column> = [
  {key: 'id', label: 'ID'},
  {key: 'name', label: 'Name'},
  {key: 'email', label: 'Email Address'}
]

const getDummyData = () => {
  let data : Array<any> = [];
  const rows = 500;
  for (let index = 1; index <= rows; index++) {
    data[index] = {
      id: index,
      name: `Sam${index}`,
      email: `sam${index}@example.com`
    };
  }

  return data;
}


function App() {
  return (
    <DataTable
      columns={columns}
      data={getDummyData()}
      per_page={15}
    />
  )
}

export default App;
