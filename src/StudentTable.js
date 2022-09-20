
import { Table} from 'antd';
import studentData from './utility/studentData';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'firstName',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'lastName',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'gender',
    dataIndex: 'gender',
    key: 'gender',
  },
];

export default function StudentTable(){
  return(
    < Table dataSource={studentData()} columns={columns} />
  )
}

