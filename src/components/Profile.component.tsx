import React from "react";
import { TUser } from "../Layout/Home.layout";

type TProfileProps = {
  user: TUser;
};

export function Profile({ user }: TProfileProps) {
  console.log(user);

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://avatars.dicebear.com/api/male/${user.name}.svg?background=%230000ff`}
              className="rounded-start"
              height="300px"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="h-100 d-flex flex-column justify-content-between card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title mb-1">{user.name}</h5>
                  <h6 className=" card-title text-muted">@{user.username}</h6>
                </div>
                <div className="">
                  <h6 className=" card-title text-muted text-end">
                    {user.email}
                  </h6>
                  <h6 className=" card-title text-muted text-end">
                    {user.phone}
                  </h6>
                </div>
              </div>
              <div className="">
                <p className="card-text">
                  {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
              <div className="">
                <p className="card-text">
                  <small className="text-muted">{user.company.name}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
