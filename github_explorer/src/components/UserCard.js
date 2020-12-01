import React from "react";

export default function UserCard({ user }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img
            className="rounded mx-auto d-block"
            src={user.avatar_url}
            alt="Avatar"
          />
          <h3 className="card-title">{user.name}</h3>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
}
