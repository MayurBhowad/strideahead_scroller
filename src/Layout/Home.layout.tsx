import React, { useEffect, useState } from "react";
import { Profile } from "../components/Profile.component";

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: TAddress;
  company: TCompany;
};

type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <div className="m-4 d-flex justify-content-center">
        <h1>Welcome to Users page</h1>
      </div>
      <div className="body container">
        {users &&
          users.map((user: TUser) => (
            <div key={user.id}>
              <Profile user={user} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
