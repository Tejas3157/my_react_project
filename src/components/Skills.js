import React from 'react'


function Skills() {
    return (
        <div>
            
            <div id="Skills" className="container my-5">
                <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                    <h2 className="text-center mb-4">My Skills</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h3 className="text-center fs-4">Soft Skills</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item list-group-item-action">Team Work</li>
                                <li className="list-group-item list-group-item-action">Time Management</li>
                                <li className="list-group-item list-group-item-action">Communication</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-center fs-4">Technical Skills</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item list-group-item-action">HTML</li>
                                <li className="list-group-item list-group-item-action">CSS</li>
                                <li className="list-group-item list-group-item-action">JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="container my-5 border border-info border-2 opacity-50"></hr>

                <div className="container my-5">
                    <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                        <h2 className="text-center mb-4">Subjects & Grades</h2>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover text-center mb-0">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Subject</th>
                                        <th>Marks</th>
                                        <th>Grades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>HTML</td>
                                        <td>90</td>
                                        <td>A</td>
                                    </tr>
                                    <tr>
                                        <td>CSS</td>
                                        <td>80</td>
                                        <td>B+</td>
                                    </tr>
                                    <tr>
                                        <td>JavaScript</td>
                                        <td>70</td>
                                        <td>B</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <hr className="container my-5 border border-info border-2 opacity-50"></hr>

        </div>
    )
}

export default Skills
