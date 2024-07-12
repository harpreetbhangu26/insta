"use client";

import { useEffect } from "react";

const Adver = () => {
  useEffect(() => {
    const existingAds = document.querySelectorAll(".adsbygoogle");
    existingAds.forEach((ad) => {
      ad.remove();
    });

    //create a new add
    const newAd = document.createElement("ins");
    newAd.className = "adsbygoogle";
    newAd.style.display = "block";
    newAd.setAttribute("data-ad-client", "ca-pub-1905574218549333");
    newAd.setAttribute("data-ad-slot", "4135855700");
    newAd.setAttribute("data-ad-format", "auto");
    newAd.setAttribute("data-full-width-responsive", "true");

    //Append  the new ad
    const adContainer = document.getElementById("ad-container");
    adContainer?.appendChild(newAd);

    //push the ad
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1905574218549333"
      ></script>
      <div id="ad-container"></div>
    </div>
  );
};

export default Adver;
