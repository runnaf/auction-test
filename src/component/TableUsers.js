export function TableUsers ({ timer, users, step, price }) {
  return <table className="auction__table table">
    <tbody>
      <tr>
        <th className="table__title">ХОД</th>
        {users.map((user)=>{
          return <td key={ user.id }>{timer}</td>
        })}
      </tr>
      <tr className="table__title-container">
        <th className="table__title">ПАРАМЕТРЫ И ТРЕБОВАНИЯ</th>
        {users.map((user, index)=>{
          return <td key={ user.id }>УЧАСТНИК №{index + 1}</td>
        })}
      </tr>
      <tr>
        <th>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</th>
        {users.map((user)=>{
          return <td key={ user.id }>{user.isSetOfEvents ? 'Да' : '-'}</td>
        })}
      </tr>
      <tr>
        <th>Срок изготовления лота, дней</th>
        {users.map((user)=>{
          return <td key={ user.id }>{user.producntionTime}</td>
        })}
      </tr>
      <tr>
        <th>Гарантийные обязательства, мес</th>
        {users.map((user)=>{
          return <td key={ user.id }>{user.warrantly}</td>
        })}
      </tr>
      <tr>
        <th>Условия оплаты</th>
        {users.map((user)=>{
          return <td key={ user.id }>{user.paymentTerms}%</td>
        })}
      </tr>
      <tr>
        <th>Стоимость изготовления лота, руб. (без НДС)</th>
        {users.map((user)=>{
          return <td key={ user.id }>
            <div className="price">{Number(user.manufacturingCost).toLocaleString()} руб.</div>
            <div className="price__step">-{ step } руб.</div>
            <div className="price__final">{ price } руб.</div>
          </td>
        })}

      </tr>
      <tr>
        <th>Действия:</th>
      </tr>
    </tbody>
  </table>
}