import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buildings, filter } from "../actions/Action";
import filterDataJson from "../test_filter_options(5).json";
import buildingDataJson from "../test_units_data(6).json";

export default function Buildings() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.buildingData);
  const { buildingData } = lists ? lists : "";
  console.log(buildingData);
  const listFilter = useSelector((state) => state.filterData);
  const { filterData } = listFilter ? listFilter : "";
  const { prices, bedroom, floor, grossm2 } = filterData ? filterData : "";
  const [building, setBuilding] = useState([]);
  const [price, setPrice] = useState("");
  const [bed, setBed] = useState("");
  const [flo, setFlo] = useState("");
  const [gross, setGross] = useState("");
  useEffect(() => {
    dispatch(filter(filterDataJson));
    dispatch(buildings(buildingDataJson));
    setBuilding(buildingData);
  }, [dispatch, buildingData]);

  const filterHandler = () => {
    debugger;
    let p = price !== "" ? price.split("-") : "";
    let b = bed !== "" ? bed.split(" ") : "";
    let f = flo;
    let g = gross !== "" ? gross.split("-") : "";
    let build = [];
    build = building.filter((build, index) => {
      let builds = build.bedroom.split("+");
      let buildF = build.floor.split(".");
      return build.price >= p[0] &&
        build.price <= p[1] &&
        builds[0] == b[0] &&
        build.grossm2 >= g[0] &&
        build.grossm2 <= g[1] &&
        buildF[0] == f
        ? build
        : "";
    });

    setBuilding(build);
  };
  return (
    <div class="container-fluid">
      <div class="card">
        <div className="card-header">
          {" "}
          <b>Filter</b>
        </div>
        <div class="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="prices">Select Prices</label>
                <select
                  className="form-control"
                  id="prices"
                  onChange={(e) => setPrice(e.target.value)}
                >
                  {prices !== undefined &&
                    prices.length > 0 &&
                    prices.map((data, index) => {
                      return (
                        <option key={index} value={data}>
                          {data}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label for="floor">Select Floor</label>
                <select
                  class="form-control"
                  id="floor"
                  onChange={(e) => setFlo(e.target.value)}
                >
                  {floor !== undefined &&
                    floor.length > 0 &&
                    floor.map((data, index) => {
                      return (
                        <option key={index} value={data}>
                          {data}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="bedroom">Select Bedroom</label>
                <select
                  class="form-control"
                  id="bedroom"
                  onChange={(e) => setBed(e.target.value)}
                >
                  {bedroom !== undefined &&
                    bedroom.length > 0 &&
                    bedroom.map((data, index) => {
                      return (
                        <option key={index} value={data}>
                          {data}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label for="grossm2">Select GrossM2</label>
                <select
                  class="form-control"
                  id="grossm2"
                  onChange={(e) => setGross(e.target.value)}
                >
                  {grossm2 !== undefined &&
                    grossm2.length > 0 &&
                    grossm2.map((data, index) => {
                      return (
                        <option key={index} value={data}>
                          {data}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={filterHandler}
                className="btn btn-primary"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div className="card-header">
          {" "}
          <b>Building Details</b>
        </div>
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Apartment Number</th>
                <th scope="col">Bedroom</th>
                <th scope="col">Block</th>
                <th scope="col">Floor</th>
                <th scope="col">GrossM2</th>
                <th scope="col">Layout</th>
                <th scope="col">NetAreaM2</th>
                <th scope="col">Price</th>
                <th scope="col">Availablity</th>
              </tr>
            </thead>
            <tbody>
              {building !== undefined &&
                building.length > 0 &&
                building.map((building, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{building.aptNo}</td>
                      <td>{building.bedroom}</td>
                      <td>{building.blockNew}</td>
                      <td>{building.floor}</td>
                      <td>{building.grossm2}</td>
                      <td>{building.layout}</td>
                      <td>{building.netAream2}</td>
                      <td>{building.price}</td>
                      <td>{building.availability}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
