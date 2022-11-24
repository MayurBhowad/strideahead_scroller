import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/Loader.component";
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
  const [pageItemCount, setPageItemCount] = useState(3);
  const [startItem, setStartItem] = useState(0);

  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    const nextItemIndex = startItem + pageItemCount;
    setStartItem(nextItemIndex);

    fetch(
      `https://jsonplaceholder.typicode.com/users?_start=${startItem}&_limit=${pageItemCount}`
    )
      .then((data) => data.json())
      .then((data) => {
        setUsers([...users, ...data]);
      });
  };

  return (
    <div>
      <div className="m-4 d-flex justify-content-center">
        <h1>Welcome to Users page</h1>
      </div>
      <div className="body container">
        <InfiniteScroll
          dataLength={users.length}
          next={fetchUsers}
          hasMore={true}
          loader={<Loader />}
        >
          {users &&
            users.map((user: TUser) => (
              <div key={user.id}>
                <Profile user={user} />
              </div>
            ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Home;
