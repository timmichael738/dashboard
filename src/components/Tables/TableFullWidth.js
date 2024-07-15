import React from 'react';

const Table = ({ data, headerText, containerStyle, tableStyle, TableHeadStyle, header1, header2, header3, header4, header5 }) => {
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div className={containerStyle}>
      <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">{headerText}</h2>
      <table className={tableStyle}>
        <thead className={TableHeadStyle}>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header1}</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header2}</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header3}</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header4}</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header5}</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={(index)}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.content1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.content2}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.content3}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.content4}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.content5}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
