import React from 'react';
import './app.css';

// export function Statistic({ feedBack }) {
//   const total = Object.values(feedBack).reduce((acc, curr) => acc + curr, 0);
//   const averageTotal = () =>
//     Object.entries(feedBack).reduce((acc, curr) => {
//       const [key, value] = curr;
//       if (key === 'good') {
//         acc += value;
//       } else if (key === 'bad') {
//         acc -= value;
//       }
//       return acc;
//     }, 0);

//   function getRenderedValue() {
//     if (total === 0) {
//       return <span>No feedback given</span>;
//     }
//     return (
//       <ul className='feedback-list'>
//         {Object.entries(feedBack).map(([key, value], i) => (
//           <li key={i}>
//             {key} {value}
//           </li>
//         ))}
//         <li>all {total}</li>
//         <li>average {averageTotal() / total}</li>
//         <li>positive {(feedBack['good'] * 100) / total} %</li>
//       </ul>
//     );
//   }

//   return getRenderedValue();
// }

function render(result) {
  const total = result.find((item) => item.text === 'total');
  if (total.value === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <thead>
        <th>Statistics</th>
      </thead>
      <tbody>
        {result.map(({ text, value }) => (
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Statistic({ result }) {
  return render(result);
}
