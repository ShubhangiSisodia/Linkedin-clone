<template>
  <header class="bg-white w-full 2xl:max-w-[50%] 2xl:mx-auto">
    <div class="bg-white h-full m-auto flex justify-between items-center">
      <!--Left-->
      <div class="flex items-center">
        <a href="/" class="logo text-4xl mr-1.5">
          <i class="fab fa-linkedin text-blue-500"></i>
        </a>
        <div class="search bg-gray-200 mt-1 px-1 rounded flex">
          <i class="fas fa-search p-1 flex justify-center items-center"></i>
          <input type="text" placeholder="Search" class="bg-transparent p-1 outline-none" />
        </div>
      </div>

      <!--RIght-->
      <div class="h-full flex justify-center items-center">
        <!-- Nav -->
        <ul class="h-full flex justify-center items-center">
          <li class="h-full border-b-2 border-black">
            <a
              href="#"
              class="h-full flex flex-col justify-between items-center text-center text-black p-1 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"
                ></path>
              </svg>

              <span> Home </span>
            </a>
          </li>

          <li class="h-full">
            <a
              href="#"
              class="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"
                ></path>
              </svg>

              <span> My Network </span>
            </a>
          </li>

          <li class="h-full">
            <a
              href="#"
              class="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"
                ></path>
              </svg>

              <span> Jobs </span>
            </a>
          </li>

          <li class="h-full">
            <a
              href="#"
              class="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"
                ></path>
              </svg>

              <span> Messaging </span>
            </a>
          </li>

          <li class="h-full">
            <a
              href="#"
              class="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"
                ></path>
              </svg>

              <span> Notifications </span>
            </a>
          </li>

          <li class="h-full">
            <a
              href="#"
              class="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1 px-2"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                alt="Me"
                class="w-7 h-7 rounded-full"
              />

              <span>
                Me
                <i class="fas fa-caret-down"></i>
              </span>
            </a>
          </li>

          <li class="h-full border-l-2 border-gray-300">
            <a
              href="#"
              class="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1 px-2"
            >
              <i class="fas fa-th text-xl relative"></i>
              <span>
                Work
                <i class="fas fa-caret-down"></i>
              </span>
            </a>
          </li>
        </ul>

        <!-- right-most -->
        <a
          href="#"
          class="w-32 h-full p-1 flex justify-center items-center text-yellow-900 text-center hover:underline"
        >
          Try Premium Free for 1 Month
        </a>
      </div>
    </div>
  </header>
</template>
