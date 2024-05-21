import React, { useState, useRef } from 'react'
import "./RenderData.css"

export default function RenderData() {
    const nameRef = useRef();
    const ageRef = useRef();
    const coursecRef = useRef();
    const contactRef = useRef();

    const [modalOpen, setModalOpen] = useState(false)
    const [tanlash, setTanlash] = useState(null)
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

    function deleted(id) {
        let newProduct = [...student]
        newProduct.splice(id, 1)

        setStudent(newProduct)
    }
    function seeModal(item) {
        setModalOpen(true)
        setTanlash(item)
    }
    return (
        <div className='container'>
            <div className="app" style={{ textAlign: "center" }}>
                <div className={`modal ${!modalOpen && "modal-close"}`}>
                    <div className="modal-content">
                        <div className="modal-content-header">
                            Ko`rish
                            <button onClick={() => setTanlash(false)}>X</button>
                        </div>
                        {tanlash && (
                            <div>
                                <h1>{" Ismi: " + tanlash.name}</h1>
                                <hr />
                                <h1>{" Yoshi: " + tanlash.age}</h1>
                                <hr />
                                <h1>{"Kontakt: " + tanlash.contact}</h1>
                                <hr />
                                <h1>{"Millat: " + tanlash.course}</h1>
                                <hr />
                            </div>
                        )}
                    </div>
                </div>
                <form className='form-input' onSubmit={createElem}>
                    <input className='text-danger' ref={nameRef} type="text" placeholder="StudentName" />
                    <input ref={ageRef} type="number" placeholder="Age" />
                    <input ref={coursecRef} type="text" placeholder="Nationality" />
                    <input ref={contactRef} type="text" placeholder="Contact" />
                    <button className='qoshish' type="submit">Qo'shish</button>
                </form>

                <table border={1} style={{ margin: "0 auto", marginTop: "50px", width: "70%" }}>
                    <thead>
                        <th>Id</th>
                        <th>Ism</th>
                        <th>Yosh</th>
                        <th>Contact</th>
                        <th>Millati</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {
                            student.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.course}</td>
                                        <td>
                                            <button className='korish' style={{ width: "49%" }} onClick={() => seeModal(item)}>Ko`rish</button>{" "}
                                            <button className='ochirish' style={{ width: "49%" }} onClick={() => deleted(index)}>O`chirish</button>{" "}
                                        </td>
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
