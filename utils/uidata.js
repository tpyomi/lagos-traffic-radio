const language = "English";
const streamUrl = `http://www.radio-browser.info/webservice/json/stations/bylanguage/${language}`;

const dataByCategory = {
  News: [
    {
      id: "1",
      title: "Five Die As Explosion Rocks Illegal Oil Bunkering Site In Imo",
      image:
        "https://www.naijanews.com/wp-content/uploads/2021/12/Illegal-Refinery-Explosion-590x354.jpg.webp",
      streamUrl: streamUrl,
      host: "Richard Ogunsile",
    },
    {
      id: "2",
      title:
        "Marketers Project Fuel Price Hike Amidst Port Harcourt Refinery Test-Run",
      image:
        "https://www.naijanews.com/wp-content/uploads/2023/12/Port-Harcourt-Refinery.png",
      streamUrl: streamUrl,
      host: "Enioluwa Adeniyi",
    },
    {
      id: "3",
      title: "Rewind the night with TECNO SPARK 20 AFCON Watch Party recap",
      image: "https://dailypost.ng/wp-content/uploads/2024/01/image1-10.jpg",
      streamUrl: streamUrl,
      host: "Bolarinwa Kola ",
    },
    {
      id: "4",
      title: "Buhari’s ex-minister submits Edo governorship nomination form",
      image:
        "https://cdn.punchng.com/wp-content/uploads/2023/06/23130528/IMAGE-2023-06-23-130522.jpg",
      streamUrl: streamUrl,
      host: "Adebayo Folorunsho-Francis",
    },
    {
      id: "5",
      title: "House of David loses multi-million naira Lagos church to fire",
      image:
        "https://cdn.punchng.com/wp-content/uploads/2024/01/31160750/GFLDoVcXQAATcz5.jpg",
      streamUrl: streamUrl,
      host: "Temitayo Jaiyeola",
    },
    {
      id: "6",
      title: "Russia Shoots Down 11 Ukrainian Drones Overnight",
      image:
        "https://www.channelstv.com/wp-content/uploads/2022/06/Untitled-1-60.png",
      streamUrl: streamUrl,
      host: "Emmanuel Egobiambu",
    },
  ],

  Sports: [
    {
      id: "1",
      title:
        "‘Outstanding’ Liverpool Thrash Sorry Chelsea To Stretch Premier League Lead",
      image:
        "https://www.channelstv.com/wp-content/uploads/2024/02/liverpool-chelsea-.jpg",
      streamUrl: streamUrl,
      host: "Emmanuel Egobiambu",
    },
    {
      id: "2",
      title: "Osimhen On A Mission With Nigeria At Africa Cup Of Nations",
      image:
        "https://www.channelstv.com/wp-content/uploads/2024/01/Oismhen.jpg",
      streamUrl: streamUrl,
      host: "Emmanuel Egobiambu",
    },
    {
      id: "3",
      title: "Rewind the night with TECNO SPARK 20 AFCON Watch Party recap",
      image: "https://dailypost.ng/wp-content/uploads/2024/01/image1-10.jpg",
      streamUrl: streamUrl,
      host: "Bolarinwa Kola ",
    },
    {
      id: "4",
      title: "Arsenal’s Jesus Promises New ‘Mindset’ In Search Of More Goals",
      image: "https://www.channelstv.com/wp-content/uploads/2024/01/Jesus.jpg",
      streamUrl: streamUrl,
      host: "Donatus Anichukwueze",
    },
    {
      id: "5",
      title: "Nigeria Battle Angola, Other AFCON Quarter-Final Clashes",
      image:
        "https://www.channelstv.com/wp-content/uploads/2024/01/afcon-trophy.jpg",
      streamUrl: streamUrl,
      host: "Donatus Anichukwueze",
    },
    {
      id: "6",
      title: "Sinayoko Scores As Mali Set Up AFCON Clash With Ivory Coast",
      image:
        "https://www.channelstv.com/wp-content/uploads/2024/01/Sinayoko4.jpg",
      streamUrl: streamUrl,
      host: "Emmanuel Egobiambu",
    },
  ],
};

export default dataByCategory;
