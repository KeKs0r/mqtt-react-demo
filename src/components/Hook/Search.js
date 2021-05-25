import React, { useEffect, useState } from 'react';

const Dropdown = ({ email }) => {
    const [devices, setDevices] = useState([]);


    React.useEffect(() => {
    async function getDevices() {
        const response = await fetch(email);

        const body = await response.json();
        console.log(body);
        setDevices(body.Items.map(({ id, name }) => ({ label: id, value: name })));

      }
      getDevices();
    }, [email]);
    return (
        
        <select>
            <h1>{email}</h1>
            {devices.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
      );
    }
export default Dropdown;
