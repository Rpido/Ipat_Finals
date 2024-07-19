import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css';


const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
                setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    
    return (
        <div class="items-container">
            <h1>Employee Information</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <span>
                            {item.firstname} {item.middlename} {item.lastname}<br />
                            {item.contact_no}, {item.email}, {item.date_of_birth}, {item.place_of_birth}<br />
                            {item.sex}, {item.height_m}, {item.weight_kg}, {item.blood_type}, {item.civil_status}, {item.citizenship}<br />
                            {item.gsis_no}, {item.pagibig_no}, {item.philhealth_no}, {item.sss_no}, {item.tin_no}<br />
                            {item.father_surname}, {item.father_first_name}, {item.father_middle_name}<br />
                            {item.mother_surname}, {item.mother_first_name}, {item.mother_middle_name}<br />
                            {item.permanent_zipcode}<br />
                            </span>
                            <button class="edit" onClick={() => onEdit(item)}>Edit</button>
                            <button class="delete" onClick={() => onDelete(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
        </div>
    );
};

    export default ItemList;