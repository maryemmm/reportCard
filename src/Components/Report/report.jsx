import './report.css'
import React, { useState } from 'react';
import Activity from '../Activity/activity';
import workImg from '../../Assets/workImg.png'
import playImg from '../../Assets/playImg.png'
import studyImg from '../../Assets/studyImg.png'
import exerciseImg from '../../Assets/exerciseImg.png'
import socialImg from '../../Assets/socialImg.png'
import selfCareImg from '../../Assets/selfCareImg.png'

function Report({userImg,userName}){
    const [reportType, setReportType] = useState('daily');
    const [clickedItem, setClickedItem] = useState(null);
    const activitiesData = [
        {
          title: 'Work',
          activityIcon: workImg,
          daily: {
            current: '8hrs',
            previous: '7hrs' // Last day's data
          },
          weekly: {
            current: '40hrs',
            previous: '38hrs' // Last week's data
          },
          monthly: {
            current: '160hrs',
            previous: '150hrs' // Last month's data
          },
          bgColor: '#fc8d62'
        },
        {
          title: 'Play',
          activityIcon: playImg,
          daily: {
            current: '2hrs',
            previous: '2.5hrs' // Last day's data
          },
          weekly: {
            current: '10hrs',
            previous: '9hrs' // Last week's data
          },
          monthly: {
            current: '30hrs',
            previous: '28hrs' // Last month's data
          },
          bgColor: '#56C2E6'
        },
        {
          title: 'Study',
          activityIcon: studyImg,
          daily: {
            current: '3hrs',
            previous: '3.5hrs' // Last day's data
          },
          weekly: {
            current: '15hrs',
            previous: '14hrs' // Last week's data
          },
          monthly: {
            current: '60hrs',
            previous: '58hrs' // Last month's data
          },
          bgColor: '#FC607D'
        },
        {
          title: 'Exercise',
          activityIcon: exerciseImg,
          daily: {
            current: '1.5hrs',
            previous: '1.7hrs' // Last day's data
          },
          weekly: {
            current: '8hrs',
            previous: '7hrs' // Last week's data
          },
          monthly: {
            current: '20hrs',
            previous: '18hrs' // Last month's data
          },
          bgColor: '#4BCF85'
        },
        {
          title: 'Social',
          activityIcon: socialImg,
          daily: {
            current: '1.5hrs',
            previous: '2hrs' // Last day's data
          },
          weekly: {
            current: '6hrs',
            previous: '5hrs' // Last week's data
          },
          monthly: {
            current: '24hrs',
            previous: '22hrs' // Last month's data
          },
          bgColor: '#7235D1'
        },
        {
          title: 'Self Care',
          activityIcon: selfCareImg,
          daily: {
            current: '0.5hrs',
            previous: '0.7hrs' // Last day's data
          },
          weekly: {
            current: '3hrs',
            previous: '2.5hrs' // Last week's data
          },
          monthly: {
            current: '10hrs',
            previous: '9hrs' // Last month's data
          },
          bgColor: '#F1C75A'
        }
      ];
    return(
        <div className="reportCard">
            <div className='user'>
                <div className='info'>
                <img src={userImg} alt="" />
                <p>Repport for</p>
                <h2>{userName}</h2>
                </div>
                <div className='cardType'>
                    <p onClick={() => { setReportType('daily'); setClickedItem('daily'); }} className={clickedItem === 'daily' ? 'clicked' : ''}>Daily</p>
                    <p onClick={() => { setReportType('weekly'); setClickedItem('weekly'); }} className={clickedItem === 'weekly' ? 'clicked' : ''}>Weekly</p>
                    <p onClick={() => { setReportType('monthly'); setClickedItem('monthly'); }} className={clickedItem === 'monthly' ? 'clicked' : ''}>Monthly</p>
                </div>
            </div>
            <div className='activities'>
      {activitiesData.map(activity => (
        <Activity 
          key={activity.title} // Assuming title is unique
          activityIcon={activity.activityIcon}
          title={activity.title}
          reportType={reportType}
          current={activity[reportType].current}
          previous={activity[reportType].previous}
          bgColor={activity.bgColor}
        />
      ))}
    </div>
        </div>
    )
}
export default Report;




