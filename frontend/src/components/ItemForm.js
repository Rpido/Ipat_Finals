import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const ItemForm = ({ item, onSuccess }) => {
    const [firstname, setfirstname] = useState('');
    const [middlename, setmiddlename] = useState('');
    const [lastname, setlastname] = useState('');
    const [contact_no, setcontact_no] = useState('');
    const [email, setemail] = useState('');

    const [date_of_birth, setdate_of_birth] = useState('');
    const [place_of_birth, setplace_of_birth] = useState('');
    const [sex, setsex] = useState('');
    const [height_m, setheight_m] = useState('');
    const [weight_kg, setweight_kg] = useState('');

    const [blood_type, setblood_type] = useState('');
    const [civil_status, setcivil_status] = useState('');
    const [citizenship, setcitizenship] = useState('');
    const [gsis_no, setgsis_no] = useState('');
    const [pagibig_no, setpagibig_no] = useState('');

    const [philhealth_no, setphilhealth_no] = useState('');
    const [sss_no, setsss_no] = useState('');
    const [tin_no, settin_no] = useState('');
    const [father_surname, setfather_surname] = useState('');
    const [father_first_name, setfather_first_name] = useState('');

    const [father_middle_name, setfather_middle_name] = useState('');
    const [mother_surname, setmother_surname] = useState('');
    const [mother_first_name, setmother_first_name] = useState('');
    const [mother_middle_name, setmother_middle_name] = useState('');
    const [permanent_zipcode, setpermanent_zipcode] = useState('');

    useEffect(() => {
        if (item) {
            setfirstname(item.firstname);
            setmiddlename(item.middlename);
            setlastname(item.lastname);
            setcontact_no(item.contact_no);
            setemail(item.email);

            setdate_of_birth(item.date_of_birth);
            setplace_of_birth(item.place_of_birth);
            setsex(item.sex); 
            setheight_m(item.height_m);
            setweight_kg(item.weight_kg);

            setblood_type(item.blood_type);
            setcivil_status(item.civil_status);
            setcitizenship(item.citizenship);
            setgsis_no(item.gsis_no);
            setpagibig_no(item.pagibig_no);

            setphilhealth_no(item.philhealth_no);
            setsss_no(item.sss_no);
            settin_no(item.tin_no);
            setfather_surname(item.father_surname);
            setfather_first_name(item.father_first_name);

            setfather_middle_name(item.father_middle_name);
            setmother_surname(item.mother_surname);
            setmother_first_name(item.mother_first_name);
            setmother_middle_name(item.mother_middle_name);
            setpermanent_zipcode(item.permanent_zipcode);
        } else {
            clearForm();
        }
    }, [item]);

    const clearForm = () => {
        setfirstname('');
        setmiddlename('');
        setlastname('');
        setcontact_no('');
        setemail('');

        setdate_of_birth('');
        setplace_of_birth('');
        setsex('');
        setheight_m('');
        setweight_kg('');

        setblood_type('');
        setcivil_status('');
        setcitizenship('');
        setgsis_no('');
        setpagibig_no('');

        setphilhealth_no('');
        setsss_no('');
        settin_no('');
        setfather_surname('');
        setfather_first_name('');

        setfather_middle_name('');
        setmother_surname('');
        setmother_first_name('');
        setmother_middle_name('');
        setpermanent_zipcode('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            firstname,
            middlename,
            lastname,
            contact_no,
            email,
            date_of_birth,
            place_of_birth,
            sex,
            height_m,
            weight_kg,
            blood_type,
            civil_status,
            citizenship,
            gsis_no,
            pagibig_no,
            philhealth_no,
            sss_no,
            tin_no,
            father_surname,
            father_first_name,
            father_middle_name,
            mother_surname,
            mother_first_name,
            mother_middle_name,
            permanent_zipcode
        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            clearForm();
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div className="form-container">
        <h1>Employee From</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />     
                </div>
                <div>
                    <label>Middle Name:</label>
                    <input type="text" value={middlename} onChange={(e) => setmiddlename(e.target.value)} />     
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} />     
                </div>
                <div>
                    <label>Contact No:</label>
                    <input type="text" value={contact_no} onChange={(e) => setcontact_no(e.target.value)} />     
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />     
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" value={date_of_birth} onChange={(e) => setdate_of_birth(e.target.value)} />     
                </div>
                <div>
                    <label>Place of Birth:</label>
                    <input type="text" value={place_of_birth} onChange={(e) => setplace_of_birth(e.target.value)} />     
                </div>
                <div>
                    <label>Sex:</label>
                    <input type="text" value={sex} onChange={(e) => setsex(e.target.value)} />     
                </div>
                <div>
                    <label>Height (m):</label>
                    <input type="text" value={height_m} onChange={(e) => setheight_m(e.target.value)} />     
                </div>
                <div>
                    <label>Weight (kg):</label>
                    <input type="text" value={weight_kg} onChange={(e) => setweight_kg(e.target.value)} />     
                </div>
                <div>
                    <label>Blood Type:</label>
                    <input type="text" value={blood_type} onChange={(e) => setblood_type(e.target.value)} />     
                </div>
                <div>
                    <label>Civil Status:</label>
                    <input type="text" value={civil_status} onChange={(e) => setcivil_status(e.target.value)} />     
                </div>
                <div>
                    <label>Citizenship:</label>
                    <input type="text" value={citizenship} onChange={(e) => setcitizenship(e.target.value)} />     
                </div>
                <div>
                    <label>GSIS No:</label>
                    <input type="text" value={gsis_no} onChange={(e) => setgsis_no(e.target.value)} />     
                </div>
                <div>
                    <label>Pag-IBIG No:</label>
                    <input type="text" value={pagibig_no} onChange={(e) => setpagibig_no(e.target.value)} />     
                </div>
                <div>
                    <label>PhilHealth No:</label>
                    <input type="text" value={philhealth_no} onChange={(e) => setphilhealth_no(e.target.value)} />     
                </div>
                <div>
                    <label>SSS No:</label>
                    <input type="text" value={sss_no} onChange={(e) => setsss_no(e.target.value)} />     
                </div>
                <div>
                    <label>TIN No:</label>
                    <input type="text" value={tin_no} onChange={(e) => settin_no(e.target.value)} />     
                </div>
                <div>
                    <label>Father's Surname:</label>
                    <input type="text" value={father_surname} onChange={(e) => setfather_surname(e.target.value)} />     
                </div>
                <div>
                    <label>Father's First Name:</label>
                    <input type="text" value={father_first_name} onChange={(e) => setfather_first_name(e.target.value)} />     
                </div>
                <div>
                    <label>Father's Middle Name:</label>
                    <input type="text" value={father_middle_name} onChange={(e) => setfather_middle_name(e.target.value)} />     
                </div>
                <div>
                    <label>Mother's Surname:</label>
                    <input type="text" value={mother_surname} onChange={(e) => setmother_surname(e.target.value)} />     
                </div>
                <div>
                    <label>Mother's First Name:</label>
                    <input type="text" value={mother_first_name} onChange={(e) => setmother_first_name(e.target.value)} />     
                </div>
                <div>
                    <label>Mother's Middle Name:</label>
                    <input type="text" value={mother_middle_name} onChange={(e) => setmother_middle_name(e.target.value)} />     
                </div>
                <div>
                    <label>Zipcode:</label>
                    <input type="text" value={permanent_zipcode} onChange={(e) => setpermanent_zipcode(e.target.value)} />     
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    );
};

export default ItemForm;
