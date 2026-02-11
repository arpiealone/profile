// Import images for Class X
import naikkelasX from '../assets/gallery/class-x/naik_kelas.jpeg';
import femaleX from '../assets/gallery/class-x/female.jpeg';
import maleX from '../assets/gallery/class-x/male.jpeg';

// Import images for Class XI
import ultahXI from '../assets/gallery/class-xi/ulang_tahun_bu_nella.jpeg';
import juaraXI from '../assets/gallery/class-xi/juara_1_lomba.jpeg';
import lombaXI from '../assets/gallery/class-xi/lomab_kreativitas.jpeg';

// Import images for Class XII
import olahragaXII from '../assets/gallery/class-xii/praktek_olahraga_XII.jpeg';
import kelulusanXII from '../assets/gallery/class-xii/foto_kelulusan.jpeg';
import fashionXII from '../assets/gallery/class-xii/fashion_show.jpeg';

export const homeGalleryConfig = {
  x: [
    { 
      src: naikkelasX, 
      alt: "Naik kelas XI",
      className: "object-cover",
      objectPosition: "center 70%",
      caption: "Fig 1.1 — Naik Kelas XI Nih Bos Senggol Dong"
    },
    { 
      src: femaleX, 
      alt: "Seri Siswi",
      className: "object-cover",
      objectPosition: "center center",
      caption: "Fig 1.2 — Ciwi-ciwi"
    },
    { 
      src: maleX, 
      alt: "Seri Siswa",
      className: "object-cover",
      objectPosition: "center 60%",
      caption: "Fig 1.3 — Pria Sigma"
    }
  ],
  xi: [
    { 
      src: juaraXI, 
      alt: "Juara 1 Lomba",
      className: "object-cover",
      objectPosition: "center 50%",
      caption: "Fig 2.1 — Menang Lomba Agustusan"
    },
    { 
      src: ultahXI, 
      alt: "Ulang Tahun Bu Nella",
      className: "object-cover",
      objectPosition: "center center",
      caption: "Fig 2.2 — Ulang Tahun Bu Nella"
    },
    { 
      src: lombaXI, 
      alt: "Lomba Kreativitas",
      className: "object-cover",
      objectPosition: "center center",
      caption: "Fig 2.3 — Kreativitas Tanpa Batas"
    },
],
  xii: [
    { 
      src: olahragaXII, 
      alt: "Praktek Olahraga",
      className: "object-cover",
      objectPosition: "center 70%",
      caption: "Fig 3.1 — Olahraga Bangsat"
    },
    { 
      src: kelulusanXII, 
      alt: "Foto Kelulusan",
      className: "object-cover",
      objectPosition: "center 70%",
      caption: "Fig 3.2 — First Picture of Class XII"
    },
    { 
      src: fashionXII, 
      alt: "Fashion Show",
      className: "object-cover",
      objectPosition: "center 70%",
      caption: "Fig 3.3 — Fashion Show"
    }
  ]
};
