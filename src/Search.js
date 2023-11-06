import React from "react";

export default function Search() {
  return (
    <form id="search-form" class="mb-3">
      <div class="row">
        <div class="col-md-9">
          <input
            type="text"
            placeholder="Type in city name"
            class="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div class="col-md-3">
          <input type="submit" value="Search" class="btn btn-primary w-100" />
        </div>
      </div>
    </form>
  );
}
