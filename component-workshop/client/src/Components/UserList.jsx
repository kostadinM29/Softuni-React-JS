import SearchBar from "./SearchBar";
import UserListTable from "./UserListTable";

const UserList = () =>
{
    return (
        <section className="card users-container">
            <SearchBar />

            <UserListTable />

            <button className="btn-add btn">Add new user</button>

        </section>
    );
};

export default UserList;