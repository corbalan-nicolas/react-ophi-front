const UserIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon icon-tabler icons-tabler-filled icon-tabler-user"
        {...props}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />

        <path d="M4 20a8 8 0 0 1 16 0z" />
    </svg>
);

export default UserIcon;