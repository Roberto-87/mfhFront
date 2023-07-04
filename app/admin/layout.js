import Navigation from "../components/Navigation";
import AdminNavigation from "../components/AdminNavigation";

const Admin = ({ children }) => {
  return (
    <section>
      <div className={{ display: "flex", flexDirection: "row" }}>
        <Navigation />
        <AdminNavigation />
        {children}
      </div>
    </section>
  );
};

export default Admin;
