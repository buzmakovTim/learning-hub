import React, {useEffect, useState} from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'
import {v1} from 'uuid'
import { pbkdf2 } from 'crypto'

//  {    &#123;
//  }    &#125;
//  [    &#91;
//  ]    &#93;
//  '    &#39;
//  <    &#60;
//  >    &#62;
//  ,    &#44;
//  .    &#46;
//  =    &#61;
//  "    &#34;
//  ;    &#59;
//  :    &#58;
//  /    &#47;
// tab   &ensp; 


export const SQL = () => {

    const [id, setId] = useState('0')

    return <div className={stylingClasses.mainContainer}>
            
            <h3>
                SQL
            </h3>            
            <div className={stylingClasses.line}></div>
            
            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>
                
                
                <p><b>Relational Database (SQL)</b></p>
                <ul>
                    <li><b>Relational Database Management System (RDBMS) - its a software</b>
                        <ul>
                            <li>Helps users create and maintain a relational database
                                <ul>
                                    <li><b>mySQL, Oracle, postageSQL, mariaDB, etc</b></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br/>
                    <li>Secured Query Language (SQL) - <b>its a language</b>
                        <ul>
                            <li>Standardized language for interacting with RDBMS</li>
                            <li>Used to perform C.R.U.D. operations, as well as other administrative tasks (user management, security, backup, etc)</li>
                            <li>Used to define tables and structures</li>
                            <li>SQL code used on one RDBMS is not always portable to another without modification</li>
                        </ul>
                    </li>
                </ul>

                <br/>
                <h3>mySQL</h3>
                <span>Relational Database Management System <b>(RDBMS)</b></span>
                <p><b>Installing</b>
                <a href="https://dev.mysql.com/downloads/mysql/" target="_blank"> Download MySQL</a></p>

                <p><b>Installing</b>
                <a href="https://popsql.com/" target="_blank"> Download PopSQL</a></p>

                <br/>
                <br/>
                <h3>SQL data types (most common)</h3>
                <ul>
                    <li><b>INI</b> - Whole number</li>
                    <li><b>DECIMAL(M,N)</b> - Decimal Numbers - Exact Value</li>
                    <li><b>VARCHAR(1)</b> - String of text of length 1</li>
                    <li><b>BLOB</b> - Binary Larger Object, Stores large data</li>
                    <li><b>DATE</b> - 'YYYY-MM-DD'</li>
                    <li><b>TIMESTAMP</b> - 'YYYY-MM-DD HH:MM:SS' - used for recording</li>
                </ul>

                <br/>
                <br/>
                <h3>SQL common Commands or click <a href='https://www.w3schools.com/sql/sql_syntax.asp' target="_blank">here</a></h3>
                <ul>
                    <li><b>Create Table</b><br/>
                    CREATE TABLE student (<br/>
                        &ensp;&ensp;&ensp; student_id INT PRIMARY KEY AUTO_INCREMENT,<br/>
                        &ensp;&ensp;&ensp; name VARCHAR(20) NOT NULL,<br/>
                        &ensp;&ensp;&ensp; major VARCHAR(20) DEFAULT 'n/a'<br/>
                    );<br/>
                    <br/>
                    </li>

                    <li><b>Delete Table</b><br/>
                    DROP TABLE student; <br/>
                    <br/>
                    </li>

                    <li><b>Delete column</b><br/>
                    ALTER TABLE student DROP COLUMN name; <br/>
                    <br/>
                    </li>

                    <li><b>Add column</b><br/>
                    ALTER TABLE student ADD name VARCHAR(20); <br/>
                    <br/>
                    </li>

                    <li><b>Show the Table all data</b><br/>
                    SELECT * FROM student; <br/>
                    <br/>
                    </li>

                    <li><b>Describe the Table columns and types</b><br/>
                    DESCRIBE student; <br/>
                    <br/>
                    </li>

                    <li><b>Insert data to the Table</b><br/>
                    INSERT INFO student VALUES(1, 'Tim', 'IT field');<br/>
                    or<br/>
                    INSERT INFO student(name, major) VALUES('Tim', 'IT field');<br/>
                    <br/>
                    </li>

                    <li><b>Update</b><br/>
                    UPDATE student <br/>
                    SET major = 'Biology'<br/>
                    WHERE student_it = 4;<br/>
                    <br/>
                    </li>

                    <li><b>Getting info from the table</b><br/>
                    SELECT * <br/>
                    FROM student <br/>
                    WHERE name = 'Tim';<br/>
                    <br/>
                    </li>


                </ul>


            </div> {/* Paragraph End */}
            

            <br/>
            <br/>
                {/* NOTE */}
                {/* <div className={stylingClasses.note}>
                    <span><b>let foo = 42 ;</b>   <i>// foo is now a number</i></span><br/>
                    <span><b>&ensp; &ensp;foo = 'bar' ;</b>   <i>// foo is now a string</i></span><br/>
                    <span><b>&ensp; &ensp;foo = true ;</b>   <i>// foo is now a boolean</i></span><br/>
                    
                </div> */}
            

            <br/>
            <br/>
            <br/>
            
    
    </div>
}