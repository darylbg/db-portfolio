import React from "react";
import './App.css';

function Experience() {
    return (
        <div className="row experience" id="experience">
            <div className="col-12 text-center">
                <h3 className="section-title">03.<span> Experience ----------------</span></h3>
            </div>
            <div className="col-12 col-md-4">
                <ul className="list-group">
                    <li className="list-group-item">UOB Bootcamp</li>
                    <li className="list-group-item">The Mount Academy</li>
                </ul>
            </div>
            <div className="col-12 col-md-8">
                {/* <!-- Nav tabs --> */}
                <div className="d-flex align-items-start">
                    <div className="work-tabs nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" style="margin-right: 0 !important;">
                      <button className="nav-link text-start active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Pakistan Consulate</button>
                      <button className="nav-link text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Sitel</button>
                      <button className="nav-link text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Shaftec</button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <h3>Office Administrator at the Pakistan Consualte</h3>
                        <h5>2019 - Current</h5>
                        <p>administrator duties</p>
                        <p>purchaseing it networking</p>
                        <p>manager projects programs</p>
                      </div>
                      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h3>Office Administrator at the Pakistan Consualte</h3>
                        <h5>2019 - Current</h5>
                        <p>administrator duties</p>
                        <p>purchaseing it networking</p>
                        <p>manager projects programs</p>
                      </div>
                      <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <h3>Office Administrator at the Pakistan Consualte</h3>
                        <h5>2019 - Current</h5>
                        <p>administrator duties</p>
                        <p>purchaseing it networking</p>
                        <p>manager projects programs</p>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    )
};

export default Experience;