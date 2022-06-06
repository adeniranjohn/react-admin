import React from 'react';
import Invoice from '../components/Invoice'
import Members from '../components/Members';
import Calendar from '../components/Calendar';
import Monitor from '../components/Monitor';
import Notepad from '../components/Notepad';

const Dashboard = () => {



    return (
        <section className="dashboard">
            <p>Dashboard</p>
            <Members/>
            <Calendar/>
      
            <Monitor/>
            <Invoice/>
            <Notepad/>
        </section>
    )
}

export default Dashboard;