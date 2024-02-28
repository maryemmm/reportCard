import './activity.css'
function Activity({activityIcon,title,current,reportType,previous,bgColor}){
    let lastLabel = '';
    if (reportType === 'daily') {
        lastLabel = 'Day';
    } else if (reportType === 'weekly') {
        lastLabel = 'Week';
    } else if (reportType === 'monthly') {
        lastLabel = 'Month';
    }
    return(
        <div class="card work">
        <div class="img-section" style={{backgroundColor:bgColor}}>
        <img src={activityIcon} alt="" />              
        </div>
        <div class="card-desc">
        <div class="card-header">
        <div class="card-title">{title}</div>
        <div class="card-menu">
        <div class="dot"></div>
        <div class="dot"></div>
          <div class="dot"></div>
          </div>
        </div>
        <div class="card-time">{current}</div>
        <p class="recent">Last {lastLabel}- {previous}</p>
      </div></div>

    )
}
export default Activity;