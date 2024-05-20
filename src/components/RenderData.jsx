import React, { useState, useRef } from 'react'
import "./RenderData.css"

export default function RenderData() {
    const nameRef = useRef();
    const ageRef = useRef();
    const coursecRef = useRef();
    const contactRef = useRef();

    const [student, setStudent] = useState([
        {
            id: 1,
            name: "Oybek",
            age: 15,
            course: "O`zbek",
            contact: +998901234567,
        }
    ])

    const createElem = (e) => {
        e.preventDefault();

        let newProduct = [...student];

        newProduct.push({
            name: nameRef.current.value,
            age: ageRef.current.value,
            course: coursecRef.current.value,
            contact: contactRef.current.value
        });

        setStudent(newProduct);
    };
    return (
        <div className='container'>
            <div className="row">
                <form onSubmit={createElem}>
                    <input ref={nameRef} type="text" placeholder="StudentName" />
                    <input ref={ageRef} type="number" placeholder="Age" />
                    <input ref={coursecRef} type="text" placeholder="Course" />
                    <input ref={contactRef} type="text" placeholder="Contact" />
                    <button type="submit">Qo'shish</button>
                </form>

                <table border={1}>
                    <thead>
                        <th>Id</th>
                        <th>Ism</th>
                        <th>Yosh</th>
                        <th>Contact</th>
                        <th>Millati</th>
                        <button>O`chirish</button>
                    </thead>
                    <tbody>
                        {
                            student.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.course}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
