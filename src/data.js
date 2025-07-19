const blogs = [
  {
    id: "1",
    data: "Data",
    date: "Minggu, 03 Des 2023",
    title: "Mengerjakan Endurance Test dari Cretivox",
    paragrap1:
      "Saya sedang mengerjakan Endurance Test dari<a href='https://cretivox.com/home/' target='blank' class='font-bold text-indigo-500 hover:underline'> CRETIVOX </a> untuk bisa mengikuti program internshipbatchSE, di dalam test ini saya di suruh untuk membuat sebuah aplikasi web tentang product yang telah di sipakan data nya dari API End Point DummyJson, di dalam tugas ini saya harus menampilkan semua data yang ada di dalam DummyJson ke dalam sebuah landing page yang berbentuk card.",
    paragrap2:
      "Di dalam card ini saya harus menampilkan Thumbnail, Brand, Price, Stock dan satu buah tombol untuk bisa menampilkan semua detail data berdasarkan id ketika di klik, pertama saya membuat code agar saya bisa terhubung ke API <a href='https://dummyjson.com/docs/products' target='blank' class='font-bold text-indigo-500 hover:underline'>DummyJson</a>, setelah aplikasi saya sudah terhubung menggunakan API, kemudian saya menampilkan semua data yang ada di dalam API DummyJson dan menyeleksi apa saja yang akan saya tampilkan ke dalam card yang sudah saya miliki.",
    paragrap3:
      "Setelah semua data yang saya mau sudah tampil di dalam card, kemudian saya sedikit mendesign card tersebut agar sedikit enak di lihat, untuk dibagian menampilkan semua data dan menyeleksi apa saja data yang ingin saya tampilkan, menurut saya tidak ada kesulitan, karena saya sudah tau caranya dan sudah tau apa yang harus saya lakukan. ",
    paragrap4:
      "Namun saya baru menemukan sedikit kesulitan ketika saya akan menampilkan detail sebuah product, tapi itu hanya sebentar, setelah saya baca baca documentasi dari DummyJson dan sumber lainnya, saya baru bisa mengerjakan bagian untuk menampilkan product detail ini, sebenarnya sangat mudah kalo kita mengerti atau baca documentasi yang sudah di sediakan, namun ini adalah hal yang bagi saya menarik ketika sedang membuat sebuah aplikasi web.",
    paragrap5:
      "Saya mengerjakan tugas Endurance Test ini hanya dalam waktu beberpa jam saja, padahal waktu pengumpulan nya itu 2 hari, namun yang membuat saya lama yaitu ketika saya sedang mendesign web aplikasi ini di dalam figma, awalnya saya akan mengumpulkan se adanya, tapi menurut saya itu tidak baik, dan ahirnya saya membuat design web nya terlebih dahulu di dalam figma, kemudian saya implementasikan ke dalam code saya menggunakan tailwindcss, oh iyaa.. aplikasi web ini saya buat dengan technology ReactJs, NextJs dan Tailwindcss, kalo yang mau liat hasilnya, cek aja <a href='https://github.com/dhearr/cretivox.git' target='blank' class='font-semibold text-indigo-500 hover:underline'>disini</a>.",
    footer:
      "Terimakasih sudah membaca blog saya, sampai jumpa di blog selanjutnya...",
  },
  {
    id: "2",
    data: "Data",
    date: "Minggu, 03 Des 2023",
    title: "Memperbaiki bug pada web portfolio sendiri",
    paragrap1:
      "Di hari minggu yang tenang dan santai ini saya memperbaiki bug yang ada di dalam web portfolio saya sendiri, bug nya adalah responsive terhandap gambar background yang ada di bagian pertama, dan saya juga mengganti gambar background dengan yang baru yang bersumber dari Flowbite.",
    paragrap2:
      "setelah selesai memperbaiki bug nya, saya juga mengganti beberapa descripsi yang ada di dalam web portfolio saya, kemudian saya menambahkan project baru ke dalam web portfolio saya yaitu project dari Test Endurance Cretivox, kalo kalian ingin lihat hasilnya kalian bisa kunjungi repositori github saya <a href='https://github.com/dhearr/cretivox.git' target='blank' class='font-semibold text-indigo-500 hover:underline'>disini</a>",
    paragrap3:
      "Yaaa beginilah saya kalo di hari weekend, memperbaiki atau menambahkan fitur baru ke dalam web potfolio, oh iyaa... blog ini juga bagian dari fitur baru haha, mungkin setiap hari saya akan membuat atau menceritakan ke seharian saya disini, mungkin tidak ada yang menarik dari apa yang saya tuliskan disini, tapi ini akan jadi taman bermain saya.",
    paragrap4:
      "oh iyaa saya juga akan memberikan ilmu atau pengalaman saya yang sedikit ini ke dalam blog ini, show tunggu aja yaa gaesss.....",
    paragrap5: "",
    footer:
      "Terimakasih sudah membaca blog saya, sampai jumpa di blog selanjutnya...",
  },
  {
    id: "3",
    data: "data",
    date: "Senin, 4 Des 2023",
    title: "Belajar tentang apa itu Rest API",
    paragrap1:
      "Hari ini saya sedang belajar apa itu Rest API dan juga belajr JSON, kenapa saya belajar materi ini, karena menurut saya ini sangat menting untuk saya sebagai seorang front-end developer, banyak hal menarik ketika saya sedang beljar materi ini, karena di dalam materi ini kita belajar cara mengolah sebuah data dan mengambil data dari server untuk bisa kita tampilkan ke halaman depan. ",
    paragrap2:
      "Disini saya tidak bisa menyebutkan semuanya tentang apa yang sedang saya pelajari saat ini, intinya jika kalian ingin sama belajar tentang apa itu Rest API dan JSON, kalian bisa kunjungi saja Youtube chanel nya WPU, kalian bisa cek <a href='https://youtube.com/playlist?list=PLFIM0718LjIW7AsIbnhFg15t9yx4H-sQ0&si=cMzaAk2I0jTOfeLH' target='blank' class='font-semibold text-indigo-500 hover:underline'>disini</a>",
    footer:
      "Terimakasih sudah membaca blog saya, sampai jumpa di blog selanjutnya...",
  },
];

