import './styles/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1>Survey From</h1>
      <hr />
      <div className="form row g-3">
        <h5>Personal Details</h5>
        <div className="col-md-6">
          <label for="validationDefault01" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" name="first-name" id="first-name" placeholder="First Name" />
        </div>
        <div className="col-md-6">
          <label for="validationDefault02" className="form-label">
            Last name
          </label>
          <input type="text" className="form-control" name="last-name" id="last-name" placeholder="Last Name" />
        </div>
        <div className="col-md-6">
          <label for="validationDefaultUsername" className="form-label">
            Username
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input type="text" className="form-control" name="username" id="username" aria-describedby="inputGroupPrepend2" placeholder="user1234" />
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationDefault03" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" name="email" placeholder="user@email.com" />
        </div>
        <div className="col-md-6">
          <label for="validationDefault03" className="form-label">
            Contact No
          </label>
          <input type="text" className="form-control" id="contact" name="contact" placeholder="xxx-xxx-xxxx" />
        </div>
        <div className="col-md-6">
          <label for="validationDefault05" className="form-label">
            Poctal Code / Zip
          </label>
          <input type="text" className="form-control" id="postal-code" name="postal-code" placeholder="xx-xx-xx" />
        </div>
        <div className="col-md-12">
          <h5>Would you recommend Newton School to a friend?</h5>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" for="flexRadioDefault1">
              {' '}
              Default radio{' '}
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" for="flexRadioDefault2">
              {' '}
              Default checked radio{' '}
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" for="flexRadioDefault2">
              {' '}
              Default checked radio{' '}
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <h5>
            Languages and Frameworks known <small>(Check all that apply)</small>
          </h5>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" for="invalidCheck2">
              C
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" for="invalidCheck2">
              C++
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" for="invalidCheck2">
              Java
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" for="invalidCheck2">
              Python
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" for="invalidCheck2">
              Javascript
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" for="invalidCheck2">
              React
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" for="invalidCheck2">
              Angular
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" for="invalidCheck2">
              Django
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" for="invalidCheck2">
              Spring
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" for="invalidCheck2">
              Android
            </label>
          </div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
