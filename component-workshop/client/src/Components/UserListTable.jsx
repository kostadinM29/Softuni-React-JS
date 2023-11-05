import { useEffect, useState } from "react";

import * as userService from "../services/userService";

import CreateUserModal from "./CreateUserModal";
import UserListRow from "./UserListRow";
import UserDetailsModal from "./UserDetailsModal";

const UserListTable = () =>
{
    const [users, setUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() =>
    {
        userService.GetAll()
            .then(result => setUsers(result))
            .catch(error => console.log(error));
    }, []);

    const createUserClickHandler = () =>
    {
        setShowCreate(true);
    };

    const hideCreateUserModalHandler = () =>
    {
        setShowCreate(false);
    };

    const userCreateHandler = async (e) =>
    {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));
        const newUser = await userService.Create(data);

        setUsers(state => [...state, newUser]);

        setShowCreate(false);
    };

    const userDetailsClickHandler = async (userId) =>
    {
        setSelectedUser(userId);
        setShowDetails(true);
        const userDetails = await userService.getUser(userId);
        console.log(userDetails)
    };

    return (
        <div className="table-wrapper">
            {showCreate && (
                <CreateUserModal
                    onClose={hideCreateUserModalHandler}
                    onCreate={userCreateHandler}
                />
            )}

            {showDetails && (
                <UserDetailsModal
                    onClose={() => setShowDetails(false)}
                    userId={selectedUser}
                />
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className=" icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <UserListRow
                            key={user._id}
                            {...user}
                            onDetailsClick={userDetailsClickHandler}
                        />
                    ))}
                </tbody>
            </table>

            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
        </div>
    );
};

export default UserListTable;