import { useEffect, useState } from "react";

export const ProfileCard = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      const resp = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });
      const profile = await resp.json();
      console.log("👉🏻 ~ ProfileCard.jsx:9 ~ fetchProfile ~ profile:", profile);
      setProfile(profile);
    };
    fetchProfile();
  }, []);
  console.log(profile);
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h2 className="card-title text-center mb-4 fw-bold text-primary">
                  Mi Perfil
                </h2>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nombre</label>
                  <p className="text-muted">
                    {profile?.user?.name || "Cargando..."}
                  </p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Apellido</label>
                  <p className="text-muted">
                    {profile?.user?.lastname || "Cargando..."}
                  </p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <p className="text-muted">
                    {profile?.user?.email || "Cargando..."}
                  </p>
                </div>
                <div className="text-center mt-4">
                  <button className="btn btn-primary px-4">
                    Editar Perfil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
