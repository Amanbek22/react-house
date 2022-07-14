import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    navigate("/dashboard")
  };

  return (
    <div className="page">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Login</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
