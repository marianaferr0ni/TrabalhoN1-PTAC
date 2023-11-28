import { getUsers } from "@/app/functions/handlerAcessAPI";
import Header from "@/app/components/Header";
import './dash.css'
import { Suspense } from "react";
import Link from "next/link";

export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div className="dashboard">
            <Header />
            <h1>Dashboard</h1>
            <Suspense fallback={<p>Carregando...</p>}>
                <div className="tudo">
                    {users?.map((user, index) =>
                    
                    <div key={index} className="card">
                        
                        <div className="cardzinho">
                        <Link href={`/pages/alter/${user.id}`}>
                            <img src="../exemplo.png"/>
                            <p className="name">{user.name}</p>
                            <p className="email">{user.email}</p>
                        </Link>
                        </div>
                    </div>
                    )}
                </div>
            </Suspense>
        </div>
    );
};