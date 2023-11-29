import React from 'react';
import Link from 'next/link';
import './Lista.css';

export default async function Lista({ users }) {
    
    return (
        <div className="tudo">
            {users?.map((user, index) =>
                <div key={index} className="card">  
                    <Link href={`/pages/alter/${user.id}`}>      
                        <div className="cardzinho">
                            <img src="../exemplo.png"/>
                            <p className="name">{user.name}</p>
                            <p className="email">{user.email}</p>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    )
}