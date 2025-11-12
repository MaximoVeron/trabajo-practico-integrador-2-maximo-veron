export const ErrorAd = ({
  message = "Ocurrió un error. Intenta nuevamente.",
}) => {
  return (
    <div className="alert alert-danger text-center my-4" role="alert">
      <h4 className="alert-heading"> Error</h4>
      <p className="mb-0">{message}</p>
    </div>
  );
};
