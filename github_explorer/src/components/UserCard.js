import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="card col-4">
      <div className="card-body">
        <img src={user.avatar_url} alt="Avatar" />
        <h3 className="card-title">{user.name}</h3>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}