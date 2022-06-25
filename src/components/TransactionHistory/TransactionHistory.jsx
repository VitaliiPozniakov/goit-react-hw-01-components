import { Table, Thead, Tr } from './TransactionHistory.styled';
import { PropTypes } from 'prop-types';

export const TransactionHistory = ({ items }) => {
  //   console.log(items);
  return (
    <Table>
      <Thead>
        <Tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      //     PropTypes.exact({ ?
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
