const React = require('react');

function Index(props) {
  const { flight } = props;

  return (
    <div>
      <h1>Flights</h1>
      <ul>
        {flight.map((f, index) => (
          <li key={index}>
            <p>
              <strong>Airline:</strong> {f.airline}
            </p>
            <p>
              <strong>Flight No:</strong> {f.flightNo}
            </p>
            <p>
              <strong>Departs:</strong> {f.departs}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = Index;
