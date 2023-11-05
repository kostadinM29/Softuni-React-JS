import SearchBar from "./SearchBar";
import UserListTable from "./UserListTable";

const UserList = () =>
{
    return (
        <section className="card users-container">
            <SearchBar />

            <UserListTable />
        </section>
    );
};

export default UserList;