const express=require('express')
const app=express()
const cors = require('cors')
app.use(express.json());
app.use(cors());

const m_data1 = [
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
        heading1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
        heading2: {
            h2: "Coke Studio Bangla",
            views: "1.5M views - 2 days ago",
            verify: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true", 
        },
    },
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",
        heading1: ["Infinix Note 12:", "AMOLED Helio G88 Soc!"],
        heading2: {
            h2: "ATC Android ToTo Company",
            views: "4.2M views - 2 days ago",
            verify: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true", 
        },
    },
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        heading1: ["My first UX Design case study-", "This got me my first job."],
        heading2: {
            h2: "Saptarshi Prakash",
            views: "4.8K views - 1 year ago",
             
        },
    },
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
        heading1: ["My Mix", "Songs"],
        heading2: {
            h2: "Lopamudra Mitra,Anupam Roy",
            views: "1.5M views - 2 days ago",
             
        },
    },
    
];

const m_data2 = [
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
        heading1: ["UX Design - What is it?(From AJ", "&Smart)"],
        heading2: {
            h2: "AJ&Smar",
            views: "150K views - 3 years ago",
            verify: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true", 
        },
    },
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
        heading1: ["Mix-Mombati|Mohon Sharif|Dhakaiya", "Dose|Mahib Ahsan ft Anika"],
        heading2: {
            h2: "Mohon Sharif,Odd Signature,Shayan",
            views: "Chowdhury Arnob, and more",
            
        },
    },
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
        heading1: ["Passport", "|48 - VISA FREE"],
        heading2: {
            h2: "Nadir On The Go",
            views: "1.7M views - 1 year ago",
            
        },
    },
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
        heading1: ["14 Advanced Tips to Design", "FASTER in Figma"],
        heading2: {
            h2: "Miziko",
            views: "53K views - 1 year ago" ,
            verify: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true", 
        },
    },
    
];

const m_data3 = [
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
        heading1: ["Visiting Thar Desert | ", "Hotest Desert"],
        heading2: {
            h2: "Nadir On The Go",
            views: "1.5M views - 2 days ago", 
        },
    },
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",
        heading1: ["Tech Skills |Figma|", "UI / UX Design"],
        heading2: {
            h2: "Tech Company",
            views: "4.2M views - 2 days ago",
            verify: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true", 
        },
    },
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        heading1: ["My first visit to Google", "First dream job place."],
        heading2: {
            h2: "Saptarshi Prakash",
            views: "4.8K views - 1 year ago", 
        },
    },
    {
        src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
        profile: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
        heading1: ["Microsoft 1st interview", "Reviews and experience"],
        heading2: {
            h2: "Lopamudra Mitra,Anupam Roy",
            views: "1.5M views - 2 days ago",
            verify: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true", 
        },
    },
    
];

app.get('/m_data1',(req,res) => {
    res.json(m_data1);
})

app.get('/m_data2',(req,res) => {
    res.json(m_data2);
})

app.get('/m_data3',(req,res) => {
    res.json(m_data3);
})

const PORT =3000;
app.listen(PORT ,() => {
    console.log(`Server running on port ${PORT}`)
})