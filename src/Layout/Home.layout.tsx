import React from "react";

function Home() {
  return (
    <div>
      <div className="m-4 d-flex justify-content-center">
        <h1>Welcome to Users page</h1>
      </div>
      <div className="body container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
                className="rounded-start"
                height="300px"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="h-100 d-flex flex-column justify-content-between card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="card-title mb-1">Leanne Graham</h5>
                    <h6 className=" card-title text-muted">@Bret</h6>
                  </div>
                  <div className="">
                    <h6 className=" card-title text-muted text-end">
                      hildegard.org
                    </h6>
                    <h6 className=" card-title text-muted text-end">
                      1-770-736-8031 x56442
                    </h6>
                  </div>
                </div>
                <div className="">
                  <p className="card-text">
                    Kulas Light, Apt. 556, Gwenborough, 92998-3874
                  </p>
                </div>
                <div className="">
                  <p className="card-text">
                    <small className="text-muted">Romaguera-Crona</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
