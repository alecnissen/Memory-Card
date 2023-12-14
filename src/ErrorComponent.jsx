import React from 'react';

// eslint-disable-next-line react/prop-types
export default function ErrorComponent({ error }) {
  return <>{<div className="error-styles">{error}</div>}</>;
}
