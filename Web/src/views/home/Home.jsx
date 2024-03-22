import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../home/10102681 1 (1).png'; // Adjust the import path based on the actual directory structure

function Contact() {
    return (
        <div className="a-right">
            <h1 style={{ color: '#000', margin: '20px', fontSize: '60px', fontWeight: 'bold', textAlign: 'center' }}>WELCOME to <span style={{ color: '#007bff' }}>TransLoom</span></h1>
            <div className="content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                <div className="left-content">
                    <img src={Logo} alt="Logo" style={{ width: '500px', height: 'auto' }} /> {/* Adjust width as needed */}
                </div>
                <div className="right-content">
                    
                    <div>
                    <h1 style={{ color: '#000', margin: '20px', fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>Breaking down language barriers, <span style={{ color: '#007bff' }}>one click at a time. </span></h1>
                        <Link to="/home" className="button infoButton" style={{ fontSize: '20px', padding: '10px 20px', marginRight: '10px', alignSelf: 'flex-start' }}>Explore </Link> {/* Adjust button size and position */}


                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
