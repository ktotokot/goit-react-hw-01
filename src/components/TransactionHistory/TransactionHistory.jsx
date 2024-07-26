import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
  return (
      <table className={css.transTable}>
  <thead className={css.tHead}>
    <tr className={css.title}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tBody}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>

</table>
  )
}

export default TransactionHistory