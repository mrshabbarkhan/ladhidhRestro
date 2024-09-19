import DsbActions from "./DsbActions";
import OrderTable from "./OrderTable";
import SearchBar from "../../components/SearchBar";

function DashboardPage() {
  return (
    <section>
      <h1 className="text-2xl  font-bold mb-3">Dashboard</h1>
      <DsbActions />
      <div className="my-7">
        <SearchBar placeholder={"search by Order id..."} />
      </div>
      <div className="mt-5">
        <OrderTable />
      </div>
    </section>
  );
}

export default DashboardPage;
