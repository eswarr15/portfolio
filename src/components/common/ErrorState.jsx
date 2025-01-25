const ErrorState = ({ message, retry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-red-500 text-6xl mb-4">
        <i className="fas fa-exclamation-circle" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
      <p className="text-gray-400 mb-6">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState; 