import React from 'react'

function Skills() {
    return (
        <div>
            <div id="Skills" class="container my-5">
                <div class="bg-white p-4 p-md-5 rounded shadow-sm">
                    <h2 class="text-center mb-4">My Skills</h2>
                    <div class="row">
                        <div class="col-md-6 mb-4 mb-md-0">
                            <h3 class="text-center fs-4">Soft Skills</h3>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item list-group-item-action">Team Work</li>
                                <li class="list-group-item list-group-item-action">Time Management</li>
                                <li class="list-group-item list-group-item-action">Communication</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h3 class="text-center fs-4">Technical Skills</h3>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item list-group-item-action">HTML</li>
                                <li class="list-group-item list-group-item-action">CSS</li>
                                <li class="list-group-item list-group-item-action">JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="container my-5 border border-info border-2 opacity-50"></hr>

                <div class="container my-5">
                    <div class="bg-white p-4 p-md-5 rounded shadow-sm">
                        <h2 class="text-center mb-4">Subjects & Grades</h2>
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover text-center mb-0">
                                <thead class="table-dark">
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

                <hr class="container my-5 border border-info border-2 opacity-50"></hr>
        </div>
    )
}

export default Skills
