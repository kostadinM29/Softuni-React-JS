import { useEffect, useState } from "react";

import * as userService from "../services/userService";

import CreateUserModal from "./CreateUserModal";
import DeleteUserModal from "./DeleteUserModal";
import UserDetailsModal from "./UserDetailsModal";
import UserListRow from "./UserListRow";
import Spinner from "./Spinner"

const UserListTable = () =>
{
    const [users, setUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>
    {
        setIsLoading(true);

        userService.GetAll()
            .then(result => setUsers(result))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
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
    };

    const userDeleteClickHandler = (userId) =>
    {
        setSelectedUser(userId);
        setShowDelete(true);
    };

    const userDeleteHandler = async () =>
    {
        const result = await userService.DeleteUser(selectedUser);

        setUsers(state => state.filter(user => user._id !== selectedUser));

        setShowDelete(false);
    };

    return (
        <div className="table-wrapper">
            {showCreate && (
                <CreateUserModal
                    onClose={hideCreateUserModalHandler}
                    onCreate={userCreateHandler}
                />
            )}

            {showDelete && (
                <DeleteUserModal
                    onClose={() => setShowDelete(false)}
                    onDelete={userDeleteHandler}
                />
            )}

            {showDetails && (
                <UserDetailsModal
                    onClose={() => setShowDetails(false)}
                    userId={selectedUser}
                />
            )}
            {isLoading && <Spinner />}

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
                            onDeleteClick={userDeleteClickHandler}
                        />
                    ))}
                </tbody>
            </table>

            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
        </div>
    );
};

export default UserListTable; 