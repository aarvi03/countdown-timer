const endDate = new Date("19 Feb,2025 23:30:00").getTime();
const startDate = new Date().getTime();


let x=setInterval(function updateTimer(){
    const now=new Date().getTime();

    const distanceCovered = now-startDate;
    const distancePending = endDate-now;

    //calculate days,hrs,mins,secs

    // onedayinmillis=24*60*60*1000
    // onehoursinmillis=60*60*1000
    // onemininmillis=60*1000
    // onesecinmillis=1000

    const days=Math.floor(distancePending/(24*60*60*1000));
    const hrs=Math.floor((distancePending%(24*60*60*1000)/(60*60*1000)));
    const mins=Math.floor((distancePending%(60*60*1000))/(60*1000));
    const secs=Math.floor((distancePending%(60*1000))/(1000));


    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=mins;
    document.getElementById("seconds").innerHTML=secs;


    //calculate width percentage 
    const totalDistance=endDate-startDate;
    const percentageDistance=(distanceCovered/totalDistance)*100;

    //set width
    document.getElementById("progress-bar").style.width=percentageDistance+"%";

    if(distancePending<0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPIRED";
        document.getElementById("progress-bar").style.width="100%";
    }
}
,1000);