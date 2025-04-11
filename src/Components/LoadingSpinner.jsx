const LoadingSpinner = ({ 
  size = 40,
  thickness = 4,
  speed = 1.2,
  rgb = "rgb(59, 130, 246)"
}) => {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    border: `${thickness}px solid rgba(0, 0, 0, 0.1)`,
    borderTop: `${thickness}px solid ${rgb}`,
    borderRadius: '50%',
    animation: `spin ${speed}s linear infinite`,
  };

  return (
    <div className="flex justify-center items-center" role="status" aria-label="Loading">
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div style={spinnerStyle} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
