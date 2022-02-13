import React from 'react';

const Table = ({ data, className = '', filter = 10 }) => {
  const tHeader = Object.keys(data[0]);

  return (
    <>
      {tHeader && (
        <table className={`table ${className}`}>
          <thead>
            <tr>
              {tHeader.map((e, idx) => (
                <th key={idx}>{e}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data
              .filter((e, idx) => idx < filter)
              .map((e, idx) => (
                <tr key={idx}>
                  {Object.values(e).map((ele, idx) => (
                    <td key={idx}>{ele}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
