import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './App.css';
import Playlist from './components/Playlist'

function getData() {

  let allData = []

  //return sorted array of playlists objects 
  return new Promise(resolve => {

    axios.get('https://emulator-dev.rokufy.com/SimpleVideoApp.json')
      .then(res => res.data.playlists.forEach((playlist, c) => {

        // console.log(res.data)
        let playlistTitle = playlist.name
        let obj = { name: playlistTitle, newContent: [] }

        //run on content list and check if the id is the same
        res.data.content.forEach(content => {
          playlist.itemIds.forEach(itemId => {
            if (content.id === itemId) {
              obj.newContent.push(content)
            }
          })
        })
        allData.push(obj)

        resolve(allData)
      }))
  })


}


function App() {
  
  
  const [playlists, setPlaylists] = useState(getData())
  console.log(playlists)
  
  useEffect(() => {
    console.log("Use Effect App")    

    const callAsyncData = async () => {
      let data = await getData()
      setPlaylists(data)
    }

    callAsyncData()
  }, [])


  return (
    <div className="App">
      {playlists.map((playlist,i) => {
        return <Playlist playlist={playlist}
                         listNum={i} /> 
      })}
    </div>
  )
}

export default App



let list = {
  content: [
    {
      id: "8860510",
      title: "The Best Aquarium in 4K HDR 🐠 Calm & Relaxing Coral Reef Aquarium - Sleep Meditation 4K Screensaver",
      description: "Relaxing Aquarium in HDR - Enjoy the peaceful aquariums & tanks views in beautiful 4K UHD HDR. Helps Relax & Fall Asleep FAST! 2 hours long. Relax with beautiful fishes, Manta rays, Sea anemones, Sharks, and more!. Music for relaxation, sleep, meditation, yoga, study. Sit back, relax and enjoy :) Helping you Relax with Stunning Nature in 4K, subscribe for more!: ▷ http://bit.ly/Subscribe-Balu 🔔Be sure to ring the bell to get EVERY new video notification! 🔔 What is HDR?: If you watch this video on a HDR compatible device like an Oled TV, or a mobile phone like the Samsung S8 S9 and iPhone X, you will be able to see a High Dynamic Range version of the video. HDR basically means better contrast, greater brightness levels and a wider color palette. The idea is that your eyes can perceive brighter whites and darker blacks – greater dynamism – than traditional TVs have been able to display. Our Videos are great as a TV Screensaver for the living room, office, lounge, waiting room, Spa, Restaurant, etc. Play it in your Oled TV, Smart TV, Roku, Apple tv, Chromecast, Xbox, Playstation, Wii, and more!. Relax with our Non-Stop Video Playlists!: ▼ Our Most Popular Videos ▼ http://bit.ly/MostPopular4KVideos ▼ Beautiful Nature in 4K ▼ http://bit.ly/BeautifulNature-Playlist ▼ Aquariums in 4K ▼ http://bit.ly/Relaxing4KAquariums ▼ The Most Beautiful Landscapes ▼ http://bit.ly/Landscapes-Playlist ▼ Cute Animals and Relaxing Music ▼ http://bit.ly/CuteAnimals-Playlist ▼ HDR videos ▼ http://bit.ly/hdr4k ▼Follow us on Facebook and Instagram▼ https://www.facebook.com/BaLuRelaxingNature/ https://www.instagram.com/balurelaxingnature/ Copyright: All the footage was recorded, edited and color corrected by us, we don\'t use stock footage in our channel, our footage is 100% Original :) Video Footage Copyright exclusively belongs to Balu Relaxing Nature. ▼Cameras and Gear we use to record our videos▼ https://kit.co/BaluRelaxingNature Related Hashtags: #4K #HDR #Relaxingmusic",
      thumbnail: "https://cdn.marschannels.com/files/video_libraries/16/ppeWG-oiJkg/default",
      streamURL: "https://5ad79df289937.streamlock.net/Aquarium-WebCams/Secret-Reef.stream/chunklist.m3u8",
      videoQuality: "",
      audioQuality: "",
      views: 2882096,
      likes: 15508,
      videoDuration: 6978,
      is_live_streaming: true,
      is_tracking: false
    },
    {
      id: "8860511",
      title: "CORAL REEF AQUARIUM COLLECTION 「24/7」 🔴 Relaxing Music for Sleep, Study, Yoga & Meditation",
      description: "Enjoy a beautiful coral reef aquarium. This video features stunning coral reef fish and relaxing music that is ideal for sleep, study, meditation and yoga. ✿ Follow on Spotify https://spoti.fi/2rXqPK9 #aquarium #coralreef #relaxingmusic #relaxmusic #sleepmusic #studymusic #meditationmusic #yogamusic #24/7 ► Christmas Livestream https://youtu.be/HDbjgMJUjls ► Fireplace Livestream https://youtu.be/kOnIAoqQkd4 ► Ghibli Livestream https://youtu.be/P8j-_MOSrec Thank you for watching! I love to create videos and my aim is to show you how beautiful the world is by taking you on a journey with amazing nature scenery and relaxing music! My videos are ideal for sleep, study, meditation and stress relief. My goal is to provide high quality relaxing content that doesn\'t contain any annoying talking or commentary. If you would like to find out more, please visit my website https://cattrumpetmusic.com/ or consider checking out the Community tab. I create all of the videos you see on this channel. Occasionally I transform materials provided by others with their approval into a new and unique creation. Any additional assets used are fully licensed. Please do NOT download or redistribute the content found on this channel. ∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷ YOU CAN ALSO FIND ME ON 🎧 Spotify https://spoti.fi/2rXqPK9 🎧 Apple Music/iTunes https://apple.co/2zqb1Di 🎧 Google Play https://goo.gl/SmO1ZY 🎧 Amazon https://amzn.to/2FThXNg 🎧 YouTube Music http://bit.ly/2TUsInk",
      thumbnail: "https://cdn.marschannels.com/files/video_libraries/16/_Nu-arlddP4/default",
      streamURL: "https://sochi.camera:8081/cam_40/tracks-v1/index.m3u8",
      videoQuality: "",
      audioQuality: "",
      views: 2803143,
      likes: 16140,
      videoDuration: 0,
      is_live_streaming: true,
      is_tracking: false
    },
    {
      id: "8860512",
      title: "LIVE CORAL REEF with water sound for Lower blood pressure | Reduce Stress and Anxiety",
      description: "live coral reef aquarium with water sound. for Lower blood pressure | Reduce Stress and Anxiety. Subscribe to RELAX TIME: https://bit.ly/2TzAy7a My upload schedule: ► MONDAY My Other Channel: https://bit.ly/3cCzAO4 more aqualium video: https://bit.ly/2ZxSnHF RELX TIME Channel Page: https://bit.ly/3eg3CZq Most Popular Upload: https://bit.ly/2WZpP86 #Aquarium #CoralReef #Screensaver #FishTank #Bildschirmschoner #Sleep #RELAXTIME #Live",
      thumbnail: "https://cdn.marschannels.com/files/video_libraries/16/ajRRC4ns0Dc/default",
      streamURL: "https://outbound-production.explore.org/stream-production-10/.m3u8",
      videoQuality: "",
      audioQuality: "",
      views: 43927,
      likes: 200,
      videoDuration: 0,
      is_live_streaming: true,
      is_tracking: false
    },
    {
      id: "8860514",
      title: "Stunning Coral Reef Aquarium & The Best Relaxing Music 🐟",
      description: "Enjoy 2 hours of stunning coral reef aquarium. This video features beautiful coral reef fish and relaxing music that is ideal for sleep, study and meditation. #aquarium #coralreef #relaxingmusic Thank you for watching! I love to create videos and my aim is to show you how beautiful the world is by taking you on a journey with amazing nature scenery and relaxing music! My videos are ideal for sleep, study, meditation and stress relief. My goal is to provide high quality relaxing content that doesn\'t contain any annoying talking or commentary. If you would like to find out more, please visit my website https://cattrumpetmusic.com/ or consider checking out the Community tab. I create all of the videos you see on this channel. Occasionally I transform materials provided by others with their approval into a new and unique creation. Any additional assets used are fully licensed. Please do NOT download or redistribute the content found on this channel. ∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷ YOU CAN ALSO FIND ME ON 🎧 Spotify https://spoti.fi/2rXqPK9 🎧 Apple Music/iTunes https://apple.co/2zqb1Di 🎧 Google Play https://goo.gl/SmO1ZY 🎧 Amazon https://amzn.to/2FThXNg 🎧 YouTube Music http://bit.ly/2TUsInk MEDITATION MUSIC & WHITE NOISE 🛒 Official Store https://cattrumpetmusic.com ∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷",
      thumbnail: "https://cdn.marschannels.com/files/video_libraries/16/5ET2B-bEduc/default",
      streamURL: "https://5ad79df289937.streamlock.net/Aquarium-WebCams/Secret-Reef.stream/chunklist.m3u8",
      videoQuality: "",
      audioQuality: "",
      views: 1542840,
      likes: 4841,
      videoDuration: 7200,
      is_live_streaming: false,
      is_tracking: false
    },
    {
      id: "8860515",
      title: "LIVE CORAL REEF AQUARIUM WITH WATER SOUND",
      description: "live coral reef aquarium with water sound. for Meditation Relaxation Sleep White Noise for Sleep coral reef no music. The Best no music live coral reef for Relaxation, fishtank live. Subscribe to RELAX TIME: https://bit.ly/2TzAy7a My upload schedule: ► MONDAY My Other Channel: https://bit.ly/3cCzAO4 more aqualium video: https://bit.ly/2ZxSnHF RELX TIME Channel Page: https://bit.ly/3eg3CZq Most Popular Upload: https://bit.ly/2WZpP86 #Aquarium #Screensaver #FishTank #LiveBildschirmschoner #CoralReef #Fish #Sleep #Relaxing #RELAXTIME",
      thumbnail: "https://cdn.marschannels.com/files/video_libraries/16/wocJEpCqZ90/default",
      streamURL: "https://5ad79df289937.streamlock.net/Aquarium-WebCams/Secret-Reef.stream/chunklist.m3u8",
      videoQuality: "",
      audioQuality: "",
      views: 107413,
      likes: 665,
      videoDuration: 3600,
      is_live_streaming: true,
      is_tracking: false
    },
    {
      id: "8860516",
      title: "BEAUTIFUL CORAL REEF AQUARIUM COLLECTION • 12 HOURS • BEST RELAX MUSIC • SLEEP MUSIC • 1080p HD",
      description: "Enjoy 12 hours of relaxing coral reef aquarium. This video features beautiful coral reef fish and relaxing music that is ideal for sleep, study and meditation #aquarium #coralreef #relaxingmusic Thank you for watching! I love to create videos and my aim is to show you how beautiful the world is by taking you on a journey with amazing nature scenery and relaxing music! My videos are ideal for sleep, study, meditation and stress relief. My goal is to provide high quality relaxing content that doesn\'t contain any annoying talking or commentary. If you would like to find out more, please visit my website https://cattrumpetmusic.com/ or consider checking out the Community tab. I create all of the videos you see on this channel. Occasionally I transform materials provided by others with their approval into a new and unique creation. Any additional assets used are fully licensed. Please do NOT download or redistribute the content found on this channel. ∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷ YOU CAN ALSO FIND ME ON 🎧 Spotify https://spoti.fi/2rXqPK9 🎧 Apple Music/iTunes https://apple.co/2zqb1Di 🎧 Google Play https://goo.gl/SmO1ZY 🎧 Amazon https://amzn.to/2FThXNg 🎧 YouTube Music http://bit.ly/2TUsInk MEDITATION MUSIC & WHITE NOISE 🛒 Official Store https://cattrumpetmusic.com ∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷",
      thumbnail: "https://cdn.marschannels.com/files/video_libraries/16/TRgqtaYb4sU/default",
      streamURL: "https://5ad79df289937.streamlock.net/Aquarium-WebCams/Secret-Reef.stream/chunklist.m3u8",
      videoQuality: "",
      audioQuality: "",
      views: 4520162,
      likes: 11047,
      videoDuration: 43191,
      is_live_streaming: false,
      is_tracking: false
    },
    {
      id: "8860517",
      title: "AQUARIUM 4k coral reef 4K with water sound 10 Hours for Meditation Relaxation Sleeping #RELAXTIME",
      description: "coral reef aquarium 4K with water sound. 10 Hours for Meditation Relaxation Sleep Relax Meditation. coral reef no music. The Best 4K no music coral reef Aquarium for Relaxation, fish tank 10 hours. Subscribe to RELAX TIME: https://bit.ly/2TzAy7a My upload schedule: ► MONDAY My Other Channel: https://bit.ly/3cCzAO4 more aqualium video: https://bit.ly/2ZxSnHF RELX TIME Channel Page: https://bit.ly/3eg3CZq Most Popular Upload: https://bit.ly/2WZpP86 #Aquarium #RELAXTIME #Screensaver #fishtank #aquarium4k #4kvideo #bildschirmschoner4k #coralreef #4kvideoultrahd #fish #fishtank #sleep #relaxing #relaxtime #8hours #RELAXTIME #4k",
      thumbnail: "https://cdn.marschannels.com/files/video_libraries/16/9Ej-0VRWmI8/default",
      streamURL: "https://5ad79df289937.streamlock.net/Aquarium-WebCams/Secret-Reef.stream/chunklist.m3u8",
      videoQuality: "",
      audioQuality: "",
      views: 3389164,
      likes: 5768,
      videoDuration: 36050,
      is_live_streaming: false,
      is_tracking: false
    },
    {
      id: "8860518",
      title: "*NEW* 11 HOURS of 4K Underwater Wonders + Relaxing Music - Coral Reefs & Colorful Sea Life in UHD",
      description: "BUY/DOWNLOAD @ https://www.naturerelaxation.com/products/underwater-wonders-2-or-9-hr-underwater-film-music-in-4k-uhd | WATCH ON-DEMAND @ https://watch.naturerelaxation.com/videos/underwater-wonders-9hr | ABOUT: Sit back, relax, and embark on a colorful sea undersea voyage filled with the awe-inspiring wildlife wonders of the coral reefs from around the world. Paired with brand new music by Relax Moods (formerly known as the Cynic Project), this film has been extended to last 11 hours, 11 minutes, 11 seconds, making it perfect to leave on as a soothing backdrop during your day or while falling asleep. In this film viewers will see a wide array of colorful sea life scenes including dolphins, whales, turtles, sea lions, groupers, nemo fish, rays, bait balls and more. MORE INFO: MUSIC by Alex Smith with Relax Moods. Learn more @ https://www.RelaxMoods.com. FOOTAGE provided by collaborator John of Light (cinematography), learn more @ https://www.naturerelaxation.com/collections/about-john-of-light-nature-relaxation-collaborating-artist. MUSIC INFORMATION: Ambient music written by Alex Smith AKA \"The Cynic Project\", available exclusively to Nature Relaxation viewers. Learn more / view the rest of the Cynic Music collection @ https://www.NatureRelaxation.com/cynicmusic *HEALING CONTENT NOTICE: THIS FILM OFFERS CLINICALLY PROVEN THERAPEUTIC HEALTH BENEFITS FOR BODY & MIND* Watching Nature films has been clinically proven to boost mood and mental focus, while simultaneously treating high anxiety & blood pressure, insomnia, depression, drug addiction, & other health problems - without doctors or pills.** Learn more about how Nature heals at https://www.NatureRelaxation.com/hownatureheals. That\'s why our tagline is \"Replace Your Worries with Wonder!\" ABOUT NATURE RELAXATION™ FILMS BY DAVID HUTING From soaring over majestic mountaintops in Patagonia to swimming underwater with dolphins in Tahiti, the Nature Relaxation™ On-Demand Apps + Access is your ticket to experiencing the world\'s most famous and hidden natural wonders in 4K UHD &HD. Learn more at https://www.NatureRelaxation.com/about or on David Huting\'s website at https://www.DavidHuting.com. INTRODUCING NATURE RELAXATION™ ON-DEMAND STREAMING TV + APPS FOR ALL PLATFORMS In case you wonder why I run ads on the videos, it\'s so that I can continue to develop better ways to bring Nature Relaxation™ into your world, allowing you to relax and connect with nature on demand - and benefit from reduced stress, blood pressure mental fog, and a more positive mood & mental outlook - just from simply watching. Isn\'t Nature amazing? To date I offer a super-simple and high quality web streaming service plus apps on SEVEN platforms - yes, that\'s a lucky number. TRY IT BEFORE YOU BUY IT at https://watch.naturerelaxation.com or on the app store link below: APP STORE LINKS (Free to download/try): iOS App: https://www.naturerelaxation.com/ios ANDROID App: https://www.naturerelaxation.com/Android ROKU App: https://www.naturerelaxation.com/Roku APPLETV: Search for Nature Relaxation on the Apple TV store ANDROIDTV app: https://www.naturerelaxation.com/AndroidTV AMAZON Fire TV App: https://www.naturerelaxation.com/AmazonFire PC/MAC: https://watch.NatureRelaxation.com DISPLAY NATURE RELAXATION™ IN YOUR BUSINESS SETTING TO PUT YOUR CUSTOMERS IN A MORE POSITIVE MOOD, GUARANTEED• Designed for therapeutic relaxation in patient care settings, such as hospitals, high stress workplaces, nursing homes, and for individuals at home that love Nature and are seeking enhanced vitality through their digital devices. Learn more about Nature Relaxation at https://www.NatureRelaxation.com/about",
      thumbnail: "https://cdn.marschannels.com/files/video_libraries/16/843Rpqza_6o/default",
      streamURL: "https://5ad79df289937.streamlock.net/Aquarium-WebCams/Secret-Reef.stream/chunklist.m3u8",
      videoQuality: "",
      audioQuality: "",
      views: 1612698,
      likes: 13864,
      videoDuration: 40271,
      is_live_streaming: false,
      is_tracking: false
    }
  ],
  playlists: [
    {
      entity_id: "62715",
      type: "contents",
      page_type_ids: [
        "15"
      ],
      name: "LIVE VIDEOS",
      itemIds: [
        "8860512",
        "8860515"
      ]
    },
    {
      entity_id: "62714",
      type: "contents",
      page_type_ids: [
        "5"
      ],
      name: "Relaxing Aquarium",
      itemIds: [
        "8860510",
        "8860511",
        "8860514",
        "8860516",
        "8860517",
        "8860518"
      ]
    }
  ]
}