import React, { useState } from "react";

export default function useErrorHandling(param) {
  const [error, setError] = useState(false);

  if (param) {
    setError(param);
  }

  return [error, setError];
}
