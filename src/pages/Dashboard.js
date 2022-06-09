import React from 'react';
import '../styles/Dashboard.scss';
import Invoice from '../components/Invoice'
import Members from '../components/Members';
import Calendar from '../components/Calendar';
import Monitor from '../components/Monitor';
import Notepad from '../components/Notepad';

const Dashboard = () => {



    return (
        <section className="dashboard">

            <Members/>
            <Calendar/>
      
         
            <Invoice/>
            <Notepad/>
            <Monitor/>
        </section>
    )
}

export default Dashboard;