export interface Channel {
  id?: string;
  name: string;
  logo?: string;
  category: string;
  streamUrl: string;
  type: "mpd" | "m3u8";
  drmConfig?: {
    keyId?: string;
    key?: string;
  };
}

export const channels: Channel[] = [
  {
    name: "TV 5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/TV5_%28Philippines%29_logo.svg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "2615129ef2c846a9bbd43a641c7303ef",
      key: "07c7f996b1734ea288641a68e1cfdc4d"
    }
  },
  {
    name: "GMA PINOY TV",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-02-54-579.jpg",
    category: "LocalChannel",
    streamUrl: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "c95ed4c44b0b4f7fa1c6ebbbbaab21a1",
      key: "47635b8e885e19f2ccbdff078c207058"
    }
  },
  {
    name: "A2Z",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-02-54-579.jpg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "f703e4c8ec9041eeb5028ab4248fa094",
      key: "c22f2162e176eee6273a5d0b68d19530"
    }
  },
  {
    name: "ONE PH",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-03-14-258.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "92834ab4a7e1499b90886c5d49220e46",
      key: "a7108d9a6cfcc1b7939eb111daf09ab3"
    }
  },
  {
    name: "ONE NEWS",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-11-32-021.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "d39eb201ae494a0b98583df4d110e8dd",
      key: "6797066880d344422abd3f5eda41f45f"
    }
  },
  {
    name: "iBC",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-05-39-936.jpg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "04e292bc99bd4ccba89e778651914254",
      key: "ff0a62bdf8920ce453fe680330b563a5"
    }
  },
  {
    name: "RPTV",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-05-59-459.jpg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "1917f4caf2364e6d9b1507326a85ead6",
      key: "a1340a251a5aa63a9b0ea5d9d7f67595"
    }
  },
  {
    name: "PTV",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-07-15-900.jpg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "71a130a851b9484bb47141c8966fb4a3",
      key: "ad1f003b4f0b31b75ea4593844435600"
    }
  },
  {
    name: "MPTV",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-07-29-403.jpg",
    category: "SPORTS",
    streamUrl: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "6aab8f40536f4ea98e7c97b8f3aa7d4e",
      key: "139aa5a55ade471faaddacc4f4de8807"
    }
  },
  {
    name: "TV MARIA",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-16-50-151.jpg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "fa3998b9a4de40659725ebc5151250d6",
      key: "998f1294b122bbf1a96c1ddc0cbb229f"
    }
  },
  {
    name: "TRUE FM",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-25-06-804.jpg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0559c95496d44fadb94105b9176c3579",
      key: "40d8bb2a46ffd03540e0c6210ece57ce"
    }
  },
  {
    name: "BILYONARYO",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-25-21-841.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "227ffaf09bec4a889e0e0988704d52a2",
      key: "b2d0dce5c486891997c1c92ddaca2cd2"
    }
  },
  {
    name: "TV UP",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-25-38-793.jpg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "83e813ccd4ca4837afd611037af02f63",
      key: "a97c515dbcb5dcbc432bbd09d15afd41"
    }
  },
  {
    name: "DEPED CH",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-25-54-528.jpg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0f853706412b11edb8780242ac120002",
      key: "2157d6529d80a760f60a8b5350dbc4df"
    }
  },
  {
    name: "KNOWLEDGE CH",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-26-12-600.jpg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0f856fa0412b11edb8780242ac120002",
      key: "783374273ef97ad3bc992c1d63e091e7"
    }
  },
  {
    name: "TFC",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-27-24-996.jpg",
    category: "LocalChannel",
    streamUrl: "https://tfcguam-abscbn-ono.amagi.tv/index.m3u8",
    type: "m3u8"
  },
  {
    name: "VIVA CINEMA",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-29-20-682.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "07aa813bf2c147748046edd930f7736e",
      key: "3bd6688b8b44e96201e753224adfc8fb"
    }
  },
  {
    name: "PBO",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-53-52-970.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "dcbdaaa6662d4188bdf97f9f0ca5e830",
      key: "31e752b441bd2972f2b98a4b1bc1c7a1"
    }
  },
  {
    name: "CINEMAONE",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-54-07-166.jpg",
    category: "MOVIES",
    streamUrl: "https://cinemaone-abscbn-ono.amagi.tv/index_3.m3u8",
    type: "m3u8"
  },
  {
    name: "CINEMO",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-54-19-820.jpg",
    category: "MOVIES",
    streamUrl: "https://cinemo-abscbn-ono.amagi.tv/playlist.m3u8",
    type: "m3u8"
  },
  {
    name: "SARI SARI",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-54-32-930.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0a7ab3612f434335aa6e895016d8cd2d",
      key: "b21654621230ae21714a5cab52daeb9d"
    }
  },
  {
    name: "BUKO",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-55-00-354.jpg",
    category: "LocalChannel",
    streamUrl: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "d273c085f2ab4a248e7bfc375229007d",
      key: "7932354c3a84f7fc1b80efa6bcea0615"
    }
  },
  {
    name: "TMC",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-54-46-993.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "96701d297d1241e492d41c397631d857",
      key: "ca2931211c1a261f082a3a2c4fd9f91b"
    }
  },
  {
    name: "ROCK ACTION",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-55-17-305.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0f852fb8412b11edb8780242ac120002",
      key: "4cbc004d8c444f9f996db42059ce8178"
    }
  },
  {
    name: "DREAMWORK TAGALIZED",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-55-39-179.jpg",
    category: "KIDS",
    streamUrl: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "564b3b1c781043c19242c66e348699c5",
      key: "d3ad27d7fe1f14fb1a2cd5688549fbab"
    }
  },
  {
    name: "DREAMWORK HD",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-55-39-179.jpg",
    category: "KIDS",
    streamUrl: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "4ab9645a2a0a47edbd65e8479c2b9669",
      key: "8cb209f1828431ce9b50b593d1f44079"
    }
  },
  {
    name: "MOONBUG",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-55-55-893.jpg",
    category: "KIDS",
    streamUrl: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0bf00921bec94a65a124fba1ef52b1cd",
      key: "0f1488487cbe05e2badc3db53ae0f29f"
    }
  },
  {
    name: "NICKELODEON",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-56-09-524.jpg",
    category: "KIDS",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "9ce58f37576b416381b6514a809bfd8b",
      key: "f0fbb758cdeeaddfa3eae538856b4d72"
    }
  },
  {
    name: "NICK JR",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-56-23-398.jpg",
    category: "KIDS",
    streamUrl: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "bab5c11178b646749fbae87962bf5113",
      key: "0ac679aad3b9d619ac39ad634ec76bc8"
    }
  },
  {
    name: "CARTOON NETWORK",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-56-40-174.jpg",
    category: "KIDS",
    streamUrl: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "a2d1f552ff9541558b3296b5a932136b",
      key: "cdd48fa884dc0c3a3f85aeebca13d444"
    }
  },
  {
    name: "CARTOONITO",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-56-55-780.jpg",
    category: "KIDS",
    streamUrl: "https://cdn1.skygo.mn/live/disk1/Boomerang/HLS-FTA/Boomerang.m3u8",
    type: "m3u8"
  },
  {
    name: "DISNEY CH",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-57-17-121.jpg",
    category: "KIDS",
    streamUrl: "https://fl5.moveonjoy.com/DISNEY_CHANNEL/index.m3u8",
    type: "m3u8"
  },
  {
    name: "DISNEY XD",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-57-29-680.jpg",
    category: "KIDS",
    streamUrl: "https://fl5.moveonjoy.com/DISNEY_XD/index.m3u8",
    type: "m3u8"
  },
  {
    name: "PBS KIDS",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-58-20-372.jpg",
    category: "KIDS",
    streamUrl: "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/chunklist_b2000000.m3u8",
    type: "m3u8"
  },
  {
    name: "ANIMAX",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_11-58-35-902.jpg",
    category: "KIDS",
    streamUrl: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "92032b0e41a543fb9830751273b8debd",
      key: "03f8b65e2af785b10d6634735dbe6c11"
    }
  },
  {
    name: "HITS NOW",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-46-38-539.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "14439a1b7afc4527bb0ebc51cf11cbc1",
      key: "92b0287c7042f271b266cc11ab7541f1"
    }
  },
  {
    name: "HBO HD",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-47-46-724.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "d47ebabf7a21430b83a8c4b82d9ef6b1",
      key: "54c213b2b5f885f1e0290ee4131d425b"
    }
  },
  {
    name: "HBO FAMILY",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-48-12-280.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "872910c843294319800d85f9a0940607",
      key: "f79fd895b79c590708cf5e8b5c6263be"
    }
  },
  {
    name: "HBO SIGNATURE",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-49-02-053.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "a06ca6c275744151895762e0346380f5",
      key: "559da1b63eec77b5a942018f14d3f56f"
    }
  },
  {
    name: "HBO HITS",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-50-33-890.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "b04ae8017b5b4601a5a0c9060f6d5b7d",
      key: "a8795f3bdb8a4778b7e888ee484cc7a1"
    }
  },
  {
    name: "HITS HD",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-50-58-048.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "dac605bc197e442c93f4f08595a95100",
      key: "975e27ffc1b7949721ee3ccb4b7fd3e5"
    }
  },
  {
    name: "HITS MOVIES",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-51-21-331.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0f85439a412b11edb8780242ac120002",
      key: "7199bc900b9e23087d3a2c0c6d4edce4"
    }
  },
  {
    name: "THRILL",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-51-39-406.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "928114ffb2394d14b5585258f70ed183",
      key: "a82edc340bc73447bac16cdfed0a4c62"
    }
  },
  {
    name: "TAP ACTIONFLIX",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-52-23-482.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "bee1066160c0424696d9bf99ca0645e3",
      key: "f5b72bf3b89b9848de5616f37de040b7"
    }
  },
  {
    name: "AXN",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-54-06-223.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "fd5d928f5d974ca4983f6e9295dfe410",
      key: "3aaa001ddc142fedbb9d5557be43792f"
    }
  },
  {
    name: "CINEMAX",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-54-30-105.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "b207c44332844523a3a3b0469e5652d7",
      key: "fe71aea346db08f8c6fbf0592209f955"
    }
  },
  {
    name: "WARNER TV",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-54-57-106.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "4503cf86bca3494ab95a77ed913619a0",
      key: "afc9c8f627fb3fb255dee8e3b0fe1d71"
    }
  },
  {
    name: "SONY MOVIES",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-56-35-591.jpg",
    category: "MOVIES",
    streamUrl: "https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live1/smc_720p/chunks.m3u8",
    type: "m3u8"
  },
  {
    name: "RAKUTEN VIKI",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-56-51-678.jpg",
    category: "MOVIES",
    streamUrl: "https://newidco-rakutenviki-2-eu.xiaomi.wurl.tv/playlist.m3u8",
    type: "m3u8"
  },
  {
    name: "RAKUTEN COMEDY",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-56-51-678.jpg",
    category: "MOVIES",
    streamUrl: "https://rakuten-comedy-8-nl.samsung.wurl.tv/playlist.m3u8",
    type: "m3u8"
  },
  {
    name: "RAKUTEN COMEDY EU",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-56-51-678.jpg",
    category: "MOVIES",
    streamUrl: "https://rakuten-comedymovies-1-eu.rakuten.wurl.tv/playlist.m3u8",
    type: "m3u8"
  },
  {
    name: "RAKUTEN FAMILY EU",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-56-51-678.jpg",
    category: "MOVIES",
    streamUrl: "https://rakuten-family-1-eu.rakuten.wurl.tv/2000.m3u8",
    type: "m3u8"
  },
  {
    name: "KIX",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-58-03-800.jpg",
    category: "ASIAN FOREIGN",
    streamUrl: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "a8d5712967cd495ca80fdc425bc61d6b",
      key: "f248c29525ed4c40cc39baeee9634735"
    }
  },
  {
    name: "KBS WORLD",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-59-30-000.jpg",
    category: "MOVIES",
    streamUrl: "https://kbsworld-ott.akamaized.net/hls/live/2002341/kbsworld/master.m3u8",
    type: "m3u8"
  },
  {
    name: "SBS EU",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_13-59-54-598.jpg",
    category: "MOVIES",
    streamUrl: "https://newidco-sbs-1-eu.xiaomi.wurl.tv/playlist.m3u8",
    type: "m3u8"
  },
  {
    name: "TVN MOVIES",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-00-09-670.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "2e53f8d8a5e94bca8f9a1e16ce67df33",
      key: "3471b2464b5c7b033a03bb8307d9fa35"
    }
  },
  {
    name: "TVN PREMIUM",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-00-23-245.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "e1bde543e8a140b38d3f84ace746553e",
      key: "b712c4ec307300043333a6899a402c10"
    }
  },
  {
    name: "TAP MOVIES",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-00-39-992.jpg",
    category: "MOVIES",
    streamUrl: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_popupppvhd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "286e1c2d622c4c73b5c3d72e4a848abd",
      key: "b7fad67599c1ce3c2fbc9d02b901be05"
    }
  },
  {
    name: "SPOTV 1",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-01-07-908.jpg",
    category: "SPORTS",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "ec7ee27d83764e4b845c48cca31c8eef",
      key: "9c0e4191203fccb0fde34ee29999129e"
    }
  },
  {
    name: "SPOTV 2",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-12-54-830.jpg",
    category: "SPORTS",
    streamUrl: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "7eea72d6075245a99ee3255603d58853",
      key: "6848ef60575579bf4d415db1032153ed"
    }
  },
  {
    name: "PREMIER TENNIS 1",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-13-14-239.jpg",
    category: "SPORTS",
    streamUrl: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "59454adb530b4e0784eae62735f9d850",
      key: "61100d0b8c4dd13e4eb8b4851ba192cc"
    }
  },
  {
    name: "PREMIER SPORTS 2",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-13-40-128.jpg",
    category: "SPORTS",
    streamUrl: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "fc19c98cb9504a0fb78b22fea0a4b814",
      key: "ea683112a96d4ae6c32d4ea13923e8c7"
    }
  },
  {
    name: "TAP SPORTS",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-14-11-423.jpg",
    category: "SPORTS",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "eabd2d95c89e42f2b0b0b40ce4179ea0",
      key: "0e7e35a07e2c12822316c0dc4873903f"
    }
  },
  {
    name: "ONE SPORTS+",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-16-27-154.jpg",
    category: "SPORTS",
    streamUrl: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "322d06e9326f4753a7ec0908030c13d8",
      key: "1e3e0ca32d421fbfec86feced0efefda"
    }
  },
  {
    name: "ONE SPORTS",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-15-48-580.jpg",
    category: "SPORTS",
    streamUrl: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "53c3bf2eba574f639aa21f2d4409ff11",
      key: "3de28411cf08a64ea935b9578f6d0edd"
    }
  },
  {
    name: "PBA RUSH",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-27-45-896.jpg",
    category: "SPORTS",
    streamUrl: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "76dc29dd87a244aeab9e8b7c5da1e5f3",
      key: "95b2f2ffd4e14073620506213b62ac82"
    }
  },
  {
    name: "NBA TV",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/NBA_TV.svg",
    category: "SPORTS",
    streamUrl: "https://fl5.moveonjoy.com/NBA_TV/index.m3u8",
    type: "m3u8"
  },
  {
    name: "UAAP",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-28-03-299.jpg",
    category: "SPORTS",
    streamUrl: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "95588338ee37423e99358a6d431324b9",
      key: "6e0f50a12f36599a55073868f814e81e"
    }
  },
  {
    name: "CGTN",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-28-23-836.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_cgtn.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0f854ee4412b11edb8780242ac120002",
      key: "9f2c82a74e727deadbda389e18798d55"
    }
  },
  {
    name: "FRANCE 24",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-28-43-821.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_france24.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "257f9fdeb39d41bdb226c2ae1fbdaeb6",
      key: "e80ead0f4f9d6038ab34f332713ceaa5"
    }
  },
  {
    name: "ABC AUSTRALIA",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-28-57-017.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "389497f9f8584a57b234e27e430e04b7",
      key: "3b85594c7f88604adf004e45c03511c0"
    }
  },
  {
    name: "TV 5 MONDE",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-29-35-625.jpg",
    category: "LIFESTYLE",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "fba5a720b4a541b286552899ba86e38b",
      key: "f63fa50423148bfcbaa58c91dfcffd0e"
    }
  },
  {
    name: "CHANNEL NEWS ASIA",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-29-51-018.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "b259df9987364dd3b778aa5d42cb9acd",
      key: "753e3dba96ab467e468269e7e33fb813"
    }
  },
  {
    name: "LOTUS MACAU",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-30-03-149.jpg",
    category: "ASIAN FOREIGN",
    streamUrl: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "60dc692e64ea443a8fb5ac186c865a9b",
      key: "01bdbe22d59b2a4504b53adc2f606cc1"
    }
  },
  {
    name: "ANIMAL PLANET",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-30-15-961.jpg",
    category: "LIFESTYLE",
    streamUrl: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "436b69f987924fcbbc06d40a69c2799a",
      key: "c63d5b0d7e52335b61aeba4f6537d54d"
    }
  },
  {
    name: "BBC EARTH",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-50-13-524.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "34ce95b60c424e169619816c5181aded",
      key: "0e2a2117d705613542618f58bf26fc8e"
    }
  },
  {
    name: "ROCK ENTERTAINMENT",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-50-50-767.jpg",
    category: "LIFESTYLE",
    streamUrl: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "e4ee0cf8ca9746f99af402ca6eed8dc7",
      key: "be2a096403346bc1d0bb0f812822bb62"
    }
  },
  {
    name: "DISCOVERY",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-51-08-470.jpg",
    category: "ASIAN FOREIGN",
    streamUrl: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "d9ac48f5131641a789328257e778ad3a",
      key: "b6e67c37239901980c6e37e0607ceee6"
    }
  },
  {
    name: "BBC WORLD",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-51-54-864.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "436b69f987924fcbbc06d40a69c2799a",
      key: "c63d5b0d7e52335b61aeba4f6537d54d"
    }
  },
  {
    name: "TRAVEL CH",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-52-08-524.jpg",
    category: "ASIAN FOREIGN",
    streamUrl: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "f3047fc13d454dacb6db4207ee79d3d3",
      key: "bdbd38748f51fc26932e96c9a2020839"
    }
  },
  {
    name: "ASIA FOODNETWORK",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-52-28-401.jpg",
    category: "LIFESTYLE",
    streamUrl: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "1619db30b9ed42019abb760a0a3b5e7f",
      key: "5921e47fb290ae263291b851c0b4b6e4"
    }
  },
  {
    name: "FOOD NETWORK",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-52-41-676.jpg",
    category: "LIFESTYLE",
    streamUrl: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "b7299ea0af8945479cd2f287ee7d530e",
      key: "b8ae7679cf18e7261303313b18ba7a14"
    }
  },
  {
    name: "TAP TV",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-53-08-188.jpg",
    category: "LIFESTYLE",
    streamUrl: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "f6804251e90b4966889b7df94fdc621e",
      key: "55c3c014f2bd12d6bd62349658f24566"
    }
  },
  {
    name: "CRIME INVESTIGATION",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-53-21-111.jpg",
    category: "ASIAN FOREIGN",
    streamUrl: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "21e2843b561c4248b8ea487986a16d33",
      key: "db6bb638ccdfc1ad1a3e98d728486801"
    }
  },
  {
    name: "TECH STORM",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-53-39-947.jpg",
    category: "ASIAN FOREIGN",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tech_storm.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "5675d85ce6754ba6aa8f6acc4660f76f",
      key: "140bfb365cf143c349f68699238a610c"
    }
  },
  {
    name: "FASHION TV",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-53-49-838.jpg",
    category: "LIFESTYLE",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "971ebbe2d887476398e97c37e0c5c591",
      key: "472aa631b1e671070a4bf198f43da0c7"
    }
  },
  {
    name: "BLOOMBERG",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-54-02-239.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "ef7d9dcfb99b406cb79fb9f675cba426",
      key: "b24094f6ca136af25600e44df5987af4"
    }
  },
  {
    name: "NHK JAPAN",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-54-13-052.jpg",
    category: "ASIAN FOREIGN",
    streamUrl: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0f853990412b11edb8780242ac120002",
      key: "89d57dfef804fd9b5c788a54903d8256"
    }
  },
  {
    name: "HISTORY",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-55-04-975.jpg",
    category: "ASIAN FOREIGN",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "a7724b7ca2604c33bb2e963a0319968a",
      key: "6f97e3e2eb2bade626e0281ec01d3675"
    }
  },
  {
    name: "AL JAZEERA",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-55-39-467.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0f85362a412b11edb8780242ac120002",
      key: "d643dfbbfca6dc64e7f58fd67ea4b7d5"
    }
  },
  {
    name: "CCTV",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-56-08-326.jpg",
    category: "NEWS",
    streamUrl: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "0f8541ec412b11edb8780242ac120002",
      key: "6cf16c272b7357c48cd47061799a4963"
    }
  },
  {
    name: "LIFETIME",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-57-02-446.jpg",
    category: "LIFESTYLE",
    streamUrl: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "cf861d26e7834166807c324d57df5119",
      key: "64a81e30f6e5b7547e3516bbf8c647d0"
    }
  },
  {
    name: "HGTV",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-57-49-199.jpg",
    category: "LIFESTYLE",
    streamUrl: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "f0e3ab943318471abc8b47027f384f5a",
      key: "13802a79b19cc3485d2257165a7ef62a"
    }
  },
  {
    name: "ARIRANG",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-58-02-739.jpg",
    category: "ASIAN FOREIGN",
    streamUrl: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd",
    type: "mpd",
    drmConfig: {
      keyId: "13815d0fa026441ea7662b0c9de00bcf",
      key: "2d99a55743677c3879a068dd9c92f824"
    }
  },
  {
    name: "MTV",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-58-19-427.jpg",
    category: "MUSIC",
    streamUrl: "https://fl2.moveonjoy.com/MTV_LIVE/index.m3u8",
    type: "m3u8"
  },
  {
    name: "MYX",
    logo: "https://raw.githubusercontent.com/Raulabdul666/Drmpicture/refs/heads/main/Picsart_24-10-17_14-58-30-674.jpg",
    category: "MUSIC",
    streamUrl: "https://myxnola-abscbn-ono.amagi.tv/index.m3u8",
    type: "m3u8"
  },
];

export const categories = ["LocalChannel", "NEWS", "SPORTS", "MOVIES", "KIDS", "LIFESTYLE", "ASIAN FOREIGN", "MUSIC"];