const author = {
  name: "DHEA RAMDANI",
  title: "Front-end Developer",
};

const self = {
  head: "I am a web developer from Ciamis, West Java, I have always been fascinated by technology and how it works, despite my educational background which is a graduate from the field of informatics engineering studies, I decided to pursue a career in web development, especially in the front-end developer.",
  body: "As a web developer, especially a front-end developer, I love new challenges. I believe in every new challenge there will be an opportunity to learn new things to grow and develop.",
};

const experience = {
  description:
    "That is my career or work experience after graduating as a postgraduate student in the field of informatics engineering. Next I will pursue my dream and have a career as a front-end developer.",
};

const work = {
  description:
    "Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly describe with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with diferent technologies, and manage projects effectively.",
};

const contacts = {
  description: [
    {
      title: "Suka ngoding, mau ngoding bareng?",
    },
    {
      title: "Have any project ideas?",
    },
    {
      title: "Ask something?",
    },
  ],
  contact: [
    {
      title: "Contact me via",
      email: "@dhearr27@gmail.com",
      instagram: "@dherrrrrrrrrrrr",
    },
  ],
};

const credits = [
  {
    title: "Developer",
    name: "DHEA RAMDANI",
  },
  {
    title: "Designer",
    name: "DHEA RAMDANI",
  },
  {
    title: "Backsound Music",
    name: "Pixabay, Gaming Sound FX",
  },
  {
    title: "Sound Effects",
    name: "Pixabay",
  },
  {
    title: "Assets Provider",
    name: "Piskel, Animated GIF Maker",
  },
  {
    title: "Fonts Provider",
    name: "Google Fonts",
  },
  {
    title: "Enggine/Libraries",
    name: "ReactJS, Framer Motion, TailwiindCss, ViteJS, Vercel, Github",
  },
  {
    title: "Sponsor",
    name: "Mamah Bapa Tercinta",
  },
  {
    title: "Special Thanks",
    name: "Web Programing Unpas, Dea Afrizal, Helmi Satria, ChatGPT, DeanKT, dan seseorang yang sudah dengan yang lain:(",
  },
];

export { blogs, author, self, experience, work, contacts, credits };
