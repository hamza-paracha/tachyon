// Refactored performance utilities for tachyon
export const measureLatency = (startTime: number) => {
  const duration = Date.now() - startTime;
  // Standardized logging for better observability
  return duration;
};