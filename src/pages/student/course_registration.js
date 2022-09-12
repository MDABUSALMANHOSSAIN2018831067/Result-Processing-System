import React from 'react'
import Navbar from '../../components/navbar'

import './style/course_registration.css'

export default function CourseRegistration() {
    var totalCredit = 0;
    var registrationDate;
    return (
        <div>
            <Navbar />
            <div className='CourseRegistration-heading'>
                <h3>Course Registration</h3>
            </div>
            <div className='CourseRegistration-container'>

                <div className='CourseRegistration-content'>
                    <div className='CourseRegistration-content-heading'>
                        <div>
                            <p>Total Credit: {totalCredit}</p>
                        </div>
                        <div>
                            <div>
                                <label for='usn'>USN*  </label>
                                <select name='usn' id='usn'>
                                    <option selected value=''></option>
                                    <option value='2019-1'>2019-1</option>
                                    <option value='2019-2'>2019-2</option>
                                    <option value='2020-1'>2020-1</option>
                                    <option value='2020-2'>2020-2</option>
                                    <option value='2021-1'>2021-1</option>
                                    <option value='2021-2'>2021-2</option>
                                    <option value='2022-1'>2022-1</option>
                                    <option value='2022-2'>2022-2</option>
                                </select>
                            </div>
                            <div>
                                <label for='semester'>Semester* </label>
                                <select name='semester' id='semester'>
                                    <option selected value=''></option>
                                    <option value='1'>1st</option>
                                    <option value='2'>2nd</option>
                                    <option value='3'>3rd</option>
                                    <option value='4'>4th</option>
                                    <option value='5'>5th</option>
                                    <option value='6'>6th</option>
                                    <option value='7'>7th</option>
                                    <option value='8'>8th</option>
                                   
                                </select>
                            </div>
                            <div>
                                <p>Registration Date: {registrationDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className='CourseRegistration-content-body'>
                        <div className='body1'>
                            <div className='heading'>
                                <div>
                                    <label for='semester'>Semester* </label>
                                    <select name='semester' id='semester'>
                                    <option selected value=''></option>
                                    <option value='1'>1st</option>
                                    <option value='2'>2nd</option>
                                    <option value='3'>3rd</option>
                                    <option value='4'>4th</option>
                                    <option value='5'>5th</option>
                                    <option value='6'>6th</option>
                                    <option value='7'>7th</option>
                                    <option value='8'>8th</option>
                                    </select>
                                </div>
                                <div>
                                    <label for='session'>Session*  </label>
                                    <select name='session' id='session'>
                                        <option value=''></option>
                                        <option value='2017-18'>2017-2018</option>
                                        <option value='2018-19'>2018-2019</option>
                                        <option value='2019-2020'>2019-2020</option>
                                        <option value='2020-2021'>2020-2021</option>
                                    </select>
                                </div>
                            </div>
                            <div className='syllabus-course-list'>
                                Syllabus Courses List
                            </div>
                        </div>
                        <div className='body2'>
                            <div>
                                <button>Save</button>
                                <button>Fees</button>
                                <button>Approval Status</button>
                            </div>
                            <div>
                                Registered Courses List
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

